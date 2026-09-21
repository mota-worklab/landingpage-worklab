import test from "node:test";
import assert from "node:assert/strict";
import { sendContact } from "./contact.js";

const valid = { name: "Cliente", email: "cliente@example.com", service: "web", message: "Preciso de uma aplicação para minha empresa." };
const env = { RESEND_API_KEY: "test-key", CONTACT_FROM_EMAIL: "site@example.com", CONTACT_TO_EMAIL: "equipe@example.com" };
const forbiddenFetch = () => { assert.fail("Não deveria chamar o Resend"); };

test("recusa dados inválidos e honeypot antes de chamar o Resend", async () => {
  for (const body of [null, [], {}, { ...valid, email: "inválido" }, { ...valid, service: "__proto__" }, { ...valid, message: "curta" }, { ...valid, website: "spam" }]) {
    assert.equal((await sendContact(body, env, forbiddenFetch)).status, 400);
  }
});
test("configuração ausente não simula sucesso", async () => {
  assert.equal((await sendContact(valid, {}, forbiddenFetch)).status, 503);
});
test("usa destinatário do servidor e reply_to do visitante", async () => {
  const result = await sendContact({ ...valid, to: "attacker@example.com" }, env, async (url, options) => {
    assert.equal(url, "https://api.resend.com/emails");
    const email = JSON.parse(options.body);
    assert.deepEqual(email.to, [env.CONTACT_TO_EMAIL]);
    assert.equal(email.from, env.CONTACT_FROM_EMAIL);
    assert.equal(email.reply_to, valid.email);
    assert.ok(email.text.includes(valid.message));
    return { ok: true, json: async () => ({ id: "test-email-id" }) };
  });
  assert.deepEqual(result, { status: 200, body: { success: true } });
});
test("falhas do provedor e da rede não expõem detalhes nem retornam sucesso", async () => {
  for (const fetcher of [
    async () => ({ ok: false }),
    async () => { throw new Error("secret provider details"); },
    async () => ({ ok: true, json: async () => ({}) }),
  ]) {
    const result = await sendContact(valid, env, fetcher);
    assert.equal(result.status, 502);
    assert.ok(!JSON.stringify(result).includes("secret"));
  }
});

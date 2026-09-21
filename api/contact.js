import { sendContact } from "../server/contact.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método não permitido." });
  }
  if (!/^application\/json(?:\s*;|$)/i.test(req.headers["content-type"] || "")) {
    return res.status(415).json({ error: "Envie os dados em JSON." });
  }
  if (req.headers["sec-fetch-site"] === "cross-site") {
    return res.status(403).json({ error: "Origem não permitida." });
  }
  let body;
  try {
    if (Buffer.byteLength(JSON.stringify(req.body) || "") > 24000) {
      return res.status(413).json({ error: "Mensagem muito longa." });
    }
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: "Dados de contato inválidos." });
  }
  const result = await sendContact(body, process.env);
  return res.status(result.status).json(result.body);
}

const services = {
  web: "Aplicação Web",
  mobile: "App Mobile",
  landing: "Landing Page",
  integracoes: "Sistema / Integração",
  outro: "Ainda estou explorando",
};

export async function sendContact(body, env, fetcher = fetch) {
  const fail = (status, error) => ({ status, body: { error } });
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return fail(400, "Dados de contato inválidos.");
  }
  const { name, email, service, message, website = "" } = body;
  if (typeof website !== "string" || website) {
    return fail(400, "Não foi possível enviar. Use o WhatsApp para conversar com a gente.");
  }
  if (
    typeof name !== "string" || name.trim().length < 2 || name.length > 100 ||
    typeof email !== "string" || email.length > 200 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof service !== "string" || !Object.hasOwn(services, service) ||
    typeof message !== "string" || message.trim().length < 10 || message.length > 4000
  ) {
    return fail(400, "Confira o nome, o e-mail, o serviço e a mensagem (mínimo de 10 caracteres).");
  }
  if (!env.RESEND_API_KEY || !env.CONTACT_FROM_EMAIL || !env.CONTACT_TO_EMAIL) {
    return fail(503, "O formulário está temporariamente indisponível. Fale com a gente pelo WhatsApp.");
  }
  try {
    const response = await fetcher("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL,
        to: [env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Novo contato — ${services[service]}`,
        text: [
          "Novo contato pelo site mota worklab",
          `Nome: ${name.trim()}`,
          `E-mail: ${email}`,
          `Serviço: ${services[service]}`,
          "", "Mensagem:", message.trim(),
        ].join("\n"),
      }),
    });
    if (!response.ok) {
      return fail(502, "Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.");
    }
    const result = await response.json();
    if (!result.id) throw new Error("Missing email confirmation");
    return { status: 200, body: { success: true } };
  } catch {
    return fail(502, "Não conseguimos confirmar o envio. Tente novamente ou fale pelo WhatsApp.");
  }
}

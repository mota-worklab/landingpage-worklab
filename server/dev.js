import { createServer } from "node:http";
import handler from "../api/contact.js";

createServer(async (req, res) => {
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (value) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(value));
  };
  if (req.url !== "/api/contact") return res.status(404).json({ error: "Não encontrado." });
  const chunks = [];
  let size = 0;
  try {
    for await (const chunk of req) {
      size += chunk.length;
      if (size > 24000) return res.status(413).json({ error: "Mensagem muito longa." });
      chunks.push(chunk);
    }
    req.body = Buffer.concat(chunks).toString("utf8");
    await handler(req, res);
  } catch {
    if (!res.writableEnded) res.status(500).json({ error: "Não foi possível enviar agora." });
  }
}).listen(3001, "127.0.0.1", () => {
  console.log("API de contato: http://127.0.0.1:3001/api/contact");
});

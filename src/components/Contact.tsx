import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  LoaderCircle,
  MessageCircle,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Eyebrow, Reveal } from "./ui";
import ContactChannels from "./ContactChannels";

const serviceOptions = [
  ["web", "Aplicação Web"],
  ["mobile", "App Mobile"],
  ["landing", "Landing Page"],
  ["integracoes", "Sistema / Integração"],
  ["outro", "Ainda estou explorando"],
];

export default function Contact() {
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const pending = useRef(false);
  useEffect(() => {
    const readHash = () => {
      if (!window.location.hash.startsWith("#contato?")) return;
      const value =
        new URLSearchParams(window.location.hash.split("?")[1]).get(
          "servico",
        ) ?? "";
      if (serviceOptions.some(([key]) => key === value)) setService(value);
      document.getElementById("contato")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    pending.current = true;
    setSending(true);
    setSubmitted(false);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(typeof result.error === "string" ? result.error : "Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.");
      }
      form.reset();
      setService("");
      setSubmitted(true);
    } catch (cause) {
      setError(cause instanceof Error && cause.name === "Error"
        ? cause.message
        : "Não conseguimos confirmar o envio. Tente novamente ou fale pelo WhatsApp.");
    } finally {
      pending.current = false;
      setSending(false);
    }
  }
  return (
    <section id="contato" className="contact-section section-anchor">
      <div className="container contact-layout">
        <Reveal>
          <Eyebrow>VAMOS CONSTRUIR JUNTOS</Eyebrow>
          <h2>
            Bora tirar sua
            <br />
            ideia{" "}
            <span>
              do papel
              <svg viewBox="0 0 290 17" aria-hidden="true">
                <path d="M3 13Q130 1 285 8" />
              </svg>
            </span>
            ?
          </h2>
          <p>
            Conta pra gente o que você tem em mente.
            <br />O próximo grande produto pode começar aqui.
          </p>
          <div className="contact-benefits">
            <span>
              <MessageCircle size={18} /> Uma conversa de gente para gente.
            </span>
            <span>
              <Clock3 size={18} /> Sem compromisso. Sem papo complicado.
            </span>
          </div>
          <ContactChannels />
          <div className="contact-signature">
            <span className="signature-symbol">
              <img
                src="/logo.png"
                alt=""
                width="348"
                height="190"
                loading="lazy"
              />
            </span>
            <div>
              Ideias boas merecem
              <br />
              <strong>um parceiro à altura.</strong>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <form className="contact-form" onSubmit={onSubmit} aria-busy={sending}>
            <h3>Seu próximo passo começa aqui.</h3>
            <p>Preencha os campos e conte sobre o projeto.</p>
            <fieldset disabled={sending} className="contact-fields">
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="website">Deixe este campo vazio
                <input id="website" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="form-row">
              <label htmlFor="name">
                Seu nome
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  required
                  minLength={2}
                  maxLength={100}
                />
              </label>
              <label htmlFor="email">
                E-mail profissional
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@empresa.com"
                  required
                  maxLength={200}
                />
              </label>
            </div>
            <label htmlFor="service">
              O que vamos construir?
              <select
                id="service"
                name="service"
                value={service}
                onChange={(event) => setService(event.target.value)}
                required
              >
                <option value="" disabled>
                  Selecione o tipo de projeto
                </option>
                {serviceOptions.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="message">
              Conte um pouco sobre sua ideia
              <textarea
                id="message"
                name="message"
                placeholder="Qual problema você quer resolver? O que já tem em mente?"
                rows={4}
                required
                minLength={10}
                maxLength={4000}
              />
            </label>
            <button type="submit" className="button button-dark w-full" disabled={sending}>
              {sending ? "Enviando…" : "Vamos conversar"}
              {sending ? <LoaderCircle size={18} className="animate-spin" aria-hidden="true" /> : <ArrowUpRight size={18} aria-hidden="true" />}
            </button>
            </fieldset>
            {error && <p role="alert" className="form-error">{error}</p>}
            {submitted && (
              <div role="status" className="form-success">
                <CheckCircle2 size={21} />
                <div>
                  <strong>Mensagem enviada!</strong>
                  <p>
                    Obrigado pelo contato. Vamos responder pelo e-mail informado.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Fechar aviso"
                  onClick={() => setSubmitted(false)}
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

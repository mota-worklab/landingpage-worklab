import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MessageCircle,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Eyebrow, Reveal } from "./ui";

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
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
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
          <form className="contact-form" onSubmit={onSubmit}>
            <h3>Seu próximo passo começa aqui.</h3>
            <p>Preencha os campos e conte sobre o projeto.</p>
            <div className="form-row">
              <label htmlFor="name">
                Seu nome
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  required
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
            <button type="submit" className="button button-dark w-full">
              Vamos conversar
              <ArrowUpRight size={18} />
            </button>
            <p className="form-note">
              Formulário demonstrativo. Nenhum dado será enviado ou armazenado.
            </p>
            {submitted && (
              <div role="status" className="form-success">
                <CheckCircle2 size={21} />
                <div>
                  <strong>Tudo certo com o preenchimento!</strong>
                  <p>
                    Esta é uma demonstração. Sua mensagem não foi enviada. O
                    canal de contato será disponibilizado em breve.
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

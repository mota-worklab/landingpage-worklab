import { Clock3, MessageCircle } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";
import ContactChannels from "./ContactChannels";

export default function Contact() {
  return (
    <section id="contato" className="contact-section section-anchor">
      <div className="container contact-layout contact-layout-single">
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
            Chama a gente no WhatsApp ou no Instagram e conta o que você tem em mente.
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
      </div>
    </section>
  );
}

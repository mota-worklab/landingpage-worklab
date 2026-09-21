import { ScanSearch, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import { Eyebrow, Reveal, Button } from "./ui";

const steps = [
  {
    icon: ScanSearch,
    title: "Primeiro, a gente escuta.",
    description:
      "Entendemos sua ideia, seu negócio e o que precisa acontecer. Escopo e expectativas na mesma página.",
    label: "DESCOBERTA",
  },
  {
    icon: PenTool,
    title: "A ideia ganha forma.",
    description:
      "Desenhamos jornadas e interfaces. Você vê, testa e aprova antes da primeira linha de código.",
    label: "DESIGN",
  },
  {
    icon: Code2,
    title: "Código com propósito.",
    description:
      "Construímos em ciclos curtos, com entregas visíveis. Você acompanha de perto, sem caixa-preta.",
    label: "DESENVOLVIMENTO",
  },
  {
    icon: Rocket,
    title: "No ar. E do seu lado.",
    description:
      "Publicamos, documentamos e acompanhamos. Seu produto pronto para rodar e continuar evoluindo.",
    label: "ENTREGA & SUPORTE",
  },
];

export default function Process() {
  return (
    <section id="processo" className="section process-section section-anchor">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <Eyebrow>SEM COMPLICAR</Eyebrow>
              <h2>
                Um processo claro.
                <br />
                <span className="text-muted-heading">
                  Do “e se?” ao “tá no ar”.
                </span>
              </h2>
            </div>
            <p>
              Você participa das decisões.
              <br />A gente faz acontecer.
            </p>
          </div>
        </Reveal>
        <div className="process-grid">
          {steps.map(({ icon: Icon, title, description, label }, index) => (
            <Reveal key={label}>
              <article className="process-step">
                <div className="step-top">
                  <span>0{index + 1}</span>
                  <Icon size={23} strokeWidth={1.5} />
                  {index < 3 && <ArrowRight className="step-arrow" size={16} />}
                </div>
                <span className="step-label">{label}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mid-cta">
            <div>
              <span className="mini-label">
                SEU PRÓXIMO PASSO COMEÇA COM UM PAPO.
              </span>
              <h2>
                Tem uma ideia boa aí?
                <br />A gente tem o código.
              </h2>
              <Button>Agendar uma conversa</Button>
            </div>
            <div className="cta-art" aria-hidden="true">
              <div className="cta-orbit" />
              <div className="cta-orbit second" />
              <span className="cta-code">&lt;/&gt;</span>
              <span className="cta-label label-idea">ideia.ts</span>
              <span className="cta-label label-live">
                <span /> produto no ar
              </span>
              <span className="cta-star">✳</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

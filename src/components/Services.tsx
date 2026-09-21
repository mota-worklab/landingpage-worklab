import {
  ArrowUpRight,
  AppWindow,
  Smartphone,
  MousePointer2,
  Blocks,
} from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const services = [
  {
    icon: AppWindow,
    title: "Aplicações Web",
    description:
      "Plataformas rápidas, seguras e prontas para crescer junto com o seu negócio.",
    tags: "SAAS · PLATAFORMAS · PORTAIS",
    value: "web",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description:
      "Sua ideia na palma da mão. Experiências fluidas para quem usa iOS e Android.",
    tags: "IOS · ANDROID · MULTIPLATAFORMA",
    value: "mobile",
  },
  {
    icon: MousePointer2,
    title: "Landing Pages",
    description:
      "Design que chama atenção. Performance que transforma visitas em oportunidades.",
    tags: "CONVERSÃO · VELOCIDADE · SEO",
    value: "landing",
  },
  {
    icon: Blocks,
    title: "Sistemas & Integrações",
    description:
      "Menos planilhas, mais resultado. Conectamos ferramentas e simplificamos operações.",
    tags: "AUTOMAÇÃO · APIS · SISTEMAS",
    value: "integracoes",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section section-anchor">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <Eyebrow>O QUE A GENTE FAZ</Eyebrow>
              <h2>
                Seu desafio.
                <br />
                <span className="text-muted-heading">
                  Nossa próxima construção.
                </span>
              </h2>
            </div>
            <p>
              Do site que apresenta sua marca ao sistema
              <br className="hidden lg:block" /> que move sua operação. Sob
              medida, de verdade.
            </p>
          </div>
        </Reveal>
        <div className="services-grid">
          {services.map(
            ({ icon: Icon, title, description, tags, value }, index) => (
              <Reveal key={title}>
                <article className="service-card">
                  <div className="flex items-start justify-between">
                    <span className="service-icon">
                      <Icon size={25} strokeWidth={1.6} />
                    </span>
                    <span className="card-number">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="service-tags">{tags}</span>
                  <a
                    href={`#contato?servico=${value}`}
                    className="service-link"
                    aria-label={`Saiba mais sobre ${title}`}
                  >
                    Saiba mais
                    <ArrowUpRight size={19} />
                  </a>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

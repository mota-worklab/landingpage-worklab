import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const projects = [
  {
    name: "B. Leal Produções",
    type: "LANDING PAGE · EVENTOS",
    description: "Uma vitrine para serviços de iluminação, estrutura e produção de eventos, com acesso direto ao orçamento.",
    image: "/bleal-foto.png",
    alt: "Landing page da B. Leal Produções com identidade visual escura e destaque para produção de eventos",
    width: 1899,
    height: 900,
  },
  {
    name: "Expresso Petrolina",
    type: "LANDING PAGE · TRANSPORTES",
    description: "Serviços, frota e filiais em uma página que apresenta a transportadora e facilita a solicitação de cotações.",
    image: "/expresso-img.png",
    alt: "Landing page da Expresso Petrolina com caminhões da frota e botão para solicitar cotação",
    width: 1838,
    height: 869,
  },
  {
    name: "HM7",
    type: "LANDING PAGE · LOGÍSTICA",
    description: "Uma apresentação direta da operação logística, conectando quem precisa transportar à equipe comercial.",
    image: "/hero-hm7.png",
    alt: "Landing page da HM7 com caminhão na estrada e chamada para conhecer os serviços de logística",
    width: 1904,
    height: 896,
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="section section-anchor">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <Eyebrow>MENOS PROMESSA. MAIS PRODUTO.</Eyebrow>
              <h2>
                Ideias que viram
                <br />
                <span className="text-muted-heading">
                  experiências de verdade.
                </span>
              </h2>
            </div>
            <div>
              <p>Landing pages que desenvolvemos para nossos clientes.</p>
            </div>
          </div>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project) => (
            <Reveal key={project.name}>
              <article className="project-card">
                <div className="project-visual">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    width={project.width}
                    height={project.height}
                    decoding="async"
                  />
                </div>
                <div className="project-info">
                  <span className="project-category">{project.type}</span>
                  <a
                    href="#contato?servico=landing"
                    className="project-title"
                    aria-label={`Conversar sobre um projeto como ${project.name}`}
                  >
                    <h3>{project.name}</h3>
                    <span>
                      <ArrowUpRight size={22} />
                    </span>
                  </a>
                  <p>{project.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

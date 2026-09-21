import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const projects = [
  {
    name: "Orbit Finance",
    type: "PLATAFORMA WEB · FINTECH",
    description: "Uma visão simples para uma operação financeira complexa.",
    metric: "−40%",
    result: "de tempo em tarefas operacionais",
    image: "/project-orbit.svg",
    className: "project-blue",
    alt: "Conceito de dashboard financeiro Orbit com receitas e gráfico de evolução",
    service: "web",
  },
  {
    name: "Move App",
    type: "APLICATIVO MOBILE · WELLNESS",
    description: "Um incentivo diário para colocar o bem-estar em movimento.",
    metric: "3×",
    result: "mais engajamento na jornada",
    image: "/project-move.svg",
    className: "project-purple",
    alt: "Conceito de aplicativo Move com planos de treino e acompanhamento de atividade",
    service: "mobile",
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
              <p>Um pouco do que podemos construir juntos.</p>
          
            </div>
          </div>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project) => (
            <Reveal key={project.name}>
              <article className="project-card">
                <div className={`project-visual ${project.className}`}>
                  <span className="project-pill">PROJETO CONCEITO</span>
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    width="640"
                    height="440"
                  />
                </div>
                <div className="project-info">
                  <span className="project-category">{project.type}</span>
                  <a
                    href={`#contato?servico=${project.service}`}
                    className="project-title"
                    aria-label={`Conversar sobre um projeto como ${project.name}`}
                  >
                    <h3>{project.name}</h3>
                    <span>
                      <ArrowUpRight size={22} />
                    </span>
                  </a>
                  <p>{project.description}</p>
                  <div className="project-result">
                    <strong>{project.metric}</strong>
                    <span>
                      {project.result}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

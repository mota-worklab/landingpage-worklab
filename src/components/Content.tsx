import { ArrowUpRight, BookOpen } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

export const contentGuides = [
  {
    id: "custo-software-sob-medida",
    category: "GUIA DE PLANEJAMENTO",
    title: "Quanto custa desenvolver um software sob medida?",
    description:
      "O investimento depende do escopo, das integrações, do nível de segurança e da complexidade da experiência. Uma descoberta bem feita separa o essencial do que pode entrar depois e transforma a ideia em uma proposta clara.",
  },
  {
    id: "ideia-de-app",
    category: "GUIA DE PRODUTO",
    title: "Como tirar uma ideia de app do papel?",
    description:
      "O primeiro passo é entender o problema e para quem o aplicativo será útil. Depois, organizamos a primeira versão, desenhamos os fluxos principais e desenvolvemos uma base que possa evoluir com o uso real.",
  },
  {
    id: "sistema-interno",
    category: "GUIA DE OPERAÇÃO",
    title: "Quando uma empresa precisa de um sistema interno?",
    description:
      "Planilhas desconectadas, retrabalho e informações espalhadas costumam indicar que a operação cresceu. Um sistema interno pode centralizar processos, integrar ferramentas e dar mais visibilidade às decisões do time.",
  },
  {
    id: "prazo-landing-page",
    category: "GUIA DE CONVERSÃO",
    title: "Quanto tempo leva para criar uma landing page?",
    description:
      "O prazo varia conforme conteúdo, identidade visual, integrações e nível de personalização. O trabalho começa pela mensagem e pela estrutura da página, depois passa por design, desenvolvimento, performance e publicação.",
  },
] as const;

export default function Content() {
  return (
    <section id="conteudos" className="section content-section section-anchor">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <Eyebrow>CONTEÚDO PARA DECIDIR MELHOR</Eyebrow>
              <h2>
                Antes de construir,
                <br />
                <span className="text-muted-heading">vale entender.</span>
              </h2>
            </div>
            <p>
              Respostas diretas para quem está planejando um produto digital,
              uma nova operação ou o próximo passo do negócio.
            </p>
          </div>
        </Reveal>
        <div className="content-grid">
          {contentGuides.map((guide) => (
            <Reveal key={guide.id}>
              <article id={guide.id} className="content-card">
                <div className="content-card-top">
                  <span className="content-icon" aria-hidden="true">
                    <BookOpen size={19} strokeWidth={1.7} />
                  </span>
                  <span className="content-category">{guide.category}</span>
                </div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <a
                  href="#contato"
                  className="content-link"
                  aria-label={`Conversar sobre: ${guide.title}`}
                >
                  Falar sobre este desafio
                  <ArrowUpRight size={17} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Check, GitBranch, ShieldCheck, Terminal } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

export default function About() {
  return (
    <section id="sobre" className="about-section section-anchor">
      <div className="container">
        <Reveal>
          <div className="about-layout">
            <div>
              <Eyebrow dark>MAIS QUE UMA FÁBRICA DE SOFTWARE</Eyebrow>
              <h2>
                Seu time técnico.
                <br />
                <span>Do primeiro dia em diante.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                A mota worklab conecta visão de negócio e engenharia de
                software. A gente pergunta, propõe e constrói junto porque um
                bom produto começa com uma boa parceria.
              </p>
              <div className="about-checks">
                <span>
                  <Check size={16} /> Comunicação direta
                </span>
                <span>
                  <Check size={16} /> Decisões compartilhadas
                </span>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="stats-grid">
          <Reveal>
            <div className="stat">
              <strong>
                100<span>%</span>
              </strong>
              <h3>Código do seu negócio</h3>
              <p>Repositório, documentação e autonomia.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="stat">
              <strong>
                0<span> caixas-pretas</span>
              </strong>
              <h3>Transparência em cada etapa</h3>
              <p>Você sabe o que está sendo construído.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="stat">
              <strong>
                CI/CD
                <GitBranch size={28} />
              </strong>
              <h3>Qualidade a cada entrega</h3>
              <p>Automação para publicar com confiança.</p>
            </div>
          </Reveal>
        </div>
        <div className="about-bottom">
          <span>
            <ShieldCheck size={17} /> Segurança desde a arquitetura
          </span>
          <span>
            <Terminal size={17} /> Tecnologia escolhida para o seu desafio
          </span>
        </div>
      </div>
    </section>
  );
}

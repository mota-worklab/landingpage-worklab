import {
  ArrowUpRight,
  Check,
  CheckCheck,
  Code2,
  Command,
  GitBranch,
  Layers3,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "./ui";

function Dashboard() {
  return (
    <div
      className="hero-art"
      role="img"
      aria-label="Ilustração de um dashboard de projeto com etapas concluídas, código e deploy publicado"
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <span className="art-cross cross-one">+</span>
      <span className="art-cross cross-two">+</span>
      <div className="dashboard">
        <div className="dashboard-top">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>
            <ShieldCheck size={10} /> app.seuproduto.com.br
          </span>
          <MoreHorizontal size={15} />
        </div>
        <div className="dashboard-body">
          <div className="dashboard-sidebar">
            <span className="dash-brand">
              <Command size={20} />
            </span>
            <LayoutDashboard size={17} />
            <Layers3 size={17} />
            <GitBranch size={17} />
            <Settings2 size={17} />
            <span className="sidebar-avatar">M</span>
          </div>
          <div className="dashboard-content">
            <div className="dash-breadcrumb">
              Workspace <span>/</span> Visão geral <Search size={13} />
            </div>
            <div className="dash-heading">
              <div>
                <span>VAMOS CONSTRUIR ALGO INCRÍVEL</span>
                <h3>
                  Seu próximo grande projeto<span>.</span>
                </h3>
              </div>
              <span className="dash-add">
                <Plus size={15} />
              </span>
            </div>
            <div className="dash-metrics">
              <div>
                <span>Progresso do projeto</span>
                <strong>
                  92<small>%</small>
                  <span>↗ 24%</span>
                </strong>
                <div className="progress-track">
                  <i />
                </div>
              </div>
              <div>
                <span>Entregas concluídas</span>
                <strong>
                  24<small>/26</small>
                </strong>
                <span className="metric-status">
                  <i /> No caminho certo
                </span>
              </div>
            </div>
            <div className="chart-card">
              <div>
                <strong>Evolução do produto</strong>
                <span>
                  Últimas 6 semanas <span>⌄</span>
                </span>
              </div>
              <div className="chart-graph">
                <span className="chart-y">
                  100%
                  <br />
                  75%
                  <br />
                  50%
                  <br />
                  25%
                </span>
                <svg viewBox="0 0 340 98" aria-hidden="true">
                  <defs>
                    <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#547db7" stopOpacity=".35" />
                      <stop offset="100%" stopColor="#547db7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 83H340 M0 56H340 M0 29H340 M0 2H340"
                    stroke="#e6ebf2"
                    strokeDasharray="3 4"
                    fill="none"
                  />
                  <path
                    d="M0 90 C30 90 30 70 65 72 S100 44 134 48 S170 29 207 32 S253 3 286 9 S320 1 340 1 V98 H0Z"
                    fill="url(#chart-fill)"
                  />
                  <path
                    d="M0 90 C30 90 30 70 65 72 S100 44 134 48 S170 29 207 32 S253 3 286 9 S320 1 340 1"
                    stroke="#497ac0"
                    strokeWidth="2.5"
                    fill="none"
                  />
                </svg>
              </div>
              <div className="chart-x">
                <span>Sem 1</span>
                <span>Sem 2</span>
                <span>Sem 3</span>
                <span>Sem 4</span>
                <span>Sem 5</span>
                <span>Sem 6</span>
              </div>
            </div>
            <div className="dash-task">
              <span>
                <Check size={11} /> Design aprovado
              </span>
              <span>
                <Check size={11} /> API integrada
              </span>
              <span className="task-active">
                <span /> Deploy
              </span>
              <span className="dash-avatars">
                <i>J</i>
                <i>M</i>
                <i>+2</i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="code-float">
        <div>
          <span>
            <i /> build.ts
          </span>
          <Code2 size={15} />
        </div>
        <code>
          <span className="code-purple">const</span> ideia ={" "}
          <span className="code-light">'seu próximo passo'</span>;<br />
          <br />
          <span className="code-purple">await</span> mota.
          <span className="code-blue">build</span>({"{"}
          <br />
          &nbsp; qualidade: <span className="code-light">'de verdade'</span>,
          <br />
          &nbsp; status: <span className="code-light">'no ar 🚀'</span>
          <br />
          {"}"});
        </code>
      </div>
      <div className="deploy-float">
        <span className="deploy-icon">
          <CheckCheck size={22} />
        </span>
        <div>
          <strong>Deploy realizado!</strong>
          <span>Sua ideia já está no ar.</span>
        </div>
        <span className="deploy-spark">✦</span>
      </div>
      <div className="art-caption">
        <span />
        <span>DA IDEIA AO PRIMEIRO DEPLOY</span>
        <ArrowUpRight size={13} />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="hero section-anchor">
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-badge">
            <span /> Fábrica de software. Parceiro de verdade.
          </div>
          <h1>
            Transformamos.
            <br />
            ideias em
            <br />
            <span className="hero-highlight">
              software.
              <svg viewBox="0 0 250 18" aria-hidden="true">
                <path d="M3 12Q114 -1 246 8M17 17Q121 6 211 13" />
              </svg>
            </span>
          </h1>
          <p>
            Do primeiro rascunho ao software
            rodando<br className="hidden xl:block" /> com engenharia, parceria
            e zero enrolação.
          </p>
          <div className="hero-actions">
            <Button>Solicitar orçamento</Button>
            <a href="#projetos" className="text-button">
              Ver projetos
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-icon">
              <Zap size={13} fill="currentColor" />
            </span>
            Você cuida do negócio. A gente cuida do código.
          </div>
        </div>
        <Dashboard />
      </div>
      <div className="container hero-bottom">
        <span>BOAS IDEIAS MERECEM SAIR DO PAPEL.</span>
        <a href="#servicos">
          Conheça o que fazemos<span>↓</span>
        </a>
        <span className="hero-bottom-right">
          <span /> FEITO PARA IR ALÉM
        </span>
      </div>
    </section>
  );
}

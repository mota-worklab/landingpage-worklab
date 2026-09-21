import { ArrowUpRight } from "lucide-react";
import { Logo } from "./ui";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo light />
            <p>
              Boas ideias. Código bem feito.
              <br />
              Produtos que fazem a diferença.
            </p>
            <span className="footer-made">
              FEITO COM PROPÓSITO. E UM POUCO DE CAFÉ.
            </span>
          </div>
          <div className="footer-column">
            <h3>O que construímos</h3>
            <a href="#contato?servico=web">Aplicações Web</a>
            <a href="#contato?servico=mobile">Apps Mobile</a>
            <a href="#contato?servico=landing">Landing Pages</a>
            <a href="#contato?servico=integracoes">Sistemas & Integrações</a>
          </div>
          <div className="footer-column">
            <h3>A Mota</h3>
            <a href="#sobre">Sobre a gente</a>
            <a href="#processo">Nosso processo</a>
            <a href="#projetos">Projetos</a>
            <a href="#faq">Perguntas frequentes</a>
          </div>
          <div className="footer-column footer-talk">
            <h3>Vamos conversar?</h3>
            <p>
              Seu próximo projeto
              <br />
              começa com um oi.
            </p>
            <a href="#contato">
              Fale com a gente
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} mota worklab. Todos os direitos
            reservados.
          </span>
          <a href="#inicio">
            Feito no Brasil. Pronto para o mundo.<span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

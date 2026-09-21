import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./ui";

const links = [
  ["Serviços", "servicos"],
  ["Processo", "processo"],
  ["Projetos", "projetos"],
  ["Sobre", "sobre"],
  ["Contato", "contato"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container flex h-22 items-center justify-between gap-5">
          <Logo />
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 lg:flex"
          >
            {links.map(([label, id]) => (
              <a className="nav-link" href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="button button-small button-dark hidden sm:inline-flex"
          >
            Solicitar orçamento
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="mobile-menu"
          aria-label="Navegação mobile"
          className="mobile-menu"
          hidden={!open}
        >
          {links.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={17} />
            </a>
          ))}
          <a
            href="#contato"
            className="button button-primary"
            onClick={() => setOpen(false)}
          >
            Solicitar orçamento
            <ArrowUpRight size={18} />
          </a>
        </nav>
      </header>
      {scrolled && !open && (
        <a
          href="#contato"
          className="mobile-quote button button-primary sm:hidden"
        >
          Solicitar orçamento <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      )}
    </>
  );
}

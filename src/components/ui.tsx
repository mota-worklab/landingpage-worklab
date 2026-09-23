import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`logo ${light ? "logo-light text-white" : ""}`}
      aria-label="mota worklab — início"
    >
      <span className="logo-image-wrap">
        <img
          className="logo-image"
          src={light ? "/logo-branca.png" : "/logo.png"}
          alt=""
          width="348"
          height="190"
        />
      </span>
      <span>
        mota<span className="logo-divider">/</span>
        <span className="logo-worklab">worklab</span>
        <span className="logo-period">.</span>
      </span>
    </a>
  );
}

export function Button({
  children,
  href = "#contato",
  secondary = false,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`button ${secondary ? "button-secondary" : "button-primary"} ${className}`}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

export function spotlightMove(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

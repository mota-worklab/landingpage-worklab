import { Star, Quote } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const testimonials = [
  {
    text: "“A sensação é de ter um time de tecnologia dentro da empresa. Da primeira conversa à entrega, tudo muito claro e próximo.”",
    name: "Marina Oliveira",
    role: "Fundadora · startup de serviços",
    initials: "MO",
    color: "avatar-peach",
  },
  {
    text: "“O que era uma operação cheia de planilhas virou um sistema simples de usar. Finalmente conseguimos focar no que faz o negócio crescer.”",
    name: "Rafael Costa",
    role: "Diretor de operações · PME",
    initials: "RC",
    color: "avatar-blue",
  },
  {
    text: "“Não foi só executar o que pedimos. Foi entender o problema, questionar e chegar com uma solução melhor. Essa parceria faz diferença.”",
    name: "Julia Santos",
    role: "Product Manager · produto digital",
    initials: "JS",
    color: "avatar-purple",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <Eyebrow>PARCERIAS QUE FAZEM SENTIDO</Eyebrow>
              <h2>
                Bom código aproxima.
                <br />
                <span className="text-muted-heading">Boas relações ficam.</span>
              </h2>
            </div>
            <p className="testimonial-disclaimer">
              Depoimentos fictícios para demonstração.
              <br />
              Este espaço vai receber histórias reais.
            </p>
          </div>
        </Reveal>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <Reveal key={item.name}>
              <figure className="testimonial-card">
                <div className="flex items-center justify-between">
                  <span
                    className="stars"
                    role="img"
                    aria-label="Avaliação ilustrativa: 5 de 5 estrelas"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                  <Quote size={24} strokeWidth={1.2} aria-hidden="true" />
                </div>
                <blockquote>{item.text}</blockquote>
                <figcaption>
                  <span className={`avatar ${item.color}`} aria-hidden="true">
                    {item.initials}
                  </span>
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.role}</small>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

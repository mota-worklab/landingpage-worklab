import { ArrowUpRight, Plus } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const questions = [
  [
    "Quanto tempo leva para desenvolver meu projeto?",
    "Depende do escopo e das integrações. Uma landing page costuma ser mais rápida do que um aplicativo ou sistema completo. Depois da descoberta, você recebe um cronograma com etapas, entregas e dependências antes de decidir.",
  ],
  [
    "Como funciona o orçamento?",
    "Começamos com uma conversa para entender seu objetivo, prioridades e contexto. A partir disso, preparamos uma proposta com escopo, investimento e condições. Se a ideia ainda estiver aberta, podemos definir uma primeira versão menor para validar o caminho.",
  ],
  [
    "Preciso ter a ideia completamente definida?",
    "Não. Você pode chegar com um problema, uma referência ou uma ideia no papel. A etapa de descoberta serve para organizar as prioridades e transformar esse ponto de partida em um plano de produto.",
  ],
  [
    "Quais tecnologias vocês usam?",
    "Escolhemos a stack de acordo com o desafio, considerando manutenção, segurança e crescimento. React, TypeScript e tecnologias web modernas fazem parte das opções. A escolha e os motivos ficam claros na proposta técnica.",
  ],
  [
    "O código-fonte e o produto serão meus?",
    "A proposta prevê a entrega do código-fonte desenvolvido para o projeto, com acesso ao repositório e documentação. Condições de propriedade, componentes de terceiros e licenças são detalhados no contrato.",
  ],
  [
    "Vocês oferecem suporte depois da entrega?",
    "Sim. Podemos combinar acompanhamento, manutenção e novas funcionalidades após o lançamento. O período, os canais de atendimento e o que está incluído são definidos na proposta, sem deixar dúvidas para depois.",
  ],
];

export default function FAQ() {
  return (
    <section id="faq" className="section faq-section section-anchor">
      <div className="container faq-layout">
        <Reveal>
          <Eyebrow>SEM PONTO DE INTERROGAÇÃO</Eyebrow>
          <h2>
            Pode perguntar.
            <br />
            <span className="text-muted-heading">A gente responde.</span>
          </h2>
          <p className="faq-intro">
            Algumas respostas antes do nosso primeiro papo.
          </p>
          <a href="#contato" className="text-button">
            Ainda tem uma dúvida? Vamos conversar
            <ArrowUpRight size={18} />
          </a>
        </Reveal>
        <Reveal>
          <div className="faq-list">
            {questions.map(([question, answer], index) => (
              <details key={question} name="faq" className="faq-item">
                <summary>
                  <span className="faq-number">0{index + 1}</span>
                  <h3>{question}</h3>
                  <Plus size={19} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

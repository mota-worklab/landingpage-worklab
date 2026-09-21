# PROMPT — Landing Page "Mota Workflow"

Você é um(a) engenheiro(a) de front-end + designer de produto. Construa uma
landing page de conversão, one-page, totalmente responsiva, para a empresa
abaixo. Entregue código limpo, componentizado e pronto para produção.

## 1. Sobre a empresa
- Nome: **Mota Workflow**
- O que faz: fábrica de software sob demanda — desenvolvimento de aplicações
  web e mobile, sistemas internos, landing pages e integrações.
- Posicionamento: parceiro técnico que transforma ideia em produto rodando,
  com qualidade de engenharia (arquitetura sólida, CI/CD, segurança) e prazo.
- Público: fundadores de startups, pequenas e médias empresas e times que
  precisam terceirizar ou acelerar desenvolvimento.
- Objetivo da página: gerar leads qualificados → CTA principal
  "Solicitar orçamento" / "Agendar conversa".

## 2. Stack e entrega
- React + TypeScript + Vite + TailwindCSS.
- Componentes separados por seção (Hero, Services, Process, etc.).
- Sem dependências pesadas; ícones via lucide-react.
- Animações sutis de entrada (fade/slide on scroll) — pode usar
  Intersection Observer ou framer-motion.
- Código semântico e acessível (landmarks, alt, contraste AA, foco visível).
- Mobile-first. Testar em 375px, 768px e 1440px.
- SEO básico: title, meta description, Open Graph, favicon, headings
  hierárquicos, lazy-load em imagens.

## 3. Identidade visual
Inspiração nos exemplos: tipografia grande e ousada, muito respiro (white
space), cards arredondados (border-radius ~16–24px), sombras suaves,
um accent color vivo sobre base neutra, seções escuras alternando com claras
para criar ritmo. Estética tech moderna, limpa, confiável — nada poluído.

- **Paleta (troque o ACCENT se quiser):**
  - Base clara: #FFFFFF / #F6F7F9
  - Base escura: #0C0E12 (seções dark)
  - Texto: #0C0E12 (claro) / #E7EAEE (dark) / cinza #6B7280 (secundário)
  - **ACCENT primário: #7BExemplo → sugiro um verde-limão elétrico (#A3E635)
    OU azul elétrico (#2563EB). Use como cor de marca em botões, links,
    ícones e destaques.**
- **Tipografia:** sans-serif moderna e geométrica. Headings em peso
  bold/extrabold (títulos hero podem chegar a 56–72px no desktop);
  corpo 16–18px, altura de linha confortável. Sugestão de fontes:
  "Inter", "Sora", "Space Grotesk" ou "Satoshi".
- **Tom de voz do copy:** direto, confiante e humano, com leve pegada
  dev-friendly (referência AbacatePay). Frases curtas. Sem jargão vazio.

## 4. Estrutura (seções, de cima para baixo)

1. **Navbar (sticky, translúcida ao rolar)**
   - Logo "Mota Workflow" à esquerda.
   - Links: Serviços · Processo · Projetos · Sobre · Contato.
   - Botão de destaque à direita: "Solicitar orçamento".
   - Menu hambúrguer no mobile.

2. **Hero**
   - Badge pequeno acima do título (ex: "Fábrica de software").
   - Título grande em 2–3 linhas, com uma palavra em ACCENT
     (ex: "Tiramos seu produto **do papel** e colocamos no ar").
   - Subtítulo de 1–2 linhas explicando o serviço.
   - Dois CTAs: primário "Solicitar orçamento" + secundário
     "Ver projetos".
   - Visual à direita: mockup/ilustração 3D ou dashboard estilizado
     (pode ser placeholder). Elementos flutuantes com micro-animação.

3. **Faixa de prova social / logos**
   - "Empresas e times que confiam na gente" + fileira de logos
     (placeholders em tons de cinza).

4. **Serviços ("O que a gente faz")**
   - Grid de 4 cards com ícone, título e descrição curta:
     Aplicações Web · Apps Mobile · Landing Pages · Sistemas & Integrações.
   - Cada card com link "Saiba mais".

5. **Processo ("Como trabalhamos")**
   - 4 passos numerados: Descoberta → Design → Desenvolvimento → Entrega
     & Suporte. Layout horizontal no desktop, empilhado no mobile.

6. **Banner CTA intermediário (seção dark)**
   - Fundo escuro, título chamativo + ilustração, botão
     "Agendar uma conversa". Serve para quebrar o ritmo da página.

7. **Projetos / Case study**
   - 2–3 cards de projeto com imagem, nome, categoria e 1 resultado
     em número grande (ex: "-40% de tempo de processo"). Placeholders.

8. **Diferenciais / Stats**
   - Faixa com 3–4 métricas grandes em ACCENT
     (ex: "+30 projetos entregues", "100% código próprio", "CI/CD sempre").

9. **Depoimentos**
   - Grid/carrossel de depoimentos com avatar, nome, cargo e texto curto
     (estilo mural do AbacatePay). Placeholders.

10. **FAQ**
    - Acordeão com 5–6 perguntas frequentes (prazo, orçamento, stack,
      suporte pós-entrega, etc.).

11. **CTA final + formulário de contato**
    - Título forte ("Bora tirar sua ideia do papel?").
    - Formulário simples: nome, e-mail, mensagem + botão enviar
      (pode ser mockado). Ou botão de WhatsApp/e-mail.

12. **Footer**
    - Logo, tagline curta, colunas de links (Serviços, Empresa, Contato),
      redes sociais, e-mail, copyright.

## 5. Regras finais
- Nada de texto lorem ipsum sem sentido: escreva copy real e coerente em
  português para cada seção.
- Priorize hierarquia visual e conversão: o CTA principal deve estar sempre
  a um clique de distância.
- Entregue tudo em um único projeto rodável, com instruções de execução.
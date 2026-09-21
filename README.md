# mota worklab

Landing page em português construída com React, TypeScript, Vite, Tailwind CSS e Lucide. Fontes Inter e Space Grotesk hospedadas pelo próprio projeto; ilustrações SVG locais, sem requisições a bancos de imagem.

## Executar

Requer Node.js 22.12+ e npm.

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite (normalmente http://localhost:5173).

```bash
npm run build   # verifica TypeScript e gera dist/
npm run preview # serve o build para revisão
```

Publique a pasta `dist/` em qualquer hospedagem estática. Não há rotas de servidor ou variáveis de ambiente obrigatórias.

## Estrutura

- `src/components/`: componentes por seção e elementos compartilhados.
- `src/styles.css`: Tailwind, tokens de marca, componentes visuais e layouts responsivos.
- `public/`: logos oficiais `logo.png` e `logo-branca.png`, imagem social e mockups originais em SVG. A versão branca também é utilizada como favicon.
- `index.html`: título, descrição e metadados Open Graph.

## Interações e acessibilidade

Menu mobile com estado anunciado e fechamento por Escape; FAQ com elementos nativos `details` e `summary`; links de serviço que selecionam o assunto do contato; validação nativa de campos; retorno acessível do formulário; link para pular navegação; foco visível; animações com Intersection Observer respeitando `prefers-reduced-motion`.

## Conteúdo de demonstração e publicação

Marcas, projetos, métricas dos projetos e depoimentos são exemplos explicitamente identificados. Substitua-os por referências verificadas antes da publicação comercial.

O formulário é **demonstrativo**: valida os campos e mostra um aviso, sem enviar nem armazenar dados. Para receber leads, conecte `onSubmit` em `src/components/Contact.tsx` a um backend ou serviço de formulários. Adicione estados de envio, erro e sucesso real e uma política de privacidade compatível com a integração escolhida.

E-mail, WhatsApp e perfis sociais não foram inventados. Ao definir os canais oficiais, inclua-os em `Footer.tsx` e `Contact.tsx`.

Antes de publicar, configure o domínio definitivo, URL canônica e `og:url` em `index.html`; use a URL absoluta de `public/social-card.png` (1200 × 630) em `og:image` para compatibilidade com redes sociais.

A identidade visual usa o nome **mota worklab** e o azul principal **#031B43**. A logo `public/logo.png` aparece nos fundos claros do cabeçalho e da seção de contato; `public/logo-branca.png` aparece no rodapé e na imagem de compartilhamento, sobre fundo azul, além do favicon.

## Validação realizada

- Build de produção e verificação de TypeScript.
- Chromium em 375, 768 e 1440 px: sem rolagem horizontal; logo carregada e proporções preservadas.
- Menu mobile (abertura, Escape e navegação), seleção de serviço, FAQ e formulário demonstrativo.
- Auditoria automática com axe para WCAG A/AA: nenhuma violação encontrada nas três larguras. A auditoria automática não substitui revisão manual completa.

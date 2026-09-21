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

O frontend é estático, mas o formulário precisa da rota de servidor `/api/contact`. O projeto inclui uma função para Vercel em `api/contact.js`; publicar somente `dist/` não habilita o envio.

## Estrutura

- `src/components/`: componentes por seção e elementos compartilhados.
- `src/styles.css`: Tailwind, tokens de marca, componentes visuais e layouts responsivos.
- `public/`: logos oficiais `logo.png` e `logo-branca.png`, imagem social e mockups originais em SVG. A versão branca também é utilizada como favicon.
- `index.html`: título, descrição e metadados Open Graph.

## Interações e acessibilidade

Menu mobile com estado anunciado e fechamento por Escape; FAQ com elementos nativos `details` e `summary`; links de serviço que selecionam o assunto do contato; validação nativa de campos; retorno acessível do formulário; link para pular navegação; foco visível; animações com Intersection Observer respeitando `prefers-reduced-motion`.

## Conteúdo de demonstração e publicação

Marcas, projetos, métricas dos projetos e depoimentos são exemplos explicitamente identificados. Substitua-os por referências verificadas antes da publicação comercial.

O formulário envia nome, e-mail, serviço e mensagem ao Resend pelo servidor. A resposta de sucesso aparece somente após o provedor aceitar o e-mail (isso não garante entrega na caixa de entrada). Em falhas, os campos são preservados.

## Configurar o Resend

1. Crie uma chave de envio no Resend e verifique o domínio remetente.
2. Copie `.env.example` para `.env.local` e preencha `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` e `CONTACT_TO_EMAIL`. O remetente pode usar o formato `mota worklab <site@seu-dominio.com>`; o destinatário deve ser um único e-mail da equipe.
3. Execute `npm run dev:api` em um terminal e `npm run dev` em outro. O Vite encaminha `/api` para o servidor local na porta 3001. `npm run preview` serve apenas o frontend.
4. Na Vercel, importe o projeto como Vite, configure as mesmas três variáveis no ambiente de publicação e faça o deploy. A pasta `api/` é publicada como função de servidor. Para outra hospedagem, adapte a rota a partir de `server/contact.js`.

Não coloque a chave no React, em variáveis com prefixo `VITE_` ou no Git. `.env.local` já é ignorado. O visitante é usado como `reply_to`, permitindo responder diretamente ao contato; remetente e destinatário são controlados pelo servidor.

Há validação no servidor, limite de tamanho, bloqueio de POST cross-site de navegadores e campo honeypot. O honeypot é uma proteção básica: antes de expor o endpoint publicamente, configure limitação de requisições no provedor de hospedagem para reduzir abuso. O formulário não inclui armazenamento em banco de dados.

Execute `npm test` para verificar validação, configuração ausente e respostas do Resend com requisições simuladas, sem enviar e-mails. Para testar a entrega real, configure as credenciais e envie pelo formulário.

Referências: [API de envio do Resend](https://resend.com/docs/api-reference/emails/send-email) e [funções Node.js da Vercel](https://vercel.com/docs/functions/runtimes/node-js).

WhatsApp **(75) 99891-5461** e Instagram **@motaworklab** estão disponíveis na seção de contato e no rodapé. Os links são centralizados em `src/components/ContactChannels.tsx`.

Antes de publicar, configure o domínio definitivo, URL canônica e `og:url` em `index.html`; use a URL absoluta de `public/social-card.png` (1200 × 630) em `og:image` para compatibilidade com redes sociais.

A identidade visual usa o nome **mota worklab** e o azul principal **#031B43**. A logo `public/logo.png` aparece nos fundos claros do cabeçalho e da seção de contato; `public/logo-branca.png` aparece no rodapé e na imagem de compartilhamento, sobre fundo azul, além do favicon.

## Validação realizada

- Build de produção e verificação de TypeScript.
- Chromium em 375, 768 e 1440 px: sem rolagem horizontal; logo carregada e proporções preservadas.
- Menu mobile (abertura, Escape e navegação), seleção de serviço, FAQ e formulário demonstrativo.
- Auditoria automática com axe para WCAG A/AA: nenhuma violação encontrada nas três larguras. A auditoria automática não substitui revisão manual completa.

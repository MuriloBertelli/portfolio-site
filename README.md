# Portfólio — Murilo Bertelli

Portfólio narrativo em Next.js, React e TypeScript. A página percorre a trajetória em engenharia, Fórmula SAE, software e segurança de aplicações, seguida por projetos e contato.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para verificar a entrega:

```bash
npx tsc --noEmit
npm run lint
npm run format:check
npm run build
```

O lint cobre a arquitetura ativa do site. Componentes antigos de interface ainda presentes no repositório não fazem parte da página atual.

## Estrutura editorial

- `lib/portfolio-content.ts`: textos, capítulos, cases e ferramentas com grau de evidência.
- `app/page.tsx`: composição da página.
- `components/sections/laptop-sequence.tsx`: sequência de cinco quadros ligada ao scroll e painel do laboratório Kali.
- `public/img/story/`: fotos otimizadas para web, com orientação corrigida e metadados removidos.
- `public/img/alienware/`: quadros otimizados da sequência do notebook.
- `docs/ux-portfolio-redesign.md`: decisões de jornada e conteúdo.

A seção do notebook tem apresentação estática em telas pequenas e quando o usuário prefere movimento reduzido. O conteúdo permanece legível sem JavaScript.

## Conteúdo e privacidade

O material de referência está em `E:\04-dev\docs_for_portfolio`. O dossiê auditado da pasta separa código revisado, documentação, estudos e propostas. Os cases corporativos do site usam texto genérico e não publicam achados, nomes de clientes ou imagens internas. As fotos originais não são servidas publicamente; somente os WebP sem metadados estão em `public/`.

O formulário de contato usa a função Netlify em `netlify/functions/send-email.js`; o envio real depende da configuração das variáveis do ambiente Netlify.

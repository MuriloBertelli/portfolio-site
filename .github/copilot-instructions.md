# Copilot instructions — portfolio-site

Purpose: quick, actionable guidance to help AI coding agents be productive in this repo.

- Repo type: Next.js (app router, `next` v16) TypeScript + Tailwind CSS site. Top-level app is in `app/` (server-rooted by default). UI primitives live in `ui/` and page-level components live in `components/`.
- Hosting & serverless: Netlify Functions live in `netlify/functions/`. The contact function is `send-email.js` and uses the `resend` package.

Quick start
- Install: `npm install`
- Dev: `npm run dev` (runs `next dev`)
- Build: `npm run build` (runs `next build`)
- Start production server locally: `npm run start` (after build)
- Lint: `npm run lint` (runs `eslint .`)

Environment variables used
- `RESEND_API_KEY` — Resend API key for `netlify/functions/send-email.js`.
- `EMAIL_TO` (optional) — recipient for contact form; defaults to `mrlbertelli@gmail.com` in the function.
- `EMAIL_FROM` (optional) — sender override for Resend.

Netlify functions / local testing
- Functions live in `netlify/functions/` (example: `send-email.js`). The exported handler uses `export { handler }` and expects POST JSON: `{ name, email, message }`.
- To test functions locally install Netlify CLI and run `netlify dev` from repo root (ensure `.env.local` or environment contains `RESEND_API_KEY`). When running `netlify dev`, the contact endpoint will be available at `/.netlify/functions/send-email`.
- Example cURL (against Netlify dev):
  `curl -X POST http://127.0.0.1:8888/.netlify/functions/send-email -H "Content-Type: application/json" -d '{"name":"Test","email":"a@b.com","message":"hi"}'`

Important code patterns and conventions
- `app/` is Next's app router. Files under `app/` are server components by default; any file with `"use client";` at the top is a client component (see `app/page.tsx`, `components/navbar.tsx`).
- Section IDs are in Portuguese and are used for scroll / active nav state. If you rename a section id in `app/page.tsx`, update `components/navbar.tsx` accordingly (IDs: `home`, `sobre`, `experiencias`, `projetos`, `competencias`, `educacao`, `contato`).
- `ui/` contains shared primitives and wrappers (Radix-based components, consistent styling). Prefer `ui/*` components for shared behavior instead of duplicating markup.
- Path alias: `@/*` maps to repo root (`tsconfig.json`). Imports use `@/components/...` or `@/ui/...` throughout the codebase.
- CSS/Tailwind: Tailwind is used (see `app/globals.css` and `styles/globals.css`). Tailwind version is in `package.json` (v4); follow existing utility class patterns.

Integration notes
- Email: `netlify/functions/send-email.js` uses the `resend` npm package and `resend.emails.send({ from, to, subject, text, html })`. Keep payload shape the same; the handler already validates `name`, `email`, `message`.
- Analytics: `@vercel/analytics` is imported in `app/layout.tsx`. If deploying to Netlify, confirm whether you want to keep Vercel analytics or swap for another provider.

Build-time caveats
- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` — the build intentionally ignores TS errors. Pay attention to type correctness in edits because CI may not fail on TS errors.
- `images.unoptimized: true` disables Next image optimization; images are served as-is.

Developer workflow hints
- Editing UI: change a primitive in `ui/` to update consistent behavior across pages.
- Page sections: modify `components/sections/*` for page content. `app/page.tsx` wires these sections and controls the active-section logic.
- Updating metadata: site metadata lives in `app/layout.tsx` (title, description, icons).
- Lint before PR: run `npm run lint`. There are no automated tests in the repo; rely on manual preview via `npm run dev` and Netlify function checks.

Examples from the codebase
- `netlify/functions/send-email.js` expects a POST with `name,email,message` and uses `RESEND_API_KEY`:
  - file: `netlify/functions/send-email.js`
- `app/page.tsx` contains the scroll listener that sets `activeSection` and mounts all `components/sections/*`.
- `components/navbar.tsx` is a client component that uses the `activeSection` prop to highlight nav items.

When editing make-small-change recommendations
- Avoid renaming section IDs without updating `Navbar` and any direct `document.getElementById` references.
- Prefer using existing `ui/*` components for new UI pieces (buttons, inputs, toasts) to keep styles consistent.

If something is missing
- Ask for where/how this repo is deployed (Netlify site settings) and whether `@vercel/analytics` is intentional.
- Provide any CI config or Netlify build settings if available to expand deploy-specific instructions.

Please review these instructions and tell me any missing details or preferences to iterate.

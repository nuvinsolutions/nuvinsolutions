# Nuvin Solutions — Website (Chunk 1: Homepage)

Next.js 16 · React 19 · TypeScript (strict) · Tailwind CSS v4 · Motion · Vercel

## Run

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```

## What is in this chunk

- Design tokens, fonts and base styles: `app/globals.css`, `app/layout.tsx`
- Shell: `components/layout/*` (Navbar with services dropdown, accessible mobile menu, Footer, skip link)
- Homepage sections 01–07: `components/home/*`, copy and content in `data/home.ts`
- Motion tokens and shared wrappers: `lib/motion.ts`, `components/animations/*`

## Edit content

All business copy lives in `data/`. Replace the `PLACEHOLDER:` values in `data/site.ts`
(email, phone, location, socials) and the sample projects in `data/projects.ts` with real ones.
Placeholders render in development only. Add the official logo SVGs to `public/brand/`
and swap the wordmark in `components/layout/Logo.tsx`.

## Coming in later chunks

Services pages, About, Work pages, Contact form + API, legal/SEO files, placeholder guard, QA.

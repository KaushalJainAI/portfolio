# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev         # Vite dev server on http://localhost:5173
npm run build       # Production build to dist/
npm run build:dev   # Build with development mode (source maps, no minify)
npm run preview     # Serve the built dist/ locally
npm run lint        # ESLint over the whole repo (flat config, eslint.config.js)
```

There is no test runner configured — do not invent `npm test`. Type-check happens implicitly as part of `vite build`; for a standalone check run `npx tsc -p tsconfig.app.json --noEmit`.

### Asset uploads (Cloudinary)

```bash
node scripts/uploadToCloudinary.cjs       # uploads raster files (png/jpg/webp/mp4...) from public/ -> portfolio/
node scripts/uploadSvgsToCloudinary.cjs   # uploads SVGs from public/svg/ -> portfolio/svg/
node scripts/uploadResume.cjs             # uploads Kaushal_Jain_Resume.pdf
```

Each writes a `cloudinary_*_links.json` at repo root with the resulting URLs. Requires `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` in `.env` (cloud is `dxhf4srxx`). After uploading, manually paste the new URLs into `src/assets/assetLinks.ts` — nothing reads the JSON automatically.

### Deploy (Cloudflare Pages / Workers Assets)

```bash
npm run build
npx wrangler pages deploy dist
```

SPA fallback is configured via `wrangler.toml` (`not_found_handling = "single-page-application"`). **Do not** add `public/_redirects` with a catch-all `/* /index.html 200` — Cloudflare's Workers Assets validator rejects it as an infinite loop (see [docs/cloudflare-redirects-error.md](docs/cloudflare-redirects-error.md)).

## Architecture

Single-page React 18 + TypeScript portfolio built on Vite 6 with React Router. There is no backend, no API, no state library — every page is a static composition of content from `src/data/projects.json` and image URLs from `src/assets/assetLinks.ts`.

### Routing and page shell

[src/App.tsx](src/App.tsx) wires `BrowserRouter` around a `<Navbar /> + <Routes /> + <Footer />` shell. Route paths come from the `ROUTES` constant in [src/site.ts](src/site.ts) — **always reference `ROUTES.*` rather than hardcoding paths**, because the same file declares `LEGACY_REDIRECTS` that map old `*.html` URLs from the previous static site to the new routes. Unknown paths redirect to home.

`/projects/:slug` is rendered by [src/pages/ProjectDetailPage.tsx](src/pages/ProjectDetailPage.tsx), which looks the slug up in `allProjects` from [src/data/projects.ts](src/data/projects.ts).

### Content model

All project data lives in [src/data/projects.json](src/data/projects.json), typed via the `PortfolioProject` interface in [src/data/projects.ts](src/data/projects.ts). The file exports two pre-filtered arrays:

- `projects` — shown on `/projects` (split by `category === 'personal'` for "Featured" vs "More work")
- `researchProjects` — shown on `/research`
- `allProjects` — used by `ProjectDetailPage` for slug lookup

To add a project, edit `projects.json` and pick the right category (`personal | supporting | research | internship`); no component changes needed.

### Asset pipeline

Images and videos live on Cloudinary, **not** in the repo or git. The single source of truth for which URL a page renders is [src/assets/assetLinks.ts](src/assets/assetLinks.ts), grouped by `projects / profile / skills / personal / decor`. The `decor` group holds reusable SVG accents (mesh gradient, dot grid, divider wave, badge) generated locally and uploaded via `uploadSvgsToCloudinary.cjs`.

Note: `docs/PROJECT_STRUCTURE.md` and `docs/deployment.md` still describe a Google Drive workflow — that's stale. The current flow is Cloudinary, and `public/` is now mostly local-source SVGs (`public/svg/`) plus the resume PDF.

### Page metadata / SEO

Each page calls `usePageMeta(title, description)` from [src/usePageMeta.ts](src/usePageMeta.ts) inside its component body to set `<title>` and `<meta name="description">` on navigation. Add this to any new page you create. Static OG/Twitter/schema markup lives in [index.html](index.html).

### Styling

Tailwind 3 + a hand-written design system in [src/index.css](src/index.css). The palette is defined as CSS variables on `:root` (`--bg`, `--accent: #176b63`, `--support: #c68451`, etc.) — reuse those rather than introducing new hex values. Many semantic classes (`.hero`, `.story-block`, `.skill-grid`, `.line-list`, `.timeline-item`, `.chip c1/c2/c3`, `.media-frame`) are defined in `index.css` and used across pages; prefer composing existing classes over new Tailwind utilities where a pattern already exists.

Path alias: `@` resolves to `src/` (configured in [vite.config.ts](vite.config.ts) and [tsconfig.json](tsconfig.json)).

### Resume

Served same-origin from `/Kaushal_Jain_Resume.pdf` in `public/` so the `download` attribute works. `public/_headers` (Cloudflare) sets `Content-Disposition: attachment`. A Cloudinary fallback URL is exported as `RESUME_URL_CLOUDINARY` in `site.ts` but is not used by the UI.

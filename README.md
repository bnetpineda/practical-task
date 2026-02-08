# Practical Task — Multi-Page Vite Site

Simple multi-page site built with Vite + React, TailwindCSS, and shadcn/ui. Focused on clarity and a scalable folder structure rather than heavy design.

## Project structure

```
src/
  components/
    layout/           # Shared layout pieces (nav, footer, shell)
    ui/               # shadcn/ui primitives (button, etc.)
  lib/                # Utilities (cn helper)
  pages/              # Route-level pages (home, operations)
  routes.tsx          # Centralized route definitions
  main.tsx            # App entry point
  index.css           # Tailwind + CSS variables
```

## Run locally

```bash
npm install
npm run dev
```

## Build and deploy

```bash
npm run build
npm run preview
```

Deployment is standard Vite output in `dist/`. Any static hosting provider (Netlify, Vercel, GitHub Pages, Cloudflare Pages) can serve the `dist` folder.

## Add a new page consistently

1. Create a new page file in `src/pages/` (e.g. `src/pages/about.tsx`).
2. Add the route in `src/routes.tsx` and wrap it with `SiteShell`.
3. Add a nav link in `src/components/layout/site-nav.tsx` if needed.

Example page module:

```tsx
export function AboutPage() {
  return <section>New page content</section>;
}
```

## Notes

- Tailwind + shadcn/ui are wired via `components.json`, `src/index.css`, and `tailwind.config.js`.
- The layout intentionally keeps page structure consistent as more pages are added.

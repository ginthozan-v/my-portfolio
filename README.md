# Ginthozan — Portfolio

An awwwards-style, single-page developer resume. Built with **Vite + React**, **GSAP / ScrollTrigger**, **Lenis** smooth scroll, and **React Three Fiber** for the WebGL hero.

## Requirements
Node **18+** (Node 16 will not run Vite 5). This repo pins Node 20 via `.nvmrc`:

```bash
nvm use      # picks up .nvmrc → Node 20
npm install
npm run dev  # http://localhost:3000
```

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Make it yours
Almost everything lives in **`src/data.js`** — name, role, tagline, stats, projects, experience, socials. Edit that file first.

- **Colors / fonts** → CSS variables at the top of `src/index.css`
- **Accent color** → `--accent` (currently lime `#d8ff3e`)
- **3D hero blob** → `src/components/Scene.jsx`
- **Section copy / structure** → `src/components/*`

## Highlights
- Kinetic-type marquee preloader, gated on real asset load
- Custom blend-mode cursor + magnetic interactive elements
- GSAP scroll-choreographed reveals (word-by-word about, project rows, timeline draw)
- Cursor-following project previews
- Code-split WebGL (Three.js loads lazily, never blocking first paint)
- Fully responsive; cursor/3D gracefully degrade on touch devices

## Structure
```
src/
  data.js            ← your content
  App.jsx            ← page composition
  hooks/useLenis.js  ← Lenis + ScrollTrigger sync
  components/        ← Hero, About, Work, Experience, Contact, ...
```

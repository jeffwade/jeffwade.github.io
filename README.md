# jeffdo.es design

[![CI](https://github.com/jeffwade/jeffwade.github.io/workflows/CI/badge.svg)](https://github.com/jeffwade/jeffwade.github.io/actions)
[![Live](https://img.shields.io/badge/jeffdo.es-live-blue)](https://jeffdo.es)

Design portfolio built with Astro + React. Custom design tokens, dark/light mode, WCAG 2.1 AA.

---

## Tech

- **Astro** — static site generation
- **React** — interactive islands (`client:load`)
- **TypeScript** — strict mode
- **Design tokens** → CSS via [style-dictionary](tokens/README.md)
- **ESLint + pa11y-ci** — lint, typecheck, a11y in CI

---

## Commands

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview build locally |
| `npm run tokens` | Build design tokens → CSS |
| `npm run lint` | ESLint (Astro + React hooks) |
| `npm run typecheck` | TypeScript compile check |
| `npm run a11y` | pa11y-ci (AA=error, AAA=warn) |

---

## CI/CD

GitHub Actions (`.github/workflows/ci.yml`):
- **lint** → ESLint
- **typecheck** → `tsc --noEmit`
- **audit** → `npm audit --audit-level=high`
- **link-check** → lychee
- **a11y** → pa11y-ci (needs lint+typecheck)
- **build** → production build verify

Branch protection on `main` requires: lint, typecheck, build, a11y.

---

## Running Locally (for a11y testing)

```bash
npm run build
npm run preview -- --port 4321 &
sleep 5 && npm run a11y
```

---

## Project Structure

```
src/
├── components/       # React components (homepage/, icons)
├── context/          # React context (mode, highlight)
├── layouts/          # Astro layouts
├── pages/            # Astro pages (index.astro)
└── styles/           # Global CSS + tokens.css
tokens/               # Design tokens (JSON → CSS)
.github/workflows/    # CI pipeline
```

---

## Design System

See [tokens/README.md](tokens/README.md) for color, typography, spacing tokens.

---

## Deploy

Push to `main` → GitHub Pages builds from `dist/` → `jeffdo.es` (via CNAME).

---

## License

MIT
# Legacy — Gatsby + Plasmic (archived)

This directory holds the previous Gatsby v4 + Plasmic codebase, archived during the
migration to Astro + React + MDX.

**Contents:**
- `src/` — the original Gatsby/Plasmic source (pages, components, generated code)
- `gatsby-*.js` — Gatsby configuration files
- `plasmic.json` / `plasmic.lock` — Plasmic codegen configuration
- `package.json` / `package-lock.json` — Gatsby dependency tree

**Why it's here:**
Kept for reference while porting pages and components. None of it runs as part of
the current site. It will be removed in Stage 7 of the migration.

**Do not edit files here.** Any needed change should be made to the Astro/React
equivalent in the root `src/` directory.

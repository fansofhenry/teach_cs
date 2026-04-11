# teach_cs

A proposed community-college computer-science curriculum, published as a
working research site at **[fansofhenry.github.io/teach_cs](https://fansofhenry.github.io/teach_cs/)**.
Built by Henry Fan as a design artifact for doctoral applications in
computing education research, with mentor Prof. Jeff Anderson (Foothill
College Math).

> **A proposal in development — not a currently taught program.** The
> curriculum is the thing being researched. Henry is an Application Support
> Analyst at CVC-OEI / Foothill–De Anza CCD and Jeff Anderson's research
> mentee; he is not currently faculty at any community college.

## What this repo contains

- **Six original courses** for a community-college CS pathway: CS 180 (Intro
  AI), CS 185 (Intro ML), CS 210 (Data Structures & Algorithms), CS 175 (How
  Things Work), Math 2B (Applied Linear Algebra), ENGR 11 (Programming &
  Problem Solving).
- **Four equity-overlay adaptations** of Andrew Ng's Coursera sequence (AI
  For Everyone, ML Specialization, Deep Learning Specialization, Generative
  AI For Everyone).
- **Build a Computer**, a 20-week signature project embedded inside CS 175.
- A **research hub** (`/research`, `/research/modeling-bench`) describing
  the four research questions the curriculum is designed to investigate,
  the working papers in progress, and the PhD timeline.
- A public **log** (`/log`), **philosophy** page, **learning paths**, and
  reading list.

## Stack

- **Next.js 16** (App Router) compiled to a static export (`output:
  "export"`).
- **Tailwind CSS v4** with `@theme inline` tokens and a local design system
  (`ink`, `paper`, `cream`, `red`, etc.).
- **TypeScript** throughout.
- Deployed as **GitHub Pages** under `basePath: "/teach_cs"`. There is no
  server — every route prerenders as static HTML at build time.
- One build-time post-process script (`scripts/fix-og-image.mjs`) renames
  dynamically-generated Open Graph images into the subpath-safe locations
  GitHub Pages needs.

## Architecture notes

- **All content lives in `lib/data/`**, not in JSX. `courses.ts`,
  `philosophy.ts`, `tracks.ts`, `projects.ts`, `research.ts`,
  `modelingBench.ts`, `log.ts`, `peerTraining.ts`, `studentSuccess.ts`.
  Types are consolidated in `lib/data/types.ts`.
- **Page-level components** in `app/<route>/page.tsx` import from
  `lib/data/` and render. The `/courses` catalog uses a client component
  (`CourseCatalog.tsx`) for search/filter state; the rest are server
  components.
- **Shared chrome** (`Navbar`, `Footer`) lives in `components/`. The navbar
  owns a `localStorage`-backed light/dark toggle.
- **OpenGraph images** are generated per-route via Next's
  `opengraph-image.tsx` convention. Because GitHub Pages serves under
  `/teach_cs`, the post-build script rewrites the emitted filenames.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
```

The dev server respects `basePath` — the site is served at
`http://localhost:3000/teach_cs/`.

## Building and deploying

```bash
npm run build   # next build && node scripts/fix-og-image.mjs
```

The build emits a fully static site into `out/`. GitHub Actions (or a
manual `git push` to the `main` branch — Pages is configured to build from
`out/`) publishes the contents of `out/` to `gh-pages`. No runtime.

## A note on framing

Because this site is read by PhD search committees, the repo keeps two
strict framing rules:

1. **Don't overclaim institutional roles.** Henry is a curriculum designer
   and Jeff Anderson's research mentee, not a principal investigator or a
   community-college CS instructor. Any page copy that drifts into "the
   research emerges from teaching six courses" gets corrected to the
   proposal-framing voice. See the `/research` page for the canonical
   phrasing.
2. **Don't flatten original work into adaptation.** The catalog surfaces
   the split between original courses and Andrew Ng adaptations explicitly
   (`lib/data/courses.ts` → `getCoreCourses()` / `getNgAdaptations()`), and
   page copy is expected to name both categories rather than roll up to a
   single number.

If you're editing copy and are unsure which voice applies, start from
`/research` or `/about` — they're the calibrated references.

## Contact

- **Henry Fan** — henry@henryfan.org
- Research portfolio: [fansofhenry.github.io/cs-ed](https://fansofhenry.github.io/cs-ed/)
- GitHub: [@fansofhenry](https://github.com/fansofhenry)

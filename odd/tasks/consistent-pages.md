# Consistent pages with the new landing

Objective: restyle the remaining pages so they match the redesigned landing (tokens, Satoshi + Instrument Serif, pill + serif section headings, surface cards, neutral dark mode).
Branch: zeron/redise-o-de-portfolio-freelance · Delivery strategy: ask-on-risk · Test runner: none (verify with `pnpm build` + Playwright screenshots; no unit tests in repo)

## Specs

- S1. "vamos a ajustar las demas paginas para que sean consistentes con la landing page"
- S2. Pages in scope (assumption derived from S1): `/aboutme`, `/blog`, `/blog/[id]`, `/projects`, `/projects/[id]`, and `404` (currently an empty file).
- S3. Dark mode is unified across the site: neutral graphite surfaces everywhere, no leftover navy (`#1E2637`, `#0B1528`) on restyled pages. (Assistant recommendation, user answered "perfecto" to the landing and asked for S1.)
- S4. Visual language = landing: `font-serif` (Instrument Serif) for display titles, Satoshi for text, tokens `ink / ink-muted / surface / soft / line / on-ink`, `shadow-elevated`, `SectionHeading`-style pill labels, light and dark.
- S5. Content stays intact (real data only, no invented metrics/testimonials). Contact data: use `src/data/contact.ts` where a link is rebuilt; flag any inconsistent emails instead of silently changing them.
- S6. Same width as the landing (layout container, `max-w-5xl`); no horizontal overflow at 320/390/768/1280.
- S7. Do not delete existing components or content without user approval (dead components are only reported).

## Tasks

- [x] T1 · S3,S4 · inline · foundation: neutral dark tokens, hardcoded navy colors, shared `PageHeader`, article/prose theme · commit: cd9678d
- [x] T2 · S1,S4 · delegated (parallel writer) · `/blog` + `/blog/[id]` + `CardArticles` + `NextArticle` · commit: 1a06989
- [x] T3 · S1,S4 · delegated (parallel writer) · `/projects` + `/projects/[id]` + `CardProject` · commit: f7592b1
- [x] T4 · S1,S4 · delegated (parallel writer) · `/aboutme` + `AboutMe` section · commit: 3bbdf01
- [x] T5 · S2 · inline · `404` page · commit: 1b673e7
- [x] T6 · S6 · inline · seam check: build, screenshots of every page (light/dark/mobile), overflow, links · commit: this docs commit

Route declaration: T2–T4 are independent units with disjoint edit surfaces, launched together (writer trigger a), and the parent session is past the ~150k context backstop (writer trigger b). T1, T5, T6 stay inline.

## Log

- L1 (2026-11-13) user: "vamos a ajustar las demas paginas para que sean consistentes con la landing page"
- L2 (2026-11-13) context: landing committed as 87894a3. Findings: three different emails exist (`dandevtech99@gmail.com` landing/nav, `dantech.dev@hotmail.com` aboutme + JSON-LD, `antoniomcs21@hotmail.com` in unused ButtonCv) → flag to user. `404.astro` is empty. Unused after landing: Experience, Projects, Articles sections, ExperienceMap, Skills, DividerLine (still used by old pages until restyled), ButtonMore, ButtonCv, FooterMinimal, Header, LogoLoop/CertificatesSlider/SkillsMap.
- L3 (2026-11-13) verification (T6): `pnpm build` OK; 15 internal links return 200; no horizontal overflow at 320/390/768/1280 on `/`, `/blog`, an article, `/projects`, a project, `/aboutme`, `/no-existe`; no console/page errors; screenshots reviewed light/dark/mobile. Native review is off globally (`gentle-ai review mode status`), so no review was started.
- L4 (2026-11-13) finding: stale tracked `.astro/data-store.json` made dev render the deleted NutriaSoft project until the dev server restarted; regenerated files committed in dff23ce.
- L5 (2026-11-13) pending for the user: three different emails (`dandevtech99@gmail.com`, `dantech.dev@hotmail.com`, `antoniomcs21@hotmail.com` in unused ButtonCv); placeholder data `[Emisor]`/`[año]` in certificates/education collections and missing certificate/article images; unused components (Experience, Projects, Articles, ExperienceMap, Skills, DividerLine, ButtonMore, ButtonCv, FooterMinimal, Header, LogoLoop, CertificatesSlider, SkillsMap) and legacy `src/data/projects.ts`; SEO constants/JSON-LD still say "Frontend".

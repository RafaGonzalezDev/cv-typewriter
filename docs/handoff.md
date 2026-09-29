# Handoff

Regenerated on 2026-09-29 with the `handoff` skill, replacing a stale version that still named a
non-existent `feature/ui-improvements` branch and duplicated the portfolio roadmap.

## Next session focus

Keep `sample.js` aligned with each incoming job posting before applying. The target profile is
frontend engineering (Angular-first for Spanish enterprise and banking, React-friendly for
international postings), with custom agent orchestration frameworks as the differentiator.
PR #4 is open on `feature/cv-frontend-positioning` and waiting for review.

## Current status

- Branch: `feature/cv-frontend-positioning`, pushed to `origin`, with PR #4 open against `main`.
  `main` is at `69d01e3` and is the only other branch.
- Repository workflow: work on a `feature/...` branch and open a PR into `main`. Do not commit
  to `main` directly.
- Commits from 2026-09-29: `refactor(cv): target frontend engineering roles` and
  `docs: update handoff, roadmap and changelog`.
- `active_language` is `en`; the editor's ES/EN selector still switches the preview.
- The ES and EN variants are deliberately kept aligned in content, structure and stack rows.
- Both variants render at 2 pages. `npm run build`, `eslint` and `prettier` are clean.

## Key context

### Positioning

Frontend Engineer, 3+ years in enterprise banking (Angular, TypeScript), with complementary
React. Frontend engineering leads the narrative; custom agent orchestration is the differentiator.

### Content rules

These rules are not documented anywhere else. Apply them when editing CV content.

- **Sensitive wording**: never expose unofficial or not-yet-public internal POC details. Prefer
  generic phrasing such as "agentic automation in enterprise CI/CD workflows", "integration with
  collaborative engineering tools", "automated review and issue-resolution workflows",
  "agent-assisted validation and developer automation". No concrete client-sensitive
  implementation details in CV bullets, README copy, screenshots, demos or public repositories
  without explicit approval.
- **This repository is public**: never commit anything that undercuts the CV's claims. Positively,
  skills that were only explored outside professional work live in the separate
  `Additional Frontend` / `Frontend Adicional` stack row; never promote them into the banking
  experience bullets or the professional summary as professional use, and never present React as
  used in banking. Any doubt about how strong a claim is stays out of the repository rather than
  being written down here.
- **Summary length**: the professional summary is deliberately held at two lines. The ATS keyword
  load is carried by the stack rows and the experience highlights, so shortening the summary does
  not reduce coverage. Prove it by literal term matching against `sample.js` instead of assuming it.
- **Project rendering**: only six projects render, one highlight each (`slice(0, 6)` and
  `highlights.slice(0, 1)` in `services/blockBuilder.js` and `components/CVContent.jsx`). Unused
  project URLs stay defined in `projectUrls` in `sample.js`, so swapping evidence is a one-line edit.
- **Export caveat**: a headless `--print-to-pdf` is **not** a valid preview of the exported CV. It
  does not apply the app's `@media print` stylesheet, so the editor panel leaks into the output.
  Export from the app's own "Export PDF" button instead.

## Artifacts to reference

- `docs/overview/cv-typewriter.md` — architecture, key components and dependencies.
- `docs/overview/portfolio-showcase-roadmap.md` — portfolio evidence phase, the current visible
  project set and the public vs private project split. Source of truth for project evidence.
- `docs/changelog/cv-content.md` — every CV content and positioning change, newest first.
- `docs/adr/ADR-0001-client-side-pagination-for-cv-rendering.md` — client-side pagination decision.
- `README.md` — repo overview, docs index and scripts.

## Suggested skills

- `handoff` to transfer this context again.
- `conventional-commit` before committing.
- `github-pull-request` when opening a branch for review.
- `docs-structure` when recording a change under `docs/`.
- `accessibility` for any editor or preview control changes.

## Open questions

- Should the six-project limit be raised, or should project selection become per-offer presets?
- Is `dotfiles-pi-showcase` worth publishing as public evidence?
- Should the ES variant ever diverge from EN for Spanish-market postings, or stay aligned?

## Verification steps

1. `npx prettier --check src/features/cv-typewriter/sample.js docs/handoff.md`
2. `npm run lint:check` — expect 0 errors and 3 pre-existing warnings in `components/ui/badge.jsx`,
   `components/ui/button.jsx` and `hooks/usePagination.jsx`.
3. `npm run build`
4. `npm run dev`, then read the rendered page count in both languages. The app prints a
   `Page X of Y` label per rendered page, so a headless DOM dump is enough:

   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
     --virtual-time-budget=6000 --dump-dom http://localhost:5173/ \
     | grep -oE "Page [0-9]+ of [0-9]+" | sort -u
   ```

5. Confirm keyword coverage by literal term matching against `sample.js` (61 of 61 tracked terms
   on 2026-09-29).
6. Confirm that no sensitive POC or client-specific detail appears in `sample.js`, `README.md` or
   `docs/`.
7. Export both PDFs from the app and inspect page breaks visually.

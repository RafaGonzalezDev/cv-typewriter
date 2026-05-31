# Handoff

## Next session focus

Continue evolving CV Typewriter as a data-first CV editor and keep Rafa's CV positioned for roles around AI Developer Tooling, Developer Automation, Agentic Workflows, and Software Engineering.

The target profile is not pure AI/ML Engineering. The intended narrative is: frontend/software engineer with enterprise banking experience who applies AI tooling, agents, MCP integrations, local LLM inference, CI/CD automation, and developer productivity workflows to real engineering work.

## Current status

- Active branch: `feature/ui-improvements`.
- Current phase: **portfolio evidence preparation**. The CV structure and positioning are mostly in place; the next work should focus on making the featured projects publicly credible through sanitization, curated previews, or new showcase repositories.
- The app supports bilingual CV content through `cv.languages.es` and `cv.languages.en` in `src/features/cv-typewriter/sample.js`.
- The editor panel includes an ES/EN preview selector.
- PDF export titles include the active language suffix.
- Section labels are localized through normalized CV labels.
- The visible professional summary header was removed; the summary is rendered as direct text below the personal header.
- The CV header now follows a compact Oxford/engineering resume style: centered name plus one contact line with pipe separators.
- Pagination groups experience/project highlights and technical expertise rows to avoid awkward page splits.
- The current visible `projects` section in `src/features/cv-typewriter/sample.js` prioritizes public GitHub evidence: Angular i18n Translator, Local LLM Inference Lab, and CV Typewriter.

## Professional positioning

Use this positioning when editing the sample CV or related documentation:

> Frontend/Software Engineer focused on AI Developer Tooling, Developer Automation, agentic workflows, Model Context Protocol (MCP), local LLM inference, and enterprise frontend architecture.

Relevant strengths to preserve:

- Angular, TypeScript, React, NgRx, microfrontends, Module Federation.
- Enterprise banking environments and high-availability frontend delivery.
- Frontend architecture, governance, hands-on implementation, and delivery ownership.
- AI developer tooling applied to real frontend workflows.
- MCP-based workflows and coding agents.
- Playwright MCP for agent-assisted E2E validation.
- Local LLM inference with `llama.cpp`/`llama-cpp-turboquant` style workflows.
- TypeScript/Node.js CLI tooling, audit logging, permissions, secret redaction, and plugin-oriented agent runtimes.

## Sensitive wording rules

Do not expose unofficial or not-yet-public internal POC details. Prefer generic wording such as:

- "agentic automation in enterprise CI/CD workflows"
- "integration with collaborative engineering tools"
- "automated review and issue-resolution workflows"
- "agent-assisted validation and developer automation"

Avoid concrete client-sensitive implementation details in CV bullets, README files, screenshots, demos, or public repositories unless explicitly approved.

## Project evidence to reference

The next phase is to align project evidence with the CV. The CV can mention strong private work, but public-facing project links should only point to repos that are sanitized and intentionally presented.

Public or showcase-ready candidates:

- `angular-i18n-translator`: public, strong evidence for LLM-based Angular i18n automation.
- `local-llm-inference-lab`: public, strong evidence for local LLM serving, GGUF profiles, OpenAI-compatible checks, and OpenWebUI integration.
- `cv-typewriter`: public, demonstrates developer tooling, JSON-first workflows, PDF export, React/Vite/Tailwind.
- `wcag_design`: public, secondary evidence for accessibility and frontend tooling.
- `mfe-architecture` / `angular-native-federation`: public, useful for frontend platform/architecture roles.

Private or sanitize-before-showing candidates:

- `stride-agent`: strongest AI tooling evidence; TypeScript/Node coding-agent MVP with provider integration, policy-gated tools, audit logging, secret redaction, sessions, and plugins.
- `dotfiles-pi`: valuable Pi extensions and setup CLI; sanitize before publishing.
- `dotfiles-opencode`: valuable OpenCode frameworks and agent orchestration; sanitize before publishing.
- Additional local LLM experiments should continue to be documented through sanitized updates to `local-llm-inference-lab` rather than copying the full local inference fork.

Do not show client-tied demos or operational dashboards as-is. Create generic, sanitized versions if needed.

Current caveat: the CV's visible projects now favor public proof points. `Stride Agent` and Pi/OpenCode tooling remain strong private evidence, but need sanitization or dedicated public showcases before becoming primary external links.

## Artifacts to reference

- `docs/overview/cv-typewriter.md` — current architecture overview.
- `docs/adr/ADR-0001-client-side-pagination-for-cv-rendering.md` — pagination decision.
- `docs/changelog/cv-content.md` — CV content and positioning changes.
- `docs/overview/portfolio-showcase-roadmap.md` — current portfolio evidence phase and project-showcase roadmap.
- `~/workspace/plan.md` — broader portfolio/showcase plan, including sanitization guidance and local LLM inference notes.

## Suggested skills

- `docs-structure` for documentation/changelog placement.
- `conventional-commit` before committing changes.
- `github-pull-request` when preparing the branch for review.
- `accessibility` for any UI control changes.
- `handoff` if the context needs to be transferred again.

## Open questions

- Should the CV render three or four featured projects by default after the portfolio evidence phase is complete?
- Should JSON export produce the full bilingual source or a localized JSON for the active language?
- Should `stride-agent` become public after sanitization or be split into a smaller public preview?
- Should `local-llm-inference-lab` become one of the primary projects for all AI tooling applications, or only for local-inference/platform-focused roles?
- Should the README remain project-generic or mention the AI tooling sample CV as a showcase?

## Verification steps

1. Run `npm run lint:check`.
2. Run `npm run format:check`.
3. Run `npm run build`.
4. Open the app and switch ES/EN in the preview selector.
5. Export both PDFs and visually inspect page breaks, especially `Stack técnico` / `Technical Stack`.
6. Ensure no sensitive POC details are present in `src/features/cv-typewriter/sample.js`, README, or docs.
7. Before finalizing the CV's featured projects, verify that each visible project links to a public GitHub repository or an intentionally explainable evidence source.

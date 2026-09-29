## 2026-09-29 — Rephrase for recruiter readability, Angular-first with AI differentiator

**What**: Rewrote both language variants around a single narrative order: Angular/TypeScript microfrontends as the professional core and custom AI agent orchestration as the primary differentiator. The professional summary now leads with the microfrontend/Angular specialisation and closes with the agent-orchestration differentiator; the Sabadell governance highlight was compacted into one achievement-first bullet (merging the two highest-value bullets without losing WCAG/ARIA, shared UI foundations or build tooling). Experience bullets were reordered achievement-first (e.g. the i18n CLI result now precedes its mechanism; NgRx performance outcome now leads its bullet) and GrayHats was reframed as frontend with React/GraphQL instead of implying React-only work. The technical stack gained an `AI & Agentic Engineering` row placed directly after `Core Frontend` so the differentiator reads second, after the professional core. A `Languages` row was added stating Spanish (native) and English (C1), kept as a plain level statement without noting provenance or accreditation — the level stands on its own and, if needed, gets validated in a technical interview. The featured-project order now leads with public Angular Native Federation evidence, followed by the agentic portfolio (agentic-pr-reviewer-action, stride-agent-showcase, dotfiles-opencode-showcase) and closing with cv-typewriter and wcag_design as the six rendered entries; per the handoff rule, the unused `angularI18nTranslator`, `mcpSchemaRunner` and `localInferenceSetup` URLs stay defined in `projectUrls` so swapping evidence remains a one-line edit. Metrics are limited to figures already present (2 microfrontends, days-to-minutes i18n effort); no new claims were introduced.  
**Where**: `src/features/cv-typewriter/sample.js`, `docs/changelog/cv-content.md`  
**Why**: Recruiter-first readability (achievement → mechanism) and a stack order that surfaces the AI differentiation on first scan, while keeping the literal ATS keyword set intact and all claims verifiable — including an honest, non-certified C1 English statement.

**What**: Removed the three `~/workspace/plan.md` references, which pointed at a file that does not exist, from `docs/overview/portfolio-showcase-roadmap.md` and `docs/handoff.md`, and corrected the roadmap goal statement that still described the AI Developer Tooling positioning. Dropped the claim-provenance section from the handoff so the public repository no longer records which CV claims are weaker, replacing it with a rule that keeps such doubts out of the repo rather than writing them down. Recorded the feature-branch-plus-PR workflow and cleared the open question it answered.  
**Where**: `docs/handoff.md`, `docs/overview/portfolio-showcase-roadmap.md`, `docs/changelog/cv-content.md`  
**Why**: A public repository should not carry dangling pointers to local files, nor notes that weaken the CV it publishes.

## 2026-09-29 — Regenerate handoff and correct the portfolio project list

**What**: Regenerated `docs/handoff.md` with the `handoff` skill, replacing the previous version, which named a non-existent `feature/ui-improvements` branch and duplicated portfolio content. The new document carries the CV content rules that live nowhere else (sensitive wording, skill tiering, summary length, project render limits and the headless export caveat), and references other artifacts by path instead of copying them. Corrected the visible project set in `docs/overview/portfolio-showcase-roadmap.md` to the six projects actually rendered, recorded the three that left the set, and updated the README description of the handoff file.  
**Where**: `docs/handoff.md`, `docs/overview/portfolio-showcase-roadmap.md`, `README.md`, `docs/changelog/cv-content.md`  
**Why**: Keep the continuation context truthful after the CV content rework, so a future session does not act on a stale branch name, a stale project list, or content rules it cannot find.

## 2026-09-29 — Cover the frontend engineering keyword set, keep agent orchestration as differentiator

**What**: Expanded both language variants with the frontend engineering keyword set that Rafa confirmed as technologies he has worked with: RxJS, Angular standalone components and Signals, lazy loading, code splitting, bundle optimization, Core Web Vitals, route guards, SCSS/Sass, WCAG 2.2 AA / EN 301 549, axe/Lighthouse audits, OIDC/JWT, CSP, OWASP, Nx, Vite, Webpack, Docker, Scrum and the CI/CD tooling. Rewrote the experience highlights so the mechanisms are named instead of implied. Grew the technical stack from five to eight rows, adding dedicated `Quality & Performance` and `Build & Tooling` rows and a separate `Additional Frontend` row (React, Vue.js, Next.js, Redux Toolkit, Tailwind CSS) so secondary skills stay visibly apart from the banking stack. Storybook is credited as professional experience, through consuming the bank's corporate component library, instead of as a secondary skill. Replaced `angular-i18n-translator` and `mcp-schema-runner` in the featured projects with agent-orchestration evidence (`dotfiles-opencode-showcase`, `agentic-pr-reviewer-action`) and reframed the current role's agentic highlight around custom agent orchestration frameworks. The professional summary was then synthesised to two lines and both variants received a language coherence pass (unified `microfrontend`, `agentes de coding`, `de principio a fin` and `umbrales de calidad` in Spanish; removed the duplicated `end-to-end` in English), verified to keep every keyword present elsewhere in the document.  
**Where**: `src/features/cv-typewriter/sample.js`, `docs/changelog/cv-content.md`, `docs/handoff.md`  
**Why**: Pass literal ATS keyword screening on generic frontend engineering postings while keeping the custom agent-orchestration work visible as the main differentiator, without implying professional use of technologies only explored outside work.

## 2026-09-29 — Rebalance CV content for a frontend engineering application

**What**: Rebalanced the bilingual professional summary, experience highlights and technical stack towards frontend engineering (Angular/TypeScript, HTML5/CSS3, responsive design, design systems, WCAG/ARIA, testing and build tooling) in both language variants, keeping AI tooling and agentic workflows as a secondary differentiator. React is referenced only as complementary experience, never as part of the banking stack. Added `Core Frontend`, `UI & Accessibility` and `Quality & Build` rows to the technical stack, replaced the featured project selection with frontend-facing public evidence (`cv-typewriter`, `wcag_design`) plus Angular Native Federation, and set `active_language` to `en`. The `agentic-pr-reviewer-action` and `local-inference-setup` URLs remain defined in `projectUrls` for easy restoration.  
**Where**: `src/features/cv-typewriter/sample.js`, `docs/changelog/cv-content.md`, `docs/handoff.md`  
**Why**: Target a generic frontend engineering role whose requirements are HTML5/CSS3, responsive design, accessibility, state management, build tools and testing frameworks, instead of the AI-first developer-tooling positioning used for previous applications.

## 2026-06-06 — Add agentic PR reviewer evidence

**What**: Added `agentic-pr-reviewer-action` to the bilingual CV project section and increased the rendered project limit from four to six so the new public GitHub Action appears without removing existing project entries.  
**Where**: `src/features/cv-typewriter/sample.js`, `src/features/cv-typewriter/components/CVContent.jsx`, `src/features/cv-typewriter/services/blockBuilder.js`, `docs/changelog/cv-content.md`, `docs/overview/portfolio-showcase-roadmap.md`  
**Why**: Promote the new public PR review automation project as verifiable evidence for AI Developer Tooling, CI/CD automation, GitHub Actions, and OpenAI-compatible LLM workflows.

## 2026-05-31 — Add OpenCode showcase evidence

**What**: Added `dotfiles-opencode-showcase` to the bilingual CV project section and increased the rendered project limit from three to four so the new public OpenCode profile installer appears in the CV.  
**Where**: `src/features/cv-typewriter/sample.js`, `src/features/cv-typewriter/components/CVContent.jsx`, `src/features/cv-typewriter/services/blockBuilder.js`, `docs/changelog/cv-content.md`, `docs/overview/portfolio-showcase-roadmap.md`  
**Why**: Promote the new public OpenCode showcase as verifiable evidence for AI Developer Tooling, role-based agentic workflows, TypeScript/Ink CLI work, and safe managed configuration automation.

## 2026-05-31 — Link public project evidence

**What**: Updated the bilingual CV project section to feature public GitHub-backed projects: Angular i18n Translator, Local LLM Inference Lab, and CV Typewriter. Project names now use Markdown links to their repositories in both Spanish and English variants.  
**Where**: `src/features/cv-typewriter/sample.js`, `docs/changelog/cv-content.md`, `docs/overview/portfolio-showcase-roadmap.md`, `docs/handoff.md`  
**Why**: Make the selected projects verifiable from the CV and promote the new local LLM inference lab as public AI tooling evidence.

## 2026-05-31 — Document portfolio evidence phase

**What**: Added a portfolio showcase roadmap and updated the handoff to make the current phase explicit: the CV structure and positioning are mostly in place, but featured projects remain provisional until the external evidence plan is executed.  
**Where**: `docs/overview/portfolio-showcase-roadmap.md`, `docs/handoff.md`, `docs/changelog/cv-content.md`  
**Why**: Ensure future sessions understand that the next priority is sanitizing or preparing public project evidence before finalizing the CV's project section.

## 2026-05-31 — Add professional handoff and README refresh

**What**: Added `docs/handoff.md` with professional positioning, target roles, sensitive wording rules, project evidence, and continuation context. Rewrote the project README to describe the bilingual CV model, A4 preview, smart pagination, and current architecture more professionally.  
**Where**: `docs/handoff.md`, `README.md`, `docs/changelog/cv-content.md`  
**Why**: Preserve context for future agents and present the project more clearly as a professional data-first CV editor.

## 2026-05-31 — Refine Oxford-style CV header

**What**: Updated the CV header to use a compact Oxford/engineering resume style: centered bold name and a single contact line with pipe separators and clickable links.  
**Where**: `src/features/cv-typewriter/components/CVContent.jsx`  
**Why**: Improve alignment with minimalist software engineering CV templates while keeping contact details ATS-friendly and readable.

## 2026-05-31 — Add bilingual CV preview

**What**: Added Spanish/English CV content variants inside the sample JSON, localized section labels, localized present-date labels, and a preview language selector in the editor panel. PDF export titles now include the active language suffix.  
**Where**: `src/features/cv-typewriter/sample.js`, `src/features/cv-typewriter/cvUtils.jsx`, `src/features/cv-typewriter/hooks/useCVData.jsx`, `src/CVTypewriter.jsx`, `src/features/cv-typewriter/components/EditorPanel.jsx`, `src/features/cv-typewriter/components/CVContent.jsx`, `src/features/cv-typewriter/components/entries/ExperienceEntry.jsx`, `src/features/cv-typewriter/components/entries/EducationEntry.jsx`, `src/features/cv-typewriter/services/blockBuilder.js`  
**Why**: Allow separate Spanish and English CV previews/exports from a single bilingual JSON source while keeping legacy JSON compatibility.

## 2026-05-31 — Improve ATS positioning and tech pagination

**What**: Added ATS-oriented keywords around AI Developer Tooling, Developer Automation, Model Context Protocol, Playwright, and local LLM inference. Reordered featured projects to prioritize a public LLM automation CLI and grouped technical expertise rows during pagination so the section moves as one unit when needed.  
**Where**: `src/features/cv-typewriter/sample.js`, `src/features/cv-typewriter/hooks/usePagination.jsx`  
**Why**: Improve automated CV screening relevance and avoid splitting the technical expertise section across pages.

## 2026-05-31 — Reframe sensitive agentic automation work

**What**: Reworded the current-role agentic automation highlight to avoid exposing sensitive POC details, and added Banco Santander automated E2E validation work using an agent with Playwright MCP.  
**Where**: `src/features/cv-typewriter/sample.js`  
**Why**: Preserve the value of applied AI tooling work while avoiding premature disclosure of internal integration details.

## 2026-05-31 — Add Banc Sabadell agentic automation context

**What**: Renamed the current client reference to Banc Sabadell and added a concise, generic highlight about exploring agentic automation in enterprise CI/CD and collaborative tooling workflows.  
**Where**: `src/features/cv-typewriter/sample.js`  
**Why**: Reflect applied AI tooling work performed in the current role without exposing sensitive internal integration details.

## 2026-05-31 — Clarify frontend role titles

**What**: Updated previous role titles from generic software developer labels to frontend-focused titles that better reflect the actual responsibilities performed.  
**Where**: `src/features/cv-typewriter/sample.js`  
**Why**: Improve clarity and alignment with frontend engineering, AI tooling, and developer automation roles.

## 2026-05-31 — Simplify summary presentation

**What**: Shortened the professional summary and removed its visible section header so the CV starts with a direct positioning paragraph below the personal header.  
**Where**: `src/features/cv-typewriter/sample.js`, `src/features/cv-typewriter/services/blockBuilder.js`, `src/features/cv-typewriter/components/CVContent.jsx`  
**Why**: Reduce redundancy and make the most relevant positioning statement easier to scan.

## 2026-05-31 — Add local LLM inference experience

**What**: Added local AI inference experience with `llama.cpp`, including local model serving, concurrency control, token budgeting, CPU/GPU layer tuning, KV cache reuse, and MTP configuration. Increased featured project rendering from two to three projects so the new inference project appears in the CV.  
**Where**: `src/features/cv-typewriter/sample.js`, `src/features/cv-typewriter/services/blockBuilder.js`, `src/features/cv-typewriter/components/CVContent.jsx`  
**Why**: Strengthen positioning for AI Engineer, AI tooling, and local inference automation roles.

## 2026-05-31 — Reposition CV content for AI tooling roles

**What**: Updated sample CV content to integrate agentic tooling, MCP workflows, and custom Pi/OpenCode/Stride Agent work as applied capabilities in recent Banco Santander and Banco Sabadell roles, while preserving them as demonstrable projects.  
**Where**: `src/features/cv-typewriter/sample.js`  
**Why**: Align the CV with AI Engineer, AI Tooling Engineer, and developer automation roles without presenting the work as unrelated side projects.

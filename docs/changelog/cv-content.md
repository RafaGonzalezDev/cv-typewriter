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

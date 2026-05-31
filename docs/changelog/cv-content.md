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

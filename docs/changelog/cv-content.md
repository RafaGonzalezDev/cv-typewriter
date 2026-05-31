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

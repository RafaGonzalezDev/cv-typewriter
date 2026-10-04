# Portfolio showcase roadmap

This document tracks the current portfolio evidence phase for Rafa's CV positioning. The goal is to make the CV credible for frontend engineering roles, with custom agent orchestration as the differentiator, by aligning the featured projects with public or sanitized evidence.

## Key components

- `src/features/cv-typewriter/sample.js` — Current bilingual CV content. The `projects` section is provisional until the evidence work in this roadmap is complete.
- `docs/handoff.md` — Continuation context, CV content rules, sensitive wording rules and verification steps for future sessions.
- Public GitHub projects — Current public evidence includes `angular-i18n-translator`, `local-llm-inference-lab`, `stride-agent-showcase`, `dotfiles-opencode-showcase`, `agentic-pr-reviewer-action`, `cv-typewriter`, `wcag_design`, `mfe-architecture`, and `angular-native-federation`.
- Private/sensitive projects — `dotfiles-pi` still requires sanitization or a curated public preview before it should be used as primary project evidence.

## Current phase

The CV structure, bilingual preview, ATS-oriented wording and frontend engineering positioning are in place, with custom agent orchestration as the differentiator. The current phase is converting the strongest private AI tooling work into public-safe evidence.

As of 2026-10-04, the CV includes four projects, one highlight each, within the existing six-project rendering limit:

- `angular-i18n-translator` — Node.js/JavaScript CLI linking Angular internationalization with LLM batch translation, validation and resumable processing.
- `angular-native-federation` — Angular 21 microfrontend PoC with lazy remote components and runtime/dependency sharing policies.
- `dsh-codex-oauth` — React/TypeScript integration plugin with OAuth/PKCE onboarding, model catalog UI and cancellable streaming.
- `mcp-schema-runner` — local React/TypeScript developer tool for schema inspection and manual stdio MCP calls, backed by Express and TanStack Query.

`cv-typewriter` and `builder-differences` are role-specific alternatives when product UI or Angular build tooling deserves more emphasis. Other existing project URLs remain available in `projectUrls` in `sample.js`.

Private projects remain useful for positioning, but should not be linked as primary CV evidence until they are public-safe. `dotfiles-pi-showcase` is now public; it remains an optional extension showcase rather than part of the selected four.

## Recommended sequence

1. Keep the four selected public projects aligned with their implementations and the bilingual CV descriptions.
2. Adapt optional projects to each posting rather than filling all six available slots by default.
3. Keep LLM integrations, MCP developer tooling and agent runtimes distinct in project descriptions.
4. Export Spanish and English PDFs and confirm page breaks and readable project descriptions.

## Dependencies

- Public project references should be rechecked with the GitHub CLI before finalizing links or README copy.
- Sensitive client-related demos must not be exposed directly; create neutral clones or documentation-only showcases instead.

## Related ADRs

None.

# Portfolio showcase roadmap

This document tracks the current portfolio evidence phase for Rafa's CV positioning. The goal is to make the CV credible for frontend engineering roles, with custom agent orchestration as the differentiator, by aligning the featured projects with public or sanitized evidence.

## Key components

- `src/features/cv-typewriter/sample.js` — Current bilingual CV content. The `projects` section is provisional until the evidence work in this roadmap is complete.
- `docs/handoff.md` — Continuation context, CV content rules, sensitive wording rules and verification steps for future sessions.
- Public GitHub projects — Current public evidence includes `angular-i18n-translator`, `local-llm-inference-lab`, `stride-agent-showcase`, `dotfiles-opencode-showcase`, `agentic-pr-reviewer-action`, `cv-typewriter`, `wcag_design`, `mfe-architecture`, and `angular-native-federation`.
- Private/sensitive projects — `dotfiles-pi` still requires sanitization or a curated public preview before it should be used as primary project evidence.

## Current phase

The CV structure, bilingual preview, ATS-oriented wording and frontend engineering positioning are in place, with custom agent orchestration as the differentiator. The current phase is converting the strongest private AI tooling work into public-safe evidence.

The CV renders six projects, one highlight each. The current visible project set mixes frontend evidence with agent-orchestration evidence:

- `cv-typewriter` — frontend evidence: React 19 + Vite, client-side A4 pagination and PDF export.
- `angular-native-federation` — Angular platform evidence: Native Federation runtime sharing.
- `wcag_design` — accessibility evidence: WCAG 2.2 palette generation and contrast validation.
- `stride-agent-showcase` — coding-agent runtime with custom agent orchestration.
- `dotfiles-opencode-showcase` — OpenCode profile installer and role-based agentic workflow showcase.
- `agentic-pr-reviewer-action` — agentic, diff-scoped PR review automation in CI/CD.

`angular-i18n-translator`, `mcp-schema-runner` and `local-inference-setup` left the visible set on 2026-09-29 to make room for frontend-facing evidence. Their URLs stay defined in `projectUrls` in `sample.js`, so restoring any of them is a one-line edit.

Private projects remain useful for positioning, but should not be linked as primary CV evidence until they are public-safe. The main remaining candidate is `dotfiles-pi`.

## Recommended sequence

1. Keep `stride-agent-showcase`, `dotfiles-opencode-showcase` and `agentic-pr-reviewer-action` aligned with the CV as public agent-orchestration evidence.
2. Extract or sanitize Pi material into `dotfiles-pi-showcase` if it remains valuable as a separate public project.
3. Re-evaluate whether the CV should keep six public projects or introduce role-specific project presets.
4. Export Spanish and English PDFs and confirm that the project section is both credible and backed by accessible evidence.

## Dependencies

- Public project references should be rechecked with the GitHub CLI before finalizing links or README copy.
- Sensitive client-related demos must not be exposed directly; create neutral clones or documentation-only showcases instead.

## Related ADRs

None.

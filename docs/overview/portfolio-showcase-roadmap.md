# Portfolio showcase roadmap

This document tracks the current portfolio evidence phase for Rafa's CV positioning. The goal is to make the CV credible for AI Developer Tooling, Developer Automation, Agentic Workflows, and Software Engineering roles by aligning the featured projects with public or sanitized evidence.

## Key components

- `~/workspace/plan.md` — Source plan for portfolio/showcase work, including project visibility, sanitization strategy, and local LLM inference notes.
- `src/features/cv-typewriter/sample.js` — Current bilingual CV content. The `projects` section is provisional until the portfolio plan is executed.
- `docs/handoff.md` — Professional positioning, sensitive wording rules, project evidence, and continuation context for future sessions.
- Public GitHub projects — Current public evidence includes `angular-i18n-translator`, `local-llm-inference-lab`, `stride-agent-showcase`, `dotfiles-opencode-showcase`, `agentic-pr-reviewer-action`, `cv-typewriter`, `wcag_design`, `mfe-architecture`, and `angular-native-federation`.
- Private/sensitive projects — `dotfiles-pi` still requires sanitization or a curated public preview before it should be used as primary project evidence.

## Current phase

The CV structure, bilingual preview, ATS-oriented wording, and AI tooling positioning are in place. The current phase is converting the strongest private AI tooling work into public-safe evidence.

The CV now prioritizes visible projects that have public GitHub evidence. The current visible project set is:

- `angular-i18n-translator` — strongest public LLM automation project.
- `local-llm-inference-lab` — public local inference and model-serving showcase.
- `stride-agent-showcase` — public coding-agent runtime showcase.
- `dotfiles-opencode-showcase` — public OpenCode profile installer and role-based agentic workflow showcase.
- `agentic-pr-reviewer-action` — public GitHub Action for agentic, diff-scoped PR review automation.

Private projects remain useful for positioning, but should not be linked as primary CV evidence until they are public-safe. The main remaining candidate is `dotfiles-pi`.

## Recommended sequence

1. Keep `local-llm-inference-lab`, `stride-agent-showcase`, `dotfiles-opencode-showcase`, and `agentic-pr-reviewer-action` aligned with the CV as public AI tooling evidence.
2. Extract or sanitize Pi material into `dotfiles-pi-showcase` if it remains valuable as a separate public project.
3. Re-evaluate whether the CV should keep four public projects or introduce role-specific project presets.
4. Export Spanish and English PDFs and confirm that the project section is both credible and backed by accessible evidence.

## Dependencies

- The project choices depend on the outcome of `~/workspace/plan.md`.
- Public project references should be rechecked with the GitHub CLI before finalizing links or README copy.
- Sensitive client-related demos must not be exposed directly; create neutral clones or documentation-only showcases instead.

## Related ADRs

None.

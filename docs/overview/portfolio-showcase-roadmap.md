# Portfolio showcase roadmap

This document tracks the current portfolio evidence phase for Rafa's CV positioning. The goal is to make the CV credible for AI Developer Tooling, Developer Automation, Agentic Workflows, and Software Engineering roles by aligning the featured projects with public or sanitized evidence.

## Key components

- `~/workspace/plan.md` — Source plan for portfolio/showcase work, including project visibility, sanitization strategy, and local LLM inference notes.
- `src/features/cv-typewriter/sample.js` — Current bilingual CV content. The `projects` section is provisional until the portfolio plan is executed.
- `docs/handoff.md` — Professional positioning, sensitive wording rules, project evidence, and continuation context for future sessions.
- Public GitHub projects — Current public evidence includes `angular-i18n-translator`, `local-llm-inference-lab`, `cv-typewriter`, `wcag_design`, `mfe-architecture`, and `angular-native-federation`.
- Private/sensitive projects — `stride-agent`, `dotfiles-pi`, and `dotfiles-opencode` require sanitization or curated public previews before they should be used as primary project evidence.

## Current phase

The CV structure, bilingual preview, ATS-oriented wording, and AI tooling positioning are in place. The next phase is **portfolio evidence preparation**.

The CV now prioritizes visible projects that have public GitHub evidence. The current public project set is:

- `Angular i18n Translator` — strongest public LLM automation project.
- `Local LLM Inference Lab` — public local inference and model-serving showcase.
- `CV Typewriter` — public data-first CV editor and developer tooling project.

Private projects remain useful for positioning, but should not be linked as primary CV evidence until they are public-safe:

- `Stride Agent` is technically relevant but private and still in development.
- `Agentic Developer Tooling` summarizes Pi/OpenCode work that should be sanitized before public linking.

## Recommended sequence

1. Keep `local-llm-inference-lab` aligned with the CV as public local inference evidence.
2. Decide whether `stride-agent` becomes public as-is after sanitization or whether a smaller public preview should be extracted.
3. Extract or sanitize Pi/OpenCode material into public-safe showcases.
4. Re-evaluate whether the CV should keep three public projects or introduce role-specific project presets.
5. Export Spanish and English PDFs and confirm that the project section is both credible and backed by accessible evidence.

## Dependencies

- The project choices depend on the outcome of `~/workspace/plan.md`.
- Public project references should be rechecked with the GitHub CLI before finalizing links or README copy.
- Sensitive client-related demos must not be exposed directly; create neutral clones or documentation-only showcases instead.

## Related ADRs

None.

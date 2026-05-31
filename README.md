# CV Typewriter

CV Typewriter is a data-first CV editor for maintaining a professional resume as structured JSON and previewing it as a polished A4 document before export. It is designed for developers who want version-controlled CV content, bilingual variants, predictable print output, and a clean engineering-resume aesthetic.

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ShadcnUI](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

<p align="center">
  <img src="preview.png" alt="CV Typewriter preview" width="900" />
</p>

## Highlights

- **Data-first CV content**: maintain the CV as JSON instead of coupling content to layout.
- **Bilingual preview**: switch between Spanish and English CV variants from the editor panel.
- **Oxford-inspired resume layout**: compact header, minimal section treatment, and readable hierarchy.
- **A4 print preview**: render fixed-size A4 pages in the browser before exporting.
- **Smart pagination**: measure content blocks and avoid awkward page splits across entries and technical sections.
- **PDF export**: export the selected language variant through the browser print-to-PDF flow.
- **JSON export**: download the underlying structured CV data for backup or version control.
- **Markdown-style links**: use `[Label](https://example.com)` in supported text fields.

## Use cases

- Keep CV content under version control.
- Maintain separate Spanish and English CV variants in one source file.
- Preview page breaks before exporting a PDF.
- Tailor a developer CV toward software engineering, AI tooling, automation, or platform roles.
- Iterate on content while preserving a consistent print layout.

## Tech stack

- **React 19** — UI runtime.
- **Vite** — development server and production build.
- **Tailwind CSS** — styling and print layout utilities.
- **shadcn/ui-style primitives** — buttons, cards, inputs, badges and separators.
- **CodeMirror** — JSON editor.
- **react-to-print** — print/PDF export flow.
- **Lucide React** — iconography.

## Project structure

```txt
src/
├── CVTypewriter.jsx                       # Feature orchestrator
├── features/cv-typewriter/
│   ├── components/                        # Editor, preview and CV rendering components
│   ├── hooks/                             # CV state, pagination, page config and printing
│   ├── services/                          # Block building and file operations
│   ├── cvUtils.jsx                        # Parsing, localization, normalization and formatting
│   └── sample.js                          # Bilingual sample CV data
└── components/ui/                         # Shared UI primitives
```

Additional documentation lives in:

```txt
docs/
├── adr/                                   # Architecture Decision Records
├── changelog/                             # Documentation and content changes
├── overview/                              # Architecture overview
└── handoff.md                             # Professional positioning and continuation context
```

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local Vite URL, usually:

```txt
http://localhost:5173
```

### Build

```bash
npm run build
```

### Validate

```bash
npm run lint:check
npm run format:check
```

## How to use

1. Edit the JSON content in the left panel.
2. Use the language selector to preview `ES` or `EN`.
3. Review the paginated A4 preview on the right.
4. Export the selected language as PDF.
5. Download the JSON source when you want a portable backup.

## Bilingual JSON model

The sample CV stores localized content under `cv.languages`:

```js
cv: {
  active_language: 'es',
  languages: {
    es: { /* Spanish CV */ },
    en: { /* English CV */ }
  }
}
```

Each language can define its own:

- personal details,
- localized section labels,
- professional summary,
- experience entries,
- technical stack,
- selected projects,
- education.

The app still supports older single-language JSON files by falling back to the legacy `cv.sections` shape.

## Documentation

Useful references:

- [`docs/overview/cv-typewriter.md`](docs/overview/cv-typewriter.md)
- [`docs/adr/ADR-0001-client-side-pagination-for-cv-rendering.md`](docs/adr/ADR-0001-client-side-pagination-for-cv-rendering.md)
- [`docs/handoff.md`](docs/handoff.md)

## Notes

- PDF export depends on the browser print dialog. Use A4 and disable browser headers/footers for best results.
- Large editor dependencies can produce a Vite chunk-size warning during build; the build still completes successfully.
- The current JSON export downloads the full source JSON, including both language variants.

## License

MIT. See [`LICENSE`](LICENSE).

# CV Typewriter

CV Typewriter is a single-page React application that lets users craft professional CVs using a data-first, JSON-driven approach. The UI is split into an editor panel (live JSON editing via CodeMirror) and a paginated A4 preview panel. The application normalizes and renders CV data with an Oxford-inspired typographic design, supports Markdown-style links in descriptions, and exports clean PDF output via the browser's print-to-PDF feature.

## Key components

| File                                                     | Description                                                                                                                             |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `src/App.jsx`                                            | Application entry point. Mounts the `CVTypewriter` feature root.                                                                        |
| `src/CVTypewriter.jsx`                                   | Feature orchestrator. Composes hooks and panels into the main layout grid.                                                              |
| `src/features/cv-typewriter/hooks/useCVData.jsx`         | Manages JSON text state, file name, safe parsing, and normalized CV object.                                                             |
| `src/features/cv-typewriter/hooks/usePageConfig.jsx`     | Derives A4 page metrics (margins, content height) and generates `@media print` CSS.                                                     |
| `src/features/cv-typewriter/hooks/usePagination.jsx`     | Measures DOM block heights and distributes content across pages to avoid awkward splits.                                                |
| `src/features/cv-typewriter/hooks/usePrint.jsx`          | Thin wrapper around `react-to-print` for PDF export.                                                                                    |
| `src/features/cv-typewriter/services/blockBuilder.js`    | Transforms normalized CV data into a flat list of typed blocks (header, section-header, entries, highlights, tech items).               |
| `src/features/cv-typewriter/services/fileOperations.js`  | Provides JSON download and sample data reset.                                                                                           |
| `src/features/cv-typewriter/components/EditorPanel.jsx`  | Left-side panel with file name input, quick action buttons, and the CodeMirror JSON editor.                                             |
| `src/features/cv-typewriter/components/PreviewPanel.jsx` | Right-side panel that renders a hidden measurement DOM tree and the visible paginated A4 pages.                                         |
| `src/features/cv-typewriter/components/CVContent.jsx`    | Renders CV content in two modes: non-paged (for measurement) and paged (for display).                                                   |
| `src/features/cv-typewriter/cvUtils.jsx`                 | Utility functions for safe JSON parsing, date formatting, Markdown link rendering, unit conversion (cm/mm to px), and CV normalization. |
| `src/features/cv-typewriter/sample.js`                   | Default sample data compatible with the RenderCV schema.                                                                                |

## Dependencies

- **React 19** and **React DOM 19** - UI framework.
- **Vite** - Build tool and dev server.
- **Tailwind CSS 3** - Utility-first styling.
- **Shadcn/UI** (`@radix-ui/react-*`, `class-variance-authority`, `tailwind-merge`, `clsx`) - Base UI primitives (Card, Button, Input, Badge, Tabs, Separator).
- **CodeMirror** (`@uiw/react-codemirror`, `@codemirror/lang-json`, `@codemirror/theme-one-dark`) - JSON editor.
- **Lucide React** - Iconography.
- **react-to-print** - PDF export trigger.

## Related ADRs

- [ADR-0001-client-side-pagination-for-cv-rendering](../adr/ADR-0001-client-side-pagination-for-cv-rendering.md)

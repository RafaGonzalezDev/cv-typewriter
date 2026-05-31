# ADR-0001: Client-Side Pagination for CV Rendering

## Status

Accepted

## Context

CV Typewriter must display a preview that matches printed A4 output exactly. Content length varies based on user data, and long CVs must flow across multiple pages with proper margins and without breaking sections or entries awkwardly.

We evaluated two approaches:

1. **CSS-only pagination** (`break-after: page`, `break-inside: avoid`).
   - Pros: No JavaScript complexity, native browser handling.
   - Cons: Limited control over orphan/widow prevention, section headers can be left alone at the bottom of a page, and the screen preview cannot show page boundaries accurately before printing.

2. **Client-side JavaScript pagination** (measuring DOM heights and manually distributing blocks into pages).
   - Pros: Full control over page breaks, ability to keep section headers with their first content block, accurate screen preview of page boundaries, consistent rendering between preview and print.
   - Cons: Requires a hidden measurement DOM tree, extra computation on every JSON change, more code to maintain.

## Decision

We chose **client-side JavaScript pagination**.

The application renders a hidden, non-paged DOM tree (`contentRef`) to measure the exact pixel height of every block. `usePagination` then distributes blocks into pages using a greedy algorithm that:

- Keeps the header only on the first page.
- Prevents a section header from being isolated at the bottom of a page by looking ahead at the next content block's height.
- Flushes the current page when adding a block would exceed the calculated content height.

The visible preview then renders each page as a fixed-size A4 container containing only the blocks assigned to that page.

## Consequences

- **Positive**: The screen preview is pixel-accurate with printed output. Users see exact page breaks before exporting PDF.
- **Positive**: Fine-grained control over layout rules (e.g., section headers staying with content).
- **Negative**: A hidden measurement tree lives in the DOM at all times.
- **Negative**: Pagination re-runs on every JSON edit, which is acceptable for typical CV sizes but could become a bottleneck for very large documents.

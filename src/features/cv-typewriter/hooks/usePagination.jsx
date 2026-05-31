import { useState, useEffect } from 'react';

export function usePagination(allBlocks, pageMetrics, contentRef) {
  const [pagedBlocks, setPagedBlocks] = useState([]);
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    const blocks = allBlocks;
    setPagedBlocks([]);

    if (!contentRef.current) {
      setNumPages(1);
      return;
    }

    const elements = Array.from(contentRef.current.querySelectorAll('[data-block-id]'));
    if (!elements.length) {
      setNumPages(1);
      return;
    }

    const heights = new Map();
    elements.forEach((el) => {
      const id = el.getAttribute('data-block-id');
      const rect = el.getBoundingClientRect();
      const computed = window.getComputedStyle(el);
      const marginTop = Number.parseFloat(computed.marginTop) || 0;
      const marginBottom = Number.parseFloat(computed.marginBottom) || 0;
      heights.set(id, rect.height + marginTop + marginBottom);
    });

    const pages = [];
    let current = [];
    let currentHeight = 0;

    const flush = () => {
      pages.push(current);
      current = [];
      currentHeight = 0;
    };

    const getGroup = (startIndex) => {
      const block = blocks[startIndex];
      const h = heights.get(block.id) ?? 0;

      if (block.type === 'experience-entry') {
        let total = h;
        let j = startIndex + 1;
        while (j < blocks.length) {
          const next = blocks[j];
          if (next.type === 'experience-highlight' && next.entryId === block.id) {
            total += heights.get(next.id) ?? 0;
            j++;
          } else break;
        }
        return { blocks: blocks.slice(startIndex, j), height: total, nextIndex: j };
      }

      if (block.type === 'project-entry') {
        let total = h;
        let j = startIndex + 1;
        while (j < blocks.length) {
          const next = blocks[j];
          if (next.type === 'project-highlight' && next.entryId === block.id) {
            total += heights.get(next.id) ?? 0;
            j++;
          } else break;
        }
        return { blocks: blocks.slice(startIndex, j), height: total, nextIndex: j };
      }

      if (block.type === 'summary-paragraph') {
        let total = h;
        let j = startIndex + 1;
        while (j < blocks.length && blocks[j].type === 'summary-paragraph') {
          total += heights.get(blocks[j].id) ?? 0;
          j++;
        }
        return { blocks: blocks.slice(startIndex, j), height: total, nextIndex: j };
      }

      if (block.type === 'tech-item') {
        let total = h;
        let j = startIndex + 1;
        while (j < blocks.length && blocks[j].type === 'tech-item') {
          total += heights.get(blocks[j].id) ?? 0;
          j++;
        }
        return { blocks: blocks.slice(startIndex, j), height: total, nextIndex: j };
      }

      return { blocks: [block], height: h, nextIndex: startIndex + 1 };
    };

    const getNextGroupHeight = (startIndex) => {
      for (let j = startIndex + 1; j < blocks.length; j++) {
        const next = blocks[j];
        if (next.type === 'section-header' || next.type === 'header') {
          continue;
        }
        return getGroup(j).height;
      }
      return 0;
    };

    let i = 0;
    while (i < blocks.length) {
      const block = blocks[i];
      const group = getGroup(i);

      if (block.type === 'header') {
        if (pages.length > 0) {
          i = group.nextIndex;
          continue;
        }
        current.push(...group.blocks);
        currentHeight += group.height;
        i = group.nextIndex;
        continue;
      }

      if (block.type === 'section-header') {
        const nextGroupHeight = getNextGroupHeight(i);
        if (
          nextGroupHeight > 0 &&
          currentHeight > 0 &&
          currentHeight + group.height + nextGroupHeight > pageMetrics.contentHeightPx
        ) {
          flush();
        }
        current.push(...group.blocks);
        currentHeight += group.height;
        i = group.nextIndex;
        continue;
      }

      if (current.length === 0 && group.height > pageMetrics.contentHeightPx) {
        current.push(...group.blocks);
        flush();
        i = group.nextIndex;
        continue;
      }

      if (currentHeight + group.height > pageMetrics.contentHeightPx) {
        flush();
      }

      current.push(...group.blocks);
      currentHeight += group.height;
      i = group.nextIndex;
    }

    if (current.length) flush();

    setPagedBlocks(pages);
    setNumPages(pages.length || 1);
  }, [allBlocks, pageMetrics, contentRef]);

  return { pagedBlocks, numPages };
}

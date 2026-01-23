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

    const pushBlock = (block, height) => {
      if (block.type === 'header') {
        if (pages.length > 0) {
          return;
        }
        current.push(block);
        currentHeight += height;
        return;
      }

      if (current.length === 0 && height > pageMetrics.contentHeightPx) {
        current.push(block);
        flush();
        return;
      }

      if (currentHeight + height > pageMetrics.contentHeightPx) {
        flush();
      }

      current.push(block);
      currentHeight += height;
    };

    const getNextContentHeight = (startIndex) => {
      for (let j = startIndex + 1; j < blocks.length; j += 1) {
        const next = blocks[j];
        if (
          next.type === 'section-header' ||
          next.type === 'section-end' ||
          next.type === 'header'
        ) {
          if (next.type === 'section-header' || next.type === 'section-end') return 0;
          continue;
        }
        return heights.get(next.id) ?? 0;
      }
      return 0;
    };

    blocks.forEach((block, index) => {
      const height = heights.get(block.id) ?? 0;

      if (block.type === 'section-header') {
        const nextHeight = getNextContentHeight(index);
        if (
          nextHeight > 0 &&
          currentHeight > 0 &&
          currentHeight + height + nextHeight > pageMetrics.contentHeightPx
        ) {
          flush();
        }
      }

      pushBlock(block, height);
    });

    if (current.length) flush();

    setPagedBlocks(pages);
    setNumPages(pages.length || 1);
  }, [allBlocks, pageMetrics, contentRef]);

  return { pagedBlocks, numPages };
}

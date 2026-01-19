import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import EditorPanel from '@/features/cv-typewriter/components/EditorPanel';
import PreviewPanel from '@/features/cv-typewriter/components/PreviewPanel';
import SAMPLE from '@/features/cv-typewriter/sample';
import {
  cmToPx,
  mmToPx,
  normalizeCV,
  parseCm,
  safeJsonParse,
} from '@/features/cv-typewriter/cvUtils.jsx';

// ---------------------------
// Main Component
// ---------------------------
export default function CVTypewriter() {
  const [jsonText, setJsonText] = useState(() => JSON.stringify(SAMPLE, null, 2));
  const [fileName, setFileName] = useState('CV');

  const parsed = useMemo(() => safeJsonParse(jsonText), [jsonText]);
  const cv = useMemo(
    () => normalizeCV(parsed.ok ? parsed.value : SAMPLE),
    [parsed.ok, parsed.value]
  );
  const printRef = useRef(null);

  const pageConfig = useMemo(() => {
    const raw = parsed.ok ? parsed.value : SAMPLE;
    const design = raw && typeof raw === 'object' ? raw.design : null;
    const page = design && typeof design === 'object' ? design.page : null;
    const topCm = parseCm(page?.top_margin, 2);
    const bottomCm = parseCm(page?.bottom_margin, 2);
    const leftCm = parseCm(page?.left_margin, 2);
    const rightCm = parseCm(page?.right_margin, 2);
    return {
      topCm,
      bottomCm,
      leftCm,
      rightCm,
    };
  }, [parsed.ok, parsed.value]);

  const pageMetrics = useMemo(() => {
    const pageWidthMm = 210;
    const pageHeightMm = 297;
    const topPx = cmToPx(pageConfig.topCm);
    const bottomPx = cmToPx(pageConfig.bottomCm);
    const leftPx = cmToPx(pageConfig.leftCm);
    const rightPx = cmToPx(pageConfig.rightCm);
    const widthPx = mmToPx(pageWidthMm);
    const heightPx = mmToPx(pageHeightMm);
    const contentHeightPx = heightPx - topPx - bottomPx;
    return {
      topPx,
      bottomPx,
      leftPx,
      rightPx,
      widthPx,
      heightPx,
      contentHeightPx,
    };
  }, [pageConfig]);

  const printCss = useMemo(() => {
    return `
        @page { 
            size: A4; 
            margin: 0; 
        }
        @media print {
            html, body {
                margin: 0;
                padding: 0;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            .no-print {
                display: none !important;
            }
            .no-print,
            .print-root {
                box-sizing: border-box;
            }
            .print-root {
                background: #fff !important;
            }
            .print-container {
                width: 210mm !important;
                height: 297mm !important;
                box-shadow: none !important;
                border: none !important;
                margin: 0 !important;
                break-after: page;
            }
            .cv-content {
                padding-top: ${pageConfig.topCm}cm !important;
                padding-bottom: ${pageConfig.bottomCm}cm !important;
                padding-left: ${pageConfig.leftCm}cm !important;
                padding-right: ${pageConfig.rightCm}cm !important;
                box-sizing: border-box !important;
            }
        }
        @media screen {
            .print-container {
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            }
        }
    `;
  }, [pageConfig]);

  const downloadJson = () => {
    const blob = new Blob([jsonText], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName || 'CV'}.json`;

    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const loadSample = () => setJsonText(JSON.stringify(SAMPLE, null, 2));

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: fileName || 'CV',

    pageStyle: printCss,
  });

  const [pagedBlocks, setPagedBlocks] = useState([]);
  const [numPages, setNumPages] = useState(1);
  const contentRef = useRef(null);

  const buildBlocks = () => {
    const blocks = [];
    let cursor = 0;

    const push = (block) => {
      blocks.push({ ...block, order: cursor });
      cursor += 1;
    };

    push({ id: 'header', type: 'header' });

    const pushSectionHeader = (id, title) => {
      push({ id: `section-${id}`, type: 'section-header', title });
    };

    const pushSummary = () => {
      pushSectionHeader('summary', 'Professional Summary');
      cv.sections.summary.forEach((text, index) => {
        push({
          id: `summary-${index}`,
          type: 'summary-paragraph',
          content: text,
        });
      });
    };

    const pushExperience = () => {
      pushSectionHeader('experience', 'Experience');
      cv.sections.experience.forEach((entry, entryIndex) => {
        const entryId = `experience-${entryIndex}`;
        push({
          id: entryId,
          type: 'experience-entry',
          entry,
          entryIndex,
          splitHighlights: true,
        });

        const highlights = Array.isArray(entry.highlights) ? entry.highlights : [];
        highlights.forEach((text, highlightIndex) => {
          push({
            id: `${entryId}-highlight-${highlightIndex}`,
            type: 'experience-highlight',
            entryId,
            index: highlightIndex,
            content: text,
          });
        });
      });
    };

    const pushTechnologies = () => {
      pushSectionHeader('technologies', 'Technical Expertise');
      cv.sections.technologies.forEach((item, index) => {
        push({
          id: `tech-${index}`,
          type: 'tech-item',
          item,
        });
      });
    };

    const pushProjects = () => {
      pushSectionHeader('projects', 'Featured Projects');
      cv.sections.projects.slice(0, 2).forEach((entry, entryIndex) => {
        const entryId = `project-${entryIndex}`;
        const highlights = Array.isArray(entry.highlights) ? entry.highlights.slice(0, 1) : [];
        push({
          id: entryId,
          type: 'project-entry',
          entry: { ...entry, highlights },
          entryIndex,
          splitHighlights: true,
        });

        highlights.forEach((text, highlightIndex) => {
          push({
            id: `${entryId}-highlight-${highlightIndex}`,
            type: 'project-highlight',
            entryId,
            index: highlightIndex,
            content: text,
          });
        });
      });
    };

    const pushEducation = () => {
      pushSectionHeader('education', 'Education');
      cv.sections.education.forEach((entry, index) => {
        push({
          id: `education-${index}`,
          type: 'education-entry',
          entry,
        });
      });
    };

    if (cv.sections.summary.length) pushSummary();
    if (cv.sections.experience.length) pushExperience();
    if (cv.sections.technologies.length) pushTechnologies();
    if (cv.sections.projects.length) pushProjects();
    if (cv.sections.education.length) pushEducation();

    return blocks;
  };

  const allBlocks = useMemo(() => buildBlocks(), [cv]);

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
  }, [allBlocks, pageMetrics, jsonText]);

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] print-root">
      <div className="flex justify-center px-6 py-8">
        <div
          className="grid gap-10"
          style={{
            gridTemplateColumns: `${pageMetrics.widthPx}px ${pageMetrics.widthPx}px`,
          }}
        >
          <EditorPanel
            fileName={fileName}
            onFileNameChange={(e) => setFileName(e.target.value)}
            jsonText={jsonText}
            onJsonTextChange={(e) => setJsonText(e.target.value)}
            parsed={parsed}
            onPrint={handlePrint}
            onDownloadJson={downloadJson}
            onLoadSample={loadSample}
            pageMetrics={pageMetrics}
          />
          <PreviewPanel
            cv={cv}
            pagedBlocks={pagedBlocks}
            allBlocks={allBlocks}
            numPages={numPages}
            pageMetrics={pageMetrics}
            printRef={printRef}
            contentRef={contentRef}
          />
        </div>
      </div>
    </div>
  );
}

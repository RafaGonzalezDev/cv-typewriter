import React from 'react';
import CVContent from './CVContent';

export default function PreviewPanel({
  cv,
  pagedBlocks,
  allBlocks,
  numPages,
  pageMetrics,
  printRef,
  contentRef,
}) {
  const pages = pagedBlocks.length
    ? pagedBlocks
    : Array.from({ length: numPages }).map(() => []);

  return (
    <div className="relative">
      <div
        className="absolute opacity-0 pointer-events-none overflow-hidden"
        style={{
          width: `${pageMetrics.widthPx}px`,
          paddingTop: `${pageMetrics.topPx}px`,
          paddingBottom: `${pageMetrics.bottomPx}px`,
          paddingLeft: `${pageMetrics.leftPx}px`,
          paddingRight: `${pageMetrics.rightPx}px`,
        }}
      >
        <CVContent ref={contentRef} cv={cv} paged layoutBlocks={allBlocks} />
      </div>

      <div
        ref={printRef}
        key={cv.language}
        className="animate-in fade-in duration-300 flex flex-col items-center"
      >
        {pages.map((blocks, i) => (
          <div key={i} className="relative mb-8 last:mb-0 print:mb-0">
            <div className="no-print absolute -top-6 inset-x-0 flex items-baseline justify-between px-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              <span>
                Page {i + 1} of {numPages}
              </span>
              <span>A4</span>
            </div>
            <div
              className="print-container relative bg-white shadow-paper"
              style={{
                width: `${pageMetrics.widthPx}px`,
                height: `${pageMetrics.heightPx}px`,
                boxSizing: 'border-box',
              }}
            >
              <div
                className="cv-content box-border h-full"
                style={{
                  paddingTop: `${pageMetrics.topPx}px`,
                  paddingBottom: `${pageMetrics.bottomPx}px`,
                  paddingLeft: `${pageMetrics.leftPx}px`,
                  paddingRight: `${pageMetrics.rightPx}px`,
                }}
              >
                <CVContent cv={cv} paged layoutBlocks={blocks} pageIndex={i} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

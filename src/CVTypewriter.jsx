import React, { useRef, useMemo } from 'react';
import EditorPanel from '@/features/cv-typewriter/components/EditorPanel';
import PreviewPanel from '@/features/cv-typewriter/components/PreviewPanel';
import { useCVData } from '@/features/cv-typewriter/hooks/useCVData';
import { usePageConfig } from '@/features/cv-typewriter/hooks/usePageConfig';
import { usePagination } from '@/features/cv-typewriter/hooks/usePagination';
import { usePrint } from '@/features/cv-typewriter/hooks/usePrint';
import { buildBlocks } from '@/features/cv-typewriter/services/blockBuilder';
import { downloadJson, getSampleJson } from '@/features/cv-typewriter/services/fileOperations';
import SAMPLE from '@/features/cv-typewriter/sample';

// ---------------------------
// Main Component
// ---------------------------
export default function CVTypewriter() {
  const printRef = useRef(null);
  const contentRef = useRef(null);

  const { jsonText, setJsonText, fileName, setFileName, parsed, cv } = useCVData();

  const { pageMetrics, printCss } = usePageConfig(parsed);

  const allBlocks = useMemo(() => buildBlocks(cv), [cv]);

  const { pagedBlocks, numPages } = usePagination(allBlocks, pageMetrics, contentRef);

  const handlePrint = usePrint({
    contentRef: printRef,
    documentTitle: fileName || 'CV',
    pageStyle: printCss,
  });

  const handleDownloadJson = () => downloadJson(jsonText, fileName);
  const handleLoadSample = () => setJsonText(getSampleJson(SAMPLE));

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
            onDownloadJson={handleDownloadJson}
            onLoadSample={handleLoadSample}
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

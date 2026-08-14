import React, { useRef, useMemo } from 'react';
import { FileType, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

  const {
    jsonText,
    setJsonText,
    fileName,
    setFileName,
    parsed,
    language,
    setLanguage,
    availableLanguages,
    cv,
  } = useCVData();

  const { pageMetrics, printCss } = usePageConfig(parsed);

  const allBlocks = useMemo(() => buildBlocks(cv), [cv]);

  const { pagedBlocks, numPages } = usePagination(allBlocks, pageMetrics, contentRef);

  const handlePrint = usePrint({
    contentRef: printRef,
    documentTitle: `${fileName || 'CV'}-${language.toUpperCase()}`,
    pageStyle: printCss,
  });

  const handleDownloadJson = () => downloadJson(jsonText, fileName);
  const handleLoadSample = () => setJsonText(getSampleJson(SAMPLE));

  return (
    <div className="work-surface min-h-screen w-full print-root">
      <header className="no-print sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-[1720px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand text-brand-foreground shadow-sm">
              <FileType className="h-4 w-4" />
            </div>
            <div className="flex items-baseline gap-2.5">
              <span className="text-[15px] font-semibold tracking-tight text-slate-900">
                CV Typewriter
              </span>
              <span className="hidden font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 md:inline">
                JSON to PDF
              </span>
            </div>
          </div>
          <Button
            onClick={handlePrint}
            className="h-9 gap-2 bg-brand px-4 font-semibold text-brand-foreground shadow-sm hover:bg-brand/90"
          >
            <Printer className="h-4 w-4" />
            Export PDF ({language.toUpperCase()})
          </Button>
        </div>
      </header>

      <div className="flex justify-center px-6 py-10">
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
            language={language}
            availableLanguages={availableLanguages}
            onLanguageChange={setLanguage}
            onDownloadJson={handleDownloadJson}
            onLoadSample={handleLoadSample}
            pageMetrics={pageMetrics}
            numPages={numPages}
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

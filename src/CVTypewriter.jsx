
import React, { useEffect, useMemo, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import EditorPanel from "@/features/cv-typewriter/components/EditorPanel";
import PreviewPanel from "@/features/cv-typewriter/components/PreviewPanel";
import SAMPLE from "@/features/cv-typewriter/sample";
import {
    cmToPx,
    mmToPx,
    normalizeCV,
    parseCm,
    safeJsonParse
} from "@/features/cv-typewriter/cvUtils.jsx";


// ---------------------------
// Main Component
// ---------------------------
export default function CVTypewriter() {
    const [jsonText, setJsonText] = useState(() => JSON.stringify(SAMPLE, null, 2));
    const [fileName, setFileName] = useState("Untitled");
    const parsed = useMemo(() => safeJsonParse(jsonText), [jsonText]);
    const cv = useMemo(() => normalizeCV(parsed.ok ? parsed.value : SAMPLE), [parsed.ok, parsed.value]);
    const printRef = useRef(null);

    const pageConfig = useMemo(() => {

        const raw = parsed.ok ? parsed.value : SAMPLE;
        const design = raw && typeof raw === "object" ? raw.design : null;
        const page = design && typeof design === "object" ? design.page : null;
        const topCm = parseCm(page?.top_margin, 2);
        const bottomCm = parseCm(page?.bottom_margin, 2);
        const leftCm = parseCm(page?.left_margin, 2);
        const rightCm = parseCm(page?.right_margin, 2);
        return {
            topCm,
            bottomCm,
            leftCm,
            rightCm
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
            contentHeightPx
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
        const blob = new Blob([jsonText], { type: "application/json;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${fileName || "Untitled"}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const loadSample = () => setJsonText(JSON.stringify(SAMPLE, null, 2));

    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: fileName || "Untitled",
        pageStyle: printCss,
    });


    const [numPages, setNumPages] = useState(1);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            const height = contentRef.current.scrollHeight;
            const pages = Math.ceil(height / pageMetrics.contentHeightPx);
            setNumPages(pages || 1);
        }
    }, [cv, pageMetrics, jsonText]); // Added jsonText to trigger on every edit




    return (
        <div className="min-h-screen w-full bg-[#f8fafc] print-root">
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] min-h-screen">
                <EditorPanel
                    fileName={fileName}
                    onFileNameChange={(e) => setFileName(e.target.value)}
                    jsonText={jsonText}
                    onJsonTextChange={(e) => setJsonText(e.target.value)}
                    parsed={parsed}
                    onPrint={handlePrint}
                    onDownloadJson={downloadJson}
                    onLoadSample={loadSample}
                />
                <PreviewPanel
                    cv={cv}
                    numPages={numPages}
                    pageMetrics={pageMetrics}
                    printRef={printRef}
                    contentRef={contentRef}
                />
                <div className="no-print hidden lg:block" />
            </div>
        </div>

    );
}

import React from "react";
import CVContent from "./CVContent";

export default function PreviewPanel({ cv, pagedBlocks, allBlocks, numPages, pageMetrics, printRef, contentRef }) {
    return (
        <div className="p-4 md:p-8 flex justify-center overflow-y-auto relative">
            <div
                className="absolute opacity-0 pointer-events-none overflow-hidden"
                style={{
                    width: `${pageMetrics.widthPx}px`,
                    paddingTop: `${pageMetrics.topPx}px`,
                    paddingBottom: `${pageMetrics.bottomPx}px`,
                    paddingLeft: `${pageMetrics.leftPx}px`,
                    paddingRight: `${pageMetrics.rightPx}px`
                }}
            >
                <CVContent ref={contentRef} cv={cv} paged layoutBlocks={allBlocks} />
            </div>

            <div ref={printRef} className="flex flex-col items-center">
                {(pagedBlocks.length ? pagedBlocks : Array.from({ length: numPages }).map(() => []))
                    .map((blocks, i) => (
                        <div
                            key={i}
                            className="print-container bg-white outline outline-1 outline-slate-200 shadow-sm mb-8 last:mb-0 relative"
                            style={{
                                width: `${pageMetrics.widthPx}px`,
                                height: `${pageMetrics.heightPx}px`,
                                boxSizing: "border-box"
                            }}
                        >
                            <div
                                className="cv-content box-border h-full"
                                style={{
                                    paddingTop: `${pageMetrics.topPx}px`,
                                    paddingBottom: `${pageMetrics.bottomPx}px`,
                                    paddingLeft: `${pageMetrics.leftPx}px`,
                                    paddingRight: `${pageMetrics.rightPx}px`
                                }}
                            >
                                <CVContent cv={cv} paged layoutBlocks={blocks} pageIndex={i} />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

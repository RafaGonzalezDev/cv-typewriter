import React from "react";
import CVContent from "./CVContent";

export default function PreviewPanel({ cv, numPages, pageMetrics, printRef, contentRef, spacers }) {
    return (
        <div className="p-4 md:p-8 flex justify-center overflow-y-auto relative">
            <div
                className="absolute opacity-0 pointer-events-none overflow-hidden"
                style={{
                    width: `${pageMetrics.widthPx}px`,
                    paddingLeft: `${pageMetrics.leftPx}px`,
                    paddingRight: `${pageMetrics.rightPx}px`
                }}
            >
                <CVContent ref={contentRef} cv={cv} spacers={spacers} />
            </div>

            <div ref={printRef} className="flex flex-col items-center">
                {Array.from({ length: numPages }).map((_, i) => (
                    <div
                        key={i}
                        className="print-container bg-white outline outline-1 outline-slate-200 shadow-sm mb-8 last:mb-0 relative overflow-hidden"
                        style={{
                            width: `${pageMetrics.widthPx}px`,
                            height: `${pageMetrics.heightPx}px`,
                            boxSizing: "border-box"
                        }}
                    >
                        <div
                            className="cv-content box-border"
                            style={{
                                paddingTop: `${pageMetrics.topPx}px`,
                                paddingBottom: `${pageMetrics.bottomPx}px`,
                                paddingLeft: `${pageMetrics.leftPx}px`,
                                paddingRight: `${pageMetrics.rightPx}px`,
                                height: "100%",
                                position: "relative"
                            }}
                        >
                            <div
                                style={{
                                    transform: `translateY(-${i * pageMetrics.contentHeightPx}px)`,
                                    position: "absolute",
                                    top: `${pageMetrics.topPx}px`,
                                    left: `${pageMetrics.leftPx}px`,
                                    right: `${pageMetrics.rightPx}px`
                                }}
                            >
                                <CVContent cv={cv} spacers={spacers} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

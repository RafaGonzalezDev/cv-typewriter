import { useMemo } from 'react';
import SAMPLE from '@/features/cv-typewriter/sample';
import { parseCm, cmToPx, mmToPx } from '@/features/cv-typewriter/cvUtils.jsx';

export function usePageConfig(parsed) {
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

  return {
    pageMetrics,
    printCss,
  };
}

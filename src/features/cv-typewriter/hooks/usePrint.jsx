import { useReactToPrint } from 'react-to-print';

export function usePrint({ contentRef, documentTitle, pageStyle }) {
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle,
    pageStyle,
  });

  return handlePrint;
}

import { useState, useMemo } from 'react';
import SAMPLE from '@/features/cv-typewriter/sample';
import { safeJsonParse, normalizeCV } from '@/features/cv-typewriter/cvUtils.jsx';

export function useCVData(initialJsonText = JSON.stringify(SAMPLE, null, 2)) {
  const [jsonText, setJsonText] = useState(initialJsonText);
  const [fileName, setFileName] = useState('CV');

  const parsed = useMemo(() => safeJsonParse(jsonText), [jsonText]);
  const cv = useMemo(
    () => normalizeCV(parsed.ok ? parsed.value : SAMPLE),
    [parsed.ok, parsed.value]
  );

  return {
    jsonText,
    setJsonText,
    fileName,
    setFileName,
    parsed,
    cv,
  };
}

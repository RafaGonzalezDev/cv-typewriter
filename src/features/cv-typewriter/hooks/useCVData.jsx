import { useMemo, useState } from 'react';
import SAMPLE from '@/features/cv-typewriter/sample';
import {
  deriveDocumentName,
  getAvailableLanguages,
  getDefaultLanguage,
  normalizeCV,
  safeJsonParse,
} from '@/features/cv-typewriter/cvUtils.jsx';

export function useCVData(initialJsonText = JSON.stringify(SAMPLE, null, 2)) {
  const [jsonText, setJsonText] = useState(initialJsonText);
  const [manualFileName, setManualFileName] = useState(null);
  const [language, setLanguage] = useState(() => getDefaultLanguage(SAMPLE));

  const parsed = useMemo(() => safeJsonParse(jsonText), [jsonText]);
  const raw = useMemo(() => (parsed.ok ? parsed.value : SAMPLE), [parsed.ok, parsed.value]);
  const availableLanguages = useMemo(() => getAvailableLanguages(raw), [raw]);
  const cv = useMemo(() => normalizeCV(raw, language), [raw, language]);

  const fileName = manualFileName ?? deriveDocumentName(cv);

  return {
    jsonText,
    setJsonText,
    fileName,
    setFileName: setManualFileName,
    resetFileName: () => setManualFileName(null),
    parsed,
    language: cv.language,
    setLanguage,
    availableLanguages,
    cv,
  };
}

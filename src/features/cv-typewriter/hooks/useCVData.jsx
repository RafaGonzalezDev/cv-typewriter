import { useState, useMemo } from 'react';
import SAMPLE from '@/features/cv-typewriter/sample';
import {
  getAvailableLanguages,
  getDefaultLanguage,
  normalizeCV,
  safeJsonParse,
} from '@/features/cv-typewriter/cvUtils.jsx';

export function useCVData(initialJsonText = JSON.stringify(SAMPLE, null, 2)) {
  const [jsonText, setJsonText] = useState(initialJsonText);
  const [fileName, setFileName] = useState('CV');
  const [language, setLanguage] = useState(() => getDefaultLanguage(SAMPLE));

  const parsed = useMemo(() => safeJsonParse(jsonText), [jsonText]);
  const raw = useMemo(() => (parsed.ok ? parsed.value : SAMPLE), [parsed.ok, parsed.value]);
  const availableLanguages = useMemo(() => getAvailableLanguages(raw), [raw]);
  const cv = useMemo(() => normalizeCV(raw, language), [raw, language]);

  return {
    jsonText,
    setJsonText,
    fileName,
    setFileName,
    parsed,
    language: cv.language,
    setLanguage,
    availableLanguages,
    cv,
  };
}

import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, CircleAlert, Download, RotateCcw } from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { cn } from '@/lib/utils';

const jsonEditorTheme = EditorView.theme({
  '&': {
    backgroundColor: '#ffffff',
    color: '#0f172a',
  },
  '.cm-content': {
    caretColor: '#0f172a',
  },
  '.cm-gutters': {
    backgroundColor: '#f8fafc',
    color: '#94a3b8',
    border: 'none',
  },
  '.cm-activeLine': {
    backgroundColor: '#f8fafc',
  },
  '.cm-selectionBackground': {
    backgroundColor: '#e2e8f0',
  },
  '&.cm-focused .cm-selectionBackground': {
    backgroundColor: '#e2e8f0',
  },
});

// Calm, corporate syntax palette: steel blue strings, navy numbers,
// slate punctuation. Replaces the harsh default red/green scheme.
const jsonHighlight = HighlightStyle.define([
  { tag: t.propertyName, color: '#334155' },
  { tag: t.string, color: '#3e6392' },
  { tag: t.number, color: '#123a63' },
  { tag: [t.bool, t.null], color: '#64748b' },
  { tag: [t.punctuation, t.bracket], color: '#64748b' },
  { tag: t.invalid, color: '#b91c1c' },
]);

const fieldLabel = 'text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500';

export default function EditorPanel({
  fileName,
  onFileNameChange,
  jsonText,
  onJsonTextChange,
  parsed,
  language,
  availableLanguages = [],
  onLanguageChange,
  onDownloadJson,
  onLoadSample,
  pageMetrics,
  numPages,
}) {
  const [downloaded, setDownloaded] = useState(false);
  const feedbackTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(feedbackTimer.current), []);

  const handleDownload = () => {
    onDownloadJson();
    setDownloaded(true);
    window.clearTimeout(feedbackTimer.current);
    feedbackTimer.current = window.setTimeout(() => setDownloaded(false), 1600);
  };

  return (
    <div className="no-print">
      <div
        className="w-full"
        style={{
          width: `${pageMetrics.widthPx}px`,
          height: `${pageMetrics.heightPx}px`,
        }}
      >
        <Card className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-panel">
          <div className="border-b border-slate-200/70 p-5">
            <div className="grid grid-cols-[1fr_auto] items-end gap-4">
              <div className="space-y-2">
                <label htmlFor="document-name" className={cn(fieldLabel, 'block pl-1')}>
                  Document Name
                </label>
                <Input
                  id="document-name"
                  value={fileName}
                  onChange={onFileNameChange}
                  placeholder="CV"
                  className="h-10 w-full border-slate-200 bg-slate-50 text-sm font-medium focus-visible:ring-brand"
                />
              </div>
              <fieldset>
                <legend className={cn(fieldLabel, 'mb-2 pl-1')}>Preview Language</legend>
                <div className="grid grid-cols-2 gap-1 rounded-lg border border-slate-200 bg-slate-100 p-1">
                  {availableLanguages.map((option) => {
                    const isActive = option.code === language;
                    return (
                      <Button
                        key={option.code}
                        type="button"
                        variant="ghost"
                        aria-pressed={isActive}
                        onClick={() => onLanguageChange(option.code)}
                        className={cn(
                          'h-8 gap-1.5 rounded-md px-4 text-xs font-semibold transition-colors',
                          isActive
                            ? 'bg-brand text-brand-foreground shadow-sm hover:bg-brand hover:text-brand-foreground'
                            : 'text-slate-600 hover:bg-white hover:text-slate-900'
                        )}
                      >
                        <span>{option.label}</span>
                        <span
                          className={cn(
                            'text-[10px] font-medium',
                            isActive ? 'text-brand-foreground/70' : 'text-slate-400'
                          )}
                        >
                          {option.name}
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </fieldset>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-3 p-5">
            <div className="flex items-center justify-between">
              <label className={cn(fieldLabel, 'pl-1')}>JSON Editor</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={handleDownload}
                  className="h-8 gap-2 px-3 text-xs font-semibold text-slate-700"
                >
                  {downloaded ? (
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                  ) : (
                    <Download className="h-3.5 w-3.5" />
                  )}
                  {downloaded ? 'Downloaded' : 'JSON'}
                </Button>
                <Button
                  variant="ghost"
                  onClick={onLoadSample}
                  className="h-8 gap-2 px-3 text-xs font-semibold text-slate-500 hover:text-slate-900"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reset
                </Button>
              </div>
            </div>

            <div className="json-editor font-jetbrains-mono relative min-h-0 flex-1 overflow-hidden rounded-md border border-slate-200 bg-white">
              <CodeMirror
                value={jsonText}
                height="100%"
                extensions={[json(), jsonEditorTheme, syntaxHighlighting(jsonHighlight)]}
                onChange={(value) => onJsonTextChange({ target: { value } })}
                basicSetup={{
                  lineNumbers: true,
                  foldGutter: false,
                  highlightActiveLine: false,
                  highlightActiveLineGutter: false,
                  syntaxHighlighting: false,
                }}
                className="h-full text-[13px]"
              />
            </div>

            {!parsed.ok && (
              <div
                role="alert"
                className="animate-in fade-in slide-in-from-top-2 flex items-start gap-2.5 rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700"
              >
                <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  <span className="font-semibold">Syntax error:</span> {parsed.error}
                </p>
              </div>
            )}
          </div>

          <footer className="flex h-9 shrink-0 items-center justify-between border-t border-slate-200/70 bg-slate-50 px-5 font-mono text-[11px] text-slate-500">
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'h-1.5 w-1.5 rounded-full',
                  parsed.ok ? 'bg-emerald-500' : 'bg-red-500'
                )}
              />
              <span className="uppercase tracking-[0.14em]">
                {parsed.ok ? 'Valid JSON' : 'Syntax error'}
              </span>
            </span>
            <span className="tabular-nums">
              {jsonText.length} chars · {numPages} {numPages === 1 ? 'page' : 'pages'}
            </span>
          </footer>
        </Card>
      </div>
    </div>
  );
}

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Download, Printer, RotateCcw, FileJson } from "lucide-react";

export default function EditorPanel({
    fileName,
    onFileNameChange,
    jsonText,
    onJsonTextChange,
    parsed,
    onPrint,
    onDownloadJson,
    onLoadSample,
    pageMetrics
}) {
    return (
        <div className="no-print">
            <div
                className="w-full"
                style={{
                    width: `${pageMetrics.widthPx}px`,
                    height: `${pageMetrics.heightPx}px`
                }}
            >
                <Card className="border border-slate-200 shadow-none rounded-none overflow-hidden bg-white h-full w-full flex flex-col">
                    <CardHeader className="bg-white text-slate-900 p-5 border-b border-slate-200/70">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-base font-semibold tracking-tight">CV Typewriter</CardTitle>
                            <FileJson className="w-4 h-4 text-slate-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6 flex-1 overflow-hidden flex flex-col">
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Document Name</label>
                                <Input
                                    value={fileName}
                                    onChange={onFileNameChange}
                                    placeholder="Untitled"
                                    className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-primary focus-visible:border-none text-base font-medium w-full"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Quick Actions</label>
                                <div className="grid grid-cols-1 gap-2">
                                    <Button onClick={onPrint} className="h-12 px-4 shadow-md hover:shadow-lg transition-all gap-2 font-bold">
                                        <Printer className="w-4 h-4" />
                                        Export PDF
                                    </Button>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Button
                                            variant="secondary"
                                            onClick={onDownloadJson}
                                            className="h-12 px-4 gap-2 font-bold bg-slate-200 text-slate-900 hover:bg-slate-300 transition-colors"
                                        >
                                            <Download className="w-4 h-4" />
                                            JSON
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            onClick={onLoadSample}
                                            className="h-12 px-4 gap-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all font-semibold"
                                        >
                                            <RotateCcw className="w-4 h-4" />
                                            Reset
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 flex-1 flex flex-col min-h-0">
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">JSON Editor</label>
                                <Badge
                                    variant="outline"
                                    className="bg-white/50 backdrop-blur-sm border-slate-200 text-slate-400 font-mono text-[10px]"
                                >
                                    {jsonText.length} chars
                                </Badge>
                            </div>
                            <div className="relative group overflow-hidden border border-slate-200 bg-slate-50 flex-1 min-h-0">
                                <Textarea
                                    className="font-mono text-[13px] p-6 bg-transparent border-none resize-none focus-visible:ring-0 leading-relaxed scrollbar-thin scrollbar-thumb-slate-200 w-full h-full"
                                    value={jsonText}
                                    onChange={onJsonTextChange}
                                    spellCheck={false}
                                />
                            </div>
                            {!parsed.ok && (
                                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg text-sm text-red-700 font-semibold animate-in fade-in slide-in-from-top-2">
                                    ⚠️ SYNTAX ERROR: {parsed.error}
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

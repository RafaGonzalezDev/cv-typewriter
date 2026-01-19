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
    onLoadSample
}) {
    return (
        <div className="flex justify-center lg:justify-end p-4 md:p-8 no-print">
            <div className="w-full max-w-md lg:w-[400px] xl:w-[450px]">
                <Card className="shadow-xl border-none overflow-hidden bg-white/80 backdrop-blur-md sticky top-8 max-h-[calc(100vh-4rem)] flex flex-col">
                    <CardHeader className="bg-white/80 text-slate-900 p-5 border-b border-slate-200/70">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-base font-semibold tracking-tight">CV Typewriter</CardTitle>
                            <FileJson className="w-4 h-4 text-slate-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6 overflow-y-auto flex-grow">
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
                                            className="h-12 px-4 gap-2 font-bold bg-slate-100 hover:bg-slate-200 transition-colors"
                                        >
                                            <Download className="w-4 h-4" />
                                            JSON
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            onClick={onLoadSample}
                                            className="h-12 px-4 gap-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all font-semibold"
                                        >
                                            <RotateCcw className="w-4 h-4" />
                                            Reset
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">JSON Editor</label>
                                <Badge
                                    variant="outline"
                                    className="bg-white/50 backdrop-blur-sm border-slate-200 text-slate-400 font-mono text-[10px]"
                                >
                                    {jsonText.length} chars
                                </Badge>
                            </div>
                            <div className="relative group rounded-2xl overflow-hidden border-2 border-slate-100 transition-all focus-within:border-primary/20 bg-slate-50 flex-grow">
                                <Textarea
                                    className="font-mono text-[13px] min-h-[400px] p-6 bg-transparent border-none resize-y focus-visible:ring-0 leading-relaxed scrollbar-thin scrollbar-thumb-slate-200 w-full h-full"
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

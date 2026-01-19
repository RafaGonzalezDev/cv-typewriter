
import React, { useEffect, useMemo, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Printer, RotateCcw, FileJson } from "lucide-react";
import { useReactToPrint } from 'react-to-print';


// ---------------------------
// Helpers
// ---------------------------
function safeJsonParse(text) {
    try {
        const value = JSON.parse(text);
        return { ok: true, value, error: null };
    } catch (e) {
        return { ok: false, value: null, error: e instanceof Error ? e.message : String(e) };
    }
}

function asArray(v) {
    return Array.isArray(v) ? v : [];
}

function nonEmpty(s) {
    return typeof s === "string" && s.trim().length > 0;
}

function joinNonEmpty(parts, sep = " • ") {
    return parts.filter(nonEmpty).join(sep);
}

function formatDateRange(start, end) {
    const s = nonEmpty(start) ? start : "";
    const e = nonEmpty(end) ? end : "";
    if (!s && !e) return "";
    if (s && !e) return `${s} – Present`;
    if (!s && e) return e;
    return `${s} – ${e}`;
}

function parseCm(value, fallback) {
    if (typeof value === "string" && value.trim().endsWith("cm")) {
        const parsed = Number.parseFloat(value);
        return Number.isFinite(parsed) ? parsed : fallback;
    }
    if (typeof value === "number" && Number.isFinite(value)) {
        return value;
    }
    return fallback;
}

function cmToPx(cm) {
    const pxPerMm = 96 / 25.4;
    return cm * 10 * pxPerMm;
}

function mmToPx(mm) {
    const pxPerMm = 96 / 25.4;
    return mm * pxPerMm;
}

function toPx(value) {
    return `${value.toFixed(2)}px`;
}


function renderTextWithLinks(text) {
    if (!text) return "";
    const parts = String(text).split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
            return (
                <a key={i} href={match[2]} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-primary transition-colors">
                    {match[1]}
                </a>
            );
        }
        return part;
    });
}

function getSocialUrl(network, username) {
    if (!username) return null;
    const net = String(network).toLowerCase();
    if (net.includes("linkedin")) return `https://linkedin.com/in/${username}`;
    if (net.includes("github")) return `https://github.com/${username}`;
    return null;
}

function normalizeCV(raw) {
    const r = raw && typeof raw === "object" ? raw : {};
    const cv = (r.cv && typeof r.cv === "object") ? r.cv : {};
    const sections = (cv.sections && typeof cv.sections === "object") ? cv.sections : {};

    return {
        basics: {
            name: nonEmpty(cv.name) ? cv.name : "Untitled",
            location: nonEmpty(cv.location) ? cv.location : "",
            email: nonEmpty(cv.email) ? cv.email : "",
            phone: nonEmpty(cv.phone) ? cv.phone : "",
            website: nonEmpty(cv.website) ? cv.website : "",
            social: asArray(cv.social_networks),
        },
        sections: {
            summary: asArray(sections.professional_summary),
            experience: asArray(sections.experience),
            education: asArray(sections.education),
            technologies: asArray(sections.technologies),
            projects: asArray(sections.projects),
        }
    };
}

function Section({ title, children }) {
    return (
        <section className="mt-8 first:mt-0 break-inside-avoid">
            <div className="flex items-end justify-between">
                <h2 className="text-[13px] font-bold tracking-[0.15em] uppercase text-primary/80">{title}</h2>
            </div>
            <Separator className="mt-1 bg-primary/20 h-px" />
            <div className="mt-4">{children}</div>
        </section>
    );
}


function ExperienceEntry({ entry }) {
    const title = nonEmpty(entry.position) ? entry.position : "";
    const org = nonEmpty(entry.company) ? entry.company : "";
    const location = nonEmpty(entry.location) ? entry.location : "";
    const date = formatDateRange(entry.start_date, entry.end_date);
    const sub = joinNonEmpty([org, location]);

    return (
        <div className="grid grid-cols-[1fr_auto] gap-3 py-3 text-left">
            <div>
                <div className="text-[14px] font-bold leading-snug text-foreground">
                    {renderTextWithLinks(title)}
                    {sub ? (
                        <span className="text-[12.5px] font-medium text-muted-foreground italic ml-2">
                            {sub}
                        </span>
                    ) : null}
                </div>
                {asArray(entry.highlights).length ? (
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-[13px] leading-snug text-foreground/80">
                        {entry.highlights.map((h, i) => (
                            <li key={i}>{renderTextWithLinks(h)}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
            <div className="text-[12.5px] font-semibold text-primary/70 whitespace-nowrap pt-0.5">{date}</div>
        </div>
    );

}

function EducationEntry({ entry }) {
    const title = nonEmpty(entry.degree) ? entry.degree : "";
    const org = nonEmpty(entry.institution) ? entry.institution : "";
    const area = nonEmpty(entry.area) ? entry.area : "";
    const date = formatDateRange(entry.start_date, entry.end_date);
    const sub = joinNonEmpty([org, area]);

    return (
        <div className="grid grid-cols-[1fr_auto] gap-3 py-2 text-left">
            <div>
                <div className="text-[14px] font-bold leading-snug">
                    {title}
                    {sub ? (
                        <span className="text-[12.5px] font-medium text-muted-foreground italic ml-2">
                            {sub}
                        </span>
                    ) : null}
                </div>
            </div>
            <div className="text-[12.5px] font-semibold text-primary/70 whitespace-nowrap pt-0.5">{date}</div>
        </div>
    );
}


function ProjectEntry({ entry }) {
    const name = nonEmpty(entry.name) ? entry.name : "";
    return (
        <div className="py-2 text-left">
            <div className="text-[14px] font-bold leading-snug">{renderTextWithLinks(name)}</div>
            {asArray(entry.highlights).length ? (
                <ul className="mt-2 list-disc pl-5 space-y-1.5 text-[13px] leading-relaxed text-foreground/80">
                    {entry.highlights.map((h, i) => (
                        <li key={i}>{renderTextWithLinks(h)}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

function TechBlock({ items }) {
    return (
        <div className="space-y-3 text-left">
            {items.map((it, i) => (
                <div key={i} className="grid grid-cols-[160px_1fr] gap-4">
                    <div className="text-[13px] font-bold text-primary/80">{it.label}</div>
                    <div className="text-[13px] leading-relaxed text-foreground/90">{it.details}</div>
                </div>
            ))}
        </div>
    );
}

// ---------------------------
// Sample JSON
// ---------------------------
const SAMPLE = {
    "cv": {
        "name": "Rafa González Rubio",
        "location": "Córdoba, Spain",
        "email": null,
        "phone": null,
        "website": null,
        "social_networks": [
            {
                "network": "LinkedIn",
                "username": "rafa-gonzález-rubio-2977aa171"
            },
            {
                "network": "GitHub",
                "username": "RafaGonzalezDev"
            }
        ],
        "sections": {
            "professional_summary": [
                "Frontend software engineer (Angular/TypeScript) with experience in microfrontends, NgRx, and scalable architecture in enterprise environments. Focused on automation and AI-assisted development to speed up workflows and improve continuous delivery."
            ],
            "experience": [
                {
                    "company": "Banco Santander",
                    "position": "Software Developer (Internal)",
                    "start_date": "2025-09",
                    "end_date": "present",
                    "location": "Madrid, Spain",
                    "summary": null,
                    "highlights": [
                        "End-to-end ownership of 2 microfrontends: development, maintenance, releases, and deployments.",
                        "Designed and evolved frontend solutions in a high-availability banking environment (Angular/TypeScript).",
                        "Built a CLI tool (Node.js + TypeScript) for end-to-end microfrontend i18n: .xlf -> CSV -> batch translation via API -> locale generation.",
                        "Reduced i18n effort from days to minutes, enabling faster deliveries and cross-team adoption.",
                        "Cross-functional collaboration with QA, engineering, and business to ensure quality and continuous delivery.",
                        "1:1 mentoring to standardize and speed up development workflows using MCP-based tooling."
                    ]
                },
                {
                    "company": "UST Global | Banco Santander",
                    "position": "Software Developer",
                    "start_date": "2023-11",
                    "end_date": "2025-08",
                    "location": "Madrid, Spain",
                    "summary": null,
                    "highlights": [
                        "Led end-to-end development and optimization of an Angular/TypeScript microfrontend.",
                        "Implemented NgRx and a custom state approach, improving performance and consistency.",
                        "Designed a custom routing system for microfrontends encapsulated via Module Federation.",
                        "Improved stability and quality by strengthening unit tests (Jasmine/Karma) to meet SonarQube quality gates and Jenkins pipeline validations.",
                        "Onboarded and mentored a new team member, enabling faster ramp-up and alignment with project standards."
                    ]
                },
                {
                    "company": "GrayHats (Internship)",
                    "position": "Software Developer",
                    "start_date": "2023-03",
                    "end_date": "2023-08",
                    "location": null,
                    "summary": null,
                    "highlights": [
                        "Built solutions with React and GraphQL, improving operational efficiency.",
                        "Developed backend services with AWS Amplify, ensuring secure integration and scalability."
                    ]
                }
            ],
            "technologies": [
                {
                    "label": "Frontend",
                    "details": "Angular, TypeScript, React, NgRx"
                },
                {
                    "label": "Architecture",
                    "details": "Microfrontends, Module Federation"
                },
                {
                    "label": "Backend / Cloud",
                    "details": "Node.js, GraphQL/REST, AWS"
                },
                {
                    "label": "AI-assisted development",
                    "details": "Copilot Enterprise; AGENTS.md and prompts; task-specific chat modes and MCP/tool invocation."
                }
            ],
            "projects": [
                {
                    "name": "[YouTube Transcript Extractor](https://github.com/RafaGonzalezDev/youtube-transcript-cli)",
                    "highlights": [
                        "Extracts YouTube transcripts for AI analysis workflows (text/markdown export)."
                    ]
                },
                {
                    "name": "[Accessible Color Palette Generator (WCAG 2.2)](https://github.com/RafaGonzalezDev/wcag_design)",
                    "highlights": [
                        "Generates accessible color palettes (WCAG 2.2), built with AI assistance and Shadcn MCP."
                    ]
                }
            ],
            "education": [
                {
                    "institution": "MEDAC",
                    "area": "Web Application Development",
                    "degree": "Higher National Diploma (HND)",
                    "start_date": "2021-09",
                    "end_date": "2023-06",
                    "location": null,
                    "summary": null,
                    "highlights": []
                }
            ]
        },
        "sort_entries": "none"
    },
    "design": {
        "theme": "engineeringresumes",
        "page": {
            "size": "a4",
            "top_margin": "1.0cm",
            "bottom_margin": "1.5cm",
            "left_margin": "1.5cm",
            "right_margin": "1.5cm",

            "show_page_numbering": false,
            "show_last_updated_date": true
        }
    },
    "locale": {
        "language": "en",
        "phone_number_format": "national",
        "page_numbering_template": "NAME - Page PAGE_NUMBER of TOTAL_PAGES",
        "last_updated_date_template": "Last updated in TODAY",
        "date_template": "MONTH_ABBREVIATION YEAR",
        "month": "month",
        "months": "months",
        "year": "year",
        "years": "years",
        "present": "present",
        "to": "–",
        "abbreviations_for_months": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        "full_names_of_months": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
    },
    "rendercv_settings": {
        "date": "2026-01-17",
        "bold_keywords": [],
        "sort_entries": "none"
    }
};

// ---------------------------
// Main Component
// ---------------------------
export default function CVTypewriter() {
    const [jsonText, setJsonText] = useState(() => JSON.stringify(SAMPLE, null, 2));
    const [fileName, setFileName] = useState("Untitled");
    const parsed = useMemo(() => safeJsonParse(jsonText), [jsonText]);
    const cv = useMemo(() => normalizeCV(parsed.ok ? parsed.value : SAMPLE), [parsed.ok, parsed.value]);
    const printRef = useRef(null);

    const pageConfig = useMemo(() => {

        const raw = parsed.ok ? parsed.value : SAMPLE;
        const design = raw && typeof raw === "object" ? raw.design : null;
        const page = design && typeof design === "object" ? design.page : null;
        const topCm = parseCm(page?.top_margin, 2);
        const bottomCm = parseCm(page?.bottom_margin, 2);
        const leftCm = parseCm(page?.left_margin, 2);
        const rightCm = parseCm(page?.right_margin, 2);
        return {
            topCm,
            bottomCm,
            leftCm,
            rightCm
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
            contentHeightPx
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
    }, [pageConfig, pageMetrics]);

    const downloadJson = () => {
        const blob = new Blob([jsonText], { type: "application/json;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${fileName || "Untitled"}.json`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    const loadSample = () => setJsonText(JSON.stringify(SAMPLE, null, 2));

    const handlePrint = useReactToPrint({
        contentRef: printRef,
        documentTitle: fileName || "Untitled",
        pageStyle: printCss,
    });


    const [numPages, setNumPages] = useState(1);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            const height = contentRef.current.scrollHeight;
            const pages = Math.ceil(height / pageMetrics.contentHeightPx);
            setNumPages(pages || 1);
        }
    }, [cv, pageMetrics, jsonText]); // Added jsonText to trigger on every edit

    const contactLine = joinNonEmpty(
        [cv.basics.email, cv.basics.phone, cv.basics.website],
        " | "
    );

    const renderCVContent = () => (
        <div ref={contentRef} className="cv-content-inner">
            <div className="text-center">
                <div className="text-[30px] sm:text-[34px] font-semibold text-slate-900 leading-[1.15] mb-5 tracking-tight">{cv.basics.name}</div>

                {contactLine ? (
                    <div className="text-[13px] text-slate-500 font-bold mb-3 tracking-wide">{contactLine}</div>
                ) : null}
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[12.5px] mb-5">
                    {cv.basics.location ? (
                        <span className="flex items-center text-slate-600 font-medium">
                            <span className="font-bold text-slate-900">Location:</span>
                            <span className="ml-1">{cv.basics.location}</span>
                        </span>
                    ) : null}
                    {asArray(cv.basics.social).map((s, i) => {
                        const url = getSocialUrl(s.network, s.username);
                        const content = (
                            <>
                                <span className="font-bold text-slate-900">{s.network}:</span>
                                <span className="text-slate-600 font-medium ml-1">{s.username}</span>
                            </>
                        );
                        return url ? (
                            <a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-primary transition-all flex items-center"
                            >
                                {content}
                            </a>
                        ) : (
                            <span key={i} className="flex items-center">
                                {content}
                            </span>
                        );
                    })}
                </div>
            </div>

            {/* Sections */}
            <div className="space-y-6">
                {cv.sections.summary.length ? (
                    <Section title="Professional Summary">
                        <div className="text-[13.5px] text-left leading-[1.6] text-slate-800 font-medium tracking-tight">
                            {cv.sections.summary.map((s, i) => (
                                <p key={i}>{s}</p>
                            ))}
                        </div>
                    </Section>
                ) : null}

                {cv.sections.experience.length ? (
                    <Section title="Experience">
                        <div className="space-y-0 line-clamp-none">
                            {cv.sections.experience.map((e, i) => (
                                <ExperienceEntry key={i} entry={e} />
                            ))}
                        </div>
                    </Section>
                ) : null}

                {cv.sections.technologies.length ? (
                    <Section title="Technical Expertise">
                        <TechBlock items={cv.sections.technologies} />
                    </Section>
                ) : null}

                {cv.sections.projects.length ? (
                    <Section title="Featured Projects">
                        {cv.sections.projects.map((p, i) => (
                            <ProjectEntry key={i} entry={p} />
                        ))}
                    </Section>
                ) : null}

                {cv.sections.education.length ? (
                    <Section title="Education">
                        <div className="space-y-2">
                            {cv.sections.education.map((e, i) => (
                                <EducationEntry key={i} entry={e} />
                            ))}
                        </div>
                    </Section>
                ) : null}
            </div>
        </div>
    );


    return (
        <div className="min-h-screen w-full bg-[#f8fafc] print-root">
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] min-h-screen">
                {/* Left Column: Editor */}
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
                                            onChange={(e) => setFileName(e.target.value)}
                                            placeholder="Untitled"
                                            className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-primary focus-visible:border-none text-base font-medium w-full"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Quick Actions</label>
                                        <div className="grid grid-cols-1 gap-2">
                                            <Button onClick={handlePrint} className="h-12 px-4 shadow-md hover:shadow-lg transition-all gap-2 font-bold">
                                                <Printer className="w-4 h-4" />
                                                Export PDF
                                            </Button>
                                            <div className="grid grid-cols-2 gap-2">
                                                <Button variant="secondary" onClick={downloadJson} className="h-12 px-4 gap-2 font-bold bg-slate-100 hover:bg-slate-200 transition-colors">
                                                    <Download className="w-4 h-4" />
                                                    JSON
                                                </Button>
                                                <Button variant="ghost" onClick={loadSample} className="h-12 px-4 gap-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all font-semibold">
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
                                        <Badge variant="outline" className="bg-white/50 backdrop-blur-sm border-slate-200 text-slate-400 font-mono text-[10px]">
                                            {jsonText.length} chars
                                        </Badge>
                                    </div>
                                    <div className="relative group rounded-2xl overflow-hidden border-2 border-slate-100 transition-all focus-within:border-primary/20 bg-slate-50 flex-grow">
                                        <Textarea
                                            className="font-mono text-[13px] min-h-[400px] p-6 bg-transparent border-none resize-y focus-visible:ring-0 leading-relaxed scrollbar-thin scrollbar-thumb-slate-200 w-full h-full"
                                            value={jsonText}
                                            onChange={(e) => setJsonText(e.target.value)}
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

                {/* Middle Column: CV Preview */}
                <div className="p-4 md:p-8 flex justify-center bg-slate-100/50 overflow-y-auto relative">
                    {/* Hidden measurer to calculate number of pages */}
                    <div className="absolute opacity-0 pointer-events-none overflow-hidden" style={{ 
                        width: `${pageMetrics.widthPx}px`,
                        paddingLeft: `${pageMetrics.leftPx}px`,
                        paddingRight: `${pageMetrics.rightPx}px`,
                    }}>
                        {renderCVContent()}
                    </div>

                    <div ref={printRef} className="flex flex-col items-center">
                        {Array.from({ length: numPages }).map((_, i) => (
                            <div
                                key={i}
                                className="print-container bg-white outline outline-1 outline-slate-200 shadow-sm mb-8 last:mb-0 relative overflow-hidden"
                                style={{
                                    width: `${pageMetrics.widthPx}px`,
                                    height: `${pageMetrics.heightPx}px`,
                                    boxSizing: 'border-box'
                                }}
                            >
                                <div className="cv-content box-border" style={{
                                    paddingTop: `${pageMetrics.topPx}px`,
                                    paddingBottom: `${pageMetrics.bottomPx}px`,
                                    paddingLeft: `${pageMetrics.leftPx}px`,
                                    paddingRight: `${pageMetrics.rightPx}px`,
                                    height: '100%',
                                    position: 'relative'
                                }}>
                                    <div style={{ 
                                        transform: `translateY(-${i * pageMetrics.contentHeightPx}px)`,
                                        position: 'absolute',
                                        top: `${pageMetrics.topPx}px`,
                                        left: `${pageMetrics.leftPx}px`,
                                        right: `${pageMetrics.rightPx}px`
                                    }}>
                                        {renderCVContent()}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Spacer to center Middle Column */}
                <div className="no-print hidden lg:block" />
            </div>
        </div>
    );
}

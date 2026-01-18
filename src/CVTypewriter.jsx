
import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Printer, RotateCcw, FileJson } from "lucide-react";

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
        <section className="mt-8 first:mt-0">
            <div className="flex items-end justify-between">
                <h2 className="text-[13px] font-bold tracking-[0.15em] uppercase text-primary/80">{title}</h2>
            </div>
            <Separator className="mt-2 bg-primary/20 h-[1.5px]" />
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
                <div className="text-[14px] font-bold leading-snug text-foreground">{renderTextWithLinks(title)}</div>
                {sub ? <div className="text-[12.5px] font-medium text-muted-foreground mt-0.5 italic">{sub}</div> : null}
                {asArray(entry.highlights).length ? (
                    <ul className="mt-2 list-disc pl-5 space-y-1.5 text-[13px] leading-relaxed text-foreground/80">
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
                <div className="text-[14px] font-bold leading-snug">{title}</div>
                {sub ? <div className="text-[12.5px] font-medium text-muted-foreground mt-0.5 italic">{sub}</div> : null}
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
            "top_margin": "2cm",
            "bottom_margin": "2cm",
            "left_margin": "2cm",
            "right_margin": "2cm",
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

    useEffect(() => {
        const id = "oxford-cv-print-css";
        if (document.getElementById(id)) return;
        const style = document.createElement("style");
        style.id = id;
        style.innerHTML = `
      @media print {
        html, body { height: auto; }
        .no-print { display: none !important; }
        .print-root { background: white !important; }
        .print-card { box-shadow: none !important; border: none !important; margin: 0 !important; }
        a { color: inherit !important; text-decoration: none !important; }
        * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        @page { size: A4; margin: 15mm 15mm 15mm 15mm; }
      }
    `;
        document.head.appendChild(style);
    }, []);

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
    const printPDF = () => window.print();

    const contactLine = joinNonEmpty(
        [cv.basics.location, cv.basics.email, cv.basics.phone, cv.basics.website],
        " | "
    );

    return (
        <div className="min-h-screen w-full bg-[#f8fafc] p-4 md:p-8 print-root pb-20">
            <div className="mx-auto max-w-4xl flex flex-col gap-8">
                {/* Editor Card (Top) */}
                <Card className="no-print shadow-xl border-none overflow-hidden bg-white/80 backdrop-blur-md">
                    <CardHeader className="bg-slate-900 text-white p-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary rounded-lg">
                                <FileJson className="w-6 h-6" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-bold tracking-tight">CV Typewriter</CardTitle>
                                <div className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em] mt-1">AI-Powered YAML/JSON Editor</div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-8">
                        <div className="flex flex-col md:flex-row items-end gap-6">
                            <div className="w-full md:flex-1 space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Document Name</label>
                                <Input
                                    value={fileName}
                                    onChange={(e) => setFileName(e.target.value)}
                                    placeholder="Untitled"
                                    className="h-12 bg-slate-50 border-slate-200 focus-visible:ring-primary focus-visible:border-none text-base font-medium"
                                />
                            </div>
                            <div className="w-full md:w-auto space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Quick Actions</label>
                                <div className="flex flex-wrap gap-2">
                                    <Button onClick={printPDF} className="h-12 px-6 shadow-md hover:shadow-lg transition-all gap-2 font-bold">
                                        <Printer className="w-4 h-4" />
                                        Print PDF
                                    </Button>
                                    <Button variant="secondary" onClick={downloadJson} className="h-12 px-5 gap-2 font-bold bg-slate-100 hover:bg-slate-200 transition-colors">
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

                        <Tabs defaultValue="json" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 p-1 bg-slate-100 rounded-xl h-14">
                                <TabsTrigger value="json" className="rounded-lg h-12 text-sm font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">EDITOR CONTENT</TabsTrigger>
                                <TabsTrigger value="schema" className="rounded-lg h-12 text-sm font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">DOCUMENTATION</TabsTrigger>
                            </TabsList>
                            <TabsContent value="json" className="mt-6 space-y-4">
                                <div className="relative group rounded-2xl overflow-hidden border-2 border-slate-100 transition-all focus-within:border-primary/20 bg-slate-50">
                                    <Textarea
                                        className="font-mono text-[13px] min-h-[450px] p-6 bg-transparent border-none resize-y focus-visible:ring-0 leading-relaxed scrollbar-thin scrollbar-thumb-slate-200"
                                        value={jsonText}
                                        onChange={(e) => setJsonText(e.target.value)}
                                        spellCheck={false}
                                    />
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <Badge variant="outline" className="bg-white/50 backdrop-blur-sm border-slate-200 text-slate-400 font-mono text-[10px]">
                                            {jsonText.length} chars
                                        </Badge>
                                    </div>
                                </div>
                                {!parsed.ok && (
                                    <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg text-sm text-red-700 font-semibold animate-in fade-in slide-in-from-top-2">
                                        ⚠️ SYNTAX ERROR: {parsed.error}
                                    </div>
                                )}
                            </TabsContent>
                            <TabsContent value="schema" className="mt-6 text-sm space-y-6 p-8 bg-slate-50/50 rounded-2xl border border-slate-100">
                                <div className="space-y-3">
                                    <h3 className="font-bold text-slate-900 text-lg">About RenderCV Schema</h3>
                                    <p className="text-slate-600 leading-relaxed">This editor follows the standardized RenderCV structure. This allows you to export your data and use it with other tools in the ecosystem.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Badge variant="secondary" className="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center p-0">1</Badge>
                                            <span className="font-bold text-slate-800">Identify basics</span>
                                        </div>
                                        <p className="text-xs text-slate-500 ml-11">Name, social networks (GitHub, LinkedIn), and general location info.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Badge variant="secondary" className="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center p-0">2</Badge>
                                            <span className="font-bold text-slate-800">Define sections</span>
                                        </div>
                                        <p className="text-xs text-slate-500 ml-11">Group your experience, education, and projects under <code>sections</code>.</p>
                                    </div>
                                </div>

                                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                                    <p className="text-[12px] text-primary font-bold">💡 PRO TIP</p>
                                    <p className="text-[12px] text-primary/80 mt-1 italic">Use Markdown syntax `[title](url)` anywhere in highlights to create links.</p>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* Preview Card (Bottom) */}
                <Card className="print-card shadow-2xl border-none bg-white rounded-none">
                    <CardContent className="p-12 md:p-20">
                        <div className="text-center mb-10">
                            <div className="text-[38px] font-semibold text-slate-900 leading-tight mb-2 tracking-tight">{cv.basics.name}</div>
                            {contactLine ? (
                                <div className="text-[13px] text-slate-500 font-bold mb-3 tracking-wide">{contactLine}</div>
                            ) : null}
                            {asArray(cv.basics.social).length ? (
                                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                                    {cv.basics.social.map((s, i) => {
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
                                                className="text-[12.5px] hover:text-primary transition-all flex items-center"
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            <span key={i} className="text-[12.5px] flex items-center">
                                                {content}
                                            </span>
                                        );
                                    })}
                                </div>
                            ) : null}
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
                    </CardContent>
                </Card>

                <div className="no-print mt-4 mb-20 text-center text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">
                    Final Output Optimized for A4 Standards
                </div>
            </div>
        </div>
    );
}

import React, { forwardRef } from "react";
import { asArray, getSocialUrl, joinNonEmpty } from "../cvUtils.jsx";
import EducationEntry from "./entries/EducationEntry";
import ExperienceEntry from "./entries/ExperienceEntry";
import ProjectEntry from "./entries/ProjectEntry";
import TechBlock from "./blocks/TechBlock";
import Section from "./sections/Section";

const CVContent = forwardRef(function CVContent({ cv }, ref) {
    const contactLine = joinNonEmpty([cv.basics.email, cv.basics.phone, cv.basics.website], " | ");

    return (
        <div ref={ref} className="cv-content-inner">
            <div className="text-center">
                <div className="text-[30px] sm:text-[34px] font-semibold text-slate-900 leading-[1.15] mb-5 tracking-tight">
                    {cv.basics.name}
                </div>

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

            <div>
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
                        <div className="space-y-0">
                            {cv.sections.education.map((e, i) => (
                                <EducationEntry key={i} entry={e} />
                            ))}
                        </div>
                    </Section>
                ) : null}
            </div>
        </div>
    );
});

export default CVContent;

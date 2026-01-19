import React from "react";
import { asArray, nonEmpty, renderTextWithLinks } from "../../cvUtils.jsx";

export default function ProjectEntry({ entry }) {
    const name = nonEmpty(entry.name) ? entry.name : "";
    return (
        <div className="pt-[var(--cv-entry-pad-y)] pb-[var(--cv-entry-pad-y)] first:pt-0 last:pb-0 text-left">
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

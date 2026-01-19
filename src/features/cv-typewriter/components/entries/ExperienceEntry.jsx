import React from "react";
import { asArray, formatDateRange, joinNonEmpty, nonEmpty, renderTextWithLinks } from "../../cvUtils.jsx";

export default function ExperienceEntry({ entry }) {
    const title = nonEmpty(entry.position) ? entry.position : "";
    const org = nonEmpty(entry.company) ? entry.company : "";
    const location = nonEmpty(entry.location) ? entry.location : "";
    const date = formatDateRange(entry.start_date, entry.end_date);
    const sub = joinNonEmpty([org, location]);

    return (
        <div className="grid grid-cols-[1fr_auto] gap-3 pt-[var(--cv-entry-pad-y)] pb-[var(--cv-entry-pad-y)] first:pt-0 last:pb-0 text-left">
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

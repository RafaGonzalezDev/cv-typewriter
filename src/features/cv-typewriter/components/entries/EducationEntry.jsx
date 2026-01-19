import React from "react";
import { formatDateRange, joinNonEmpty, nonEmpty } from "../../cvUtils.jsx";

export default function EducationEntry({ entry }) {
    const title = nonEmpty(entry.degree) ? entry.degree : "";
    const org = nonEmpty(entry.institution) ? entry.institution : "";
    const area = nonEmpty(entry.area) ? entry.area : "";
    const date = formatDateRange(entry.start_date, entry.end_date);
    const sub = joinNonEmpty([org, area]);

    return (
        <div className="grid grid-cols-[1fr_auto] gap-3 pt-[var(--cv-entry-pad-y)] pb-[var(--cv-entry-pad-y)] first:pt-0 last:pb-0 text-left">
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

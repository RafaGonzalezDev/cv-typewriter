import React from "react";

export default function TechBlock({ items }) {
    return (
        <div className="space-y-[var(--cv-list-gap)] text-left">
            {items.map((it, i) => (
                <div key={i} className="grid grid-cols-[160px_1fr] gap-4">
                    <div className="text-[13px] font-bold text-primary/80">{it.label}</div>
                    <div className="text-[13px] leading-relaxed text-foreground/90">{it.details}</div>
                </div>
            ))}
        </div>
    );
}

import React from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function SectionHeader({ title }) {
    return (
        <section className={cn("break-inside-avoid")}> 
            <div className="flex items-end justify-between pt-[var(--cv-section-title-top-gap)] pb-[var(--cv-section-title-bottom-gap)]">
                <h2 className="text-[13px] font-bold tracking-[0.15em] uppercase text-primary/80">{title}</h2>
            </div>
            <Separator className="mt-[var(--cv-section-title-gap)] bg-primary/20 h-px" />
        </section>
    );
}

export default function Section({ title, children }) {
    return (
        <section className="mt-[var(--cv-section-gap)] first:mt-0 break-inside-avoid">
            <div className="flex items-end justify-between pt-[var(--cv-section-title-top-gap)] pb-[var(--cv-section-title-bottom-gap)]">
                <h2 className="text-[13px] font-bold tracking-[0.15em] uppercase text-primary/80">{title}</h2>
            </div>
            <Separator className="mt-[var(--cv-section-title-gap)] bg-primary/20 h-px" />
            <div className="mt-[var(--cv-section-body-gap)]">{children}</div>
        </section>
    );
}

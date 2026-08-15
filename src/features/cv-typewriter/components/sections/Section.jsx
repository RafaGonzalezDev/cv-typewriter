import React from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export function SectionHeader({ title }) {
  return (
    <section className={cn('break-inside-avoid')}>
      <div className="flex items-end justify-between pt-[var(--cv-section-title-top-gap)] pb-[var(--cv-section-title-bottom-gap)]">
        <h2 className="text-[13.5px] font-bold tracking-[0.14em] uppercase">
          {title}
        </h2>
      </div>
      <Separator className="mt-[var(--cv-section-title-gap)] bg-black/40 h-px" />
    </section>
  );
}

export default function Section({ title, children }) {
  return (
    <section className="mt-[var(--cv-section-gap)] first:mt-0 break-inside-avoid">
      <div className="flex items-end justify-between pt-[var(--cv-section-title-top-gap)] pb-[var(--cv-section-title-bottom-gap)]">
        <h2 className="text-[13.5px] font-bold tracking-[0.14em] uppercase">
          {title}
        </h2>
      </div>
      <Separator className="mt-[var(--cv-section-title-gap)] bg-black/40 h-px" />
      <div className="mt-[var(--cv-section-body-gap)]">{children}</div>
    </section>
  );
}

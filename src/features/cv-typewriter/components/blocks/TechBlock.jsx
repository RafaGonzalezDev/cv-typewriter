import React from 'react';

export default function TechBlock({ items }) {
  return (
    <div className="space-y-[6px] text-left">
      {items.map((it, i) => (
        <div key={i} className="grid grid-cols-[160px_1fr] gap-2">
          <div className="text-[13.5px] font-bold">{it.label}</div>
          <div className="text-[13.5px] leading-[1.35]">{it.details}</div>
        </div>
      ))}
    </div>
  );
}

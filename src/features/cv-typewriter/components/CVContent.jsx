import React, { forwardRef } from 'react';
import { asArray, getSocialUrl } from '../cvUtils.jsx';
import EducationEntry from './entries/EducationEntry';
import ExperienceEntry from './entries/ExperienceEntry';
import ProjectEntry from './entries/ProjectEntry';
import TechBlock from './blocks/TechBlock';
import Section, { SectionHeader } from './sections/Section';

const CVContent = forwardRef(function CVContent(
  { cv, paged = false, layoutBlocks = [], pageIndex = 0 },
  ref
) {
  const blocks = paged ? layoutBlocks : null;

  return (
    <div ref={ref} className="cv-content-inner">
      {(!paged || pageIndex === 0) && (
        <div
          className="text-center"
          data-block="header"
          data-block-id="header"
          data-section="header"
        >
          <div className="text-[30px] sm:text-[34px] font-semibold text-slate-900 leading-[1.15] mb-5 tracking-tight">
            {cv.basics.name}
          </div>

          <div className="flex flex-wrap justify-between text-[12.5px] mb-3 w-full">
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
      )}

      {!paged ? (
        <div>
          {cv.sections.summary.length ? (
            <div className="mt-4 text-[13.5px] text-left leading-[1.6] text-slate-800 font-medium tracking-tight">
              {cv.sections.summary.map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </div>
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
              {cv.sections.projects.slice(0, 3).map((p, i) => (
                <ProjectEntry
                  key={i}
                  entry={{
                    ...p,
                    highlights: Array.isArray(p.highlights) ? p.highlights.slice(0, 1) : [],
                  }}
                />
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
      ) : (
        <div className="paged-content">
          {blocks.map((block) => {
            const blockId = block.id;

            if (block.type === 'header') {
              return null;
            }

            if (block.type === 'section-header') {
              return (
                <div key={blockId} data-block-id={blockId} className="section-header-block">
                  <SectionHeader title={block.title} />
                </div>
              );
            }

            if (block.type === 'summary-paragraph') {
              return (
                <p
                  key={blockId}
                  data-block-id={blockId}
                  className="mt-4 text-[13px] leading-relaxed text-foreground/80"
                >
                  {block.content}
                </p>
              );
            }

            if (block.type === 'experience-entry') {
              return (
                <div key={blockId} data-block-id={blockId}>
                  <ExperienceEntry entry={block.entry} withHighlights={!block.splitHighlights} />
                </div>
              );
            }

            if (block.type === 'experience-highlight') {
              return (
                <div
                  key={blockId}
                  data-block-id={blockId}
                  className={`bullet-block ${block.index === 0 ? 'bullet-block--first' : ''}`}
                >
                  <ul className="list-disc pl-5">
                    <li className="text-[13px] leading-[1.25] text-foreground/80">
                      {block.content}
                    </li>
                  </ul>
                </div>
              );
            }

            if (block.type === 'project-entry') {
              return (
                <div key={blockId} data-block-id={blockId}>
                  <ProjectEntry entry={block.entry} withHighlights={!block.splitHighlights} />
                </div>
              );
            }

            if (block.type === 'project-highlight') {
              return (
                <div
                  key={blockId}
                  data-block-id={blockId}
                  className={`bullet-block ${block.index === 0 ? 'bullet-block--first' : ''}`}
                >
                  <ul className="list-disc pl-5 space-y-[1.25px]">
                    <li className="text-[13px] leading-[1.25] text-foreground/80">
                      {block.content}
                    </li>
                  </ul>
                </div>
              );
            }

            if (block.type === 'education-entry') {
              return (
                <div key={blockId} data-block-id={blockId}>
                  <EducationEntry entry={block.entry} />
                </div>
              );
            }

            if (block.type === 'tech-item') {
              return (
                <div
                  key={blockId}
                  data-block-id={blockId}
                  className="grid grid-cols-[160px_1fr] gap-2"
                >
                  <div className="text-[13px] font-bold text-primary/80">{block.item.label}</div>
                  <div className="text-[13px] leading-[1.25] text-foreground/90">
                    {block.item.details}
                  </div>
                </div>
              );
            }

            if (block.type === 'tech-group') {
              return (
                <div
                  key={blockId}
                  data-block-id={blockId}
                  className="space-y-[var(--cv-list-gap)] text-left"
                >
                  {block.items.map((it, idx) => (
                    <div key={idx} className="grid grid-cols-[160px_1fr] gap-4">
                      <div className="text-[13px] font-bold text-primary/80">{it.label}</div>
                      <div className="text-[13px] leading-relaxed text-foreground/90">
                        {it.details}
                      </div>
                    </div>
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
});

export default CVContent;

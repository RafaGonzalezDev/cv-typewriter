import React, { forwardRef } from 'react';
import { asArray, getSocialUrl } from '../cvUtils.jsx';
import EducationEntry from './entries/EducationEntry';
import ExperienceEntry from './entries/ExperienceEntry';
import ProjectEntry from './entries/ProjectEntry';
import TechBlock from './blocks/TechBlock';
import Section, { SectionHeader } from './sections/Section';

function getDisplayUrl(url) {
  return String(url)
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '');
}

function getSocialDisplay(network, username) {
  const net = String(network).toLowerCase();
  if (net.includes('linkedin')) return `linkedin.com/in/${username}`;
  if (net.includes('github')) return `github.com/${username}`;
  return `${network}: ${username}`;
}

const CVContent = forwardRef(function CVContent(
  { cv, paged = false, layoutBlocks = [], pageIndex = 0 },
  ref
) {
  const blocks = paged ? layoutBlocks : null;
  const contactItems = [
    cv.basics.location ? { label: cv.basics.location } : null,
    cv.basics.email ? { label: cv.basics.email, href: `mailto:${cv.basics.email}` } : null,
    cv.basics.phone ? { label: cv.basics.phone, href: `tel:${cv.basics.phone}` } : null,
    cv.basics.website ? { label: getDisplayUrl(cv.basics.website), href: cv.basics.website } : null,
    ...asArray(cv.basics.social).map((social) => {
      const url = getSocialUrl(social.network, social.username);
      return {
        label: getSocialDisplay(social.network, social.username),
        href: url,
      };
    }),
  ].filter(Boolean);

  return (
    <div ref={ref} lang={cv.language} className="cv-content-inner">
      {(!paged || pageIndex === 0) && (
        <div
          className="mb-5 text-center"
          data-block="header"
          data-block-id="header"
          data-section="header"
        >
          <div className="mb-2 text-[27px] font-bold leading-none tracking-[-0.015em] text-slate-950">
            {cv.basics.name}
          </div>

          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[11.5px] font-medium leading-snug text-slate-700">
            {contactItems.map((item, index) => (
              <span key={`${item.label}-${index}`} className="inline-flex items-center gap-x-2">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-slate-400">
                    |
                  </span>
                ) : null}
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="underline-offset-2 hover:text-primary hover:underline"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
              </span>
            ))}
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
            <Section title={cv.labels.sections.experience}>
              <div className="space-y-0 line-clamp-none">
                {cv.sections.experience.map((e, i) => (
                  <ExperienceEntry key={i} entry={e} labels={cv.labels} />
                ))}
              </div>
            </Section>
          ) : null}

          {cv.sections.technologies.length ? (
            <Section title={cv.labels.sections.technologies}>
              <TechBlock items={cv.sections.technologies} />
            </Section>
          ) : null}

          {cv.sections.projects.length ? (
            <Section title={cv.labels.sections.projects}>
              {cv.sections.projects.slice(0, 6).map((p, i) => (
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
            <Section title={cv.labels.sections.education}>
              <div className="space-y-0">
                {cv.sections.education.map((e, i) => (
                  <EducationEntry key={i} entry={e} labels={cv.labels} />
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
                  <ExperienceEntry
                    entry={block.entry}
                    labels={cv.labels}
                    withHighlights={!block.splitHighlights}
                  />
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
                  <EducationEntry entry={block.entry} labels={cv.labels} />
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

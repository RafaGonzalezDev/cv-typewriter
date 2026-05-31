export function buildBlocks(cv) {
  const blocks = [];
  let cursor = 0;

  const push = (block) => {
    blocks.push({ ...block, order: cursor });
    cursor += 1;
  };

  // Header always first
  push({ id: 'header', type: 'header' });

  const pushSectionHeader = (id, title) => {
    push({ id: `section-${id}`, type: 'section-header', title });
  };

  const pushSummary = () => {
    cv.sections.summary.forEach((text, index) => {
      push({
        id: `summary-${index}`,
        type: 'summary-paragraph',
        content: text,
      });
    });
  };

  const pushExperience = () => {
    pushSectionHeader('experience', cv.labels.sections.experience);
    cv.sections.experience.forEach((entry, entryIndex) => {
      const entryId = `experience-${entryIndex}`;
      push({
        id: entryId,
        type: 'experience-entry',
        entry,
        entryIndex,
        splitHighlights: true,
      });

      const highlights = Array.isArray(entry.highlights) ? entry.highlights : [];
      highlights.forEach((text, highlightIndex) => {
        push({
          id: `${entryId}-highlight-${highlightIndex}`,
          type: 'experience-highlight',
          entryId,
          index: highlightIndex,
          content: text,
        });
      });
    });
  };

  const pushTechnologies = () => {
    pushSectionHeader('technologies', cv.labels.sections.technologies);
    cv.sections.technologies.forEach((item, index) => {
      push({
        id: `tech-${index}`,
        type: 'tech-item',
        item,
      });
    });
  };

  const pushProjects = () => {
    pushSectionHeader('projects', cv.labels.sections.projects);
    cv.sections.projects.slice(0, 4).forEach((entry, entryIndex) => {
      const entryId = `project-${entryIndex}`;
      const highlights = Array.isArray(entry.highlights) ? entry.highlights.slice(0, 1) : [];
      push({
        id: entryId,
        type: 'project-entry',
        entry: { ...entry, highlights },
        entryIndex,
        splitHighlights: true,
      });

      highlights.forEach((text, highlightIndex) => {
        push({
          id: `${entryId}-highlight-${highlightIndex}`,
          type: 'project-highlight',
          entryId,
          index: highlightIndex,
          content: text,
        });
      });
    });
  };

  const pushEducation = () => {
    pushSectionHeader('education', cv.labels.sections.education);
    cv.sections.education.forEach((entry, index) => {
      push({
        id: `education-${index}`,
        type: 'education-entry',
        entry,
      });
    });
  };

  if (cv.sections.summary.length) pushSummary();
  if (cv.sections.experience.length) pushExperience();
  if (cv.sections.technologies.length) pushTechnologies();
  if (cv.sections.projects.length) pushProjects();
  if (cv.sections.education.length) pushEducation();

  return blocks;
}

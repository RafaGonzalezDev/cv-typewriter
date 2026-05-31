export function safeJsonParse(text) {
  try {
    const value = JSON.parse(text);
    return { ok: true, value, error: null };
  } catch (e) {
    return { ok: false, value: null, error: e instanceof Error ? e.message : String(e) };
  }
}

export function asArray(v) {
  return Array.isArray(v) ? v : [];
}

export function nonEmpty(s) {
  return typeof s === 'string' && s.trim().length > 0;
}

export function joinNonEmpty(parts, sep = ' • ') {
  return parts.filter(nonEmpty).join(sep);
}

export function formatDateRange(start, end, presentLabel = 'Present') {
  const s = nonEmpty(start) ? start : '';
  const e = nonEmpty(end) ? end : '';
  const normalizedEnd = e.toLowerCase();
  const displayEnd = ['present', 'actualidad'].includes(normalizedEnd) ? presentLabel : e;
  if (!s && !displayEnd) return '';
  if (s && !displayEnd) return `${s} – ${presentLabel}`;
  if (!s && displayEnd) return displayEnd;
  return `${s} – ${displayEnd}`;
}

export function parseCm(value, fallback) {
  if (typeof value === 'string' && value.trim().endsWith('cm')) {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }
  return fallback;
}

export function cmToPx(cm) {
  const pxPerMm = 96 / 25.4;
  return cm * 10 * pxPerMm;
}

export function mmToPx(mm) {
  const pxPerMm = 96 / 25.4;
  return mm * pxPerMm;
}

export function toPx(value) {
  return `${value.toFixed(2)}px`;
}

export function renderTextWithLinks(text) {
  if (!text) return '';
  const parts = String(text).split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return (
        <a
          key={i}
          href={match[2]}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          {match[1]}
        </a>
      );
    }
    return part;
  });
}

export function getSocialUrl(network, username) {
  if (!username) return null;
  const net = String(network).toLowerCase();
  if (net.includes('linkedin')) return `https://linkedin.com/in/${username}`;
  if (net.includes('github')) return `https://github.com/${username}`;
  return null;
}

export const DEFAULT_LANGUAGE = 'es';

const LANGUAGE_LABELS = {
  es: { label: 'ES', name: 'Castellano' },
  en: { label: 'EN', name: 'English' },
};

const DEFAULT_CV_LABELS = {
  es: {
    present: 'Actualidad',
    location: 'Ubicación',
    sections: {
      experience: 'Experiencia',
      technologies: 'Stack técnico',
      projects: 'Proyectos destacados',
      education: 'Formación',
    },
  },
  en: {
    present: 'Present',
    location: 'Location',
    sections: {
      experience: 'Experience',
      technologies: 'Technical Stack',
      projects: 'Selected Projects',
      education: 'Education',
    },
  },
};

function asObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

function getLanguages(raw) {
  const r = asObject(raw);
  const cv = asObject(r.cv);
  return asObject(cv.languages);
}

export function getAvailableLanguages(raw) {
  const languages = getLanguages(raw);
  const codes = Object.keys(languages).filter(
    (code) => Object.keys(asObject(languages[code])).length
  );

  if (!codes.length) {
    return [
      {
        code: DEFAULT_LANGUAGE,
        ...LANGUAGE_LABELS[DEFAULT_LANGUAGE],
      },
    ];
  }

  return codes.map((code) => ({
    code,
    label: LANGUAGE_LABELS[code]?.label ?? code.toUpperCase(),
    name: LANGUAGE_LABELS[code]?.name ?? code,
  }));
}

export function getDefaultLanguage(raw) {
  const r = asObject(raw);
  const cv = asObject(r.cv);
  const available = getAvailableLanguages(raw).map((item) => item.code);
  if (available.includes(cv.active_language)) return cv.active_language;
  if (available.includes(DEFAULT_LANGUAGE)) return DEFAULT_LANGUAGE;
  return available[0] ?? DEFAULT_LANGUAGE;
}

function getLocalizedCV(raw, language) {
  const r = asObject(raw);
  const cv = asObject(r.cv);
  const languages = asObject(cv.languages);
  const selected = languages[language];
  const fallback = languages[getDefaultLanguage(raw)];
  return asObject(selected ?? fallback ?? cv);
}

function normalizeLabels(language, cv) {
  const defaults = DEFAULT_CV_LABELS[language] ?? DEFAULT_CV_LABELS[DEFAULT_LANGUAGE];
  const labels = asObject(cv.labels);
  const sectionLabels = asObject(labels.sections);

  return {
    present: nonEmpty(labels.present) ? labels.present : defaults.present,
    location: nonEmpty(labels.location) ? labels.location : defaults.location,
    sections: {
      experience: nonEmpty(sectionLabels.experience)
        ? sectionLabels.experience
        : defaults.sections.experience,
      technologies: nonEmpty(sectionLabels.technologies)
        ? sectionLabels.technologies
        : defaults.sections.technologies,
      projects: nonEmpty(sectionLabels.projects)
        ? sectionLabels.projects
        : defaults.sections.projects,
      education: nonEmpty(sectionLabels.education)
        ? sectionLabels.education
        : defaults.sections.education,
    },
  };
}

export function normalizeCV(raw, language = DEFAULT_LANGUAGE) {
  const resolvedLanguage = getAvailableLanguages(raw).some((item) => item.code === language)
    ? language
    : getDefaultLanguage(raw);
  const cv = getLocalizedCV(raw, resolvedLanguage);
  const sections = asObject(cv.sections);

  return {
    language: resolvedLanguage,
    labels: normalizeLabels(resolvedLanguage, cv),
    basics: {
      name: nonEmpty(cv.name) ? cv.name : 'Untitled',
      location: nonEmpty(cv.location) ? cv.location : '',
      email: nonEmpty(cv.email) ? cv.email : '',
      phone: nonEmpty(cv.phone) ? cv.phone : '',
      website: nonEmpty(cv.website) ? cv.website : '',
      social: asArray(cv.social_networks),
    },
    sections: {
      summary: asArray(sections.professional_summary),
      experience: asArray(sections.experience),
      education: asArray(sections.education),
      technologies: asArray(sections.technologies),
      projects: asArray(sections.projects),
    },
  };
}

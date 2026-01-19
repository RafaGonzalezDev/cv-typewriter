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
    return typeof s === "string" && s.trim().length > 0;
}

export function joinNonEmpty(parts, sep = " • ") {
    return parts.filter(nonEmpty).join(sep);
}

export function formatDateRange(start, end) {
    const s = nonEmpty(start) ? start : "";
    const e = nonEmpty(end) ? end : "";
    if (!s && !e) return "";
    if (s && !e) return `${s} – Present`;
    if (!s && e) return e;
    return `${s} – ${e}`;
}

export function parseCm(value, fallback) {
    if (typeof value === "string" && value.trim().endsWith("cm")) {
        const parsed = Number.parseFloat(value);
        return Number.isFinite(parsed) ? parsed : fallback;
    }
    if (typeof value === "number" && Number.isFinite(value)) {
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
    if (!text) return "";
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
    if (net.includes("linkedin")) return `https://linkedin.com/in/${username}`;
    if (net.includes("github")) return `https://github.com/${username}`;
    return null;
}

export function normalizeCV(raw) {
    const r = raw && typeof raw === "object" ? raw : {};
    const cv = r.cv && typeof r.cv === "object" ? r.cv : {};
    const sections = cv.sections && typeof cv.sections === "object" ? cv.sections : {};

    return {
        basics: {
            name: nonEmpty(cv.name) ? cv.name : "Untitled",
            location: nonEmpty(cv.location) ? cv.location : "",
            email: nonEmpty(cv.email) ? cv.email : "",
            phone: nonEmpty(cv.phone) ? cv.phone : "",
            website: nonEmpty(cv.website) ? cv.website : "",
            social: asArray(cv.social_networks)
        },
        sections: {
            summary: asArray(sections.professional_summary),
            experience: asArray(sections.experience),
            education: asArray(sections.education),
            technologies: asArray(sections.technologies),
            projects: asArray(sections.projects)
        }
    };
}

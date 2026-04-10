import type { LogEntry } from "./types";

/**
 * The learning log.
 *
 * This file is the entry point for adding new entries. Edit it directly,
 * push, and the change goes live. Newest entry first.
 *
 * Why this exists:
 *   - Habit development: a low-friction place to capture what you read,
 *     built, and figured out this week.
 *   - Mentor visibility: gives Jeff Anderson a single URL to bookmark for
 *     "what's new with Henry."
 *   - Recency signal: PhD admissions readers can see the site is actively
 *     maintained, not a frozen brochure.
 *
 * To add an entry, copy any of the entries below as a template. Set
 * `starter: true` only for clearly placeholder content you want flagged
 * visually so future-you remembers to replace it.
 */
export const log: LogEntry[] = [
  {
    date: "2026-04-10",
    title: "Per-course Open Graph cards + accessibility pass on teach_cs",
    kind: "build",
    tags: ["teach_cs", "site", "a11y", "seo"],
    body: "Shipped per-course OG image generation so sharing /courses/cs180-intro-ai now renders a branded card with the course number and accent color. Same iteration also added a global focus-visible ring, skip-to-main link, ARIA roles for course detail tabs (with arrow-key nav), an active-page highlight in the navbar, and an EducationalOrganization JSON-LD block on the homepage. The site is now keyboard-navigable end to end and shareable on a per-course basis.",
    link: {
      label: "View commit on GitHub",
      href: "https://github.com/fansofhenry/teach_cs/commit/490479f",
    },
  },
  {
    date: "2026-04-10",
    title: "Started a public learning log",
    kind: "meta",
    tags: ["site", "habit", "process"],
    body: "Added /log as a single chronological surface for what I'm reading, building, and figuring out. The goal is twofold: develop a weekly capture habit, and give Jeff Anderson a single URL to bookmark for visible progress. The format is intentionally minimal — a TypeScript file I edit and push. No CMS, no markdown processor, no friction. If a thought is worth ten minutes of writing, it lives here.",
    link: { label: "How the log works", href: "/log", internal: true },
  },
  {
    date: "2026-04-10",
    title: "Three-paper program: scoping HelpMap as the first submission",
    kind: "research",
    tags: ["research", "phd", "jeff-anderson", "helpmap"],
    starter: true,
    body: "Starter entry — replace with your actual notes. The plan I'm sketching with Jeff Anderson is a three-paper first-author program built around community college CS pedagogy. Paper one (HelpMap) uses LMS interaction logs to identify structural predictors of help-seeking suppression. Paper two (SyllabusAudit) trains an NLP classifier to detect violations of Harel's intellectual need principle in CS syllabi. Paper three (Why They Left) is a qualitative interview study with students who left CS at the community college level. Next concrete step: confirm IRB pathway and feature-extraction scope for HelpMap.",
    link: { label: "Research interests", href: "/research", internal: true },
  },
];

/** Most recent entries, newest first. */
export function getRecentLog(limit = 3): LogEntry[] {
  return [...log]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

/** All entries sorted newest-first. */
export function getAllLog(): LogEntry[] {
  return [...log].sort((a, b) => b.date.localeCompare(a.date));
}

/** All unique tags in the log, sorted alphabetically. */
export function getAllLogTags(): string[] {
  const seen = new Set<string>();
  for (const entry of log) {
    for (const tag of entry.tags ?? []) seen.add(tag);
  }
  return [...seen].sort();
}

/** All entries that include a given tag. */
export function getLogByTag(tag: string): LogEntry[] {
  return getAllLog().filter((e) => (e.tags ?? []).includes(tag));
}

/**
 * The most recent entry. Convenient for the homepage "Now" bar.
 * Returns undefined if the log is empty so callers can render gracefully.
 */
export function getLatestLogEntry(): LogEntry | undefined {
  return getAllLog()[0];
}

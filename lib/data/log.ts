import type { LogEntry } from "./types";

/**
 * The learning log + dashboard data.
 *
 * This file drives the homepage "working dashboard" and the /log page.
 * Three things live here:
 *
 *   1. `currentFocus` — one sentence on what you're working on right now.
 *      Shown as the first line on the homepage.
 *
 *   2. `currentlyReading` — one paper or book you're actively engaging
 *      with. Shown as a card on the homepage.
 *
 *   3. `log` — chronological array of LogEntry. Newest first. Drives the
 *      /log page, the homepage status cards, and the recency signal in
 *      the footer.
 *
 * Updating any of these is a one-file edit + push. No CMS, no markdown
 * processor, no friction.
 */

/**
 * What you're working on right now. One sentence. Updated whenever your
 * focus shifts. The homepage opens with this above the fold so a visiting
 * mentor or grant reader knows your current direction in two seconds.
 */
export const currentFocus =
  "Restructuring teach_cs as a working dashboard, and scoping the HelpMap protocol with Jeff Anderson.";

/**
 * One thing you're actively reading. Shown as a card on the homepage.
 * Edit whenever you start a new piece. The `why` field is your one-line
 * stake in it — what question you're hoping it answers.
 */
export const currentlyReading: {
  title: string;
  author: string;
  why: string;
  href?: string;
} = {
  title: "Critically Conscious Computing",
  author: "Amy J. Ko et al.",
  why: "Read-before-write sequencing is the load-bearing idea behind every 'build before import' moment in the curriculum framework. I keep returning to it.",
  href: "https://criticallyconsciouscomputing.org/",
};


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

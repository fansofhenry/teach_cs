import type { Metadata } from "next";
import Link from "next/link";
import { getAllLog, getAllLogTags } from "@/lib/data/log";
import type { LogEntry, LogKind } from "@/lib/data/types";

export const metadata: Metadata = {
  title: "Log — Teaching Computing Differently",
  description:
    "A public learning log: what I'm reading, building, and figuring out as I develop this curriculum and pursue research with Jeff Anderson.",
  openGraph: {
    title: "Learning Log — Teaching Computing Differently",
    description:
      "A dated, chronological feed of what I'm reading, building, and figuring out.",
    images: ["/opengraph-image.png"],
  },
};

const KIND_LABEL: Record<LogKind, string> = {
  build: "Build",
  read: "Read",
  research: "Research",
  teach: "Teach",
  meta: "Meta",
};

const KIND_COLOR: Record<LogKind, string> = {
  build: "var(--orange)",
  read: "var(--teal)",
  research: "var(--red)",
  teach: "var(--copper)",
  meta: "var(--dim)",
};

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function groupByMonth(entries: LogEntry[]): { label: string; entries: LogEntry[] }[] {
  const groups = new Map<string, LogEntry[]>();
  for (const entry of entries) {
    const [y, m] = entry.date.split("-");
    const key = `${y}-${m}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(entry);
  }
  return [...groups.entries()].map(([key, items]) => {
    const [y, m] = key.split("-").map(Number);
    const label = new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-US", {
      timeZone: "UTC",
      month: "long",
      year: "numeric",
    });
    return { label, entries: items };
  });
}

function EntryLink({ link }: { link: NonNullable<LogEntry["link"]> }) {
  const className =
    "inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-red no-underline border-b border-red/30 pb-0.5 hover:border-red transition-colors";
  if (link.internal) {
    return (
      <Link href={link.href} className={className}>
        {link.label} <span aria-hidden>&rarr;</span>
      </Link>
    );
  }
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {link.label} <span aria-hidden>&#x2197;</span>
    </a>
  );
}

export default function LogPage() {
  const entries = getAllLog();
  const tags = getAllLogTags();
  const months = groupByMonth(entries);

  return (
    <>
      {/* ====== HERO ====== */}
      <header className="bg-ink text-paper border-b-[5px] border-red">
        <div className="border-b border-white/10 px-7 lg:px-15 py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/50 flex justify-between">
          <span>Learning Log</span>
          <span>{entries.length} {entries.length === 1 ? "entry" : "entries"}</span>
        </div>
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-16 lg:py-20">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-5 animate-fade-up-1">
            Public Working Notebook
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[0.02em] mb-7 animate-fade-up-2">
            The
            <br />
            <span className="text-red">Log</span>
          </h1>
          <p className="text-[15px] leading-[1.9] text-white/60 font-light max-w-[640px] animate-fade-up-3">
            A dated chronological feed of what I&rsquo;m reading, building, and
            figuring out as I develop this curriculum and pursue a three-paper
            research program with Jeff Anderson. The point is not polish &mdash;
            it is <em className="font-serif italic">recency</em>. If a thought
            is worth ten minutes of writing, it lives here.
          </p>
        </div>
      </header>

      {/* ====== TAG ROW ====== */}
      {tags.length > 0 && (
        <div className="bg-cream border-b-2 border-ink">
          <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-5 flex items-center gap-3 flex-wrap">
            <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-dim">
              Tags
            </span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-[0.06em] text-ink/70 px-2.5 py-1 border border-ink/15"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ====== ENTRIES ====== */}
      <section>
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-16 lg:py-20">
          {months.map((month, mi) => (
            <div key={month.label} className={mi > 0 ? "mt-16" : ""}>
              {/* Month header */}
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-7 lg:gap-20 mb-10">
                <div className="section-label">{month.label}</div>
                <div className="font-mono text-[11px] tracking-[0.06em] text-dim">
                  {month.entries.length} {month.entries.length === 1 ? "entry" : "entries"}
                </div>
              </div>

              {/* Entries */}
              <div className="border-2 border-ink">
                {month.entries.map((entry, i) => (
                  <article
                    key={entry.date + entry.title}
                    className={`p-8 lg:p-11 ${
                      i < month.entries.length - 1 ? "border-b-2 border-ink" : ""
                    }`}
                  >
                    {/* Top metadata row */}
                    <div className="flex items-center gap-3 flex-wrap mb-4">
                      <span
                        className="font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-0.5 border"
                        style={{
                          color: KIND_COLOR[entry.kind],
                          borderColor: KIND_COLOR[entry.kind],
                          background: "transparent",
                        }}
                      >
                        {KIND_LABEL[entry.kind]}
                      </span>
                      <time
                        dateTime={entry.date}
                        className="font-mono text-[10px] tracking-[0.08em] text-dim"
                      >
                        {formatDate(entry.date)}
                      </time>
                      {entry.starter && (
                        <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-gold border border-gold/40 px-2 py-0.5">
                          Starter — replace
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-[clamp(20px,2.5vw,28px)] italic leading-[1.25] text-ink mb-4">
                      {entry.title}
                    </h2>

                    {/* Body */}
                    <p className="text-[14.5px] leading-[1.85] text-dim max-w-[760px] mb-5">
                      {entry.body}
                    </p>

                    {/* Tags + link */}
                    <div className="flex items-center gap-4 flex-wrap">
                      {entry.tags && entry.tags.length > 0 && (
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[9px] tracking-[0.06em] text-dim/70 px-2 py-0.5 border border-cream"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {entry.link && <EntryLink link={entry.link} />}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          {/* How to add */}
          <div className="mt-16 border-2 border-ink p-8 lg:p-10 bg-cream">
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-red mb-3">
              How the log works
            </div>
            <p className="text-[14px] leading-[1.85] text-ink/80 max-w-[720px] mb-3">
              Entries live in <code className="font-mono text-[12.5px] bg-paper px-1.5 py-0.5 border border-ink/15">lib/data/log.ts</code>.
              Add a new object at the top of the array, push, and the entry goes
              live. No CMS, no markdown processor, no friction. The format is
              intentionally minimal so the cost of capturing a thought stays
              under ten minutes.
            </p>
            <p className="text-[13px] leading-[1.8] text-dim max-w-[720px]">
              Entries marked <em>Starter — replace</em> are placeholder content
              meant to be edited or deleted as real notes accumulate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

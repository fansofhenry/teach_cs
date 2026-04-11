import Link from "next/link";
import { getLatestLogEntry } from "@/lib/data/log";

function formatLastUpdated(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const primaryLinks = [
  { label: "Log", href: "/log" },
  { label: "Courses", href: "/courses" },
  { label: "Research", href: "/research" },
  { label: "Reading", href: "/reading-list" },
  { label: "About", href: "/about" },
];

const secondaryLinks = [
  { label: "Philosophy", href: "/philosophy" },
  { label: "Learning Paths", href: "/paths" },
  { label: "Student Success", href: "/student-success" },
  { label: "Peer Training", href: "/peer-training" },
  { label: "Modeling Bench", href: "/research/modeling-bench" },
];

const externalLinks = [
  { label: "GitHub", href: "https://github.com/fansofhenry/teach_cs" },
  {
    label: "Research Portfolio",
    href: "https://fansofhenry.github.io/cs-ed/",
  },
  {
    label: "henry@henryfan.org",
    href: "mailto:henry@henryfan.org",
    isMail: true,
  },
];

export default function Footer() {
  const latest = getLatestLogEntry();

  return (
    <footer className="bg-ink text-paper border-t-[3px] border-red">
      <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-12 lg:py-14">
        {/* Top: link columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Identity */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-red mb-4">
              Henry Fan
            </div>
            <p className="text-[14.5px] leading-[1.7] text-paper/85 mb-4">
              Community college CS education researcher and curriculum
              designer. Mentee of Prof. Jeff Anderson at Foothill College.
              Application Support Analyst at CVC-OEI / Foothill&ndash;De Anza
              CCD, supporting cross-enrollment infrastructure for 115+
              California community colleges.
            </p>
            {latest && (
              <p className="font-mono text-[11px] tracking-[0.06em] text-paper/65">
                Last updated{" "}
                <time dateTime={latest.date}>
                  {formatLastUpdated(latest.date)}
                </time>
              </p>
            )}
          </div>

          {/* Primary nav */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-paper/65 mb-4">
              Primary
            </div>
            <ul className="list-none space-y-2.5">
              {primaryLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14.5px] text-paper/90 no-underline hover:text-red transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary / deeper pages */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-paper/65 mb-4">
              Deeper
            </div>
            <ul className="list-none space-y-2.5">
              {secondaryLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14.5px] text-paper/90 no-underline hover:text-red transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-paper/65 mb-4">
              Elsewhere
            </div>
            <ul className="list-none space-y-2.5">
              {externalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.isMail ? undefined : "_blank"}
                    rel={l.isMail ? undefined : "noopener noreferrer"}
                    className="text-[14.5px] text-paper/90 no-underline hover:text-red transition-colors"
                  >
                    {l.label}
                    {!l.isMail && (
                      <span className="text-paper/45 ml-1" aria-hidden>
                        &#x2197;
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono text-[11px] tracking-[0.06em] text-paper/65 leading-[1.7]">
            Curriculum framework in development &middot; All resources free
            and open-access &middot; Liberatory education &middot; Portfolio
            assessment
          </p>
          <div className="font-display text-[18px] tracking-[0.05em] text-paper/30 whitespace-nowrap">
            CS 175 &middot; 180 &middot; 185 &middot; 210 &middot; Math 2B
            &middot; ENGR 11
          </div>
        </div>
      </div>
    </footer>
  );
}

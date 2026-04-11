import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-13rem)] bg-paper flex items-center">
      <div className="max-w-[1300px] w-full mx-auto px-7 lg:px-15 py-20 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center">
        {/* Left: Big 404 mark */}
        <div className="border-l-[5px] border-red pl-7 lg:pl-10">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-red inline-block" />
            Error 404
          </div>
          <div className="font-display text-[clamp(120px,18vw,260px)] leading-[0.85] tracking-[0.02em] text-ink">
            4<span className="text-red">0</span>4
          </div>
          <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-dim mt-2">
            <span aria-hidden>{'//'}</span> Route Not Found
          </p>
        </div>

        {/* Right: Explanation + links */}
        <div>
          <h1 className="font-serif text-[clamp(28px,4vw,46px)] italic leading-[1.15] text-ink mb-5">
            This page hasn&apos;t been built yet.
          </h1>
          <p className="text-[15px] leading-[1.85] text-dim max-w-[460px] mb-8">
            Either the address was mistyped, the page was moved, or it&apos;s
            still on the curriculum to-do list. Try one of these instead:
          </p>

          <ul className="list-none flex flex-col gap-0 border-2 border-ink max-w-[460px]">
            {[
              { href: "/", label: "Home", sub: "Curriculum overview" },
              { href: "/courses", label: "Course Catalog", sub: "All twelve courses" },
              { href: "/philosophy", label: "Philosophy", sub: "How these courses are built" },
              { href: "/research", label: "Research", sub: "Modeling Bench + papers" },
            ].map((link, i, arr) => (
              <li
                key={link.href}
                className={i < arr.length - 1 ? "border-b border-cream" : ""}
              >
                <Link
                  href={link.href}
                  className="flex items-center justify-between gap-4 px-5 py-4 no-underline text-ink hover:bg-cream transition-colors group"
                >
                  <span className="flex flex-col">
                    <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-red">
                      {link.label}
                    </span>
                    <span className="font-serif text-[14px] italic text-dim mt-0.5">
                      {link.sub}
                    </span>
                  </span>
                  <span aria-hidden className="font-mono text-[16px] text-red transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

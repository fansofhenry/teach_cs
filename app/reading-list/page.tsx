import type { Metadata } from "next";
import { readingList } from "@/lib/data/research";

export const metadata: Metadata = {
  title: "Annotated Reading List — Teaching Computing Differently",
  description:
    "30+ annotated citations across STEM departure, learning analytics, constructionism, curriculum design, learning science, community college research, CS education methods, and equity frameworks.",
};

const sections = [
  "Foundations: STEM Departure",
  "Learning Analytics & Help-Seeking",
  "Constructionism & Physical Computing",
  "Curriculum Design & Necessity Principle",
  "Learning Science Frameworks",
  "Community College Research",
  "CS Education Research Methods",
  "AI in CS Education",
  "Equity Frameworks",
];

export default function ReadingListPage() {
  return (
    <>
      {/* ======== HERO ======== */}
      <header className="bg-ink text-paper border-b-[5px] border-red">
        <div className="border-b border-white/10 px-7 lg:px-[60px] py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/50 flex justify-between">
          <span>Annotated Reading List</span>
          <span>{readingList.length} Entries</span>
        </div>
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 lg:py-20">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-5 animate-fade-up-1">
            Scholarly Foundations
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[0.02em] mb-7 animate-fade-up-2">
            Annotated
            <br />
            <span className="text-red">Reading List</span>
          </h1>
          <p className="text-[15px] leading-[1.9] text-white/60 font-light max-w-[620px] animate-fade-up-3">
            Every citation below is annotated with its connection to this
            curriculum. These are not readings assigned to students — they are
            the research that shaped how every course is designed, taught, and
            assessed.
          </p>
        </div>
      </header>

      {/* ======== SECTIONS ======== */}
      {sections.map((section) => {
        const entries = readingList.filter((e) => e.section === section);
        if (entries.length === 0) return null;
        return (
          <section key={section} className="border-b-2 border-ink">
            <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-10">
                <div className="section-label">{section}</div>
                <div className="text-[13px] text-dim font-mono tracking-[0.05em]">
                  {entries.length} {entries.length === 1 ? "entry" : "entries"}
                </div>
              </div>
              <div className="space-y-0 border-2 border-ink">
                {entries.map((entry, idx) => (
                  <div
                    key={entry.citation}
                    className={`p-8 lg:p-10 ${idx < entries.length - 1 ? "border-b-2 border-ink" : ""}`}
                  >
                    <h3 className="font-serif text-[16px] italic leading-[1.4] mb-4">
                      {entry.citation}
                    </h3>
                    <p className="text-[13.5px] leading-[1.85] text-dim mb-4">
                      {entry.annotation}
                    </p>
                    {entry.connectsTo && entry.connectsTo.length > 0 && (
                      <div className="flex gap-2">
                        <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-dim">
                          Connects to:
                        </span>
                        {entry.connectsTo.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-0.5 bg-teal/10 text-teal border border-teal/30 font-mono text-[9px] tracking-[0.08em] uppercase"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

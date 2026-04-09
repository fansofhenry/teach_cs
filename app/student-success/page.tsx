import type { Metadata } from "next";
import {
  strategicPhases,
  classroomRules,
  twoMinuteRule,
  studentSuccessLabs,
} from "@/lib/data/studentSuccess";

export const metadata: Metadata = {
  title: "Student Success — Teaching Computing Differently",
  description:
    "Jeff Anderson's Strategic Deep Learning framework: four phases, five classroom rules, and four interactive labs for conquering college.",
};

export default function StudentSuccessPage() {
  return (
    <>
      {/* ======== HERO ======== */}
      <header className="bg-ink text-paper border-b-[5px] border-red">
        <div className="border-b border-white/10 px-7 lg:px-[60px] py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/50 flex justify-between">
          <span>Student Success</span>
          <span>Strategic Deep Learning &middot; Jeff Anderson</span>
        </div>
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 lg:py-20">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-5 animate-fade-up-1">
            Conquering College
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[0.02em] mb-7 animate-fade-up-2">
            Student
            <br />
            <span className="text-red">Success</span>
          </h1>
          <p className="text-[15px] leading-[1.9] text-white/60 font-light max-w-[620px] animate-fade-up-3">
            Most students don&apos;t fail because of ability — they fail because
            of systems. Jeff Anderson&apos;s Strategic Deep Learning framework
            gives students the tools to build systems that work: scheduling,
            deep learning habits, note systems, and a dream binder that
            connects daily actions to long-term vision.
          </p>
        </div>
      </header>

      {/* ======== FOUR PHASES ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <div className="section-label">The Four Phases</div>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              Strategic Deep Learning is a four-phase roadmap. Each phase builds
              on the last. Phase 1 is where everyone starts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-2 border-ink">
            {strategicPhases.map((phase, idx) => (
              <div
                key={phase.number}
                className={`p-8 ${idx < strategicPhases.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-ink" : ""} ${idx < 2 ? "xl:border-b-0" : ""}`}
              >
                <div className="font-display text-[48px] leading-none text-cream mb-3">
                  {phase.number}
                </div>
                <h3 className="font-serif text-[20px] italic leading-[1.3] mb-2">
                  {phase.title}
                </h3>
                <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-red mb-4">
                  {phase.tagline}
                </p>
                <p className="text-[13px] leading-[1.8] text-dim">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== FIVE RULES ======== */}
      <section className="bg-ink text-paper border-b-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red flex items-start gap-2.5 pt-1">
              <span className="text-white/20">{"//  "}</span>Jeff&apos;s Five
              Rules
            </div>
            <p className="text-[15px] leading-[1.85] text-white/55 max-w-[620px]">
              These five rules govern every classroom. They are not
              suggestions — they are the operating system.
            </p>
          </div>
          <div className="space-y-0 border border-white/10">
            {classroomRules.map((rule, idx) => (
              <div
                key={rule.number}
                className={`p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-6 ${idx < classroomRules.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <div className="font-display text-[40px] leading-none text-red">
                  {String(rule.number).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-[18px] italic text-paper mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.85] text-white/50">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
            {/* 2-Minute Question Rule as bonus */}
            <div className="p-8 lg:p-10 bg-red/10 border-t border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-6">
                <div className="font-display text-[40px] leading-none text-red">
                  +
                </div>
                <div>
                  <h3 className="font-serif text-[18px] italic text-paper mb-2">
                    {twoMinuteRule.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.85] text-white/50">
                    {twoMinuteRule.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== FOUR LABS ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <div className="section-label">The Four Labs</div>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              Four structured labs that build the systems Phase 1 requires.
              Each lab includes objectives, reflective prompts, and key ideas
              grounded in learning science research.
            </p>
          </div>
          <div className="space-y-8">
            {studentSuccessLabs.map((lab) => (
              <div
                key={lab.number}
                className="border-2 border-ink"
              >
                <div className="bg-cream p-8 lg:p-10 border-b-2 border-ink">
                  <div className="flex items-start gap-6">
                    <span className="font-display text-[48px] leading-none text-ink shrink-0">
                      {String(lab.number).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-[22px] italic leading-[1.3] mb-1">
                        {lab.title}
                      </h3>
                      <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-dim">
                        {lab.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <p className="text-[14px] leading-[1.85] text-dim mb-6">
                    {lab.description}
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-dim block mb-3">
                        Objectives
                      </span>
                      <ul className="space-y-2">
                        {lab.objectives.map((obj) => (
                          <li
                            key={obj}
                            className="text-[13px] leading-[1.7] pl-4 border-l-2 border-red"
                          >
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-dim block mb-3">
                        Key Ideas
                      </span>
                      <ul className="space-y-2">
                        {lab.keyIdeas.map((idea) => (
                          <li
                            key={idea}
                            className="text-[13px] leading-[1.7] pl-4 border-l-2 border-teal"
                          >
                            {idea}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-dim block mb-3">
                      Reflective Prompts
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {lab.prompts.map((prompt) => (
                        <div
                          key={prompt.label}
                          className="bg-cream border border-ink/10 p-4"
                        >
                          <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-ink block mb-1">
                            {prompt.label}
                          </span>
                          <p className="text-[11px] leading-[1.6] text-dim">
                            {prompt.placeholder}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

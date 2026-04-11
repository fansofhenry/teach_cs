"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Course data ─── */
interface Course {
  id: string;
  code: string;
  name: string;
  track: 1 | 2 | 3;
  status: "taught" | "dev" | "proposed";
  units: string;
  prereq: string;
  desc: string;
  color: string;
  accent: string;
}

const courses: Course[] = [
  {
    id: "cs175",
    code: "CS 175",
    name: "How Things Work",
    track: 1,
    status: "dev",
    units: "3 Systems · First Principles",
    prereq: "Basic Math · No Calculus Required",
    desc: "PageRank. GPS. The phone in your pocket. Three technologies derived from first principles. Includes the signature project: Build a Computer from Scratch.",
    color: "#00d4ff",
    accent: "border-[#00d4ff]",
  },
  {
    id: "cs180",
    code: "CS 180",
    name: "Introduction to Artificial Intelligence",
    track: 1,
    status: "taught",
    units: "3 · 18 Weeks",
    prereq: "None (Track I) · Python (Track II+)",
    desc: "AI is not magic — it is math, history, and human choice. We build from first principles: probability, search, neural networks, language models.",
    color: "#c1121f",
    accent: "border-red",
  },
  {
    id: "cs185",
    code: "CS 185",
    name: "Introduction to Machine Learning",
    track: 2,
    status: "dev",
    units: "3 · 18 Weeks",
    prereq: "Basic Python · Some Math",
    desc: "ML algorithms are not neutral mathematical facts — they are choices about what to optimize, whose data counts, who bears the error.",
    color: "#4dd9f0",
    accent: "border-[#4dd9f0]",
  },
  {
    id: "cs210",
    code: "CS 210",
    name: "Data Structures & Algorithms",
    track: 2,
    status: "taught",
    units: "4 · 18 Weeks",
    prereq: "Python or Java · OOP",
    desc: "Every data structure is an argument about the world. We implement every structure before using the library version. No LeetCode grind — deep projects that transfer.",
    color: "#e36414",
    accent: "border-orange",
  },
  {
    id: "math2b",
    code: "Math 2B",
    name: "Applied Linear Algebra",
    track: 3,
    status: "taught",
    units: "3 · 29 Lessons · ELSP Project",
    prereq: "Pre-calculus or Calculus",
    desc: "Six fundamental problems. Twenty-nine lessons. Build circuits, collect data, verify models. Derive before compute — the ALAF approach.",
    color: "#8b7cf8",
    accent: "border-[#8b7cf8]",
  },
  {
    id: "engr11",
    code: "ENGR 11",
    name: "Programming & Problem Solving",
    track: 3,
    status: "taught",
    units: "3 · 18 Lessons · ELSP Project",
    prereq: "No Programming Required",
    desc: "Model real circuits. Understand why 0.1 + 0.2 ≠ 0.3. MATLAB the way engineers use it — from binary representation up to IEEE 754.",
    color: "#a8ff3e",
    accent: "border-[#a8ff3e]",
  },
];

const trackData = [
  {
    roman: "I",
    name: "Foundation",
    subtitle: "Novice — Build & Understand",
    romanClass: "text-white/20",
    desc: "Students develop genuine working fluency with the core concept. They build a complete, functional implementation and can explain what it does and why. No prior experience required at Track I — by design.",
    examples: [
      "CS 180: Build a rule-based chatbot; document its failure modes",
      "CS 210: Implement a linked list from scratch; analyze insertion cost",
    ],
  },
  {
    roman: "II",
    name: "Application",
    subtitle: "Builder — Implement & Extend",
    romanClass: "text-white/50",
    desc: "Students implement the concept rigorously, handle edge cases, and extend it to a novel context. They move between their own implementation and a library version and explain the tradeoffs in writing.",
    examples: [
      "CS 185: Implement logistic regression in NumPy; compare to sklearn",
      "CS 210: Implement a self-balancing BST; profile on large datasets",
    ],
  },
  {
    roman: "III",
    name: "Mastery",
    subtitle: "Architect — Prove & Research",
    romanClass: "text-paper",
    desc: "Students engage with the formal mathematical structure of the concept, read related research, and contribute something original — a proof, an optimization, a novel application, or a written critical analysis.",
    examples: [
      "CS 185: Derive the gradient update rule; prove convergence bound",
      "CS 180: Read and summarize a primary research paper; connect to project",
    ],
  },
];

/* ─── Pathway visualization node data ─── */
const pathwayNodes = [
  { label: "Any\nstudent", code: "No\nprereq", style: "default" as const },
  { label: "How Things Work", code: "CS 175", style: "filled" as const },
  { label: "Intro AI", code: "CS 180", style: "filled" as const },
  { label: "Intro ML", code: "CS 185", style: "accent" as const },
  { label: "Data Structures", code: "CS 210", style: "filled" as const },
  { label: "Linear Algebra", code: "Math 2B", style: "branch" as const },
  { label: "MATLAB & Eng.", code: "ENGR 11", style: "branch" as const },
];

const statusLabels: Record<string, { text: string; cls: string }> = {
  taught: {
    text: "Currently Taught",
    cls: "bg-teal/[0.12] text-teal border-teal/30",
  },
  dev: {
    text: "In Development",
    cls: "bg-gold/10 text-[#8a6500] border-gold/30",
  },
  proposed: {
    text: "Proposed",
    cls: "bg-dim/[0.08] text-dim border-dim/20",
  },
};

export default function PathsClient() {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  const filteredCourses =
    activeTrack === null
      ? courses
      : courses.filter((c) => c.track === activeTrack);

  return (
    <>
      {/* ======== HERO ======== */}
      <header className="bg-ink text-paper border-b-[5px] border-red">
        <div className="border-b border-white/10 px-7 lg:px-[60px] py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/50 flex justify-between">
          <span>Learning Paths</span>
          <span>Six Courses &middot; Three Tracks &middot; One Framework</span>
        </div>
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 lg:py-20">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-5 animate-fade-up-1">
            Course Sequences &amp; Prerequisites
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[0.02em] mb-7 animate-fade-up-2">
            Learning
            <br />
            <span className="text-red">Paths</span>
          </h1>
          <p className="text-[17px] leading-[1.7] text-white/90 max-w-[660px] animate-fade-up-3">
            Each course is a complete 18-week experience: a central project arc,
            three entry tracks for students at different levels, portfolio-based
            assessment, and a public exhibition at semester end. No exams. No
            required textbook purchases. All course materials free and open
            access.
          </p>
        </div>
      </header>

      {/* ======== PATHWAY VISUALIZATION ======== */}
      <section className="border-b-2 border-ink bg-paper">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-10">
            <h2 className="section-label">Course Sequence</h2>
            <p className="text-[14px] leading-[1.75] text-dim max-w-[680px]">
              CS pathway flows left to right. Engineering track branches at Math
              2B / ENGR 11. All courses accessible at Track I with no prior
              programming.
            </p>
          </div>

          {/* Pathway flow */}
          <div className="flex items-center overflow-x-auto pb-4 gap-0">
            {pathwayNodes.map((node, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                {idx > 0 && (
                  <div className="relative w-9 h-0.5 bg-cream shrink-0">
                    <div className="absolute right-[-1px] top-[-3px] w-0 h-0 border-l-[6px] border-l-cream border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
                  </div>
                )}
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <div
                    className={`w-11 h-11 border-2 rounded-full flex items-center justify-center font-mono text-[8.5px] tracking-[0.03em] text-center leading-[1.2] ${
                      node.style === "filled"
                        ? "bg-ink text-paper border-ink"
                        : node.style === "accent"
                          ? "bg-red text-white border-red"
                          : node.style === "branch"
                            ? "bg-teal text-white border-teal"
                            : "bg-paper text-ink border-ink"
                    }`}
                  >
                    <span className="whitespace-pre-wrap">{node.code}</span>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-dim text-center max-w-[72px] leading-[1.4]">
                    {node.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== THREE TRACKS ======== */}
      <section className="bg-ink text-paper border-b-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 items-start">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red flex items-start gap-2.5 pt-1">
            <span aria-hidden className="text-white/20">{"//  "}</span>Three Tracks
          </div>
          <div>
            {/* Key insight */}
            <div className="bg-white/[0.04] border border-white/10 p-5 lg:p-6 mb-8">
              <p className="font-serif text-[17px] italic text-paper leading-[1.5]">
                &ldquo;Tracks are chosen weekly, not at semester start. A
                student can run Track I for ten weeks and switch to Track II for
                the capstone. There is no grade penalty for choosing Track
                I.&rdquo;
              </p>
              <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-white/30 block mt-2">
                The Key Design Insight — Track System
              </span>
            </div>

            <p className="text-[15px] leading-[1.85] text-white/55 max-w-[640px] mb-8">
              Every course in this curriculum is taught at three simultaneous
              depth levels. These are not ability groups, remediation tiers, or
              ceiling categories — they are depth choices. The same concept is
              taught to everyone. What varies is whether a student builds it,
              proves it, or extends it. Track I is a complete, serious course
              outcome — not a consolation.
            </p>

            {/* Track cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border border-white/10">
              {trackData.map((track) => (
                <div
                  key={track.roman}
                  className="p-7 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10 last:border-r-0 last:border-b-0"
                >
                  <div
                    className={`font-display text-[48px] leading-none mb-3 ${track.romanClass}`}
                  >
                    {track.roman}
                  </div>
                  <h3 className="font-serif text-[17px] italic text-paper mb-2.5">
                    {track.subtitle}
                  </h3>
                  <p className="text-[15.5px] leading-[1.7] text-white/85 mb-4">
                    {track.desc}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {track.examples.map((ex) => (
                      <div
                        key={ex}
                        className="font-mono text-[10px] tracking-[0.06em] text-white/30 py-1.5 px-2.5 border-l-2 border-white/10"
                      >
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Track note spanning all columns */}
              <div className="lg:col-span-3 border-t border-white/[0.08] px-7 lg:px-8 py-5 font-mono text-[11px] tracking-[0.06em] text-white/30 leading-[1.7]">
                Track I is a complete, serious outcome — not a consolation.
                Students completing Track I have built more real software than
                most students in exam-based courses. &middot; Tracks are chosen
                weekly. A student can run Track I for 10 weeks and switch to
                Track II for the capstone. &middot; There is no grade penalty
                for choosing Track I. Assessment is portfolio-based across all
                tracks.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== COURSE GRID ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-12">
            <h2 className="section-label">Six Courses</h2>
            <div>
              <p className="text-[14px] leading-[1.75] text-dim max-w-[680px] mb-6">
                Filter by track level, or view all courses in the curriculum.
                Each course card links to its full detail page.
              </p>
              {/* Track filter buttons */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTrack(null)}
                  className={`px-3.5 py-1.5 font-mono text-[10px] tracking-[0.12em] uppercase border transition-colors cursor-pointer ${
                    activeTrack === null
                      ? "bg-ink text-paper border-ink"
                      : "bg-transparent text-dim border-cream hover:border-ink"
                  }`}
                >
                  All Courses
                </button>
                {[1, 2, 3].map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTrack(t as 1 | 2 | 3)}
                    className={`px-3.5 py-1.5 font-mono text-[10px] tracking-[0.12em] uppercase border transition-colors cursor-pointer ${
                      activeTrack === t
                        ? "bg-ink text-paper border-ink"
                        : "bg-transparent text-dim border-cream hover:border-ink"
                    }`}
                  >
                    Track {["I", "II", "III"][t - 1]}
                    {t === 1
                      ? " · Foundation"
                      : t === 2
                        ? " · Application"
                        : " · Mastery"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Course cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-2 border-ink">
            {filteredCourses.map((course) => {
              const st = statusLabels[course.status];
              return (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="flex flex-col border-b-2 xl:border-r-2 border-ink no-underline text-inherit transition-colors hover:bg-cream last:border-b-0 [&:nth-child(3n)]:xl:border-r-0 [&:nth-child(2n)]:md:border-r-0 [&:nth-child(2n)]:xl:border-r-2 [&:nth-last-child(-n+3)]:xl:border-b-0"
                >
                  {/* Card top */}
                  <div
                    className="bg-ink text-paper px-7 lg:px-9 py-8 relative overflow-hidden"
                    style={{
                      borderBottom: `3px solid ${course.color}`,
                    }}
                  >
                    <div className="absolute right-[-10px] bottom-[-20px] font-display text-[100px] leading-none opacity-[0.06] pointer-events-none">
                      {course.code.split(" ")[1]}
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 mb-3.5">
                      Track {["I", "II", "III"][course.track - 1]}
                    </div>
                    <div className="font-display text-[52px] leading-none mb-1">
                      {course.code.split(" ")[0]}{" "}
                      <span style={{ color: course.color }}>
                        {course.code.split(" ")[1]}
                      </span>
                    </div>
                    <div className="font-serif text-[18px] italic text-white/75 leading-[1.3]">
                      {course.name}
                    </div>
                  </div>
                  {/* Card body */}
                  <div className="px-7 lg:px-9 py-7 flex-1 flex flex-col">
                    <span
                      className={`inline-block self-start px-2.5 py-0.5 font-mono text-[9px] tracking-[0.12em] uppercase border rounded-sm mb-2.5 ${st.cls}`}
                    >
                      {st.text}
                    </span>
                    <p className="text-[16px] leading-[1.7] text-ink/85 flex-1 mb-6">
                      {course.desc}
                    </p>
                    <div className="flex flex-col gap-2 border-t border-cream pt-5 mb-6">
                      <div className="flex justify-between items-center font-mono text-[10.5px] tracking-[0.06em]">
                        <span className="text-dim/70">Units</span>
                        <span className="text-ink">{course.units}</span>
                      </div>
                      <div className="flex justify-between items-center font-mono text-[10.5px] tracking-[0.06em]">
                        <span className="text-dim/70">Prereq</span>
                        <span className="text-ink">{course.prereq}</span>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.12em] uppercase transition-[gap] hover:gap-4"
                      style={{ color: course.color }}
                    >
                      <span>View Course</span>
                      <span aria-hidden className="text-[18px]">&rarr;</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="bg-ink text-paper border-t-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-red mb-4">
            Understand the Framework
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] leading-none mb-6">
            Why These Courses Work This Way
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/philosophy"
              className="inline-block px-6 py-3 border border-white/15 font-mono text-[11px] tracking-[0.12em] uppercase text-white/50 hover:text-paper hover:border-white/30 transition-colors no-underline"
            >
              Teaching Philosophy <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/research"
              className="inline-block px-6 py-3 border border-white/15 font-mono text-[11px] tracking-[0.12em] uppercase text-white/50 hover:text-paper hover:border-white/30 transition-colors no-underline"
            >
              Research Agenda <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

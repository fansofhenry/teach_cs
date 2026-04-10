"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import {
  labMeta,
  mentorAnchors,
  jeffsValues,
  benchPapers,
  weeklyWorkflow,
  videoPlans,
  videoStructure,
  videoHouseRules,
  mentorProtocol,
  benchTemplates,
} from "@/lib/data/modelingBench";

// ----------------------------------------------------------------
// Local research log (localStorage, paper-tagged)
// ----------------------------------------------------------------

interface LogEntry {
  id: string;
  ts: number;
  paper: "P1" | "P2" | "P3" | "lab";
  what: string;
  notes: string;
}

const STORAGE_KEY = "modeling-bench-log-v1";

function paperLabel(p: LogEntry["paper"]) {
  switch (p) {
    case "P1":
      return "P1 · MER 2.0";
    case "P2":
      return "P2 · Matrices→Networks";
    case "P3":
      return "P3 · AI Tutor";
    default:
      return "Lab";
  }
}

function paperAccent(p: LogEntry["paper"]) {
  switch (p) {
    case "P1":
      return "border-red";
    case "P2":
      return "border-teal";
    case "P3":
      return "border-gold";
    default:
      return "border-ink/30";
  }
}

function fmtTs(ts: number) {
  const d = new Date(ts);
  return d.toISOString().slice(0, 16).replace("T", " ");
}

// ----------------------------------------------------------------
// Page
// ----------------------------------------------------------------

export default function ModelingBenchPage() {
  // Hydration-safe localStorage hook
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [paper, setPaper] = useState<LogEntry["paper"]>("P1");
  const [what, setWhat] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setEntries(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries, hydrated]);

  function addEntry(ev: FormEvent) {
    ev.preventDefault();
    if (!what.trim()) return;
    setEntries((prev) => [
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        ts: Date.now(),
        paper,
        what: what.trim(),
        notes: notes.trim(),
      },
      ...prev,
    ]);
    setWhat("");
    setNotes("");
  }

  function deleteEntry(id: string) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  function exportEntries() {
    const blob = new Blob([JSON.stringify(entries, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `modeling-bench-log-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function importEntries() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result));
          if (!Array.isArray(parsed)) throw new Error("not an array");
          const merged = [...entries, ...parsed];
          const seen = new Map<string, LogEntry>();
          merged.forEach((e: LogEntry) => seen.set(e.id, e));
          setEntries(Array.from(seen.values()).sort((a, b) => b.ts - a.ts));
        } catch (err) {
          alert(`Import failed: ${(err as Error).message}`);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  return (
    <>
      {/* ============================ HERO ============================ */}
      <header className="bg-ink text-paper border-b-[5px] border-red">
        <div className="border-b border-white/10 px-7 lg:px-[60px] py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/50 flex justify-between">
          <span>Research / Modeling Bench</span>
          <span>Applied LA · Hands-On Pedagogy · CS Ed × AI</span>
        </div>
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 lg:py-20">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-5 animate-fade-up-1">
            3-Paper Research Program · v0.1
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[0.02em] mb-7 animate-fade-up-2">
            The Modeling
            <br />
            <span className="text-red">Bench</span>
          </h1>
          <p className="text-[15px] leading-[1.9] text-white/60 font-light max-w-[680px] animate-fade-up-3">
            {labMeta.tagline} Henry runs the lab as principal investigator;
            Prof. Jeff Anderson (Foothill College) is mentor and second author.
            Every direction below is anchored to a written invitation in
            Anderson&apos;s published work or the Math 2BL Spring 2026
            deliverables document.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-3 mt-9 max-w-[860px] animate-fade-up-4">
            <Field label="Principal author" value={labMeta.principal} />
            <Field label="Mentor" value={labMeta.mentor} />
            <Field label="Started" value={labMeta.startDate} />
            <Field label="Target venues" value={labMeta.targetVenues} />
          </div>
          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up-4">
            <Link
              href="/research"
              className="inline-block px-4 py-2 border border-white/30 font-mono text-[10px] tracking-[0.12em] uppercase text-white/70 hover:bg-white/10 transition-colors no-underline"
            >
              ← Back to Research
            </Link>
            <a
              href={labMeta.hubMirror}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-red/60 font-mono text-[10px] tracking-[0.12em] uppercase text-red hover:bg-red/10 transition-colors no-underline"
            >
              Vanilla HTML mirror ↗
            </a>
          </div>
        </div>
      </header>

      {/* ============================ PI BRIEF ============================ */}
      <Section label="PI Brief" eyebrow="§00">
        <div className="space-y-5">
          <p className="text-[16px] leading-[1.9]">
            The lab exists to ship three publishable papers within twelve
            months while building the technical, narrative, and visual fluency
            needed to lead a CS-Education / Learning-Sciences PhD. The unit of
            work is the paper. Everything in this site exists to remove
            friction between an idea and a submitted manuscript.
          </p>
          <div className="border-l-[3px] border-red bg-red/5 px-5 py-4">
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-red mb-2">
              Operating Principle
            </div>
            <p className="text-[14px] leading-[1.85]">
              Every week, two things must move forward:{" "}
              <em>(a)</em> a measurable artifact in at least one paper (data,
              code, hardware photo, draft section), and <em>(b)</em> a
              five-minute mentor-ready update. If neither moved, the week is a
              regression — diagnose why before doing anything else.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.14em] uppercase text-dim mb-2">
              Constraints we accept
            </h4>
            <ul className="space-y-1.5 text-[14px] leading-[1.8]">
              <li>
                · Henry has a full-time CVC-OEI Application Support Analyst
                role at FHDA. Research is the second shift.
              </li>
              <li>
                · Jeff&apos;s time is precious. Mentor touchpoints are
                async-first, asks-only, and never longer than 10 minutes of
                his reading time.
              </li>
              <li>
                · No grant funding. Hardware budgets justify against a
                $200/quarter cap.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ============================ MENTOR & LINEAGE ============================ */}
      <DarkSection label="Mentor & Lineage" eyebrow="§01">
        <p className="text-[15px] leading-[1.85] text-white/60 max-w-[720px] mb-10">
          Three of these papers are deliberate extensions of work Jeff has
          already published or has explicitly flagged as open in his Math 2BL
          deliverables doc. We are not pitching cold — we are stepping into
          invitations he has already issued in writing.
        </p>

        <div className="border border-white/10">
          {mentorAnchors.map((m, idx) => (
            <div
              key={m.anchor}
              className={`p-7 lg:p-8 grid grid-cols-1 lg:grid-cols-[260px_1fr_1fr] gap-6 lg:gap-10 ${
                idx < mentorAnchors.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div>
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-red mb-1.5">
                  Anchor
                </div>
                <h4 className="font-serif italic text-[18px] text-paper leading-[1.3]">
                  {m.anchor}
                </h4>
              </div>
              <div>
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-white/40 mb-1.5">
                  Source
                </div>
                <p className="text-[12.5px] leading-[1.8] text-white/55">
                  {m.source}
                </p>
              </div>
              <div className="border-l-[3px] border-red pl-4">
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-white/40 mb-1.5">
                  How we extend it
                </div>
                <p className="font-mono text-[10.5px] leading-[1.7] text-red">
                  {m.extension}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-display text-[28px] text-paper mt-14 mb-5 tracking-wide">
          What Jeff cares about
        </h3>
        <p className="text-[13px] text-white/40 italic mb-6">
          Read this list before every mentor email.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {jeffsValues.map((v) => (
            <div
              key={v.name}
              className="p-5 border border-white/10 bg-white/[0.02]"
            >
              <h4 className="font-serif italic text-[16px] text-paper mb-2">
                {v.name}
              </h4>
              <p className="text-[12.5px] leading-[1.8] text-white/50">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* ============================ THE THREE PAPERS ============================ */}
      <Section label="The Three Papers" eyebrow="§02">
        <p className="text-[15px] leading-[1.85] text-dim max-w-[720px] mb-10">
          Three independent contributions; one shared aesthetic. Each paper
          has a working title, abstract draft, methodology, risks, and a
          publishable-vs-mediocre line.
        </p>

        <div className="space-y-12">
          {benchPapers.map((p) => (
            <PaperCard key={p.id} paper={p} />
          ))}
        </div>

        <div className="mt-12 border-l-[3px] border-red bg-red/5 px-5 py-4">
          <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-red mb-2">
            Why these three and not others
          </div>
          <p className="text-[13.5px] leading-[1.85]">
            A longer list of seven candidates (image morphs/warps, Eigenfaces,
            P-block 2.0, Computer Graphics & 3D Animations, Cubic Splines, GPS
            Least-Squares, an Anderson-curriculum effectiveness study) is
            preserved in{" "}
            <a
              href="https://fansofhenry.github.io/research-lab/templates/long-list-of-candidates.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red underline"
            >
              long-list-of-candidates.md
            </a>{" "}
            for future quarters. The three above were chosen because each is
            anchored to a specific written invitation from Jeff (a published
            paper to extend, an &ldquo;under development&rdquo; project to
            build, or a published framework to operationalize), and because
            together they span hardware, curriculum, and HCI — the trifecta a
            CS Ed / Learning Sciences / HCI PhD application needs.
          </p>
        </div>
      </Section>

      {/* ============================ WEEKLY WORKFLOW ============================ */}
      <Section label="Weekly Workflow" eyebrow="§03" cream>
        <p className="text-[15px] leading-[1.85] text-dim max-w-[720px] mb-10">
          Eight protected hours per week, distributed so no single paper
          starves and no single day eats Henry alive. The day-of-week
          assignments are templates, not laws.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-ink bg-paper">
          {weeklyWorkflow.map((d, idx) => (
            <div
              key={d.day}
              className={`p-5 ${
                idx % 4 !== 3 ? "lg:border-r-2" : ""
              } ${idx < 4 ? "lg:border-b-2" : ""} ${
                idx % 2 !== 1 ? "md:border-r-2 lg:border-r-0" : ""
              } ${
                idx < weeklyWorkflow.length - 1
                  ? "border-b-2 md:border-b-2 lg:border-b-2"
                  : ""
              } border-ink`}
            >
              <div className="font-display text-[22px] text-ink leading-none mb-1 tracking-wide">
                {d.day}
              </div>
              <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-red mb-1">
                {d.block}
              </div>
              <div className="font-mono text-[10px] text-dim mb-3">
                {d.hours}
              </div>
              <ul className="space-y-1.5 text-[12px] leading-[1.7] text-dim">
                {d.bullets.map((b, i) => (
                  <li key={i}>· {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="font-display text-[28px] text-ink mt-14 mb-3 tracking-wide">
          Mentor Protocol
        </h3>
        <p className="text-[13px] text-dim italic mb-6">
          Keep Jeff&apos;s load under 10 min/week.
        </p>
        <div className="border-2 border-ink bg-paper">
          {mentorProtocol.map((m, idx) => (
            <div
              key={m.rule}
              className={`p-6 ${
                idx < mentorProtocol.length - 1 ? "border-b-2 border-ink" : ""
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4">
                <div className="font-serif italic text-[16px] text-ink">
                  {m.rule}
                </div>
                <p className="text-[13px] leading-[1.8] text-dim">{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================ RESEARCH LOG ============================ */}
      <Section label="Research Log" eyebrow="§04">
        <p className="text-[15px] leading-[1.85] text-dim max-w-[720px] mb-10">
          A persistent, paper-tagged journal. Entries live in{" "}
          <code className="font-mono text-[12px]">localStorage</code> on this
          device — they survive page reloads but should be exported to git
          monthly via <em>Export JSON</em>.
        </p>

        <form
          onSubmit={addEntry}
          className="border-2 border-ink bg-cream p-6 lg:p-8 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-5 mb-4">
            <label className="block">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-dim block mb-1.5">
                Paper
              </span>
              <select
                value={paper}
                onChange={(e) =>
                  setPaper(e.target.value as LogEntry["paper"])
                }
                className="w-full px-3 py-2 border-2 border-ink bg-paper font-mono text-[12px]"
              >
                <option value="P1">Paper 01 — MER 2.0</option>
                <option value="P2">
                  Paper 02 — Matrices to Networks
                </option>
                <option value="P3">Paper 03 — AI Modeling Tutor</option>
                <option value="lab">Lab-wide / cross-cutting</option>
              </select>
            </label>
            <label className="block">
              <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-dim block mb-1.5">
                What moved (one sentence)
              </span>
              <input
                type="text"
                value={what}
                onChange={(e) => setWhat(e.target.value)}
                maxLength={240}
                placeholder="e.g. Bench-tested 3 spring stiffnesses; k=12 N/m gives cleanest 2nd mode."
                className="w-full px-3 py-2 border-2 border-ink bg-paper font-body text-[14px]"
                required
              />
            </label>
          </div>
          <label className="block mb-5">
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-dim block mb-1.5">
              Notes / next step (optional)
            </span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              maxLength={1200}
              rows={3}
              placeholder="Optional: link to commit, sketch of next step, mentor question..."
              className="w-full px-3 py-2 border-2 border-ink bg-paper font-body text-[14px] resize-y"
            />
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="px-5 py-2.5 bg-ink text-paper font-mono text-[11px] tracking-[0.12em] uppercase hover:bg-red transition-colors"
            >
              Log Entry
            </button>
            <button
              type="button"
              onClick={exportEntries}
              className="px-5 py-2.5 border-2 border-ink text-ink font-mono text-[11px] tracking-[0.12em] uppercase hover:bg-ink hover:text-paper transition-colors"
            >
              Export JSON
            </button>
            <button
              type="button"
              onClick={importEntries}
              className="px-5 py-2.5 border-2 border-ink text-ink font-mono text-[11px] tracking-[0.12em] uppercase hover:bg-ink hover:text-paper transition-colors"
            >
              Import JSON
            </button>
          </div>
        </form>

        {hydrated && entries.length === 0 && (
          <p className="text-dim italic font-serif text-[15px]">
            No entries yet. The first one is the hardest.
          </p>
        )}

        <ul className="space-y-3 list-none p-0">
          {entries.map((e) => (
            <li
              key={e.id}
              className={`pl-5 py-2 border-l-[3px] ${paperAccent(e.paper)} bg-paper`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="font-mono text-[10px] text-dim">
                    {fmtTs(e.ts)}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-dim ml-3">
                    {paperLabel(e.paper)}
                  </span>
                  <p className="text-[14px] leading-[1.7] mt-1">{e.what}</p>
                  {e.notes && (
                    <p className="text-[12.5px] leading-[1.7] text-dim mt-1.5 whitespace-pre-wrap">
                      {e.notes}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => deleteEntry(e.id)}
                  className="text-dim hover:text-red font-mono text-[11px] cursor-pointer"
                  aria-label="Delete entry"
                >
                  ×
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ============================ VIDEO PIPELINE ============================ */}
      <DarkSection label="Video Pipeline" eyebrow="§05">
        <p className="text-[15px] leading-[1.85] text-white/60 max-w-[720px] mb-10">
          One companion video per paper, each in the 6–9 minute range. The
          video is not a marketing afterthought — it is a forcing function for
          clarity. If you cannot animate the core idea, you do not yet
          understand it.
        </p>

        <div className="space-y-8 mb-14">
          {videoPlans.map((v) => (
            <div
              key={v.paperId}
              className="border border-white/10 p-6 lg:p-8 bg-white/[0.02]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
                <div>
                  <div className="font-display text-[36px] text-red leading-none mb-1">
                    {v.paperId}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/40">
                    {v.paperShort}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-white/40 mb-1.5">
                    Core visual insight
                  </div>
                  <p className="font-serif italic text-[16px] text-paper leading-[1.45] mb-5">
                    “{v.coreInsight}”
                  </p>
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-white/40 mb-1.5">
                    Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {v.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-white/5 border border-white/15 font-mono text-[9px] text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-white/40 mb-1.5">
                    Animation ideas
                  </div>
                  <ol className="space-y-1.5 text-[12.5px] leading-[1.75] text-white/55 list-none">
                    {v.animations.map((a, i) => (
                      <li key={i} className="pl-5 relative">
                        <span className="absolute left-0 text-red font-mono text-[10px]">
                          {i + 1}.
                        </span>
                        {a}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-display text-[28px] text-paper mb-3 tracking-wide">
          Standard 7-min script structure
        </h3>
        <div className="border border-white/10">
          {videoStructure.map((row, idx) => (
            <div
              key={row.beat}
              className={`p-5 grid grid-cols-1 md:grid-cols-[120px_180px_1fr] gap-4 ${
                idx < videoStructure.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              <span className="font-mono text-[11px] text-red">{row.time}</span>
              <span className="font-serif italic text-[15px] text-paper">
                {row.beat}
              </span>
              <span className="text-[12.5px] leading-[1.75] text-white/55">
                {row.body}
              </span>
            </div>
          ))}
        </div>

        <h3 className="font-display text-[28px] text-paper mt-14 mb-3 tracking-wide">
          House rules — translating LA to visuals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {videoHouseRules.map((r) => (
            <div key={r.rule} className="p-5 border border-white/10">
              <h4 className="font-serif italic text-[15px] text-paper mb-2">
                {r.rule}
              </h4>
              <p className="text-[12px] leading-[1.8] text-white/50">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </DarkSection>

      {/* ============================ TEMPLATES ============================ */}
      <Section label="Templates" eyebrow="§06" cream>
        <p className="text-[15px] leading-[1.85] text-dim max-w-[720px] mb-10">
          Open in any markdown editor. Copy, fill, rename, commit. Each
          template is short on purpose — friction kills logging. These mirror
          the canonical copies in{" "}
          <a
            href={labMeta.hubMirror}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red underline"
          >
            fansofhenry.github.io/research-lab
          </a>
          .
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benchTemplates.map((t) => (
            <a
              key={t.filename}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-paper border-2 border-ink no-underline hover:bg-cream transition-colors"
            >
              <div className="font-mono text-[12px] text-ink mb-1.5">
                {t.title}
              </div>
              <p className="text-[12px] leading-[1.7] text-dim">
                {t.description}
              </p>
            </a>
          ))}
        </div>
      </Section>

      {/* ============================ CTA STRIP ============================ */}
      <section className="bg-red text-white px-7 lg:px-[60px] py-14">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p className="font-serif text-[clamp(20px,2.5vw,28px)] italic leading-[1.4] max-w-[760px]">
              &ldquo;The first commit before sundown. The lab is real the
              moment it has a git history.&rdquo;
            </p>
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/60 mt-3.5">
              Modeling Bench · Operating Rule
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/research"
              className="inline-block px-5 py-2.5 border border-white/30 font-mono text-[11px] tracking-[0.12em] uppercase text-white hover:bg-white/10 transition-colors no-underline text-center"
            >
              ← Research Interests
            </Link>
            <a
              href={labMeta.hubMirror}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 border border-white/30 font-mono text-[11px] tracking-[0.12em] uppercase text-white hover:bg-white/10 transition-colors no-underline text-center"
            >
              Vanilla HTML Mirror ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// ----------------------------------------------------------------
// Section helpers — match the parent /research page's grammar
// ----------------------------------------------------------------

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-white/40 mb-1">
        {label}
      </div>
      <div className="font-mono text-[12px] text-white/85">{value}</div>
    </div>
  );
}

function Section({
  label,
  eyebrow,
  cream,
  children,
}: {
  label: string;
  eyebrow: string;
  cream?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${cream ? "bg-cream" : ""} border-b-2 border-ink`}
    >
      <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-12">
          <div className="section-label">
            <span className="font-mono text-[10px] text-dim mr-2">
              {eyebrow}
            </span>
            {label}
          </div>
          <div />
        </div>
        {children}
      </div>
    </section>
  );
}

function DarkSection({
  label,
  eyebrow,
  children,
}: {
  label: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-ink text-paper border-b-2 border-white/[0.06]">
      <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-12">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red flex items-start gap-2.5 pt-1">
            <span className="text-white/20">{"//  "}</span>
            <span className="font-mono text-[10px] text-white/30 mr-2">
              {eyebrow}
            </span>
            {label}
          </div>
          <div />
        </div>
        {children}
      </div>
    </section>
  );
}

// ----------------------------------------------------------------
// Paper card
// ----------------------------------------------------------------

function PaperCard({ paper: p }: { paper: (typeof benchPapers)[number] }) {
  const accent =
    p.id === "P1" ? "border-red" : p.id === "P2" ? "border-teal" : "border-gold";
  return (
    <article
      className={`bg-paper border-2 border-ink border-l-[8px] ${accent} p-7 lg:p-10`}
    >
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="font-mono text-[10px] tracking-[0.12em] uppercase bg-ink text-paper px-2.5 py-1">
          Paper {p.number}
        </span>
        {p.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[9px] tracking-[0.1em] uppercase bg-cream border border-ink/15 text-ink px-2 py-1"
          >
            {t}
          </span>
        ))}
        <span className="ml-auto font-mono text-[9px] tracking-[0.12em] uppercase text-dim">
          → {p.targetVenue}
        </span>
      </div>

      <h3 className="font-serif text-[22px] lg:text-[26px] italic leading-[1.25] text-ink mb-6">
        {p.workingTitle}
      </h3>

      <Field2 label="Abstract (draft v0)">
        <p className="text-[13.5px] leading-[1.85] text-ink/85">{p.abstract}</p>
      </Field2>

      <Field2 label="Research questions">
        <ul className="space-y-2 list-none p-0">
          {p.researchQuestions.map((rq) => (
            <li key={rq.id} className="flex gap-3">
              <span className="font-mono text-[10px] text-red shrink-0 pt-1">
                {rq.id}
              </span>
              <span className="text-[13px] leading-[1.7]">{rq.q}</span>
            </li>
          ))}
        </ul>
      </Field2>

      <Field2 label="Methodology">
        <p className="text-[13px] leading-[1.8] text-ink/80">{p.methodology}</p>
      </Field2>

      <Field2 label="Required math & CS">
        <p className="text-[12.5px] leading-[1.8] text-ink/70">{p.mathAndCS}</p>
      </Field2>

      <Field2 label="Step-by-step execution plan">
        <ol className="space-y-2 list-none p-0">
          {p.executionPlan.map((step) => (
            <li
              key={step.week}
              className="grid grid-cols-[80px_1fr] gap-3 text-[12.5px] leading-[1.7]"
            >
              <span className="font-mono text-red text-[11px]">{step.week}</span>
              <span className="text-ink/80">{step.body}</span>
            </li>
          ))}
        </ol>
      </Field2>

      <Field2 label="Risks & failure modes">
        <ul className="space-y-2.5 list-none p-0">
          {p.risks.map((r) => (
            <li key={r.name} className="text-[12.5px] leading-[1.75]">
              <span className="font-serif italic text-ink">{r.name}.</span>{" "}
              <span className="text-ink/70">{r.body}</span>
            </li>
          ))}
        </ul>
      </Field2>

      <Field2 label="Publishable vs mediocre">
        <div className="space-y-2 text-[13px] leading-[1.8]">
          <p>
            <span className="font-mono text-[10px] text-dim uppercase tracking-[0.1em]">
              Mediocre:{" "}
            </span>
            <span className="text-ink/70 italic">
              &ldquo;{p.publishableLine.mediocre}&rdquo;
            </span>
          </p>
          <p>
            <span className="font-mono text-[10px] text-red uppercase tracking-[0.1em]">
              Publishable:{" "}
            </span>
            <span className="text-ink">
              &ldquo;{p.publishableLine.publishable}&rdquo;
            </span>
          </p>
        </div>
      </Field2>

      <Field2 label="The money figure">
        <p className="text-[12.5px] leading-[1.8] text-ink/75 italic">
          {p.moneyFigure}
        </p>
      </Field2>

      <div>
        <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-dim mb-2">
          Kanban
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {(
            [
              ["Backlog", p.kanban.backlog],
              ["In Progress", p.kanban.inProgress],
              ["In Review", p.kanban.inReview],
              ["Done", p.kanban.done],
            ] as const
          ).map(([label, items]) => (
            <div key={label} className="bg-cream border-t-[3px] border-ink p-3">
              <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-dim mb-2">
                {label}
              </div>
              <ul className="space-y-1 text-[11.5px] leading-[1.6] text-ink/80 list-none p-0 min-h-[40px]">
                {items.length === 0 ? (
                  <li className="text-ink/30">—</li>
                ) : (
                  items.map((it) => <li key={it}>· {it}</li>)
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function Field2({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-dim mb-2">
        {label}
      </div>
      {children}
    </div>
  );
}

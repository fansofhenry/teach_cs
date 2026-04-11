import type { Metadata } from "next";
import Link from "next/link";
import { researchProjects } from "@/lib/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Henry Fan's research program. Primary work: three first-author papers in applied linear algebra and CS education, with Prof. Jeff Anderson (Foothill College). Broader agenda: four research questions on community-college CS learning that motivate a future PhD.",
  openGraph: {
    title: "Research — Henry Fan",
    description:
      "Three first-author papers in flight with Prof. Jeff Anderson, plus the CS-Education research questions that motivate a future PhD.",
    images: ["/opengraph-image.png"],
  },
};

const researchQuestions = [
  {
    id: "RQ1",
    question:
      "How do curriculum dependency structures in introductory CS courses shape who persists and who leaves — and how can those structures be redesigned to broaden participation?",
    context:
      "Community college CS students face prerequisite chains that were designed for a different population. When a student fails CS1, the structure forces a full-year delay. This question investigates whether the dependency graph itself — not student ability — is the primary attrition mechanism.",
    methods: ["Curriculum network analysis", "Survival analysis", "Institutional ethnography"],
    connection:
      "The three-track system proposed in every course replaces prerequisite gates with depth choices, allowing students to enter any course at Track I without prior programming experience.",
  },
  {
    id: "RQ2",
    question:
      "What are the help-seeking behaviors of community college CS students, and how do structural barriers (work schedules, commute times, family obligations) reshape when and how students seek help?",
    context:
      "Help-seeking research in CS education overwhelmingly studies four-year residential students. Community college students — who are more likely to work full-time, commute, and have caregiving responsibilities — have fundamentally different access to office hours, study groups, and peer networks. Their help-seeking patterns are not deficits; they are rational responses to structural constraints.",
    methods: ["Experience sampling", "Semi-structured interviews", "Thematic analysis", "Ecological momentary assessment"],
    connection:
      "Every course in the proposal is designed with asynchronous help channels, recorded walkthroughs of common stuck points, and project milestones sequenced so that the most common failure modes are addressable without synchronous faculty contact.",
  },
  {
    id: "RQ3",
    question:
      "How does a project-based, no-exam assessment model affect CS identity formation among students who have been historically excluded from computing?",
    context:
      "Students who do not see themselves as 'CS people' often cite exam culture, competitive grading, and the assumption of prior exposure as the reasons. Portfolio-based assessment removes the high-stakes single-point-of-failure that exams represent. This question asks whether that structural change affects whether students begin to identify as people who do computing.",
    methods: ["Longitudinal interview study", "Identity trajectory mapping", "Portfolio analysis"],
    connection:
      "The portfolio assessment model, public exhibitions, and student-proposed grading specified across all six courses are the proposed intervention. The Abuelita Test — which asks students to explain their work to a non-technical family member — is designed specifically to strengthen identity through communication.",
  },
  {
    id: "RQ4",
    question:
      "How do community college students experience and make meaning of algorithmic bias — and does integrating equity analysis into technical coursework change how they understand the systems they build?",
    context:
      "Most research on ethics in CS education studies elite four-year institutions. Community college students bring different lived experiences with algorithmic systems — as subjects of automated hiring tools, predictive policing, and benefits allocation algorithms. Their analysis of bias is not abstract; it is personal. This question investigates how that positionality shapes critical technical practice.",
    methods: ["Design-based research", "Artifact analysis", "Critical discourse analysis"],
    connection:
      "The Bias Audit project designed for CS 180 and CS 185, modeled on Buolamwini's Gender Shades methodology, is the proposed site for this research. In the course design, students choose real deployed systems, design test protocols, measure performance across demographic groups, and write findings reports.",
  },
];

const methodologyInterests = [
  {
    name: "Design-Based Research (DBR)",
    desc: "Iterative cycles of design, implementation, analysis, and redesign — conducted in authentic educational settings. The curriculum itself is the intervention, and each semester is a research cycle.",
  },
  {
    name: "Qualitative Methods",
    desc: "Semi-structured interviews, think-aloud protocols, artifact analysis, and thematic coding. Understanding the student experience requires methods that center student voice.",
  },
  {
    name: "Learning Analytics",
    desc: "Curriculum network analysis, prerequisite dependency modeling, and survival analysis applied to institutional data to understand structural barriers at scale.",
  },
  {
    name: "Participatory Design",
    desc: "Students as co-designers of curriculum, not just subjects of study. Proposed three-track system to be developed with student input across multiple semesters of iteration.",
  },
];

const targetPrograms = [
  {
    area: "CS Education",
    focus: "Computing education research, broadening participation, curriculum design",
    examples: "University of Washington (Ko), University of Michigan, Georgia Tech, UC San Diego",
  },
  {
    area: "Learning Sciences",
    focus: "How people learn in authentic contexts, design-based research, equity in STEM",
    examples: "Northwestern, Stanford, University of Colorado Boulder, Vanderbilt",
  },
  {
    area: "HCI / Social Computing",
    focus: "Human-computer interaction, algorithmic fairness, participatory design",
    examples: "CMU HCII, University of Washington, MIT Media Lab, Cornell IS",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* ======== HERO ======== */}
      <header className="bg-ink text-paper border-b-[5px] border-red">
        <div className="border-b border-white/10 px-7 lg:px-[60px] py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/50 flex justify-between">
          <span>Research</span>
          <span>Applied LA · CS Education · Learning Sciences</span>
        </div>
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 lg:py-20">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-5 animate-fade-up-1">
            Active Program + PhD Agenda
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[0.02em] mb-7 animate-fade-up-2">
            Research
          </h1>
          <p className="text-[17px] leading-[1.7] text-white/90 max-w-[720px] animate-fade-up-3">
            My active research program is{" "}
            <strong className="font-medium text-red">three first-author
            papers</strong>{" "}
            in applied linear algebra and CS education, in progress with
            Prof. Jeff Anderson (Foothill College) &mdash; tracked openly on{" "}
            <Link
              href="/research/modeling-bench"
              className="underline decoration-red/60 underline-offset-4 hover:decoration-red"
            >
              the Modeling Bench
            </Link>
            . Alongside that work, I am developing a broader research
            agenda in community-college CS education &mdash; four questions
            about dependency structure, help-seeking, identity, and
            algorithmic equity &mdash; that I intend to formalize in a PhD.
            This page separates the two clearly: what&rsquo;s in flight,
            and what I want to pursue next.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-7 animate-fade-up-4">
            {[
              "Applied Linear Algebra",
              "Hands-on Lab Pedagogy",
              "CS Education",
              "Help-Seeking",
              "Curriculum Design",
              "Algorithmic Equity",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 border border-white/15 font-mono text-[10px] tracking-[0.1em] uppercase text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ======== POSITIONING STATEMENT ======== */}
      <section className="bg-cream border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20">
          <h2 className="section-label">Positioning</h2>
          <div className="space-y-5">
            <p className="text-[16px] leading-[1.9]">
              Two things are running in parallel. The first is concrete and
              near-term: a three-paper program anchored to Prof. Jeff
              Anderson&rsquo;s published work in applied linear algebra and
              his anti-racist, learner-centered objectives. Those drafts are
              active, have target venues, and are tracked week by week on
              the Modeling Bench.
            </p>
            <p className="text-[16px] leading-[1.9]">
              The second is a broader research agenda that emerged from
              designing the{" "}
              <Link
                href="/courses"
                className="underline decoration-dim/40 underline-offset-3 hover:decoration-ink"
              >
                proposed community-college CS curriculum
              </Link>{" "}
              on this site and from my day job at CVC-OEI &mdash; the
              California Community Colleges&rsquo; cross-enrollment
              infrastructure, serving 115+ colleges. Four research questions
              about dependency structure, help-seeking, identity formation,
              and algorithmic equity &mdash; not imported from a literature
              review but drawn from what I see every working day about who
              stays in CS and who leaves.
            </p>
            <p className="text-[16px] leading-[1.9]">
              Community colleges serve{" "}
              <strong className="font-medium">
                nearly half of all undergraduates in the United States
              </strong>
              , yet most CS-education research is conducted at four-year
              residential institutions with very different student
              populations. The CS-Education agenda below is the work I want
              to formalize in a PhD. It is a{" "}
              <strong className="font-medium">proposed program</strong>
              &nbsp;of research, not a record of completed studies.
            </p>
          </div>
        </div>
      </section>

      {/* ======== MODELING BENCH — LIFTED UP ======== */}
      <section className="bg-ink text-paper border-b-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-12">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red flex items-start gap-2.5 pt-1">
              <span aria-hidden className="text-white/20">{"//  "}</span>Active
              Program
            </div>
            <p className="text-[15px] leading-[1.85] text-white/70 max-w-[680px]">
              Three first-author papers in progress with Prof. Jeff
              Anderson, my mentor in applied linear algebra at Foothill
              College. Each paper extends one of Jeff&rsquo;s published
              projects or fills in one he marked &ldquo;under
              development&rdquo; in his Math 2BL deliverables. This is the
              concrete work: draft abstracts, weekly plans, named risks,
              target venues.
            </p>
          </div>

          <div className="border border-white/10 p-8 lg:p-10 bg-white/[0.02]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-8">
              <div>
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-3">
                  3-Paper Program · Mentor: Jeff Anderson
                </div>
                <h2 className="font-display text-[clamp(40px,6vw,72px)] leading-[0.9] tracking-[0.02em] text-paper m-0">
                  The Modeling
                  <br />
                  <span className="text-red">Bench</span>
                </h2>
              </div>
              <Link
                href="/research/modeling-bench"
                className="inline-block px-5 py-3 border border-red/60 font-mono text-[10px] tracking-[0.14em] uppercase text-red hover:bg-red/10 transition-colors no-underline shrink-0"
              >
                Enter the Lab <span aria-hidden>&rarr;</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
              {[
                {
                  num: "01",
                  title: "MER 2.0",
                  sub: "Open-Hardware Lab Kit for Coupled-Oscillator Modeling",
                  venue: "PRIMUS",
                },
                {
                  num: "02",
                  title: "Matrices → Networks",
                  sub: "Linear-Algebra-First NNs via SVD of Trained Layers",
                  venue: "PRIMUS",
                },
                {
                  num: "03",
                  title: "AI Modeling Tutor",
                  sub: "Anti-Racist Audit Framework for LLM Tutors",
                  venue: "JCHE",
                },
              ].map((p, idx) => (
                <div
                  key={p.num}
                  className={`p-6 ${idx < 2 ? "md:border-r border-white/10" : ""}`}
                >
                  <div className="font-display text-[42px] leading-none text-cream/30 mb-2">
                    {p.num}
                  </div>
                  <h3 className="font-serif italic text-[16px] text-paper leading-[1.3] mb-1.5 m-0">
                    {p.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-white/85 mb-3">
                    {p.sub}
                  </p>
                  <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-red">
                    <span aria-hidden>&rarr;</span> {p.venue}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/45 mt-8">
              Mentor: Prof. Jeff Anderson · Foothill College &middot; Mirror:{" "}
              <a
                href="https://fansofhenry.github.io/research-lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red/80 hover:text-red"
              >
                fansofhenry.github.io/research-lab
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ======== RESEARCH QUESTIONS (PhD agenda) ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-16">
            <h2 className="section-label">PhD Research Questions</h2>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              Four interconnected questions about equity, structure, and
              learning in community-college CS &mdash; each grounded in
              curriculum design practice and connected to a proposed
              intervention. These are the questions I want to formalize in
              a doctoral program, not studies I have already run.
            </p>
          </div>

          <div className="space-y-0 border-2 border-ink">
            {researchQuestions.map((rq, idx) => (
              <div
                key={rq.id}
                className={`p-8 lg:p-10 ${idx < researchQuestions.length - 1 ? "border-b-2 border-ink" : ""}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-10">
                  <div>
                    <span className="font-display text-[48px] leading-none text-cream">
                      {rq.id}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-[20px] italic leading-[1.35] mb-4">
                      {rq.question}
                    </h3>
                    <p className="text-[16px] leading-[1.7] text-ink/85 mb-5">
                      {rq.context}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                      <div className="flex-1">
                        <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-dim block mb-2">
                          Proposed Methods
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {rq.methods.map((m) => (
                            <span
                              key={m}
                              className="px-2.5 py-1 bg-teal/10 text-teal border border-teal/30 font-mono text-[9px] tracking-[0.08em] uppercase"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 border-l-[3px] border-red bg-red/5 px-4 py-3">
                        <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-dim block mb-1.5">
                          Connection to Curriculum
                        </span>
                        <p className="font-mono text-[10.5px] leading-[1.7] text-red">
                          {rq.connection}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== PROPOSED PROJECTS (merged) ======== */}
      <section className="border-b-2 border-ink bg-cream">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <h2 className="section-label">Proposed Project Designs</h2>
            <div className="max-w-[640px] space-y-4">
              <p className="text-[15px] leading-[1.85] text-dim">
                Five study designs I would bring to a doctoral program,
                each tied to one of the research questions above. These
                are{" "}
                <strong className="font-medium text-ink">
                  proposed research designs
                </strong>
                &nbsp;&mdash; methodology, data, venue, and expected
                contribution &mdash; not data collection that has already
                happened.
              </p>
              <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-red/80">
                <span aria-hidden>{"// "}</span>All five are pre-IRB, pre-data.
                Status is planning, not in-flight.
              </p>
            </div>
          </div>
          <div className="space-y-0 border-2 border-ink bg-paper">
            {researchProjects.map((proj, idx) => (
              <div
                key={proj.id}
                className={`p-8 lg:p-10 ${idx < researchProjects.length - 1 ? "border-b-2 border-ink" : ""}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-10">
                  <div>
                    <span className="font-display text-[48px] leading-none text-cream">
                      {proj.id}
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                      <h3 className="font-serif text-[20px] italic leading-[1.35] m-0">
                        {proj.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-gold/15 text-[#6b4f00] border border-gold/40 font-mono text-[8.5px] tracking-[0.12em] uppercase">
                        Proposed
                      </span>
                    </div>
                    <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-red mb-4">
                      {proj.subtitle}
                    </p>
                    <p className="text-[16px] leading-[1.7] text-ink/85 mb-4">
                      {proj.description}
                    </p>
                    <div className="border-l-[3px] border-teal bg-teal/5 px-4 py-3 mb-4">
                      <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-dim block mb-1.5">
                        Proposed Methodology
                      </span>
                      <p className="text-[12px] leading-[1.75] text-dim">
                        {proj.methodology}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {proj.techStack && (
                        <div>
                          <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-dim block mb-1.5">
                            Tech Stack
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {proj.techStack.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 bg-ink/5 border border-ink/10 font-mono text-[9px] tracking-[0.08em]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {proj.targetVenue && (
                        <div>
                          <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-dim block mb-1.5">
                            Target Venue
                          </span>
                          <span className="px-2.5 py-1 bg-red/10 text-red border border-red/30 font-mono text-[9px] tracking-[0.08em] uppercase">
                            {proj.targetVenue}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== METHODOLOGY ======== */}
      <section className="bg-ink text-paper border-b-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red flex items-start gap-2.5 pt-1">
              <span aria-hidden className="text-white/20">{"//  "}</span>Methodology
            </div>
            <p className="text-[15px] leading-[1.85] text-white/70 max-w-[620px]">
              My methodological orientation is mixed-methods with a
              qualitative core. The questions I ask require understanding
              student experience from the inside &mdash; not just measuring
              outcomes at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-white/10">
            {methodologyInterests.map((m) => (
              <div
                key={m.name}
                className="p-7 border-b md:border-r border-white/10 last:border-r-0 [&:nth-child(2n)]:md:border-r-0 [&:nth-child(2n)]:xl:border-r xl:[&:nth-child(4n)]:border-r-0"
              >
                <h3 className="font-serif text-[17px] italic text-paper mb-2.5 m-0">
                  {m.name}
                </h3>
                <p className="text-[15.5px] leading-[1.7] text-white/85">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== TARGET PROGRAMS ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <h2 className="section-label">PhD Program Interests</h2>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              I am looking for doctoral programs where curriculum design
              and research are not separate activities &mdash; where the
              work of designing equitable computing education is itself a
              form of scholarly inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 border-2 border-ink">
            {targetPrograms.map((prog, idx) => (
              <div
                key={prog.area}
                className={`p-8 lg:p-10 ${idx < targetPrograms.length - 1 ? "border-b-2 lg:border-b-0 lg:border-r-2 border-ink" : ""}`}
              >
                <h3 className="font-display text-[36px] leading-none mb-3 text-ink m-0">
                  {prog.area}
                </h3>
                <p className="text-[16px] leading-[1.7] text-ink/85 mb-4">
                  {prog.focus}
                </p>
                <div className="border-t border-cream pt-3">
                  <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-dim block mb-1.5">
                    Programs of Interest
                  </span>
                  <p className="font-mono text-[11px] leading-[1.7] text-ink">
                    {prog.examples}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== THEORY-PRACTICE BRIDGE ======== */}
      <section className="bg-red text-white px-7 lg:px-[60px] py-14">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          <div>
            <p className="font-serif text-[clamp(20px,2.5vw,30px)] italic leading-[1.4] max-w-[700px]">
              &ldquo;The curriculum is the proposal. The Modeling Bench is
              the proof that the proposal is being built in the open, with
              a mentor, on a clock.&rdquo;
            </p>
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/80 mt-3.5">
              Research &middot; Practice Connection
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/research/modeling-bench"
              className="inline-block px-5 py-2.5 border border-white/30 font-mono text-[11px] tracking-[0.12em] uppercase text-white hover:bg-white/10 transition-colors no-underline text-center"
            >
              Modeling Bench <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/philosophy"
              className="inline-block px-5 py-2.5 border border-white/30 font-mono text-[11px] tracking-[0.12em] uppercase text-white hover:bg-white/10 transition-colors no-underline text-center"
            >
              Teaching Philosophy <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

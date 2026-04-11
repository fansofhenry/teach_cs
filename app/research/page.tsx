import type { Metadata } from "next";
import Link from "next/link";
import { researchProjects, theoreticalConstructs, researchTimeline } from "@/lib/data/research";

export const metadata: Metadata = {
  title: "Research Interests",
  description:
    "Four research questions the proposed community-college CS curriculum is designed to investigate: dependency structures, help-seeking behavior under structural constraints, portfolio assessment, and the CS 175 cross-STEM computer build. Henry Fan, mentee of Prof. Jeff Anderson (Foothill College).",
  openGraph: {
    title: "Research Interests",
    description:
      "The four research questions driving a proposed six-course community-college CS curriculum — grounded in curriculum design practice, not live teaching.",
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
      "The three-track system in every course is a direct intervention: it replaces prerequisite gates with depth choices, allowing students to enter any course at Track I without prior programming experience.",
  },
  {
    id: "RQ2",
    question:
      "What are the help-seeking behaviors of community college CS students, and how do structural barriers (work schedules, commute times, family obligations) reshape when and how students seek help?",
    context:
      "Help-seeking research in CS education overwhelmingly studies four-year residential students. Community college students — who are more likely to work full-time, commute, and have caregiving responsibilities — have fundamentally different access to office hours, study groups, and peer networks. Their help-seeking patterns are not deficits; they are rational responses to structural constraints.",
    methods: ["Experience sampling", "Semi-structured interviews", "Thematic analysis", "Ecological momentary assessment"],
    connection:
      "Every course in the framework is designed with asynchronous help channels, recorded walkthroughs of common stuck points, and project milestones sequenced so that the most common failure modes are addressable without synchronous faculty contact.",
  },
  {
    id: "RQ3",
    question:
      "How does a project-based, no-exam assessment model affect CS identity formation among students who have been historically excluded from computing?",
    context:
      "Students who do not see themselves as 'CS people' often cite exam culture, competitive grading, and the assumption of prior exposure as the reasons. Portfolio-based assessment removes the high-stakes single-point-of-failure that exams represent. This question asks whether that structural change affects whether students begin to identify as people who do computing.",
    methods: ["Longitudinal interview study", "Identity trajectory mapping", "Portfolio analysis"],
    connection:
      "The portfolio assessment model, public exhibitions, and student-proposed grading specified across all six courses are the intervention this research proposes to study. The Abuelita Test — which asks students to explain their work to a non-technical family member — is designed specifically to strengthen identity through communication.",
  },
  {
    id: "RQ4",
    question:
      "How do community college students experience and make meaning of algorithmic bias — and does integrating equity analysis into technical coursework change how they understand the systems they build?",
    context:
      "Most research on ethics in CS education studies elite four-year institutions. Community college students bring different lived experiences with algorithmic systems — as subjects of automated hiring tools, predictive policing, and benefits allocation algorithms. Their analysis of bias is not abstract; it is personal. This question investigates how that positionality shapes critical technical practice.",
    methods: ["Design-based research", "Artifact analysis", "Critical discourse analysis"],
    connection:
      "The Bias Audit project designed for CS 180 and CS 185, modeled on Buolamwini's Gender Shades methodology, is the primary proposed site for this research. In the course design, students choose real deployed systems, design test protocols, measure performance across demographic groups, and write findings reports.",
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
    desc: "Students as co-designers of curriculum, not just subjects of study. The three-track system was developed with student input across multiple semesters of iteration.",
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

const workingPapers = [
  {
    title: "Help-Seeking Under Constraint: How Community College CS Students Navigate Structural Barriers to Academic Support",
    status: "In preparation",
    desc: "A qualitative study of help-seeking behaviors among community college CS students, investigating how work schedules, commute patterns, and family obligations reshape when, how, and whether students seek help — and what this means for course design.",
  },
  {
    title: "Curriculum as Structure: Prerequisite Dependency Analysis and Attrition in Community College CS Pathways",
    status: "In preparation",
    desc: "Network analysis of prerequisite structures across California community college CS programs, modeling how dependency chains create structural bottlenecks that disproportionately affect students with interrupted enrollment patterns.",
  },
  {
    title: "Derive Before Compute: A Curriculum Framework for Project-Based CS Education at Community Colleges",
    status: "In preparation",
    desc: "A design-based research paper describing the theoretical framework, implementation, and preliminary outcomes of a six-course curriculum built on three principles: derive before compute, build before import, and equity as design.",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* ======== HERO ======== */}
      <header className="bg-ink text-paper border-b-[5px] border-red">
        <div className="border-b border-white/10 px-7 lg:px-[60px] py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/50 flex justify-between">
          <span>Research Interests</span>
          <span>CS Education &middot; Learning Sciences &middot; HCI</span>
        </div>
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 lg:py-20">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-5 animate-fade-up-1">
            CS Education Research Agenda
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[0.02em] mb-7 animate-fade-up-2">
            Research
            <br />
            <span className="text-red">Interests</span>
          </h1>
          <p className="text-[17px] leading-[1.7] text-white/90 max-w-[680px] animate-fade-up-3">
            My research connects curriculum design to scholarship. Every course
            in this framework is designed to double as a research site — for
            questions about how community college students learn computing,
            what structural barriers they face, and how curriculum design can
            itself be an equity intervention. I am pursuing a PhD in CS
            Education, Learning Sciences, or HCI to formalize this work, under
            the mentorship of Prof. Jeff Anderson (Foothill College).
          </p>
          <div className="flex flex-wrap gap-2.5 mt-7 animate-fade-up-4">
            {[
              "CS Education",
              "Broadening Participation",
              "Community College",
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
          <h2 className="section-label">Research Positioning</h2>
          <div className="space-y-5">
            <p className="text-[16px] leading-[1.9]">
              The research questions below emerged from designing this
              six-course community-college CS curriculum and from Henry&rsquo;s
              day-job at CVC-OEI — the California Community Colleges&rsquo;
              cross-enrollment infrastructure, serving 115+ colleges. They are
              not imported from a literature review and applied to a convenient
              setting — they are the questions that emerge when you spend every
              working hour on who stays in CS, who leaves, and what the
              structure of a course makes possible or impossible.
            </p>
            <p className="text-[16px] leading-[1.9]">
              Community colleges serve{" "}
              <strong className="font-medium">
                nearly half of all undergraduates in the United States
              </strong>
              , including disproportionate numbers of first-generation college
              students, students of color, working adults, and students with
              caregiving responsibilities. Yet the overwhelming majority of CS
              education research is conducted at four-year residential
              institutions with very different student populations. My work
              addresses this gap.
            </p>
            <p className="text-[16px] leading-[1.9]">
              The curriculum described on this site — project-based,
              no-exam, three-track, portfolio-assessed — is designed as both a
              proposed teaching framework and a research intervention. Each
              course is a research artifact: once piloted, each is scoped to
              generate data about what works, for whom, and under what
              conditions. The framework is a proposal, not a currently taught
              program.
            </p>
          </div>
        </div>
      </section>

      {/* ======== RESEARCH QUESTIONS ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-16">
            <h2 className="section-label">Research Questions</h2>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              Four interconnected questions about equity, structure, and
              learning in community college CS — each grounded in curriculum
              design practice and connected to a specific proposed
              intervention.
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
                          Methods
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
                          Connection to Practice
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

      {/* ======== METHODOLOGY ======== */}
      <section className="bg-ink text-paper border-b-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red flex items-start gap-2.5 pt-1">
              <span aria-hidden className="text-white/20">{"//  "}</span>Methodology
            </div>
            <p className="text-[15px] leading-[1.85] text-white/55 max-w-[620px]">
              My methodological orientation is mixed-methods with a qualitative
              core. The questions I ask require understanding student experience
              from the inside — not just measuring outcomes at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-white/10">
            {methodologyInterests.map((m) => (
              <div
                key={m.name}
                className="p-7 border-b md:border-r border-white/10 last:border-r-0 [&:nth-child(2n)]:md:border-r-0 [&:nth-child(2n)]:xl:border-r xl:[&:nth-child(4n)]:border-r-0"
              >
                <h4 className="font-serif text-[17px] italic text-paper mb-2.5">
                  {m.name}
                </h4>
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
              I am looking for doctoral programs where curriculum design and
              research are not separate activities — where the work of
              designing equitable computing education is itself a form of
              scholarly inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 border-2 border-ink">
            {targetPrograms.map((prog, idx) => (
              <div
                key={prog.area}
                className={`p-8 lg:p-10 ${idx < targetPrograms.length - 1 ? "border-b-2 lg:border-b-0 lg:border-r-2 border-ink" : ""}`}
              >
                <h3 className="font-display text-[36px] leading-none mb-3 text-ink">
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

      {/* ======== WORKING PAPERS ======== */}
      <section className="bg-cream border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <h2 className="section-label">Working Papers</h2>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              Papers in progress that formalize the research questions and the
              design rationale behind this curriculum framework. These represent
              the foundation of a doctoral research agenda.
            </p>
          </div>

          <div className="space-y-0 border-2 border-ink bg-paper">
            {workingPapers.map((paper, idx) => (
              <div
                key={paper.title}
                className={`p-8 lg:p-10 ${idx < workingPapers.length - 1 ? "border-b-2 border-ink" : ""}`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-[18px] italic leading-[1.3]">
                    {paper.title}
                  </h3>
                  <span className="shrink-0 px-2.5 py-1 bg-gold/10 text-[#8a6500] border border-gold/30 font-mono text-[9px] tracking-[0.12em] uppercase">
                    {paper.status}
                  </span>
                </div>
                <p className="text-[16px] leading-[1.7] text-ink/85">
                  {paper.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== MODELING BENCH FEATURE ======== */}
      <section className="bg-ink text-paper border-b-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-12">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red flex items-start gap-2.5 pt-1">
              <span aria-hidden className="text-white/20">{"//  "}</span>Active Lab
            </div>
            <p className="text-[15px] leading-[1.85] text-white/55 max-w-[680px]">
              Alongside the broader CS-Ed agenda above, I am running a focused
              3-paper publication program with my Applied Linear Algebra
              mentor, Prof. Jeff Anderson at Foothill College. The papers sit
              at the intersection of applied LA, hands-on lab pedagogy, and
              CS education in the age of AI.
            </p>
          </div>

          <div className="border border-white/10 p-8 lg:p-10 bg-white/[0.02]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-8">
              <div>
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-3">
                  3-Paper Research Program · v0.1
                </div>
                <h3 className="font-display text-[clamp(40px,6vw,72px)] leading-[0.9] tracking-[0.02em] text-paper">
                  The Modeling
                  <br />
                  <span className="text-red">Bench</span>
                </h3>
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
                  <h4 className="font-serif italic text-[16px] text-paper leading-[1.3] mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-[14px] leading-[1.65] text-white/85 mb-3">
                    {p.sub}
                  </p>
                  <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-red">
                    → {p.venue}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/35 mt-8">
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

      {/* ======== NAMED RESEARCH PROJECTS ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <h2 className="section-label">Research Projects</h2>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              Five named projects with defined methodologies, tech stacks, and
              target venues. These are publication-oriented research designs,
              each connected to the broader research questions above.
            </p>
          </div>
          <div className="space-y-0 border-2 border-ink">
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
                    <h3 className="font-serif text-[20px] italic leading-[1.35] mb-1">
                      {proj.title}
                    </h3>
                    <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-red mb-4">
                      {proj.subtitle}
                    </p>
                    <p className="text-[16px] leading-[1.7] text-ink/85 mb-4">
                      {proj.description}
                    </p>
                    <div className="border-l-[3px] border-teal bg-teal/5 px-4 py-3 mb-4">
                      <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-dim block mb-1.5">
                        Methodology
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

      {/* ======== THEORETICAL CONSTRUCTS ======== */}
      <section className="bg-ink text-paper border-b-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red flex items-start gap-2.5 pt-1">
              <span aria-hidden className="text-white/20">{"//  "}</span>Theoretical
              Constructs
            </div>
            <p className="text-[15px] leading-[1.85] text-white/55 max-w-[620px]">
              Named constructs that emerge from this research program — each
              defined, operationalized, and connected to measurable outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10">
            {theoreticalConstructs.map((tc, idx) => (
              <div
                key={tc.name}
                className={`p-8 ${idx < theoreticalConstructs.length - 1 ? "border-b md:border-r border-white/10" : ""} ${idx === theoreticalConstructs.length - 2 ? "md:border-b-0" : ""}`}
              >
                <h4 className="font-serif text-[18px] italic text-paper mb-3">
                  {tc.name}
                </h4>
                <p className="text-[15.5px] leading-[1.7] text-white/85 mb-4">
                  {tc.definition}
                </p>
                <div className="border-t border-white/10 pt-3">
                  <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-red block mb-1.5">
                    Operationalization
                  </span>
                  <p className="text-[12px] leading-[1.75] text-white/40">
                    {tc.operationalization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== RESEARCH TIMELINE ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <h2 className="section-label">Research Timeline</h2>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              A phased roadmap from curriculum design and mentee-led research
              through doctoral study.
            </p>
          </div>
          <div className="space-y-0 border-2 border-ink">
            {researchTimeline.map((phase, idx) => (
              <div
                key={phase.phase}
                className={`p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 ${idx < researchTimeline.length - 1 ? "border-b-2 border-ink" : ""}`}
              >
                <div>
                  <span className="font-display text-[28px] leading-none text-ink block mb-1">
                    {phase.phase}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-red">
                    {phase.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {phase.milestones.map((m) => (
                    <li
                      key={m}
                      className="text-[13px] leading-[1.7] pl-4 border-l-2 border-teal"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
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
              &ldquo;The curriculum is connected to ongoing research into
              help-seeking behavior in introductory CS courses, curriculum
              dependency structures, and the experiences of students who leave
              STEM at community colleges.&rdquo;
            </p>
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/80 mt-3.5">
              Research &middot; Practice Connection
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="https://fansofhenry.github.io/cs-ed/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 border border-white/30 font-mono text-[11px] tracking-[0.12em] uppercase text-white hover:bg-white/10 transition-colors no-underline text-center"
            >
              Research Portfolio <span aria-hidden>&rarr;</span>
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

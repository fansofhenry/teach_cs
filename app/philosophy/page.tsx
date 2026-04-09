import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teaching Philosophy — Teaching Computing Differently",
  description:
    "Three pedagogical principles grounded in learning science research: Derive Before Compute, Build Before Import, and Equity as Design.",
};

const principles = [
  {
    num: "01",
    title: "Derive Before Compute",
    subtitle: "Earn the abstraction.",
    body: `Every major concept is introduced through a problem that requires it — before the formal tool is offered. This is Guershon Harel's intellectual need principle: students must experience the inadequacy of what they currently have before a new tool will feel like a solution rather than a fact to memorize. A hash table isn't defined on day one. Students first build a slow lookup system, hit the wall of its inefficiency, and then the hash table arrives as the answer to a question they already have.`,
    inPracticeLabel: "In Practice — CS 210",
    inPractice:
      "Students build a linear-search contacts app in Week 2. With 10,000 entries it's unusably slow. Week 4 introduces hash tables — as the solution to a problem students already own.",
    citation:
      'Harel & Tall (1991) · "The General, the Abstract, and the Generic" · For the Learning of Mathematics',
  },
  {
    num: "02",
    title: "Build Before Import",
    subtitle: "Implement before you use.",
    body: `Students implement every major data structure and algorithm from scratch before using the library version. This is not hazing — it is the difference between knowing that sklearn has a fit() method and understanding what fitting means. Ko's read-before-write research shows that students who trace implementations before writing them develop significantly stronger debugging ability and conceptual transfer. Every abstraction has an interior; students earn the right to ignore it by first understanding it.`,
    inPracticeLabel: "In Practice — CS 185",
    inPractice:
      "Logistic regression is implemented in NumPy before scikit-learn is opened. The final submission includes both versions with a written comparison explaining what the library hides.",
    citation:
      "Ko et al. (2019) · Critically Conscious Computing · University of Washington · cs.washington.edu/ccc",
  },
  {
    num: "03",
    title: "Equity as Design, Not Afterthought",
    subtitle: "Algorithms encode values.",
    body: `The social implications of algorithmic systems are not a lecture added at the end of the semester — they are woven into the technical content from the start. When students build a word frequency analyzer, they ask whose vocabulary the default dictionary centers. When they study PageRank, they ask what gets amplified and what gets buried. This is not politics inserted into CS. It is the recognition that every algorithm encodes the values of the people who built it — and understanding those values is part of understanding the algorithm.`,
    inPracticeLabel: "In Practice — CS 180 & CS 185",
    inPractice:
      "The final project in every AI/ML course is a structured bias audit of a real deployed system — written like a research report and presented at a public exhibition.",
    citation:
      'Buolamwini & Gebru (2018) · "Gender Shades" · ACM FAccT  ·  Noble (2018) · Algorithms of Oppression',
  },
];

const thinkers = [
  {
    name: "Amy J. Ko",
    book: "Critically Conscious Computing · UW",
    desc: "Equitable, joyous computing education. Read-before-write sequencing. Student agency and institutional trust as preconditions for learning.",
    inPractice:
      "Students trace and read existing implementations before writing their own. Build-before-import is directly drawn from Ko's read-before-write research.",
  },
  {
    name: "Jeff Anderson",
    book: "Antiracist Learning Science · Ungrading · Strategic Deep Learning · Foothill College",
    desc: "Jeff's top-level professional goal: use antiracist learning science to help people thrive. He maps every classroom decision back to research in cognitive science, the psychology of learning, and the scholarship of anti-racism. Creator of the ALAF textbook, the Strategic Deep Learning framework, five anti-racist learner-centered objectives, and a pioneering ungrading practice. His conviction: the top 100% of learners deserve the best teaching in the world.",
    inPractice:
      "Portfolio assessment and student-proposed grading are drawn directly from Anderson's ungrading framework. The Abuelita Test is adapted from his communication frameworks. The three-track system honors his principle that learner-centered means the student determines their path. The Build a Computer project's entire assessment structure, reflection design, and cross-STEM bridging philosophy are built on his foundation.",
  },
  {
    name: "Paulo Freire",
    book: "Pedagogy of the Oppressed · 1968",
    desc: "Students are not empty vessels to fill with content. The banking model of education reproduces passivity. Knowledge is a liberatory act when connected to lived experience.",
    inPractice:
      "Every capstone is student-chosen and connected to a real problem in the student's community. Students determine what they build, and for whom.",
  },
  {
    name: "bell hooks",
    book: "Teaching to Transgress · 1994",
    desc: "The classroom as a site of freedom. Bringing the full self to learning. The instructor's vulnerability and intellectual engagement as pedagogical tools.",
    inPractice:
      "Reflective writing is required alongside every project. Students write about struggle, confusion, and discovery — not just what they built.",
  },
  {
    name: "Joy Buolamwini",
    book: "Gender Shades · MIT Media Lab",
    desc: "The coded gaze. Facial recognition systems that fail disproportionately on darker-skinned women. Bias is not accidental — it is the product of who is in the room when systems are built.",
    inPractice:
      "The Bias Audit project in CS 180 and CS 185 is directly modeled on the Gender Shades methodology, adapted for undergraduates with no prior research training.",
  },
  {
    name: "Safiya Umoja Noble",
    book: "Algorithms of Oppression · 2018",
    desc: "Search engines encode power. Information retrieval systems reflect and amplify the values of the people and institutions that build and fund them.",
    inPractice:
      "The Build PageRank project ends with a structured analysis of how the algorithm's design choices determine whose content surfaces and whose is buried.",
  },
  {
    name: "Ruha Benjamin",
    book: "Race After Technology · 2019",
    desc: "The New Jim Code: technological systems that discriminate while claiming objectivity, making discrimination harder to name and challenge.",
    inPractice:
      "Benjamin's framework is the theoretical grounding for CS 185: every algorithm is a choice about what to optimize, and that choice has a politics.",
  },
  {
    name: "Donald Knuth",
    book: "The Art of Computer Programming",
    desc: "Algorithms are art. Rigor and beauty are not opposites. The deep analysis of even simple algorithms reveals structure that cannot be seen from the surface.",
    inPractice:
      "CS 210's emphasis on implementing before using, and on understanding the full analysis of even simple structures, is a direct inheritance from Knuth.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      {/* ======== HERO ======== */}
      <header className="bg-ink text-paper border-b-[5px] border-red">
        <div className="border-b border-white/10 px-7 lg:px-[60px] py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/50 flex justify-between">
          <span>Teaching Philosophy</span>
          <span>Pedagogical Framework</span>
        </div>
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 lg:py-20">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-5 animate-fade-up-1">
            How These Courses Are Built
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[0.02em] mb-7 animate-fade-up-2">
            Teaching
            <br />
            <span className="text-red">Philosophy</span>
          </h1>
          <p className="text-[15px] leading-[1.9] text-white/60 font-light max-w-[620px] animate-fade-up-3">
            Three pedagogical principles run through every course in this
            curriculum. They are not buzzwords — each one is a concrete design
            decision that shows up in how units are sequenced, how projects are
            scoped, and how student work is assessed. Each principle traces to a
            specific body of learning science research.
          </p>
        </div>
      </header>

      {/* ======== THE PROBLEM ======== */}
      <section className="bg-cream border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20">
          <div className="section-label">
            The Problem This Curriculum Addresses
          </div>
          <div className="space-y-5">
            <p className="text-[16px] leading-[1.9]">
              Most introductory CS courses follow the same pattern: explain a
              concept, demonstrate syntax, assign practice problems, assess on
              recall. Students who arrive with prior exposure tend to succeed.
              Students who don&rsquo;t fall behind quickly and conclude they are{" "}
              <em className="font-serif italic text-[17px]">
                not a CS person.
              </em>{" "}
              The course then calls this selection, when in fact it is structure.
            </p>
            <p className="text-[16px] leading-[1.9]">
              This failure is especially concentrated at community colleges,
              where students arrive with more diverse prior experience, more
              financial and time constraints, and less inherited access to the
              social capital that makes traditional CS culture feel familiar. The
              typical response — remediation, prerequisite chains, stricter
              placement — treats the wrong variable.
            </p>
            <p className="text-[16px] leading-[1.9]">
              This curriculum takes a different position:{" "}
              <strong className="font-medium">
                the difficulty students experience in introductory CS is not
                uniformly about ability.
              </strong>{" "}
              Most of it is caused by courses that teach abstractions before
              problems, syntax before meaning, and efficiency before
              understanding. The fix is not remediation. It is a different kind
              of course — one that begins with a problem the student wants to
              solve, introduces tools only when they&rsquo;re needed, and
              assesses understanding through what students build rather than what
              they recall.
            </p>
          </div>
        </div>
      </section>

      {/* ======== THREE PRINCIPLES ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-16">
            <div className="section-label">Three Core Principles</div>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              Each principle is a concrete design decision that shows up in how
              units are sequenced, how projects are scoped, and how student work
              is assessed. Each traces to a specific body of learning science
              research.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 border-2 border-ink">
            {principles.map((p) => (
              <div
                key={p.num}
                className="border-b-2 lg:border-b-0 lg:border-r-2 border-ink last:border-b-0 last:border-r-0 p-8 lg:p-10"
              >
                <span className="font-display text-[80px] leading-[0.85] text-cream block mb-6">
                  {p.num}
                </span>
                <h3 className="font-serif text-[24px] italic leading-[1.2] mb-4">
                  {p.title}
                </h3>
                <p className="text-[13.5px] leading-[1.85] text-dim mb-5">
                  {p.body}
                </p>
                <div className="border-l-[3px] border-red bg-red/5 px-4 py-3.5 mb-3.5">
                  <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-dim block mb-1.5">
                    {p.inPracticeLabel}
                  </span>
                  <p className="font-mono text-[11px] leading-[1.7] text-red">
                    {p.inPractice}
                  </p>
                </div>
                <p className="font-mono text-[10px] text-dim/60 leading-[1.6] border-t border-cream pt-2.5 mt-3.5">
                  {p.citation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== PULL QUOTE ======== */}
      <div className="bg-red text-white px-7 lg:px-[60px] py-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
        <div>
          <p className="font-serif text-[clamp(22px,2.8vw,34px)] italic leading-[1.35] max-w-[760px]">
            &ldquo;The most advanced technical skill in these courses is
            understanding who built a system, for whom, and what it encodes
            about the world.&rdquo;
          </p>
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/60 mt-3.5">
            Course Philosophy · Rooted in Freire, hooks, Ko, Anderson
          </p>
        </div>
        <div className="flex flex-row lg:flex-col gap-5 lg:gap-4 shrink-0">
          {[
            { n: "0", label: "Required Textbooks" },
            { n: "0", label: "Exams" },
            { n: "3", label: "Tracks per Course" },
          ].map((s) => (
            <div key={s.label} className="text-right">
              <div className="font-display text-[48px] leading-none">
                {s.n}
              </div>
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======== RESEARCH ROOTS / THINKERS ======== */}
      <section className="border-t-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-dim flex items-start gap-2.5 pt-1">
              <span className="text-cream">{"//  "}</span>Research Roots
            </div>
            <p className="text-[14px] leading-[1.85] text-dim max-w-[620px]">
              These courses are not built on personal teaching preference. Each
              design decision traces to a body of research or a theoretical
              framework. The thinkers below are not name-dropped — their ideas
              show up in specific assignments, assessment structures, and
              sequencing decisions across every course in this curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {thinkers.map((t) => (
              <div
                key={t.name}
                className="p-5 lg:p-7 border-t border-r border-cream last:border-r-0 [&:nth-child(4n)]:border-r-0 [&:nth-child(2n)]:md:border-r-0 [&:nth-child(2n)]:xl:border-r xl:[&:nth-child(4n)]:border-r-0 border-b border-cream"
              >
                <h4 className="font-serif text-[16px] mb-1">{t.name}</h4>
                <p className="font-mono text-[9.5px] tracking-[0.06em] text-red italic mb-2.5">
                  {t.book}
                </p>
                <p className="text-[11.5px] leading-[1.65] text-dim mb-2.5">
                  {t.desc}
                </p>
                <div className="border-l-2 border-cream bg-black/[0.02] px-2.5 py-2">
                  <strong className="block font-mono text-[8.5px] tracking-[0.14em] uppercase text-dim mb-1 font-normal">
                    In These Courses
                  </strong>
                  <p className="font-mono text-[10px] tracking-[0.04em] text-ink leading-[1.6]">
                    {t.inPractice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="bg-ink text-paper border-t-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-red mb-4">
            Continue Exploring
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] leading-none mb-6">
            See How It All Connects
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/paths"
              className="inline-block px-6 py-3 border border-white/15 font-mono text-[11px] tracking-[0.12em] uppercase text-white/50 hover:text-paper hover:border-white/30 transition-colors no-underline"
            >
              Learning Paths &rarr;
            </Link>
            <Link
              href="/research"
              className="inline-block px-6 py-3 border border-white/15 font-mono text-[11px] tracking-[0.12em] uppercase text-white/50 hover:text-paper hover:border-white/30 transition-colors no-underline"
            >
              Research Agenda &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

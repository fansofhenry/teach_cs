import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Henry Fan — community college CS education researcher and curriculum designer, mentee of Prof. Jeff Anderson (Foothill College), and Application Support Analyst at CVC-OEI supporting cross-enrollment infrastructure for 115+ California community colleges.",
};

export default function AboutPage() {
  return (
    <>
      {/* ======== HERO ======== */}
      <header className="bg-ink text-paper border-b-[5px] border-red">
        <div className="border-b border-white/10 px-7 lg:px-[60px] py-3 font-mono text-[10px] tracking-[0.14em] uppercase text-white/70 flex justify-between">
          <span>About</span>
          <span>Henry Fan &middot; CS Education Research</span>
        </div>
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 lg:py-20">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-5 animate-fade-up-1">
            About This Curriculum
          </div>
          <h1 className="font-display text-[clamp(48px,8vw,100px)] leading-[0.88] tracking-[0.02em] mb-7 animate-fade-up-2">
            About
            <br />
            <span className="text-red">Henry Fan</span>
          </h1>
          <p className="text-[17px] leading-[1.7] text-white/90 max-w-[680px] animate-fade-up-3">
            Community college CS education researcher and curriculum designer.
            Mentee of Prof. Jeff Anderson (Foothill College). Application
            Support Analyst at CVC-OEI supporting cross-enrollment
            infrastructure for 115+ California community colleges.
          </p>
        </div>
      </header>

      {/* ======== ABOUT SECTION ======== */}
      <section className="bg-cream border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20">
          <div className="section-label">About This Curriculum</div>
          <div>
            <div className="space-y-[18px]">
              <p className="text-[16.5px] leading-[1.7]">
                This curriculum is designed by Henry Fan — a community college
                CS education researcher, curriculum designer, and mentee of
                Prof. Jeff Anderson (Foothill College). Henry works by day as
                Application Support Analyst at CVC-OEI / Foothill–De Anza CCD,
                supporting cross-enrollment infrastructure for 115+ California
                community colleges. The courses on this site represent a
                multi-year design project to redesign introductory CS at the
                community college level — building courses that are
                technically rigorous, project-driven, and designed from the
                start to serve students who have historically been pushed out
                of CS. The framework is a proposal, not a currently taught
                program: every design decision is open for remix.
              </p>
              <p className="text-[16.5px] leading-[1.7]">
                The pedagogical foundation of this work is built on the
                mentorship and teaching philosophy of{" "}
                <strong className="font-medium">Jeff Anderson</strong> (Foothill
                College), whose commitment to antiracist learning science,
                ungrading, and the principle that every classroom decision should
                map back to research in cognitive science has shaped how every
                course on this site is designed, assessed, and taught. His{" "}
                <a
                  href="https://jeffandersonmath.wordpress.com/2024/10/28/five-anti-racist-research-based-learner-centered-learning-objectives-for-college-students-updated/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red no-underline border-b border-red/30 hover:border-red transition-colors"
                >
                  five anti-racist, research-based, learner-centered learning
                  objectives
                </a>{" "}
                are the invisible architecture of this entire curriculum.
              </p>
              <p className="text-[16.5px] leading-[1.7]">
                The curriculum is connected to ongoing research into
                help-seeking behavior in introductory CS courses, curriculum
                dependency structures, and the experiences of students who leave
                STEM at community colleges. That work lives at the{" "}
                <a
                  href="https://fansofhenry.github.io/cs-ed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red no-underline border-b border-red/30 hover:border-red transition-colors"
                >
                  CS Education Research Portfolio &rarr;
                </a>
              </p>
              <p className="text-[16.5px] leading-[1.7]">
                All course materials are free and open access. Instructors who
                want to adapt any of these courses for their own institutions
                are encouraged to do so. For questions, collaboration, or to
                share what you build with these materials, reach out directly.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-7">
              {[
                {
                  label: "Research Portfolio",
                  href: "https://fansofhenry.github.io/cs-ed/",
                },
                {
                  label: "Jeff Anderson Math",
                  href: "https://jeffandersonmath.wordpress.com/",
                },
                {
                  label: "henry@henryfan.org",
                  href: "mailto:henry@henryfan.org",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/fansofhenry/teach_cs",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="font-mono text-[11px] tracking-[0.1em] uppercase text-red no-underline border-b border-red/30 pb-0.5 hover:border-red transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== TEACHING MISSION ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <div className="section-label">Teaching Mission</div>
            <p className="text-[15px] leading-[1.85] text-dim max-w-[620px]">
              A teaching statement grounded in practice, research, and the
              conviction that every student deserves technically rigorous
              education designed for their success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 border-2 border-ink">
            <div className="p-8 lg:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-ink">
              <span className="font-display text-[80px] leading-[0.85] text-cream block mb-6">
                01
              </span>
              <h3 className="font-serif text-[22px] italic leading-[1.2] mb-4">
                Every Student Can Compute
              </h3>
              <p className="text-[16px] leading-[1.7] text-ink/85">
                The difficulty students experience in introductory CS is not
                uniformly about ability. Most of it is caused by courses that
                teach abstractions before problems, syntax before meaning, and
                efficiency before understanding. When the structure changes, who
                succeeds changes with it.
              </p>
            </div>
            <div className="p-8 lg:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-ink">
              <span className="font-display text-[80px] leading-[0.85] text-cream block mb-6">
                02
              </span>
              <h3 className="font-serif text-[22px] italic leading-[1.2] mb-4">
                Building Is Understanding
              </h3>
              <p className="text-[16px] leading-[1.7] text-ink/85">
                Students learn CS best when they build real things, earn
                abstractions through struggle, and understand that every
                algorithm encodes a set of values about the world. The capstone
                is not a test — it is a public exhibition of work the student is
                proud to show.
              </p>
            </div>
            <div className="p-8 lg:p-10">
              <span className="font-display text-[80px] leading-[0.85] text-cream block mb-6">
                03
              </span>
              <h3 className="font-serif text-[22px] italic leading-[1.2] mb-4">
                Research Informs Practice
              </h3>
              <p className="text-[16px] leading-[1.7] text-ink/85">
                Every classroom decision maps back to research in cognitive
                science, the psychology of learning, and the scholarship of
                equity. Teaching is not a solo craft practice — it is a
                discipline that improves when grounded in evidence and
                accountable to the students it serves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======== MENTOR ACKNOWLEDGMENT ======== */}
      <section className="bg-red text-white px-7 lg:px-[60px] py-14">
        <div className="max-w-[1300px] mx-auto">
          <p className="font-serif text-[clamp(20px,2.5vw,30px)] italic leading-[1.4] max-w-[760px]">
            &ldquo;The top 100% of learners deserve the best teaching in the
            world.&rdquo;
          </p>
          <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/80 mt-3.5">
            Jeff Anderson &middot; Foothill College &middot; Mentor &amp;
            Collaborator
          </p>
          <p className="text-[14px] leading-[1.85] text-white/70 mt-5 max-w-[640px]">
            Jeff Anderson&rsquo;s commitment to antiracist learning science,
            ungrading, and the Strategic Deep Learning framework is the
            foundation on which every course on this site is built. His five
            anti-racist, research-based, learner-centered learning objectives
            are the invisible architecture of this entire curriculum.
          </p>
          <a
            href="https://jeffandersonmath.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-5 py-2.5 border border-white/30 font-mono text-[11px] tracking-[0.12em] uppercase text-white hover:bg-white/10 transition-colors no-underline"
          >
            Jeff Anderson Math &rarr;
          </a>
        </div>
      </section>

      {/* ======== KEY NUMBERS ======== */}
      <section className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-ink">
            {[
              { num: "6", label: "Courses Designed" },
              { num: "0", label: "Required Textbooks" },
              { num: "0", label: "Exams" },
              { num: "3", label: "Tracks per Course" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-7 lg:p-10 text-center border-b md:border-b-0 md:border-r border-ink last:border-r-0 [&:nth-child(2n)]:border-r-0 [&:nth-child(2n)]:md:border-r md:[&:nth-child(4n)]:border-r-0"
              >
                <div className="font-display text-[64px] lg:text-[80px] leading-none text-ink">
                  {stat.num}
                </div>
                <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-dim mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CORE CONVICTIONS ======== */}
      <section className="bg-ink text-paper border-b-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-20 mb-14">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red flex items-start gap-2.5 pt-1">
              <span className="text-white/20">{"//  "}</span>Core Convictions
            </div>
            <p className="text-[15px] leading-[1.85] text-white/55 max-w-[620px]">
              The principles that drive this work, expressed as design decisions
              that show up in every course.
            </p>
          </div>

          <div className="space-y-0 border border-white/10">
            {[
              {
                label: "No Required Textbooks",
                detail:
                  "All course materials are free and open access. Textbook cost should never be a barrier to learning computing.",
              },
              {
                label: "No Exams",
                detail:
                  "Assessment is portfolio-based. Students present their work at public exhibitions and propose their own grades with evidence.",
              },
              {
                label: "3 Entry Tracks per Course",
                detail:
                  "Tracks are depth choices, not ability groups. Track I requires no prior programming. Tracks are chosen weekly, not at semester start.",
              },
              {
                label: "Portfolio Assessment",
                detail:
                  "Students demonstrate understanding through what they build, not what they recall. Every course ends with a public exhibition, not a final exam.",
              },
              {
                label: "All Resources Free",
                detail:
                  "Open access is not a feature — it is a requirement. Community college students should not pay for the privilege of learning to code.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-b border-white/[0.08] last:border-b-0 px-6 lg:px-8 py-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-8"
              >
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-red shrink-0 w-48">
                  {item.label}
                </span>
                <p className="text-[13.5px] leading-[1.8] text-white/45">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CONNECT ======== */}
      <section className="bg-cream border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-[60px] py-16 text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-red mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] leading-none mb-4">
            Let&rsquo;s Connect
          </h2>
          <p className="text-[15px] leading-[1.85] text-dim max-w-[520px] mx-auto mb-8">
            For questions, collaboration, or to share what you build with these
            materials, reach out directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:henry@henryfan.org"
              className="inline-block px-6 py-3 bg-ink text-paper font-mono text-[11px] tracking-[0.12em] uppercase hover:bg-ink/80 transition-colors no-underline"
            >
              henry@henryfan.org
            </a>
            <a
              href="https://github.com/fansofhenry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-ink text-ink font-mono text-[11px] tracking-[0.12em] uppercase hover:bg-ink hover:text-paper transition-colors no-underline"
            >
              GitHub &rarr;
            </a>
            <Link
              href="/research"
              className="inline-block px-6 py-3 border-2 border-ink text-ink font-mono text-[11px] tracking-[0.12em] uppercase hover:bg-ink hover:text-paper transition-colors no-underline"
            >
              Research &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

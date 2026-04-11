import Link from 'next/link';
import {
  currentFocus,
  currentlyReading,
  getLatestLogEntry,
  getRecentLog,
} from '@/lib/data/log';
import { researchProjects } from '@/lib/data/research';

/* ============================================================
   DATA — TODO: Move to @/lib/data/courses when that module exists
   ============================================================ */

const philosophyCards = [
  {
    num: '01',
    title: 'Derive Before Compute',
    body: 'Every major concept is introduced through a problem that requires it \u2014 before the formal tool is offered. This is Guershon Harel\u2019s intellectual need principle: students must experience the inadequacy of what they currently have before a new tool will feel like a solution rather than a fact to memorize. A hash table isn\u2019t defined on day one. Students first build a slow lookup system, hit the wall of its inefficiency, and then the hash table arrives as the answer to a question they already have.',
    exampleLabel: 'In Practice \u2014 CS 210',
    example: 'Students build a linear-search contacts app in Week 2. With 10,000 entries it\u2019s unusably slow. Week 4 introduces hash tables \u2014 as the solution to a problem students already own.',
    citation: 'Harel & Tall (1991) \u00B7 \u201CThe General, the Abstract, and the Generic\u201D \u00B7 For the Learning of Mathematics',
  },
  {
    num: '02',
    title: 'Build Before Import',
    body: 'Students implement every major data structure and algorithm from scratch before using the library version. This is not hazing \u2014 it is the difference between knowing that sklearn has a fit() method and understanding what fitting means. Ko\u2019s read-before-write research shows that students who trace implementations before writing them develop significantly stronger debugging ability and conceptual transfer. Every abstraction has an interior; students earn the right to ignore it by first understanding it.',
    exampleLabel: 'In Practice \u2014 CS 185',
    example: 'Logistic regression is implemented in NumPy before scikit-learn is opened. The final submission includes both versions with a written comparison explaining what the library hides.',
    citation: 'Ko et al. (2019) \u00B7 Critically Conscious Computing \u00B7 University of Washington \u00B7 cs.washington.edu/ccc',
  },
  {
    num: '03',
    title: 'Equity as Design, Not Afterthought',
    body: 'The social implications of algorithmic systems are not a lecture added at the end of the semester \u2014 they are woven into the technical content from the start. When students build a word frequency analyzer, they ask whose vocabulary the default dictionary centers. When they study PageRank, they ask what gets amplified and what gets buried. This is not politics inserted into CS. It is the recognition that every algorithm encodes the values of the people who built it \u2014 and understanding those values is part of understanding the algorithm.',
    exampleLabel: 'In Practice \u2014 CS 180 & CS 185',
    example: 'The final project in every AI/ML course is a structured bias audit of a real deployed system \u2014 written like a research report and presented at a public exhibition.',
    citation: 'Buolamwini & Gebru (2018) \u00B7 \u201CGender Shades\u201D \u00B7 ACM FAccT  \u00B7  Noble (2018) \u00B7 Algorithms of Oppression',
  },
];

interface CourseData {
  id: string;
  num: string;
  prefix: string;
  ghost: string;
  title: string;
  status: 'taught' | 'dev' | 'proposed';
  statusLabel: string;
  desc: string;
  meta: { label: string; value: string }[];
  href: string;
  accent?: string;
  topBg?: string;
  titleColor?: string;
  ctaColor?: string;
  idx: number;
}

const courses: CourseData[] = [
  {
    id: 'c180',
    prefix: 'CS',
    num: '180',
    ghost: 'AI',
    title: 'Introduction to\nArtificial Intelligence',
    status: 'taught',
    statusLabel: 'Currently Taught',
    desc: 'AI is not magic \u2014 it is math, history, and human choice. We build from first principles: probability, search, neural networks, language models. Then we ask who built these systems, for whom, and what they\u2019re encoding about the world.',
    meta: [
      { label: 'Units', value: '3 \u00B7 18 Weeks' },
      { label: 'Prereq', value: 'None (Track I) \u00B7 Python (Track II+)' },
      { label: 'Projects', value: '9 Major \u00B7 2 Exhibitions' },
      { label: 'Thinkers', value: 'Turing \u00B7 Buolamwini \u00B7 Noble' },
    ],
    href: '/courses/cs180-intro-ai',
    accent: '#c1121f',
    idx: 1,
  },
  {
    id: 'c185',
    prefix: 'CS',
    num: '185',
    ghost: 'ML',
    title: 'Introduction to\nMachine Learning',
    status: 'dev',
    statusLabel: 'In Development',
    desc: 'ML algorithms are not neutral mathematical facts \u2014 they are choices about what to optimize, whose data counts, who bears the error. We derive every algorithm before using it, implement from scratch before touching any library.',
    meta: [
      { label: 'Units', value: '3 \u00B7 18 Weeks' },
      { label: 'Prereq', value: 'Basic Python \u00B7 Some Math' },
      { label: 'Projects', value: '8 Major \u00B7 Bias Audits' },
      { label: 'Thinkers', value: 'Ko \u00B7 Benjamin \u00B7 Obermeyer' },
    ],
    href: '/courses/cs185-intro-ml',
    accent: '#4dd9f0',
    topBg: '#060b14',
    titleColor: 'rgba(200,235,255,0.7)',
    ctaColor: '#4dd9f0',
    idx: 2,
  },
  {
    id: 'c210',
    prefix: 'CS',
    num: '210',
    ghost: 'DS',
    title: 'Data Structures\n& Algorithms',
    status: 'taught',
    statusLabel: 'Currently Taught',
    desc: 'Every data structure is an argument about the world. Every algorithm is a strategy, a tradeoff, a value judgment. We implement every structure before using the library version. No LeetCode grind culture \u2014 deep projects that transfer.',
    meta: [
      { label: 'Units', value: '4 \u00B7 18 Weeks' },
      { label: 'Prereq', value: 'Python or Java \u00B7 OOP' },
      { label: 'Projects', value: '12 Mini Projects \u00B7 Capstone' },
      { label: 'Thinkers', value: 'Knuth \u00B7 Dijkstra \u00B7 Noble \u00B7 Tarjan' },
    ],
    href: '/courses/cs210-dsa',
    accent: '#e36414',
    topBg: '#1a1205',
    titleColor: 'rgba(250,246,240,0.7)',
    ctaColor: '#e36414',
    idx: 3,
  },
  {
    id: 'c175',
    prefix: 'CS',
    num: '175',
    ghost: 'HTW',
    title: 'How Things\nWork',
    status: 'dev',
    statusLabel: 'In Development',
    desc: 'PageRank. GPS. The phone in your pocket. Three technologies derived from first principles. You\u2019ll understand why they work \u2014 not just that they work. Includes the signature project: Build a Computer from Scratch \u2014 a 20-week team build of an 8-bit breadboard computer bridging five STEM disciplines.',
    meta: [
      { label: 'Units', value: '3 Systems \u00B7 First Principles' },
      { label: 'Prereq', value: 'Basic Math \u00B7 No Calculus Required' },
      { label: 'Projects', value: 'Build PageRank \u00B7 GPS Simulator \u00B7 Build a Computer' },
    ],
    href: '/courses/how-things-work',
    accent: '#00d4ff',
    topBg: '#020c14',
    titleColor: 'rgba(210,240,255,0.7)',
    ctaColor: '#00d4ff',
    idx: 4,
  },
  {
    id: 'cm2b',
    prefix: 'Math',
    num: '2B',
    ghost: 'LA',
    title: 'Applied Linear\nAlgebra',
    status: 'taught',
    statusLabel: 'Currently Taught',
    desc: 'Six fundamental problems. Twenty-nine lessons. Build circuits, collect data, verify models. Derive before compute \u2014 the ALAF approach. Math made useful the moment it\u2019s introduced.',
    meta: [
      { label: 'Units', value: '3 \u00B7 29 Lessons \u00B7 ELSP Project' },
      { label: 'Prereq', value: 'Pre-calculus or Calculus' },
      { label: 'Textbook', value: 'ALAF \u00B7 appliedlinearalgebra.com' },
    ],
    href: '/courses/math2b-linear-algebra',
    accent: '#8b7cf8',
    topBg: '#0b0b14',
    titleColor: 'rgba(220,218,240,0.7)',
    ctaColor: '#8b7cf8',
    idx: 5,
  },
  {
    id: 'ce11',
    prefix: 'ENGR',
    num: '11',
    ghost: 'M\u2016',
    title: 'Programming &\nProblem Solving',
    status: 'taught',
    statusLabel: 'Currently Taught',
    desc: 'Model real circuits. Understand why 0.1 + 0.2 \u2260 0.3. MATLAB the way engineers use it \u2014 from binary representation up to IEEE 754 floating-point. No prior programming required.',
    meta: [
      { label: 'Units', value: '3 \u00B7 18 Lessons \u00B7 ELSP Project' },
      { label: 'Prereq', value: 'No Programming Required' },
      { label: 'Skills', value: 'MATLAB \u00B7 Numerical Analysis \u00B7 IEEE 754' },
    ],
    href: '/courses/engr11-matlab',
    accent: '#a8ff3e',
    topBg: '#060a06',
    titleColor: 'rgba(220,240,210,0.7)',
    ctaColor: '#a8ff3e',
    idx: 6,
  },
];

const tracks = [
  {
    roman: 'I',
    opacityClass: 'text-white/20',
    name: 'Novice \u2014 Build & Understand',
    body: 'Students develop genuine working fluency with the core concept. They build a complete, functional implementation and can explain what it does and why. No prior experience required at Track I \u2014 by design.',
    examples: [
      'CS 180: Build a rule-based chatbot; document its failure modes',
      'CS 210: Implement a linked list from scratch; analyze insertion cost',
    ],
  },
  {
    roman: 'II',
    opacityClass: 'text-white/50',
    name: 'Builder \u2014 Implement & Extend',
    body: 'Students implement the concept rigorously, handle edge cases, and extend it to a novel context. They move between their own implementation and a library version and explain the tradeoffs in writing.',
    examples: [
      'CS 185: Implement logistic regression in NumPy; compare to sklearn',
      'CS 210: Implement a self-balancing BST; profile on large datasets',
    ],
  },
  {
    roman: 'III',
    opacityClass: 'text-paper',
    name: 'Architect \u2014 Prove & Research',
    body: 'Students engage with the formal mathematical structure of the concept, read related research, and contribute something original \u2014 a proof, an optimization, a novel application, or a written critical analysis.',
    examples: [
      'CS 185: Derive the gradient update rule; prove convergence bound',
      'CS 180: Read and summarize a primary research paper; connect to project',
    ],
  },
];

const projects = [
  {
    tag: 'CS 210 \u00B7 Data Structures',
    title: 'The Contacts Problem',
    body: 'Students build a functional contacts application \u2014 adding, searching, sorting \u2014 starting with a flat list. As the dataset grows, they measure slowdown empirically, identify the bottleneck, and redesign. The project runs four weeks, and students implement and profile at least three structural approaches before semester end.',
    learns: 'Time complexity as felt experience, not formula \u00B7 Hash tables as motivated solutions \u00B7 Profiling and empirical analysis \u00B7 The cost of early design decisions',
  },
  {
    tag: 'CS 185 \u00B7 Machine Learning',
    title: 'Derive Before Deploy',
    body: 'Students implement linear regression, logistic regression, and a single-layer neural network entirely in NumPy \u2014 no sklearn allowed until the implementation is complete. The final submission includes both versions plus a written explanation of what the library conceals and why that matters.',
    learns: 'Gradient descent as a mechanical process \u00B7 What \u201Cfitting\u201D actually means \u00B7 Reading library source code \u00B7 The professional risk of tools you don\u2019t understand',
  },
  {
    tag: 'CS 180 / CS 185 \u00B7 AI & ML',
    title: 'The Bias Audit',
    body: 'Students choose a real, deployed AI product \u2014 a hiring tool, content moderator, facial recognition API, or recommendation system \u2014 design a structured test protocol, run it, measure performance across demographic groups, and produce a findings report structured like a research paper. Directly adapted from Buolamwini\u2019s Gender Shades methodology.',
    learns: 'Experimental design \u00B7 Bias as a measurable quantity \u00B7 Technical writing for non-technical audiences \u00B7 That \u201Cneutral\u201D systems make choices',
  },
  {
    tag: 'CS 175 \u00B7 How Things Work',
    title: 'Build PageRank',
    body: 'Students derive the PageRank algorithm from the random surfer model, implement it on a graph of their own construction, then run it on a real web crawl. They modify the damping factor and adjacency structure and observe how rankings change \u2014 which leads directly to the question of who decides what matters on the internet.',
    learns: 'Markov chains and stationary distributions \u00B7 Matrix multiplication as a meaningful operation \u00B7 Power and amplification in information systems \u00B7 How search encodes value judgments',
  },
  {
    tag: 'All Courses',
    title: 'The Abuelita Test',
    body: 'Every capstone project must include a written explanation addressed to a non-technical family member: what does your program do, what problem does it solve, and why should someone care? If you cannot explain it to someone who doesn\u2019t speak code, you don\u2019t fully understand it yet. Communication is assessed alongside the code itself.',
    learns: 'Technical communication as a skill, not an add-on \u00B7 The gap between knowing and explaining \u00B7 Audience-aware writing \u00B7 Why documentation matters in professional software',
  },
  {
    tag: 'All Courses \u00B7 End of Semester',
    title: 'Public Exhibition',
    body: 'Every course ends with a public exhibition, not a final exam. Students present their portfolio of work to an audience of peers, instructors, and community members. Students write a self-evaluation against the course learning goals and propose their final grade with evidence from their portfolio.',
    learns: 'Portfolio thinking and self-assessment \u00B7 Public communication of technical work \u00B7 Ownership of learning outcomes \u00B7 That the work they built is worth showing',
  },
];

const thinkers = [
  {
    name: 'Amy J. Ko',
    book: 'Critically Conscious Computing \u00B7 UW',
    desc: 'Equitable, joyous computing education. Read-before-write sequencing. Student agency and institutional trust as preconditions for learning.',
    inPractice: 'Students trace and read existing implementations before writing their own. Build-before-import is directly drawn from Ko\u2019s read-before-write research.',
  },
  {
    name: 'Jeff Anderson',
    book: 'Antiracist Learning Science \u00B7 Ungrading \u00B7 Strategic Deep Learning \u00B7 Foothill College',
    desc: 'Jeff\u2019s top-level professional goal: use antiracist learning science to help people thrive. He maps every classroom decision back to research in cognitive science, the psychology of learning, and the scholarship of anti-racism. Creator of the ALAF textbook, the Strategic Deep Learning framework, five anti-racist learner-centered objectives, and a pioneering ungrading practice.',
    inPractice: 'Portfolio assessment and student-proposed grading are drawn directly from Anderson\u2019s ungrading framework. The Abuelita Test is adapted from his communication frameworks. The three-track system honors his principle that learner-centered means the student determines their path.',
  },
  {
    name: 'Paulo Freire',
    book: 'Pedagogy of the Oppressed \u00B7 1968',
    desc: 'Students are not empty vessels to fill with content. The banking model of education reproduces passivity. Knowledge is a liberatory act when connected to lived experience.',
    inPractice: 'Every capstone is student-chosen and connected to a real problem in the student\u2019s community. Students determine what they build, and for whom.',
  },
  {
    name: 'bell hooks',
    book: 'Teaching to Transgress \u00B7 1994',
    desc: 'The classroom as a site of freedom. Bringing the full self to learning. The instructor\u2019s vulnerability and intellectual engagement as pedagogical tools.',
    inPractice: 'Reflective writing is required alongside every project. Students write about struggle, confusion, and discovery \u2014 not just what they built.',
  },
  {
    name: 'Joy Buolamwini',
    book: 'Gender Shades \u00B7 MIT Media Lab',
    desc: 'The coded gaze. Facial recognition systems that fail disproportionately on darker-skinned women. Bias is not accidental \u2014 it is the product of who is in the room when systems are built.',
    inPractice: 'The Bias Audit project in CS 180 and CS 185 is directly modeled on the Gender Shades methodology, adapted for undergraduates with no prior research training.',
  },
  {
    name: 'Safiya Umoja Noble',
    book: 'Algorithms of Oppression \u00B7 2018',
    desc: 'Search engines encode power. Information retrieval systems reflect and amplify the values of the people and institutions that build and fund them.',
    inPractice: 'The Build PageRank project ends with a structured analysis of how the algorithm\u2019s design choices determine whose content surfaces and whose is buried.',
  },
  {
    name: 'Ruha Benjamin',
    book: 'Race After Technology \u00B7 2019',
    desc: 'The New Jim Code: technological systems that discriminate while claiming objectivity, making discrimination harder to name and challenge.',
    inPractice: 'Benjamin\u2019s framework is the theoretical grounding for CS 185: every algorithm is a choice about what to optimize, and that choice has a politics.',
  },
  {
    name: 'Donald Knuth',
    book: 'The Art of Computer Programming',
    desc: 'Algorithms are art. Rigor and beauty are not opposites. The deep analysis of even simple algorithms reveals structure that cannot be seen from the surface.',
    inPractice: 'CS 210\u2019s emphasis on implementing before using, and on understanding the full analysis of even simple structures, is a direct inheritance from Knuth.',
  },
];

/* ============================================================
   PAGE
   ============================================================ */

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Teaching Computing Differently',
  url: 'https://fansofhenry.github.io/teach_cs',
  description:
    "A project-based, equity-centered CS curriculum for community college students. No exams. No required textbooks. Every concept earned through building.",
  sameAs: [
    'https://github.com/fansofhenry/teach_cs',
    'https://fansofhenry.github.io/cs-ed/',
  ],
  founder: {
    '@type': 'Person',
    name: 'Henry Fan',
    email: 'henry@henryfan.org',
    url: 'https://github.com/fansofhenry',
  },
};

function formatNowDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: 'short',
    day: 'numeric',
  });
}

export default function Home() {
  const latest = getLatestLogEntry();
  const recent = getRecentLog(2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* ====== "NOW" STATUS BAR ====== */}
      {latest && (
        <Link
          href="/log"
          className="block bg-red text-white no-underline hover:bg-red/90 transition-colors"
        >
          <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-3 flex items-center gap-4 text-[13px] font-mono tracking-[0.02em]">
            <span className="uppercase tracking-[0.16em] opacity-90 shrink-0 text-[12px]">
              Now &middot; {formatNowDate(latest.date)}
            </span>
            <span className="opacity-70 shrink-0">&rarr;</span>
            <span className="truncate">{latest.title}</span>
            <span className="ml-auto hidden sm:inline opacity-90 uppercase tracking-[0.14em] shrink-0 text-[11px]">
              View log
            </span>
          </div>
        </Link>
      )}

      {/* ====== UNIFIED HERO ====== */}
      <header className="bg-ink text-paper border-b-[5px] border-red">
        {/* Top bar — identity strip */}
        <div className="px-7 lg:px-15 py-3.5 border-b border-white/10 font-mono text-[11px] tracking-[0.12em] uppercase opacity-80 flex justify-between gap-4">
          <span className="text-paper/90">
            Henry Fan &middot; Curriculum Designer &amp; Education Researcher
          </span>
          <span className="hidden sm:inline">Mentee of Jeff Anderson &middot; Foothill College</span>
        </div>

        {/* The hero — title up top, dashboard immediately below */}
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 pt-14 lg:pt-16 pb-14 lg:pb-16">
          {/* Title block */}
          <div className="max-w-[820px] mb-12 lg:mb-14">
            <div className="font-mono text-[12px] tracking-[0.16em] uppercase text-red mb-5 animate-fade-up-1">
              A Curriculum Framework for Community College CS
            </div>
            <h1 className="font-display text-[clamp(56px,8.5vw,108px)] tracking-[0.02em] leading-[0.88] animate-fade-up-2">
              Teaching<br />
              <span className="text-red">Computing</span><br />
              Differently.
            </h1>
          </div>

          {/* Currently focus */}
          <div className="mb-12 lg:mb-14 max-w-[880px] animate-fade-up-3">
            <div className="font-mono text-[12px] tracking-[0.18em] uppercase text-red mb-4">
              Currently
            </div>
            <p className="font-serif text-[clamp(24px,3vw,38px)] italic leading-[1.25] text-paper">
              {currentFocus}
            </p>
            <p className="font-mono text-[12px] tracking-[0.06em] text-paper/65 mt-4">
              Last updated{' '}
              {latest && (
                <time dateTime={latest.date}>{formatNowDate(latest.date)}</time>
              )}{' '}
              &middot;{' '}
              <Link
                href="/log"
                className="text-red border-b border-red/40 hover:border-red no-underline transition-colors"
              >
                See the full log
              </Link>
            </p>
          </div>

            {/* Three status cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/15 mb-12 lg:mb-14">
              {latest && (
                <Link
                  href="/log"
                  className="block bg-ink p-7 lg:p-8 no-underline text-inherit transition-colors hover:bg-white/[0.04] group"
                >
                  <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-red mb-3">
                    Latest from the log
                  </div>
                  <h3 className="font-serif text-[20px] italic leading-[1.25] text-paper mb-3 group-hover:text-red transition-colors">
                    {latest.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.65] text-paper/85 line-clamp-3 mb-4">
                    {latest.body}
                  </p>
                  <div className="font-mono text-[11px] tracking-[0.04em] text-paper/65">
                    <time dateTime={latest.date}>{formatNowDate(latest.date)}</time>{' '}
                    &middot; {latest.kind}
                  </div>
                </Link>
              )}

              {currentlyReading.href ? (
                <a
                  href={currentlyReading.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-ink p-7 lg:p-8 no-underline text-inherit transition-colors hover:bg-white/[0.04] group"
                >
                  <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-orange mb-3">
                    Currently reading
                  </div>
                  <h3 className="font-serif text-[20px] italic leading-[1.25] text-paper mb-1 group-hover:text-orange transition-colors">
                    {currentlyReading.title}
                  </h3>
                  <div className="font-mono text-[11px] tracking-[0.04em] text-paper/70 mb-3">
                    {currentlyReading.author}
                  </div>
                  <p className="text-[14.5px] leading-[1.65] text-paper/85 line-clamp-3">
                    {currentlyReading.why}
                  </p>
                </a>
              ) : (
                <div className="bg-ink p-7 lg:p-8">
                  <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-orange mb-3">
                    Currently reading
                  </div>
                  <h3 className="font-serif text-[20px] italic leading-[1.25] text-paper mb-1">
                    {currentlyReading.title}
                  </h3>
                  <div className="font-mono text-[11px] tracking-[0.04em] text-paper/70 mb-3">
                    {currentlyReading.author}
                  </div>
                  <p className="text-[14.5px] leading-[1.65] text-paper/85 line-clamp-3">
                    {currentlyReading.why}
                  </p>
                </div>
              )}

              {researchProjects[0] && (
                <Link
                  href="/research"
                  className="block bg-ink p-7 lg:p-8 no-underline text-inherit transition-colors hover:bg-white/[0.04] group"
                >
                  <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-teal mb-3">
                    Active research direction
                  </div>
                  <h3 className="font-serif text-[20px] italic leading-[1.25] text-paper mb-1 group-hover:text-teal transition-colors">
                    {researchProjects[0].title}
                  </h3>
                  <div className="font-mono text-[11px] tracking-[0.04em] text-paper/70 mb-3">
                    {researchProjects[0].subtitle}
                  </div>
                  <p className="text-[14.5px] leading-[1.65] text-paper/85 line-clamp-3">
                    {researchProjects[0].description}
                  </p>
                </Link>
              )}
            </div>

            {/* Three audience doors */}
            <div>
              <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper/65 mb-5">
                Where to start
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/15">
                <Link
                  href="/log"
                  className="group block bg-ink p-7 no-underline text-inherit transition-colors hover:bg-red/15"
                >
                  <div className="font-display text-[28px] leading-[0.95] text-paper mb-2 group-hover:text-red transition-colors">
                    Mentor or grant reader
                  </div>
                  <p className="text-[14.5px] leading-[1.6] text-paper/80">
                    Start at the log. One URL, dated entries, what shipped this week.
                  </p>
                  <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-red mt-4 transition-[gap] group-hover:gap-3 flex items-center gap-2">
                    Open the log <span aria-hidden>&rarr;</span>
                  </div>
                </Link>
                <Link
                  href="/research"
                  className="group block bg-ink p-7 no-underline text-inherit transition-colors hover:bg-orange/15"
                >
                  <div className="font-display text-[28px] leading-[0.95] text-paper mb-2 group-hover:text-orange transition-colors">
                    PhD admissions
                  </div>
                  <p className="text-[14.5px] leading-[1.6] text-paper/80">
                    Three-paper program with Jeff Anderson, theoretical framing, methods, target venues.
                  </p>
                  <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-orange mt-4 transition-[gap] group-hover:gap-3 flex items-center gap-2">
                    Open research <span aria-hidden>&rarr;</span>
                  </div>
                </Link>
                <Link
                  href="/courses"
                  className="group block bg-ink p-7 no-underline text-inherit transition-colors hover:bg-teal/15"
                >
                  <div className="font-display text-[28px] leading-[0.95] text-paper mb-2 group-hover:text-teal transition-colors">
                    Curious about the curriculum
                  </div>
                  <p className="text-[14.5px] leading-[1.6] text-paper/80">
                    Eleven proposed courses, three entry tracks each. A framework in development, free and open.
                  </p>
                  <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-teal mt-4 transition-[gap] group-hover:gap-3 flex items-center gap-2">
                    Open the catalog <span aria-hidden>&rarr;</span>
                  </div>
                </Link>
              </div>
            </div>
        </div>
      </header>

      {/* ====== "MORE ABOUT THE CURRICULUM" DIVIDER + LONG-FORM PITCH OPENER ====== */}
      <section
        id="curriculum"
        className="bg-paper border-b-2 border-ink scroll-mt-20"
      >
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-7 lg:gap-20 items-start">
          <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-red flex items-start gap-2.5">
            <span className="text-ink/30">{'//'}</span> Below the dashboard
          </div>
          <div>
            <h2 className="font-display text-[clamp(40px,5.5vw,68px)] tracking-[0.02em] leading-[0.92] text-ink mb-5">
              More about the <span className="text-red">curriculum</span>
            </h2>
            <p className="text-[19px] leading-[1.6] text-ink max-w-[680px] mb-6">
              Six courses built on one conviction: students learn CS best when
              they build real things, earn abstractions through struggle, and
              understand that every algorithm encodes a set of values about the
              world. No exams. No required textbooks. Every concept earned by
              building. <em className="font-serif italic text-ink/70">A
              proposal in development &mdash; not a currently taught program.</em>
            </p>
            <div className="flex gap-2.5 flex-wrap mb-5">
              {['No Required Textbooks','No Exams','3 Entry Tracks per Course','Portfolio Assessment','All Resources Free'].map(p => (
                <span
                  key={p}
                  className="px-3.5 py-1.5 border border-ink/30 font-mono text-[11px] tracking-[0.06em] uppercase text-ink/80"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="text-[14.5px] leading-[1.7] text-ink/65 max-w-[680px]">
              Everything below is the long-form pitch: the problem the framework
              addresses, the three pedagogical principles, the eleven proposed
              courses, the three entry tracks, the signature projects, and the
              research roots in Jeff Anderson&rsquo;s ungrading and antiracist
              learning science. Skip it or scroll it &mdash; both are fine.
            </p>
          </div>
        </div>
      </section>

      {/* ====== THE PROBLEM ====== */}
      <section className="bg-cream border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-28 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-7 lg:gap-20">
          <div className="section-label">The Problem This Curriculum Addresses</div>
          <p className="text-[19px] leading-[1.65] text-ink max-w-[680px]">
            Most introductory CS courses follow the same pattern: explain a concept, demonstrate syntax, assign practice problems, assess on recall. Students who arrive with prior exposure tend to succeed. Students who don&rsquo;t fall behind quickly and conclude they are <em className="font-serif italic text-[20px]">not a CS person.</em> The course then calls this selection, when in fact it is structure. <strong className="font-medium">The difficulty students experience in introductory CS is not uniformly about ability</strong> &mdash; most of it is caused by courses that teach abstractions before problems, syntax before meaning, and efficiency before understanding.
          </p>
        </div>
      </section>

      {/* ====== PHILOSOPHY ====== */}
      <section id="philosophy" className="border-b-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-7 lg:gap-20 mb-16">
            <div className="section-label">How These Courses Are Built</div>
            <p className="text-[17px] leading-[1.7] text-ink/85 max-w-[640px]">
              Three pedagogical principles run through every course in this curriculum. They are not buzzwords &mdash; each one is a concrete design decision that shows up in how units are sequenced, how projects are scoped, and how student work is assessed. Each principle traces to a specific body of learning science research.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 border-2 border-ink">
            {philosophyCards.map((card, i) => (
              <div
                key={card.num}
                className={`p-8 lg:p-11 ${i < philosophyCards.length - 1 ? 'border-b-2 lg:border-b-0 lg:border-r-2 border-ink' : ''}`}
              >
                <span className="font-display text-[80px] leading-[0.85] text-cream block mb-6">
                  {card.num}
                </span>
                <div className="font-serif text-[26px] italic mb-4 leading-[1.2]">
                  {card.title}
                </div>
                <p className="text-[16.5px] leading-[1.7] text-ink/85 mb-5">
                  {card.body}
                </p>
                <div className="font-mono text-[12.5px] leading-[1.7] text-red p-4 border-l-3 border-red bg-red/5">
                  <span className="text-[10.5px] tracking-[0.15em] uppercase text-ink/70 block mb-1.5">
                    {card.exampleLabel}
                  </span>
                  {card.example}
                </div>
                <div className="font-mono text-[12px] text-ink/70 mt-4 leading-[1.65] border-t border-cream pt-3">
                  {card.citation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== COURSES ====== */}
      <section id="courses">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-28">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-4 flex items-center gap-2.5">
            <span className="text-cream">{'//'}</span> Six Courses
          </div>
          <p className="text-[17px] leading-[1.7] text-ink/85 max-w-[680px] mb-12">
            Each course is a complete 18-week experience: a central project arc, three entry tracks for students at different levels, portfolio-based assessment, and a public exhibition at semester end. No exams. No required textbook purchases. All course materials free and open access.
          </p>

          {/* Pathway — one-line text sequence */}
          <div className="font-mono text-[13px] leading-[1.8] text-ink/85 mb-3 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-ink/50 uppercase tracking-[0.12em] text-[11px] mr-2">CS pathway</span>
            <span className="text-ink">CS 175</span>
            <span className="text-ink/40">&rarr;</span>
            <span className="text-ink">CS 180</span>
            <span className="text-ink/40">&rarr;</span>
            <span className="text-red font-medium">CS 185</span>
            <span className="text-ink/40">&rarr;</span>
            <span className="text-ink">CS 210</span>
            <span className="mx-3 text-ink/30">&middot;</span>
            <span className="text-ink/50 uppercase tracking-[0.12em] text-[11px] mr-2">Engineering branch</span>
            <span className="text-teal">Math 2B</span>
            <span className="text-ink/40">&rarr;</span>
            <span className="text-teal">ENGR 11</span>
          </div>
          <p className="font-mono text-[12px] text-ink/65 mb-9 leading-[1.7]">
            Every course starts from Track I &mdash; no prior programming required. The engineering branch (Math 2B, ENGR 11) is a parallel track for students taking applied linear algebra alongside the CS sequence.
          </p>

          {/* Course grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 border-2 border-ink">
            {courses.map((course, i) => (
              <Link
                key={course.id}
                href={course.href}
                className={`flex flex-col no-underline text-inherit transition-colors hover:bg-cream group ${
                  i < courses.length - 1 ? 'border-b-2 lg:border-b-0 lg:border-r-2 border-ink' : ''
                } ${i >= 3 ? 'lg:border-t-2' : ''}`}
              >
                <div
                  className="text-paper px-9 py-8 shrink-0 relative overflow-hidden group-hover:brightness-110 transition-all"
                  style={{ backgroundColor: course.topBg || '#0d0d0d' }}
                >
                  <div className="absolute right-[-10px] bottom-[-20px] font-display text-[100px] leading-none opacity-[0.06] pointer-events-none">
                    {course.ghost}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-40 mb-3.5">
                    Course {String(course.idx).padStart(2, '0')} of 06
                  </div>
                  <div className="font-display text-[52px] leading-none mb-1">
                    {course.prefix}{' '}
                    <span style={{ color: course.accent || '#c1121f' }}>{course.num}</span>
                  </div>
                  <div
                    className="font-serif text-[18px] italic leading-[1.3]"
                    style={{ color: course.titleColor || 'rgba(245,240,232,0.75)' }}
                  >
                    {course.title.split('\n').map((line, j) => (
                      <span key={j}>
                        {line}
                        {j === 0 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-9 py-7 flex-1 flex flex-col">
                  <span className={`status-badge ${course.status === 'taught' ? 'status-taught' : course.status === 'dev' ? 'status-dev' : 'status-proposed'}`}>
                    {course.statusLabel}
                  </span>
                  <p className="text-[16.5px] leading-[1.7] text-ink/85 flex-1 mb-6">
                    {course.desc}
                  </p>
                  <div className="flex flex-col gap-2 border-t border-cream pt-5 mb-6">
                    {course.meta.map((m) => (
                      <div key={m.label} className="flex justify-between items-center font-mono text-[12.5px] tracking-[0.04em]">
                        <span className="text-ink/65">{m.label}</span>
                        <span className="text-ink">{m.value}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.12em] uppercase transition-[gap] group-hover:gap-4"
                    style={{ color: course.ctaColor || '#c1121f' }}
                  >
                    <span>Open Course Site</span>
                    <span className="text-[18px]">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== THREE TRACKS ====== */}
      <section id="tracks" className="bg-ink text-paper border-y-2 border-white/[0.06]">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-28 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-7 lg:gap-20 items-start">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-red flex items-start gap-2.5 pt-1">
            <span className="text-white/20">{'//'}</span> Three Tracks
          </div>
          <div>
            <div className="bg-white/[0.04] border border-white/10 p-5 px-6 mb-8 font-serif text-[19px] italic text-paper leading-[1.5]">
              &ldquo;Tracks are chosen weekly, not at semester start. A student can run Track I for ten weeks and switch to Track II for the capstone. There is no grade penalty for choosing Track I.&rdquo;
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/55 block mt-2.5 not-italic">
                The Key Design Insight &mdash; Track System
              </span>
            </div>
            <p className="text-[17px] leading-[1.7] text-paper/90 mb-8 max-w-[640px]">
              Every course in this curriculum is taught at three simultaneous depth levels. These are not ability groups, remediation tiers, or ceiling categories &mdash; they are depth choices. The same concept is taught to everyone. What varies is whether a student builds it, proves it, or extends it. Track I is a complete, serious course outcome &mdash; not a consolation.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 border border-white/10">
              {tracks.map((track, i) => (
                <div
                  key={track.roman}
                  className={`p-8 ${i < tracks.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-white/10' : ''}`}
                >
                  <div className={`font-display text-[48px] leading-none mb-3 ${track.opacityClass}`}>
                    {track.roman}
                  </div>
                  <div className="font-serif text-[19px] italic mb-3 text-paper">
                    {track.name}
                  </div>
                  <p className="text-[16px] leading-[1.7] text-paper/90">
                    {track.body}
                  </p>
                  <div className="mt-5 flex flex-col gap-1.5">
                    {track.examples.map((ex, j) => (
                      <div key={j} className="font-mono text-[12.5px] tracking-[0.04em] text-paper/85 py-1.5 px-3 border-l-2 border-white/20">
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {/* Bottom note */}
              <div className="col-span-full border-t border-white/[0.08] px-8 py-6 font-mono text-[12.5px] tracking-[0.04em] text-paper/85 leading-[1.7]">
                Track I is a complete, serious outcome &mdash; not a consolation. Students completing Track I have built more real software than most students in exam-based courses. &nbsp;&middot;&nbsp; Tracks are chosen weekly. A student can run Track I for 10 weeks and switch to Track II for the capstone. &nbsp;&middot;&nbsp; There is no grade penalty for choosing Track I. Assessment is portfolio-based across all tracks.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== STUDENT PROJECTS ====== */}
      <section id="projects" className="border-y-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-7 lg:gap-20 mb-16 items-start">
            <div className="section-label">Signature Projects</div>
            <p className="text-[17px] leading-[1.7] text-ink/85">
              These are not homework assignments with a twist. Each signature project is the central learning experience of its unit &mdash; designed so that students encounter the core concept as a genuine problem to solve, not a technique to apply. Every project is public: presented at a semester-end exhibition open to the campus community.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 border-2 border-ink">
            {/* Featured project */}
            <Link
              href="/courses/how-things-work"
              className="col-span-full border-b-2 border-ink grid grid-cols-1 lg:grid-cols-2 no-underline text-inherit transition-colors hover:bg-cream group"
            >
              <div className="p-9 lg:border-r-2 border-ink">
                <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-copper mb-3">
                  Featured &middot; CS 175 &middot; 20-Week Signature Project
                </div>
                <div className="font-serif text-[30px] italic leading-[1.2] mb-4">
                  Build a Computer from Scratch
                </div>
                <p className="text-[16.5px] leading-[1.7] text-ink/85 mb-4">
                  Teams of students build a working, programmable 8-bit computer on breadboards from logic gates &mdash; and in the process encounter the physics, mathematics, linear algebra, differential equations, and chemistry that make it possible. Inspired by Ben Eater. Grounded in seven bodies of learning science research. Designed for cross-STEM transfer.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['Physics', 'Discrete Math', 'Linear Algebra', 'Diff Eq', 'Chemistry'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 font-mono text-[8px] tracking-[0.1em] uppercase rounded-sm border"
                      style={{
                        background:
                          tag === 'Physics' ? 'rgba(37,99,235,0.1)' :
                          tag === 'Discrete Math' ? 'rgba(124,58,237,0.1)' :
                          tag === 'Linear Algebra' ? 'rgba(8,145,178,0.1)' :
                          tag === 'Diff Eq' ? 'rgba(220,38,38,0.08)' :
                          'rgba(5,150,105,0.1)',
                        color:
                          tag === 'Physics' ? '#2563eb' :
                          tag === 'Discrete Math' ? '#7c3aed' :
                          tag === 'Linear Algebra' ? '#0891b2' :
                          tag === 'Diff Eq' ? '#dc2626' :
                          '#059669',
                        borderColor:
                          tag === 'Physics' ? 'rgba(37,99,235,0.25)' :
                          tag === 'Discrete Math' ? 'rgba(124,58,237,0.25)' :
                          tag === 'Linear Algebra' ? 'rgba(8,145,178,0.25)' :
                          tag === 'Diff Eq' ? 'rgba(220,38,38,0.2)' :
                          'rgba(5,150,105,0.25)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-9 flex flex-col justify-center">
                <div className="font-mono text-[13px] tracking-[0.02em] text-ink/85 leading-[1.7] p-3 border-l-2 border-cream bg-black/[0.02]">
                  <strong className="block text-[10.5px] tracking-[0.15em] uppercase text-ink/70 mb-1.5 font-medium">
                    Students Learn Through This Project
                  </strong>
                  How a computer works from first principles &mdash; not as metaphor, but as physical reality &middot; Ohm&rsquo;s Law, RC circuits, Boolean algebra, two&rsquo;s complement, modular arithmetic, state vectors, matrix transformations &middot; Collaborative debugging as the primary learning activity &middot; The experience of building something real with your hands that no AI can replicate
                </div>
                <div className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.12em] uppercase text-red mt-5 transition-[gap] group-hover:gap-4">
                  <span>Open Full Project Page</span>
                  <span className="text-[18px]">&rarr;</span>
                </div>
              </div>
            </Link>

            {/* Project cards */}
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`p-9 ${
                  (i + 1) % 3 !== 0 ? 'lg:border-r-2 border-ink' : ''
                } ${i < projects.length - 3 ? 'border-b-2 border-ink' : ''}`}
              >
                <div className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-red mb-3">
                  {project.tag}
                </div>
                <div className="font-serif text-[23px] italic leading-[1.2] mb-3">
                  {project.title}
                </div>
                <p className="text-[16.5px] leading-[1.7] text-ink/85 mb-5">
                  {project.body}
                </p>
                <div className="font-mono text-[13px] tracking-[0.02em] text-ink/85 leading-[1.7]">
                  <strong className="block text-ink text-[10.5px] tracking-[0.15em] uppercase mb-1">
                    Students Learn Through This Project
                  </strong>
                  {project.learns}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== RESEARCH ROOTS / THINKERS ====== */}
      <section id="thinkers" className="border-t-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-7 lg:gap-20 mb-14 items-start">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink/70 flex items-start gap-2.5 pt-1">
              <span className="text-cream">{'//'}</span> Research Roots
            </div>
            <p className="text-[17px] leading-[1.7] text-ink/85 max-w-[640px]">
              These courses are not built on personal teaching preference. Each design decision traces to a body of research or a theoretical framework. The thinkers below are not name-dropped &mdash; their ideas show up in specific assignments, assessment structures, and sequencing decisions across every course in this curriculum.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-cream">
            {thinkers.map((t, i) => (
              <div
                key={t.name}
                className={`py-7 pl-7 pr-4 border-b border-cream ${
                  i % 2 === 0 ? 'sm:border-r' : ''
                } ${
                  (i + 1) % 4 !== 0 ? 'lg:border-r' : 'lg:border-r-0'
                } border-cream`}
              >
                <div className="font-serif text-[19px] mb-1">{t.name}</div>
                <div className="font-mono text-[11.5px] tracking-[0.04em] text-red mb-3 italic">
                  {t.book}
                </div>
                <p className="text-[15.5px] leading-[1.65] text-ink/85 mb-3">
                  {t.desc}
                </p>
                <div className="font-mono text-[13px] tracking-[0.02em] text-ink/85 leading-[1.7] p-3 border-l-2 border-cream bg-black/[0.02]">
                  <strong className="block text-[10.5px] tracking-[0.14em] uppercase text-ink/70 mb-1">
                    In These Courses
                  </strong>
                  {t.inPractice}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ABOUT ====== */}
      <section id="about" className="bg-cream border-y-2 border-ink">
        <div className="max-w-[1300px] mx-auto px-7 lg:px-15 py-28 text-center">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-red mb-5">
            About This Curriculum
          </div>
          <p className="text-[19px] leading-[1.6] text-ink max-w-[720px] mx-auto mb-8">
            Designed by Henry Fan &mdash; community college CS education researcher, curriculum designer, and mentee of Prof. Jeff Anderson (Foothill College). The framework is a proposal, not a currently taught program.
          </p>
          <Link
            href="/about"
            className="inline-block font-mono text-[12px] tracking-[0.1em] uppercase text-red no-underline border-b border-red/40 pb-1 hover:border-red transition-colors"
          >
            Full About &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}

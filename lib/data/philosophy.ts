import type { PhilosophyPrinciple, Thinker, AboutSection, SiteStats, ClassroomRule } from "./types";

export const philosophyPrinciples: PhilosophyPrinciple[] = [
  {
    number: "01",
    title: "Derive Before Compute",
    subtitle: "Earn the abstraction.",
    description:
      "Every major concept is introduced through a problem that requires it — before the formal tool is offered. This is Guershon Harel's intellectual need principle: students must experience the inadequacy of what they currently have before a new tool will feel like a solution rather than a fact to memorize. A hash table isn't defined on day one. Students first build a slow lookup system, hit the wall of its inefficiency, and then the hash table arrives as the answer to a question they already have.",
    inPractice: {
      course: "CS 210",
      example:
        "Students build a linear-search contacts app in Week 2. With 10,000 entries it's unusably slow. Week 4 introduces hash tables — as the solution to a problem students already own.",
    },
    citation:
      'Harel & Tall (1991) · "The General, the Abstract, and the Generic" · For the Learning of Mathematics',
  },
  {
    number: "02",
    title: "Build Before Import",
    subtitle: "Implement before you use.",
    description:
      "Students implement every major data structure and algorithm from scratch before using the library version. This is not hazing — it is the difference between knowing that sklearn has a fit() method and understanding what fitting means. Ko's read-before-write research shows that students who trace implementations before writing them develop significantly stronger debugging ability and conceptual transfer. Every abstraction has an interior; students earn the right to ignore it by first understanding it.",
    inPractice: {
      course: "CS 185",
      example:
        "Logistic regression is implemented in NumPy before scikit-learn is opened. The final submission includes both versions with a written comparison explaining what the library hides.",
    },
    citation:
      "Ko et al. (2019) · Critically Conscious Computing · University of Washington · cs.washington.edu/ccc",
  },
  {
    number: "03",
    title: "Equity as Design, Not Afterthought",
    subtitle: "Algorithms encode values.",
    description:
      "The social implications of algorithmic systems are not a lecture added at the end of the semester — they are woven into the technical content from the start. When students build a word frequency analyzer, they ask whose vocabulary the default dictionary centers. When they study PageRank, they ask what gets amplified and what gets buried. This is not politics inserted into CS. It is the recognition that every algorithm encodes the values of the people who built it — and understanding those values is part of understanding the algorithm.",
    inPractice: {
      course: "CS 180 & CS 185",
      example:
        "The final project in every AI/ML course is a structured bias audit of a real deployed system — written like a research report and presented at a public exhibition.",
    },
    citation:
      'Buolamwini & Gebru (2018) · "Gender Shades" · ACM FAccT · Noble (2018) · Algorithms of Oppression',
  },
];

export const thinkers: Thinker[] = [
  {
    name: "Amy J. Ko",
    work: "Critically Conscious Computing · UW",
    description:
      "Equitable, joyous computing education. Read-before-write sequencing. Student agency and institutional trust as preconditions for learning.",
    inPractice:
      "Students trace and read existing implementations before writing their own. Build-before-import is directly drawn from Ko's read-before-write research.",
  },
  {
    name: "Jeff Anderson",
    work: "Antiracist Learning Science · Ungrading · Strategic Deep Learning · Foothill College",
    description:
      "Jeff's top-level professional goal: use antiracist learning science to help people thrive. He maps every classroom decision back to research in cognitive science, the psychology of learning, and the scholarship of anti-racism. Creator of the ALAF textbook, the Strategic Deep Learning framework, five anti-racist learner-centered objectives, and a pioneering ungrading practice. His conviction: the top 100% of learners deserve the best teaching in the world.",
    inPractice:
      "Portfolio assessment and student-proposed grading are drawn directly from Anderson's ungrading framework. The Abuelita Test is adapted from his communication frameworks. The three-track system honors his principle that learner-centered means the student determines their path. The Build a Computer project's entire assessment structure, reflection design, and cross-STEM bridging philosophy are built on his foundation.",
  },
  {
    name: "Paulo Freire",
    work: "Pedagogy of the Oppressed · 1968",
    description:
      "Students are not empty vessels to fill with content. The banking model of education reproduces passivity. Knowledge is a liberatory act when connected to lived experience.",
    inPractice:
      "Every capstone is student-chosen and connected to a real problem in the student's community. Students determine what they build, and for whom.",
  },
  {
    name: "bell hooks",
    work: "Teaching to Transgress · 1994",
    description:
      "The classroom as a site of freedom. Bringing the full self to learning. The instructor's vulnerability and intellectual engagement as pedagogical tools.",
    inPractice:
      "Reflective writing is required alongside every project. Students write about struggle, confusion, and discovery — not just what they built.",
  },
  {
    name: "Joy Buolamwini",
    work: "Gender Shades · MIT Media Lab",
    description:
      "The coded gaze. Facial recognition systems that fail disproportionately on darker-skinned women. Bias is not accidental — it is the product of who is in the room when systems are built.",
    inPractice:
      "The Bias Audit project in CS 180 and CS 185 is directly modeled on the Gender Shades methodology, adapted for undergraduates with no prior research training.",
  },
  {
    name: "Safiya Umoja Noble",
    work: "Algorithms of Oppression · 2018",
    description:
      "Search engines encode power. Information retrieval systems reflect and amplify the values of the people and institutions that build and fund them.",
    inPractice:
      "The Build PageRank project ends with a structured analysis of how the algorithm's design choices determine whose content surfaces and whose is buried.",
  },
  {
    name: "Ruha Benjamin",
    work: "Race After Technology · 2019",
    description:
      'The New Jim Code: technological systems that discriminate while claiming objectivity, making discrimination harder to name and challenge.',
    inPractice:
      "Benjamin's framework is the theoretical grounding for CS 185: every algorithm is a choice about what to optimize, and that choice has a politics.",
  },
  {
    name: "Donald Knuth",
    work: "The Art of Computer Programming",
    description:
      "Algorithms are art. Rigor and beauty are not opposites. The deep analysis of even simple algorithms reveals structure that cannot be seen from the surface.",
    inPractice:
      "CS 210's emphasis on implementing before using, and on understanding the full analysis of even simple structures, is a direct inheritance from Knuth.",
  },
  {
    name: "Seymour Papert",
    work: "Mindstorms · 1980 · Constructionism",
    description:
      "Learning happens through building artifacts in the world. The computer is not a teaching machine — it is a material for thinking with. Children (and adults) learn most deeply when they construct something meaningful.",
    inPractice:
      "The Build a Computer project is pure constructionism: students learn by physically building. Every project in the curriculum produces a tangible artifact, not a worksheet answer.",
  },
  {
    name: "Guershon Harel",
    work: "Intellectual Need Principle · DNR Framework",
    description:
      "Concepts should be introduced only when students experience the inadequacy of their current tools. Without intellectual need, new concepts are arbitrary facts. With it, they are solutions to problems students own.",
    inPractice:
      "The 'Derive Before Compute' principle is a direct implementation of Harel's intellectual need. The Contacts Problem in CS 210 creates the need for hash tables before hash tables are introduced.",
  },
  {
    name: "Manu Kapur",
    work: "Productive Failure · 2008",
    description:
      "Students who struggle with problems before receiving instruction learn more deeply than those who receive instruction first. The struggle is not a bug — it is the mechanism of deep learning.",
    inPractice:
      "Every course presents the 'headache' before the 'aspirin.' Students encounter the problem that a data structure solves before the data structure is introduced.",
  },
  {
    name: "Scott Freeman et al.",
    work: "Active Learning Meta-Analysis · PNAS 2014",
    description:
      "Active learning increases performance in STEM by half a standard deviation. Students in traditional lecture courses are 1.5x more likely to fail. The evidence is unambiguous: lecture alone doesn't work.",
    inPractice:
      "Every class session includes hands-on building, peer instruction, or structured discussion. There are no pure lecture days in any course.",
  },
  {
    name: "Edward Deci & Richard Ryan",
    work: "Self-Determination Theory · 2000",
    description:
      "Intrinsic motivation requires three conditions: autonomy (choice), competence (growth), and relatedness (belonging). When these are present, students engage deeply. When absent, they comply superficially.",
    inPractice:
      "The three-track system provides autonomy. Portfolio assessment provides competence feedback. Community projects provide relatedness. All three conditions are structurally embedded.",
  },
];

export const andersonRules: ClassroomRule[] = [
  {
    number: 1,
    title: "Health Comes First",
    description:
      "Your physical, mental, and emotional health always comes before course content. If you must choose between wellbeing and a deadline, choose wellbeing. Come back when you're ready. This is not a platitude — it is the first rule.",
  },
  {
    number: 2,
    title: "Deep Learning Over Shallow",
    description:
      "We don't optimize for grades. We optimize for understanding. A neural net you truly understand is worth infinitely more than one you copied. Find your sweet spot: the edge of productive struggle.",
  },
  {
    number: 3,
    title: "Show Up, Show Out",
    description:
      "Your presence enriches everyone. Peer instruction is the most powerful learning tool we have — Amy Ko's research confirms this. When you teach, you learn deepest. Bring your full self.",
  },
  {
    number: 4,
    title: "Finish Vegetables First",
    description:
      "Complete the core learning before passion projects. Vegetables = foundational concepts. Dessert = building something you care about. Both required. The best final projects come from students who did both.",
  },
  {
    number: 5,
    title: "Critical Consciousness = Technical Skill",
    description:
      "Understanding who built a system, for whom, and what it encodes is not soft — it's the most advanced skill here. You have agency in this room. Use it.",
  },
];

export const twoMinuteRule = {
  title: "The 2-Minute Question Rule",
  description:
    "When stuck, give yourself 2 minutes. Then write a precise question: not 'I don't get it' but 'I'm on step 4 of backprop and I understand the chain rule but can't see why we multiply the Jacobian here.' That specificity is expertise in formation.",
};

export const aboutSection: AboutSection = {
  paragraphs: [
    "This curriculum is designed by Henry Fan — CVC-OEI Application Support Analyst at the Foothill–De Anza Community College District and a mentee of Prof. Jeff Anderson (Foothill College) — working at the intersection of computer science education, equitable pedagogy, and learning science research. The courses on this site are a multi-year design proposal to redesign introductory CS at the community college level: courses that are technically rigorous, project-driven, and built from the start to serve students who have historically been pushed out of CS. The framework is a proposal in development, not a currently taught program.",
    "The pedagogical foundation of this work is built on the mentorship and teaching philosophy of Jeff Anderson (Foothill College), whose commitment to antiracist learning science, ungrading, and the principle that every classroom decision should map back to research in cognitive science has shaped how every course on this site is designed and assessed. His five anti-racist, research-based, learner-centered learning objectives are the invisible architecture of this entire curriculum.",
    "The curriculum is connected to a mentee-led research program into help-seeking behavior in introductory CS courses, curriculum dependency structures, and the experiences of students who leave STEM at community colleges. That work lives at the CS Education Research Portfolio.",
    "All course materials are free and open access. Instructors who want to adapt any of these courses for their own institutions are encouraged to do so. For questions, collaboration, or to share what you build with these materials, reach out directly.",
  ],
  links: [
    {
      label: "Research Portfolio",
      href: "https://fansofhenry.github.io/cs-ed/",
    },
    {
      label: "Jeff Anderson Math",
      href: "https://jeffandersonmath.wordpress.com/",
    },
    { label: "henry@henryfan.org", href: "mailto:henry@henryfan.org" },
    { label: "GitHub", href: "https://github.com/fansofhenry/teach_cs" },
  ],
};

export const siteStats: SiteStats = {
  requiredTextbooks: 0,
  exams: 0,
  tracksPerCourse: 3,
};

export const problemStatement = {
  paragraphs: [
    'Most introductory CS courses follow the same pattern: explain a concept, demonstrate syntax, assign practice problems, assess on recall. Students who arrive with prior exposure tend to succeed. Students who don\'t fall behind quickly and conclude they are not a CS person. The course then calls this selection, when in fact it is structure.',
    "This failure is especially concentrated at community colleges, where students arrive with more diverse prior experience, more financial and time constraints, and less inherited access to the social capital that makes traditional CS culture feel familiar. The typical response — remediation, prerequisite chains, stricter placement — treats the wrong variable.",
    "This curriculum takes a different position: the difficulty students experience in introductory CS is not uniformly about ability. Most of it is caused by courses that teach abstractions before problems, syntax before meaning, and efficiency before understanding. The fix is not remediation. It is a different kind of course — one that begins with a problem the student wants to solve, introduces tools only when they're needed, and assesses understanding through what students build rather than what they recall.",
  ],
};

export const philosophyQuote = {
  text: "The most advanced technical skill in these courses is understanding who built a system, for whom, and what it encodes about the world.",
  source: "Course Philosophy · Rooted in Freire, hooks, Ko, Anderson",
};

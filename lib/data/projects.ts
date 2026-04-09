import type { Project } from "./types";

export const signatureProjects: Project[] = [
  {
    tag: "Featured · CS 175 · 20-Week Signature Project",
    title: "Build a Computer from Scratch",
    description:
      "Teams of students build a working, programmable 8-bit computer on breadboards from logic gates — and in the process encounter the physics, mathematics, linear algebra, differential equations, and chemistry that make it possible. Inspired by Ben Eater. Grounded in seven bodies of learning science research. Designed for cross-STEM transfer: every module includes an explicit \"STEM Bridge Moment\" where the instructor names the connection to the student's next math, physics, or chemistry course.",
    learnings: [
      "How a computer works from first principles — not as metaphor, but as physical reality",
      "Ohm's Law, RC circuits, Boolean algebra, two's complement, modular arithmetic, state vectors, matrix transformations, recurrence relations, semiconductor chemistry",
      "Collaborative debugging as the primary learning activity",
      "The experience of building something real with your hands that no AI can replicate",
    ],
    isFeatured: true,
    stemTags: ["Physics", "Discrete Math", "Linear Algebra", "Diff Eq", "Chemistry"],
    href: "build-a-computer",
  },
  {
    tag: "CS 210 · Data Structures",
    title: "The Contacts Problem",
    description:
      "Students build a functional contacts application — adding, searching, sorting — starting with a flat list. As the dataset grows, they measure slowdown empirically, identify the bottleneck, and redesign. The project runs four weeks, and students implement and profile at least three structural approaches before semester end.",
    learnings: [
      "Time complexity as felt experience, not formula",
      "Hash tables as motivated solutions",
      "Profiling and empirical analysis",
      "The cost of early design decisions",
    ],
  },
  {
    tag: "CS 185 · Machine Learning",
    title: "Derive Before Deploy",
    description:
      "Students implement linear regression, logistic regression, and a single-layer neural network entirely in NumPy — no sklearn allowed until the implementation is complete. The final submission includes both versions plus a written explanation of what the library conceals and why that matters.",
    learnings: [
      "Gradient descent as a mechanical process",
      'What "fitting" actually means',
      "Reading library source code",
      "The professional risk of tools you don't understand",
    ],
  },
  {
    tag: "CS 180 / CS 185 · AI & ML",
    title: "The Bias Audit",
    description:
      "Students choose a real, deployed AI product — a hiring tool, content moderator, facial recognition API, or recommendation system — design a structured test protocol, run it, measure performance across demographic groups, and produce a findings report structured like a research paper. Directly adapted from Buolamwini's Gender Shades methodology.",
    learnings: [
      "Experimental design",
      "Bias as a measurable quantity",
      "Technical writing for non-technical audiences",
      'That "neutral" systems make choices',
    ],
  },
  {
    tag: "CS 175 · How Things Work",
    title: "Build PageRank",
    description:
      "Students derive the PageRank algorithm from the random surfer model, implement it on a graph of their own construction, then run it on a real web crawl. They modify the damping factor and adjacency structure and observe how rankings change — which leads directly to the question of who decides what matters on the internet.",
    learnings: [
      "Markov chains and stationary distributions",
      "Matrix multiplication as a meaningful operation",
      "Power and amplification in information systems",
      "How search encodes value judgments",
    ],
  },
  {
    tag: "All Courses",
    title: "The Abuelita Test",
    description:
      "Every capstone project must include a written explanation addressed to a non-technical family member: what does your program do, what problem does it solve, and why should someone care? If you cannot explain it to someone who doesn't speak code, you don't fully understand it yet. Communication is assessed alongside the code itself.",
    learnings: [
      "Technical communication as a skill, not an add-on",
      "The gap between knowing and explaining",
      "Audience-aware writing",
      "Why documentation matters in professional software",
    ],
  },
  {
    tag: "All Courses · End of Semester",
    title: "Public Exhibition",
    description:
      "Every course ends with a public exhibition, not a final exam. Students present their portfolio of work to an audience of peers, instructors, and community members. Students write a self-evaluation against the course learning goals and propose their final grade with evidence from their portfolio.",
    learnings: [
      "Portfolio thinking and self-assessment",
      "Public communication of technical work",
      "Ownership of learning outcomes",
      "That the work they built is worth showing",
    ],
  },
];

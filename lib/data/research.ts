import type { ResearchProject, TheoreticalConstruct, ReadingListEntry, ResearchTimeline } from "./types";

// ===== Five Named Research Projects (from cs-ed portfolio) =====

export const researchProjects: ResearchProject[] = [
  {
    id: "P1",
    title: "HelpMap",
    subtitle: "Structural Predictors of Help-Seeking in Introductory CS",
    description:
      "LMS learning analytics to identify structural predictors of help-seeking behavior. Students who need help most are least likely to seek it — not because of individual deficit but because of course design. This project builds a predictive model using LMS interaction data to identify students at risk of help-seeking suppression.",
    methodology: "Logistic regression on LMS interaction logs. Feature families: temporal (session timing, spacing), linguistic (forum post complexity, question specificity), engagement (resource access patterns, assignment submission timing). Target: help-seeking events (office hours, tutoring center, forum posts).",
    techStack: ["Python", "scikit-learn", "PSLC DataShop", "LMS API"],
    targetVenue: "ICER (International Computing Education Research)",
    timeline: "Fall 2026 — LMS feature extraction + model training",
  },
  {
    id: "P2",
    title: "SyllabusAudit",
    subtitle: "NLP Classification of Pedagogical Debt in CS Syllabi",
    description:
      "An NLP classifier that detects 'pedagogical debt' — violations of Harel's intellectual need principle — in CS course syllabi. If a syllabus introduces hash tables in Week 3 without a motivating problem, that's pedagogical debt: abstraction before need. This tool makes that debt measurable.",
    methodology: "47-syllabus corpus from California community colleges. Annotation schema with 4 dimensions: necessity (is the concept motivated?), sequence (does prerequisite precede dependent?), equity (are multiple entry points offered?), assessment (is assessment aligned to stated learning goals?). Cohen's kappa target ≥ 0.7.",
    techStack: ["HuggingFace Transformers", "Label Studio", "Python", "spaCy"],
    targetVenue: "Learning@Scale",
    timeline: "Fall 2026 — Expert annotators + NLP classifier training",
  },
  {
    id: "P3",
    title: "Why They Left",
    subtitle: "Departure Narratives from Community College CS",
    description:
      "20–30 semi-structured interviews with students who left CS at community colleges. Not 'why did you fail?' but 'what was your experience, and what would have changed it?' Using Seymour & Hunter's taxonomy of STEM departure factors, adapted for community college context.",
    methodology: "Qualitative: semi-structured interviews, 60–90 minutes. IRB protocol. Deductive coding (Seymour & Hunter departure taxonomy) + inductive coding (grounded theory for emergent themes). Member checking with participants.",
    techStack: ["Otter.ai transcription", "Dedoose coding", "Grounded theory"],
    targetVenue: "ICER 2027",
    timeline: "Summer 2026 — 20–30 interviews + coding",
  },
  {
    id: "P4",
    title: "CurriculumGraph",
    subtitle: "Graph-Theoretic Analysis of CS Curriculum Dependencies",
    description:
      "A tool that models CS curricula as directed graphs with typed dependencies. Four dependency types: conceptual (topic A requires understanding topic B), procedural (skill A requires practicing skill B first), motivational (topic A provides intellectual need for topic B), and social (activity A builds trust needed for activity B). Structural graph properties predict student outcomes.",
    methodology: "Model courses as directed acyclic graphs. Node = concept/skill. Edge = typed dependency. Compute: longest path (curriculum bottleneck), in-degree distribution (prerequisite load), connected components (isolated topics). Pilot with 5–10 instructors for validation.",
    techStack: ["NetworkX", "React", "D3.js", "Python"],
    targetVenue: "SIGCSE",
    timeline: "Spring 2027 — Pilot with instructors",
  },
  {
    id: "P5",
    title: "BelongingSignals",
    subtitle: "Measuring Belonging Cues in CS Course Materials",
    description:
      "A coding scheme for identifying belonging signals (and threats) in CS course materials — syllabi, assignments, code comments, error messages, course websites. Based on Walton's belonging uncertainty framework: whether students believe 'people like me' are expected to succeed in CS.",
    methodology: "Walton 3-item belonging scale administered pre/post. Coding scheme applied to course materials. Instructor self-audit instrument developed for voluntary use. Correlation between material-level belonging signals and student-reported belonging.",
    techStack: ["Survey instruments", "Qualitative coding", "Statistical analysis"],
    targetVenue: "CSE (Computer Science Education journal)",
    timeline: "Spring 2027 — Instrument development + pilot",
  },
];

// ===== Theoretical Constructs =====

export const theoreticalConstructs: TheoreticalConstruct[] = [
  {
    name: "Pedagogical Debt",
    definition:
      "Analogous to technical debt: the accumulated cost of introducing abstractions before students experience the problems those abstractions solve. Violations of Harel's intellectual need principle that are measurable from course materials and predictive of student outcomes.",
    operationalization:
      "Detectable via NLP classification of syllabi and course materials. A topic introduced without a motivating problem is a unit of pedagogical debt. High-debt courses produce students who can execute procedures but cannot transfer understanding.",
  },
  {
    name: "Help-Seeking Suppression",
    definition:
      "A behavioral pattern in which students who need help most are structurally least likely to seek it — not due to individual deficit but due to course design, institutional signaling, and belonging uncertainty. The suppression is structural, not psychological.",
    operationalization:
      "Operationalizable in LMS data: students with high engagement (frequent logins, resource access) but low help-seeking events (no forum posts, no office hours) exhibit the pattern. Logistic regression on temporal and linguistic features can predict suppression risk.",
  },
  {
    name: "Curriculum Graph Analysis",
    definition:
      "Modeling a curriculum as a directed graph with typed dependencies (conceptual, procedural, motivational, social). Structural properties of the graph — longest path, in-degree distribution, bottleneck nodes — predict student outcomes and identify design weaknesses invisible to sequential syllabus reading.",
    operationalization:
      "Computed via NetworkX. Longest path = minimum time to complete. High in-degree nodes = prerequisite bottlenecks. Disconnected components = isolated topics that students can't connect. Motivational edges = intellectual need relationships.",
  },
  {
    name: "Motivational Debt",
    definition:
      "A tentative construct extending pedagogical debt: the accumulated motivational cost when course materials fail to connect learning activities to student-valued outcomes. Measurable via NLP sentiment and framing analysis of assignment descriptions.",
    operationalization:
      "Detectable by analyzing assignment language for outcome framing (instrumental vs. intrinsic), audience specification (who is this for?), and connection to student experience (abstract vs. situated). High motivational debt correlates with surface learning approaches.",
  },
];

// ===== Research Timeline =====

export const researchTimeline: ResearchTimeline[] = [
  {
    phase: "Foundation",
    period: "Spring 2026",
    milestones: [
      "IRB application submitted",
      "Syllabi collection begins (47 California CC CS syllabi)",
      "Annotation schema development for SyllabusAudit",
      "PhD program applications",
    ],
  },
  {
    phase: "Data Collection",
    period: "Summer 2026",
    milestones: [
      "20–30 departure interviews conducted (Why They Left)",
      "Qualitative coding begins — Seymour & Hunter taxonomy",
      "Grounded theory for emergent themes",
    ],
  },
  {
    phase: "Analysis",
    period: "Fall 2026",
    milestones: [
      "Expert annotators trained for SyllabusAudit",
      "NLP classifier training on annotated syllabi",
      "LMS feature extraction for HelpMap",
      "CurriculumGraph prototype development",
    ],
  },
  {
    phase: "Publication",
    period: "Spring 2027",
    milestones: [
      "Submit P3 (Why They Left) to ICER",
      "Submit P2 (SyllabusAudit) to Learning@Scale",
      "Pilot P4 (CurriculumGraph) with 5–10 instructors",
      "BelongingSignals instrument development",
    ],
  },
  {
    phase: "PhD Integration",
    period: "2027+",
    milestones: [
      "Integrate P1–P5 into dissertation framework",
      "Longitudinal tracking of curriculum interventions",
      "Tool release: CurriculumGraph and SyllabusAudit as open-source",
    ],
  },
];

// ===== Annotated Reading List =====

export const readingList: ReadingListEntry[] = [
  // Foundations: STEM Departure
  {
    citation: "Seymour, E. & Hunter, A.-B. (2019). Talking About Leaving Revisited. Springer.",
    section: "Foundations: STEM Departure",
    annotation: "The definitive longitudinal study of why students leave STEM. Identifies seven categories of departure factors. The framework for P3 (Why They Left) interviews. Key insight: most departure is caused by institutional structure, not student ability.",
    connectsTo: ["P3"],
  },
  {
    citation: "Margolis, J. & Fisher, A. (2002). Unlocking the Clubhouse: Women in Computing. MIT Press.",
    section: "Foundations: STEM Departure",
    annotation: "Ethnographic study of women in CS at Carnegie Mellon. Identifies 'the experience of computing' as a cultural system that excludes. Directly informs the equity-as-design principle.",
    connectsTo: ["P5"],
  },
  {
    citation: "Walton, G. M. & Brady, S. T. (2017). The many questions of belonging. In Handbook of Competence and Motivation.",
    section: "Foundations: STEM Departure",
    annotation: "Belonging uncertainty as a mechanism: students from stigmatized groups are more vigilant to belonging cues. The theoretical foundation for P5 (BelongingSignals).",
    connectsTo: ["P5"],
  },
  {
    citation: "Lewis, C. M. et al. (2017). Building community in CS. ACM Inroads.",
    section: "Foundations: STEM Departure",
    annotation: "Community-building practices that reduce isolation in CS courses. Practical interventions that connect to the social dependency type in CurriculumGraph.",
    connectsTo: ["P4"],
  },
  // Learning Analytics & Help-Seeking
  {
    citation: "Karabenick, S. A. & Berger, J.-L. (2013). Help seeking as a self-regulated learning strategy. In Applications of Self-Regulated Learning.",
    section: "Learning Analytics & Help-Seeking",
    annotation: "Help-seeking as a strategic, adaptive behavior — not a sign of weakness. The theoretical foundation for P1 (HelpMap). Key: help-seeking suppression is a measurable, structural phenomenon.",
    connectsTo: ["P1"],
  },
  {
    citation: "Wise, A. F. & Shaffer, D. W. (2015). Why theory matters more than ever in the age of big data. Journal of Learning Analytics.",
    section: "Learning Analytics & Help-Seeking",
    annotation: "Learning analytics without theory is pattern-matching without meaning. Guides the feature family design in HelpMap: features must map to theoretical constructs, not just correlate with outcomes.",
    connectsTo: ["P1"],
  },
  // Constructionism & Physical Computing
  {
    citation: "Papert, S. (1980). Mindstorms: Children, Computers, and Powerful Ideas. Basic Books.",
    section: "Constructionism & Physical Computing",
    annotation: "The foundational text for constructionism: learning happens through building artifacts in the world. The philosophical root of 'Build Before Import' and the Build a Computer project.",
  },
  {
    citation: "Harel, I. & Papert, S. (1991). Constructionism. Ablex Publishing.",
    section: "Constructionism & Physical Computing",
    annotation: "Extends Papert's constructionism with empirical studies. Children who build instructional software learn more deeply than those who receive instruction. The research basis for project-based curriculum.",
  },
  {
    citation: "Blikstein, P. (2013). Digital fabrication and 'making' in education. In FabLabs: Of Machines, Makers, and Inventors.",
    section: "Constructionism & Physical Computing",
    annotation: "Making as pedagogy. Physical computing closes the gap between abstraction and experience. Directly informs the Build a Computer project's design rationale.",
  },
  // Curriculum Design & Necessity Principle
  {
    citation: "Harel, G. (2013). Intellectual need. In Vital Directions for Mathematics Education Research. Springer.",
    section: "Curriculum Design & Necessity Principle",
    annotation: "The intellectual need principle: concepts should be introduced only when students experience the inadequacy of their current tools. The theoretical foundation for 'Derive Before Compute' and the SyllabusAudit project.",
    connectsTo: ["P2"],
  },
  {
    citation: "Ko, A. J. et al. (2020). Critically Conscious Computing. University of Washington.",
    section: "Curriculum Design & Necessity Principle",
    annotation: "Equitable CS education that centers justice. Read-before-write sequencing. Student agency. The pedagogical framework underlying every course in this curriculum.",
  },
  {
    citation: "Anderson, J. (2023). Strategic Deep Learning. Foothill College.",
    section: "Curriculum Design & Necessity Principle",
    annotation: "Antiracist learning science applied to classroom practice. Ungrading, portfolio assessment, the five anti-racist learner-centered objectives. The invisible architecture of this entire curriculum.",
  },
  // Learning Science Frameworks
  {
    citation: "Kolb, D. A. (1984). Experiential Learning: Experience as the Source of Learning. Prentice-Hall.",
    section: "Learning Science Frameworks",
    annotation: "The experiential learning cycle: concrete experience → reflective observation → abstract conceptualization → active experimentation. The Build a Computer project follows this cycle in every module.",
  },
  {
    citation: "Kapur, M. (2008). Productive failure in mathematical problem solving. Instructional Science.",
    section: "Learning Science Frameworks",
    annotation: "Students who struggle with problems before receiving instruction learn more deeply than those who receive instruction first. The research basis for presenting the 'headache' before the 'aspirin.'",
  },
  {
    citation: "Perkins, D. N. & Salomon, G. (1992). Transfer of learning. In International Encyclopedia of Education.",
    section: "Learning Science Frameworks",
    annotation: "Transfer requires explicit bridging. Knowledge doesn't automatically move between contexts. The Build a Computer project's 'STEM Bridge Moments' are a direct implementation of this research.",
  },
  {
    citation: "Deci, E. L. & Ryan, R. M. (2000). Self-determination theory. In Handbook of Self-Determination Research.",
    section: "Learning Science Frameworks",
    annotation: "Intrinsic motivation requires autonomy, competence, and relatedness. The three-track system provides autonomy (choose your depth), competence (every track is a serious outcome), and relatedness (community projects).",
  },
  {
    citation: "Ambrose, S. A. et al. (2010). How Learning Works: Seven Research-Based Principles. Jossey-Bass.",
    section: "Learning Science Frameworks",
    annotation: "Seven principles of learning synthesized from cognitive science. Prior knowledge, motivation, practice, feedback, climate, self-directed learning, mastery. The practical design handbook for every course.",
  },
  // Community College Research
  {
    citation: "Bailey, T. R., Jaggars, S. S., & Jenkins, D. (2015). Redesigning America's Community Colleges. Harvard University Press.",
    section: "Community College Research",
    annotation: "The guided pathways framework. Community colleges fail students through complexity, not rigor. The structural argument for clear learning pathways and the course pathway visualization.",
  },
  // CS Education Research Methods
  {
    citation: "Fincher, S. & Robins, A. (Eds.) (2019). The Cambridge Handbook of Computing Education Research. Cambridge University Press.",
    section: "CS Education Research Methods",
    annotation: "The methodological reference for CS education research. Chapters on qualitative methods, learning analytics, and assessment inform the multi-method approach across all five projects.",
  },
  {
    citation: "Guzdial, M. (2015). Learner-Centered Design of Computing Education. Morgan & Claypool.",
    section: "CS Education Research Methods",
    annotation: "Computing education designed around how students actually learn, not how experts think. The research-practice bridge that connects learning science to CS curriculum design.",
  },
  // AI in CS Education
  {
    citation: "Porter, L. & Zingaro, D. (2024). Learn AI-Assisted Python Programming. Manning.",
    section: "AI in CS Education",
    annotation: "The first serious textbook on teaching programming with AI assistance. Reframes the instructor's role from code demonstrator to learning designer. Informs how AI tools are integrated in courses.",
  },
  // Equity Frameworks
  {
    citation: "Freire, P. (1968/2000). Pedagogy of the Oppressed. Continuum.",
    section: "Equity Frameworks",
    annotation: "Students are not empty vessels. The banking model reproduces passivity. Knowledge is a liberatory act. The philosophical foundation for student-proposed grading and course co-evaluation.",
  },
  {
    citation: "hooks, b. (1994). Teaching to Transgress: Education as the Practice of Freedom. Routledge.",
    section: "Equity Frameworks",
    annotation: "The classroom as a site of freedom. The instructor's vulnerability and intellectual engagement as pedagogical tools. The foundation for reflective writing requirements alongside every project.",
  },
  {
    citation: "Washington, A. N. (2020). When twice as good isn't enough. Communications of the ACM.",
    section: "Equity Frameworks",
    annotation: "Structural racism in CS education. The gap between stated values and experienced reality. The motivation for equity-as-design as a core curriculum principle, not an add-on.",
  },
];

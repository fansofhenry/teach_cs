import type { StudentSuccessLab, StrategicPhase, ClassroomRule } from "./types";

// ===== Jeff Anderson's Four-Phase Strategic Deep Learning Roadmap =====

export const strategicPhases: StrategicPhase[] = [
  {
    number: "01",
    title: "Conquering College",
    tagline: "Earn any grade in any class with any teacher.",
    description:
      "Build the foundational systems — scheduling, note-taking, deep learning habits, and a dream binder — that make success possible in any academic environment. This is not about motivation. It is about systems.",
  },
  {
    number: "02",
    title: "Get Paid to Learn",
    tagline: "Earn $10K+ through scholarships and internships.",
    description:
      "Use the systems from Phase 1 to build a funding strategy. Scholarships are not lottery tickets — they are applications, and applications are skills. Internships are not gifts — they are earned through preparation.",
  },
  {
    number: "03",
    title: "Classroom to Career",
    tagline: "Reverse-engineer your degree into a life you love.",
    description:
      "Your degree is a license to learn, not a job guarantee. Reverse-engineer from the life you want: what skills, relationships, and experiences do you need? Build them deliberately, starting now.",
  },
  {
    number: "04",
    title: "Freedom Dreaming",
    tagline: "Use your expertise to transform broken systems.",
    description:
      "The ultimate goal is not personal success — it is using your expertise and position to change the systems that made success unnecessarily hard. Navigate first. Then transform.",
  },
];

// ===== Jeff Anderson's Five Rules =====

export const classroomRules: ClassroomRule[] = [
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

// ===== The 2-Minute Question Rule =====

export const twoMinuteRule = {
  title: "The 2-Minute Question Rule",
  description:
    "When stuck, give yourself 2 minutes. Then write a precise question: not 'I don't get it' but 'I'm on step 4 of backprop and I understand the chain rule but can't see why we multiply the Jacobian here.' That specificity is expertise in formation.",
};

// ===== Four Student Success Labs =====

export const studentSuccessLabs: StudentSuccessLab[] = [
  {
    number: 1,
    title: "Schedule to Succeed",
    subtitle: "Build the system before the semester builds you.",
    objectives: [
      "Create a weekly schedule that accounts for every credit hour",
      "Build a term calendar with all deadlines visible",
      "Set SMART goals for the semester",
      "Connect your schedule to your 5-year vision",
    ],
    description:
      "Most students don't fail because of ability — they fail because of time management. The rule of thumb: 2–3 hours of study for every credit hour. A 15-unit semester is a 45-hour/week commitment. If you're also working, that's a 60+ hour week. You need a system, not willpower.",
    prompts: [
      { label: "Weekly Schedule", placeholder: "Map every hour of your week: classes, work, study blocks, meals, sleep, commute..." },
      { label: "Term Calendar", placeholder: "List every major deadline, exam, and project due date for the entire semester..." },
      { label: "SMART Goals", placeholder: "Write 3 specific, measurable goals for this semester..." },
      { label: "Horizons of Focus", placeholder: "What does your life look like in 5 years? 10 years? 50 years? Work backward..." },
      { label: "Obstacles & Solutions", placeholder: "What will get in the way? For each obstacle, write a specific plan..." },
      { label: "Support Network", placeholder: "Who are your 3 go-to people when things get hard? How will you reach them?" },
    ],
    keyIdeas: [
      "2–3 hours of study per credit hour per week",
      "Schedule study blocks like class — non-negotiable",
      "The Horizons of Focus model connects daily tasks to life vision",
      "Obstacles are predictable — plan for them",
    ],
  },
  {
    number: 2,
    title: "Prepare for Deep Learning",
    subtitle: "Find your sweet spot between comfort and survival.",
    objectives: [
      "Identify your learning zone using the Three Zones model",
      "Understand deliberate practice (Ericsson)",
      "Distinguish intrinsic from extrinsic motivation (Deci & Ryan)",
      "Map the four stages of competence for a skill you're building",
    ],
    description:
      "Jeff Anderson's Sweet Spot model: you learn best in the zone between comfort (too easy, no growth) and survival (too hard, shutdown). The sweet spot is productive struggle — the edge of your current ability. Ericsson's research on deliberate practice confirms: growth happens at the boundary, with immediate feedback and intentional repetition.",
    prompts: [
      { label: "Your Sweet Spot", placeholder: "Describe a time you were in the sweet spot — challenged but not overwhelmed. What made it work?" },
      { label: "Comfort Zone Audit", placeholder: "What academic tasks are you doing on autopilot? These are comfort zone — no growth happening..." },
      { label: "Survival Zone Signals", placeholder: "What makes you shut down? Identify the signals: panic, avoidance, procrastination..." },
      { label: "Motivation Map", placeholder: "What drives you intrinsically? What external rewards matter? How do they interact?" },
      { label: "Deliberate Practice Plan", placeholder: "Choose one skill. Design a 30-minute daily practice with feedback..." },
      { label: "Competence Stage", placeholder: "For your hardest current course: which stage are you at? What would move you forward?" },
    ],
    keyIdeas: [
      "The Sweet Spot: between comfort and survival",
      "Deliberate practice requires immediate feedback",
      "Intrinsic motivation > extrinsic (Deci & Ryan Self-Determination Theory)",
      "Four stages: unconscious incompetence → conscious incompetence → conscious competence → unconscious competence",
      "Growth mindset is not magic — it requires structure",
    ],
  },
  {
    number: 3,
    title: "Build Your Note System",
    subtitle: "Your notes are your second brain. Build them like one.",
    objectives: [
      "Prepare for flipped classroom learning",
      "Build a note rewrite system that produces deep understanding",
      "Practice the 2-Minute Question technique",
      "Design your deep learning environment",
    ],
    description:
      "Most students take notes as transcription — writing down what the instructor says. That's shallow learning. Deep learning requires rewriting: after class, rewrite your notes in your own words, connect to prior knowledge, generate questions, and teach the material to someone else. The Protege Effect (Chase et al.): preparing to teach produces deeper learning than preparing for a test.",
    prompts: [
      { label: "Pre-Class Prep", placeholder: "How will you prepare before each class? What does 'flipped' mean for your schedule?" },
      { label: "Note Rewrite System", placeholder: "Describe your system: when will you rewrite? Where? How will you connect to prior knowledge?" },
      { label: "2-Minute Question", placeholder: "Practice now: write a precise question about something confusing in your hardest course..." },
      { label: "Deep Learning Environment", placeholder: "Where do you learn best? What distractions will you eliminate? What tools do you need?" },
      { label: "Peer Teaching Plan", placeholder: "Who will you teach? When? How will you explain without just re-reading your notes?" },
      { label: "System Navigation", placeholder: "What institutional policies or practices make learning harder? How will you navigate them?" },
    ],
    keyIdeas: [
      "Notes are for rewriting, not transcribing",
      "The Protege Effect: teaching produces deeper learning than studying",
      "The 2-Minute Question Rule: specificity is expertise in formation",
      "Cornell method: divide, annotate, summarize",
      "System navigation: protecting yourself from harmful educational policies",
    ],
  },
  {
    number: 4,
    title: "Build Your Dream Binder",
    subtitle: "Your degree is a license to learn. Use it.",
    objectives: [
      "Create a 5-year academic plan",
      "Reverse-engineer your career from the life you want",
      "Build a scholarship and funding tracker",
      "Develop a professor relationship-building strategy",
    ],
    description:
      "A Dream Binder is your strategic document — not a vision board, but a living plan that connects your daily actions to your long-term goals. It includes your academic plan, career reverse-engineering, funding strategy, and relationship map. Tiago Forte's 'second brain' concept: capture everything, organize for action, express through projects.",
    prompts: [
      { label: "5-Year Academic Plan", placeholder: "Map your courses, transfers, and milestones from now to degree completion..." },
      { label: "Career Reverse-Engineering", placeholder: "Start from the job/life you want. Work backward: what skills, credentials, and experiences do you need?" },
      { label: "Funding Strategy", placeholder: "List every scholarship, grant, and internship opportunity. Deadlines, requirements, and your plan to apply..." },
      { label: "Professor Strategy", placeholder: "Which 3 professors should know you by name? How will you build those relationships?" },
      { label: "Personal Mission Statement", placeholder: "In 2–3 sentences: who are you becoming, and why does it matter?" },
      { label: "Capture System", placeholder: "How will you capture ideas, resources, and opportunities as they appear? What's your system?" },
    ],
    keyIdeas: [
      "A degree is a license to learn — not a guarantee",
      "Reverse-engineer from the life you want",
      "Scholarships are skills, not lottery tickets",
      "Build relationships with faculty — they are your network",
      "The second brain: capture → organize → express",
    ],
  },
];

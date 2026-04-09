import type { TrainingCard, WorkshopFormat } from "./types";

// ===== Peer Educator Training Cards =====

export const trainingCards: TrainingCard[] = [
  // Deck 1: Foundations
  {
    id: "F1",
    deck: "Foundations",
    title: "The Sweet Spot",
    difficulty: "beginner",
    content:
      "Jeff Anderson's learning zone model: between boredom (comfort zone) and shutdown (survival zone) is the Sweet Spot — where productive struggle happens. 'Full Ignition' = when a student hits the sweet spot and can't stop learning. Your job as a tutor is to calibrate: keep them challenged but not overwhelmed.",
    prompts: [
      "Describe a time you were in the Sweet Spot as a learner. What made it work?",
      "How would you recognize when a student has crossed from Sweet Spot into Survival Zone?",
      "What's one specific thing you could say to bring a student back from survival mode?",
    ],
  },
  {
    id: "F2",
    deck: "Foundations",
    title: "Veggies Before Dessert",
    difficulty: "beginner",
    content:
      "Complete foundational work before passion projects. In tutoring: make sure the student has done the core reading/assignment before jumping to the fun stuff. The student who skips veggies builds on sand. Connect to 'career capital' (Cal Newport): you earn the right to do creative work by first mastering the fundamentals.",
    prompts: [
      "A student wants to skip the assignment and work on their personal project. What do you say?",
      "How do you make 'vegetables' feel worthwhile rather than punitive?",
      "What's the difference between enforcing compliance and building intrinsic motivation?",
    ],
  },
  {
    id: "F3",
    deck: "Foundations",
    title: "The Banking Model vs. Dialog",
    difficulty: "intermediate",
    content:
      "Freire's banking model: the instructor deposits knowledge into the student's empty head. Dialog: knowledge is co-constructed through conversation. In tutoring, you are not a knowledge dispenser. You are a thinking partner. Ask questions. Don't give answers. The student must do the cognitive work.",
    prompts: [
      "You just explained a concept for 5 minutes straight. The student nods. Did learning happen? How would you know?",
      "Rewrite this 'banking' statement as a dialog question: 'A linked list stores nodes with pointers.'",
      "When is it actually appropriate to just tell the student the answer?",
    ],
  },
  {
    id: "F4",
    deck: "Foundations",
    title: "Concept Image vs. Definition",
    difficulty: "intermediate",
    content:
      "Tall & Vinner's framework: a student's 'concept image' (their mental model) often differs from the formal definition. 'Abuelita language' = explaining in plain, personal terms. A student might say 'a stack is like a pile of plates' — that's a concept image. It's useful AND incomplete. Your job: honor the image, then extend it.",
    prompts: [
      "A student says 'recursion is when a function calls itself.' What concept image is this? What's missing?",
      "Give the Abuelita explanation of a hash table. No jargon.",
      "When should you correct a concept image vs. build on it?",
    ],
  },
  {
    id: "F5",
    deck: "Foundations",
    title: "Retrieval Practice",
    difficulty: "beginner",
    content:
      "The testing effect: retrieving information from memory strengthens it more than re-reading. In tutoring: don't re-explain. Instead, ask the student to recall. 'What do you remember about binary search?' is more powerful than 'Let me explain binary search again.' The struggle to recall IS the learning.",
    prompts: [
      "A student says 'I don't remember anything from last week.' What do you do?",
      "Design 3 retrieval practice questions for a concept you tutor frequently.",
      "Why is retrieval harder and more effective than recognition?",
    ],
  },
  // Deck 2: Equity & Identity
  {
    id: "E1",
    deck: "Equity & Identity",
    title: "Cultural Code Switching",
    difficulty: "advanced",
    content:
      "'White time' vs. 'Mexican time.' 'Professional' communication vs. how you talk at home. Code-switching is survival — and it's exhausting. As a tutor, be aware that the student may be performing a version of themselves that isn't natural. Create space for their actual communication style. Don't enforce 'professional' as the only valid register.",
    prompts: [
      "A student apologizes for their 'bad English.' What do you say?",
      "How does code-switching affect cognitive load during a tutoring session?",
      "What's the difference between teaching professional norms and enforcing cultural monolithism?",
    ],
  },
  {
    id: "E2",
    deck: "Equity & Identity",
    title: "System Navigation vs. Transformation",
    difficulty: "advanced",
    content:
      "Jeff Anderson's framework: first navigate the system (earn the grade, get the degree, protect yourself), then transform it (change policies, build alternatives). Ungrading is anti-oppressive because traditional grading is labor exploitation — students produce work, instructors assign value, students have no power to negotiate. Tutors help students navigate AND name the system.",
    prompts: [
      "A student says 'this grading policy is unfair.' Do you help them navigate it or challenge it?",
      "What's the difference between teaching a student to 'play the game' and teaching them to accept injustice?",
      "How does ungrading change the tutoring relationship?",
    ],
  },
  {
    id: "E3",
    deck: "Equity & Identity",
    title: "The 10-Year Portfolio",
    difficulty: "intermediate",
    content:
      "Build durable artifacts, not disposable assignments. A 'Capture System' (Tiago Forte) collects insights, code snippets, project ideas, and connections over time. Writing your own textbook — compiling your notes into a reference you'd actually use — is the ultimate portfolio piece. The goal: in 10 years, your portfolio demonstrates not what grades you got but what you built and learned.",
    prompts: [
      "What would you put in your own 10-year portfolio? What evidence of learning matters in a decade?",
      "How do you help a student see their homework as portfolio material rather than a grade checkpoint?",
      "What's one system you could start today that your future self would thank you for?",
    ],
  },
  {
    id: "E4",
    deck: "Equity & Identity",
    title: "The Spiraling Student",
    difficulty: "intermediate",
    content:
      "Scenario: A student comes in visibly stressed. They're behind in three classes, considering dropping CS, and say 'I'm just not smart enough for this.' They don't need a CS explanation right now. They need to be heard, to have their experience validated, and to be helped to make a strategic decision — not an emotional one.",
    prompts: [
      "What do you say first? (Hint: it's not about CS.)",
      "How do you validate their experience without reinforcing the 'I'm not smart enough' narrative?",
      "When should you refer a student to counseling instead of continuing to tutor?",
    ],
  },
  {
    id: "E5",
    deck: "Equity & Identity",
    title: "The Survival Zone Hack",
    difficulty: "advanced",
    content:
      "Scenario: A student submits code that is clearly AI-generated. They're not cheating for fun — they're in survival mode. The assignment is due in 2 hours, they work 30 hours/week, and they don't understand the material. Punishment won't help. The question is: what structural support was missing that made this the rational choice?",
    prompts: [
      "How do you have this conversation without shaming the student?",
      "What structural changes would make AI-generated submissions less tempting?",
      "What's the difference between academic integrity and academic survival?",
    ],
  },
  // Deck 3: Pedagogy & Practice
  {
    id: "P1",
    deck: "Pedagogy & Practice",
    title: "The Add Code Plea",
    difficulty: "beginner",
    content:
      "Scenario: A student emails asking for an add code to your section. The class is full. Institutional policy says no. But this student needs this class to transfer on time. What are your options? What power do you have? What power don't you have? This is system navigation in real time.",
    prompts: [
      "What can you actually do for this student within the system?",
      "What information does the student need to navigate this independently?",
      "How does this scenario connect to Bailey's guided pathways research?",
    ],
  },
  {
    id: "P2",
    deck: "Pedagogy & Practice",
    title: "The 6.25 Minute Reality",
    difficulty: "intermediate",
    content:
      "Math: a 1-hour tutoring session with 8 students = 7.5 minutes per student. Subtract transition time = 6.25 minutes of actual attention per student. At a 40:1 student-to-tutor ratio, you have even less. This is the structural reality. It means every minute must count. Triage. Prioritize. Don't try to re-teach the entire lecture.",
    prompts: [
      "Given 6.25 minutes, what's the highest-value intervention you can make?",
      "How do you decide which student needs you most in a group session?",
      "What can you teach a student to do independently so they need less of your time?",
    ],
  },
  {
    id: "P3",
    deck: "Pedagogy & Practice",
    title: "Scaffolding Without Spoon-Feeding",
    difficulty: "intermediate",
    content:
      "Scaffolding = temporary support that you remove as the student grows. Spoon-feeding = doing the cognitive work for the student. The difference: scaffolding ends with the student doing the thinking. Spoon-feeding ends with the student having the answer but not the understanding. The test: could the student solve a similar problem without you?",
    prompts: [
      "A student is stuck on a for-loop. Give a scaffolded response (not the answer).",
      "How do you know when to remove a scaffold?",
      "What's the learned helplessness risk if you scaffold too long?",
    ],
  },
  {
    id: "P4",
    deck: "Pedagogy & Practice",
    title: "Socratic Questioning in CS",
    difficulty: "advanced",
    content:
      "The Socratic method in CS tutoring: instead of explaining, ask questions that lead the student to discover the answer. 'What would happen if the list were empty?' 'What does this line return?' 'Can you trace through this with a specific example?' The goal: the student has the 'aha' moment, not you.",
    prompts: [
      "Rewrite this explanation as a Socratic question chain: 'Binary search only works on sorted arrays.'",
      "When does Socratic questioning fail? What's the backup?",
      "How do you Socratically question without being annoying or condescending?",
    ],
  },
  {
    id: "P5",
    deck: "Pedagogy & Practice",
    title: "Error Messages Are Teachers",
    difficulty: "beginner",
    content:
      "Most students see error messages as failures. Reframe: error messages are the most precise feedback a computer can give. 'IndexError: list index out of range' tells you exactly what happened and where. Your job: teach the student to read the error before asking for help. The error IS the teacher.",
    prompts: [
      "A student says 'it doesn't work' without reading the error. What's your response?",
      "Walk through how you'd teach a student to decode a Python traceback.",
      "What's the psychological barrier to reading error messages? How do you lower it?",
    ],
  },
  // Deck 4: Wild Cards
  {
    id: "W1",
    deck: "Wild Cards",
    title: "Robot Push-ups",
    difficulty: "beginner",
    content:
      "AI analogy: asking ChatGPT to write your code is like asking a robot to do your push-ups. The robot gets stronger. You don't. The value of CS assignments is not the code — it's the thinking process that produces the code. If you skip the process, you skip the learning. Use this analogy when students ask 'why can't I just use AI?'",
    prompts: [
      "A student says AI will write all code in 5 years, so why learn? How do you respond?",
      "When IS it appropriate to use AI in learning? Where's the line?",
      "How does this analogy connect to the 'Build Before Import' principle?",
    ],
  },
  {
    id: "W2",
    deck: "Wild Cards",
    title: "Sven the Carpenter",
    difficulty: "beginner",
    content:
      "Anderson's parable: Sven is a master carpenter. He doesn't use a nail gun for every joint — he knows which joints need screws, which need glue, which need nails. His mastery comes from understanding the material, not from the tool. Similarly, a CS student who understands data structures deeply can choose the right one for any problem. The tool (Python, Java) is secondary to understanding.",
    prompts: [
      "What's the CS equivalent of knowing when to use glue vs. nails?",
      "How do you help a student who can use the tool but doesn't understand the material?",
      "What's the risk of teaching tools instead of concepts?",
    ],
  },
  {
    id: "W3",
    deck: "Wild Cards",
    title: "The Knuth Reward Hunt",
    difficulty: "advanced",
    content:
      "Donald Knuth offers $2.56 for every error found in The Art of Computer Programming. The message: finding errors is valuable, not shameful. Build this culture in your tutoring: celebrate when a student finds a bug. Make error-finding a sport, not a punishment. The student who finds errors is paying deeper attention than the student who doesn't.",
    prompts: [
      "How would you implement a 'Knuth reward' in your tutoring sessions?",
      "What's the difference between a productive error and a careless one?",
      "How does error-celebration change the emotional tone of a tutoring session?",
    ],
  },
  {
    id: "W4",
    deck: "Wild Cards",
    title: "The Silent Partner",
    difficulty: "intermediate",
    content:
      "Scenario: A student comes to every session but barely speaks. They nod, they write, but they don't ask questions or engage. Are they learning? Are they lost? Are they culturally conditioned to be quiet in academic settings? Don't assume silence means understanding OR confusion. Create low-stakes entry points: pair share, written responses, thumbs up/down.",
    prompts: [
      "Design a 30-second activity that gives a quiet student a way to participate without speaking.",
      "How do you check understanding without putting a quiet student on the spot?",
      "What cultural factors might contribute to silence in academic settings?",
    ],
  },
  {
    id: "W5",
    deck: "Wild Cards",
    title: "The Empathy Experiment",
    difficulty: "beginner",
    content:
      "Try this: attempt to learn something genuinely new and hard for 30 minutes. Not CS — something where you're a total beginner (a new language, a musical instrument, advanced math you never took). Notice: the confusion, the frustration, the impulse to quit, the feeling of being 'stupid.' That is what your students feel. Every session. Remember it.",
    prompts: [
      "What did you try to learn? How did it feel after 10 minutes?",
      "What would have helped you in that moment? A teacher? A break? A different approach?",
      "How will this experience change how you tutor tomorrow?",
    ],
  },
];

// ===== Workshop Formats =====

export const workshopFormats: WorkshopFormat[] = [
  {
    name: "Icebreaker Mode",
    duration: "15–20 minutes",
    description: "Use at the start of the quarter or with new peer educators. Low stakes, high engagement.",
    steps: [
      "Each person draws 1 card from any deck",
      "Read aloud, then share a 60-second personal connection",
      "No 'right answers' — this is about building trust",
      "Facilitator models vulnerability first",
    ],
  },
  {
    name: "Skill-Building Mode",
    duration: "45–60 minutes",
    description: "Deep practice on specific tutoring skills. Use for ongoing professional development.",
    steps: [
      "Draw 3 cards from Pedagogy & Practice deck",
      "Groups of 3: one tutor, one student, one observer",
      "Role-play each scenario for 5 minutes",
      "Observer gives structured feedback: 1 warm, 1 cool",
      "Rotate roles",
      "Debrief as full group: what patterns emerged?",
    ],
  },
  {
    name: "Reflection Retreat",
    duration: "60–90 minutes",
    description: "End-of-quarter deep reflection. Use Equity & Identity and Wild Cards decks.",
    steps: [
      "Draw 2 cards from Equity & Identity, 1 Wild Card",
      "Individual journaling: 10 minutes per card",
      "Small group share: what surprised you?",
      "Full group: what do we want to carry forward?",
      "Write one commitment for next quarter",
    ],
  },
  {
    name: "Weekly 30-Min PD",
    duration: "30 minutes",
    description: "Regular professional development. Fits into a staff meeting.",
    steps: [
      "Draw 1 card (rotate decks weekly)",
      "Read aloud as a group",
      "2 minutes silent reflection",
      "Round-robin: each person responds to one prompt",
      "Facilitator captures themes on whiteboard",
      "Close: one takeaway per person",
    ],
  },
];

// ===== Facilitation Guide =====

export const facilitationTips = [
  "Model vulnerability first — share your own tutoring failures before asking others to share theirs.",
  "Honor silence — not everyone processes at the same speed. Wait at least 7 seconds after a question.",
  "Capture themes, not transcripts — write patterns on the board, not individual quotes.",
  "Psychological safety is the prerequisite — no card is useful if people don't feel safe to be honest.",
  "The goal is reflection, not performance — there are no right answers to these prompts.",
  "Rotate facilitation — peer educators should take turns leading. This builds ownership.",
];

// ===== Additional Research Citations (from peer training) =====

export const peerTrainingCitations = [
  "Freeman, S. et al. (2014). Active learning increases student performance in science, engineering, and mathematics. PNAS.",
  "Wenger, E. (1998). Communities of Practice: Learning, Meaning, and Identity. Cambridge University Press.",
  "Schon, D. (1983). The Reflective Practitioner. Basic Books.",
  "Ericsson, K. A. (2008). Deliberate practice and acquisition of expert performance. Academic Emergency Medicine.",
  "Tanner, K. (2012). Promoting student metacognition. CBE — Life Sciences Education.",
  "Lang, J. M. (2016). Small Teaching: Everyday Lessons from the Science of Learning. Jossey-Bass.",
  "Brown, P. C. et al. (2014). Make It Stick: The Science of Successful Learning. Harvard University Press.",
  "Emdin, C. (2016). For White Folks Who Teach in the Hood. Beacon Press.",
];

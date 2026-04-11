import type { LearningTrack } from "./types";

export const learningTracks: LearningTrack[] = [
  {
    roman: "I",
    name: "Novice — Build & Understand",
    description:
      "Students develop genuine working fluency with the core concept. They build a complete, functional implementation and can explain what it does and why. No prior experience required at Track I — by design.",
    examples: [
      "CS 180: Build a rule-based chatbot; document its failure modes",
      "CS 210: Implement a linked list from scratch; analyze insertion cost",
    ],
  },
  {
    roman: "II",
    name: "Builder — Implement & Extend",
    description:
      "Students implement the concept rigorously, handle edge cases, and extend it to a novel context. They move between their own implementation and a library version and explain the tradeoffs in writing.",
    examples: [
      "CS 185: Implement logistic regression in NumPy; compare to sklearn",
      "CS 210: Implement a self-balancing BST; profile on large datasets",
    ],
  },
  {
    roman: "III",
    name: "Architect — Prove & Research",
    description:
      "Students engage with the formal mathematical structure of the concept, read related research, and contribute something original — a proof, an optimization, a novel application, or a written critical analysis.",
    examples: [
      "CS 185: Derive the gradient update rule; prove convergence bound",
      "CS 180: Read and summarize a primary research paper; connect to project",
    ],
  },
];

export const trackSystemInsight =
  "Tracks are chosen weekly, not at semester start. A student can run Track I for ten weeks and switch to Track II for the capstone. There is no grade penalty for choosing Track I.";

export const trackSystemDescription =
  "Every course in this curriculum is designed to run at three simultaneous depth levels. These are not ability groups, remediation tiers, or ceiling categories — they are depth choices. The same concept is offered to everyone. What varies is whether a student builds it, proves it, or extends it. Track I is a complete, serious course outcome — not a consolation.";

export const trackSystemNote =
  "Track I is a complete, serious outcome — not a consolation. Students completing Track I have built more real software than most students in exam-based courses. Tracks are chosen weekly. A student can run Track I for 10 weeks and switch to Track II for the capstone. There is no grade penalty for choosing Track I. Assessment is portfolio-based across all tracks.";

export const coursePathway = [
  { label: "Any student", courseNumber: null, dotStyle: "open" as const },
  { label: "How Things Work", courseNumber: "CS 175", dotStyle: "filled" as const },
  { label: "Intro AI", courseNumber: "CS 180", dotStyle: "filled" as const },
  { label: "Intro ML", courseNumber: "CS 185", dotStyle: "accent" as const },
  { label: "Data Structures", courseNumber: "CS 210", dotStyle: "filled" as const },
  { label: "Linear Algebra", courseNumber: "Math 2B", dotStyle: "branch" as const },
  { label: "MATLAB & Eng.", courseNumber: "ENGR 11", dotStyle: "branch" as const },
];

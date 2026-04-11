// TypeScript interfaces for all curriculum data structures

export type CourseStatus = "in-development" | "proposed";

export type CourseCategory = "ai-ml" | "systems" | "math" | "engineering" | "general";

export interface WeeklyModule {
  week: number | string;
  title: string;
  topics: string[];
  project?: string;
  unit?: string;
  coreQuestion?: string;
  quickRecall?: string[];
  careerConnections?: string[];
  trackVariations?: {
    novice?: string;
    builder?: string;
    architect?: string;
  };
  criticalLens?: string;
}

export interface TrackInfo {
  level: "I" | "II" | "III";
  name: string;
  tagline: string;
  description: string;
  prerequisites?: string;
  projects: string[];
  finalProject?: string;
}

export interface LearningStrategy {
  name: string;
  description: string;
}

export interface Dataset {
  name: string;
  source: string;
  url?: string;
  useCase: string;
}

export interface ConceptMapNode {
  layer: string;
  concepts: string[];
}

export interface Badge {
  name: string;
  threshold: string;
  icon: string;
}

export interface ComplexityEntry {
  structure: string;
  access?: string;
  search?: string;
  insert?: string;
  delete?: string;
  space?: string;
}

export interface AssessmentModel {
  components: { name: string; weight: number; description: string }[];
}

export interface Course {
  slug: string;
  courseNumber: string;
  title: string;
  shortDescription: string;
  status: CourseStatus;
  category: CourseCategory;
  accentColor: string;
  units: number;
  weeks: number;
  prerequisites: string[];
  tracks: TrackInfo[];
  weeklyModules: WeeklyModule[];
  learningObjectives: string[];
  keyResources: string[];
  teachingPhilosophy: string[];
  thinkers: string[];
  isNgAdaptation: boolean;
  learningStrategies?: LearningStrategy[];
  datasets?: Dataset[];
  conceptMap?: ConceptMapNode[];
  badges?: Badge[];
  complexityTable?: ComplexityEntry[];
  assessmentModel?: AssessmentModel;
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  inPractice: {
    course: string;
    example: string;
  };
  citation: string;
}

export interface Thinker {
  name: string;
  work: string;
  description: string;
  inPractice: string;
}

export interface LearningTrack {
  roman: "I" | "II" | "III";
  name: string;
  description: string;
  examples: string[];
}

export interface Project {
  tag: string;
  title: string;
  description: string;
  learnings: string[];
  isFeatured?: boolean;
  stemTags?: string[];
  href?: string;
}

export interface AboutSection {
  paragraphs: string[];
  links: { label: string; href: string }[];
}

export interface SiteStats {
  requiredTextbooks: number;
  exams: number;
  tracksPerCourse: number;
}

// ===== Learning log =====

export type LogKind =
  | "build" // shipped or working on something concrete
  | "read" // engaging with a paper, book, article
  | "research" // research progress note
  | "teach" // classroom / curriculum note
  | "meta"; // notes about the site / process itself

export interface LogEntry {
  /** ISO date string YYYY-MM-DD. Used for sorting and display. */
  date: string;
  /** Short headline. */
  title: string;
  /** Body. Can include light inline markup but kept as plain strings to stay simple. */
  body: string;
  /** Optional kind/category tag. */
  kind: LogKind;
  /** Optional free-form tags for filtering. */
  tags?: string[];
  /**
   * Optional outbound link (paper, repo, course, doc).
   * Use { label, href, internal? } — internal=true uses next/link.
   */
  link?: { label: string; href: string; internal?: boolean };
  /** Optional flag marking this as a starter/example entry that should be replaced. */
  starter?: boolean;
}

// ===== Research types (from cs-ed) =====

export interface ResearchProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  methodology: string;
  techStack?: string[];
  targetVenue?: string;
}

export interface ReadingListEntry {
  citation: string;
  section: string;
  annotation: string;
  connectsTo?: string[];
}

// ===== Student success types (from conquer-college-app) =====

export interface StudentSuccessLab {
  number: number;
  title: string;
  subtitle: string;
  objectives: string[];
  description: string;
  prompts: { label: string; placeholder: string }[];
  keyIdeas: string[];
}

export interface StrategicPhase {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface ClassroomRule {
  number: number;
  title: string;
  description: string;
}

// ===== Peer training types (from peer-educator-training-cards) =====

export interface TrainingCard {
  id: string;
  deck: string;
  title: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  content: string;
  prompts: string[];
}

export interface WorkshopFormat {
  name: string;
  duration: string;
  description: string;
  steps: string[];
}

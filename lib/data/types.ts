// TypeScript interfaces for all curriculum data structures

export type CourseStatus = "taught" | "in-development" | "proposed";

export type CourseCategory = "ai-ml" | "systems" | "math" | "engineering" | "general";

export interface WeeklyModule {
  week: number | string;
  title: string;
  topics: string[];
  project?: string;
  unit?: string;
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

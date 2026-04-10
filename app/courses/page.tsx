import type { Metadata } from "next";
import CourseCatalogClient from "./CourseCatalog";

export const metadata: Metadata = {
  title: "Course Catalog",
  description:
    "Twelve project-based, equity-centered CS courses spanning AI, machine learning, systems, mathematics, and engineering. Filter by category and status.",
  openGraph: {
    title: "Course Catalog — Teaching Computing Differently",
    description:
      "Twelve project-based, equity-centered CS courses. No exams. No required textbooks. Every concept earned through building.",
  },
};

export default function CoursesPage() {
  return <CourseCatalogClient />;
}

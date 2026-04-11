import type { Metadata } from "next";
import CourseCatalogClient from "./CourseCatalog";

export const metadata: Metadata = {
  title: "Course Catalog",
  description:
    "Six original community-college CS courses plus four equity-overlay adaptations of Andrew Ng's Coursera sequence. Project-based, portfolio-assessed, proposed as a framework — not currently taught.",
  openGraph: {
    title: "Course Catalog",
    description:
      "Six original community-college courses plus four Andrew Ng adaptations. A proposed framework — no exams, no required textbooks, every concept earned through building.",
    images: ["/opengraph-image.png"],
  },
};

export default function CoursesPage() {
  return <CourseCatalogClient />;
}

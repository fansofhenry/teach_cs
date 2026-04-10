import type { MetadataRoute } from "next";
import { courses } from "@/lib/data/courses";

export const dynamic = "force-static";

const SITE_URL = "https://fansofhenry.github.io/teach_cs";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/log",
    "/courses",
    "/philosophy",
    "/paths",
    "/research",
    "/research/modeling-bench",
    "/reading-list",
    "/student-success",
    "/peer-training",
    "/about",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const courseEntries: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${SITE_URL}/courses/${course.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...courseEntries];
}

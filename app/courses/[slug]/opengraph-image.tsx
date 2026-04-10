import { ImageResponse } from "next/og";
import { courses, getCourseBySlug } from "@/lib/data/courses";

export const dynamic = "force-static";
export const alt = "Course details";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  // Fallback: render the generic site card if the slug somehow misses.
  if (!course) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            background: "#0d0d0d",
            color: "#f5f0e8",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Teaching Computing Differently
        </div>
      ),
      { ...size }
    );
  }

  const accent = course.accentColor || "#c1121f";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0d0d0d",
          color: "#f5f0e8",
          padding: "70px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: accent,
            fontWeight: 500,
          }}
        >
          <div
            style={{
              display: "block",
              width: 60,
              height: 2,
              background: accent,
            }}
          />
          {course.category}
        </div>

        {/* Course number */}
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 168,
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            fontWeight: 800,
            color: accent,
          }}
        >
          {course.courseNumber}
        </div>

        {/* Course title */}
        <div
          style={{
            display: "flex",
            marginTop: 14,
            fontSize: 56,
            lineHeight: 1.05,
            letterSpacing: "-0.005em",
            color: "rgba(245,240,232,0.92)",
            fontWeight: 600,
            maxWidth: 1040,
          }}
        >
          {course.title}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
            fontSize: 20,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(245,240,232,0.5)",
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>{course.weeks} Weeks</span>
            <span style={{ color: "rgba(245,240,232,0.25)" }}>·</span>
            <span>{course.units} Units</span>
            <span style={{ color: "rgba(245,240,232,0.25)" }}>·</span>
            <span>{course.tracks.length} Tracks</span>
          </div>
          <div style={{ display: "flex", color: "rgba(245,240,232,0.4)" }}>
            Teaching Computing Differently
          </div>
        </div>

        {/* Right edge accent */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 10,
            background: accent,
          }}
        />
      </div>
    ),
    { ...size }
  );
}

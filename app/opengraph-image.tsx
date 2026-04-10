import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Teaching Computing Differently — Community College CS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            color: "#c1121f",
            fontWeight: 500,
          }}
        >
          <div
            style={{
              display: "block",
              width: 60,
              height: 2,
              background: "#c1121f",
            }}
          />
          A Curriculum Framework
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 36,
            fontSize: 124,
            lineHeight: 0.92,
            letterSpacing: "-0.01em",
            fontWeight: 800,
          }}
        >
          <span>Teaching</span>
          <span style={{ color: "#c1121f" }}>Computing</span>
          <span>Differently.</span>
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
            color: "rgba(245,240,232,0.55)",
          }}
        >
          <div style={{ display: "flex", gap: 28 }}>
            <span>Project-Based</span>
            <span style={{ color: "rgba(245,240,232,0.25)" }}>·</span>
            <span>Equity-Centered</span>
            <span style={{ color: "rgba(245,240,232,0.25)" }}>·</span>
            <span>Open Access</span>
          </div>
          <div style={{ display: "flex", color: "rgba(245,240,232,0.4)" }}>
            fansofhenry.github.io/teach_cs
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
            background: "#c1121f",
          }}
        />
      </div>
    ),
    { ...size }
  );
}

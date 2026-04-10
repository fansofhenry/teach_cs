import type { Metadata } from "next";
import PathsClient from "./PathsClient";

export const metadata: Metadata = {
  title: "Learning Paths",
  description:
    "Three entry tracks per course — Curious Explorer, Builder, Architect — chosen weekly, not at semester start. No prior CS background required at Track I.",
  openGraph: {
    title: "Learning Paths — Teaching Computing Differently",
    description:
      "Three depth choices per course, chosen week by week. No grade penalty for choosing Track I.",
  },
};

export default function PathsPage() {
  return <PathsClient />;
}

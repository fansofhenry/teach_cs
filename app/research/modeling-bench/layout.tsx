import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modeling Bench — Research Lab",
  description:
    "Henry Fan's active research workspace: three first-author papers in progress with Prof. Jeff Anderson (Foothill College). Weekly workflow, paper anchors, and a running research log.",
  openGraph: {
    title: "Modeling Bench — Research Lab",
    description:
      "Three-paper first-author research program with Prof. Jeff Anderson. Active working surface — not a finished publication list.",
    images: ["/opengraph-image.png"],
  },
};

export default function ModelingBenchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/teach_cs",
  assetPrefix: "/teach_cs/",
  images: { unoptimized: true },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/Petro-Pieces",
  assetPrefix: "/Petro-Pieces/",
  trailingSlash: true,
};

export default nextConfig;

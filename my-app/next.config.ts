import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-portfolio-site",
  assetPrefix: "/my-portfolio-site/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

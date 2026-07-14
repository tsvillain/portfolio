import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      "/work",
      "/portfolio",
      "/articles",
      "/recommendations",
      "/contact",
      "/games",
    ].map((source) => ({ source, destination: "/", permanent: true }));
  },
};

export default nextConfig;

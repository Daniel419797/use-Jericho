import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allow external host used by Hero image
    domains: ["image.similarpng.com"],
    // alternatively use remotePatterns for more granular control:
    // remotePatterns: [{ protocol: "https", hostname: "image.similarpng.com", pathname: "/**" }],
  },
  /* other config options here */
};

export default nextConfig;

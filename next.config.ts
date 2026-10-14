import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // HTML and Markdown (for AI agents, see src/proxy.ts) share URLs, so
  // responses must vary on Accept.
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "Vary", value: "Accept" }] }];
  },
  images: {
    // Serve AVIF/WebP to browsers that accept them; JPEG fallback otherwise.
    formats: ["image/avif", "image/webp"],
    // Drop the default 3840w breakpoint: source photos are capped at 2400px,
    // so 3840w requests only re-encoded the full original at maximum weight.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
};

export default nextConfig;

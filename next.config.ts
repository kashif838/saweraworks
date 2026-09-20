import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP for anything that cannot take it. Sources stay JPEG.
    formats: ["image/avif", "image/webp"],
    // The hero block caps at 1440px, so nothing above 1920 is ever served.
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
    // Next 16 only serves qualities listed here; Hero asks for 78.
    qualities: [75, 78],
  },
  async redirects() {
    // WordPress leftovers from the audit: keep old URLs alive, send them home.
    return [
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/2026/04/02/hello-world", destination: "/", permanent: true },
      { source: "/about-us/", destination: "/about-us", permanent: true },
    ];
  },
};

export default nextConfig;

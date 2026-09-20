import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tabletop/b2b-ai-dating-saas",
        destination: "/b2b-ai-saas",
        permanent: true,
      },
      {
        source: "/tabletop/b2b-ai-saas",
        destination: "/b2b-ai-saas",
        permanent: true,
      },
      {
        source: "/videogame/rokuroku",
        destination: "/rokuroku",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

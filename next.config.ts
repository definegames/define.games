import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tabletop/b2b-ai-dating-saas",
        destination: "/tabletop/b2b-ai-saas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

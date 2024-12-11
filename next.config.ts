import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/numr",
  assetPrefix: "/numr",
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  generateEtags: false,
  headers: async () => [
    {
      source: "/_next/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store, must-revalidate",
        },
      ],
    },
  ],
};

export default nextConfig;

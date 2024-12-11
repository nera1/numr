import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  webpack: (config) => {
    config.output.chunkLoadTimeout = 60000;
    return config;
  },
  basePath: "/numr",
  assetPrefix: "/numr",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

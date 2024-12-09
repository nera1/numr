import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  generateEtags: false, // gpt에서 시킴
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
  ], // gpt에서 시킴
  webpack: (config) => {
    config.output.chunkLoadTimeout = 60000; // 타임아웃을 60초로 설정
    return config;
  }, // gpt에서 시킴
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/numr", // GitHub 저장소 이름
  assetPrefix: "/numr", // 정적 파일 경로를 저장소 이름으로 설정
  output: "export",
  images: {
    unoptimized: true, // Next.js 이미지 최적화를 비활성화
  },
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
};

export default nextConfig;

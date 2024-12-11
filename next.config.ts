import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  basePath: "/numr", // 리포지토리 이름 추가
  assetPrefix: "/numr", // 정적 파일 경로 설정
};

export default nextConfig;

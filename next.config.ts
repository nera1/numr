import type { NextConfig } from "next";

const debug = process.env.NODE_ENV === "production";
const repository = "numr";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  assetPrefix: debug ? `/${repository}/` : "",
  basePath: debug ? `/${repository}` : "",
  trailingSlash: true, // 모든 경로에 슬래시 추가
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
};

export default nextConfig;

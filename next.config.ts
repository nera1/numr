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
};

export default nextConfig;

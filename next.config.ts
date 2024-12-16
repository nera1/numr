import type { NextConfig } from "next";

const debug = process.env.NODE_ENV === "production";
const repository = "sumr";

const nextConfig: NextConfig = {
  output: "export", // Static export mode
  reactStrictMode: false,
  assetPrefix: debug ? `/${repository}/` : "",
  basePath: debug ? `/${repository}` : "",
  trailingSlash: true,
};

export default nextConfig;

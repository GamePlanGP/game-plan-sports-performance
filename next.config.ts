import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// Vercel serves the app at the domain root, so the GitHub Pages subpath
// (basePath/assetPrefix) must NOT be applied there. Vercel sets this env var.
const isVercel = process.env.VERCEL === "1";
const useGithubPagesBasePath = isProd && !isVercel;

const nextConfig: NextConfig = {
  output: "export",
  basePath: useGithubPagesBasePath ? "/game-plan-sports-performance" : "",
  assetPrefix: useGithubPagesBasePath ? "/game-plan-sports-performance/" : undefined,
  // `output: "export"` has no image optimization server, so images must be
  // served unoptimized. next/image still applies basePath/assetPrefix to the
  // logo asset so it resolves correctly on both Vercel and GitHub Pages.
  images: { unoptimized: true },
};

export default nextConfig;

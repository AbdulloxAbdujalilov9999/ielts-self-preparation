import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // This app is a fully dynamic, localStorage-driven practice tool (every
  // page depends on client-side state), so Cache Components/PPR's static
  // prerendering would require wrapping nearly every page in Suspense for
  // no benefit — disabled.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

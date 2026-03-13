import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export", // Tells Next.js to build static HTML
  images: {
    unoptimized: true, // Prevents image crashes on GitHub Pages
  },

  basePath: "/web-portfolio",
}

export default nextConfig

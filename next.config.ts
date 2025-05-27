import type { NextConfig } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
const domain = new URL(siteUrl).hostname;

const nextConfig: NextConfig = {
  images: {
    domains: [domain],
  },
};

export default nextConfig;

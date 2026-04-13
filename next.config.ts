import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/climatizaciones-nortec-next',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;

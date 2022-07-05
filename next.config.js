/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/two-pizzas",
  assetPrefix: "./two-pizzas",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;

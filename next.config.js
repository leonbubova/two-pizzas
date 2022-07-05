/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/two-pizzas",
  assetPrefix: "",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    unoptimized: true, // ✅ disables built-in optimization (needed for export mode)
  },
  pwa: {
    dest: "public",
    runtimeCaching,
  }
};

module.exports = withPWA(nextConfig);

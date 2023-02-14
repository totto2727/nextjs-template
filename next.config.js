// @ts-check

const {
  createVanillaExtractPlugin,
} = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = withVanillaExtract(nextConfig);

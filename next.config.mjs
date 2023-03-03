import nextMDX from '@next/mdx'
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  eslint: {
    dirs: ["app", "src", ".storybook", "git"],
  },
  experimental: {
    appDir: true,
    mdxRs: true,
    typedRoutes: true,
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
  },
};

const withVanillaExtract = createVanillaExtractPlugin();
const withMDX = nextMDX();

export default withVanillaExtract(withMDX(nextConfig));

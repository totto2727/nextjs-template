import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  eslint: {
    dirs: ['app', 'src', '.storybook', 'git'],
  },
  experimental: {
    appDir: true,
    mdxRs: true,
    typedRoutes: false,
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
  },
}

const withMDX = nextMDX()

export default withMDX(nextConfig)

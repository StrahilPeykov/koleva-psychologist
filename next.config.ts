import type { NextConfig } from 'next'

const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Experimental features
  experimental: {
    mdxRs: true,
    optimizePackageImports: ['lucide-react'],
  },

  // Transpile packages if needed
  transpilePackages: ['next-intl'],

  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,

  // Remove powered by header
  poweredByHeader: false,

  // Compression
  compress: true,

  // ESLint and TypeScript - ignore during build for faster compilation
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = withNextIntl(withMDX(nextConfig))
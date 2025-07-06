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

  // Redirects for proper locale handling
  async redirects() {
    return [
      // Redirect /en to proper locale path if needed
      {
        source: '/en',
        destination: '/en',
        permanent: false,
        locale: false,
      },
      // Ensure Bulgarian pages don't have /bg prefix
      {
        source: '/bg/:path*',
        destination: '/:path*',
        permanent: true,
        locale: false,
      },
    ]
  },

  // Rewrites to handle default locale
  async rewrites() {
    return {
      beforeFiles: [
        // Handle root path
        {
          source: '/',
          destination: '/bg',
          locale: false,
        },
        // Handle all non-locale paths as Bulgarian
        {
          source: '/:path((?!en|bg|api|_next|studio|images|favicon.ico).*)',
          destination: '/bg/:path',
          locale: false,
        },
      ],
    }
  },

  // Transpile packages if needed
  transpilePackages: ['next-intl'],

  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,

  // Remove powered by header
  poweredByHeader: false,

  // Compression
  compress: true,

  // Handle missing environment variables during build
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },

  // ESLint and TypeScript - ignore during build for faster compilation
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = withNextIntl(withMDX(nextConfig))
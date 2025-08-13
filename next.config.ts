import type { NextConfig } from 'next'

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

  // Transpile packages - Keep next-intl for client components
  transpilePackages: ['next-intl'],

  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,

  // Remove powered by header
  poweredByHeader: false,

  // Compression
  compress: true,

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects for SEO and old URLs
  async redirects() {
    return [
      // Redirect old /bg paths to root (if any exist from previous structure)
      {
        source: '/bg',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bg/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ]
  },

  // ESLint and TypeScript
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
}

module.exports = withMDX(nextConfig)
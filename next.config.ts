import type { NextConfig } from 'next'

const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts')

/** @type {import('next').NextConfig} */
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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Experimental features
  experimental: {
    mdxRs: true,
    optimizePackageImports: ['lucide-react'],
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect old URLs to new structure
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
      // Service redirects for SEO
      {
        source: '/services',
        destination: '/#services',
        permanent: false,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: false,
      },
      // Common misspellings and variations
      {
        source: '/psiholog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/psychologist',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/therapist',
        destination: '/en',
        permanent: true,
      },
    ]
  },

  // Headers for security and SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          // Performance headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
        ],
      },
      // Cache headers for static assets
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },

  // Rewrites for API routes and SEO
  async rewrites() {
    return [
      // API routes
      {
        source: '/api/contact',
        destination: '/api/contact',
      },
      // Sitemap rewrites
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      // Service-specific landing pages for SEO
      {
        source: '/psychologist-burgas',
        destination: '/en',
      },
      {
        source: '/psiholog-burgas',
        destination: '/',
      },
      {
        source: '/addiction-therapy-burgas',
        destination: '/en/services/addiction-therapy',
      },
      {
        source: '/trauma-therapy-burgas',
        destination: '/en/services/trauma-therapy',
      },
    ]
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    }

    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },

  // Environment variables
  env: {
    CUSTOM_KEY: 'my-value',
  },
  
  // Compression
  compress: true,

  // PoweredByHeader
  poweredByHeader: false,

  // Generate ETags for pages
  generateEtags: true,

  // Build output settings
  output: 'standalone', // For Docker deployment if needed
  distDir: '.next',

  // Transpile packages if needed
  transpilePackages: ['next-intl'],

  // Internationalization
  i18n: undefined, // Handled by next-intl

  // TypeScript configuration
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },

  // Source maps for debugging (disable in production)
  productionBrowserSourceMaps: false,

  // Logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Performance budgets (optional)
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
}

module.exports = withNextIntl(withMDX(nextConfig))
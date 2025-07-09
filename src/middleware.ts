import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

const middleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['bg', 'en'],
  
  // Bulgarian is the default locale
  defaultLocale: 'bg',
  
  // Use prefixes only when needed (not for default locale)
  localePrefix: 'as-needed',
  
  // Disable automatic locale detection
  localeDetection: false
})

export default function (request: NextRequest) {
  // Skip locale handling for specific paths
  const pathname = request.nextUrl.pathname
  
  // Skip for static assets, API routes, and Sanity Studio
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/studio') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return
  }
  
  return middleware(request)
}

export const config = {
  // Match all paths except static assets and API routes
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|studio|images|robots.txt|sitemap.xml).*)'
  ]
}
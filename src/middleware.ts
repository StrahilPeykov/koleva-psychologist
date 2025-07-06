import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

const middleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['bg', 'en'],
  
  // Bulgarian is the default locale
  defaultLocale: 'bg',
  
  // Never use prefixes for default locale
  localePrefix: 'never',
  
  // Detect locale from Accept-Language header
  localeDetection: false
})

export default function (request: NextRequest) {
  // Skip locale handling for specific paths
  const pathname = request.nextUrl.pathname
  
  // If pathname starts with /en, we handle it with middleware
  // Otherwise, treat it as Bulgarian (default)
  return middleware(request)
}

export const config = {
  // Match all paths except static assets and API routes
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|studio|images|robots.txt|sitemap.xml).*)'
  ]
}
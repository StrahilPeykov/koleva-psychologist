import { NextRequest, NextResponse } from 'next/server'

/**
 * Middleware for handling locales and security headers
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip middleware for static files, API routes, and studio
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/studio') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.startsWith('/apple-touch-icon') ||
    pathname.startsWith('/icon-')
  ) {
    return NextResponse.next()
  }
  
  const response = NextResponse.next()
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  
  // Set locale in response headers for debugging
  if (pathname.startsWith('/en')) {
    response.headers.set('X-Locale', 'en')
  } else {
    response.headers.set('X-Locale', 'bg')
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static files with extensions
     */
    '/((?!api|_next/static|_next/image|favicon.ico|studio|.*\\.).*)',
  ],
}
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['bg', 'en'],
  
  // Used when no locale matches
  defaultLocale: 'bg',
  
  // Use 'as-needed' instead of 'always' to make /bg optional for the default locale
  localePrefix: 'as-needed'
})

export const config = {
  // Match internationalized pathnames and root
  matcher: [
    // Match all paths except those starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - studio (Sanity Studio)
    '/((?!api|_next/static|_next/image|favicon.ico|studio|images|robots.txt|sitemap.xml).*)'
  ]
}
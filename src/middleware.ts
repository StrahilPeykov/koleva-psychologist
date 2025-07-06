import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['bg', 'en'],
  
  // Used when no locale matches - Bulgarian should be default
  defaultLocale: 'bg',
  
  // Use 'as-needed' so default locale (bg) has no prefix
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
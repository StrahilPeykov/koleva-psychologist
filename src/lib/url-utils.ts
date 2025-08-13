/**
 * URL utilities for locale-aware routing
 * Bulgarian (bg) = default locale, no prefix
 * English (en) = requires /en prefix
 */

export type Locale = 'bg' | 'en'

/**
 * Creates locale-aware URLs based on the 'as-needed' localePrefix configuration
 */
export function createLocalePath(path: string, locale: Locale = 'bg'): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  if (locale === 'bg') {
    // Default locale doesn't need prefix
    return normalizedPath
  } else {
    // Non-default locales need prefix
    return normalizedPath === '/' ? `/${locale}` : `/${locale}${normalizedPath}`
  }
}

/**
 * Extracts the path without locale prefix from a pathname
 */
export function extractPathWithoutLocale(pathname: string): string {
  // Remove /en prefix if it exists
  if (pathname.startsWith('/en')) {
    return pathname.replace('/en', '') || '/'
  }
  
  // Bulgarian paths don't have prefix
  return pathname
}

/**
 * Determines the locale from a pathname
 */
export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname.startsWith('/en')) {
    return 'en'
  }
  return 'bg' // Default locale
}

/**
 * Creates the full URL for a given path and locale
 */
export function createFullUrl(path: string, locale: Locale = 'bg'): string {
  const baseUrl = 'https://psiholog-koleva.bg'
  const localePath = createLocalePath(path, locale)
  return `${baseUrl}${localePath}`
}

/**
 * Gets the alternate language URLs for hreflang
 */
export function getAlternateUrls(path: string): Record<string, string> {
  return {
    'bg': createFullUrl(path, 'bg'),
    'en': createFullUrl(path, 'en'),
    'x-default': createFullUrl(path, 'bg'), // Default to Bulgarian
  }
}

/**
 * Switch locale for a given pathname
 */
export function switchLocaleInPath(currentPath: string, newLocale: Locale): string {
  const pathWithoutLocale = extractPathWithoutLocale(currentPath)
  return createLocalePath(pathWithoutLocale, newLocale)
}

/**
 * Check if a path is locale-prefixed
 */
export function isLocalePrefixed(pathname: string): boolean {
  return pathname.startsWith('/en')
}

/**
 * Get canonical URL for SEO
 */
export function getCanonicalUrl(path: string, locale: Locale): string {
  return createFullUrl(path, locale)
}

/**
 * Generate hreflang links for SEO
 */
export function generateHreflangLinks(path: string): Array<{ hreflang: string; href: string }> {
  const alternateUrls = getAlternateUrls(path)
  
  return [
    { hreflang: 'bg', href: alternateUrls.bg },
    { hreflang: 'en', href: alternateUrls.en },
    { hreflang: 'x-default', href: alternateUrls['x-default'] }
  ]
}
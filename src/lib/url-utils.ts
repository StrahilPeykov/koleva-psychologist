/**
 * Creates locale-aware URLs based on the 'as-needed' localePrefix configuration
 * where the default locale (bg) doesn't need a prefix but others do
 */
export function createLocalePath(path: string, locale: string = 'bg'): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  if (locale === 'bg') {
    // Default locale doesn't need prefix
    return normalizedPath === '/' ? '/' : normalizedPath
  } else {
    // Non-default locales need prefix
    return normalizedPath === '/' ? `/${locale}` : `/${locale}${normalizedPath}`
  }
}

/**
 * Extracts the path without locale prefix from a pathname
 */
export function extractPathWithoutLocale(pathname: string, currentLocale: string): string {
  let pathWithoutLocale = pathname
  
  // Remove current locale prefix if it exists
  if (currentLocale === 'en' && pathname.startsWith('/en')) {
    pathWithoutLocale = pathname.replace('/en', '') || '/'
  } else if (currentLocale === 'bg' && pathname.startsWith('/bg')) {
    pathWithoutLocale = pathname.replace('/bg', '') || '/'
  }
  
  return pathWithoutLocale
}

/**
 * Creates the full URL for a given path and locale
 */
export function createFullUrl(path: string, locale: string = 'bg'): string {
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
  }
}
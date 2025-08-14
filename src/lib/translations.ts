import { notFound } from 'next/navigation'

export type Locale = 'bg' | 'en'

export const locales: Locale[] = ['bg', 'en']
export const defaultLocale: Locale = 'bg'

/**
 * Get messages for a specific locale
 */
export async function getLocaleMessages(locale: Locale) {
  if (!locales.includes(locale)) {
    notFound()
  }
  
  try {
    const messages = (await import(`../../messages/${locale}.json`)).default
    return messages
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error)
    notFound()
  }
}

/**
 * Validate locale parameter
 */
export function validateLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

/**
 * Get locale from pathname
 */
export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en')) {
    return 'en'
  }
  return 'bg'
}

/**
 * Create locale-aware path
 */
export function createLocalePath(path: string, locale: Locale): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  if (locale === 'bg') {
    return normalizedPath
  } else {
    return `/en${normalizedPath === '/' ? '' : normalizedPath}`
  }
}

/**
 * Switch locale for current path
 */
export function switchLocale(currentPath: string, newLocale: Locale): string {
  let pathWithoutLocale = currentPath
  
  // Remove /en prefix if present
  if (currentPath.startsWith('/en')) {
    pathWithoutLocale = currentPath.replace('/en', '') || '/'
  }
  
  return createLocalePath(pathWithoutLocale, newLocale)
}

/**
 * Get alternate URLs for hreflang
 */
export function getAlternateUrls(path: string) {
  const baseUrl = 'https://psiholog-koleva.bg'
  
  return {
    bg: `${baseUrl}${createLocalePath(path, 'bg')}`,
    en: `${baseUrl}${createLocalePath(path, 'en')}`,
    'x-default': `${baseUrl}${createLocalePath(path, 'bg')}`
  }
}

/**
 * Get current locale from server context
 */
export function getCurrentLocale(pathname: string): Locale {
  return getLocaleFromPath(pathname)
}

/**
 * Remove locale prefix from path
 */
export function removeLocaleFromPath(pathname: string): string {
  if (pathname.startsWith('/en')) {
    return pathname.replace('/en', '') || '/'
  }
  return pathname
}
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

// Define supported locales
export const locales = ['bg', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'bg'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    notFound()
  }

  const validLocale = locale as Locale

  try {
    const messages = (await import(`../messages/${validLocale}.json`)).default

    return {
      locale: validLocale,
      messages,
      timeZone: 'Europe/Sofia',
      now: new Date(),
      formats: {
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          },
          long: {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
          }
        },
        number: {
          currency: {
            style: 'currency',
            currency: 'BGN'
          }
        }
      }
    }
  } catch (error) {
    console.error(`Failed to load messages for locale: ${validLocale}`, error)
    notFound()
  }
})
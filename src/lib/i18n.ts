import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is defined and validate that it's supported
  const validLocale = locale || 'bg'
  
  if (!['bg', 'en'].includes(validLocale)) {
    throw new Error(`Invalid locale: ${validLocale}`)
  }
  
  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default
  }
})
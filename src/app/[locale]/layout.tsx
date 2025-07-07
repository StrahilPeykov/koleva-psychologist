import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap'
})

// Define locales here instead of importing
const locales = ['bg', 'en'] as const

export function generateStaticParams() {
  return [
    { locale: 'bg' },
    { locale: 'en' }
  ]
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale
  
  if (locale === 'bg') {
    return {
      title: 'Олга Колева - Психолог Бургас | Психотерапевт на Зависимости',
      description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас. Индивидуални и семейни консултации, травма терапия, лечение на тревожност и депресия. 90 мин сесии, 70 лв.',
      keywords: 'психолог бургас, психотерапевт зависимости бургас, травма терапия бургас, тревожност депресия бургас, психолог център хармония, олга колева психолог',
      openGraph: {
        title: 'Олга Колева - Психолог Бургас | Психотерапевт на Зависимости',
        description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас.',
        locale: 'bg_BG',
        type: 'website',
      },
    }
  } else {
    return {
      title: 'Olga Koleva - Psychologist Burgas | Addiction Psychotherapist',
      description: 'Licensed psychologist and addiction psychotherapist in Burgas. Individual and family counseling, trauma therapy, anxiety and depression treatment.',
      keywords: 'psychologist burgas, addiction psychotherapist, trauma therapy, anxiety depression',
      openGraph: {
        title: 'Olga Koleva - Psychologist Burgas | Addiction Psychotherapist',
        description: 'Licensed psychologist and addiction psychotherapist in Burgas.',
        locale: 'en_US',
        type: 'website',
      },
    }
  }
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const locale = params.locale
  
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound()
  }
  
  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-[#FBF8F3] text-[#2E2C29]`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap'
})

export async function generateMetadata() {
  return {
    title: {
      default: 'Олга Колева - Психолог Бургас | Психотерапевт на Зависимости',
      template: '%s | Олга Колева - Психолог Бургас'
    },
    description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас. Индивидуални и семейни консултации, травма терапия, лечение на тревожност и депресия. 90 мин сесии, 70 лв.',
    keywords: 'психолог бургас, психотерапевт зависимости бургас, травма терапия бургас, тревожност депресия бургас, психолог център хармония, олга колева психолог, психологическо консултиране бургас, семейна терапия бургас',
    
    openGraph: {
      title: 'Олга Колева - Психолог Бургас | Психотерапевт на Зависимости',
      description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас.',
      locale: 'bg_BG',
      type: 'website',
      siteName: 'Олга Колева - Психолог',
      url: 'https://psiholog-koleva.bg',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: 'Олга Колева - Психолог Бургас',
      description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас.',
    },
    
    alternates: {
      canonical: 'https://psiholog-koleva.bg',
      languages: {
        'bg': 'https://psiholog-koleva.bg',
        'en': 'https://psiholog-koleva.bg/en',
      },
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    verification: {
      google: 'your-google-verification-code',
    }
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  // For Bulgarian (default) locale
  const locale = 'bg'
  const messages = await getMessages({ locale })

  return (
    <html lang="bg" className={inter.variable} dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8FA7C6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="bg" href="https://psiholog-koleva.bg" />
        <link rel="alternate" hrefLang="en" href="https://psiholog-koleva.bg/en" />
        <link rel="alternate" hrefLang="x-default" href="https://psiholog-koleva.bg" />
      </head>
      <body className={`${inter.className} bg-cream text-charcoal antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
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
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

const locales = ['bg', 'en']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const messages = await getMessages({ locale })
  
  const isHomePage = true // You can determine this based on the route
  
  if (locale === 'bg') {
    return {
      title: 'Олга Колева - Психолог Бургас | Психотерапевт на Зависимости',
      description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас. Индивидуални и семейни консултации, травма терапия, лечение на тревожност и депресия. 90 мин сесии, 70 лв.',
      keywords: 'психолог бургас, психотерапевт зависимости бургас, травма терапия бургас, тревожност депресия бургас, психолог център хармония, олга колева психолог, психологическо консултиране бургас, семейна терапия бургас, психодрама бургас, ОКР лечение бургас',
      authors: [{ name: 'Олга Колева' }],
      creator: 'Олга Колева',
      publisher: 'Психологически център Хармония',
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      metadataBase: new URL('https://psiholog-koleva.bg'),
      alternates: {
        canonical: locale === 'bg' ? 'https://psiholog-koleva.bg' : 'https://psiholog-koleva.bg/en',
        languages: {
          'bg': 'https://psiholog-koleva.bg',
          'en': 'https://psiholog-koleva.bg/en',
        },
      },
      openGraph: {
        title: 'Олга Колева - Психолог Бургас | Психотерапевт на Зависимости',
        description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас. Индивидуални и семейни консултации, травма терапия.',
        url: 'https://psiholog-koleva.bg',
        siteName: 'Олга Колева - Психолог',
        locale: 'bg_BG',
        type: 'website',
        images: [
          {
            url: 'https://psiholog-koleva.bg/images/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Олга Колева - Психолог и Психотерапевт на Зависимости в Бургас',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Олга Колева - Психолог Бургас',
        description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас.',
        images: ['https://psiholog-koleva.bg/images/og-image.jpg'],
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
        google: 'your-google-verification-code', // Add your Google Search Console verification code
      },
    }
  } else {
    return {
      title: 'Olga Koleva - Psychologist Burgas | Addiction Psychotherapist',
      description: 'Licensed psychologist and addiction psychotherapist in Burgas. Individual and family counseling, trauma therapy, anxiety and depression treatment.',
      keywords: 'psychologist burgas, addiction psychotherapist, trauma therapy, anxiety depression, harmony psychological center, olga koleva psychologist',
      authors: [{ name: 'Olga Koleva' }],
      creator: 'Olga Koleva',
      publisher: 'Harmony Psychological Center',
      metadataBase: new URL('https://psiholog-koleva.bg'),
      alternates: {
        canonical: 'https://psiholog-koleva.bg/en',
        languages: {
          'bg': 'https://psiholog-koleva.bg',
          'en': 'https://psiholog-koleva.bg/en',
        },
      },
      openGraph: {
        title: 'Olga Koleva - Psychologist Burgas | Addiction Psychotherapist',
        description: 'Licensed psychologist and addiction psychotherapist in Burgas. Individual and family counseling, trauma therapy.',
        url: 'https://psiholog-koleva.bg/en',
        siteName: 'Olga Koleva - Psychologist',
        locale: 'en_US',
        type: 'website',
        images: [
          {
            url: 'https://psiholog-koleva.bg/images/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Olga Koleva - Psychologist and Addiction Psychotherapist in Burgas',
          },
        ],
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  if (!locales.includes(locale as any)) notFound()
  
  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        {/* Additional SEO tags */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://psiholog-koleva.bg",
              "name": locale === 'bg' ? "Олга Колева - Психолог" : "Olga Koleva - Psychologist",
              "image": "https://psiholog-koleva.bg/images/olga-koleva.jpg",
              "description": locale === 'bg' 
                ? "Лицензиран психолог и психотерапевт на зависимости в Бургас. Индивидуални и семейни консултации, травма терапия."
                : "Licensed psychologist and addiction psychotherapist in Burgas. Individual and family counseling, trauma therapy.",
              "url": "https://psiholog-koleva.bg",
              "telephone": "+359888494533",
              "email": "olgakoleva@abv.bg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Александровска 79",
                "addressLocality": "Бургас",
                "addressCountry": "BG",
                "postalCode": "8000"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 42.5048,
                "longitude": 27.4626
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ],
              "priceRange": "70 BGN",
              "serviceType": locale === 'bg' 
                ? ["Психологическо консултиране", "Психотерапия на зависимости", "Травма терапия", "Семейна терапия"]
                : ["Psychological counseling", "Addiction psychotherapy", "Trauma therapy", "Family therapy"],
              "founder": {
                "@type": "Person",
                "name": "Olga Koleva",
                "jobTitle": locale === 'bg' ? "Психолог и Психотерапевт на Зависимости" : "Psychologist and Addiction Psychotherapist",
                "alumniOf": locale === 'bg' ? "Бургаски свободен университет" : "Burgas Free University"
              },
              "areaServed": {
                "@type": "City",
                "name": locale === 'bg' ? "Бургас" : "Burgas"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": locale === 'bg' ? "Психологически услуги" : "Psychological services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": locale === 'bg' ? "Индивидуална консултация" : "Individual consultation",
                      "description": locale === 'bg' ? "90-минутни сесии за работа с емоционална травма, зависимости, тревожност, депресия" : "90-minute sessions for emotional trauma, addictions, anxiety, depression"
                    },
                    "price": "70",
                    "priceCurrency": "BGN"
                  }
                ]
              }
            })
          }}
        />
        
        {/* Additional meta tags for Bulgarian SEO */}
        <meta name="geo.region" content="BG-07" />
        <meta name="geo.placename" content="Burgas" />
        <meta name="geo.position" content="42.5048;27.4626" />
        <meta name="ICBM" content="42.5048, 27.4626" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <NextIntlClientProvider messages={messages}>
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
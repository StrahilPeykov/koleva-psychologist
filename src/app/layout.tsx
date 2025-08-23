import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Олга Колева - Психолог Бургас | Психотерапевт на Зависимости | Център Хармония',
  description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас. Индивидуални и семейни консултации, травма терапия, лечение на тревожност и депресия. 90 мин сесии, 70 лв. Център Хармония.',
  keywords: 'психолог бургас, психотерапевт зависимости бургас, травма терапия бургас, тревожност депресия бургас, психолог център хармония, олга колева психолог, психологическо консултиране бургас, семейна терапия бургас, психодрама бургас, ОКР лечение бургас, ПТСР терапия бургас, домашно насилие помощ бургас',
  openGraph: {
    title: 'Олга Колева - Психолог Бургас | Психотерапевт на Зависимости',
    description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас. Професионална помощ при емоционални предизвикателства.',
    locale: 'bg_BG',
    type: 'website',
    url: 'https://psiholog-koleva.bg',
    siteName: 'Олга Колева - Психолог',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Олга Колева - Психолог и Психотерапевт в Бургас'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Олга Колева - Психолог Бургас',
    description: 'Професионална психологическа помощ в Бургас',
    images: ['/images/og-image.jpg']
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
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://psiholog-koleva.bg',
    languages: {
      'bg-BG': 'https://psiholog-koleva.bg',
      'ru-RU': 'https://psiholog-koleva.bg/ru',
      'en-US': 'https://psiholog-koleva.bg/en',
    },
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="bg" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8FA7C6" />
        <meta name="msapplication-TileColor" content="#8FA7C6" />
        
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://psiholog-koleva.bg/#organization",
              "name": "Олга Колева - Психолог",
              "alternateName": "Психологически център Хармония",
              "description": "Лицензиран психолог и психотерапевт на зависимости в Бургас",
              "url": "https://psiholog-koleva.bg",
              "telephone": "+359888494533",
              "email": "olgakoleva@abv.bg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Александровска 79",
                "addressLocality": "Бургас",
                "postalCode": "8000",
                "addressCountry": "BG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "42.5048",
                "longitude": "27.4626"
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
              "priceRange": "70 лв.",
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "currenciesAccepted": "BGN",
              "areaServed": {
                "@type": "City",
                "name": "Бургас"
              },
              "serviceType": "Психологически услуги",
              "founder": {
                "@type": "Person",
                "name": "Олга Колева",
                "jobTitle": "Психолог и Психотерапевт на Зависимости",
                "alumniOf": "Бургаски свободен университет",
                "knowsLanguage": ["Bulgarian", "Russian", "English"]
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Психологически услуги",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Индивидуална психотерапия",
                      "description": "90-минутни сесии за работа с емоционални предизвикателства"
                    },
                    "price": "70",
                    "priceCurrency": "BGN"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Семейно консултиране",
                      "description": "Подобряване на взаимоотношенията в семейството"
                    },
                    "price": "70",
                    "priceCurrency": "BGN"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Терапия на зависимости",
                      "description": "Специализирано лечение на различни форми на зависимост"
                    },
                    "price": "70",
                    "priceCurrency": "BGN"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Травма терапия",
                      "description": "ПТСР терапия и работа с травматични преживявания"
                    },
                    "price": "70",
                    "priceCurrency": "BGN"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "120",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "М. П."
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Олга ми помогна да преодолея тревожността, която ме мъчеше години наред. Професионален подход и топла атмосфера."
                }
              ],
              "sameAs": [
                "https://www.facebook.com/olgakoleva.psychologist",
                "https://www.linkedin.com/in/olga-koleva"
              ]
            })
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Колко струва една сесия?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Всяка сесия продължава 90 минути и струва 70 лв. Първата консултация може да бъде безплатна 15-минутна среща за запознаване."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Как да запазя час?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Можете да запазите час онлайн чрез Calendly, да се обадите на +359 888 494 533 или да изпратите имейл на olgakoleva@abv.bg."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Предлагате ли онлайн консултации?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, предлагам онлайн консултации чрез сигурни платформи като Zoom за клиенти извън Бургас или при невъзможност за присъствено посещение."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-cream-light text-charcoal antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
}
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export async function generateMetadata() {
  return {
    title: {
      default: 'Olga Koleva - Psychologist Burgas | Addiction Psychotherapist',
      template: '%s | Olga Koleva - Psychologist Burgas'
    },
    description: 'Licensed psychologist and addiction psychotherapist in Burgas. Individual and family counseling, trauma therapy, anxiety and depression treatment. 90 min sessions, 70 BGN.',
    keywords: 'psychologist burgas, addiction psychotherapist, trauma therapy, anxiety depression, family therapy burgas, psychologist harmony center, olga koleva psychologist',
    
    openGraph: {
      title: 'Olga Koleva - Psychologist Burgas | Addiction Psychotherapist',
      description: 'Licensed psychologist and addiction psychotherapist in Burgas.',
      locale: 'en_US',
      type: 'website',
      siteName: 'Olga Koleva - Psychologist',
      url: 'https://psiholog-koleva.bg/en',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: 'Olga Koleva - Psychologist Burgas',
      description: 'Licensed psychologist and addiction psychotherapist in Burgas.',
    },
    
    alternates: {
      canonical: 'https://psiholog-koleva.bg/en',
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
    }
  }
}

interface EnglishLayoutProps {
  children: React.ReactNode
}

export default function EnglishLayout({ children }: EnglishLayoutProps) {
  return (
    <html lang="en" className={inter.variable} dir="ltr">
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
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
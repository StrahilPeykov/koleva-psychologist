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
    description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас.',
    locale: 'bg_BG',
    type: 'website',
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
      </head>
      <body className={`${inter.className} bg-[#FBF8F3] text-[#2E2C29]`}>
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
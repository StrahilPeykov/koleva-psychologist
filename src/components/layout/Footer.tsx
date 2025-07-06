import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ОК</span>
              </div>
              <div>
                <div className="text-lg font-bold">Олга Колева</div>
                <div className="text-blue-300 text-sm">Психолог & Психотерапевт</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {locale === 'bg' 
                ? "Създавам пространство, в което можеш да бъдеш истински себе си – без маски, без страх."
                : "Creating a space where you can be your authentic self – without masks, without fear."
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              {locale === 'bg' ? 'Бързи връзки' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/articles`} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.articles')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/events`} className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.events')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div className="font-medium">{t('contact.center')}</div>
                  <div>{t('contact.address')}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+359888494533" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {t('contact.phone')}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:olgakoleva@abv.bg" 
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Олга Колева. {locale === 'bg' ? 'Всички права запазени.' : 'All rights reserved.'}
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
                {locale === 'bg' ? 'Поверителност' : 'Privacy Policy'}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">
                {locale === 'bg' ? 'Условия' : 'Terms of Service'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
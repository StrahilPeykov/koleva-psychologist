import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-soft-blue rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-base font-semibold">Олга Колева</div>
                <div className="text-gray-400 text-sm">Психолог & Психотерапевт</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {locale === 'bg' 
                ? "Създавам пространство, в което можеш да бъдеш истински себе си."
                : "Creating a space where you can be your authentic self."
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">
              {locale === 'bg' ? 'Бързи връзки' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  {t('nav.articles')}
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  {t('nav.events')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-4">{t('contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-gray-300">{t('contact.center')}</div>
                  <div className="text-gray-400">{t('contact.address')}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a 
                  href="tel:+359888494533" 
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t('contact.phone')}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a 
                  href="mailto:olgakoleva@abv.bg" 
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Олга Колева. {locale === 'bg' ? 'Всички права запазени.' : 'All rights reserved.'}
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                {locale === 'bg' ? 'Поверителност' : 'Privacy Policy'}
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                {locale === 'bg' ? 'Условия' : 'Terms of Service'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
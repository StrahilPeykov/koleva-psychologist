import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { Phone, Mail, MapPin, Heart, Flower2 } from 'lucide-react'

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <footer className="bg-gradient-to-br from-[#3A526B] to-[#4A6B8A] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#8FA7C6]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A8C4E1]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-soft-blue to-sky-blue rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold">Олга Колева</div>
                <div className="text-sky-blue text-sm">Психолог & Психотерапевт</div>
              </div>
            </div>
            <p className="text-powder-blue/80 text-sm leading-relaxed max-w-sm">
              {locale === 'bg' 
                ? "Създавам пространство, в което можеш да бъдеш истински себе си – без маски, без страх."
                : "Creating a space where you can be your authentic self – without masks, without fear."
              }
            </p>
            <div className="flex items-center space-x-2 text-sky-blue/60">
              <Flower2 className="w-4 h-4" />
              <span className="text-xs italic">Център "Хармония"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-powder-blue">
              {locale === 'bg' ? 'Бързи връзки' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-powder-blue/70 hover:text-sky-blue transition-colors duration-300 text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-powder-blue/70 hover:text-sky-blue transition-colors duration-300 text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-powder-blue/70 hover:text-sky-blue transition-colors duration-300 text-sm">
                  {t('nav.articles')}
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-powder-blue/70 hover:text-sky-blue transition-colors duration-300 text-sm">
                  {t('nav.events')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-powder-blue">{t('contact.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-soft-blue mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-medium text-powder-blue/90">{t('contact.center')}</div>
                  <div className="text-powder-blue/70">{t('contact.address')}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-blue flex-shrink-0" />
                <a 
                  href="tel:+359888494533" 
                  className="text-sm text-powder-blue/70 hover:text-sky-blue transition-colors duration-300"
                >
                  {t('contact.phone')}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-powder-blue flex-shrink-0" />
                <a 
                  href="mailto:olgakoleva@abv.bg" 
                  className="text-sm text-powder-blue/70 hover:text-sky-blue transition-colors duration-300"
                >
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-soft-blue/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-powder-blue/60">
              © {new Date().getFullYear()} Олга Колева. {locale === 'bg' ? 'Всички права запазени.' : 'All rights reserved.'}
            </div>
            <div className="flex items-center space-x-6 text-sm text-powder-blue/60">
              <Link href="/privacy" className="hover:text-sky-blue transition-colors duration-300">
                {locale === 'bg' ? 'Поверителност' : 'Privacy Policy'}
              </Link>
              <Link href="/terms" className="hover:text-sky-blue transition-colors duration-300">
                {locale === 'bg' ? 'Условия' : 'Terms of Service'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
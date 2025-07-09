'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X, Globe, Phone, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.articles'), href: '/articles' },
    { name: t('nav.events'), href: '/events' },
    { name: t('nav.contact'), href: '/#contact' },
  ]

  const switchLocale = (newLocale: string) => {
    if (locale === newLocale) {
      setIsLangMenuOpen(false)
      return
    }

    // Simple locale switching - just replace or add locale prefix
    let newPath = pathname
    
    // Remove any existing locale prefix
    if (pathname.startsWith('/en')) {
      newPath = pathname.slice(3) || '/'
    }
    
    // Add new locale prefix if not Bulgarian
    if (newLocale === 'en') {
      newPath = '/en' + (newPath === '/' ? '' : newPath)
    }
    
    router.push(newPath)
    setIsLangMenuOpen(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-soft-blue rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-base font-semibold text-charcoal">
                  Олга Колева
                </div>
                <div className="text-xs text-soft-blue">
                  Психолог & Терапевт
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-soft-blue font-medium transition-all duration-300 hover:translate-y-[-1px]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-charcoal hover:text-soft-blue hover:bg-powder-blue/30 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{locale.toUpperCase()}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-xl shadow-xl border border-gray-cream/20 overflow-hidden">
                  <button
                    onClick={() => switchLocale('bg')}
                    className={`block w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                      locale === 'bg' 
                        ? 'bg-soft-blue text-white font-medium' 
                        : 'text-charcoal hover:bg-powder-blue/30'
                    }`}
                  >
                    BG
                  </button>
                  <button
                    onClick={() => switchLocale('en')}
                    className={`block w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                      locale === 'en' 
                        ? 'bg-soft-blue text-white font-medium' 
                        : 'text-charcoal hover:bg-powder-blue/30'
                    }`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>

            {/* Book Session Button */}
            <Button asChild className="bg-gradient-to-r from-soft-blue to-sky-blue hover:from-sky-blue hover:to-soft-blue text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="/#booking">
                <Phone className="w-4 h-4 mr-2" />
                {t('nav.book')}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-charcoal hover:text-soft-blue hover:bg-powder-blue/30 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-cream/30 mt-2 pt-4 pb-4 animate-fade-in">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-charcoal hover:text-soft-blue hover:bg-powder-blue/20 rounded-lg font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-gray-cream/30 pt-4 mt-4">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm text-charcoal">Език:</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        switchLocale('bg')
                        setIsMenuOpen(false)
                      }}
                      className={`px-3 py-1 text-xs rounded-md transition-all duration-300 ${
                        locale === 'bg' 
                          ? 'bg-soft-blue text-white' 
                          : 'text-charcoal bg-powder-blue/30'
                      }`}
                    >
                      BG
                    </button>
                    <button
                      onClick={() => {
                        switchLocale('en')
                        setIsMenuOpen(false)
                      }}
                      className={`px-3 py-1 text-xs rounded-md transition-all duration-300 ${
                        locale === 'en' 
                          ? 'bg-soft-blue text-white' 
                          : 'text-charcoal bg-powder-blue/30'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                
                <div className="px-3 pt-2">
                  <Button asChild className="w-full bg-gradient-to-r from-soft-blue to-sky-blue hover:from-sky-blue hover:to-soft-blue text-white shadow-lg">
                    <Link href="/#booking" onClick={() => setIsMenuOpen(false)}>
                      <Phone className="w-4 h-4 mr-2" />
                      {t('nav.book')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
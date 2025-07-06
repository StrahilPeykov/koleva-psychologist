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
    <header className="bg-gradient-to-r from-warm-cream to-white shadow-soft border-b border-warm-sand/20 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-warm-terracotta to-warm-rose rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-warm-sage rounded-full opacity-60"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-warm-charcoal group-hover:text-warm-terracotta transition-colors">
                  Олга Колева
                </div>
                <div className="text-sm text-warm-terracotta font-medium">
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
                className="text-warm-charcoal hover:text-warm-terracotta font-medium transition-all duration-300 hover:translate-y-[-1px]"
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
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-warm-charcoal hover:text-warm-terracotta hover:bg-warm-sand/30 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{locale.toUpperCase()}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-xl shadow-xl border border-warm-sand/20 overflow-hidden">
                  <button
                    onClick={() => switchLocale('bg')}
                    className={`block w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                      locale === 'bg' 
                        ? 'bg-warm-terracotta text-white font-medium' 
                        : 'text-warm-charcoal hover:bg-warm-sand/30'
                    }`}
                  >
                    BG
                  </button>
                  <button
                    onClick={() => switchLocale('en')}
                    className={`block w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                      locale === 'en' 
                        ? 'bg-warm-terracotta text-white font-medium' 
                        : 'text-warm-charcoal hover:bg-warm-sand/30'
                    }`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>

            {/* Book Session Button */}
            <Button asChild className="bg-gradient-to-r from-warm-terracotta to-warm-rose hover:from-warm-rose hover:to-warm-terracotta text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
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
              className="p-2 rounded-lg text-warm-charcoal hover:text-warm-terracotta hover:bg-warm-sand/30 transition-all duration-300"
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
          <div className="lg:hidden border-t border-warm-sand/20 mt-2 pt-4 pb-4 animate-fade-in">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-warm-charcoal hover:text-warm-terracotta hover:bg-warm-sand/20 rounded-lg font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t border-warm-sand/20 pt-4 mt-4">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm text-warm-charcoal">Език:</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        switchLocale('bg')
                        setIsMenuOpen(false)
                      }}
                      className={`px-3 py-1 text-xs rounded-md transition-all duration-300 ${
                        locale === 'bg' 
                          ? 'bg-warm-terracotta text-white' 
                          : 'text-warm-charcoal bg-warm-sand/30'
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
                          ? 'bg-warm-terracotta text-white' 
                          : 'text-warm-charcoal bg-warm-sand/30'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                
                <div className="px-3 pt-2">
                  <Button asChild className="w-full bg-gradient-to-r from-warm-terracotta to-warm-rose hover:from-warm-rose hover:to-warm-terracotta text-white shadow-lg">
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
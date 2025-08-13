'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X, Globe, Phone, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getLocaleFromPath, switchLocale, type Locale } from '@/lib/translations'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const t = useTranslations()
  const locale = useLocale() as Locale
  const pathname = usePathname()
  const router = useRouter()

  // Determine current locale from pathname for this structure
  const currentLocale = getLocaleFromPath(pathname)
  
  // Create navigation links based on current locale
  const navigation = [
    { name: t('nav.home'), href: currentLocale === 'en' ? '/en' : '/' },
    { name: t('nav.about'), href: currentLocale === 'en' ? '/en/about' : '/about' },
    { name: t('nav.services'), href: currentLocale === 'en' ? '/en#services' : '/#services' },
    { name: t('nav.articles'), href: currentLocale === 'en' ? '/en/articles' : '/articles' },
    { name: t('nav.events'), href: currentLocale === 'en' ? '/en/events' : '/events' },
    { name: t('nav.contact'), href: currentLocale === 'en' ? '/en#contact' : '/#contact' },
  ]

  const handleLocaleSwitch = (newLocale: Locale) => {
    if (currentLocale === newLocale) {
      setIsLangMenuOpen(false)
      return
    }
    
    setIsLangMenuOpen(false)
    
    // Get the new path for the target locale
    const newPath = switchLocale(pathname, newLocale)
    
    // Navigate to the new path
    router.push(newPath)
  }

  // Handle clicks outside language menu
  const handleLanguageMenuToggle = () => {
    setIsLangMenuOpen(!isLangMenuOpen)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={currentLocale === 'en' ? '/en' : '/'} className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-soft-blue rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-base font-semibold text-charcoal">
                  Олга Колева
                </div>
                <div className="text-xs text-soft-blue">
                  {currentLocale === 'en' ? 'Psychologist & Therapist' : 'Психолог & Терапевт'}
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
                onClick={handleLanguageMenuToggle}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-charcoal hover:text-soft-blue hover:bg-powder-blue/30 transition-all duration-300"
                aria-label="Change language"
                aria-expanded={isLangMenuOpen}
                aria-haspopup="true"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
              </button>
              
              {isLangMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-24 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-20">
                    <button
                      onClick={() => handleLocaleSwitch('bg')}
                      className={`block w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                        currentLocale === 'bg' 
                          ? 'bg-soft-blue text-white font-medium' 
                          : 'text-charcoal hover:bg-powder-blue/30'
                      }`}
                    >
                      BG
                    </button>
                    <button
                      onClick={() => handleLocaleSwitch('en')}
                      className={`block w-full text-left px-4 py-3 text-sm transition-all duration-200 ${
                        currentLocale === 'en' 
                          ? 'bg-soft-blue text-white font-medium' 
                          : 'text-charcoal hover:bg-powder-blue/30'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Book Session Button */}
            <Button asChild className="bg-gradient-to-r from-soft-blue to-sky-blue hover:from-sky-blue hover:to-soft-blue text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href={currentLocale === 'en' ? '/en#booking' : '/#booking'}>
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
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
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
          <div className="lg:hidden border-t border-gray-100 mt-2 pt-4 pb-4 animate-fade-in">
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
              
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm text-charcoal">
                    {currentLocale === 'en' ? 'Language:' : 'Език:'}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        handleLocaleSwitch('bg')
                        setIsMenuOpen(false)
                      }}
                      className={`px-3 py-1 text-xs rounded-md transition-all duration-300 ${
                        currentLocale === 'bg' 
                          ? 'bg-soft-blue text-white' 
                          : 'text-charcoal bg-powder-blue/30'
                      }`}
                    >
                      BG
                    </button>
                    <button
                      onClick={() => {
                        handleLocaleSwitch('en')
                        setIsMenuOpen(false)
                      }}
                      className={`px-3 py-1 text-xs rounded-md transition-all duration-300 ${
                        currentLocale === 'en' 
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
                    <Link href={currentLocale === 'en' ? '/en#booking' : '/#booking'} onClick={() => setIsMenuOpen(false)}>
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
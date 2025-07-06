'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const t = useTranslations()
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  // Helper function to create locale-aware URLs
  const createLocalePath = (path: string) => {
    if (locale === 'bg') {
      // Default locale doesn't need prefix
      return path
    } else {
      // Non-default locales need prefix
      return path === '/' ? '/en' : `/en${path}`
    }
  }

  const navigation = [
    { name: t('nav.home'), href: createLocalePath('/') },
    { name: t('nav.about'), href: createLocalePath('/about') },
    { name: t('nav.services'), href: createLocalePath('/#services') },
    { name: t('nav.articles'), href: createLocalePath('/articles') },
    { name: t('nav.events'), href: createLocalePath('/events') },
    { name: t('nav.contact'), href: createLocalePath('/#contact') },
  ]

  const switchLocale = (newLocale: string) => {
    // Don't do anything if we're already on the target locale
    if (locale === newLocale) {
      setIsLangMenuOpen(false)
      return
    }

    // Get the current pathname without any locale prefix
    let pathWithoutLocale = pathname
    
    // Remove existing locale prefix if present
    if (pathname.startsWith('/en/')) {
      pathWithoutLocale = pathname.substring(3) // Remove '/en'
    } else if (pathname === '/en') {
      pathWithoutLocale = '/'
    } else if (pathname.startsWith('/bg/')) {
      pathWithoutLocale = pathname.substring(3) // Remove '/bg'  
    } else if (pathname === '/bg') {
      pathWithoutLocale = '/'
    }
    // If pathname doesn't start with a locale, assume it's already clean

    // Build new path based on target locale
    let newPath: string
    if (newLocale === 'bg') {
      // Bulgarian is default, no prefix needed
      newPath = pathWithoutLocale || '/'
    } else {
      // Other locales need prefix
      newPath = `/en${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    }
    
    console.log('Language switch:', {
      from: locale,
      to: newLocale,
      currentPath: pathname,
      pathWithoutLocale,
      newPath
    })
    
    router.push(newPath)
    setIsLangMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={createLocalePath('/')} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ОК</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-gray-900">Олга Колева</div>
                <div className="text-sm text-blue-600">Психолог</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
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
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{locale.toUpperCase()}</span>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg border">
                  <button
                    onClick={() => switchLocale('bg')}
                    className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                      locale === 'bg' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    BG
                  </button>
                  <button
                    onClick={() => switchLocale('en')}
                    className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                      locale === 'en' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>

            {/* Book Session Button */}
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href={createLocalePath('/#booking')}>
                {t('nav.book')}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600"
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
          <div className="lg:hidden border-t mt-2 pt-4 pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t pt-4 mt-4">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-sm text-gray-700">Език:</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => switchLocale('bg')}
                      className={`px-2 py-1 text-xs rounded ${
                        locale === 'bg' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'
                      }`}
                    >
                      BG
                    </button>
                    <button
                      onClick={() => switchLocale('en')}
                      className={`px-2 py-1 text-xs rounded ${
                        locale === 'en' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                
                <div className="px-3 pt-2">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href={createLocalePath('/#booking')}>
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
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Heart, Calendar, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
    
    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [isMenuOpen])

  const navigation = [
    { name: 'Начало', href: '/' },
    { name: 'За мен', href: '/about' },
    { name: 'Услуги', href: '/services' },
    { name: 'Статии', href: '/articles' },
    { name: 'Контакт', href: '/contact' },
  ]

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-soft-blue to-sky-blue rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                <Heart className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm lg:text-base font-bold text-charcoal group-hover:text-soft-blue transition-colors">
                  Олга Колева
                </div>
                <div className="text-xs text-soft-blue font-medium">
                  Психолог
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-50 ${
                    pathname === item.href 
                      ? 'text-soft-blue bg-soft-blue/10' 
                      : 'text-charcoal hover:text-soft-blue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button 
                asChild 
                className="bg-soft-blue hover:bg-steel-blue text-white"
              >
                <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Запази час
                </a>
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <Button
                size="sm"
                className="bg-soft-blue hover:bg-steel-blue text-white px-3"
                asChild
              >
                <a href="tel:+359888494533">
                  <Phone className="w-4 h-4" />
                </a>
              </Button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-charcoal hover:text-soft-blue hover:bg-gray-50 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Full screen backdrop */}
          <div 
            className="absolute inset-0 bg-white"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="relative z-50 h-full flex flex-col">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-soft-blue to-sky-blue rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-charcoal">Олга Колева</div>
                  <div className="text-xs text-soft-blue">Лицензиран психолог</div>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-charcoal hover:text-soft-blue hover:bg-gray-50"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Menu Content */}
            <div className="flex-1 overflow-y-auto bg-white">
              <div className="p-4">
                {/* Navigation */}
                <div className="space-y-1 mb-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-4 text-lg font-medium rounded-xl transition-colors ${
                        pathname === item.href
                          ? 'text-soft-blue bg-soft-blue/10 border border-soft-blue/20'
                          : 'text-charcoal hover:text-soft-blue hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div className="text-2xl font-bold text-blue-700 mb-1">70 лв</div>
                    <div className="text-xs text-blue-600">90 мин сесия</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                    <div className="text-sm font-bold text-green-700 mb-1">Безплатна</div>
                    <div className="text-xs text-green-600">консултация</div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h3 className="font-semibold text-charcoal mb-3 text-sm">Контакт</h3>
                  <div className="space-y-3">
                    <a 
                      href="tel:+359888494533"
                      className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone className="w-5 h-5 text-soft-blue mr-3" />
                      <div>
                        <div className="font-medium text-charcoal">+359 888 494 533</div>
                        <div className="text-xs text-gray-600">Обадете се сега</div>
                      </div>
                    </a>
                    
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-charcoal">ул. Александровска 79</div>
                        <div className="text-xs text-gray-600">Бургас</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-white rounded-lg">
                      <Clock className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-sm text-charcoal">Пон-Пет: 9:00-18:00</div>
                        <div className="text-xs text-gray-600">Съб: 10:00-16:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Bottom CTA */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <Button 
                className="w-full bg-gradient-to-r from-soft-blue to-sky-blue hover:from-steel-blue hover:to-soft-blue text-white shadow-lg" 
                size="lg"
                asChild
              >
                <a 
                  href="https://calendly.com/olga-koleva" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Запази час онлайн
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
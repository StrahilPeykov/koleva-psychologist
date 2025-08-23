'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Heart, Calendar } from 'lucide-react'
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo - Simplified for mobile */}
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

          {/* Desktop Navigation - Hidden on mobile */}
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

          {/* Desktop CTA - Hidden on mobile */}
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
            {/* Phone Button - More prominent */}
            <Button
              size="sm"
              className="bg-soft-blue hover:bg-steel-blue text-white px-3"
              asChild
            >
              <a href="tel:+359888494533">
                <Phone className="w-4 h-4" />
              </a>
            </Button>
            
            {/* Mobile menu button */}
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

        {/* Mobile menu - Simplified */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-14 bg-white z-50 lg:hidden">
            <div className="container mx-auto px-4 py-6">
              {/* Navigation */}
              <div className="space-y-1 mb-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                      pathname === item.href
                        ? 'text-soft-blue bg-soft-blue/10'
                        : 'text-charcoal hover:text-soft-blue hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile CTAs */}
              <div className="space-y-3">
                <Button 
                  className="bg-soft-blue hover:bg-steel-blue text-white w-full" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://calendly.com/olga-koleva" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Запази час онлайн
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10 w-full"
                  asChild
                >
                  <a href="tel:+359888494533" onClick={() => setIsMenuOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    +359 888 494 533
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
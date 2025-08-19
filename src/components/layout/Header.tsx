'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Heart } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Начало', href: '/' },
    { name: 'За мен', href: '/about' },
    { name: 'Услуги', href: '/#services' },
    { name: 'Статии', href: '/articles' },
    { name: 'Събития', href: '/events' },
    { name: 'Контакт', href: '/#contact' },
  ]

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
            {/* Book Session Button */}
            <Button asChild className="bg-gradient-to-r from-soft-blue to-sky-blue hover:from-sky-blue hover:to-soft-blue text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link href="/#booking">
                <Phone className="w-4 h-4 mr-2" />
                Запази час
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
                <div className="px-3 pt-2">
                  <Button asChild className="w-full bg-gradient-to-r from-soft-blue to-sky-blue hover:from-sky-blue hover:to-soft-blue text-white shadow-lg">
                    <Link href="/#booking" onClick={() => setIsMenuOpen(false)}>
                      <Phone className="w-4 h-4 mr-2" />
                      Запази час
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
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Heart, Calendar, ChevronDown, Star, Award, Globe, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
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
    { 
      name: 'Услуги', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Всички услуги', href: '/services', icon: <Star className="w-4 h-4" /> },
        { name: 'Индивидуална терапия', href: '/services/individual-therapy', icon: <Heart className="w-4 h-4" /> },
        { name: 'Семейно консултиране', href: '/services/family-therapy', icon: <Heart className="w-4 h-4" /> },
        { name: 'Терапия на зависимости', href: '/services/addiction-therapy', icon: <Heart className="w-4 h-4" /> },
        { name: 'Травма терапия', href: '/services/trauma-therapy', icon: <Heart className="w-4 h-4" /> }
      ]
    },
    { name: 'Статии', href: '/articles' },
    { name: 'Събития', href: '/events' },
    { name: 'Контакт', href: '/contact' },
  ]

  const quickActions = [
    {
      name: 'Безплатна консултация',
      href: 'https://calendly.com/olga-koleva/consultation',
      icon: <MessageCircle className="w-4 h-4" />,
      variant: 'outline' as const
    }
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100'
    }`}>
      <nav className="container mx-auto px-4" aria-label="Top">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Enhanced for mobile */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-soft-blue to-sky-blue rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                {/* Credential badge */}
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <Award className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-base sm:text-lg font-bold text-charcoal group-hover:text-soft-blue transition-colors">
                  Олга Колева
                </div>
                <div className="text-[10px] sm:text-xs text-soft-blue font-medium flex items-center">
                  <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                  Лицензиран психолог
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-50 ${
                        pathname.startsWith('/services') 
                          ? 'text-soft-blue bg-soft-blue/10' 
                          : 'text-charcoal hover:text-soft-blue'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`w-3 h-3 ml-1 transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Dropdown */}
                    <div 
                      className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transition-all duration-200 ${
                        isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center px-4 py-3 text-sm text-charcoal hover:bg-gray-50 hover:text-soft-blue transition-colors"
                        >
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                            {dropdownItem.icon}
                          </div>
                          {dropdownItem.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          href="https://calendly.com/olga-koleva"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-3 text-sm text-soft-blue hover:bg-soft-blue/10 transition-colors"
                        >
                          <div className="w-8 h-8 bg-soft-blue/10 rounded-lg flex items-center justify-center mr-3">
                            <Calendar className="w-4 h-4 text-soft-blue" />
                          </div>
                          Запази час директно
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-50 ${
                      pathname === item.href 
                        ? 'text-soft-blue bg-soft-blue/10' 
                        : 'text-charcoal hover:text-soft-blue'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Selector */}
            <div className="flex items-center space-x-1 text-xs">
              <Globe className="w-3 h-3 text-gray-400" />
              <span className="text-gray-500">БГ</span>
              <span className="text-gray-300">|</span>
              <button className="text-gray-400 hover:text-soft-blue transition-colors">RU</button>
              <span className="text-gray-300">|</span>
              <button className="text-gray-400 hover:text-soft-blue transition-colors">EN</button>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-2">
              {quickActions.map((action) => (
                <Button
                  key={action.name}
                  variant={action.variant}
                  size="sm"
                  className="border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10"
                  asChild
                >
                  <a 
                    href={action.href} 
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {action.icon}
                    <span className="ml-1.5 hidden xl:inline">{action.name}</span>
                  </a>
                </Button>
              ))}
            </div>

            {/* Main CTA */}
            <Button 
              asChild 
              className="bg-gradient-to-r from-soft-blue to-sky-blue hover:from-sky-blue hover:to-soft-blue text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Запази час
              </a>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Phone Button - visible on mobile */}
            <Button
              size="sm"
              variant="ghost"
              className="p-2"
              asChild
            >
              <a href="tel:+359888494533" aria-label="Call">
                <Phone className="w-5 h-5 text-soft-blue" />
              </a>
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-charcoal hover:text-soft-blue hover:bg-powder-blue/30 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu - Full screen overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 bg-white z-50 lg:hidden overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              {/* Quick stats in mobile */}
              <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                  <div className="text-base sm:text-lg font-bold text-soft-blue">500+</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">клиенти</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                  <div className="text-base sm:text-lg font-bold text-steel-blue">95%</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">удовлетвореност</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                  <div className="text-base sm:text-lg font-bold text-sky-blue">24ч</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">отговор</div>
                </div>
              </div>

              <div className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <Link
                          href={item.href}
                          className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                            pathname === item.href
                              ? 'text-soft-blue bg-soft-blue/10'
                              : 'text-charcoal hover:text-soft-blue hover:bg-powder-blue/20'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdownItems?.slice(1).map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-soft-blue hover:bg-gray-50 rounded-lg transition-all duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.icon}
                              <span className="ml-2">{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                          pathname === item.href
                            ? 'text-soft-blue bg-soft-blue/10'
                            : 'text-charcoal hover:text-soft-blue hover:bg-powder-blue/20'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="border-t border-gray-100 pt-6 mt-6">
                  <div className="grid grid-cols-1 gap-3">
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
                  
                  {/* Languages in mobile */}
                  <div className="flex justify-center space-x-4 mt-6 text-sm">
                    <button className="text-soft-blue font-medium">Български</button>
                    <button className="text-gray-400 hover:text-soft-blue transition-colors">Русский</button>
                    <button className="text-gray-400 hover:text-soft-blue transition-colors">English</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
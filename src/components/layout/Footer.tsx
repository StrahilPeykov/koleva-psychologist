'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  Calendar,
  Clock,
  Star,
  Award,
  Shield,
  Globe,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
  ExternalLink,
  AlertTriangle
} from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubscribed(true)
    setIsSubmitting(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerSections = {
    services: [
      { name: 'Индивидуална терапия', href: '/services/individual-therapy' },
      { name: 'Семейно консултиране', href: '/services/family-therapy' },
      { name: 'Терапия на зависимости', href: '/services/addiction-therapy' },
      { name: 'Травма терапия', href: '/services/trauma-therapy' },
      { name: 'Онлайн консултации', href: '/services' }
    ],
    resources: [
      { name: 'Статии', href: '/articles' },
      { name: 'Събития', href: '/events' },
      { name: 'Често задавани въпроси', href: '/faq' },
      { name: 'Ресурси за кризи', href: '/crisis-resources' },
      { name: 'Записи на срещи', href: 'https://calendly.com/olga-koleva', external: true }
    ],
    legal: [
      { name: 'Политика за поверителност', href: '/privacy' },
      { name: 'Общи условия', href: '/terms' },
      { name: 'Етичен кодекс', href: '/ethics' },
      { name: 'Жалби и оплаквания', href: '/complaints' },
      { name: 'Достъпност', href: '/accessibility' }
    ]
  }

  const certifications = [
    { name: 'WAPP', description: 'Позитивна психотерапия' },
    { name: 'БПС', description: 'Българска психологическа сдружба' },
    { name: 'OH Cards', description: 'Сертифициран фасилитатор' }
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: 'Instagram', href: '#', icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" /> }
  ]

  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-soft-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-sky-blue rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Newsletter Section - Mobile Optimized */}
          <div className="bg-gradient-to-r from-soft-blue/20 to-sky-blue/20 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Останете в контакт</h3>
                <p className="text-blue-100 text-sm md:text-base mb-3 md:mb-4">
                  Получавайте полезни съвети за психично здраве и информация за нови услуги
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-blue-200">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Месечен бюлетин</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Полезни ресурси</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Събития</span>
                  </div>
                </div>
              </div>
              
              <div>
                {isSubscribed ? (
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 text-center">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-green-100 font-medium text-sm md:text-base">Благодарим за абонамента!</p>
                    <p className="text-green-200 text-xs md:text-sm">Ще получите потвърждение по имейл.</p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        placeholder="Вашият имейл адрес"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg placeholder-blue-200 text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white/30"
                        required
                      />
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-white text-soft-blue hover:bg-gray-100 px-4 md:px-6"
                        size="sm"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-soft-blue border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-[10px] md:text-xs text-blue-200">
                      Можете да се отпишете по всяко време. Спазваме вашата поверителност.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Main Footer Sections - Mobile Optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-soft-blue to-sky-blue rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg md:text-xl font-bold">Олга Колева</div>
                  <div className="text-gray-400 text-xs md:text-sm">Психолог & Терапевт</div>
                </div>
              </div>
              
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                Създавам пространство, в което можеш да бъдеш истински себе си – без маски, без страх.
              </p>

              {/* Certifications - Hide on mobile */}
              <div className="space-y-2 mb-4 md:mb-6 hidden md:block">
                <h4 className="text-xs md:text-sm font-semibold text-white mb-3">Сертификати</h4>
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="w-3 h-3 text-soft-blue" />
                    <span className="text-xs text-gray-400">{cert.name} - {cert.description}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services - Hide on very small screens */}
            <div className="hidden sm:block">
              <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6 flex items-center">
                <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 text-soft-blue" />
                Услуги
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {footerSections.services.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources - Hide on very small screens */}
            <div className="hidden sm:block">
              <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6 flex items-center">
                <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 text-sky-blue" />
                Ресурси
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {footerSections.resources.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-xs md:text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                      {item.external && <ExternalLink className="w-3 h-3 ml-1 opacity-60" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6 flex items-center">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2 text-steel-blue" />
                Контакт
              </h3>
              
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs md:text-sm">
                    <div className="text-white font-medium">Център Хармония</div>
                    <div className="text-gray-400">ул. Александровска 79</div>
                    <div className="text-gray-400">Бургас 8000</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
                  <a 
                    href="tel:+359888494533" 
                    className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    +359 888 494 533
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
                  <a 
                    href="mailto:olgakoleva@abv.bg" 
                    className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors duration-200 break-all"
                  >
                    olgakoleva@abv.bg
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs md:text-sm text-gray-400">
                    <div>Пон-Пет: 9:00-18:00</div>
                    <div>Съб: 10:00-16:00</div>
                  </div>
                </div>
              </div>

              {/* Quick Legal Links - Mobile Hidden */}
              <div className="space-y-2 hidden md:block">
                <h4 className="text-xs md:text-sm font-semibold text-white">Правни документи</h4>
                {footerSections.legal.slice(0, 2).map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className="block text-xs text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Section - Mobile Optimized */}
          <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 md:p-6 mb-6 md:mb-8">
            <div className="flex items-start space-x-3 md:space-x-4">
              <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-400 flex-shrink-0 mt-0.5 md:mt-1" />
              <div>
                <h3 className="font-semibold text-red-100 mb-1 md:mb-2 text-sm md:text-base">Кризисна помощ 24/7</h3>
                <p className="text-red-200 text-xs md:text-sm mb-2 md:mb-3">
                  При мисли за самонараняване или кризисна ситуация се обадете незабавно:
                </p>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4 text-xs md:text-sm">
                  <a 
                    href="tel:0800201000" 
                    className="bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors font-medium inline-block text-center"
                  >
                    0800 20 100 (безплатна)
                  </a>
                  <a 
                    href="tel:112" 
                    className="bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors font-medium inline-block text-center"
                  >
                    112 (спешни)
                  </a>
                  <a 
                    href="tel:+359888494533" 
                    className="border border-red-400 text-red-200 hover:bg-red-500/20 px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors inline-block text-center"
                  >
                    Олга Колева
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar - Mobile Optimized */}
          <div className="border-t border-gray-700 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-xs md:text-sm text-gray-400 text-center md:text-left">
                © {new Date().getFullYear()} Олга Колева. Всички права запазени.
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs md:text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Поверителност
                </Link>
                <span className="hidden sm:inline">•</span>
                <Link href="/terms" className="hover:text-white transition-colors duration-200">
                  Условия
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-[10px] md:text-xs text-gray-400">
                  <Globe className="w-3 h-3" />
                  <span>БГ</span>
                  <span>|</span>
                  <button className="hover:text-white transition-colors">RU</button>
                  <span>|</span>
                  <button className="hover:text-white transition-colors">EN</button>
                </div>
                
                <button
                  onClick={scrollToTop}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
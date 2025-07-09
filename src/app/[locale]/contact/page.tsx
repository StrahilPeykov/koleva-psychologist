"use client"

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Car,
  Bus,
  Navigation,
  Shield,
  Heart,
  Users,
  MessageCircle,
  Send
} from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Съобщението е изпратено! Ще се свържа с вас в най-скоро време.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-cream-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Свържете се с мен
            </h1>
            <p className="text-lg text-gray-medium mb-6">
              Готова съм да ви помогна в пътуването към по-добро психично здраве
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Phone className="w-3.5 h-3.5 text-soft-blue" />
                <span className="text-charcoal">Бърз отговор</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Shield className="w-3.5 h-3.5 text-sky-blue" />
                <span className="text-charcoal">Поверително</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Heart className="w-3.5 h-3.5 text-steel-blue" />
                <span className="text-charcoal">Без съждения</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-3">
                Как да се свържете с мен
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Phone */}
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-soft-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-soft-blue" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Телефон</h3>
                <p className="text-sm text-gray-medium mb-4">
                  Най-бързият начин за записване
                </p>
                <Button className="w-full bg-soft-blue hover:bg-steel-blue" size="sm" asChild>
                  <a href="tel:+359888494533">
                    +359 888 494 533
                  </a>
                </Button>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-sky-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-sky-blue" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Имейл</h3>
                <p className="text-sm text-gray-medium mb-4">
                  За подробни въпроси
                </p>
                <Button variant="outline" className="w-full border-sky-blue/30 text-sky-blue hover:bg-sky-blue/10" size="sm" asChild>
                  <a href="mailto:olgakoleva@abv.bg">
                    olgakoleva@abv.bg
                  </a>
                </Button>
              </div>

              {/* Office */}
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-steel-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-steel-blue" />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Офис</h3>
                <p className="text-sm text-gray-medium mb-4">
                  Център "Хармония"
                </p>
                <Button variant="outline" className="w-full border-steel-blue/30 text-steel-blue hover:bg-steel-blue/10" size="sm" asChild>
                  <a href="https://maps.google.com/?q=ул.+Александровска+79,+Бургас" target="_blank" rel="noopener noreferrer">
                    Вижте в картите
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-md p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Изпратете съобщение
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                        Име *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                      Имейл
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1.5">
                      Интересувам се от
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                    >
                      <option value="">Изберете услуга</option>
                      <option value="individual">Индивидуална консултация</option>
                      <option value="family">Семейна консултация</option>
                      <option value="addiction">Терапия на зависимости</option>
                      <option value="trauma">Травма терапия</option>
                      <option value="online">Онлайн сесия</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                      Съобщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-soft-blue border-gray-300 rounded focus:ring-soft-blue"
                    />
                    <label htmlFor="privacy" className="text-xs text-gray-600">
                      Съгласявам се с{' '}
                      <a href="/privacy" className="text-soft-blue hover:underline">
                        политиката за поверителност
                      </a>
                      . *
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-soft-blue hover:bg-steel-blue"
                    disabled={!formData.privacy}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Изпрати
                  </Button>
                </form>
              </div>

              {/* Office Information */}
              <div className="space-y-6">
                
                {/* Location Details */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-5">
                    Офис информация
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium text-charcoal mb-1">Психологически център "Хармония"</p>
                      <p className="text-sm text-gray-600">ул. Александровска 79</p>
                      <p className="text-sm text-gray-600">Бургас 8000, България</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-charcoal mb-3 flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        Работно време
                      </h4>
                      <div className="space-y-1.5 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Понеделник - Петък:</span>
                          <span>9:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Събота:</span>
                          <span>10:00 - 16:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Неделя:</span>
                          <span>По договаряне</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-charcoal mb-3 text-sm">Как да стигнете</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Car className="w-4 h-4 text-soft-blue mt-0.5" />
                          <div className="text-sm">
                            <p className="font-medium">С автомобил</p>
                            <p className="text-gray-600">Безплатен паркинг в района</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <Bus className="w-4 h-4 text-sky-blue mt-0.5" />
                          <div className="text-sm">
                            <p className="font-medium">С транспорт</p>
                            <p className="text-gray-600">Линии 2, 4, 15 - спирка "Централна поща"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Quick Access */}
                <div className="bg-soft-blue/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-4">
                    Услуги
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-3.5 h-3.5 text-soft-blue" />
                      <span className="text-charcoal">Индивидуална терапия</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-3.5 h-3.5 text-soft-blue" />
                      <span className="text-charcoal">Семейни консултации</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-3.5 h-3.5 text-soft-blue" />
                      <span className="text-charcoal">Терапия на зависимости</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-3.5 h-3.5 text-soft-blue" />
                      <span className="text-charcoal">Травма терапия</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4">
                    Консултации на български, руски и английски език
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">
              Местоположение
            </h3>
            
            <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-3" />
                <p className="text-base font-medium mb-1">Google Maps</p>
                <p className="text-sm mb-4">ул. Александровска 79, Бургас</p>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://maps.google.com/?q=ул.+Александровска+79,+Бургас" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Отвори в Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
"use client"

import { useState } from 'react'
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
  Send,
  CheckCircle,
  Star,
  Globe,
  Info
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'phone',
    urgency: 'normal',
    privacy: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone || !formData.privacy) {
      alert('Моля попълнете задължителните полета и приемете условията за поверителност')
      return
    }
    
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream-light flex items-center justify-center p-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-charcoal mb-4">Съобщението е изпратено!</h2>
          <p className="text-gray-medium mb-6">
            Благодаря ви за интереса! Ще се свържа с вас в рамките на 24 часа.
          </p>
          <div className="space-y-3">
            <Button 
              className="w-full bg-soft-blue hover:bg-steel-blue" 
              onClick={() => setSubmitted(false)}
            >
              Изпрати друго съобщение
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10"
              asChild
            >
              <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer">
                Или запази час директно
              </a>
            </Button>
          </div>
        </div>
      </div>
    )
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
                <span className="text-charcoal">Бърз отговор в рамките на 24ч</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Shield className="w-3.5 h-3.5 text-sky-blue" />
                <span className="text-charcoal">100% поверително</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Heart className="w-3.5 h-3.5 text-steel-blue" />
                <span className="text-charcoal">Без съждения</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking with Calendly */}
      <section className="py-12 bg-white/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-soft-blue to-sky-blue rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Най-бързия начин за записване</h2>
              <p className="text-blue-100 mb-6">
                Вижте свободните часове в реално време и запазете директно онлайн
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <Calendar className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold">Безплатна консултация</h3>
                  <p className="text-sm text-blue-100">15 минути запознаване</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold">Терапевтична сесия</h3>
                  <p className="text-sm text-blue-100">90 минути - 70 лв.</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-soft-blue hover:bg-gray-100 text-lg px-8 py-4"
                asChild
              >
                <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Запази час сега
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-charcoal mb-3">
                Или се свържете директно
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Изпратете съобщение
                </h3>

                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Име *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                        placeholder="Вашето име"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                        placeholder="+359 888 494 533"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Имейл
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                      placeholder="вашия@имейл.bg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Интересувам се от
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                    >
                      <option value="">Изберете услуга</option>
                      <option value="individual">Индивидуална консултация</option>
                      <option value="family">Семейна консултация</option>
                      <option value="addiction">Терапия на зависимости</option>
                      <option value="trauma">Травма терапия</option>
                      <option value="online">Онлайн сесия</option>
                      <option value="consultation">Безплатна консултация</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Как предпочитате да се свържа с вас?
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-sm">Телефон</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-sm">Имейл</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Спешност
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => handleInputChange('urgency', e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                    >
                      <option value="normal">Обичайна заявка</option>
                      <option value="urgent">Спешна нужда (в рамките на седмицата)</option>
                      <option value="emergency">Кризисна ситуация</option>
                    </select>
                  </div>

                  {formData.urgency === 'emergency' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-start space-x-3">
                        <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-blue-800 text-xs">
                            За спешни случаи: <strong>0800 20 100</strong> (24/7) или <strong>+359 888 494 533</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Съобщение
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                      placeholder="Споделете накратко какво ви води при мен или какви въпроси имате..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      checked={formData.privacy}
                      onChange={(e) => handleInputChange('privacy', e.target.checked)}
                      className="mt-1 w-4 h-4 text-soft-blue border-gray-300 rounded focus:ring-soft-blue"
                    />
                    <label htmlFor="privacy" className="text-xs text-gray-600">
                      Съгласявам се с{' '}
                      <a href="/privacy" className="text-soft-blue hover:underline">
                        политиката за поверителност
                      </a>
                      {' '}и разбирам, че информацията ще бъде използвана само за целите на консултацията. *
                    </label>
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-soft-blue hover:bg-steel-blue"
                    disabled={isSubmitting || !formData.privacy}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Изпращам...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Изпрати съобщението
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                
                {/* Direct Contact Methods */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-charcoal mb-5">
                    Директен контакт
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <Phone className="w-5 h-5 text-soft-blue flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-charcoal text-sm">Телефон</p>
                        <a href="tel:+359888494533" className="text-soft-blue hover:text-sky-blue transition-colors text-sm">
                          +359 888 494 533
                        </a>
                        <p className="text-xs text-gray-500 mt-1">Пон-Пет 9:00-18:00, Съб 10:00-16:00</p>
                      </div>
                      <Button size="sm" asChild>
                        <a href="tel:+359888494533">Обади се</a>
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <Mail className="w-5 h-5 text-sky-blue flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-charcoal text-sm">Имейл</p>
                        <a href="mailto:olgakoleva@abv.bg" className="text-soft-blue hover:text-sky-blue transition-colors text-sm">
                          olgakoleva@abv.bg
                        </a>
                        <p className="text-xs text-gray-500 mt-1">Отговор в рамките на 24 часа</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href="mailto:olgakoleva@abv.bg">Пиши</a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Office Information */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-charcoal mb-5">
                    Офис информация
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-steel-blue flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-charcoal mb-1">Психологически център "Хармония"</p>
                          <p className="text-sm text-gray-600">ул. Александровска 79</p>
                          <p className="text-sm text-gray-600">Бургас 8000, България</p>
                        </div>
                      </div>
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
                      <div className="space-y-3">
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

                    <Button variant="outline" className="w-full border-steel-blue/30 text-steel-blue hover:bg-steel-blue/10" asChild>
                      <a 
                        href="https://maps.google.com/?q=ул.+Александровска+79,+Бургас" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        Отвори в Google Maps
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Languages & Services */}
                <div className="bg-soft-blue/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Езици и услуги
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5 text-sm">
                    <div className="flex items-center space-x-2">
                      <Star className="w-3.5 h-3.5 text-soft-blue" />
                      <span className="text-charcoal">Български</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-3.5 h-3.5 text-soft-blue" />
                      <span className="text-charcoal">Руски</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-3.5 h-3.5 text-soft-blue" />
                      <span className="text-charcoal">Английски</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-3.5 h-3.5 text-soft-blue" />
                      <span className="text-charcoal">Онлайн сесии</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-cream-light">
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
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
    // Handle form submission - in real implementation, this would send to backend
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Свържете се с мен
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Готова съм да ви помогна в пътуването към по-добро психично здраве и благополучие
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-gray-700">Бърз отговор</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="text-gray-700">Поверително</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
                <Heart className="w-4 h-4 text-blue-500" />
                <span className="text-gray-700">Без съждения</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Как да се свържете с мен
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="card bg-white p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Телефон</h3>
                <p className="text-gray-600 mb-6">
                  Най-бързият начин за записване на час или спешни въпроси
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="tel:+359888494533">
                    <Phone className="w-4 h-4 mr-2" />
                    +359 888 494 533
                  </a>
                </Button>
                <p className="text-xs text-gray-500 mt-3">
                  Отговарям обикновено в рамките на 2-3 часа
                </p>
              </div>

              {/* Email */}
              <div className="card bg-white p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Имейл</h3>
                <p className="text-gray-600 mb-6">
                  За подробни въпроси, записване или документи
                </p>
                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50" asChild>
                  <a href="mailto:olgakoleva@abv.bg">
                    <Mail className="w-4 h-4 mr-2" />
                    olgakoleva@abv.bg
                  </a>
                </Button>
                <p className="text-xs text-gray-500 mt-3">
                  Отговарям в рамките на 24 часа
                </p>
              </div>

              {/* Office Visit */}
              <div className="card bg-white p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Офис</h3>
                <p className="text-gray-600 mb-6">
                  Посетете ме в Психологически център "Хармония"
                </p>
                <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50" asChild>
                  <a href="https://maps.google.com/?q=ул.+Александровска+79,+Бургас" target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />
                    Вижте в картите
                  </a>
                </Button>
                <p className="text-xs text-gray-500 mt-3">
                  Само с предварителна уговорка
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2" />
                    Изпратете съобщение
                  </h3>
                  <p className="text-gray-600">
                    Попълнете формата по-долу и ще се свържа с вас в най-скоро време. 
                    Всяка информация е строго поверителна.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Име и фамилия *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Вашето име"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+359 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Имейл
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Интересувам се от
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Изберете услуга</option>
                      <option value="individual">Индивидуална консултация</option>
                      <option value="family">Семейна консултация</option>
                      <option value="addiction">Терапия на зависимости</option>
                      <option value="trauma">Травма терапия</option>
                      <option value="online">Онлайн сесия</option>
                      <option value="other">Друго</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Съобщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Разкажете ми за вашите нужди или въпроси..."
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
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Съгласявам се с{' '}
                      <a href="/privacy" className="text-blue-600 hover:underline">
                        политиката за поверителност
                      </a>{' '}
                      и{' '}
                      <a href="/terms" className="text-blue-600 hover:underline">
                        общите условия
                      </a>
                      . *
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={!formData.privacy}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Изпрати съобщение
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <Shield className="w-4 h-4 inline mr-2" />
                    Всяка информация, която споделите, е строго поверителна и се обработва 
                    съгласно GDPR и българското законодателство.
                  </p>
                </div>
              </div>

              {/* Office Information */}
              <div className="space-y-8">
                
                {/* Location Details */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <MapPin className="w-6 h-6 mr-2" />
                    Офис информация
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Адрес</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900">Психологически център "Хармония"</p>
                        <p className="text-gray-600">ул. Александровска 79</p>
                        <p className="text-gray-600">Бургас 8000, България</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Работно време
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Понеделник - Петък:</span>
                          <span className="font-medium">9:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Събота:</span>
                          <span className="font-medium">10:00 - 16:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Неделя:</span>
                          <span className="font-medium">По договаряне</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Как да стигнете</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Car className="w-5 h-5 text-blue-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">С автомобил</p>
                            <p className="text-sm text-gray-600">
                              Безплатен паркинг в района. Центрово разположение, 
                              лесен достъп от основните булеварди.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <Bus className="w-5 h-5 text-green-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">С градски транспорт</p>
                            <p className="text-sm text-gray-600">
                              Автобусни линии 2, 4, 15 - спирка "Централна поща" (2 мин пеша)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 rounded-2xl border border-red-200 p-8">
                  <h3 className="text-xl font-bold text-red-900 mb-4">
                    Спешни случаи
                  </h3>
                  <p className="text-red-800 mb-4">
                    Ако преживявате остра криза или мисли за самонаранявне:
                  </p>
                  <div className="space-y-2 text-sm text-red-800">
                    <p><strong>Национална телефонна линия за превенция на самоубийството:</strong></p>
                    <p className="font-mono text-lg">0800 20 100 (безплатна, 24/7)</p>
                    <p><strong>Спешна помощ:</strong> 112</p>
                    <p><strong>Центърът за психично здраве - Бургас:</strong> 056 813 500</p>
                  </div>
                </div>

                {/* Services Quick Access */}
                <div className="bg-blue-50 rounded-2xl border border-blue-200 p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Какво мога да ви помогна
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-800">Индивидуална терапия</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-800">Семейни консултации</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-800">Терапия на зависимости</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-800">Травма терапия</span>
                    </div>
                  </div>
                  <p className="text-xs text-blue-700 mt-4">
                    Консултации на български, руски и английски език
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Местоположение
            </h3>
            
            {/* Google Maps Embed Placeholder */}
            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">Google Maps</p>
                <p className="text-sm">ул. Александровска 79, Бургас</p>
                <Button variant="outline" className="mt-4" asChild>
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
            
            {/* Real Google Maps embed would look like this:
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.123456789!2d27.4626!3d42.5048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDMwJzE3LjMiTiAyN8KwMjcnNDUuNCJF!5e0!3m2!1sen!2sbg!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Психологически център Хармония - Местоположение"
              ></iframe>
            </div>
            */}
          </div>
        </div>
      </section>
    </div>
  )
}
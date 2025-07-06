import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import { Phone, Mail, MapPin, Calendar, Award, Users, Heart, Shield } from 'lucide-react'

export default function HomePage() {
  const t = useTranslations()

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-25 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                    {t('hero.title')}
                  </h1>
                  <p className="text-xl lg:text-2xl text-blue-600 font-medium">
                    {t('hero.subtitle')}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg lg:text-xl text-gray-700 italic leading-relaxed">
                    &ldquo;{t('hero.description')}&rdquo;
                  </p>
                  
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                      <Award className="w-4 h-4 text-blue-500" />
                      <span>Лицензиран психолог</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>Психотерапевт на зависимости</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
                      <Heart className="w-4 h-4 text-blue-500" />
                      <span>Травма терапия</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                  <Link href="#booking">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('hero.cta')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Link href="#about">
                    {t('hero.about')}
                  </Link>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">90</div>
                  <div className="text-sm text-gray-600">минути сесия</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-gray-600">езика</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">70</div>
                  <div className="text-sm text-gray-600">лв. консултация</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                  <Image
                    src="/images/olga-koleva.jpg"
                    alt="Олга Колева - Психолог и Психотерапевт на Зависимости"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-40 -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-30 -z-10"></div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-blue-50 rounded-full opacity-50 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Лицензиран специалист</h3>
              <p className="text-sm text-gray-600">Психолог с акредитация и професионална етика</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Индивидуален подход</h3>
              <p className="text-sm text-gray-600">Персонализирана терапия според нуждите ви</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Многоезична</h3>
              <p className="text-sm text-gray-600">Консултации на български, руски и английски</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Центрово място</h3>
              <p className="text-sm text-gray-600">Лесно достъпен офис в центъра на Бургас</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                За мен
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Вярвам, че всеки човек носи в себе си силата да се трансформира, когато получи правилната подкрепа. 
                  Работя с юношите и възрастните, предоставяйки научно обоснована помощ при емоционална травма, 
                  зависимости, вина, тревожност, депресия и последици от домашно насилие.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Моите сесии създават пространство без съждения, където клиентите могат да свалят маските си, 
                  да се чувстват в безопасност и да преоткрият автентичността и посоката си.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">Магистър по Психологическо консултиране (2023)</p>
                      <p className="text-sm text-gray-600">Бургаски свободен университет</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">Консултант при зависимости от психоактивни вещества</p>
                      <p className="text-sm text-gray-600">Санкт Петербургски медико-социален институт</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">Основател на Психологически център &quot;Хармония&quot;</p>
                      <p className="text-sm text-gray-600">Бургас</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src="/images/olga-koleva.jpg"
                      alt="Олга Колева"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Олга Колева</h3>
                    <p className="text-blue-600">Психолог & Психотерапевт</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Специализации</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Травма терапия и ПТСР</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Психотерапия на зависимости</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Семейно консултиране</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Тревожност и депресия</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('services.languages')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <ServiceCard
              title={t('services.individual.title')}
              description={t('services.individual.description')}
              icon="👤"
            />
            <ServiceCard
              title={t('services.family.title')}
              description={t('services.family.description')}
              icon="👨‍👩‍👧‍👦"
            />
            <ServiceCard
              title={t('services.addiction.title')}
              description={t('services.addiction.description')}
              icon="🔗"
            />
            <ServiceCard
              title={t('services.trauma.title')}
              description={t('services.trauma.description')}
              icon="💚"
            />
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-blue-50 rounded-xl p-8 border border-blue-100">
              <p className="text-2xl font-bold text-blue-800 mb-2">
                {t('services.price')}
              </p>
              <p className="text-blue-600">
                Продължителност: 90 минути • Индивидуален подход
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('contact.title')}
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{t('contact.center')}</p>
                    <p className="text-gray-600">{t('contact.address')}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Телефон</p>
                    <a href="tel:+359888494533" className="text-blue-600 hover:text-blue-800">
                      {t('contact.phone')}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Имейл</p>
                    <a href="mailto:olgakoleva@abv.bg" className="text-blue-600 hover:text-blue-800">
                      {t('contact.email')}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-3">Работно време</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <div className="flex justify-between">
                    <span>Понеделник - Петък:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Събота:</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Неделя:</span>
                    <span>По договаряне</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking */}
            <div id="booking" className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('booking.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('booking.description')}
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Консултация (90 мин)</span>
                  <span className="font-semibold text-blue-600">70 лв.</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Семейна консултация</span>
                  <span className="font-semibold text-blue-600">70 лв.</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Онлайн сесия</span>
                  <span className="font-semibold text-blue-600">70 лв.</span>
                </div>
              </div>
              
              {/* Contact methods for booking */}
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="tel:+359888494533">
                    <Phone className="w-4 h-4 mr-2" />
                    Обади се за час
                  </a>
                </Button>
                <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50" asChild>
                  <a href="mailto:olgakoleva@abv.bg">
                    <Mail className="w-4 h-4 mr-2" />
                    Изпрати имейл
                  </a>
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                * Плащането се извършва в офиса или по банков превод
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
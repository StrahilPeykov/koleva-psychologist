import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Award, 
  Users, 
  Heart, 
  Shield, 
  Sparkles, 
  Brain, 
  Flower2, 
  Sun, 
  Star, 
  CheckCircle, 
  Bell, 
  AlertTriangle,
  Globe,
  ArrowRight
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                  Олга Колева
                </h1>
                <p className="text-lg md:text-xl text-soft-blue font-medium">
                  Психолог & Психотерапевт на Зависимости
                </p>
                <p className="text-base text-gray-600 leading-relaxed italic max-w-lg">
                  "Създавам пространство, в което можеш да бъдеш истински себе си – без маски, без страх"
                </p>
              </div>
              
              {/* Clean credentials */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full">
                  <Award className="w-3.5 h-3.5 text-soft-blue" />
                  <span className="text-xs text-charcoal font-medium">Лицензиран психолог</span>
                </div>
                <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full">
                  <Heart className="w-3.5 h-3.5 text-soft-blue" />
                  <span className="text-xs text-charcoal font-medium">WAPP сертифициран</span>
                </div>
              </div>
              
              {/* Clear CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-soft-blue hover:bg-steel-blue text-white">
                  <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 mr-2" />
                    Запази консултация
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10">
                  <a href="tel:+359888494533">
                    <Phone className="w-4 h-4 mr-2" />
                    +359 888 494 533
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Image - Better proportions */}
            <div className="relative animate-fade-in lg:pl-8">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-powder-blue/20 to-sky-blue/20 transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/olga-koleva.jpg"
                    alt="Олга Колева - Психолог и Психотерапевт"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Simplified */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Професионална психологическа помощ в центъра на Бургас
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-shadow">
                  <Shield className="w-6 h-6 text-soft-blue" />
                </div>
                <h3 className="font-medium text-charcoal mb-1">Лицензиран психолог</h3>
                <p className="text-sm text-gray-500">Регистър на БПС</p>
              </div>
              
              <div className="group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-shadow">
                  <Award className="w-6 h-6 text-soft-blue" />
                </div>
                <h3 className="font-medium text-charcoal mb-1">WAPP сертифициран</h3>
                <p className="text-sm text-gray-500">Позитивна психотерапия</p>
              </div>
              
              <div className="group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-shadow">
                  <Globe className="w-6 h-6 text-soft-blue" />
                </div>
                <h3 className="font-medium text-charcoal mb-1">3 езика</h3>
                <p className="text-sm text-gray-500">БГ, РУ, EN</p>
              </div>
              
              <div className="group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-shadow">
                  <MapPin className="w-6 h-6 text-soft-blue" />
                </div>
                <h3 className="font-medium text-charcoal mb-1">Център Хармония</h3>
                <p className="text-sm text-gray-500">ул. Александровска 79</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Simplified */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-charcoal mb-4">
                    За мен
                  </h2>
                  <div className="w-16 h-1 bg-soft-blue rounded-full mb-6"></div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Вярвам, че всеки човек носи в себе си силата да се трансформира, когато получи правилната подкрепа. 
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Работя с юноши и възрастни, предоставяйки научно обоснована помощ при емоционални предизвикателства, зависимости и травми.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-soft-blue" />
                    <span className="text-gray-700">Магистър по Психологическо консултиране</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-soft-blue" />
                    <span className="text-gray-700">WAPP сертифициран терапевт</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-soft-blue" />
                    <span className="text-gray-700">Специалист по зависимости</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button asChild variant="outline" className="border-soft-blue text-soft-blue hover:bg-soft-blue/10">
                    <Link href="/about">
                      Научи повече за мен
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-charcoal mb-6">Основни специализации</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-soft-blue/10 rounded-lg flex items-center justify-center">
                        <Heart className="w-4 h-4 text-soft-blue" />
                      </div>
                      <span className="text-gray-700">Травма терапия и ПТСР</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-soft-blue/10 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-soft-blue" />
                      </div>
                      <span className="text-gray-700">Психотерапия на зависимости</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-soft-blue/10 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-soft-blue" />
                      </div>
                      <span className="text-gray-700">Семейно консултиране</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-soft-blue/10 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-soft-blue" />
                      </div>
                      <span className="text-gray-700">Тревожност и депресия</span>
                    </div>
                  </div>
                </div>

                <div className="bg-soft-blue rounded-2xl p-6 text-white">
                  <h4 className="font-semibold mb-2">Готови за първата стъпка?</h4>
                  <p className="text-blue-100 text-sm mb-4">Запазете безплатна 15-минутна консултация</p>
                  <Button className="bg-white text-soft-blue hover:bg-gray-100 w-full" asChild>
                    <a href="https://calendly.com/olga-koleva/consultation" target="_blank" rel="noopener noreferrer">
                      Запази сега
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Психологически услуги
            </h2>
            <div className="w-20 h-1 bg-soft-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-base text-gray-medium max-w-2xl mx-auto">
              Консултации на български, руски и английски език. Всички сесии са с продължителност 90 минути.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <ServiceCard
              title="Индивидуални консултации"
              description="90-минутни сесии за работа с емоционална травма, зависимости, тревожност, депресия и ОКР."
              icon={<Sparkles className="w-8 h-8 text-soft-blue" />}
              details={[
                "Тревожност и депресия",
                "Стрес и бърнаут", 
                "Ниска самооценка",
                "Емоционална регулация",
                "Личностно развитие"
              ]}
            />
            <ServiceCard
              title="Семейни консултации"
              description="Работа с близки на хора със зависимости и семейни кризи. Възстановяване на здравословните отношения."
              icon={<Users className="w-8 h-8 text-sky-blue" />}
              details={[
                "Партньорски конфликти",
                "Родителски предизвикателства",
                "Комуникационни проблеми",
                "Семейни кризи",
                "Раздяла и развод"
              ]}
            />
            <ServiceCard
              title="Психотерапия на зависимости"
              description="Специализирано лечение на химични и поведенчески зависимости с научно доказани методи."
              icon={<Brain className="w-8 h-8 text-steel-blue" />}
              details={[
                "Алкохолна зависимост",
                "Наркотична зависимост",
                "Хазартна зависимост",
                "Емоционална зависимост",
                "Съзависимост"
              ]}
            />
            <ServiceCard
              title="Травма терапия"
              description="ПТСР терапия и работа с последици от домашно насилие, сексуално насилие и детска травма."
              icon={<Heart className="w-8 h-8 text-powder-blue" />}
              details={[
                "Посттравматичен стрес",
                "Детски травми",
                "Загуба и скръб",
                "Насилие и малтретиране",
                "Емоционални рани"
              ]}
            />
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-soft-blue/10 to-sky-blue/10 rounded-2xl p-6 md:p-8 border border-soft-blue/20">
              <p className="text-2xl md:text-3xl font-bold text-soft-blue mb-2">
                70 лв. за 90 минути
              </p>
              <p className="text-sm text-gray-medium mb-4">
                Индивидуален подход • Професионално качество • Поверително
              </p>
              <Button className="bg-soft-blue hover:bg-steel-blue" asChild>
                <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer">
                  Запази час сега
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact & Booking Section - Enhanced with Calendly */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-cream-light to-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Запази консултация
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full mb-6"></div>
              <p className="text-base text-gray-medium">
                Изберете удобно време за среща или се свържете директно
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Calendly Integration */}
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Онлайн записване
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-soft-blue" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Избери удобно време</p>
                      <p className="text-xs text-gray-medium">Вижте свободните часове в реално време</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Автоматично потвърждение</p>
                      <p className="text-xs text-gray-medium">Незабавно получавате потвърждение по имейл</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Bell className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Автоматични напомняния</p>
                      <p className="text-xs text-gray-medium">Получавате напомняне 24ч и 1ч преди часа</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-soft-blue hover:bg-steel-blue" size="lg" asChild>
                    <a href="https://calendly.com/olga-koleva/consultation" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Запази първа консултация (15 мин БЕЗПЛАТНО)
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10" asChild>
                    <a href="https://calendly.com/olga-koleva/therapy-session" target="_blank" rel="noopener noreferrer">
                      Запази терапевтична сесия (90 мин - 70 лв.)
                    </a>
                  </Button>
                </div>
                
                <p className="text-xs text-gray-medium mt-4 text-center">
                  * Плащането се извършва в офиса или по банков превод
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-charcoal">
                  Директен контакт
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-5 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <MapPin className="w-5 h-5 text-soft-blue mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Психологически център Хармония</p>
                      <p className="text-gray-medium text-sm">ул. Александровска 79, Бургас</p>
                      <p className="text-xs text-gray-500 mt-1">Центъра на града • Лесен достъп • Безплатен паркинг</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-5 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <Phone className="w-5 h-5 text-sky-blue" />
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
                  
                  <div className="flex items-center space-x-4 p-5 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <Mail className="w-5 h-5 text-steel-blue" />
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

                {/* Emergency notice */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-900 text-sm">За спешни случаи</h4>
                      <p className="text-red-800 text-xs mt-1">
                        При криза или мисли за самонараняване се обадете на Националната телефонна линия: 
                        <strong className="block mt-1">0800 20 100 (24/7, безплатна)</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
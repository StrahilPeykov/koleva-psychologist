import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import { Phone, Mail, MapPin, Calendar, Award, Users, Heart, Shield, Sparkles, Brain, Flower2, Sun, Star, CheckCircle, Bell, AlertTriangle } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-br from-cream via-cream-light to-cream">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-soft-blue rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-blue rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-powder-blue rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-charcoal font-medium">Топ рейтинг в Бургас</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                  Олга Колева
                </h1>
                <p className="text-lg md:text-xl text-soft-blue font-medium">
                  Психолог & Психотерапевт на Зависимости
                </p>
                <p className="text-base md:text-lg text-gray-medium italic leading-relaxed font-light max-w-lg">
                  &ldquo;Създавам пространство, в което можеш да бъдеш истински себе си – без маски, без страх&rdquo;
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <Award className="w-3.5 h-3.5 text-soft-blue" />
                  <span className="text-charcoal">Лицензиран психолог</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <Brain className="w-3.5 h-3.5 text-steel-blue" />
                  <span className="text-charcoal">WAPP сертифициран</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-sky-blue" />
                  <span className="text-charcoal">250+ часа психодрама</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg" className="bg-soft-blue hover:bg-steel-blue text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 mr-2" />
                    Запази консултация
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10">
                  <Link href="/about">
                    Научи повече
                  </Link>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-soft-blue">500+</div>
                  <div className="text-xs text-gray-medium">успешни клиенти</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-steel-blue">5</div>
                  <div className="text-xs text-gray-medium">години опит</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-blue">90%</div>
                  <div className="text-xs text-gray-medium">удовлетвореност</div>
                </div>
              </div>
            </div>
            
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
                
                {/* Floating credential badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 animate-bounce" style={{animationDuration: '3s'}}>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-soft-blue rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-charcoal">Сертифициран</div>
                      <div className="text-gray-medium">WAPP терапевт</div>
                    </div>
                  </div>
                </div>
                
                {/* Subtle decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-soft-blue/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-sky-blue/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Enhanced */}
      <section className="py-12 md:py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-soft-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-soft-blue/20 transition-all duration-300">
                <Shield className="w-7 h-7 text-soft-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Лицензиран специалист</h3>
              <p className="text-xs text-gray-medium mt-1">Регистриран психолог</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-sky-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-sky-blue/20 transition-all duration-300">
                <Heart className="w-7 h-7 text-sky-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Индивидуален подход</h3>
              <p className="text-xs text-gray-medium mt-1">Персонализирана терапия</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-steel-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-steel-blue/20 transition-all duration-300">
                <Users className="w-7 h-7 text-steel-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Многоезична</h3>
              <p className="text-xs text-gray-medium mt-1">БГ, РУ, EN</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-powder-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-powder-blue/20 transition-all duration-300">
                <MapPin className="w-7 h-7 text-powder-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Централна локация</h3>
              <p className="text-xs text-gray-medium mt-1">Център на Бургас</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-cream-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                За мен
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div className="space-y-5">
                <p className="text-base text-charcoal leading-relaxed">
                  Вярвам, че всеки човек носи в себе си силата да се трансформира, когато получи правилната подкрепа. 
                  Работя с юношите и възрастните, предоставяйки научно обоснована помощ при емоционална травма, 
                  зависимости, вина, тревожност, депресия и последици от домашно насилие.
                </p>
                
                <p className="text-base text-charcoal leading-relaxed">
                  Моите сесии създават пространство без съждения, където клиентите могат да свалят маските си, 
                  да се чувстват в безопасност и да преоткрият автентичността и посоката си.
                </p>
                
                <div className="bg-soft-blue/10 rounded-xl p-6">
                  <h3 className="font-semibold text-charcoal mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-soft-blue" />
                    Ключови квалификации
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-soft-blue mt-1" />
                      <div>
                        <p className="font-medium text-charcoal text-sm">Магистър по Психологическо консултиране</p>
                        <p className="text-xs text-gray-medium">Бургаски свободен университет, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-sky-blue mt-1" />
                      <div>
                        <p className="font-medium text-charcoal text-sm">Консултант при зависимости</p>
                        <p className="text-xs text-gray-medium">Санкт Петербургски медико-социален институт</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-steel-blue mt-1" />
                      <div>
                        <p className="font-medium text-charcoal text-sm">WAPP сертифициран терапевт</p>
                        <p className="text-xs text-gray-medium">Позитивна и транскултурна психотерапия</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-soft p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-charcoal mb-6">Специализации</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-sky-blue/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Heart className="w-5 h-5 text-sky-blue" />
                      </div>
                      <span className="text-charcoal text-sm">Травма терапия и ПТСР</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-soft-blue/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Shield className="w-5 h-5 text-soft-blue" />
                      </div>
                      <span className="text-charcoal text-sm">Психотерапия на зависимости</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-steel-blue/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users className="w-5 h-5 text-steel-blue" />
                      </div>
                      <span className="text-charcoal text-sm">Семейно консултиране</span>
                    </div>
                    <div className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-powder-blue/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Brain className="w-5 h-5 text-powder-blue" />
                      </div>
                      <span className="text-charcoal text-sm">Тревожност и депресия</span>
                    </div>
                  </div>
                </div>

                {/* Quick action card */}
                <div className="bg-gradient-to-r from-soft-blue to-sky-blue rounded-2xl p-6 text-white">
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
      <section id="services" className="py-16 md:py-20 bg-white">
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
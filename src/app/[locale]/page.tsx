import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import { Phone, Mail, MapPin, Calendar, Award, Users, Heart, Shield, Sparkles, Brain, Flower2, Sun } from 'lucide-react'

export default function HomePage() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <div className="space-y-0">
      {/* Hero Section - Optimized for screen height */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-br from-cream via-cream-light to-cream">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-soft-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-blue rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-soft-blue font-medium">
                  {t('hero.subtitle')}
                </p>
                <p className="text-base md:text-lg text-gray-medium italic leading-relaxed font-light max-w-lg">
                  &ldquo;{t('hero.description')}&rdquo;
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <Award className="w-3.5 h-3.5 text-soft-blue" />
                  <span className="text-charcoal">Лицензиран психолог</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <Brain className="w-3.5 h-3.5 text-steel-blue" />
                  <span className="text-charcoal">Психотерапевт</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-sky-blue" />
                  <span className="text-charcoal">Травма терапия</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg" className="bg-soft-blue hover:bg-steel-blue text-white shadow-md">
                  <Link href="#booking">
                    <Calendar className="w-4 h-4 mr-2" />
                    {t('hero.cta')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10">
                  <Link href="/about">
                    {t('hero.about')}
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in lg:pl-8">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-powder-blue/20 to-sky-blue/20">
                  <Image
                    src="/images/olga-koleva.jpg"
                    alt="Олга Колева - Психолог и Психотерапевт"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                
                {/* Subtle decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-soft-blue/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-sky-blue/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
          
          {/* Quick Stats - Compact */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12 lg:hidden">
            <div className="text-center">
              <div className="text-2xl font-bold text-soft-blue">90</div>
              <div className="text-xs text-gray-medium">минути сесия</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-steel-blue">3</div>
              <div className="text-xs text-gray-medium">езика</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-blue">70</div>
              <div className="text-xs text-gray-medium">лв. консултация</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Compact */}
      <section className="py-12 md:py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-soft-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                <Shield className="w-7 h-7 text-soft-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Лицензиран специалист</h3>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-sky-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                <Heart className="w-7 h-7 text-sky-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Индивидуален подход</h3>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-steel-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                <Users className="w-7 h-7 text-steel-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Многоезична</h3>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-powder-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-7 h-7 text-powder-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Удобна локация</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Refined */}
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
                
                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-soft-blue rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Магистър по Психологическо консултиране</p>
                      <p className="text-xs text-gray-medium">Бургаски свободен университет, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sky-blue rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Консултант при зависимости</p>
                      <p className="text-xs text-gray-medium">Санкт Петербургски медико-социален институт</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-steel-blue rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Основател на център &quot;Хармония&quot;</p>
                      <p className="text-xs text-gray-medium">Бургас</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-soft p-6 lg:p-8">
                <h3 className="text-xl font-bold text-charcoal mb-6">Специализации</h3>
                <div className="space-y-3">
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
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Refined */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              {t('services.title')}
            </h2>
            <div className="w-20 h-1 bg-soft-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-base text-gray-medium max-w-2xl mx-auto">
              {t('services.languages')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <ServiceCard
              title={t('services.individual.title')}
              description={t('services.individual.description')}
              icon={<Sparkles className="w-8 h-8 text-soft-blue" />}
            />
            <ServiceCard
              title={t('services.family.title')}
              description={t('services.family.description')}
              icon={<Users className="w-8 h-8 text-sky-blue" />}
            />
            <ServiceCard
              title={t('services.addiction.title')}
              description={t('services.addiction.description')}
              icon={<Brain className="w-8 h-8 text-steel-blue" />}
            />
            <ServiceCard
              title={t('services.trauma.title')}
              description={t('services.trauma.description')}
              icon={<Heart className="w-8 h-8 text-powder-blue" />}
            />
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-soft-blue/10 rounded-2xl p-6 md:p-8">
              <p className="text-2xl md:text-3xl font-bold text-soft-blue mb-2">
                {t('services.price')}
              </p>
              <p className="text-sm text-gray-medium">
                Продължителност: 90 минути • Индивидуален подход
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section - Refined */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-cream-light to-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-8">
                  {t('contact.title')}
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4 p-5 bg-white/80 rounded-xl shadow-sm">
                    <MapPin className="w-5 h-5 text-soft-blue mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">{t('contact.center')}</p>
                      <p className="text-gray-medium text-sm">{t('contact.address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-5 bg-white/80 rounded-xl shadow-sm">
                    <Phone className="w-5 h-5 text-sky-blue" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Телефон</p>
                      <a href="tel:+359888494533" className="text-soft-blue hover:text-sky-blue transition-colors text-sm">
                        {t('contact.phone')}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-5 bg-white/80 rounded-xl shadow-sm">
                    <Mail className="w-5 h-5 text-steel-blue" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Имейл</p>
                      <a href="mailto:olgakoleva@abv.bg" className="text-soft-blue hover:text-sky-blue transition-colors text-sm">
                        {t('contact.email')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Booking */}
              <div id="booking" className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  {t('booking.title')}
                </h3>
                <p className="text-gray-medium mb-6 text-sm">
                  {t('booking.description')}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-charcoal text-sm">Консултация (90 мин)</span>
                    <span className="font-bold text-soft-blue">70 лв.</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-charcoal text-sm">Семейна консултация</span>
                    <span className="font-bold text-soft-blue">70 лв.</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-charcoal text-sm">Онлайн сесия</span>
                    <span className="font-bold text-soft-blue">70 лв.</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-soft-blue hover:bg-steel-blue" asChild>
                    <a href="tel:+359888494533">
                      <Phone className="w-4 h-4 mr-2" />
                      Обади се за час
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10" asChild>
                    <a href="mailto:olgakoleva@abv.bg">
                      <Mail className="w-4 h-4 mr-2" />
                      Изпрати имейл
                    </a>
                  </Button>
                </div>
                
                <p className="text-xs text-gray-medium mt-4 text-center">
                  * Плащането се извършва в офиса или по банков превод
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
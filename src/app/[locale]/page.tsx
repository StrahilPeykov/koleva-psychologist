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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-cream via-warm-sand/30 to-warm-cream">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-warm-rose/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-warm-terracotta/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-warm-charcoal leading-[1.1]">
                    {t('hero.title')}
                  </h1>
                  <p className="text-xl lg:text-2xl text-warm-terracotta font-medium">
                    {t('hero.subtitle')}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg lg:text-xl text-warm-olive italic leading-relaxed font-serif">
                    &ldquo;{t('hero.description')}&rdquo;
                  </p>
                  
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                      <Award className="w-4 h-4 text-warm-terracotta" />
                      <span className="text-warm-charcoal">Лицензиран психолог</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                      <Brain className="w-4 h-4 text-warm-sage" />
                      <span className="text-warm-charcoal">Психотерапевт на зависимости</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                      <Heart className="w-4 h-4 text-warm-rose" />
                      <span className="text-warm-charcoal">Травма терапия</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-warm-terracotta to-warm-rose hover:from-warm-rose hover:to-warm-terracotta text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Link href="#booking">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('hero.cta')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-warm-terracotta text-warm-terracotta hover:bg-warm-terracotta hover:text-white transition-all duration-300">
                  <Link href="#about">
                    {t('hero.about')}
                  </Link>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-warm-sand">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-warm-terracotta to-warm-rose bg-clip-text text-transparent">90</div>
                  <div className="text-sm text-warm-olive">минути сесия</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-warm-sage to-warm-olive bg-clip-text text-transparent">3</div>
                  <div className="text-sm text-warm-olive">езика</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-soft-gold to-warm-terracotta bg-clip-text text-transparent">70</div>
                  <div className="text-sm text-warm-olive">лв. консултация</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="relative w-full max-w-md mx-auto lg:max-w-lg">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-warm-sand to-warm-beige relative group">
                  <Image
                    src="/images/olga-koleva.jpg"
                    alt="Олга Колева - Психолог и Психотерапевт на Зависимости"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-warm-rose/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-warm-sage/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-soft-gold/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 left-10 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
                  <Flower2 className="w-8 h-8 text-warm-rose/60" />
                </div>
                <div className="absolute bottom-10 -right-4 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
                  <Sun className="w-6 h-6 text-soft-gold/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-terracotta/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-warm-terracotta/10 to-warm-rose/10 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-300">
                <Shield className="w-8 h-8 text-warm-terracotta" />
              </div>
              <h3 className="font-semibold text-warm-charcoal">Лицензиран специалист</h3>
              <p className="text-sm text-warm-olive">Психолог с акредитация и професионална етика</p>
            </div>
            <div className="space-y-4 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-warm-rose/10 to-warm-terracotta/10 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-300">
                <Heart className="w-8 h-8 text-warm-rose" />
              </div>
              <h3 className="font-semibold text-warm-charcoal">Индивидуален подход</h3>
              <p className="text-sm text-warm-olive">Персонализирана терапия според нуждите ви</p>
            </div>
            <div className="space-y-4 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-warm-sage/10 to-warm-olive/10 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-warm-sage" />
              </div>
              <h3 className="font-semibold text-warm-charcoal">Многоезична</h3>
              <p className="text-sm text-warm-olive">Консултации на български, руски и английски</p>
            </div>
            <div className="space-y-4 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-soft-gold/10 to-warm-terracotta/10 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-8 h-8 text-soft-gold" />
              </div>
              <h3 className="font-semibold text-warm-charcoal">Центрово място</h3>
              <p className="text-sm text-warm-olive">Лесно достъпен офис в центъра на Бургас</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-terracotta/20 to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-warm-cream to-white relative overflow-hidden">
        <div className="absolute top-40 right-0 w-96 h-96 bg-warm-sage/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-warm-charcoal mb-6">
                За мен
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-warm-terracotta to-warm-rose mx-auto mb-8 rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in-right">
                <p className="text-lg text-warm-charcoal leading-relaxed">
                  Вярвам, че всеки човек носи в себе си силата да се трансформира, когато получи правилната подкрепа. 
                  Работя с юношите и възрастните, предоставяйки научно обоснована помощ при емоционална травма, 
                  зависимости, вина, тревожност, депресия и последици от домашно насилие.
                </p>
                
                <p className="text-lg text-warm-charcoal leading-relaxed">
                  Моите сесии създават пространство без съждения, където клиентите могат да свалят маските си, 
                  да се чувстват в безопасност и да преоткрият автентичността и посоката си.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-terracotta rounded-full mt-3"></div>
                    <div>
                      <p className="font-medium text-warm-charcoal">Магистър по Психологическо консултиране (2023)</p>
                      <p className="text-sm text-warm-olive">Бургаски свободен университет</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-rose rounded-full mt-3"></div>
                    <div>
                      <p className="font-medium text-warm-charcoal">Консултант при зависимости от психоактивни вещества</p>
                      <p className="text-sm text-warm-olive">Санкт Петербургски медико-социален институт</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-sage rounded-full mt-3"></div>
                    <div>
                      <p className="font-medium text-warm-charcoal">Основател на Психологически център &quot;Хармония&quot;</p>
                      <p className="text-sm text-warm-olive">Бургас</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-soft border border-warm-sand/30 transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 flex-shrink-0 shadow-lg">
                    <Image
                      src="/images/olga-koleva.jpg"
                      alt="Олга Колева"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-warm-charcoal">Олга Колева</h3>
                    <p className="text-warm-terracotta font-medium">Психолог & Психотерапевт</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-warm-charcoal mb-6">Специализации</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-warm-rose/10 to-warm-terracotta/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Heart className="w-5 h-5 text-warm-rose" />
                    </div>
                    <span className="text-warm-charcoal">Травма терапия и ПТСР</span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-warm-terracotta/10 to-warm-rose/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Shield className="w-5 h-5 text-warm-terracotta" />
                    </div>
                    <span className="text-warm-charcoal">Психотерапия на зависимости</span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-warm-sage/10 to-warm-olive/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Users className="w-5 h-5 text-warm-sage" />
                    </div>
                    <span className="text-warm-charcoal">Семейно консултиране</span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-soft-gold/10 to-warm-terracotta/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Brain className="w-5 h-5 text-soft-gold" />
                    </div>
                    <span className="text-warm-charcoal">Тревожност и депресия</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-sand/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-warm-charcoal mb-6">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-warm-terracotta to-warm-rose mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-warm-olive max-w-2xl mx-auto">
              {t('services.languages')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ServiceCard
              title={t('services.individual.title')}
              description={t('services.individual.description')}
              icon={<Sparkles className="w-8 h-8 text-warm-terracotta" />}
            />
            <ServiceCard
              title={t('services.family.title')}
              description={t('services.family.description')}
              icon={<Users className="w-8 h-8 text-warm-rose" />}
            />
            <ServiceCard
              title={t('services.addiction.title')}
              description={t('services.addiction.description')}
              icon={<Brain className="w-8 h-8 text-warm-sage" />}
            />
            <ServiceCard
              title={t('services.trauma.title')}
              description={t('services.trauma.description')}
              icon={<Heart className="w-8 h-8 text-soft-gold" />}
            />
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-warm-sand/50 to-warm-beige/50 backdrop-blur-sm rounded-3xl p-8 border border-warm-terracotta/20 shadow-soft transform hover:scale-105 transition-all duration-300">
              <p className="text-3xl font-bold bg-gradient-to-r from-warm-terracotta to-warm-rose bg-clip-text text-transparent mb-2">
                {t('services.price')}
              </p>
              <p className="text-warm-olive">
                Продължителност: 90 минути • Индивидуален подход
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-warm-cream via-white to-warm-sand/20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-rose/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-warm-sage/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-warm-charcoal mb-8">
                {t('contact.title')}
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft transform hover:scale-[1.02] transition-all duration-300">
                  <MapPin className="w-6 h-6 text-warm-terracotta mt-1" />
                  <div>
                    <p className="font-semibold text-warm-charcoal">{t('contact.center')}</p>
                    <p className="text-warm-olive">{t('contact.address')}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft transform hover:scale-[1.02] transition-all duration-300">
                  <Phone className="w-6 h-6 text-warm-rose" />
                  <div>
                    <p className="font-semibold text-warm-charcoal">Телефон</p>
                    <a href="tel:+359888494533" className="text-warm-terracotta hover:text-warm-rose transition-colors">
                      {t('contact.phone')}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft transform hover:scale-[1.02] transition-all duration-300">
                  <Mail className="w-6 h-6 text-warm-sage" />
                  <div>
                    <p className="font-semibold text-warm-charcoal">Имейл</p>
                    <a href="mailto:olgakoleva@abv.bg" className="text-warm-terracotta hover:text-warm-rose transition-colors">
                      {t('contact.email')}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-warm-sage/20 to-warm-olive/10 p-6 rounded-2xl border border-warm-sage/30">
                <h3 className="font-semibold text-warm-charcoal mb-3">Работно време</h3>
                <div className="space-y-2 text-sm text-warm-olive">
                  <div className="flex justify-between">
                    <span>Понеделник - Петък:</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Събота:</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Неделя:</span>
                    <span className="font-medium">По договаряне</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking */}
            <div id="booking" className="bg-white rounded-3xl shadow-xl p-8 border border-warm-sand/30 animate-fade-in">
              <h3 className="text-2xl font-bold text-warm-charcoal mb-4">
                {t('booking.title')}
              </h3>
              <p className="text-warm-olive mb-6">
                {t('booking.description')}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-warm-sand/20 to-warm-beige/20 rounded-xl">
                  <span className="text-warm-charcoal font-medium">Консултация (90 мин)</span>
                  <span className="font-bold text-warm-terracotta">70 лв.</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-warm-sand/20 to-warm-beige/20 rounded-xl">
                  <span className="text-warm-charcoal font-medium">Семейна консултация</span>
                  <span className="font-bold text-warm-terracotta">70 лв.</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-warm-sand/20 to-warm-beige/20 rounded-xl">
                  <span className="text-warm-charcoal font-medium">Онлайн сесия</span>
                  <span className="font-bold text-warm-terracotta">70 лв.</span>
                </div>
              </div>
              
              {/* Contact methods for booking */}
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-warm-terracotta to-warm-rose hover:from-warm-rose hover:to-warm-terracotta text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300" asChild>
                  <a href="tel:+359888494533">
                    <Phone className="w-4 h-4 mr-2" />
                    Обади се за час
                  </a>
                </Button>
                <Button variant="outline" className="w-full border-warm-terracotta text-warm-terracotta hover:bg-warm-terracotta hover:text-white transition-all duration-300" asChild>
                  <a href="mailto:olgakoleva@abv.bg">
                    <Mail className="w-4 h-4 mr-2" />
                    Изпрати имейл
                  </a>
                </Button>
              </div>
              
              <p className="text-xs text-warm-olive mt-6 text-center">
                * Плащането се извършва в офиса или по банков превод
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
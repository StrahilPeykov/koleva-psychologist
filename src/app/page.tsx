import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import { 
  Phone, 
  Calendar, 
  Award, 
  Users, 
  Heart, 
  Shield, 
  Brain, 
  Flower2, 
  Star, 
  CheckCircle, 
  Globe,
  ArrowRight,
  Clock,
  MapPin
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section - Responsive Design */}
      <section className="relative bg-gradient-to-br from-cream-light to-white py-20 sm:py-24 lg:py-20 min-h-screen lg:min-h-0 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-soft-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Mobile Layout */}
            <div className="lg:hidden text-center">
              <div className="space-y-12">
                {/* Profile Photo */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto">
                  <div className="aspect-square rounded-full overflow-hidden shadow-xl bg-gradient-to-br from-powder-blue/20 to-sky-blue/20">
                    <Image
                      src="/images/olga-koleva.jpg"
                      alt="Олга Колева - Психолог"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 144px, 176px"
                    />
                  </div>
                </div>
                
                {/* Name and Title */}
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">
                    Олга Колева
                  </h1>
                  <p className="text-lg sm:text-xl text-soft-blue font-medium">
                    Лицензиран психолог в Бургас
                  </p>
                </div>
                
                {/* Value Proposition */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto px-4">
                  Създавам сигурно пространство за промяна. Специализирана помощ при тревожност, депресия, травми и зависимости.
                </p>
                
                {/* Primary Actions */}
                <div className="space-y-6 px-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-soft-blue hover:bg-steel-blue text-white w-full max-w-xs mx-auto h-12"
                  >
                    <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-5 h-5 mr-2" />
                      Запази безплатна консултация
                    </a>
                  </Button>
                  
                  <div className="text-center">
                    <a 
                      href="tel:+359888494533"
                      className="inline-flex items-center text-soft-blue hover:text-steel-blue font-medium text-lg transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      +359 888 494 533
                    </a>
                  </div>
                </div>
                
                {/* Trust Indicators - Simplified for mobile */}
                <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 px-4">
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>WAPP</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>90 мин</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>Бургас</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <Award className="w-4 h-4 text-soft-blue" />
                    <span className="text-sm text-charcoal font-medium">Лицензиран психолог</span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                    Олга Колева
                  </h1>
                  <p className="text-xl text-soft-blue font-medium">
                    Психолог & Психотерапевт в Бургас
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                    <p className="text-lg text-charcoal leading-relaxed font-medium">
                      Създавам сигурно пространство за промяна. Специализирана помощ при тревожност, депресия, травми и зависимости.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                    <Award className="w-4 h-4 text-soft-blue" />
                    <span className="text-sm text-charcoal">WAPP сертифициран</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                    <Clock className="w-4 h-4 text-sky-blue" />
                    <span className="text-sm text-charcoal">90 минути сесии</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                    <MapPin className="w-4 h-4 text-steel-blue" />
                    <span className="text-sm text-charcoal">Център Хармония</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-soft-blue hover:bg-steel-blue text-white shadow-lg">
                    <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-5 h-5 mr-2" />
                      Запази консултация
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10">
                    <a href="tel:+359888494533">
                      <Phone className="w-5 h-5 mr-2" />
                      +359 888 494 533
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-powder-blue/20 to-sky-blue/20 transform hover:scale-105 transition-transform duration-500">
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
        </div>
      </section>

      {/* Why Choose Me - Simplified */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal text-center mb-8">
              Защо клиентите ми се чувстват по-добре
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-soft-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-soft-blue" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Сигурна среда</h3>
                <p className="text-sm text-gray-600">Без съждения и критика. Можете да бъдете себе си напълно.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Персонален подход</h3>
                <p className="text-sm text-gray-600">Всяка терапия е адаптирана към вашите уникални нужди.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-steel-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-steel-blue" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Доказани резултати</h3>
                <p className="text-sm text-gray-600">Над 500 клиенти са постигнали своите цели с моя подход.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Streamlined */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-3">
                Как мога да ви помогна
              </h2>
              <p className="text-sm text-gray-600">
                Специализирана помощ при най-честите емоционални предизвикателства
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <ServiceCard
                title="Тревожност и депресия"
                description="Справяне с паника, безпокойство, тъга и липса на мотивация"
                icon={<Brain className="w-6 h-6 text-soft-blue" />}
              />
              <ServiceCard
                title="Травми и ПТСР"
                description="Изцеление от болезнени спомени и травматични преживявания"
                icon={<Heart className="w-6 h-6 text-sky-blue" />}
              />
              <ServiceCard
                title="Семейни проблеми"
                description="Подобряване на отношенията и комуникацията в семейството"
                icon={<Users className="w-6 h-6 text-steel-blue" />}
              />
              <ServiceCard
                title="Зависимости"
                description="Преодоляване на алкохолна, наркотична и поведенчески зависимости"
                icon={<Shield className="w-6 h-6 text-powder-blue" />}
              />
            </div>
            
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-soft-blue/10 to-sky-blue/10 rounded-xl p-6 border border-soft-blue/20 inline-block">
                <p className="text-2xl font-bold text-soft-blue mb-2">
                  70 лв. за 90 минути
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Първата консултация (15 мин) е безплатна
                </p>
                <Button className="bg-soft-blue hover:bg-steel-blue" asChild>
                  <Link href="/services">
                    Всички услуги
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-soft-blue mb-1">500+</div>
                <div className="text-xs text-gray-600">Помогнати клиенти</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sky-blue mb-1">95%</div>
                <div className="text-xs text-gray-600">Удовлетвореност</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-steel-blue mb-1">5г</div>
                <div className="text-xs text-gray-600">Професионален опит</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact CTA - Simplified */}
      <section className="py-12 bg-gradient-to-br from-cream-light to-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
              Готови за първата стъпка?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Свържете се с мен за безплатна консултация от 15 минути
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-soft-blue hover:bg-steel-blue text-white w-full max-w-sm"
                asChild
              >
                <a href="https://calendly.com/olga-koleva/consultation" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Запази безплатна консултация
                </a>
              </Button>
              
              <div className="flex justify-center space-x-6 text-sm">
                <a 
                  href="tel:+359888494533"
                  className="flex items-center text-charcoal hover:text-soft-blue transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Обадете се
                </a>
                <Link 
                  href="/contact"
                  className="flex items-center text-charcoal hover:text-soft-blue transition-colors"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Всички начини
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
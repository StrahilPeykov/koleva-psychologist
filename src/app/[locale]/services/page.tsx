import { useTranslations } from 'next-intl'
import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { 
  Heart, 
  Users, 
  Brain, 
  Shield, 
  Sparkles,
  CheckCircle,
  ArrowRight,
  Clock,
  Globe,
  Zap,
  Flower2,
  Phone,
  Calendar
} from 'lucide-react'

export default function ServicesPage() {
  const t = useTranslations()

  const services = [
    {
      title: "Индивидуална психотерапия",
      description: "Персонализиран подход за справяне с емоционални предизвикателства",
      icon: <Sparkles className="w-8 h-8 text-soft-blue" />,
      features: [
        "Тревожност и депресия",
        "Стрес и бърнаут",
        "Ниска самооценка",
        "Емоционална регулация",
        "Личностно развитие"
      ],
      duration: "90 минути",
      price: "70 лв.",
      color: "soft-blue"
    },
    {
      title: "Семейно консултиране",
      description: "Подобряване на взаимоотношенията и комуникацията в семейството",
      icon: <Users className="w-8 h-8 text-sky-blue" />,
      features: [
        "Партньорски конфликти",
        "Родителски предизвикателства",
        "Комуникационни проблеми",
        "Семейни кризи",
        "Раздяла и развод"
      ],
      duration: "90 минути",
      price: "70 лв.",
      color: "sky-blue"
    },
    {
      title: "Терапия на зависимости",
      description: "Специализирана помощ при различни форми на зависимост",
      icon: <Brain className="w-8 h-8 text-steel-blue" />,
      features: [
        "Алкохолна зависимост",
        "Наркотична зависимост",
        "Хазартна зависимост",
        "Емоционална зависимост",
        "Съзависимост"
      ],
      duration: "90 минути",
      price: "70 лв.",
      color: "steel-blue"
    },
    {
      title: "Травма терапия",
      description: "Преодоляване на травматични преживявания и ПТСР",
      icon: <Heart className="w-8 h-8 text-powder-blue" />,
      features: [
        "Посттравматичен стрес",
        "Детски травми",
        "Загуба и скръб",
        "Насилие и малтретиране",
        "Емоционални рани"
      ],
      duration: "90 минути", 
      price: "70 лв.",
      color: "powder-blue"
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Първоначален контакт",
      description: "Свържете се по телефон или имейл за записване"
    },
    {
      number: "02", 
      title: "Първа консултация",
      description: "Запознаване и оценка на вашите нужди"
    },
    {
      number: "03",
      title: "План за терапия",
      description: "Съвместно изработване на терапевтичен план"
    },
    {
      number: "04",
      title: "Редовни сесии",
      description: "Работа върху поставените цели"
    }
  ]

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Услуги
            </h1>
            <p className="text-lg text-gray-medium mb-6">
              Професионална психологическа помощ, адаптирана към вашите нужди
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Clock className="w-3.5 h-3.5 text-soft-blue" />
                <span className="text-charcoal">90 минути сесия</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Globe className="w-3.5 h-3.5 text-sky-blue" />
                <span className="text-charcoal">3 езика</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Zap className="w-3.5 h-3.5 text-steel-blue" />
                <span className="text-charcoal">Онлайн и присъствено</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-${service.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-charcoal mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-medium text-sm mb-4">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="space-y-1.5">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-3.5 h-3.5 text-soft-blue flex-shrink-0" />
                              <span className="text-xs text-charcoal">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <span className="text-xs text-soft-blue pl-5">
                              + {service.features.length - 3} още области
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-gray-medium">
                              <Clock className="w-3.5 h-3.5 inline mr-1" />
                              {service.duration}
                            </span>
                            <span className="font-semibold text-soft-blue">
                              {service.price}
                            </span>
                          </div>
                          <Button size="sm" variant="ghost" className="text-soft-blue hover:text-steel-blue" asChild>
                            <Link href="/contact">
                              Запишете се
                              <ArrowRight className="w-3.5 h-3.5 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Как работя
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-soft-blue">{step.number}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gray-300">
                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-medium">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* What to Expect */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-6">
                  Какво да очаквате
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-soft-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Конфиденциалност</h3>
                      <p className="text-sm text-gray-medium">
                        Пълна поверителност и професионална етика
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-sky-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Безопасна среда</h3>
                      <p className="text-sm text-gray-medium">
                        Приемащо пространство без осъждане
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Flower2 className="w-5 h-5 text-steel-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Индивидуален подход</h3>
                      <p className="text-sm text-gray-medium">
                        Терапия, адаптирана към вашите уникални нужди
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical Information */}
              <div className="bg-soft-blue/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-charcoal mb-6">
                  Практическа информация
                </h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Продължителност</h3>
                    <p className="text-gray-medium">
                      Всяка сесия е с продължителност 90 минути
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Честота</h3>
                    <p className="text-gray-medium">
                      Обикновено веднъж седмично, според вашите нужди
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Формат</h3>
                    <p className="text-gray-medium">
                      Присъствено в офиса или онлайн
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Езици</h3>
                    <p className="text-gray-medium">
                      Български, руски и английски език
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Плащане</h3>
                    <p className="text-gray-medium">
                      В брой или по банков път след всяка сесия
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-soft-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Готови ли сте да направите първата стъпка?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Свържете се с мен за да обсъдим как мога да ви помогна
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-soft-blue hover:bg-gray-100"
                asChild
              >
                <a href="tel:+359888494533">
                  <Phone className="w-5 h-5 mr-2" />
                  Обадете се сега
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-soft-blue"
                asChild
              >
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Запишете час
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
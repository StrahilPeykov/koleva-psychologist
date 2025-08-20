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
  Calendar,
  Star,
  Target,
  Award,
  MessageCircle,
  Lightbulb,
  Activity
} from 'lucide-react'

export default function ServicesPage() {

  const services = [
    {
      title: "Индивидуална психотерапия",
      description: "Персонализиран подход за справяне с емоционални предизвикателства",
      icon: <Sparkles className="w-8 h-8 text-soft-blue" />,
      features: [
        "Тревожност и панически атаки",
        "Депресия и биполярно разстройство", 
        "Стрес и емоционално изтощение",
        "Ниска самооценка и самоувереност",
        "Емоционална регулация",
        "Личностно развитие",
        "Проблеми с гнева",
        "Жизнени промени и кризи"
      ],
      duration: "90 минути",
      price: "70 лв.",
      color: "soft-blue",
      benefits: [
        "Разбиране на собствените емоции",
        "Развитие на здравословни стратегии",
        "Повишаване на самосъзнанието",
        "Подобрено качество на живот"
      ]
    },
    {
      title: "Семейно консултиране",
      description: "Подобряване на взаимоотношенията и комуникацията в семейството",
      icon: <Users className="w-8 h-8 text-sky-blue" />,
      features: [
        "Партньорски конфликти и кризи",
        "Проблеми в комуникацията", 
        "Родителски предизвикателства",
        "Семейни граници и роли",
        "Раздяла и развод",
        "Смесени семейства",
        "Финансови конфликти",
        "Интимност и близост"
      ],
      duration: "90 минути",
      price: "70 лв.",
      color: "sky-blue",
      benefits: [
        "Подобрена комуникация",
        "Разрешаване на конфликти",
        "Укрепване на връзките",
        "Здравословни семейни модели"
      ]
    },
    {
      title: "Терапия на зависимости",
      description: "Специализирана помощ при различни форми на зависимост",
      icon: <Brain className="w-8 h-8 text-steel-blue" />,
      features: [
        "Алкохолна зависимост",
        "Наркотична зависимост",
        "Хазартна зависимост", 
        "Интернет и гейминг зависимост",
        "Хранителни разстройства",
        "Емоционална зависимост",
        "Съзависимост",
        "Работохолизъм"
      ],
      duration: "90 минути",
      price: "70 лв.",
      color: "steel-blue",
      benefits: [
        "Контрол над зависимостта",
        "Развитие на копинг стратегии",
        "Възстановяване на отношенията",
        "Дългосрочна трезвеност"
      ]
    },
    {
      title: "Травма терапия",
      description: "Преодоляване на травматични преживявания и ПТСР",
      icon: <Heart className="w-8 h-8 text-powder-blue" />,
      features: [
        "Посттравматичен стрес (ПТСР)",
        "Детски травми и пренебрегване",
        "Домашно насилие и абуз", 
        "Сексуално насилие и тормоз",
        "Загуба и скръб",
        "Травма от катастрофи",
        "Медицински травми",
        "Комплексна травма"
      ],
      duration: "90 минути", 
      price: "70 лв.",
      color: "powder-blue",
      benefits: [
        "Намаляване на симптомите",
        "Възстановяване на контрола",
        "Изцеление от миналото",
        "Възвръщане на доверието"
      ]
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Първоначален контакт",
      description: "Свържете се по телефон, имейл или през Calendly",
      icon: <Phone className="w-6 h-6 text-soft-blue" />
    },
    {
      number: "02", 
      title: "Безплатна консултация",
      description: "15-минутна среща за запознаване и обсъждане на нуждите",
      icon: <MessageCircle className="w-6 h-6 text-sky-blue" />
    },
    {
      number: "03",
      title: "Първа пълна сесия",
      description: "90-минутна сесия за задълбочена оценка и планиране",
      icon: <Target className="w-6 h-6 text-steel-blue" />
    },
    {
      number: "04",
      title: "Терапевтичен план",
      description: "Съвместно изработване на индивидуален план за терапия",
      icon: <Lightbulb className="w-6 h-6 text-powder-blue" />
    },
    {
      number: "05",
      title: "Редовни сесии",
      description: "Работа върху поставените цели с регулярни прегледи",
      icon: <Activity className="w-6 h-6 text-green-500" />
    }
  ]

  const therapeuticMethods = [
    {
      name: "Позитивна психотерапия",
      description: "Фокус върху ресурсите и способностите за растеж",
      certification: "WAPP сертификат"
    },
    {
      name: "Когнитивно-поведенческа терапия",
      description: "Промяна на негативни мисли и поведенчески модели",
      certification: "Клинично обучение"
    },
    {
      name: "Психодрама",
      description: "Творческо изразяване чрез ролева игра и движение",
      certification: "250+ часа обучение"
    },
    {
      name: "OH Cards консултиране",
      description: "Достъп до подсъзнателни процеси чрез асоциативни карти",
      certification: "Сертифициран фасилитатор"
    },
    {
      name: "Травма-фокусирана терапия",
      description: "Специализирани техники за работа с травматични преживявания",
      certification: "Специализирано обучение"
    },
    {
      name: "Семейна системна терапия",
      description: "Работа с динамиките и взаимодействията в семейната система",
      certification: "Системно обучение"
    }
  ]

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Психологически услуги
            </h1>
            <p className="text-lg text-gray-medium mb-6">
              Професионална психологическа помощ, адаптирана към вашите уникални нужди
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Clock className="w-3.5 h-3.5 text-soft-blue" />
                <span className="text-charcoal">90 минути сесия</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Globe className="w-3.5 h-3.5 text-sky-blue" />
                <span className="text-charcoal">3 езика (БГ, РУ, EN)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Zap className="w-3.5 h-3.5 text-steel-blue" />
                <span className="text-charcoal">Онлайн и присъствено</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Award className="w-3.5 h-3.5 text-powder-blue" />
                <span className="text-charcoal">WAPP сертифициран</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Service Overview */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 bg-${service.color}/10 rounded-xl flex items-center justify-center`}>
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-charcoal">{service.title}</h3>
                          <p className="text-sm text-gray-medium">{service.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-charcoal">Продължителност</span>
                          </div>
                          <span className="font-semibold text-charcoal">{service.duration}</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-soft-blue/10 to-sky-blue/10 rounded-lg border border-soft-blue/20">
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-soft-blue" />
                            <span className="text-sm text-charcoal">Цена</span>
                          </div>
                          <span className="font-bold text-soft-blue text-lg">{service.price}</span>
                        </div>
                        
                        <Button className="w-full bg-soft-blue hover:bg-steel-blue" asChild>
                          <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer">
                            <Calendar className="w-4 h-4 mr-2" />
                            Запази час
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Features & Benefits */}
                    <div className="lg:col-span-2">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* What we work with */}
                        <div>
                          <h4 className="font-semibold text-charcoal mb-4 flex items-center">
                            <Target className="w-4 h-4 mr-2" />
                            С какво работим
                          </h4>
                          <div className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="w-3.5 h-3.5 text-soft-blue flex-shrink-0" />
                                <span className="text-sm text-charcoal">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Benefits */}
                        <div>
                          <h4 className="font-semibold text-charcoal mb-4 flex items-center">
                            <Heart className="w-4 h-4 mr-2" />
                            Очаквани ползи
                          </h4>
                          <div className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div className={`w-6 h-6 bg-${service.color}/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                  <CheckCircle className={`w-3 h-3 text-${service.color}`} />
                                </div>
                                <span className="text-sm text-charcoal">{benefit}</span>
                              </div>
                            ))}
                          </div>
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

      {/* Therapeutic Methods */}
      <section className="py-16 bg-gradient-to-br from-cream-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Терапевтични методи
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full mb-6"></div>
              <p className="text-base text-gray-medium max-w-2xl mx-auto">
                Използвам интегративен подход с научно доказани методи, адаптирани към вашите индивидуални нужди
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {therapeuticMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-soft-blue/10 to-sky-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-5 h-5 text-soft-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-charcoal mb-2">{method.name}</h3>
                      <p className="text-sm text-gray-medium mb-3">{method.description}</p>
                      <div className="inline-flex items-center px-2 py-1 bg-green-50 border border-green-200 rounded-full">
                        <Award className="w-3 h-3 text-green-600 mr-1" />
                        <span className="text-xs text-green-700">{method.certification}</span>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Как работим заедно
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full mb-6"></div>
              <p className="text-base text-gray-medium">
                Структуриран процес, който ви води от първия контакт до постигане на целите
              </p>
            </div>
            
            <div className="relative">
              {/* Connection line */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-soft-blue via-sky-blue to-steel-blue"></div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="relative z-10 mx-auto">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 border-2 border-soft-blue/20 hover:border-soft-blue/50 transition-colors">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-soft-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-charcoal mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-medium leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* What to Expect */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">
                  Какво да очаквате
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-soft-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-soft-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">Пълна поверителност</h3>
                      <p className="text-sm text-gray-medium">
                        Всичко споделено остава строго между нас. Спазвам професионална етика и защитавам вашата поверителност.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-sky-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-sky-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">Безопасна среда</h3>
                      <p className="text-sm text-gray-medium">
                        Създавам пространство без съждения, където можете да бъдете автентични и да споделите свободно.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-steel-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-steel-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">Индивидуален подход</h3>
                      <p className="text-sm text-gray-medium">
                        Всяка терапия е адаптирана към вашите уникални нужди, темп и цели.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-powder-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Flower2 className="w-5 h-5 text-powder-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">Фокус върху ресурсите</h3>
                      <p className="text-sm text-gray-medium">
                        Работим заедно да открием и развием вашите вътрешни сили и способности.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical Information */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-soft-blue/10 to-sky-blue/10 rounded-2xl p-8 border border-soft-blue/20">
                  <h2 className="text-2xl font-bold text-charcoal mb-6">
                    Практическа информация
                  </h2>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700">Продължителност на сесия:</span>
                      <span className="font-medium text-charcoal">90 минути</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700">Честота на сесиите:</span>
                      <span className="font-medium text-charcoal">Седмично/по договаряне</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700">Формат:</span>
                      <span className="font-medium text-charcoal">Присъствено или онлайн</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700">Езици:</span>
                      <span className="font-medium text-charcoal">Български, руски, английски</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700">Плащане:</span>
                      <span className="font-medium text-charcoal">В брой, карта, банков превод</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-700">Отмяна:</span>
                      <span className="font-medium text-charcoal">Безплатно до 24ч преди</span>
                    </div>
                  </div>
                </div>

                {/* Quick CTA */}
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <h3 className="text-xl font-bold text-charcoal mb-4">
                    Готови за първата стъпка?
                  </h3>
                  <p className="text-gray-medium mb-6">
                    Започнете с безплатна 15-минутна консултация
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-soft-blue hover:bg-steel-blue" size="lg" asChild>
                      <a href="https://calendly.com/olga-koleva/consultation" target="_blank" rel="noopener noreferrer">
                        <Calendar className="w-4 h-4 mr-2" />
                        Безплатна консултация
                      </a>
                    </Button>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1 border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10" asChild>
                        <a href="tel:+359888494533">
                          <Phone className="w-4 h-4 mr-1" />
                          Обади се
                        </a>
                      </Button>
                      <Button variant="outline" className="flex-1 border-sky-blue/30 text-sky-blue hover:bg-sky-blue/10" asChild>
                        <Link href="/contact">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Пиши
                        </Link>
                      </Button>
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
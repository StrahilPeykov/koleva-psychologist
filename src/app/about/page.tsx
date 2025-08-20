import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  Award, 
  BookOpen, 
  Users, 
  Heart, 
  Shield, 
  Calendar,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  BadgeCheck,
  Building,
  Globe,
  Star,
  Target,
  Lightbulb,
  Clock,
  CheckCircle,
  Quote,
  TrendingUp,
  Brain,
  Flower2
} from 'lucide-react'

export const metadata = {
  title: 'За мен - Олга Колева | Психолог Бургас',
  description: 'Магистър по Психологическо консултиране, лицензиран психолог и психотерапевт на зависимости в Бургас. Над 250 часа психодрама обучение.',
  keywords: 'олга колева психолог, психолог бургас, психотерапевт зависимости, образование психолог, квалификации'
}

export default function AboutPage() {
  const education = [
    {
      title: "Магистър по Психологическо консултиране",
      institution: "Бургаски свободен университет",
      year: "2023",
      details: "Дипломна работа: Аспекти на психичното функциониране на съзависимите при употреба на психоактивни вещества",
      type: "degree",
      grade: "Отличен 6.00"
    },
    {
      title: "Консултант по зависимости от психоактивни вещества", 
      institution: "Санкт Петербургски медико-социален институт",
      year: "2022",
      details: "120-часов курс с практически обучение",
      type: "certification"
    },
    {
      title: "Специализация: Невропсихология, Психопатология и Психотерапия",
      institution: "Медицински университет - Пловдив",
      year: "2021-2022",
      details: "60 часа теоретично и практическо обучение",
      type: "specialization"
    }
  ]

  const certifications = [
    {
      title: "Основен консултант - WAPP",
      description: "Световна асоциация за позитивна и транскултурна психотерапия",
      year: "2022",
      hours: "120"
    },
    {
      title: "Напреднала програма (Master level) - WAPP",
      description: "Втора степен сертификация в позитивна психотерапия",
      year: "2023", 
      hours: "80"
    },
    {
      title: "Травма и ПТСР психотерапия",
      description: "Специализиран курс за работа с травматични преживявания",
      year: "2023",
      hours: "40"
    },
    {
      title: "OH Cards фасилитатор",
      description: "Институт OH Cards България - сертифициран фасилитатор",
      year: "2022",
      hours: "24"
    },
    {
      title: "Психодрама институт DEA",
      description: "Над 250 часа лично психодрамно преживяване и обучение",
      year: "2021-2024",
      hours: "250+"
    }
  ]

  const therapeuticApproaches = [
    {
      name: "Позитивна психотерапия",
      description: "Фокус върху ресурсите и способностите за растеж",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      certification: "WAPP Master level",
      features: ["Транскултурен подход", "Балансов модел", "Конфликт като възможност"]
    },
    {
      name: "Когнитивно-поведенческа терапия",
      description: "Промяна на негативни мисли и поведенчески модели",
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      certification: "Клинично обучение",
      features: ["Практични техники", "Домашни задания", "Измерими резултати"]
    },
    {
      name: "Психодрама",
      description: "Творческо изразяване чрез ролева игра и движение",
      icon: <Users className="w-6 h-6 text-purple-500" />,
      certification: "250+ часа",
      features: ["Телесна работа", "Групова динамика", "Катарзис"]
    },
    {
      name: "OH Cards консултиране",
      description: "Достъп до подсъзнателни процеси чрез асоциативни карти",
      icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
      certification: "Сертифициран фасилитатор",
      features: ["Интуитивна работа", "Символен език", "Творчески процес"]
    }
  ]

  const personalValues = [
    {
      title: "Автентичност",
      description: "Вярвам в силата на истинския човешки контакт",
      icon: <Heart className="w-5 h-5 text-red-500" />
    },
    {
      title: "Професионализъм",
      description: "Постоянно се развивам и следя новостите в областта",
      icon: <Award className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Емпатия",
      description: "Разбирам и приемам всеки клиент такъв, какъвто е",
      icon: <Shield className="w-5 h-5 text-green-500" />
    },
    {
      title: "Иновативност",
      description: "Използвам творчески методи за по-ефективна терапия",
      icon: <Lightbulb className="w-5 h-5 text-orange-500" />
    }
  ]

  const achievements = [
    {
      number: "500+",
      description: "Успешно помогнати клиенти",
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      number: "5",
      description: "Години професионален опит",
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      number: "95%",
      description: "Удовлетвореност на клиентите",
      icon: <Star className="w-6 h-6 text-yellow-500" />
    },
    {
      number: "500+",
      description: "Часове обучение и развитие",
      icon: <BookOpen className="w-6 h-6 text-purple-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-cream via-cream-light to-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-soft-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <Award className="w-4 h-4 text-soft-blue" />
                    <span className="text-sm text-charcoal font-medium">Лицензиран психолог No. 2023-БУ-147</span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                    Олга Колева
                  </h1>
                  <p className="text-xl text-soft-blue font-medium">
                    Психолог & Психотерапевт на Зависимости
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                    <Quote className="w-8 h-8 text-blue-500 mb-4" />
                    <p className="text-lg text-charcoal italic leading-relaxed font-medium">
                      "Създавам пространство, в което можеш да бъдеш истински себе си – без маски, без страх. 
                      Вярвам, че всеки човек носи в себе си силата да се трансформира."
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                    <BadgeCheck className="w-4 h-4 text-soft-blue" />
                    <span className="text-sm text-charcoal">WAPP Master терапевт</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                    <Building className="w-4 h-4 text-sky-blue" />
                    <span className="text-sm text-charcoal">Основател център "Хармония"</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                    <Globe className="w-4 h-4 text-steel-blue" />
                    <span className="text-sm text-charcoal">3 езика (БГ, РУ, EN)</span>
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
                    <Link href="/services">
                      Услуги и цени
                    </Link>
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
                  
                  {/* Floating achievements */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-bounce" style={{animationDuration: '3s'}}>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-xs">
                        <div className="font-semibold text-charcoal">500+</div>
                        <div className="text-gray-medium">клиенти</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Award className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="text-xs">
                        <div className="font-semibold text-charcoal">WAPP</div>
                        <div className="text-gray-medium">Master</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gray-50 rounded-xl flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-charcoal mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-gray-medium">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Values */}
      <section className="py-16 bg-gradient-to-br from-cream-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Моята философия
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-medium max-w-3xl mx-auto">
                Работя с принципите на хуманистичната психология, където всеки човек е уникален и носи в себе си потенциала за растеж
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-charcoal mb-4">Моят подход</h3>
                  <p className="text-charcoal leading-relaxed mb-6">
                    Работя с юношите и възрастните, предоставяйки научно обоснована помощ при 
                    емоционална травма, зависимости, вина, тревожност, депресия и последици от домашно насилие.
                  </p>
                  
                  <p className="text-charcoal leading-relaxed mb-6">
                    Моите сесии създават пространство без съждения, където клиентите могат да свалят 
                    маските си, да се чувстват в безопасност и да преоткрият автентичността и посоката си.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-charcoal">Основни принципи:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {personalValues.map((value, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                            {value.icon}
                          </div>
                          <div>
                            <h5 className="font-medium text-charcoal text-sm">{value.title}</h5>
                            <p className="text-xs text-gray-medium">{value.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-soft-blue/10 to-sky-blue/10 rounded-2xl p-8 border border-soft-blue/20">
                  <h3 className="text-xl font-bold text-charcoal mb-6">За какво работим заедно</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Target className="w-5 h-5 text-soft-blue mt-1" />
                      <div>
                        <h4 className="font-medium text-charcoal">Емоционално възстановяване</h4>
                        <p className="text-sm text-gray-medium">Преодоляване на тревожност, депресия и емоционални травми</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-sky-blue mt-1" />
                      <div>
                        <h4 className="font-medium text-charcoal">Личностен растеж</h4>
                        <p className="text-sm text-gray-medium">Развитие на самосъзнанието и жизнените умения</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-steel-blue mt-1" />
                      <div>
                        <h4 className="font-medium text-charcoal">Здравословни отношения</h4>
                        <p className="text-sm text-gray-medium">Подобряване на комуникацията и близостта</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Flower2 className="w-5 h-5 text-powder-blue mt-1" />
                      <div>
                        <h4 className="font-medium text-charcoal">Вътрешен мир</h4>
                        <p className="text-sm text-gray-medium">Намиране на баланс и хармония в живота</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-charcoal mb-4">Бърз контакт</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-soft-blue" />
                      <a href="tel:+359888494533" className="text-sm text-charcoal hover:text-soft-blue">
                        +359 888 494 533
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-sky-blue" />
                      <a href="mailto:olgakoleva@abv.bg" className="text-sm text-charcoal hover:text-sky-blue">
                        olgakoleva@abv.bg
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Образование и квалификации
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full mb-6"></div>
              <p className="text-base text-gray-medium">
                Непрекъснато развитие и обучение за най-високо качество на услугите
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-8 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Образование
                </h3>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      <div className="flex">
                        <div className="flex flex-col items-center mr-6">
                          <div className="w-4 h-4 bg-soft-blue rounded-full"></div>
                          {index < education.length - 1 && (
                            <div className="w-0.5 h-16 bg-blue-200 mt-2"></div>
                          )}
                        </div>
                        
                        <div className="flex-1 pb-8">
                          <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="text-lg font-semibold text-charcoal pr-4">{edu.title}</h4>
                              <span className="text-sm font-medium text-soft-blue bg-soft-blue/10 px-2 py-1 rounded-full">
                                {edu.year}
                              </span>
                            </div>
                            <p className="text-soft-blue font-medium text-sm mb-2">{edu.institution}</p>
                            {edu.details && (
                              <p className="text-gray-medium text-sm mb-2">{edu.details}</p>
                            )}
                            {edu.grade && (
                              <div className="inline-flex items-center px-2 py-1 bg-green-50 border border-green-200 rounded-full">
                                <Star className="w-3 h-3 text-green-600 mr-1" />
                                <span className="text-xs text-green-700">{edu.grade}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-8 flex items-center">
                  <BadgeCheck className="w-6 h-6 mr-3" />
                  Сертификати и обучения
                </h3>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-charcoal">{cert.title}</h4>
                        <div className="text-right">
                          <div className="text-sm text-soft-blue font-medium">{cert.year}</div>
                          <div className="text-xs text-gray-500">{cert.hours} часа</div>
                        </div>
                      </div>
                      <p className="text-gray-medium text-sm">{cert.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                  <h4 className="font-semibold text-charcoal mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Членства в организации
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Българска асоциация по позитивна психотерапия (БАПС) - от 2024
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Световна асоциация за позитивна психотерапия (WAPP) - от 2022
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Регистър на практикуващите психолози в България
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Терапевтични методи
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full mb-6"></div>
              <p className="text-base text-gray-medium">
                Интегративен подход с използване на научно доказани методи
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {therapeuticApproaches.map((approach, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                      {approach.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-charcoal mb-2">{approach.name}</h3>
                      <p className="text-gray-medium text-sm">{approach.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="inline-flex items-center px-3 py-1 bg-blue-50 border border-blue-200 rounded-full">
                      <Award className="w-3 h-3 text-blue-600 mr-1" />
                      <span className="text-xs text-blue-700 font-medium">{approach.certification}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-charcoal text-sm">Ключови елементи:</h4>
                    {approach.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-soft-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Готови ли сте за първата стъпка към промяната?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Свържете се с мен за персонална консултация и нека заедно да започнем вашето пътуване към благополучие
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-white text-soft-blue hover:bg-gray-100"
                asChild
              >
                <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Запази час онлайн
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-soft-blue"
                asChild
              >
                <a href="tel:+359888494533">
                  <Phone className="w-5 h-5 mr-2" />
                  Обадете се сега
                </a>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Безплатна първоначална консултация</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Гъвкави часове и дни</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Онлайн и присъствени сесии</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
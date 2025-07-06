import { useTranslations } from 'next-intl'
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
  Globe
} from 'lucide-react'

export default function AboutPage() {
  const t = useTranslations()

  const education = [
    {
      title: "Магистър по Психологическо консултиране",
      institution: "Бургаски свободен университет",
      year: "2023",
      details: "Дипломна работа: Аспекти на психичното функциониране на съзависимите при употреба на психоактивни вещества",
      type: "degree"
    },
    {
      title: "Консултант по зависимости от психоактивни вещества",
      institution: "Санкт Петербургски медико-социален институт", 
      year: "2022",
      type: "certification"
    },
    {
      title: "Специализация: Невропсихология, Психопатология и Психотерапия",
      institution: "Медицински университет - Пловдив",
      year: "2021-2022",
      type: "specialization"
    }
  ]

  const certifications = [
    "Основен консултант - Световна асоциация за позитивна и транскултурна психотерапия (WAPP)",
    "Напреднала програма (Master level) - WAPP",
    "Травма и ПТСР психотерапия - сертифициран курс",
    "OH Cards фасилитатор - Институт OH Cards България", 
    "Психодрама институт DEA - над 250 часа лично психодрамно преживяване",
    "Член на Българската асоциация по позитивна психотерапия (БАПС) от 2024"
  ]

  const approaches = [
    {
      name: "Позитивна психотерапия",
      description: "Хуманистичен подход, фокусиран върху ресурсите и способностите на клиента",
      icon: Heart
    },
    {
      name: "Когнитивно-поведенческа терапия",
      description: "Структуриран подход за промяна на неадаптивни мисли и поведения",
      icon: Shield
    },
    {
      name: "Психодрама",
      description: "Експериментална терапия чрез ролева игра и творческо изразяване",
      icon: Users
    },
    {
      name: "OH Cards консултиране",
      description: "Използване на асоциативни карти за достъп до подсъзнателни процеси",
      icon: BookOpen
    }
  ]

  const specializations = [
    {
      title: "Зависимости",
      areas: [
        "Алкохолна зависимост",
        "Наркотична зависимост",
        "Хазартна зависимост", 
        "Поведенчески зависимости",
        "Съзависимост"
      ]
    },
    {
      title: "Травма и ПТСР",
      areas: [
        "Детска травма",
        "Домашно насилие",
        "Сексуално насилие",
        "Автомобилни катастрофи",
        "Загуба и скръб"
      ]
    },
    {
      title: "Емоционални разстройства",
      areas: [
        "Депресия",
        "Тревожност",
        "Паническо разстройство",
        "ОКР",
        "Биполярно разстройство"
      ]
    },
    {
      title: "Отношения и семейство",
      areas: [
        "Семейни конфликти",
        "Развод и раздяла",
        "Родителско консултиране",
        "Комуникационни проблеми",
        "Интимност и близост"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-25 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  За мен
                </h1>
                <p className="text-xl text-blue-600 font-medium">
                  Олга Колева - Психолог и Психотерапевт на Зависимости
                </p>
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Вярвам, че всеки човек носи в себе си силата да се трансформира, 
                    когато получи правилната подкрепа и разбиране.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed italic">
                    "Създавам пространство, в което можеш да бъдеш истински себе си – без маски, без страх."
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-700">Лицензиран психолог</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
                  <BadgeCheck className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-700">WAPP сертифициран</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
                  <Building className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-700">Основател център "Хармония"</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-blue-200">
                  <Image
                    src="/images/olga-koleva.jpg"
                    alt="Олга Колева - Психолог и Психотерапевт на Зависимости"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-40 -z-10"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Моят подход
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Работя с юношите и възрастните, предоставяйки научно обоснована помощ при 
                  емоционална травма, зависимости, вина, тревожност, депресия и последици от домашно насилие.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Моите сесии създават пространство без съждения, където клиентите могат да свалят 
                  маските си, да се чувстват в безопасност и да преоткрият автентичността и посоката си.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Използвам интегративен подход, съчетавайки различни терапевтични методи според 
                  индивидуалните нужди на всеки клиент.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3">Основни принципи</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Безусловно приемане и уважение</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Фокус върху ресурсите и силните страни</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Холистичен поглед към човека</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Културна чувствителност</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span>Научно обосновани методи</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Терапевтични методи
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Използвам интегративен подход, съчетавайки различни научно доказани методи
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approaches.map((approach, index) => {
                const Icon = approach.icon
                return (
                  <div key={index} className="card bg-white p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{approach.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{approach.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Специализации
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specializations.map((spec, index) => (
                <div key={index} className="card bg-white p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{spec.title}</h3>
                  <ul className="space-y-2">
                    {spec.areas.map((area, areaIndex) => (
                      <li key={areaIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  <GraduationCap className="w-6 h-6 inline mr-2" />
                  Образование
                </h2>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full"></div>
                      {index < education.length - 1 && (
                        <div className="absolute left-1.5 top-5 w-0.5 h-16 bg-blue-200"></div>
                      )}
                      
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">{edu.title}</h3>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                        {edu.details && (
                          <p className="text-sm text-gray-600 italic">{edu.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Certifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  <BadgeCheck className="w-6 h-6 inline mr-2" />
                  Сертификати и обучения
                </h2>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Професионален опит
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              <div className="card bg-white p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Основател и водещ психолог
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      Психологически център "Хармония", Бургас
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Създадох и ръководя психологически център, специализиран в терапия на зависимости, 
                      травма и семейно консултиране. Предоставям индивидуални и групови сесии на български, 
                      руски и английски език.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card bg-white p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Създател и лектор на курсове
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      "Психотерапия на зависими от психоактивни вещества и техните близки"
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Разработих и преподавам специализирани курсове за психолози и психотерапевти, 
                      фокусирани върху работата със зависимости и съзависимост.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card bg-white p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Участник в конференции
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      Национални и международни психологически форуми
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Редовно участвам в научни конференции и семинари, споделяйки опит и учейки от 
                      колеги в областта на психологията и психотерапията.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Готови ли сте да направите първата стъпка?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Свържете се с мен за консултация и да обсъдим как мога да ви помогна
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="tel:+359888494533">
                  <Phone className="w-5 h-5 mr-2" />
                  Обадете се
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <a href="mailto:olgakoleva@abv.bg">
                  <Mail className="w-5 h-5 mr-2" />
                  Пишете имейл
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-blue-200 mt-6">
              Консултации на български, руски и английски език • Център "Хармония", ул. Александровска 79, Бургас
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
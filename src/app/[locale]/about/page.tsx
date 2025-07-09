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
      details: "Дипломна работа: Аспекти на психичното функциониране на съзависимите",
      type: "degree"
    },
    {
      title: "Консултант по зависимости",
      institution: "Санкт Петербургски медико-социален институт", 
      year: "2022",
      type: "certification"
    },
    {
      title: "Специализация: Невропсихология и Психотерапия",
      institution: "Медицински университет - Пловдив",
      year: "2021-2022",
      type: "specialization"
    }
  ]

  const certifications = [
    "Основен консултант - WAPP",
    "Напреднала програма (Master level) - WAPP",
    "Травма и ПТСР психотерапия",
    "OH Cards фасилитатор", 
    "Психодрама институт DEA - 250+ часа",
    "Член на БАПС от 2024"
  ]

  const approaches = [
    {
      name: "Позитивна психотерапия",
      description: "Фокус върху ресурсите и способностите",
      icon: Heart
    },
    {
      name: "Когнитивно-поведенческа терапия",
      description: "Промяна на мисли и поведения",
      icon: Shield
    },
    {
      name: "Психодрама",
      description: "Творческо изразяване и ролева игра",
      icon: Users
    },
    {
      name: "OH Cards консултиране",
      description: "Достъп до подсъзнателни процеси",
      icon: BookOpen
    }
  ]

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream via-cream-light to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl lg:text-4xl font-bold text-charcoal">
                    За мен
                  </h1>
                  <p className="text-lg text-soft-blue font-medium">
                    Олга Колева - Психолог и Психотерапевт
                  </p>
                  <p className="text-base text-gray-medium leading-relaxed italic">
                    "Създавам пространство, в което можеш да бъдеш истински себе си – без маски, без страх."
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm text-xs">
                    <Award className="w-3.5 h-3.5 text-soft-blue" />
                    <span className="text-charcoal">Лицензиран психолог</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm text-xs">
                    <BadgeCheck className="w-3.5 h-3.5 text-sky-blue" />
                    <span className="text-charcoal">WAPP сертифициран</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm text-xs">
                    <Building className="w-3.5 h-3.5 text-steel-blue" />
                    <span className="text-charcoal">Център "Хармония"</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative w-full max-w-sm mx-auto">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-blue-200">
                    <Image
                      src="/images/olga-koleva.jpg"
                      alt="Олга Колева"
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

      {/* Philosophy & Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Моят подход
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-5">
                <p className="text-base text-charcoal leading-relaxed">
                  Работя с юношите и възрастните, предоставяйки научно обоснована помощ при 
                  емоционална травма, зависимости, вина, тревожност, депресия и последици от домашно насилие.
                </p>
                
                <p className="text-base text-charcoal leading-relaxed">
                  Моите сесии създават пространство без съждения, където клиентите могат да свалят 
                  маските си, да се чувстват в безопасност и да преоткрият автентичността и посоката си.
                </p>
                
                <p className="text-base text-charcoal leading-relaxed">
                  Използвам интегративен подход, съчетавайки различни терапевтични методи според 
                  индивидуалните нужди на всеки клиент.
                </p>
              </div>
              
              <div className="bg-cream-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal mb-4">Основни принципи</h3>
                <ul className="space-y-2 text-sm text-charcoal">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-soft-blue rounded-full mt-2"></div>
                    <span>Безусловно приемане и уважение</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-soft-blue rounded-full mt-2"></div>
                    <span>Фокус върху ресурсите и силните страни</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-soft-blue rounded-full mt-2"></div>
                    <span>Холистичен поглед към човека</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-soft-blue rounded-full mt-2"></div>
                    <span>Културна чувствителност</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-soft-blue rounded-full mt-2"></div>
                    <span>Научно обосновани методи</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-4">
                Терапевтични методи
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full mb-6"></div>
              <p className="text-base text-gray-medium">
                Използвам интегративен подход с научно доказани методи
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approaches.map((approach, index) => {
                const Icon = approach.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="w-14 h-14 bg-soft-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-soft-blue" />
                    </div>
                    <h3 className="text-base font-semibold text-charcoal mb-2">{approach.name}</h3>
                    <p className="text-xs text-gray-medium">{approach.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  Образование
                </h2>
                
                <div className="space-y-5">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-soft-blue rounded-full"></div>
                      {index < education.length - 1 && (
                        <div className="absolute left-1.5 top-5 w-0.5 h-12 bg-blue-200"></div>
                      )}
                      
                      <div className="space-y-1">
                        <h3 className="text-base font-semibold text-charcoal">{edu.title}</h3>
                        <p className="text-soft-blue text-sm">{edu.institution}</p>
                        <p className="text-xs text-gray-500">{edu.year}</p>
                        {edu.details && (
                          <p className="text-xs text-gray-600 italic">{edu.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Certifications */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal mb-6 flex items-center">
                  <BadgeCheck className="w-6 h-6 mr-2" />
                  Сертификати
                </h2>
                
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-soft-blue/5 rounded-lg">
                      <Award className="w-4 h-4 text-soft-blue mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-soft-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Готови ли сте за първата стъпка?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Свържете се с мен за консултация
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-soft-blue hover:bg-gray-100"
                asChild
              >
                <a href="tel:+359888494533">
                  <Phone className="w-5 h-5 mr-2" />
                  Обадете се
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-soft-blue"
                asChild
              >
                <a href="mailto:olgakoleva@abv.bg">
                  <Mail className="w-5 h-5 mr-2" />
                  Пишете имейл
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  Shield, 
  Heart, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Phone,
  Mail,
  Calendar,
  Award,
  Target,
  Lightbulb,
  ArrowRight
} from 'lucide-react'

export default function AddictionTherapyPage() {
  const t = useTranslations()

  const addictionTypes = [
    {
      name: "Алкохолна зависимост",
      description: "Помощ при проблеми с алкохола, от първоначални признаци до тежка зависимост",
      symptoms: ["Невъзможност за контрол", "Толерантност", "Синдром на отнемане", "Пренебрегване на задължения"]
    },
    {
      name: "Наркотична зависимост",
      description: "Лечение на зависимост от наркотични вещества с научно доказани методи",
      symptoms: ["Компулсивна употреба", "Физическа зависимост", "Социална изолация", "Здравословни проблеми"]
    },
    {
      name: "Хазартна зависимост",
      description: "Терапия при проблеми с хазарта и компулсивно залагане",
      symptoms: ["Неконтролируемо залагане", "Финансови проблеми", "Лъжи и скриване", "Депресия и тревожност"]
    },
    {
      name: "Поведенчески зависимости",
      description: "Работа с интернет зависимост, работохолизъм, пазаруване и други",
      symptoms: ["Компулсивно поведение", "Загуба на контрол", "Пренебрегване на отношения", "Емоционални проблеми"]
    }
  ]

  const therapyStages = [
    {
      stage: "1. Оценка и диагностика",
      description: "Подробна оценка на проблема, мотивацията и готовността за промяна",
      duration: "1-2 сесии",
      goals: ["Разбиране на проблема", "Оценка на риска", "Изграждане на доверие"]
    },
    {
      stage: "2. Детоксикация и стабилизация",
      description: "Подкрепа при преминаване през физическото отнемане (при необходимост с медицинска помощ)",
      duration: "2-4 седмици",
      goals: ["Физическа стабилизация", "Управление на симптомите", "Мотивационно интервю"]
    },
    {
      stage: "3. Активна терапия",
      description: "Интензивна психотерапевтична работа за промяна на мисли, чувства и поведения",
      duration: "3-6 месеца",
      goals: ["Развитие на стратегии", "Работа с тригери", "Личностен растеж"]
    },
    {
      stage: "4. Поддръжка и превенция",
      description: "Дългосрочна подкрепа за предотвратяване на рецидив и поддържане на трезвеността",
      duration: "6-12 месеца",
      goals: ["Превенция на рецидив", "Социална реинтеграция", "Качество на живот"]
    }
  ]

  const methods = [
    {
      name: "Когнитивно-поведенческа терапия (КПТ)",
      description: "Промяна на нагласи и поведения, свързани със зависимостта"
    },
    {
      name: "Позитивна психотерапия",
      description: "Фокус върху ресурсите и способностите за възстановяване"
    },
    {
      name: "Мотивационно интервю",
      description: "Повишаване на мотивацията за промяна и лечение"
    },
    {
      name: "Терапия за превенция на рецидив",
      description: "Стратегии за справяне с рискови ситуации"
    },
    {
      name: "Семейна терапия",
      description: "Включване на близките в процеса на възстановяване"
    },
    {
      name: "Групова терапия",
      description: "Подкрепа от хора с подобни преживявания"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-25 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Психотерапия на зависимости в Бургас
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Професионална помощ при алкохолна, наркотична, хазартна и поведенчески зависимости. 
              Научно обосновани методи с фокус върху дългосрочното възстановяване.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="tel:+359888494533">
                  <Phone className="w-5 h-5 mr-2" />
                  Обадете се сега
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Запазете час
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-500" />
                <span>Сертифициран специалист</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span>Поверително лечение</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-blue-500" />
                <span>Без съждения</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Разпознаете ли се в тези симптоми?
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-8">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-900 mb-4">
                    Признаци, че може да имате проблем със зависимост:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-yellow-800">
                    <ul className="space-y-2">
                      <li>• Невъзможност да спрете или контролирате употребата</li>
                      <li>• Продължавате въпреки негативните последици</li>
                      <li>• Пренебрегвате семейство, работа или хобита</li>
                      <li>• Лъжете или скривате поведението си</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Усещате вина, срам или тревожност</li>
                      <li>• Имате нужда от все повече (толерантност)</li>
                      <li>• Чувствате се зле, когато спрете (отнемане)</li>
                      <li>• Опитвали сте да спрете, но неуспешно</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Ако се разпознавате в тези симптоми, знайте че не сте сами. 
                Зависимостта е заболяване, което може да бъде лекувано успешно.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 inline-block">
                <p className="text-green-800 font-medium">
                  <CheckCircle className="w-5 h-5 inline mr-2" />
                  Първата стъпка към възстановяването е да потърсите помощ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Addictions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Типове зависимости, с които работя
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Всяка зависимост е уникална и изисква индивидуален подход
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {addictionTypes.map((addiction, index) => (
                <div key={index} className="card bg-white p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {addiction.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {addiction.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Основни симптоми:</h4>
                    <ul className="space-y-1">
                      {addiction.symptoms.map((symptom, sympIndex) => (
                        <li key={sympIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Процес на лечение
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Структуриран и научно обоснован подход към възстановяването
              </p>
            </div>
            
            <div className="space-y-8">
              {therapyStages.map((stage, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-soft">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {stage.stage}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">{stage.description}</p>
                      <div className="flex items-center text-sm text-blue-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{stage.duration}</span>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Цели на етапа:</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {stage.goals.map((goal, goalIndex) => (
                          <div key={goalIndex} className="flex items-start space-x-2">
                            <Target className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{goal}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {index < therapyStages.length - 1 && (
                    <div className="flex justify-center mt-6">
                      <ArrowRight className="w-6 h-6 text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Терапевтични методи
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Използвам комбинация от научно доказани терапевтични подходи
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methods.map((method, index) => (
                <div key={index} className="card bg-white p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {method.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Statistics */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Защо клиентите ми постигат успех
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-gray-700">от клиентите постигат 6+ месеца трезвеност</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <p className="text-gray-700">подобряват качеството на отношенията си</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-700">се чувстват по-добре емоционално</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Ключови фактори за успех
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Индивидуален подход</p>
                      <p className="text-sm text-gray-600">Всеки план се адаптира според уникалните нужди</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Дългосрочна подкрепа</p>
                      <p className="text-sm text-gray-600">Продължаваща помощ след активното лечение</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Холистичен подход</p>
                      <p className="text-sm text-gray-600">Работа с всички аспекти на живота</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Семейно включване</p>
                      <p className="text-sm text-gray-600">Подкрепа и обучение на близките</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Започнете днес вашето възстановяване
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Цени и пакети
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Индивидуална сесия (90 мин)</span>
                    <span className="text-xl font-bold text-blue-600">70 лв.</span>
                  </div>
                  
                  <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-blue-900">Пакет 4 сесии</span>
                      <span className="text-xl font-bold text-blue-600">250 лв.</span>
                    </div>
                    <p className="text-sm text-blue-700">Икономия 30 лв. • Препоръчително за добри резултати</p>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Семейна сесия (90 мин)</span>
                    <span className="text-xl font-bold text-blue-600">70 лв.</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p>✓ Безплатна първоначална консултация (15 мин)</p>
                  <p>✓ Отстъпки за студенти и пенсионери</p>
                  <p>✓ Възможност за разсрочено плащане</p>
                  <p>✓ Онлайн и присъствени сесии</p>
                </div>
              </div>
              
              <div className="bg-blue-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Запазете час сега
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Незабавен отговор</p>
                      <p className="text-blue-100 text-sm">Обикновено отговарям в рамките на 2 часа</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Гъвкави часове</p>
                      <p className="text-blue-100 text-sm">Вечерни и уикенд сесии по договаряне</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Пълна поверителност</p>
                      <p className="text-blue-100 text-sm">Спазваме най-строги стандарти за поверителност</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100" asChild>
                    <a href="tel:+359888494533">
                      <Phone className="w-4 h-4 mr-2" />
                      +359 888 494 533
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600" asChild>
                    <a href="mailto:olgakoleva@abv.bg">
                      <Mail className="w-4 h-4 mr-2" />
                      olgakoleva@abv.bg
                    </a>
                  </Button>
                </div>
                
                <p className="text-xs text-blue-200 mt-4 text-center">
                  Консултации на български, руски и английски език
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
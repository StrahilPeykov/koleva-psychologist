import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FileText, Scale, AlertTriangle, Phone, Mail, Calendar, Euro } from 'lucide-react'
import { BackButton } from '@/components/ui/BackButton'

export default function TermsOfServicePage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Общи условия за ползване
            </h1>
            <p className="text-lg text-gray-600">
              Настоящите общи условия регулират предоставянето на психологически услуги 
              и ползването на уебсайта psiholog-koleva.bg
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Последна актуализация: 6 юли 2025 г.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Provider Information */}
            <div className="bg-blue-50 rounded-xl p-8 mb-12 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                Доставчик на услуги
              </h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Име:</strong> Олга Колева</p>
                <p><strong>Професия:</strong> Психолог и психотерапевт на зависимости</p>
                <p><strong>Регистрация:</strong> Регистриран психолог в България</p>
                <p><strong>Адрес:</strong> ул. Александровска 79, Бургас 8000, България</p>
                <p><strong>Телефон:</strong> <a href="tel:+359888494533" className="text-blue-600">+359 888 494 533</a></p>
                <p><strong>Имейл:</strong> <a href="mailto:olgakoleva@abv.bg" className="text-blue-600">olgakoleva@abv.bg</a></p>
                <p><strong>Уебсайт:</strong> psiholog-koleva.bg</p>
              </div>
            </div>

            {/* Terms Acceptance */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                1. Приемане на условията
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Чрез ползването на услугите на Олга Колева и уебсайта psiholog-koleva.bg, 
                  вие се съгласявате с настоящите общи условия.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                        Важно уведомление
                      </h3>
                      <p className="text-yellow-800">
                        Ако не се съгласявате с някое от условията, моля не използвайте услугите. 
                        При промени в условията ще бъдете уведомени и ще се изисква ново съгласие.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. Описание на услугите
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Психологически услуги
                  </h3>
                  <ul className="space-y-2">
                    <li>• Индивидуални психологически консултации</li>
                    <li>• Семейни и двойкови консултации</li>
                    <li>• Психотерапия на зависимости</li>
                    <li>• Травма терапия и лечение на ПТСР</li>
                    <li>• Групова психодрама</li>
                    <li>• OH Cards консултиране</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Начини на предоставяне
                  </h3>
                  <ul className="space-y-2">
                    <li>• Присъствено в офис (Психологически център "Хармония", Бургас)</li>
                    <li>• Онлайн чрез сигурни платформи (Zoom, Skype)</li>
                    <li>• На български, руски или английски език</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    Важна забележка
                  </h3>
                  <p className="text-blue-800">
                    Предоставяните услуги са психологически консултации и психотерапия. 
                    Те НЕ заместват медицинско лечение. При необходимост от медицинска помощ 
                    ще бъдете насочени към подходящ специалист.
                  </p>
                </div>
              </div>
            </section>

            {/* Appointment Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                3. Записване и провеждане на часове
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Процедура за записване
                  </h3>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Първоначален контакт по телефон или имейл</li>
                    <li>Кратка предварителна консултация (безплатна)</li>
                    <li>Записване на час при взаимно съгласие</li>
                    <li>Потвърждаване на часа 24 часа предварително</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Продължителност и честота
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li>• <strong>Стандартна сесия:</strong> 90 минути</li>
                      <li>• <strong>Първа консултация:</strong> може да продължи до 120 минути</li>
                      <li>• <strong>Честота:</strong> обикновено седмично, по договаряне</li>
                      <li>• <strong>Курс на терапия:</strong> индивидуално определен</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Отмяна и пренасочване
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2">Безплатна отмяна</h4>
                      <p className="text-green-800 text-sm">
                        До 24 часа преди часа - без такса за отмяна
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-2">Късна отмяна</h4>
                      <p className="text-yellow-800 text-sm">
                        По-малко от 24 часа - такса 50% от цената на сесията
                      </p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-2">Неявяване</h4>
                      <p className="text-red-800 text-sm">
                        Без предварително уведомяване - такса 100% от цената на сесията
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing and Payment */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Euro className="w-6 h-6 mr-2" />
                4. Ценообразуване и плащане
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Цени на услугите
                  </h3>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Индивидуална консултация (90 мин)</span>
                        <span className="font-semibold text-blue-700">70 лв.</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Семейна консултация (90 мин)</span>
                        <span className="font-semibold text-blue-700">70 лв.</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Онлайн сесия (90 мин)</span>
                        <span className="font-semibold text-blue-700">70 лв.</span>
                      </div>
                      <div className="text-sm text-blue-600 mt-4">
                        * Всички цени включват ДДС
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Начини на плащане
                  </h3>
                  <ul className="space-y-2">
                    <li>• В брой в офиса преди или след сесията</li>
                    <li>• Банков превод (детайли ще бъдат предоставени)</li>
                    <li>• ПОС терминал с банкова карта (в офиса)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Специални условия
                  </h3>
                  <ul className="space-y-2">
                    <li>• Възможни са отстъпки за студенти (при представяне на документ)</li>
                    <li>• Пакетни цени при договаряне на поредица от сесии</li>
                    <li>• Социални случаи се разглеждат индивидуално</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Ethics */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Професионална етика и поверителност
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">
                    Професионална тайна
                  </h3>
                  <p className="text-green-800">
                    Всичко споделено по време на терапевтичните сесии е строго поверително. 
                    Информацията не се споделя с трети лица без вашето писмено съгласие, 
                    освен в законово предвидените случаи.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Етични принципи
                  </h3>
                  <ul className="space-y-2">
                    <li>• Зачитане на автономията и достойнството на клиента</li>
                    <li>• Недопускане на дискриминация по никакви основания</li>
                    <li>• Поддържане на професионални граници</li>
                    <li>• Компетентност и професионално развитие</li>
                    <li>• Отговорност и прозрачност</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ограничения на поверителността
                  </h3>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-yellow-900 font-medium mb-2">
                      Информацията може да бъде разкрита без вашето съгласие в следните случаи:
                    </p>
                    <ul className="text-yellow-800 text-sm space-y-1">
                      <li>• Непосредствена заплаха за вашия живот или живота на други</li>
                      <li>• Подозрение за насилие над деца или възрастни под настойничество</li>
                      <li>• Съдебна заповед или разпореждане</li>
                      <li>• Разследване на тежки престъпления</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                10. Контактна информация
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    За въпроси относно услугите
                  </h3>
                  <div className="space-y-2 text-blue-800">
                    <p>Телефон: <a href="tel:+359888494533" className="underline">+359 888 494 533</a></p>
                    <p>Имейл: <a href="mailto:olgakoleva@abv.bg" className="underline">olgakoleva@abv.bg</a></p>
                    <p>Адрес: ул. Александровска 79, Бургас 8000</p>
                    <p>Работно време: Пон-Пет 9:00-18:00, Съб 10:00-16:00</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    За технически въпроси
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Имейл: <a href="mailto:olgakoleva@abv.bg" className="underline">olgakoleva@abv.bg</a></p>
                    <p>Тема: "Технически въпрос - уебсайт"</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <BackButton />
              </div>
            </section>

            {/* Footer */}
            <div className="border-t pt-8 text-center text-gray-500">
              <p>
                Настоящите общи условия са съставени в съответствие с българското законодателство 
                и етичните стандарти за психологическа практика.
              </p>
              <p className="mt-2">
                Последна актуализация: 6 юли 2025 г.
              </p>
              <p className="mt-4">
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Политика за поверителност
                </Link>
                {" • "}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  Контакт
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
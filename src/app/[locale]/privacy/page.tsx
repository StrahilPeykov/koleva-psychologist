import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Shield, Lock, Eye, FileText, Phone, Mail } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Политика за поверителност
            </h1>
            <p className="text-lg text-gray-600">
              Вашата поверителност е от изключително значение за нас. 
              Тази политика обяснява как събираме, използваме и защитаваме вашите лични данни.
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
            
            {/* Contact Information */}
            <div className="bg-blue-50 rounded-xl p-8 mb-12 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                Администратор на лични данни
              </h2>
              <div className="space-y-3 text-gray-700">
                <p><strong>Име:</strong> Олга Колева</p>
                <p><strong>Дейност:</strong> Психолог и психотерапевт на зависимости</p>
                <p><strong>Адрес:</strong> ул. Александровска 79, Бургас 8000, България</p>
                <p><strong>Телефон:</strong> <a href="tel:+359888494533" className="text-blue-600">+359 888 494 533</a></p>
                <p><strong>Имейл:</strong> <a href="mailto:olgakoleva@abv.bg" className="text-blue-600">olgakoleva@abv.bg</a></p>
              </div>
            </div>

            {/* Data Collection */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                1. Какви данни събираме
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Лични идентификационни данни
              </h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Име и фамилия</li>
                <li>• Телефонен номер</li>
                <li>• Имейл адрес</li>
                <li>• Възраст и дата на раждане (при необходимост)</li>
                <li>• Адрес (при необходимост за документи)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Медицинска и психологическа информация
              </h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Психологическа история и текущо състояние</li>
                <li>• Информация за предишни терапии</li>
                <li>• Медицинска история (при необходимост)</li>
                <li>• Семейна история (при необходимост)</li>
                <li>• Бележки от терапевтични сесии</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Данни от уебсайта
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• IP адрес</li>
                <li>• Данни от браузъра</li>
                <li>• Cookies (само технически необходими)</li>
                <li>• Данни за използването на сайта</li>
              </ul>
            </section>

            {/* Data Usage */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. За какво използваме данните
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Предоставяне на психологически услуги
                  </h3>
                  <p>
                    Използваме вашите лични данни за предоставяне на психологически консултации, 
                    психотерапия и други професионални услуги в областта на психичното здраве.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Комуникация и записване на часове
                  </h3>
                  <p>
                    Свързваме се с вас за потвърждаване на часове, изпращане на напомняния 
                    и предоставяне на важна информация относно терапията.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Законови изисквания
                  </h3>
                  <p>
                    Спазваме изискванията на българското законодателство за документиране 
                    на психологически услуги и поддържане на клинични записи.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Подобряване на услугите
                  </h3>
                  <p>
                    Анализираме анонимни данни за подобряване качеството на предоставяните услуги 
                    и разработване на нови терапевтични програми.
                  </p>
                </div>
              </div>
            </section>

            {/* Legal Basis */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. Правно основание за обработка
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Съгласие</h4>
                  <p>Вие сте дали ясно съгласие за обработка на данните за определена цел.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Договорни задължения</h4>
                  <p>Обработката е необходима за изпълнение на договор за психологически услуги.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Законови изисквания</h4>
                  <p>Спазване на задължения по български закони за здравеопазването.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Жизненоважни интереси</h4>
                  <p>В критични ситуации, когато е необходима незабавна намеса.</p>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-2" />
                4. Как защитаваме данните
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Технически мерки
                  </h3>
                  <ul className="space-y-2">
                    <li>• SSL шифроване за всички данни в транзит</li>
                    <li>• Шифроване на данни в почивка</li>
                    <li>• Сигурни сървъри с редовни актуализации</li>
                    <li>• Защитени резервни копия</li>
                    <li>• Двуфакторна автентикация където е приложимо</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Организационни мерки
                  </h3>
                  <ul className="space-y-2">
                    <li>• Ограничен достъп само до необходимия персонал</li>
                    <li>• Редовно обучение по защита на данните</li>
                    <li>• Строги процедури за обработка на данни</li>
                    <li>• Редовни одити на сигурността</li>
                    <li>• Плановете за реагиране при инциденти</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Физическа сигурност
                  </h3>
                  <ul className="space-y-2">
                    <li>• Заключени шкафове за хартиени досиета</li>
                    <li>• Контролиран достъп до офиса</li>
                    <li>• Сигурно унищожаване на документи</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Споделяне на данни
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Принцип на поверителност
                  </h3>
                  <p>
                    Като психолог, аз съм обвързана с професионална тайна. Вашите данни 
                    <strong> НИКОГА не се споделят</strong> без вашето изрично писмено съгласие, 
                    освен в законово предвидените случаи.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Изключения (само при законово изискване):
                  </h3>
                  <ul className="space-y-2">
                    <li>• Непосредствена заплаха за живота на клиента или други лица</li>
                    <li>• Подозрение за насилие над деца (съгласно Закона за защита на детето)</li>
                    <li>• Съдебна заповед или решение</li>
                    <li>• Разследване от правоохранителните органи при тежки престъпления</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Професионална консултация
                  </h3>
                  <p>
                    При необходимост от професионална консултация с колеги, всички лични 
                    идентификатори се премахват (анонимизиране).
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-2" />
                6. Вашите права
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Право на достъп</h4>
                    <p className="text-blue-800 text-sm">Можете да поискате копие от всички данни, които съхраняваме за вас.</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Право на поправка</h4>
                    <p className="text-blue-800 text-sm">Можете да поискате корекция на неточни или непълни данни.</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Право на изтриване</h4>
                    <p className="text-blue-800 text-sm">При определени условия можете да поискате изтриване на данните.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Право на ограничаване</h4>
                    <p className="text-blue-800 text-sm">Можете да поискате ограничаване на обработката в определени случаи.</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Право на преносимост</h4>
                    <p className="text-blue-800 text-sm">Можете да поискате данните си в структуриран формат.</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Право на възражение</h4>
                    <p className="text-blue-800 text-sm">Можете да възразите срещу определени видове обработка.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Как да упражните правата си:</h4>
                <p className="text-gray-700 mb-3">
                  За да упражните някое от правата си, моля свържете се с мен чрез:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>• Телефон: <a href="tel:+359888494533" className="text-blue-600">+359 888 494 533</a></p>
                  <p>• Имейл: <a href="mailto:olgakoleva@abv.bg" className="text-blue-600">olgakoleva@abv.bg</a></p>
                  <p>• Лично в офиса: ул. Александровска 79, Бургас</p>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                7. Период на съхранение
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Активни клиенти</h4>
                  <p>Данните се съхраняват докато продължава терапевтичната връзка.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Приключили терапии</h4>
                  <p>Клиничните записи се съхраняват 5 години след приключване на терапията (съгласно професионалните стандарти).</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Административни данни</h4>
                  <p>Контактни данни и данни за плащания се съхраняват според данъчните изисквания (5 години).</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Данни от уебсайта</h4>
                  <p>Технически данни (логове) се съхраняват до 12 месеца.</p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                8. Използване на cookies
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Нашият уебсайт използва минимален набор от cookies, необходими за правилното функциониране:
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">Технически необходими cookies</h4>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• Съхранение на езиковите предпочитания</li>
                      <li>• Поддържане на сесията при навигация</li>
                      <li>• Основни функции за сигурност</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">НЕ използваме:</h4>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• Аналитични cookies</li>
                      <li>• Рекламни cookies</li>
                      <li>• Социални медии cookies</li>
                      <li>• Проследяващи технологии</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Changes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                9. Промени в политиката
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Тази политика може да бъде актуализирана периодично за отразяване на промени 
                  в нашите практики или в съответните закони.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">При съществени промени:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Ще ви уведомим по имейл (ако имаме вашия адрес)</li>
                    <li>• Ще поставим видимо съобщение на уебсайта</li>
                    <li>• Ще поискаме ново съгласие при необходимост</li>
                  </ul>
                </div>
                
                <p>
                  Моля проверявайте тази страница периодично за актуализации.
                </p>
              </div>
            </section>

            {/* Contact and Complaints */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                10. Контакт и жалби
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Свържете се с нас
                  </h3>
                  <div className="space-y-2 text-blue-800">
                    <p><strong>Олга Колева</strong></p>
                    <p>Телефон: <a href="tel:+359888494533" className="underline">+359 888 494 533</a></p>
                    <p>Имейл: <a href="mailto:olgakoleva@abv.bg" className="underline">olgakoleva@abv.bg</a></p>
                    <p>Адрес: ул. Александровска 79, Бургас 8000</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Комисия за защита на личните данни
                  </h3>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p>Ако не сте доволни от отговора ни, можете да подадете жалба до:</p>
                    <p><strong>КЗЛД</strong></p>
                    <p>ул. "Проф. Фритьоф Нансен" 2, София 1142</p>
                    <p>Телефон: +359 2 915 3523</p>
                    <p>Имейл: kzld@cpdp.bg</p>
                    <p>Уебсайт: www.cpdp.bg</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t pt-8 text-center text-gray-500">
              <p>
                Тази политика за поверителност е съставена в съответствие с GDPR и българското законодателство.
              </p>
              <p className="mt-2">
                Последна актуализация: 6 юли 2025 г.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
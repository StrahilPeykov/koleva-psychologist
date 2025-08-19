import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { BackButton } from '@/components/ui/BackButton'
import { 
  Home, 
  Search, 
  Phone, 
  Mail, 
  HelpCircle,
  FileText,
  Calendar,
  MapPin
} from 'lucide-react'

export default function NotFoundPage() {

  const quickLinks = [
    {
      title: "Начало",
      description: "Върнете се към началната страница",
      href: "/",
      icon: Home
    },
    {
      title: "Услуги",
      description: "Разгледайте психологическите услуги",
      href: "/services",
      icon: FileText
    },
    {
      title: "Запази час",
      description: "Запазете консултация",
      href: "/contact",
      icon: Calendar
    },
    {
      title: "За мен",
      description: "Научете повече за Олга Колева",
      href: "/about",
      icon: HelpCircle
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-25">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* 404 Visual */}
          <div className="mb-12">
            <div className="relative inline-block">
              <h1 className="text-[150px] lg:text-[200px] font-bold text-blue-100 leading-none select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-blue-600 rounded-full flex items-center justify-center">
                  <Search className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Страницата не е намерена
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Изглежда, че страницата, която търсите, не съществува или е преместена.
            </p>
            <p className="text-gray-500">
              Не се притеснявайте - това се случва понякога. Ето как можете да продължите:
            </p>
          </div>

          {/* Quick Actions */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Към началото
                </Link>
              </Button>
              <BackButton />
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Полезни страници
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <Link 
                    key={index}
                    href={link.href}
                    className="card bg-white p-6 text-center hover:shadow-soft-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {link.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {link.description}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Нужна ви е помощ?
            </h3>
            <p className="text-gray-600 mb-8">
              Ако не можете да намерите това, което търсите, не се колебайте да се свържете с мен директно.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Телефон</h4>
                <a href="tel:+359888494533" className="text-blue-600 hover:text-blue-800 font-medium">
                  +359 888 494 533
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Имейл</h4>
                <a href="mailto:olgakoleva@abv.bg" className="text-green-600 hover:text-green-800 font-medium">
                  olgakoleva@abv.bg
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Адрес</h4>
                <p className="text-purple-600 font-medium text-sm">
                  ул. Александровска 79<br />
                  Бургас
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Спешни случаи
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Ако преживявате криза или мисли за самонараняване, моля обадете се на 
                    Националната телефонна линия: <strong>0800 20 100</strong> (24/7, безплатна)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Ако мислите, че това е грешка на сайта, моля 
              <a href="mailto:olgakoleva@abv.bg" className="text-blue-600 hover:underline ml-1">
                съобщете ни
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
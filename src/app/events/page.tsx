import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Sparkles,
  Heart,
  Filter,
  ChevronRight
} from 'lucide-react'

export default function EventsPage() {

  const upcomingEvents = [
    {
      id: 1,
      title: "Групова терапия: Управление на тревожността",
      description: "Научете практически техники за справяне с тревожността в подкрепяща групова среда",
      date: "25 март 2024",
      time: "18:00 - 20:00",
      location: "Център Хармония",
      type: "Групова терапия",
      spots: 8,
      maxSpots: 12,
      price: "40 лв."
    },
    {
      id: 2,
      title: "Уъркшоп: Изграждане на здрави граници",
      description: "Интерактивен уъркшоп за развиване на умения за поставяне и поддържане на лични граници",
      date: "30 март 2024",
      time: "10:00 - 13:00",
      location: "Център Хармония",
      type: "Уъркшоп",
      spots: 5,
      maxSpots: 15,
      price: "60 лв."
    },
    {
      id: 3,
      title: "Безплатна лекция: Травма и възстановяване",
      description: "Открита лекция за разбиране на травмата и пътищата към изцеление",
      date: "5 април 2024",
      time: "19:00 - 20:30",
      location: "Онлайн (Zoom)",
      type: "Лекция",
      spots: 45,
      maxSpots: 100,
      price: "Безплатно"
    }
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Семинар: Съзависимост и пътят към свободата",
      date: "15 февруари 2024",
      attendees: 25,
      type: "Семинар"
    },
    {
      id: 5,
      title: "Групова терапия: Преодоляване на депресията",
      date: "20 януари 2024",
      attendees: 10,
      type: "Групова терапия"
    }
  ]

  const eventTypes = [
    "Всички",
    "Групова терапия",
    "Уъркшоп",
    "Семинар",
    "Лекция"
  ]

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Събития и групи
            </h1>
            <p className="text-lg text-gray-medium mb-6">
              Присъединете се към нашите групови сесии, уъркшопи и образователни събития
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-soft-blue" />
                <span className="text-charcoal">Малки групи</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Heart className="w-3.5 h-3.5 text-sky-blue" />
                <span className="text-charcoal">Безопасна среда</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
                <Users className="w-3.5 h-3.5 text-steel-blue" />
                <span className="text-charcoal">Професионално водене</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 overflow-x-auto">
            {eventTypes.map((type, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  index === 0 
                    ? 'bg-soft-blue text-white' 
                    : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-charcoal mb-8">
              Предстоящи събития
            </h2>
            
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 bg-soft-blue/10 text-soft-blue text-xs font-medium rounded-full mb-3">
                            {event.type}
                          </span>
                          <h3 className="text-xl font-semibold text-charcoal mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-medium text-sm">
                            {event.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1.5 text-soft-blue" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1.5 text-sky-blue" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1.5 text-steel-blue" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:border-l lg:pl-6 border-gray-100">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">Свободни места</span>
                            <span className="text-sm font-semibold text-charcoal">
                              {event.spots} от {event.maxSpots}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-soft-blue h-2 rounded-full"
                              style={{ width: `${((event.maxSpots - event.spots) / event.maxSpots) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-charcoal">{event.price}</span>
                          <Button size="sm" className="bg-soft-blue hover:bg-steel-blue" asChild>
                            <Link href={`/events/${event.id}`}>
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

      {/* Benefits Section */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                Защо групова работа?
              </h2>
              <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-soft-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-soft-blue" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Споделен опит</h3>
                <p className="text-sm text-gray-medium">
                  Учете се от преживяванията на другите в подкрепяща среда
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-sky-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-sky-blue" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Емоционална подкрепа</h3>
                <p className="text-sm text-gray-medium">
                  Получавате разбиране и подкрепа от хора с подобни преживявания
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-steel-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-steel-blue" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Нови перспективи</h3>
                <p className="text-sm text-gray-medium">
                  Откриване на нови гледни точки и решения чрез групова динамика
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-charcoal mb-8">
              Минали събития
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs text-gray-500 font-medium">
                        {event.type}
                      </span>
                      <h3 className="text-lg font-semibold text-charcoal mt-1 mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          {event.date}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-3.5 h-3.5 mr-1" />
                          {event.attendees} участници
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-soft-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Не пропускайте предстоящите събития
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Абонирайте се, за да получавате известия за нови групи и уъркшопи
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Вашият имейл"
                className="flex-1 px-4 py-3 border border-white/30 bg-white/10 rounded-lg placeholder-blue-100 text-white focus:ring-2 focus:ring-white/30 focus:border-white text-sm"
                required
              />
              <Button 
                type="submit" 
                className="bg-white text-soft-blue hover:bg-gray-100"
              >
                Абонирай се
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
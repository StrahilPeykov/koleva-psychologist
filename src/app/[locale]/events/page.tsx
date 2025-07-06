"use client"

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Calendar, Clock, MapPin, Users, Award, Euro, Phone, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getUpcomingEvents, getPastEvents, urlFor, type Event } from '@/lib/sanity'

export default function EventsPage() {
  const t = useTranslations()
  const locale = useLocale()
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
  const [pastEvents, setPastEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch events on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const [upcoming, past] = await Promise.all([
          getUpcomingEvents(locale),
          getPastEvents(locale)
        ])
        setUpcomingEvents(upcoming)
        setPastEvents(past)
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [locale])

  const getEventTypeLabel = (type: string) => {
    const types = {
      seminar: "Семинар",
      workshop: "Работилница",
      course: "Курс", 
      webinar: "Уебинар",
      conference: "Конференция",
      'group-therapy': "Групова терапия"
    }
    return types[type as keyof typeof types] || type
  }

  const getLocationLabel = (location: string) => {
    const locations = {
      online: "Онлайн",
      burgas: "Бургас",
      plovdiv: "Пловдив",
      sofia: "София",
      other: "Друго"
    }
    return locations[location as keyof typeof locations] || location
  }

  const getStatusLabel = (status: string) => {
    const statuses = {
      upcoming: "Предстоящо",
      open: "Отворена регистрация",
      closed: "Затворена регистрация",
      completed: "Завършено",
      cancelled: "Отменено",
      'in-progress': "В прогрес"
    }
    return statuses[status as keyof typeof statuses] || status
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'bg' ? 'bg-BG' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatDateTime = (dateString: string, timeString: string) => {
    const date = new Date(`${dateString}T${timeString}`)
    return date.toLocaleDateString(locale === 'bg' ? 'bg-BG' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getTargetAudienceLabels = (audience: string[]) => {
    const labels = {
      students: 'Студенти',
      psychologists: 'Психолози',
      psychotherapists: 'Психотерапевти',
      general: 'Широка публика',
      medical: 'Медицински специалисти',
      families: 'Семейства',
      educators: 'Педагози',
      hr: 'HR специалисти'
    }
    
    return audience.map(aud => labels[aud as keyof typeof labels] || aud).join(' • ')
  }

  const isDiscountValid = (discountDeadline?: string) => {
    if (!discountDeadline) return false
    return new Date(discountDeadline) > new Date()
  }

  const EventCard = ({ event, isPast = false }: { event: Event, isPast?: boolean }) => (
    <div className="card bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
      {/* Event Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
        {event.image ? (
          <Image
            src={urlFor(event.image).width(600).height(300).quality(80).url()}
            alt={event.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-blue-600">
              <Calendar className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm font-medium">{getEventTypeLabel(event.eventType)}</p>
            </div>
          </div>
        )}
        
        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            event.status === 'open' ? 'bg-green-100 text-green-800' :
            event.status === 'closed' ? 'bg-red-100 text-red-800' :
            event.status === 'completed' ? 'bg-gray-100 text-gray-800' :
            event.status === 'cancelled' ? 'bg-red-100 text-red-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {getStatusLabel(event.status)}
          </span>
        </div>
        
        {/* Discount badge */}
        {event.discountPrice && event.discountDeadline && !isPast && isDiscountValid(event.discountDeadline) && (
          <div className="absolute top-4 right-4">
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
              Отстъпка до {formatDate(event.discountDeadline)}
            </span>
          </div>
        )}
      </div>
      
      {/* Event Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
        </div>
        
        {/* Event Details */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span>{formatDate(event.startDate)}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>
              {event.startTime}
              {event.endTime && ` - ${event.endTime}`}
              {event.duration && ` • ${event.duration}`}
            </span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>{getLocationLabel(event.location)}</span>
            {event.locationDetails?.venue && (
              <span className="text-gray-500">• {event.locationDetails.venue}</span>
            )}
          </div>
          
          {event.targetAudience && event.targetAudience.length > 0 && (
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Users className="w-4 h-4 text-blue-500" />
              <span>{getTargetAudienceLabels(event.targetAudience)}</span>
            </div>
          )}
        </div>
        
        {/* Certificate */}
        {event.certificate?.provided && (
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <div className="flex items-start space-x-2">
              <Award className="w-4 h-4 text-blue-600 mt-0.5" />
              <div className="text-xs text-blue-800">
                <p className="font-medium">{event.certificate.type || 'Сертификат за участие'}</p>
                {event.certificate.issuingOrganization && (
                  <p className="mt-1">{event.certificate.issuingOrganization}</p>
                )}
                {event.certificate.hours && (
                  <p className="mt-1">{event.certificate.hours} часа обучение</p>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Pricing and Action */}
        {!isPast && (
          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                {event.discountPrice && isDiscountValid(event.discountDeadline) ? (
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-600">{event.discountPrice} лв.</span>
                      <span className="text-sm text-gray-500 line-through">{event.price} лв.</span>
                    </div>
                    <p className="text-xs text-green-600">
                      Отстъпка до {formatDate(event.discountDeadline!)}
                    </p>
                  </div>
                ) : (
                  <span className="text-lg font-bold text-blue-600">{event.price} лв.</span>
                )}
              </div>
              
              {event.status === 'open' && (
                <div className="space-y-2">
                  {event.registrationLink ? (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                        Регистрация
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                      <a href="tel:+359888494533">
                        <Phone className="w-3 h-3 mr-1" />
                        Регистрация
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Зареждане на събитията...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-25 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Семинари и курсове
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Професионално обучение и развитие в областта на психологията и психотерапията
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Award className="w-4 h-4 text-blue-500" />
                <span>Сертифицирани курсове</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="w-4 h-4 text-blue-500" />
                <span>За специалисти и студенти</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>Присъствено и онлайн</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Предстоящи събития</h2>
            <div className="w-24 h-1 bg-blue-600"></div>
          </div>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">В момента няма планирани събития.</p>
              <p className="text-sm text-gray-500 mt-2">
                Следете за нови анонси или се свържете с нас за повече информация.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Как да се регистрирате</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Телефонна регистрация</p>
                      <p className="text-sm text-gray-600">
                        Обадете се на <a href="tel:+359888494533" className="text-blue-600 hover:text-blue-800">+359 888 494 533</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Имейл регистрация</p>
                      <p className="text-sm text-gray-600">
                        Пишете на <a href="mailto:olgakoleva@abv.bg" className="text-blue-600 hover:text-blue-800">olgakoleva@abv.bg</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Euro className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Плащане</p>
                      <p className="text-sm text-gray-600">
                        Банков превод или в брой. Възможни са разсрочени плащания за курсове.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-semibold text-blue-900 mb-4">Важна информация</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Всички цени са в BGN и включват ДДС</li>
                  <li>• Сертификатите се издават при 80% присъствие</li>
                  <li>• Материалите са включени в цената</li>
                  <li>• Възможна е отмяна до 7 дни преди събитието</li>
                  <li>• Групите са ограничени до 20 участника</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Минали събития</h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {pastEvents.slice(0, 4).map((event) => (
                <EventCard key={event._id} event={event} isPast={true} />
              ))}
            </div>
            
            {pastEvents.length > 4 && (
              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link href={`/${locale}/events/archive`}>
                    Вижте всички минали събития
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  )
}
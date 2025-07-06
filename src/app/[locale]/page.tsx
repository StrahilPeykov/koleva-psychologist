import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import { Phone, Mail, MapPin, Calendar } from 'lucide-react'

export default function HomePage() {
  const t = useTranslations()

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  {t('hero.title')}
                </h1>
                <p className="text-xl text-blue-600 font-medium">
                  {t('hero.subtitle')}
                </p>
                <p className="text-lg text-gray-600 italic">
                  "{t('hero.description')}"
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="#booking">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('hero.cta')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#about">
                    {t('hero.about')}
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/olga-koleva.jpg"
                    alt="Олга Колева - Психолог"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-30 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('services.languages')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title={t('services.individual.title')}
              description={t('services.individual.description')}
              icon="👤"
            />
            <ServiceCard
              title={t('services.family.title')}
              description={t('services.family.description')}
              icon="👨‍👩‍👧‍👦"
            />
            <ServiceCard
              title={t('services.addiction.title')}
              description={t('services.addiction.description')}
              icon="🔗"
            />
            <ServiceCard
              title={t('services.trauma.title')}
              description={t('services.trauma.description')}
              icon="💚"
            />
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-block bg-blue-50 rounded-lg p-6">
              <p className="text-xl font-semibold text-blue-800">
                {t('services.price')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('contact.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{t('contact.center')}</p>
                    <p className="text-gray-600">{t('contact.address')}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <a href="tel:+359888494533" className="text-gray-900 hover:text-blue-600">
                    {t('contact.phone')}
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <a href="mailto:olgakoleva@abv.bg" className="text-gray-900 hover:text-blue-600">
                    {t('contact.email')}
                  </a>
                </div>
              </div>
            </div>
            
            {/* Booking */}
            <div id="booking" className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('booking.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('booking.description')}
              </p>
              
              {/* Calendly embed will go here */}
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">Calendly интеграция</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  {t('booking.button')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
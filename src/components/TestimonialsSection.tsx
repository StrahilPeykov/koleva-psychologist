'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Users, Calendar, Phone } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "Олга ми помогна да преодолея тревожността, която ме мъчеше години наред. Сега се чувствам много по-уверено и спокойно в ежедневието си.",
    author: "М. П.",
    service: "Индивидуална терапия",
    rating: 5,
    location: "Бургас"
  },
  {
    id: 2,
    text: "Благодарение на семейните консултации успяхме да преодолеем кризата в брака ни. Олга ни научи как да комуникираме по-добре.",
    author: "Д. и С. К.",
    service: "Семейна консултация",
    rating: 5,
    location: "Бургас"
  },
  {
    id: 3,
    text: "Пътят към преодоляване на зависимостта беше труден, но с подкрепата на Олга успях. Сега съм трезв вече 8 месеца.",
    author: "А. М.",
    service: "Терапия на зависимости",
    rating: 5,
    location: "Бургас"
  },
  {
    id: 4,
    text: "След травматичното преживяване мислех, че никога няма да се възстановя. Олга ми помогна да открия силата в себе си отново.",
    author: "Е. Д.",
    service: "Травма терапия",
    rating: 5,
    location: "Бургас"
  },
  {
    id: 5,
    text: "Професионализмът и топлината на Олга създават атмосфера на пълно доверие. Препоръчвам я без колебание.",
    author: "В. С.",
    service: "Индивидуална терапия",
    rating: 5,
    location: "Бургас"
  },
  {
    id: 6,
    text: "Работата с OH Cards беше невероятно откритие за мен. Олга умее да води процеса с необикновена интуиция.",
    author: "Н. Т.",
    service: "OH Cards консултация",
    rating: 5,
    location: "Бургас"
  }
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-sky-blue/10 to-powder-blue/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Какво споделят клиентите
            </h2>
            <div className="w-20 h-1 bg-soft-blue mx-auto rounded-full mb-6"></div>
            <p className="text-base text-gray-medium">
              Реални отзиви от хора, които са променили живота си с професионална помощ
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-soft-blue/10 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-soft-blue" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <p className="text-lg md:text-xl text-charcoal leading-relaxed italic mb-6">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="space-y-1">
                  <p className="font-semibold text-charcoal">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-sm text-soft-blue">
                    {testimonials[currentTestimonial].service}
                  </p>
                  <p className="text-xs text-gray-medium">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-charcoal" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-charcoal" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-soft-blue scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-soft-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-soft-blue" />
              </div>
              <div className="text-2xl font-bold text-soft-blue mb-1">4.9/5</div>
              <div className="text-sm text-gray-medium">Средна оценка</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-sky-blue" />
              </div>
              <div className="text-2xl font-bold text-sky-blue mb-1">95%</div>
              <div className="text-sm text-gray-medium">Препоръчват услугите</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-steel-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-steel-blue" />
              </div>
              <div className="text-2xl font-bold text-steel-blue mb-1">500+</div>
              <div className="text-sm text-gray-medium">Помогнати клиенти</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-medium mb-6">
              Готови ли сте да започнете вашето пътуване към подобрение?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-soft-blue text-white rounded-lg hover:bg-steel-blue transition-colors">
                <a href="https://calendly.com/olga-koleva" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Запази консултация
                </a>
              </button>
              <button className="px-6 py-3 border border-soft-blue text-soft-blue rounded-lg hover:bg-soft-blue/10 transition-colors">
                <a href="tel:+359888494533" className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Обади се сега
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
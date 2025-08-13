import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import ServiceCard from '@/components/ServiceCard'
import { Phone, Mail, MapPin, Calendar, Award, Users, Heart, Shield, Sparkles, Brain, Flower2, Sun } from 'lucide-react'

export default function EnglishHomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section - Optimized for screen height */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-gradient-to-br from-cream via-cream-light to-cream">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-soft-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-blue rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                  Olga Koleva
                </h1>
                <p className="text-lg md:text-xl text-soft-blue font-medium">
                  Psychologist & Addiction Psychotherapist
                </p>
                <p className="text-base md:text-lg text-gray-medium italic leading-relaxed font-light max-w-lg">
                  &ldquo;Creating a space where you can be your authentic self – without masks, without fear&rdquo;
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <Award className="w-3.5 h-3.5 text-soft-blue" />
                  <span className="text-charcoal">Licensed psychologist</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <Brain className="w-3.5 h-3.5 text-steel-blue" />
                  <span className="text-charcoal">Psychotherapist</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-sky-blue" />
                  <span className="text-charcoal">Trauma therapy</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg" className="bg-soft-blue hover:bg-steel-blue text-white shadow-md">
                  <Link href="/en#booking">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10">
                  <Link href="/en/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in lg:pl-8">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-powder-blue/20 to-sky-blue/20">
                  <Image
                    src="/images/olga-koleva.jpg"
                    alt="Olga Koleva - Psychologist and Psychotherapist"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                
                {/* Subtle decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-soft-blue/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-sky-blue/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
          
          {/* Quick Stats - Compact */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12 lg:hidden">
            <div className="text-center">
              <div className="text-2xl font-bold text-soft-blue">90</div>
              <div className="text-xs text-gray-medium">min sessions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-steel-blue">3</div>
              <div className="text-xs text-gray-medium">languages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-blue">70</div>
              <div className="text-xs text-gray-medium">BGN session</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Compact */}
      <section className="py-12 md:py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-soft-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                <Shield className="w-7 h-7 text-soft-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Licensed specialist</h3>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-sky-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                <Heart className="w-7 h-7 text-sky-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Individual approach</h3>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-steel-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                <Users className="w-7 h-7 text-steel-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Multilingual</h3>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-14 h-14 bg-powder-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300">
                <MapPin className="w-7 h-7 text-powder-blue" />
              </div>
              <h3 className="font-medium text-sm text-charcoal">Convenient location</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Refined */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Psychological Services
            </h2>
            <div className="w-20 h-1 bg-soft-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-base text-gray-medium max-w-2xl mx-auto">
              Sessions available in Bulgarian, Russian, and English
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <ServiceCard
              title="Individual Counseling"
              description="90-minute sessions for emotional trauma, addictions, anxiety, depression, and OCD. Personalized approach"
              icon={<Sparkles className="w-8 h-8 text-soft-blue" />}
            />
            <ServiceCard
              title="Family Counseling"
              description="Working with families affected by addiction and family crises. Restoring healthy relationships"
              icon={<Users className="w-8 h-8 text-sky-blue" />}
            />
            <ServiceCard
              title="Addiction Psychotherapy"
              description="Specialized treatment for substance and behavioral addictions using evidence-based methods"
              icon={<Brain className="w-8 h-8 text-steel-blue" />}
            />
            <ServiceCard
              title="Trauma Therapy"
              description="PTSD therapy and working with consequences of domestic violence, sexual abuse, and childhood trauma"
              icon={<Heart className="w-8 h-8 text-powder-blue" />}
            />
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-soft-blue/10 rounded-2xl p-6 md:p-8">
              <p className="text-2xl md:text-3xl font-bold text-soft-blue mb-2">
                70 BGN for 90 minutes
              </p>
              <p className="text-sm text-gray-medium">
                Duration: 90 minutes • Individual approach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section - Refined */}
      <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-cream-light to-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-8">
                  Contact
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4 p-5 bg-white/80 rounded-xl shadow-sm">
                    <MapPin className="w-5 h-5 text-soft-blue mt-1" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Harmony Psychological Center</p>
                      <p className="text-gray-medium text-sm">79 Aleksandrovska St., Burgas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-5 bg-white/80 rounded-xl shadow-sm">
                    <Phone className="w-5 h-5 text-sky-blue" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Phone</p>
                      <a href="tel:+359888494533" className="text-soft-blue hover:text-sky-blue transition-colors text-sm">
                        +359 888 494 533
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-5 bg-white/80 rounded-xl shadow-sm">
                    <Mail className="w-5 h-5 text-steel-blue" />
                    <div>
                      <p className="font-medium text-charcoal text-sm">Email</p>
                      <a href="mailto:olgakoleva@abv.bg" className="text-soft-blue hover:text-sky-blue transition-colors text-sm">
                        olgakoleva@abv.bg
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Booking */}
              <div id="booking" className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Book Session
                </h3>
                <p className="text-gray-medium mb-6 text-sm">
                  Choose a convenient time for consultation. Online counseling is also available.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-charcoal text-sm">Consultation (90 min)</span>
                    <span className="font-bold text-soft-blue">70 BGN</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-charcoal text-sm">Family consultation</span>
                    <span className="font-bold text-soft-blue">70 BGN</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-charcoal text-sm">Online session</span>
                    <span className="font-bold text-soft-blue">70 BGN</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-soft-blue hover:bg-steel-blue" asChild>
                    <a href="tel:+359888494533">
                      <Phone className="w-4 h-4 mr-2" />
                      Call for appointment
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10" asChild>
                    <a href="mailto:olgakoleva@abv.bg">
                      <Mail className="w-4 h-4 mr-2" />
                      Send email
                    </a>
                  </Button>
                </div>
                
                <p className="text-xs text-gray-medium mt-4 text-center">
                  * Payment is made at the office or by bank transfer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { 
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Tag,
  Search,
  Filter
} from 'lucide-react'

export default function ArticlesPage() {
  const t = useTranslations()

  const articles = [
    {
      id: 1,
      title: "Как да разпознаем признаците на емоционално изтощение",
      excerpt: "Емоционалното изтощение е състояние, което се развива постепенно и често остава незабелязано...",
      category: "Психично здраве",
      readTime: "5 мин",
      date: "15 март 2024",
      image: "/images/article-burnout.jpg",
      tags: ["стрес", "бърнаут", "емоции"]
    },
    {
      id: 2,
      title: "Травма и изцеление: Пътят към възстановяване",
      excerpt: "Травматичните преживявания оставят дълбоки следи в нашата психика, но изцелението е възможно...",
      category: "Травма терапия",
      readTime: "8 мин",
      date: "10 март 2024",
      image: "/images/article-trauma.jpg",
      tags: ["травма", "ПТСР", "терапия"]
    },
    {
      id: 3,
      title: "Зависимостта като симптом: Разбиране на дълбоките причини",
      excerpt: "Зависимостта рядко е самостоятелен проблем. Тя често е симптом на по-дълбоки емоционални рани...",
      category: "Зависимости",
      readTime: "7 мин",
      date: "5 март 2024",
      image: "/images/article-addiction.jpg",
      tags: ["зависимост", "психология", "лечение"]
    },
    {
      id: 4,
      title: "Изграждане на здрави граници във взаимоотношенията",
      excerpt: "Личните граници са основата на здравите взаимоотношения. Те ни помагат да защитим...",
      category: "Взаимоотношения",
      readTime: "6 мин",
      date: "28 февруари 2024",
      image: "/images/article-boundaries.jpg",
      tags: ["граници", "отношения", "комуникация"]
    }
  ]

  const categories = [
    "Всички",
    "Психично здраве",
    "Травма терапия",
    "Зависимости",
    "Взаимоотношения",
    "Личностно развитие"
  ]

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Статии и ресурси
            </h1>
            <p className="text-lg text-gray-medium mb-6">
              Полезна информация за психичното здраве и личностното развитие
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Търсете статии..."
                  className="w-full px-5 py-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 overflow-x-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  index === 0 
                    ? 'bg-soft-blue text-white' 
                    : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 bg-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-soft-blue/20 to-sky-blue/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-soft-blue/30" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-soft-blue bg-soft-blue/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          {article.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-charcoal mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-medium text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="text-xs text-gray-500">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-soft-blue hover:text-steel-blue"
                        asChild
                      >
                        <Link href={`/articles/${article.id}`}>
                          Прочетете
                          <ArrowRight className="w-3.5 h-3.5 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" className="border-soft-blue/30 text-soft-blue hover:bg-soft-blue/10">
                Вижте още статии
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-cream-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              Абонирайте се за новини
            </h2>
            <p className="text-gray-medium mb-8">
              Получавайте полезни статии и съвети за психичното здраве директно в пощата си
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Вашият имейл адрес"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-soft-blue/30 focus:border-soft-blue text-sm"
                required
              />
              <Button type="submit" className="bg-soft-blue hover:bg-steel-blue">
                Абонирай се
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              Можете да се отпишете по всяко време. Прочетете нашата{' '}
              <Link href="/privacy" className="text-soft-blue hover:underline">
                политика за поверителност
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
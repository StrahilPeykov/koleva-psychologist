import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { BookOpen, Globe, Search, FileText, User, Calendar, Clock, Tag } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getArticles, getFeaturedArticles, urlFor, type Article } from '@/lib/sanity'

const categories = [
  { key: "all", label: "Всички статии", icon: BookOpen },
  { key: "original", label: "Авторски статии", icon: FileText },
  { key: "translation", label: "Преводи", icon: Globe },
  { key: "research", label: "Изследвания", icon: Search },
  { key: "clinical", label: "Клинични бележки", icon: User }
]

export default function ArticlesPage() {
  const t = useTranslations()
  const locale = useLocale()
  const [articles, setArticles] = useState<Article[]>([])
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  // Fetch articles on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const [articlesData, featuredData] = await Promise.all([
          getArticles(locale),
          getFeaturedArticles(locale)
        ])
        setArticles(articlesData)
        setFeaturedArticles(featuredData)
      } catch (error) {
        console.error('Error fetching articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [locale])

  // Filter articles based on category and search
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    const matchesSearch = searchTerm === "" || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  const getCategoryLabel = (category: string) => {
    const labels = {
      original: "Авторска статия",
      translation: "Превод",
      research: "Изследване",
      clinical: "Клинични бележки"
    }
    return labels[category as keyof typeof labels] || category
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      original: "bg-blue-100 text-blue-800",
      translation: "bg-green-100 text-green-800", 
      research: "bg-purple-100 text-purple-800",
      clinical: "bg-orange-100 text-orange-800"
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(locale === 'bg' ? 'bg-BG' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const calculateReadingTime = (content: any[]) => {
    if (!content) return '5 мин четене'
    
    // Estimate words in portable text content
    const textContent = content
      .filter(block => block._type === 'block')
      .map(block => block.children?.map((child: any) => child.text).join('') || '')
      .join(' ')
    
    const wordCount = textContent.split(/\s+/).length
    const readingTime = Math.max(1, Math.ceil(wordCount / 200)) // 200 words per minute
    
    return `${readingTime} мин четене`
  }

  const ArticleCard = ({ article, featured = false }: { article: Article, featured?: boolean }) => (
    <div className={`card bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-soft-lg transition-all duration-300 ${featured ? 'lg:col-span-2' : ''}`}>
      {/* Article Image */}
      <div className={`relative ${featured ? 'h-64' : 'h-48'} bg-gradient-to-br from-blue-50 to-blue-100`}>
        {article.image ? (
          <Image
            src={urlFor(article.image).width(600).height(400).quality(80).url()}
            alt={article.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-blue-600">
              <BookOpen className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm font-medium">{getCategoryLabel(article.category)}</p>
            </div>
          </div>
        )}
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
            {getCategoryLabel(article.category)}
          </span>
        </div>
        
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
              Препоръчано
            </span>
          </div>
        )}
      </div>
      
      {/* Article Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-gray-900 mb-2 line-clamp-2`}>
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
        </div>
        
        {/* Article Meta */}
        <div className="space-y-3">
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{calculateReadingTime(article.content)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3" />
              <span>{article.author}</span>
            </div>
          </div>
          
          {/* Original source if translation */}
          {article.originalSource && (
            <div className="text-xs text-gray-500 italic">
              Оригинален източник: {article.originalSource}
            </div>
          )}
          
          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag: string, index: number) => (
                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs flex items-center">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
              {article.tags.length > 3 && (
                <span className="text-xs text-gray-500">+{article.tags.length - 3} още</span>
              )}
            </div>
          )}
        </div>
        
        {/* Read More Button */}
        <div className="pt-4 border-t">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
            asChild
          >
            <Link href={`/${locale}/articles/${article.slug.current}`}>
              Прочети повече
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Зареждане на статиите...</p>
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
              Статии и ресурси
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Полезна информация за психично здраве, научни преводи и клинични наблюдения
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Търсене в статиите..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === category.key
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === "all" && featuredArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Препоръчани статии</h2>
              <div className="w-24 h-1 bg-blue-600"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article._id} article={article} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className={`py-16 ${selectedCategory === "all" && featuredArticles.length > 0 ? 'bg-white' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === "all" ? "Всички статии" : categories.find(c => c.key === selectedCategory)?.label}
            </h2>
            <div className="w-24 h-1 bg-blue-600"></div>
            <p className="text-gray-600 mt-4">
              {filteredArticles.length} {filteredArticles.length === 1 ? 'статия' : 'статии'}
              {searchTerm && ` съответстващи на "${searchTerm}"`}
            </p>
          </div>
          
          {filteredArticles.length > 0 ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredArticles
                .filter(article => !(selectedCategory === "all" && article.featured))
                .map((article) => (
                  <ArticleCard key={article._id} article={article} />
                ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">
                {articles.length === 0 
                  ? "Все още няма публикувани статии." 
                  : "Няма статии, съответстващи на търсенето."
                }
              </p>
              {searchTerm && (
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                >
                  Изчисти филтрите
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Бъдете информирани за нови статии
            </h3>
            <p className="text-gray-600 mb-8">
              Получавайте уведомления за нови публикации, преводи и ресурси по психология.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Вашият имейл адрес"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                Абонирай се
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              Няма спам. Можете да се отпишете по всяко време.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
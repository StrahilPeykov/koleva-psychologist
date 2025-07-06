import { PortableText as SanityPortableText, type PortableTextComponents } from '@portabletext/react'
import { type PortableTextBlock, type ArbitraryTypedObject } from '@portabletext/types'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

// Type definitions for portable text components
interface ImageValue {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

interface CalloutValue {
  _type: 'callout'
  type: 'note' | 'warning' | 'tip' | 'important'
  content: string
}

interface ScheduleItem {
  time: string
  activity: string
  description?: string
}

interface ScheduleValue {
  _type: 'schedule'
  title?: string
  items?: ScheduleItem[]
}

interface LinkMark {
  _type: 'link'
  href: string
  blank?: boolean
}

interface InternalLinkMark {
  _type: 'internalLink'
  reference?: {
    _type: string
    slug?: {
      current: string
    }
  }
}

// Custom components for portable text rendering
const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      return (
        <div className="my-8">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={urlFor(value).width(800).height(450).quality(80).url()}
              alt={value.alt || 'Article image'}
              width={800}
              height={450}
              className="object-cover w-full"
            />
          </div>
          {value.caption && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
    callout: ({ value }: { value: CalloutValue }) => {
      const typeStyles = {
        note: {
          container: 'bg-blue-50 border-blue-200 text-blue-900',
          icon: 'ℹ️'
        },
        warning: {
          container: 'bg-yellow-50 border-yellow-200 text-yellow-900',
          icon: '⚠️'
        },
        tip: {
          container: 'bg-green-50 border-green-200 text-green-900',
          icon: '💡'
        },
        important: {
          container: 'bg-red-50 border-red-200 text-red-900',
          icon: '❗'
        }
      }

      const style = typeStyles[value.type] || typeStyles.note

      return (
        <div className={`border rounded-lg p-4 my-6 ${style.container}`}>
          <div className="flex items-start space-x-3">
            <span className="text-lg">{style.icon}</span>
            <div className="flex-1">
              <p className="leading-relaxed">{value.content}</p>
            </div>
          </div>
        </div>
      )
    },
    schedule: ({ value }: { value: ScheduleValue }) => {
      return (
        <div className="my-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {value.title || 'Програма'}
          </h3>
          <div className="space-y-3">
            {value.items?.map((item: ScheduleItem, index: number) => (
              <div key={index} className="flex items-start space-x-4 p-3 bg-white rounded-lg">
                <div className="text-sm font-medium text-blue-600 min-w-[60px]">
                  {item.time}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.activity}</h4>
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  },
  marks: {
    link: ({ children, value }) => {
      const linkValue = value as LinkMark
      const rel = !linkValue.href.startsWith('/') ? 'noreferrer noopener' : undefined
      const target = !linkValue.href.startsWith('/') ? '_blank' : undefined

      return (
        <a
          href={linkValue.href}
          rel={rel}
          target={target}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      )
    },
    internalLink: ({ children, value }) => {
      const linkValue = value as InternalLinkMark
      // Handle internal links to other articles/events with proper null checking
      if (!linkValue.reference?.slug?.current) {
        return <span>{children}</span>
      }
      
      const href = linkValue.reference._type === 'article' 
        ? `/articles/${linkValue.reference.slug.current}` 
        : `/events/${linkValue.reference.slug.current}`

      return (
        <Link href={href} className="text-blue-600 hover:text-blue-800 underline">
          {children}
        </Link>
      )
    }
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-blue-50 rounded-r-lg">
        <div className="text-gray-700 italic">{children}</div>
      </blockquote>
    )
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">{children}</ol>
    )
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>
  }
}

interface PortableTextProps {
  content: PortableTextBlock[] | ArbitraryTypedObject[]
  className?: string
}

export default function PortableText({ content, className = "" }: PortableTextProps) {
  if (!content || !Array.isArray(content)) {
    return null
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <SanityPortableText value={content} components={components} />
    </div>
  )
}
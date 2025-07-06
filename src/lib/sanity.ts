import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { type PortableTextBlock, type ArbitraryTypedObject } from '@portabletext/types'

// Sanity client configuration - ensure it works in both server and client environments
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // For write operations
  perspective: 'published', // Ensure we only get published content
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// TypeScript interfaces for content
export interface Article {
  _id: string
  _type: 'article'
  title: string
  slug: { current: string }
  excerpt: string
  content: PortableTextBlock[] | ArbitraryTypedObject[] // Portable text content with proper types
  image?: SanityImageSource
  publishedAt: string
  language: 'bg' | 'en'
  category: 'original' | 'translation' | 'research' | 'clinical'
  tags: string[]
  originalSource?: string
  author: string
  featured?: boolean
}

export interface Event {
  _id: string
  _type: 'event'
  title: string
  slug: { current: string }
  description: string
  content?: PortableTextBlock[] | ArbitraryTypedObject[] // Portable text content with proper types
  image?: SanityImageSource
  startDate: string
  endTime?: string
  startTime: string
  duration?: string
  price: number
  discountPrice?: number
  discountDeadline?: string
  location: 'online' | 'burgas' | 'plovdiv' | 'sofia' | 'other'
  locationDetails?: {
    venue?: string
    [key: string]: unknown
  }
  language: 'bg' | 'en'
  eventType: 'seminar' | 'workshop' | 'course' | 'webinar' | 'conference' | 'group-therapy'
  targetAudience: string[]
  certificate?: {
    provided?: boolean
    type?: string
    issuingOrganization?: string
    hours?: number
  }
  registrationLink?: string
  status: 'upcoming' | 'open' | 'closed' | 'completed' | 'cancelled' | 'in-progress'
}

// Helper functions for fetching data with error handling
export async function getArticles(language: string = 'bg'): Promise<Article[]> {
  try {
    const query = `*[_type == "article" && language == $language] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      language,
      category,
      tags,
      originalSource,
      "author": "Олга Колева",
      featured,
      image
    }`
    
    return await client.fetch(query, { language })
  } catch (error) {
    console.warn('Failed to fetch articles:', error)
    return []
  }
}

export async function getFeaturedArticles(language: string = 'bg'): Promise<Article[]> {
  try {
    const query = `*[_type == "article" && language == $language && featured == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      tags,
      "author": "Олга Колева",
      image
    }`
    
    return await client.fetch(query, { language })
  } catch (error) {
    console.warn('Failed to fetch featured articles:', error)
    return []
  }
}

export async function getArticle(slug: string, language: string = 'bg'): Promise<Article | null> {
  try {
    const query = `*[_type == "article" && slug.current == $slug && language == $language][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      language,
      category,
      tags,
      originalSource,
      "author": "Олга Колева",
      image
    }`
    
    return await client.fetch(query, { slug, language })
  } catch (error) {
    console.warn('Failed to fetch article:', error)
    return null
  }
}

export async function getUpcomingEvents(language: string = 'bg'): Promise<Event[]> {
  try {
    const query = `*[_type == "event" && language == $language && status in ["upcoming", "open"] && startDate >= now()] | order(startDate asc) {
      _id,
      title,
      slug,
      description,
      startDate,
      startTime,
      endTime,
      duration,
      price,
      discountPrice,
      discountDeadline,
      location,
      locationDetails,
      eventType,
      targetAudience,
      certificate,
      registrationLink,
      status,
      image
    }`
    
    return await client.fetch(query, { language })
  } catch (error) {
    console.warn('Failed to fetch upcoming events:', error)
    return []
  }
}

export async function getPastEvents(language: string = 'bg'): Promise<Event[]> {
  try {
    const query = `*[_type == "event" && language == $language && status == "completed"] | order(startDate desc) {
      _id,
      title,
      slug,
      description,
      startDate,
      startTime,
      duration,
      price,
      location,
      locationDetails,
      eventType,
      image
    }`
    
    return await client.fetch(query, { language })
  } catch (error) {
    console.warn('Failed to fetch past events:', error)
    return []
  }
}

export async function getEvent(slug: string, language: string = 'bg'): Promise<Event | null> {
  try {
    const query = `*[_type == "event" && slug.current == $slug && language == $language][0] {
      _id,
      title,
      slug,
      description,
      content,
      startDate,
      startTime,
      endTime,
      duration,
      price,
      discountPrice,
      discountDeadline,
      location,
      locationDetails,
      language,
      eventType,
      targetAudience,
      certificate,
      registrationLink,
      status,
      image
    }`
    
    return await client.fetch(query, { slug, language })
  } catch (error) {
    console.warn('Failed to fetch event:', error)
    return null
  }
}

// Utility functions
export function formatDate(dateString: string, locale: string = 'bg-BG'): string {
  const date = new Date(dateString)
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatDateTime(dateString: string, timeString: string, locale: string = 'bg-BG'): string {
  const date = new Date(`${dateString}T${timeString}`)
  return date.toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
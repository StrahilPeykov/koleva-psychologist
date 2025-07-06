import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Set to false if statically generating pages
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // For write operations
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
  content: any[] // Portable text content
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
  content?: any[] // Portable text content
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
    [key: string]: any
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

// GROQ queries for content
export const queries = {
  // Articles queries
  getAllArticles: `*[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    language,
    category,
    tags,
    originalSource,
    author,
    featured,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }`,

  getArticlesByLanguage: (language: string) => `*[_type == "article" && language == "${language}"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    language,
    category,
    tags,
    originalSource,
    author,
    featured,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }`,

  getFeaturedArticles: (language: string) => `*[_type == "article" && language == "${language}" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    tags,
    author,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }`,

  getArticleBySlug: (slug: string, language: string) => `*[_type == "article" && slug.current == "${slug}" && language == "${language}"][0] {
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
    author,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }`,

  getArticlesByCategory: (category: string, language: string) => `*[_type == "article" && category == "${category}" && language == "${language}"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    tags,
    author,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }`,

  // Events queries
  getAllEvents: `*[_type == "event"] | order(date asc) {
    _id,
    title,
    slug,
    description,
    date,
    time,
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
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }`,

  getUpcomingEvents: (language: string) => `*[_type == "event" && language == "${language}" && status in ["upcoming", "open"] && date >= now()] | order(date asc) {
    _id,
    title,
    slug,
    description,
    date,
    time,
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
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }`,

  getPastEvents: (language: string) => `*[_type == "event" && language == "${language}" && status == "completed"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    date,
    time,
    duration,
    price,
    location,
    locationDetails,
    eventType,
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }`,

  getEventBySlug: (slug: string, language: string) => `*[_type == "event" && slug.current == "${slug}" && language == "${language}"][0] {
    _id,
    title,
    slug,
    description,
    content,
    date,
    time,
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
    "imageUrl": image.asset->url,
    "imageAlt": image.alt
  }`,

  // Latest content for homepage
  getLatestContent: (language: string) => `{
    "articles": *[_type == "article" && language == "${language}"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      "imageUrl": image.asset->url
    },
    "events": *[_type == "event" && language == "${language}" && status in ["upcoming", "open"] && date >= now()] | order(date asc)[0...2] {
      _id,
      title,
      slug,
      description,
      date,
      time,
      price,
      location,
      eventType,
      status,
      "imageUrl": image.asset->url
    }
  }`,

  // Search functionality
  searchContent: (searchTerm: string, language: string) => `{
    "articles": *[_type == "article" && language == "${language}" && (title match "${searchTerm}*" || excerpt match "${searchTerm}*" || "${searchTerm}" in tags)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      tags,
      "imageUrl": image.asset->url
    },
    "events": *[_type == "event" && language == "${language}" && (title match "${searchTerm}*" || description match "${searchTerm}*")] | order(date asc) {
      _id,
      title,
      slug,
      description,
      date,
      eventType,
      status,
      "imageUrl": image.asset->url
    }
  }`
}

// Helper functions for fetching data
export async function getArticles(language: string = 'bg'): Promise<Article[]> {
  return await client.fetch(queries.getArticlesByLanguage(language))
}

export async function getFeaturedArticles(language: string = 'bg'): Promise<Article[]> {
  return await client.fetch(queries.getFeaturedArticles(language))
}

export async function getArticle(slug: string, language: string = 'bg'): Promise<Article | null> {
  return await client.fetch(queries.getArticleBySlug(slug, language))
}

export async function getUpcomingEvents(language: string = 'bg'): Promise<Event[]> {
  return await client.fetch(queries.getUpcomingEvents(language))
}

export async function getPastEvents(language: string = 'bg'): Promise<Event[]> {
  return await client.fetch(queries.getPastEvents(language))
}

export async function getEvent(slug: string, language: string = 'bg'): Promise<Event | null> {
  return await client.fetch(queries.getEventBySlug(slug, language))
}

export async function getLatestContent(language: string = 'bg') {
  return await client.fetch(queries.getLatestContent(language))
}

export async function searchContent(searchTerm: string, language: string = 'bg') {
  return await client.fetch(queries.searchContent(searchTerm, language))
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
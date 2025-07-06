import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // Set to true in production for faster, cached responses
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // For write operations
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Queries
export const articlesQuery = `*[_type == "article"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  language,
  category,
  "imageUrl": image.asset->url
}`

export const eventsQuery = `*[_type == "event"] | order(date asc) {
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
  language,
  "imageUrl": image.asset->url
}`
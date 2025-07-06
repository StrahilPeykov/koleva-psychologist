// This handles the root route "/" and ensures Bulgarian loads by default

export default function RootPage() {
  // Return the Bulgarian homepage directly
  return null
}

// This ensures the root "/" redirects to the Bulgarian locale
export async function generateMetadata() {
  return {
    title: 'Олга Колева - Психолог Бургас',
    description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас.'
  }
}

// Force a redirect to the locale-specific page
import { redirect } from 'next/navigation'
export const dynamic = 'force-static'

// Since we're using middleware, this should not be needed
// but keeping it as a fallback
export async function loader() {
  redirect('/bg')
}
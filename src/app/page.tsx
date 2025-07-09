import { redirect } from 'next/navigation'

// This handles the root route "/" and redirects to Bulgarian
export default function RootPage() {
  redirect('/bg')
}

export async function generateMetadata() {
  return {
    title: 'Олга Колева - Психолог Бургас',
    description: 'Лицензиран психолог и психотерапевт на зависимости в Бургас.',
    robots: {
      index: false,
      follow: true,
    },
  }
}
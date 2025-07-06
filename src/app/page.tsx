// This handles the root route "/" and redirects to the default locale

import { redirect } from 'next/navigation'

export default function RootPage() {
  // Redirect to the default locale (Bulgarian)
  redirect('/')
}
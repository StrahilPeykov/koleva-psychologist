'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { ArrowLeft } from 'lucide-react'

export function BackButton() {
  const router = useRouter()

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back()
    } else {
      router.push('/')
    }
  }

  return (
    <Button variant="outline" className="mt-4" onClick={handleBack}>
      <ArrowLeft className="w-5 h-5 mr-2" />
      Върни се назад
    </Button>
  )
}
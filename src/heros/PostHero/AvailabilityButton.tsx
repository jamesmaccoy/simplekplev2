'use client'

import { Button } from '@/components/ui/button'

export const AvailabilityButton = () => {
  return (
    <Button
      variant="outline"
      className="bg-black text-white hover:bg-gray-100"
      onClick={() => {
        const element = document.querySelector('[data-stay-duration]')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }}
    >
      Check Availability
    </Button>
  )
} 
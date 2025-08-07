"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

interface EventsLinkProps {
  children: React.ReactNode
  className?: string
}

export function EventsLink({ children, className }: EventsLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push('/events')
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <a href="/events" onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

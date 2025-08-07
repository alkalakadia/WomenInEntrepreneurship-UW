"use client"

import Link from "next/link"
import { Users } from 'lucide-react'

export function JoinUsButton() {
  return (
    <Link href="/get-involved" className="join-us-button">
      <Users size={18} />
      <span className="join-us-text">Join Us</span>
    </Link>
  )
}

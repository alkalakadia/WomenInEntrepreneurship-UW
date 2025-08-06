"use client"

import Link from "next/link"
import Image from "next/image"

export function TopLogo() {
  return (
    <Link href="/" className="top-logo">
      <Image src="/assets/logo.png" alt="WE Logo" width={60} height={60} className="top-logo-image" />
    </Link>
  )
}

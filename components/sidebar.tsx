"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Get Involved", href: "/get-involved" },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <button className="menu-icon" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className={pathname === item.href ? "active" : ""}>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={closeSidebar} />
    </>
  )
}

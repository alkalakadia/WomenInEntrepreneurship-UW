import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { TopLogo } from "@/components/top-logo"
import { Footer } from "@/components/footer"
import { JoinUsButton } from "@/components/join-us-button"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Women in Entrepreneurship - WE",
  description: "Empowering Future Leaders in Entrepreneurship at UW-Madison",
  keywords: "women entrepreneurship, UW-Madison, business, leadership, startups, female founders",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('beforeunload', () => {
                  window.scrollTo(0, 0);
                });
              }
            `,
          }}
        />
        <TopLogo />
        <JoinUsButton />
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

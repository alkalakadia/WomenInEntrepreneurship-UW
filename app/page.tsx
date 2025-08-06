import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="home-container">
      {/* Full Background Logo - Fixed and Persistent */}
      <div className="logo-full-background">
        <Image src="/assets/logo.png" alt="" fill className="logo-full-background-image" priority sizes="100vw" />
      </div>

      {/* Abstract Hero Graphics */}
      <div className="hero-graphics">
        <Image 
          src="/assets/hero-abstract.png" 
          alt="" 
          width={400} 
          height={300} 
          className="hero-graphic-left"
        />
        <Image 
          src="/assets/hero-abstract.png" 
          alt="" 
          width={300} 
          height={400} 
          className="hero-graphic-right"
        />
      </div>

      {/* Background Pattern Overlay */}
      <div className="pattern-overlay">
        <Image 
          src="/assets/background-pattern.png" 
          alt="" 
          fill 
          className="pattern-image"
        />
      </div>

      {/* Subtle Background Overlay for Text Readability */}
      <div className="background-overlay" />

      {/* Floating Animation Elements */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* Main Content - No Background Card */}
      <div className="home-content">
        <h1 className="home-title">
          <span className="title-line-1">Women in</span>
          <span className="title-line-2">Entrepreneurship</span>
        </h1>
        
        <p className="home-subtitle">Empowering Future Leaders</p>
        <p className="home-description">
          A bold, inclusive community redefining what it means to be a student entrepreneur. We empower women across all
          disciplines to lead, build, and launch ventures that create real-world change.
        </p>
        
        <Link href="/about" className="cta-button">
          Discover Our Story
          <span>→</span>
        </Link>
      </div>
    </div>
  )
}

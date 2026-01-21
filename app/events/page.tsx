import { Calendar } from "@/components/calendar"
import Image from "next/image"

export default function Events() {
  return (
    <div className="content-wrapper">
      <div className="container">
        {/* Simplified Page Header */}
        <div className="page-header">
          <h1 className="page-title">Upcoming Events</h1>
          <p className="page-subtitle">
            Join us for exciting events throughout the semester! From workshops and speaker panels to networking mixers and pitch competitions, 
            our programming is designed to support every step of your entrepreneurial journey.
          </p>
        </div>

        {/* Event Photos Gallery */}
        <div style={{ marginBottom: "60px" }}>
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "40px" }}>Event Highlights</h2>
          <div className="image-gallery-grid">
            <div className="image-gallery-item">
              <Image
                src="/assets/IMG_0112.jpg"
                alt="Event highlight 1"
                fill
                className="gallery-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="image-gallery-item">
              <Image
                src="/assets/IMG_0779.jpeg"
                alt="Event highlight 2"
                fill
                className="gallery-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="image-gallery-item">
              <Image
                src="/assets/IMG_8912.jpg"
                alt="Event highlight 3"
                fill
                className="gallery-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="image-gallery-item">
              <Image
                src="/assets/3474BEBC-41BB-41F5-8057-AA839EAFDAC5_1_102_o.jpeg"
                alt="Event highlight 4"
                fill
                className="gallery-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>

        {/* Calendar Component */}
        <Calendar />
      </div>
    </div>
  )
}

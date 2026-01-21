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
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "20px"
          }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
              <Image
                src="/assets/IMG_0112.jpg"
                alt="Event highlight 1"
                width={400}
                height={300}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
              <Image
                src="/assets/IMG_0779.jpeg"
                alt="Event highlight 2"
                width={400}
                height={300}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
              <Image
                src="/assets/IMG_8912.jpg"
                alt="Event highlight 3"
                width={400}
                height={300}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
              <Image
                src="/assets/3474BEBC-41BB-41F5-8057-AA839EAFDAC5_1_102_o.jpeg"
                alt="Event highlight 4"
                width={400}
                height={300}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
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

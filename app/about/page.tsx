import Image from "next/image"
import { EventsLink } from "@/components/events-link"

export default function About() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">
            <span className="title-line-1">About Women in</span>
            <span className="title-line-2">Entrepreneurship</span>
          </h1>
          <p className="page-subtitle">
            Redefining what it means to be a student entrepreneur through bold, inclusive community building.
          </p>
        </div>

        <div className="connect-section">
          <div style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "var(--text-medium)" }}>
            <p style={{ marginBottom: "30px" }}>
              Women in Entrepreneurship (WE) at UW–Madison is a bold, inclusive community redefining what it means to be
              a student entrepreneur. We exist to empower women—across all disciplines, backgrounds, and experience
              levels—to not only explore entrepreneurship, but to lead, build, and launch ventures that create
              real-world change.
            </p>
            <p style={{ marginBottom: "30px" }}>
              WE is more than a network — it's a catalyst. Through hands-on experience, team-building, mentorship,
              industry connections, and leadership development, we equip our members with the tools and confidence to
              turn ideas into impact. From skill-building workshops and speaker panels to project incubation and pitch
              showcases, WE supports every step of the entrepreneurial journey.
            </p>
            <p>
              Whether you're just curious about innovation or ready to bring a venture to life, WE is where you'll find
              the people, the platform, and the power to grow. Our mission is to cultivate a generation of women who are
              not just participants in the entrepreneurial world — but the most fearless, future-shaping leaders.
            </p>
          </div>
        </div>

        {/* Clickable Events Card Section */}
        <div className="events-showcase-section">
          <EventsLink className="events-card-link">
            <div className="events-card">
              <div className="events-card-content">
                <div className="events-card-text">
                  <h2 className="events-card-title">Our Events</h2>
                  <p className="events-card-description">
                    From interactive workshops and inspiring speaker panels to hands-on pitch competitions and networking mixers, 
                    our events create spaces where ideas flourish and connections spark innovation.
                  </p>
                  <p className="events-card-pipeline">
                    <strong>VentureHER Pipeline:</strong> Our signature hands-on track that takes you from initial idea validation 
                    to building real MVPs with mentorship and industry support.
                  </p>
                  <div className="events-card-cta">
                    <span className="cta-text">Explore Our Events</span>
                    <span className="cta-arrow">→</span>
                  </div>
                </div>
                <div className="events-card-image">
                  <div className="creative-image-border">
                    <div className="image-border-outer">
                      <div className="image-border-inner">
                        <Image
                          src="/assets/we-event-photo.png"
                          alt="WE event with students in classroom"
                          width={600}
                          height={400}
                          className="card-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </EventsLink>
        </div>
      </div>
    </div>
  )
}

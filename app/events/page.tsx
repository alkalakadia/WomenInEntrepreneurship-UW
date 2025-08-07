import { Calendar } from "@/components/calendar"
import Image from "next/image"

export default function Events() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="page-header events-page-header">
          {/* Background Image */}
          <div className="events-header-background">
            <Image
              src="/assets/we-event-photo.png"
              alt=""
              fill
              className="events-header-bg-image"
              priority
            />
            <div className="events-header-overlay" />
          </div>
          
          {/* Header Content */}
          <div className="events-header-content">
            <h1 className="page-title">Upcoming Events</h1>
            <p className="page-subtitle">
              Join us for exciting events throughout the semester! From workshops and speaker panels to networking mixers and pitch competitions, 
              our programming is designed to support every step of your entrepreneurial journey.
            </p>
          </div>
        </div>

        {/* Enhanced Events Description */}
        <div className="events-description-section">
          <div className="events-overview">
            <h2 className="section-title">What We Offer</h2>
            <div className="events-categories">
              <div className="event-category">
                <h3>🎯 Skill-Building Workshops</h3>
                <p>Hands-on sessions covering everything from idea validation and market research to pitch development and MVP building. Learn practical skills you can apply immediately.</p>
              </div>
              <div className="event-category">
                <h3>🎤 Speaker Panels & Fireside Chats</h3>
                <p>Hear from successful female founders, industry leaders, and executives who share their journeys, insights, and lessons learned from building impactful ventures.</p>
              </div>
              <div className="event-category">
                <h3>🤝 Networking & Social Events</h3>
                <p>Connect with like-minded peers, build lasting relationships, and expand your entrepreneurial network through mixers, collaborative events, and fun social gatherings.</p>
              </div>
              <div className="event-category">
                <h3>🚀 Pitch Competitions & Showcases</h3>
                <p>Practice your presentation skills, get feedback on your ideas, and compete in creative pitch formats that make entrepreneurship accessible and engaging.</p>
              </div>
            </div>
          </div>

          <div className="ventureher-pipeline">
            <h2 className="section-title">VentureHER Pipeline</h2>
            <p className="pipeline-description">
              Our signature hands-on track designed for students ready to take their ideas to the next level. The VentureHER Pipeline 
              provides structured support as you move from initial concept to validated business model to working prototype.
            </p>
            <div className="pipeline-stages">
              <div className="pipeline-stage">
                <div className="stage-number">1</div>
                <div className="stage-content">
                  <h4>Ideation & Validation</h4>
                  <p>Refine your concept, conduct market research, and validate your assumptions with real customer feedback.</p>
                </div>
              </div>
              <div className="pipeline-stage">
                <div className="stage-number">2</div>
                <div className="stage-content">
                  <h4>Building & Development</h4>
                  <p>Create your minimum viable product (MVP) with guidance from mentors and access to resources and tools.</p>
                </div>
              </div>
              <div className="pipeline-stage">
                <div className="stage-number">3</div>
                <div className="stage-content">
                  <h4>Launch & Scale</h4>
                  <p>Connect with industry professionals, potential investors, and real-world opportunities to bring your venture to market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Calendar />
      </div>
    </div>
  )
}

import { Calendar } from "@/components/calendar"

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

        {/* Calendar Component */}
        <Calendar />
      </div>
    </div>
  )
}

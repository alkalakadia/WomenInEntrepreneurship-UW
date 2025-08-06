import { Calendar } from "@/components/calendar"

export default function Events() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Upcoming Events</h1>
          <p className="page-subtitle">
            Join us for exciting events throughout the semester! Our calendar shows all upcoming events and workshops.
            Click on any highlighted date to see event details.
          </p>
        </div>

        <Calendar />
      </div>
    </div>
  )
}

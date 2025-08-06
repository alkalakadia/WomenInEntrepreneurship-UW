"use client"

import { useState } from "react"

interface Event {
  title: string
  date: string
  time: string
  location: string
  description: string
}

const events: Event[] = [
  {
    title: "UW Entrepreneurship Kickoff",
    date: "2025-09-12",
    time: "4:00 PM - 6:00 PM (Networking: 6:30 PM)",
    location: "Engineering Centers Building",
    description: "Start your year with innovation and inspiration at the UW Entrepreneurship Kickoff! Join us for a dynamic student org fair featuring a variety of entrepreneurial clubs across campus. Whether you're looking to launch your own startup, connect with like-minded innovators or explore new ideas, this is your chance to meet student leaders, learn about upcoming opportunities and get involved in the growing entrepreneurship community at UW!",
  },
  {
    title: "Female Founder Panel",
    date: "2025-09-18",
    time: "5:30 PM - 7:00 PM",
    location: "Sellery Hall",
    description: "What does it take to turn an idea into a thriving business? Come hear from five female entrepreneurs who did just that! Join us for an unforgettable night featuring powerhouse founders Kenzie Beam, Grace Berbig, Ashley Storck, Shelby Ostad and Sara Buszka as they share the remarkable stories and insightful strategies behind their ventures. From passion projects to successful businesses, these women are redefining success on their own terms. Stick around after the panel for open networking and light appetizers!",
  },
]

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8)) // September 2025
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([])
  const [activeDay, setActiveDay] = useState<string | null>(null)

  const startDate = new Date(2025, 8) // September 2025 (month is 0-indexed)

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate)
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1)
      if (newDate.getFullYear() >= startDate.getFullYear() && newDate.getMonth() >= startDate.getMonth()) {
        setCurrentDate(newDate)
        // Clear selected events when changing months
        setSelectedEvents([])
        setActiveDay(null)
      }
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
      setCurrentDate(newDate)
      // Clear selected events when changing months
      setSelectedEvents([])
      setActiveDay(null)
    }
  }

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  const getEventsForDate = (date: string) => {
    return events.filter((event) => event.date === date)
  }

  const handleDayClick = (day: number) => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    const dayEvents = getEventsForDate(dateString)

    if (dayEvents.length > 0) {
      // If clicking the same active day, hide the events
      if (activeDay === dateString) {
        setSelectedEvents([])
        setActiveDay(null)
      } else {
        // Show events for the clicked day
        setSelectedEvents(dayEvents)
        setActiveDay(dateString)
      }
    } else {
      // Clear events if clicking on a day with no events
      setSelectedEvents([])
      setActiveDay(null)
    }
  }

  const isPrevMonthDisabled =
    currentDate.getFullYear() === startDate.getFullYear() && currentDate.getMonth() <= startDate.getMonth()

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="calendar-nav-btn" onClick={() => navigateMonth("prev")} disabled={isPrevMonthDisabled}>
          ←
        </button>
        <h2>{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
        <button className="calendar-nav-btn" onClick={() => navigateMonth("next")}>
          →
        </button>
      </div>

      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-day day-name">
            {day}
          </div>
        ))}

        {getDaysInMonth().map((day, index) => {
          if (day === null) {
            return <div key={index} className="calendar-day"></div>
          }

          const year = currentDate.getFullYear()
          const month = currentDate.getMonth()
          const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
          const dayEvents = getEventsForDate(dateString)
          const hasEvent = dayEvents.length > 0
          const isActive = activeDay === dateString

          return (
            <div
              key={index}
              className={`calendar-day ${hasEvent ? "has-event" : ""} ${isActive ? "active" : ""}`}
              onClick={() => handleDayClick(day)}
              style={{ cursor: hasEvent ? "pointer" : "default" }}
            >
              {day}
            </div>
          )
        })}
      </div>

      {selectedEvents.length > 0 && (
        <div className="event-list">
          {selectedEvents.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.title}</h3>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(event.date + "T00:00:00").toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

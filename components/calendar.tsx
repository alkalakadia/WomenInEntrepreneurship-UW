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
    title: "Founder's Panel",
    date: "2025-08-15",
    time: "2:00 PM - 4:00 PM",
    location: "Business School",
    description: "Join us for a panel of founders to discuss their journey and advice.",
  },
  {
    title: "Networking Night",
    date: "2025-09-20",
    time: "6:00 PM - 8:00 PM",
    location: "WID",
    description: "Connect with successful women entrepreneurs and industry leaders.",
  },
  {
    title: "Pitch Competition",
    date: "2025-10-10",
    time: "5:00 PM - 7:00 PM",
    location: "Grainger Hall",
    description: "Come pitch your idea to a panel of judges and win prizes!",
  },
]

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7))
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([])
  const [activeDay, setActiveDay] = useState<string | null>(null)

  const startDate = new Date(2025, 7)

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

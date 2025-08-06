"use client"

import { useState } from "react"

interface Event {
  title: string
  date: string
  time: string
  location: string
  description: string
  registrationLink?: string
  weNotificationLink?: string
}

const events: Event[] = [
  {
    title: "UW Entrepreneurship Kickoff",
    date: "2025-09-12",
    time: "4:00 PM - 6:00 PM (Networking: 6:30 PM)",
    location: "Engineering Centers Building",
    description: "Start your year with innovation and inspiration at the UW Entrepreneurship Kickoff! Join us for a dynamic student org fair featuring a variety of entrepreneurial clubs across campus. Whether you're looking to launch your own startup, connect with like-minded innovators or explore new ideas, this is your chance to meet student leaders, learn about upcoming opportunities and get involved in the growing entrepreneurship community at UW!",
    registrationLink: "https://lu.ma/kj9zkjeh",
    weNotificationLink: "https://partiful.com/e/ANOySzoE2whM0ENol1lj",
  },
  {
    title: "Female Founder Panel",
    date: "2025-09-18",
    time: "5:30 PM - 7:00 PM",
    location: "Sellery Hall",
    description: "What does it take to turn an idea into a thriving business? Come hear from five female entrepreneurs who did just that! Join us for an unforgettable night featuring powerhouse founders Kenzie Beam, Grace Berbig, Ashley Storck, Shelby Ostad and Sara Buszka as they share the remarkable stories and insightful strategies behind their ventures. From passion projects to successful businesses, these women are redefining success on their own terms. Stick around after the panel for open networking and light appetizers!",
  },
  {
    title: "Canva Venture Vision Boards",
    date: "2025-09-23",
    time: "5:00 PM - 6:00 PM",
    location: "WSB",
    description: "Join us for a social night where you'll create your own venture vision board using Canva, enjoy ice cream and meet fellow entrepreneurial-minded students! Whether you're dreaming of launching a startup, building a brand or just exploring new ideas, this is the perfect space to get inspired and connect. This is also a great opportunity for you to meet the WE team and learn about open director roles if you're interested in building your leadership skills!",
  },
  {
    title: "UW Tech Lab Opening",
    date: "2025-09-25",
    time: "TBD",
    location: "Tech Lab",
    description: "Curious about emerging tech? Have an entrepreneurial idea you're ready to explore? Just want to learn and build something cool? The UW Tech Lab is your new launchpad! Whether you're diving into AI, XR, robotics, blockchain, IoT or something still being invented, the Lab offers the tools, mentorship, and hands-on opportunities to help you turn curiosity into capability. You'll learn how to advance your own ideas with expert support, collaborate on real industry-driven projects, work in cross-disciplinary teams tackling today's biggest tech challenges, gain hands-on experience with cutting-edge tools, and connect with mentors and professionals in the field.",
  },
  {
    title: "Cynthia Chu Fireside Chat",
    date: "2025-09-29",
    time: "4:00 PM CST / 5:00 PM EST",
    location: "TBD (Tech Lab/WSB)",
    description: "Join us for an intimate and inspiring Fireside Chat with the CFO of Audible, Cynthia Chu! A trailblazing leader known for her bold vision, strategic insight, and dynamic career. In this conversation, Cynthia will share her journey from early career moves to pivotal leadership moments as well as lessons learned along the way. She'll also discuss navigating challenges, driving innovation and what it takes to lead with purpose in today's fast-changing world. You don't want to miss it!",
  },
  {
    title: "SHEeo Jeopardy: Guess the Founder",
    date: "2025-10-07",
    time: "5:00 PM - 6:00 PM",
    location: "WSB",
    description: "Think you know your female founders? Put your knowledge to the test in a round of SHEeo Jeopardy! A fun, fast-paced trivia night with snacks where you'll guess the female founders behind groundbreaking brands, startups, and innovations. Bring your friends, join a team and compete for prizes!",
  },
  {
    title: "Work Session: Check-In",
    date: "2025-10-14",
    time: "5:00 PM - 6:00 PM",
    location: "Tech Lab",
    description: "Have a business idea, passion project or startup you're trying to launch? Need help figuring out your next steps? Drop in to our work session check-in! A casual, open space for students who want guidance, feedback or hands-on support with launching a venture or working on any entrepreneurial project. Whether you're just getting started or already deep into your build, this is your chance to ask questions, get advice from mentors and staff, make progress and connect with like-minded students! Bring your ideas, your laptop, and your questions. We're here to help!",
  },
  {
    title: "Entrepreneurship Debate Showdown",
    date: "2025-10-21",
    time: "5:00 PM - 6:00 PM",
    location: "WSB",
    description: "Join us for an Entrepreneurship Debate Showdown, where students will go head-to-head tackling hot takes and bold claims about the world of startups, innovation and business. Teams will be given surprise prompts and must argue for or against! Expect big opinions, fast thinking and a great deal of entrepreneurial energy. Whether you're competing or just watching, this event will challenge your thinking and spark fresh ideas. No experience is needed, just bring your voice and your passion! Snacks provided.",
  },
  {
    title: "Validate Event: Idea Validation & Research",
    date: "2025-10-28",
    time: "TBD",
    location: "Tech Lab",
    description: "Join us for a comprehensive workshop on idea validation and research methods. Learn how to test your business concepts, gather meaningful customer feedback, and make data-driven decisions about your venture. This hands-on session will equip you with the tools and frameworks needed to validate your ideas before investing significant time and resources. Perfect for aspiring entrepreneurs at any stage of their journey!",
  },
  {
    title: "WE x Transcend Collab Event",
    date: "2025-11-06",
    time: "TBD",
    location: "TBD",
    description: "A candid conversation with founders on the early lessons that shaped their journey! Starting a venture is exciting but let's be real, it's also messy, unpredictable and full of lessons you only learn the hard way. In this panel, you'll hear from founders as they reflect on their early days such as the pivots, aha moments and the unexpected challenges that helped shape their path. They'll share what they wish they knew when they started, how they navigated uncertainty, and what advice they'd give to anyone stepping into the world of startups. Whether you're building something now, thinking about your first venture or just curious about the behind-the-scenes of startup life, this event will offer insights and stories you won't find in any textbook!",
  },
  {
    title: "PJ Pitch Night & Pastries",
    date: "2025-11-11",
    time: "5:00 PM - 6:00 PM",
    location: "WSB",
    description: "Put on your coziest pajamas and bring your wildest 2 a.m. business ideas to life at our PJ Pitch Night! This isn't your average pitch competition. It's Shark Tank meets slumber party with hot cocoa, chaotic startup themes and plenty of laughter! How it works: You'll be randomly paired with teammates from different majors or class years, draw a totally out-there business prompt (think: a dating app for houseplants or pajamas that turn into business suits when you cartwheel), incorporate fun wildcards like celebrity endorsements, PR scandals or subscription-only models. You'll have 30 minutes to build your pitch (including project deck) and present to our panel of mock investors (with candy and gift cards as your 'funding'). We hope to see you there!",
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
      // Fixed logic: Allow navigation if new date is not before September 2025
      if (newDate.getFullYear() > startDate.getFullYear() || 
          (newDate.getFullYear() === startDate.getFullYear() && newDate.getMonth() >= startDate.getMonth())) {
        setCurrentDate(newDate)
        setSelectedEvents([])
        setActiveDay(null)
      }
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
      setCurrentDate(newDate)
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

  // Fixed logic for disable state
  const isPrevMonthDisabled = 
    currentDate.getFullYear() < startDate.getFullYear() || 
    (currentDate.getFullYear() === startDate.getFullYear() && currentDate.getMonth() <= startDate.getMonth())

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="calendar-nav-btn" onClick={() => navigateMonth("prev")} disabled={isPrevMonthDisabled}>
          ←
        </button>
        <h2 className="calendar-month-title">{currentDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
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
              <h3 className="event-title">{event.title}</h3>
              <div className="event-details">
                <p className="event-detail">
                  <strong>Date:</strong>{" "}
                  {new Date(event.date + "T00:00:00").toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="event-detail">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="event-detail">
                  <strong>Location:</strong> {event.location}
                </p>
              </div>
              <p className="event-description">{event.description}</p>
              
              {(event.registrationLink || event.weNotificationLink) && (
                <div className="event-links">
                  {event.registrationLink && (
                    <a 
                      href={event.registrationLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="event-link-btn registration-btn"
                    >
                      📝 Register Here
                    </a>
                  )}
                  {event.weNotificationLink && (
                    <a 
                      href={event.weNotificationLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="event-link-btn notification-btn"
                    >
                      🔔 Let WE Know You're Going
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

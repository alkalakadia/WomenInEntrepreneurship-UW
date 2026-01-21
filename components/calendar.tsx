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
    description:
      "Start your year with innovation and inspiration at the UW Entrepreneurship Kickoff! Join us for a dynamic student org fair featuring a variety of entrepreneurial clubs across campus. Whether you're looking to launch your own startup, connect with like-minded innovators or explore new ideas, this is your chance to meet student leaders, learn about upcoming opportunities and get involved in the growing entrepreneurship community at UW!",
    registrationLink: "https://lu.ma/kj9zkjeh",
    weNotificationLink: "https://partiful.com/e/ANOySzoE2whM0ENol1lj",
  },
  {
    title: "Female Founder Panel",
    date: "2025-09-18",
    time: "5:30 PM - 7:00 PM",
    location: "Sellery Hall",
    description:
      "What does it take to turn an idea into a thriving business? Come hear from four female entrepreneurs who did just that! Join us for an unforgettable night featuring powerhouse founders Kenzie Beam, Grace Berbig, Ashley Storck, and Shelby Ostad as they share the remarkable stories and insightful strategies behind their ventures. From passion projects to successful businesses, these women are redefining success on their own terms. Stick around after the panel for open networking and light appetizers! This event is proudly sponsored by the Weinert Center for Entrepreneurship.",
    registrationLink: "https://partiful.com/e/gMDqkIBkgnyjkJF4iCjR",
  },
  {
    title: "Canva Venture Vision Boards",
    date: "2025-09-23",
    time: "5:00 PM - 6:30 PM",
    location: "Grainger 2167",
    description:
      "Join us for a social night where you'll create your own venture vision board using Canva, enjoy ice cream and meet fellow entrepreneurial-minded students! Whether you're dreaming of launching a startup, building a brand or just exploring new ideas, this is the perfect space to get inspired and connect. This is also a great opportunity for you to meet the WE team and learn about open director roles if you're interested in building your leadership skills!",
    weNotificationLink: "https://partiful.com/e/hxINKDDUtkCs5QD50M0w",
  },
  {
    title: "Cynthia Chu Fireside Chat",
    date: "2025-09-29",
    time: "5:00 PM - 6:00 PM CT",
    location: "Grainger 1185",
    description:
      "Join us for an intimate and inspiring Fireside Chat with the CFO of Audible, Cynthia Chu! A trailblazing leader known for her bold vision, strategic insight, and dynamic career. In this conversation, Cynthia will share her journey from early career moves to pivotal leadership moments as well as lessons learned along the way. She'll also discuss navigating challenges, driving innovation and what it takes to lead with purpose in today's fast-changing world. You don't want to miss it!",
  },
  {
    title: "Riley Bohage: WSB Guest Speaker",
    date: "2025-10-07",
    time: "5:30 PM - 6:30 PM",
    location: "WSB RM 2167",
    description:
      "Featuring: Riley Bohage, Wisconsin School of Business, Assistant Director of Admissions and Recruitment, MBA and Master's Programs. We're excited to welcome Riley Bohage from the Wisconsin School of Business to speak with Women in Entrepreneurship! Riley will discuss the 6 specialized master's programs that are open to both business and non-business majors — no prior business background required! These programs are designed to equip students with essential business acumen, including an entrepreneurship-focused curriculum, helping you prepare for the job market or launch your own venture. Whether you're planning to start your own business or just curious about how a graduate degree can sharpen your skills, this is a fantastic opportunity to learn more and ask questions! This is a great opportunity to learn about grad programs tailored for all majors, discover entrepreneurship pathways, connect with a representative from the Wisconsin School of Business, ask about admissions, career outcomes and more.",
    registrationLink: "https://partiful.com/e/rEC2dIIGjODEQcilT12e",
  },
  {
    title: "WE Spark Lab",
    date: "2025-10-14",
    time: "5:00 PM - 6:00 PM",
    location: "2185 Grainger Hall",
    description:
      "Have a business idea, passion project or startup you're trying to launch? Need help figuring out your next steps? Drop in to our work session check-in! A casual, open space for students who want guidance, feedback or hands-on support with launching a venture or working on any entrepreneurial project. Whether you're just getting started or already deep into your build, this is your chance to ask questions, get advice from mentors and staff, make progress and connect with like-minded students! Bring your ideas, your laptop, and your questions. We're here to help!",
    registrationLink: "https://partiful.com/e/frXmDwNx515eXbGU0k5i",
  },
  {
    title: "WE Social Event",
    date: "2025-10-21",
    time: "5:30 PM",
    location: "Grainger Hall RM 2080",
    description:
      "Join us for a fun Halloween social where we'll be celebrating together!",
  },
  {
    title: "WE x Transcend Collab Event: Start Smart: What I Wish I Knew",
    date: "2025-11-06",
    time: "6:30 PM - 8:00 PM",
    location: "1570 Morgride Hall",
    description:
      "A Candid Conversation with Founders on the Early Lessons That Shaped Their Journey. Starting a venture is exciting — but it's also messy, unpredictable, and full of lessons you only learn by doing. In this panel, founders open up about the missteps, pivots, aha moments, and real challenges they faced in their early days. They'll share what they wish they knew when they started, how they overcame early obstacles, and what advice they'd give to aspiring innovators just beginning their journey. Whether you're building now, dreaming of your first venture, or just curious about startup life — this conversation will give you insights you won't find in a textbook. Panelists: Marina Bloomer from Stellar Tech Girls, she runs a summer camp to encourage more women in tech. Derviş Gursöy (founder of Spraycision). Sydney Gang, the founder and CEO of Skip the Warm-Up and early stage entrepreneur.",
  },
  {
    title: "Speaker Event: Hali Jama",
    date: "2025-11-12",
    time: "5:30 PM - 6:30 PM",
    location: "WSB RM 3190",
    description:
      "Join us for a speaker event featuring Hali Jama. More details available in the RSVP link.",
    registrationLink: "https://partiful.com/e/AwMApzqZqyQl5R8NH3Hc",
  },
  {
    title: "Speaker Event: Adhira Sunkara - Problems Worth Solving",
    date: "2025-11-18",
    time: "5:30 PM - 6:30 PM",
    location: "WSB RM 1070",
    description:
      "Think you need a big idea to be an entrepreneur? Think again. Problems Worth Solving is a one-hour design sprint where you'll spot everyday challenges, brainstorm creative fixes, and map out how your idea could come to life. No experience needed. Just bring your curiosity and a willingness to think differently. Adhira Sunkara, PhD - Adhira is an innovation strategist and ecosystem architect driven by a passion for helping founders and communities bring new ideas to life. With a Ph.D. in biomedical engineering and early-stage experience as a med-tech founder, she bridges technical insight with venture strategy. Over the past decade, she has worked hands-on with startups and ecosystem partners to advance tech-based entrepreneurship across Wisconsin and beyond—mobilizing millions in federal, state, and private investment to help organizations and founders turn research and ideas into scalable impact.",
    registrationLink: "https://partiful.com/e/BHAd7boyNLtdXWFIT4PJ",
  },
  {
    title: "PJ Pitch Night & Pastries",
    date: "2025-12-02",
    time: "7:00 PM - 8:00 PM",
    location: "Morgridge Undergraduate Lounge",
    description:
      "Put on your coziest pajamas and bring your wildest 2 a.m. business ideas to life at our PJ Pitch Night! This isn't your average pitch competition. It's Shark Tank meets slumber party with hot cocoa, chaotic startup themes and plenty of laughter! How it works: You'll be randomly paired with teammates from different majors or class years, draw a totally out-there business prompt (think: a dating app for houseplants or pajamas that turn into business suits when you cartwheel), incorporate fun wildcards like celebrity endorsements, PR scandals or subscription-only models. You'll have 30 minutes to build your pitch (including project deck) and present to our panel of mock investors (with candy and gift cards as your 'funding'). We hope to see you there!",
  },
  {
    title: "Caroline Lakshmanan: CEO/Co-Founder of Cloud Closet",
    date: "2025-02-05",
    time: "7:00 PM - 8:00 PM",
    location: "2335 Grainger Hall",
    description:
      "Caroline Lakshmanan is a fashion-tech visionary with a background in luxury merchandising and digital innovation. As the co-founder and CEO of Cloud Closet, she is rethinking the way we interact with our wardrobes by building a social platform that treats getting dressed as a collaborative, social experience. Inspired by viral fashion trends, Caroline founded Cloud Closet to solve the clunky nature of digital wardrobe management. From Parisian luxury houses like Celine to the cutting edge of social commerce, join us as Caroline shares her journey of building a startup that turns fashion hacks into a global social wardrobe.",
    registrationLink: "https://partiful.com/e/yBjg6KDsHJzuYEJQIGFr?c=xisdlwwk",
  },
  {
    title: "WE: Info Session",
    date: "2025-02-12",
    time: "6:00 PM - 7:00 PM",
    location: "2339 Grainger Hall",
    description:
      "Come hang out with us! Want to know what we're all about? We'll walk you through how our membership works, including the new points system we're rolling out this semester. You'll earn points for showing up to events, and there are fun rewards when you hit certain milestones. You'll even get points just for coming to this meeting! We'll also share all the cool events we have planned and do some activities so you can meet other members and make new friends. Plus, snacks. Obviously.",
    registrationLink: "https://partiful.com/e/YImnUzmHcebujqsbqwyR?c=wN7fW1dq",
  },
  {
    title: "Jillian Yanick: Financial Advisor and Director of Development, Northwestern Mutual",
    date: "2025-03-03",
    time: "6:00 PM - 7:00 PM",
    location: "Grainger Hall",
    description:
      "Come hear Jillian Yanick's incredible journey with Northwestern Mutual, from her beginnings as a College Financial Representative intern to establishing her own successful financial planning practice and rising to a leadership position. Discover her insights on navigating a male-dominated industry and overcoming challenges as an entrepreneur. Don't miss this opportunity to learn from Jillian's unique experiences and gain valuable advice.",
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
      if (
        newDate.getFullYear() > startDate.getFullYear() ||
        (newDate.getFullYear() === startDate.getFullYear() && newDate.getMonth() >= startDate.getMonth())
      ) {
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
        <h2 className="calendar-month-title">
          {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </h2>
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

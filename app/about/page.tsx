import Image from "next/image"

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
      </div>
    </div>
  )
}

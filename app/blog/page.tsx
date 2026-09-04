export default function Blog() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Blog</h1>
          <p className="page-subtitle">
            Insights, stories, and updates from the Women in Entrepreneurship community.
          </p>
        </div>

        {/* Featured post: WE Gala */}
        <article
          style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            padding: "40px",
            maxWidth: "820px",
            margin: "0 auto 40px",
          }}
        >
          <p style={{ fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "#9F4763", marginBottom: "8px" }}>
            April 28, 2026 &middot; Event Recap
          </p>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "20px", lineHeight: 1.2 }}>
            A gala with intention
          </h2>

          <img
            src="/assets/gala-1.jpg"
            alt="Women in Entrepreneurship executive team at the inaugural WE Gala"
            style={{ width: "100%", borderRadius: "12px", marginBottom: "24px", display: "block" }}
          />

          <p style={{ marginBottom: "16px", lineHeight: 1.7 }}>
            This spring, Women in Entrepreneurship hosted its inaugural Women and Entrepreneurship Gala,
            bringing UW-Madison students together with Madison-area entrepreneurs and leaders from venture
            capital, AI, consulting, consumer products, and other areas of the entrepreneurial ecosystem.
          </p>
          <p style={{ marginBottom: "16px", lineHeight: 1.7 }}>
            The event was designed to give students meaningful, direct access to experienced entrepreneurs.
            Each table featured an entrepreneur, creating an intimate setting where students could ask
            questions, learn about different career paths, and build connections with people actively working
            in the startup and business community.
          </p>
          <p style={{ marginBottom: "16px", lineHeight: 1.7 }}>
            The event also created tangible opportunities for students beyond the evening itself. Several
            participating founders arrived with internship opportunities, turning conversations at the gala
            into potential pathways for students to gain hands-on experience in startups and entrepreneurship.
          </p>
          <p style={{ lineHeight: 1.7 }}>
            The inaugural gala brought together students and entrepreneurs on April 28, 2026, and demonstrated
            the value of creating spaces where students can connect directly with women and leaders across
            Madison&rsquo;s entrepreneurial community.
          </p>
        </article>

        {/* In the news */}
        <section
          style={{
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            padding: "28px 32px",
            maxWidth: "820px",
            margin: "0 auto 60px",
          }}
        >
          <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "10px" }}>In the news</h3>
          <a
            href="https://cai.wisc.edu/2026/07/31/meet-the-students-making-space-for-women-in-entrepreneurship/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#9F4763", fontWeight: 600, textDecoration: "underline" }}
          >
            Meet the Students Making Space for Women in Entrepreneurship
          </a>
          <p style={{ marginTop: "6px", color: "#555", fontSize: "0.95rem" }}>
            Our gala was featured by the UW-Madison College of Computing and AI.
          </p>
        </section>
      </div>
    </div>
  )
}

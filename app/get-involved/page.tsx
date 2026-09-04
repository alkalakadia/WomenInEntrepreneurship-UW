import { Instagram, Users, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function GetInvolved() {
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Get Involved</h1>
          <p className="page-subtitle">
            Ready to join our community of fearless women entrepreneurs? Connect with us and become part of something
            extraordinary.
          </p>
        </div>

        {/* Main Hero Image - FullSizeRender_VSCO.jpg */}
        <div style={{ marginBottom: "60px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
          <Image
            src="/assets/FullSizeRender_VSCO.jpg"
            alt="Join our community of women entrepreneurs"
            width={1200}
            height={500}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            priority
          />
        </div>

        <div className="connect-section">
          <h2 className="section-title">Connect With Us</h2>
          <div className="social-grid">
            <a href="https://www.instagram.com/weuwmadison/" target="_blank" className="social-link" rel="noreferrer">
              <div className="social-icon instagram">
                <Instagram size={32} />
              </div>
              <span className="social-text">Follow us on Instagram</span>
            </a>

            <a
              href="https://groupme.com/join_group/107238008/UlbVEj3T"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <div className="social-icon groupme">
                <Users size={32} />
              </div>
              <span className="social-text">Join our GroupMe</span>
            </a>

            <a href="https://www.linkedin.com/company/weuw" target="_blank" className="social-link" rel="noreferrer">
              <div className="social-icon linkedin">
                <Linkedin size={32} />
              </div>
              <span className="social-text">Connect on LinkedIn</span>
            </a>

            <a href="mailto:womeninentrepreneurshipuw@gmail.com" className="social-link">
              <div className="social-icon email">
                <Mail size={32} />
              </div>
              <span className="social-text">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

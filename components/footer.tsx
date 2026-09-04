import Link from "next/link"
import { Instagram, Users, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and Tagline */}
          <div className="footer-brand">
            <h3 className="footer-logo">WE</h3>
            <p className="footer-tagline">Empowering Future Leaders</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <nav className="footer-nav">
              <Link href="/about">About</Link>
              <Link href="/team">Team</Link>
              <Link href="/events">Events</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/get-involved">Get Involved</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-title">Connect With Us</h4>
            <div className="footer-social">
              <a href="https://www.instagram.com/weuwmadison/" target="_blank" rel="noreferrer" className="footer-social-link">
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a href="https://groupme.com/join_group/107238008/UlbVEj3T" target="_blank" rel="noreferrer" className="footer-social-link">
                <Users size={20} />
                <span>GroupMe</span>
              </a>
              <a href="https://www.linkedin.com/company/weuw" target="_blank" rel="noreferrer" className="footer-social-link">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:womeninentrepreneurshipuw@gmail.com" className="footer-social-link">
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="footer-section">
            <h4 className="footer-title">Ready to Join?</h4>
            <p className="footer-description">
              Become part of our community of fearless women entrepreneurs.
            </p>
            <Link href="/get-involved" className="footer-cta">
              Get Involved
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Women in Entrepreneurship - UW Madison. Made with <Heart size={16} className="footer-heart" /> by our amazing team.
          </p>
        </div>
      </div>
    </footer>
  )
}

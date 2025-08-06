"use client"

import { useState } from "react"
import { MessageCircle, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/submit-contact-form"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message,
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input type="text" id="firstName" name="firstName" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input type="text" id="lastName" name="lastName" className="form-input" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input type="email" id="email" name="email" className="form-input" required />
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <select id="subject" name="subject" className="form-input" required>
          <option value="">Select a topic...</option>
          <option value="general">General Inquiry</option>
          <option value="membership">Membership Information</option>
          <option value="events">Upcoming Events</option>
          <option value="partnership">Partnership Opportunities</option>
          <option value="speaking">Speaking Opportunities</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="form-input form-textarea"
          placeholder="Tell us about your questions, ideas, or how you'd like to get involved..."
          required
        ></textarea>
      </div>

      {submitStatus.type && (
        <div className={`form-status ${submitStatus.type}`}>
          {submitStatus.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span>{submitStatus.message}</span>
        </div>
      )}

      <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
        <MessageCircle size={20} />
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}

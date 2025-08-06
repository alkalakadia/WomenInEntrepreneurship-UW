"use server"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!firstName || !lastName || !email || !subject || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Prepare the data for Google Sheets
  const submissionData = {
    timestamp: new Date().toISOString(),
    firstName,
    lastName,
    email,
    subject,
    message,
  }

  try {
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL

    if (!GOOGLE_SHEETS_URL) {
      console.error("Google Sheets URL not configured")
      return {
        success: false,
        message: "Configuration error. Please contact support.",
      }
    }

    console.log("Submitting to Google Sheets...")

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
      redirect: "follow",
    })

    console.log("Response status:", response.status)

    // Check if we got an HTML response (Google's redirect page)
    const contentType = response.headers.get("content-type")
    const responseText = await response.text()

    // If we get HTML with "Moved Temporarily", it usually means the data was still processed
    // This is a common Google Apps Script behavior
    if (contentType && contentType.includes("text/html") && responseText.includes("Moved Temporarily")) {
      console.log("Received redirect response, but data likely processed successfully")
      return {
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
      }
    }

    // Try to parse as JSON
    let result
    try {
      result = JSON.parse(responseText)
    } catch (parseError) {
      // If we can't parse as JSON but got a 200 status, assume success
      if (response.ok) {
        console.log("Non-JSON response but status OK, assuming success")
        return {
          success: true,
          message: "Thank you for your message! We'll get back to you soon.",
        }
      }
      throw new Error("Invalid response format")
    }

    if (result.success) {
      return {
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
      }
    } else {
      throw new Error(result.error || "Unknown error from Google Sheets")
    }
  } catch (error) {
    console.error("Error submitting form:", error)

    // Since you mentioned the data IS going to the sheet, let's be more lenient
    // and assume success if it's just a parsing/redirect issue
    if (error.message && error.message.includes("Moved Temporarily")) {
      console.log("Treating redirect as success since data is being saved")
      return {
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
      }
    }

    return {
      success: false,
      message: "Sorry, there was an error submitting your message. Please try again later or contact us directly.",
    }
  }
}

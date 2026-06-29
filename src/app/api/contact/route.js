import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    // Here you would send an email using a service like Nodemailer, SendGrid, etc.
    // For now, we'll just log the data and return success
    
    console.log('New enquiry received:')
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Phone: ${phone || 'Not provided'}`)
    console.log(`Message: ${message}`)

    // TODO: Add email sending logic
    // For production, use a service like:
    // - Nodemailer (SMTP)
    // - SendGrid
    // - EmailJS
    // - AWS SES

    // For demo purposes, we'll return success
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing enquiry:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
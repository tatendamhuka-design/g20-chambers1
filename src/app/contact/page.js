'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  ArrowLeft,
  Building,
  Navigation
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    telephone: '',
    enquiryType: '',
    practiceArea: '',
    details: '',
    instructedBefore: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          surname: '',
          email: '',
          telephone: '',
          enquiryType: '',
          practiceArea: '',
          details: '',
          instructedBefore: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const enquiryTypes = [
    'Select enquiry type',
    'New Instruction',
    'Existing Client Enquiry',
    'General Enquiry',
    'Media Enquiry',
    'Pupillage Enquiry',
    'Other'
  ]

  const practiceAreas = [
    'Select a practice area',
    'Criminal Law',
    'Human Rights',
    'Civil Litigation',
    'Family Law',
    'Immigration Law',
    'Employment Law',
    'Public Law',
    'Administrative Law',
    'Property Law',
    'Constitutional Law',
    'Other'
  ]

  const instructedOptions = ['No', 'Yes']

  return (
    <main>
      <Header />

      {/* Minimal Hero Section - Centered on mobile */}
      <section className="bg-[#0a1628] text-white py-12 md:py-16 border-b-4 border-[#c9a84c]">
        <div className="container max-w-6xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors mb-4 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Contact <span className="text-[#c9a84c]">Us</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg mt-2 max-w-2xl mx-auto md:mx-0">
              Get in touch with G20 Chambers for expert legal advice and representation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Small Paragraph - Centered */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#555] text-lg leading-relaxed">
              <span className="font-bold text-[#0a1628]">G20 Chambers</span> is located at 
              <span className="font-semibold text-[#c9a84c]"> 39 Voortrekker Street, Polokwane</span>. 
              We are committed to providing top-notch advocate services to clients across Limpopo. 
              Whether you need legal advice, representation, or simply want to discuss your case, 
              our team is here to help. Reach out to us via phone, email, or WhatsApp.
            </p>
          </div>

          {/* Map Section - Centered */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-[#e8e0d4] shadow-md max-w-4xl mx-auto">
            <div className="relative h-64 md:h-72 w-full bg-[#faf8f5]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.4722561680227!2d29.46129851982739!3d-23.902557255811948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec1286a8cd07d6b%3A0x98b7f4b705f29d54!2s39%20Voortrekker%20St%2C%20Polokwane%2C%200699!5e0!3m2!1sen!2sza!4v1719585679058!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="G20 Chambers Location - 39 Voortrekker Street, Polokwane"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0a1628]/80 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full border border-[#c9a84c]/30 flex items-center gap-2 whitespace-nowrap">
                <Navigation className="w-3 h-3 text-[#c9a84c]" />
                39 Voortrekker Street, Polokwane
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Info - Centered on mobile */}
            <div className="lg:col-span-1">
              <div className="bg-[#faf8f5] rounded-2xl p-6 border border-[#e8e0d4] lg:sticky lg:top-24">
                <h2 className="text-lg font-extrabold text-[#0a1628] mb-6 text-center lg:text-left">Get in Touch</h2>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#888] uppercase tracking-wider">Address</p>
                      <p className="text-sm text-[#0a1628] font-medium">39 Voortrekker Street</p>
                      <p className="text-sm text-[#0a1628] font-medium">Polokwane, South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#888] uppercase tracking-wider">Phone</p>
                      <a href="tel:+27823413333" className="text-sm text-[#0a1628] font-medium hover:text-[#c9a84c] transition-colors">
                        082 341 3333
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#888] uppercase tracking-wider">Email</p>
                      <a href="mailto:cali.mathabatha@gmail.com" className="text-sm text-[#0a1628] font-medium hover:text-[#c9a84c] transition-colors break-all">
                        cali.mathabatha@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#888] uppercase tracking-wider">Office Hours</p>
                      <p className="text-sm text-[#0a1628] font-medium">Mon - Fri: 8:00 AM - 5:00 PM</p>
                      <p className="text-sm text-[#888]">Sat: By appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                      <Building className="w-5 h-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#888] uppercase tracking-wider">Head of Chambers</p>
                      <p className="text-sm text-[#0a1628] font-medium">Barrister Mathabatha</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-6 pt-6 border-t border-[#e8e0d4]">
                  <a
                    href="https://wa.me/27823413333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white px-4 py-3 font-bold rounded-xl hover:bg-[#1da851] transition-all text-sm"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Premium Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#e8e0d4] shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-extrabold text-[#0a1628]">Send a Message</h2>
                    <p className="text-sm text-[#888]">We'll respond within 24 hours</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name - First Name + Surname */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                        Surname *
                      </label>
                      <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  {/* Email + Telephone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
                        placeholder="082 341 3333"
                      />
                    </div>
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                      Nature of your enquiry *
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm bg-white appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        paddingRight: '40px',
                      }}
                    >
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Practice Area */}
                  <div>
                    <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                      Area of your enquiry
                    </label>
                    <select
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm bg-white appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        paddingRight: '40px',
                      }}
                    >
                      {practiceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>

                  {/* Details */}
                  <div>
                    <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                      Details *
                    </label>
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition resize-none text-sm"
                      placeholder="Please provide details about your legal matter..."
                    />
                  </div>

                  {/* Instructed Before */}
                  <div>
                    <label className="block text-xs font-semibold text-[#888] uppercase tracking-wider mb-1.5">
                      Have you instructed G20 Chambers before? *
                    </label>
                    <div className="flex gap-6">
                      {instructedOptions.map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="instructedBefore"
                            value={option}
                            checked={formData.instructedBefore === option}
                            onChange={handleChange}
                            required
                            className="w-4 h-4 text-[#c9a84c] border-[#e8e0d4] focus:ring-[#c9a84c] focus:ring-2"
                          />
                          <span className="text-sm text-[#0a1628]">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#c9a84c] text-[#0a1628] py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="flex items-start gap-3 bg-green-50 text-green-700 p-3 rounded-xl border border-green-200">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Message sent successfully!</p>
                        <p className="text-xs text-green-600">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-start gap-3 bg-red-50 text-red-700 p-3 rounded-xl border border-red-200">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Something went wrong.</p>
                        <p className="text-xs text-red-600">Please try again or call us directly.</p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
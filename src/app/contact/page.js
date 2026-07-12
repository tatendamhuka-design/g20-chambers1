'use client'

import { useState, useEffect } from 'react'
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
  Navigation,
  MessageCircle,
  Award,
  Users,
  Globe,
  ChevronRight
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [barristerCount, setBarristerCount] = useState(0)
  const [loading, setLoading] = useState(true)
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

  useEffect(() => {
    const fetchBarristers = async () => {
      try {
        const res = await fetch('/api/admin/barristers?limit=1000')
        const data = await res.json()
        const barristers = data.barristers || []
        setBarristerCount(barristers.length)
      } catch (error) {
        console.error('Error fetching barristers:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBarristers()
  }, [])

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
    'Family Law',
    'Human Rights',
    'Civil Litigation',
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
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* ===== HERO SECTION - DARK WITH WHITE BREADCRUMB ===== */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb - White text */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <nav className="flex items-center gap-1 text-sm text-gray-300 py-3 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
              <Link href="/" className="flex items-center gap-1 hover:text-[#c9a84c] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
                </svg>
                <span>Home</span>
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-white font-medium">Contact</span>
            </nav>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Contact <span className="text-[#c9a84c]">Us</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              Get in touch with G20 Chambers for expert legal advice and representation.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>{loading ? '...' : barristerCount} Barristers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>8 Practice Areas</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>Est. 2021</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>GCB Member</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Small Paragraph */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-[#555] text-base md:text-lg leading-relaxed">
              <span className="font-bold text-[#0a1628]">G20 Chambers</span> is a premier group of barristers at the Limpopo Bar, 
              located at <span className="font-semibold text-[#c9a84c]">39 Voortrekker Street, Polokwane</span>. 
              We are committed to providing top-notch advocate services to clients across Limpopo. 
              Whether you need legal advice, representation, or simply want to discuss your case, 
              our team is here to help. Reach out to us via phone, email, or WhatsApp.
            </p>
          </div>

          {/* ===== MAP + FORM SIDE BY SIDE ===== */}
          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[#e8e0d4] shadow-sm h-[400px] md:h-[500px]">
              <div className="relative w-full h-full bg-[#faf8f5]">
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

            {/* Form */}
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
                    rows="3"
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
                  className="w-full bg-[#c9a84c] text-[#0a1628] py-3.5 font-bold rounded-xl hover:bg-[#e0c66e] transition-all hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
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
                  <div className="flex items-start gap-3 bg-green-50 text-green-700 p-4 rounded-xl border border-green-200">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Message sent successfully!</p>
                      <p className="text-xs text-green-600">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 text-red-700 p-4 rounded-xl border border-red-200">
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

          {/* ===== GET IN TOUCH - BOTTOM VERTICAL ===== */}
          <div className="bg-[#faf8f5] rounded-2xl p-8 border border-[#e8e0d4]">
            <h2 className="text-xl font-extrabold text-[#0a1628] text-center mb-8">Get in Touch</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#888] uppercase tracking-wider">Address</p>
                  <p className="text-sm text-[#0a1628] font-medium">39 Voortrekker Street</p>
                  <p className="text-sm text-[#0a1628] font-medium">Polokwane, South Africa</p>
                  <p className="text-xs text-[#888] mt-0.5">STATSA Campus, across from High Court</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#888] uppercase tracking-wider">Phone</p>
                  <a href="tel:+27823413333" className="text-sm text-[#0a1628] font-medium hover:text-[#c9a84c] transition-colors">
                    082 341 3333
                  </a>
                  <br />
                  <a href="tel:+27158801865" className="text-sm text-[#0a1628] font-medium hover:text-[#c9a84c] transition-colors">
                    015 880 1865
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
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

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#888] uppercase tracking-wider">Office Hours</p>
                  <p className="text-sm text-[#0a1628] font-medium">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-sm text-[#888]">Sat: By appointment</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button at Bottom */}
            <div className="mt-8 pt-8 border-t border-[#e8e0d4] flex justify-center">
              <a
                href="https://wa.me/27823413333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-3.5 font-bold rounded-xl hover:bg-[#1da851] transition-all hover:scale-[1.02] group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
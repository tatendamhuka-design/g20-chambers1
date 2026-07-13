'use client'

import { useState, useEffect } from 'react'
import { 
  Scale, Users, Award, MapPin, Calendar, Building, 
  ChevronRight, Linkedin, Twitter, Clock, Phone, Mail,
  Shield, Target, Heart, Globe, Briefcase, Star, CheckCircle,
  TrendingUp, BookOpen, Landmark, Home, FileText, ArrowRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function AboutPage() {
  const [barristerCount, setBarristerCount] = useState(0)
  const [loading, setLoading] = useState(true)

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

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* ===== SCHEMA MARKUP ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About G20 Chambers',
            description: 'G20 Chambers is a leading group of barristers at the Limpopo Bar, established in 2021.',
            url: 'https://g20chambers.co.za/about',
            mainEntity: {
              '@type': 'LegalService',
              name: 'G20 Chambers',
              description: 'A leading group of barristers at the Limpopo Bar, providing expert legal representation.',
              foundingDate: '2021',
              numberOfEmployees: barristerCount || 14,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '39 Voortrekker Street',
                addressLocality: 'Polokwane',
                addressRegion: 'Limpopo',
                postalCode: '0699',
                addressCountry: 'ZA',
              },
              telephone: '+27823413333',
              email: 'cali.mathabatha@gmail.com',
              openingHours: 'Mo-Fr 08:00-17:00',
              priceRange: '$$',
            },
          }),
        }}
      />

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
              <span className="text-white font-medium">About</span>
            </nav>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              About <span className="text-[#c9a84c]">G20 Chambers</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              The home of premier barristers in Limpopo, committed to fighting injustice, defending human rights, and upholding the rule of law.
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

      {/* ===== OUR HISTORY ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#0a1628] text-[#c9a84c] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                Our History
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628] mb-4">
                The Story of <span className="text-[#c9a84c]">G20 Chambers</span>
              </h2>
              
              <div className="space-y-4 text-[#555] leading-relaxed">
                <p>
                  <strong className="text-[#0a1628]">G20 Chambers</strong> was established in <strong className="text-[#0a1628]">2021</strong> by a group of passionate advocates who shared a common vision: to create a premier barristers' chambers in Limpopo that would serve the community with integrity, excellence, and fearlessness.
                </p>
                <p>
                  The group was founded by <strong className="text-[#0a1628]">Adv. Malose Monene, Adv. Cali Mathabatha, Adv. Sentle Fenyane, Adv. Germain Ledwaba, and Adv. Chuene Rammutla</strong>. These founding members were soon joined by <strong className="text-[#0a1628]">Adv. Isaac Maila, Adv. Eunice Thete, Adv. Lindiwe Vilakazi, and Adv. Sydney Mgimeti</strong>.
                </p>
                <p>
                  Today, G20 Chambers has grown to <strong className="text-[#0a1628]">{loading ? '...' : barristerCount} barristers</strong> and is proudly situated at <strong className="text-[#0a1628]">39 Voortrekker Street, Polokwane</strong> at the STATSA Campus, directly across from the Limpopo High Court Building.
                </p>
                <p>
                  The group is a constituent member of the <strong className="text-[#0a1628]">General Council of the Bar of South Africa (GCBSA)</strong> through its affiliation with the <strong className="text-[#0a1628]">Limpopo Bar</strong>.
                </p>
              </div>
            </div>

            <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e0d4]">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center border border-[#e8e0d4]">
                  <p className="text-3xl md:text-4xl font-extrabold text-[#c9a84c]">2021</p>
                  <p className="text-xs text-[#888] mt-1">Established</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center border border-[#e8e0d4]">
                  <p className="text-3xl md:text-4xl font-extrabold text-[#c9a84c]">{loading ? '...' : barristerCount}</p>
                  <p className="text-xs text-[#888] mt-1">Barristers</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center border border-[#e8e0d4]">
                  <p className="text-3xl md:text-4xl font-extrabold text-[#c9a84c]">5</p>
                  <p className="text-xs text-[#888] mt-1">Founders</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center border border-[#e8e0d4]">
                  <p className="text-3xl md:text-4xl font-extrabold text-[#c9a84c]">GCB</p>
                  <p className="text-xs text-[#888] mt-1">Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VALUES ===== */}
      <section className="py-12 md:py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#0a1628] text-[#c9a84c] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Our Purpose
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">
              Mission & <span className="text-[#c9a84c]">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="bg-white rounded-xl p-6 border border-[#e8e0d4] text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-[#c9a84c]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">Our Mission</h3>
              <p className="text-[#555] text-sm leading-relaxed">
                To provide top-notch advocate services to clients in Limpopo and beyond, fighting for justice with integrity, excellence, and fearlessness.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-6 border border-[#e8e0d4] text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-[#c9a84c]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">Our Vision</h3>
              <p className="text-[#555] text-sm leading-relaxed">
                To be the leading barristers' chambers in Limpopo, recognized for excellence in advocacy, commitment to justice, and service to the community.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl p-6 border border-[#e8e0d4] text-center hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-[#c9a84c]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">Our Values</h3>
              <ul className="text-[#555] text-sm text-left space-y-1 max-w-xs mx-auto">
                <li className="flex items-center gap-2">✓ Integrity in all we do</li>
                <li className="flex items-center gap-2">✓ Excellence in advocacy</li>
                <li className="flex items-center gap-2">✓ Fearless pursuit of justice</li>
                <li className="flex items-center gap-2">✓ Compassion for our clients</li>
                <li className="flex items-center gap-2">✓ Commitment to the rule of law</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE G20 ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#0a1628] text-[#c9a84c] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">
              Why <span className="text-[#c9a84c]">G20 Chambers</span>?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: 'Top-Ranked Advocates',
                desc: 'Our barristers are recognized for their excellence in advocacy and legal expertise.'
              },
              {
                icon: MapPin,
                title: 'Local Expertise',
                desc: 'Deep understanding of Limpopo\'s legal landscape and community needs.'
              },
              {
                icon: Users,
                title: 'Client-Focused',
                desc: 'Personalized approach ensuring every client receives dedicated attention and care.'
              },
              {
                icon: Scale,
                title: 'Fearless Advocacy',
                desc: 'We fight tirelessly for our clients, no matter how powerful the opponent.'
              },
              {
                icon: Shield,
                title: 'Access to Justice',
                desc: 'Committed to providing pro bono services and access to justice for all.'
              },
              {
                icon: Star,
                title: 'Proven Track Record',
                desc: 'A history of success in complex cases and landmark legal victories.'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e0d4] hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#c9a84c]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1628] mb-2">{item.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== PROFESSIONAL AFFILIATIONS ===== */}
      <section className="py-12 md:py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#0a1628] text-[#c9a84c] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Our Affiliations
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">
              Professional <span className="text-[#c9a84c]">Affiliations</span>
            </h2>
            <p className="text-[#555] text-sm mt-2 max-w-2xl mx-auto">
              G20 Chambers is proud to be affiliated with these prestigious legal organizations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Limpopo Bar */}
            <a 
              href="https://limpopobar.co.za" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 text-center border border-[#e8e0d4] hover:border-[#c9a84c] hover:shadow-lg transition-all group"
            >
              <div className="h-16 flex items-center justify-center mb-3">
                <img 
                  src="/images/logos/limpopo-bar.png" 
                  alt="Limpopo Bar"
                  className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                <span className="hidden text-[#0a1628] font-bold text-sm">Limpopo Bar</span>
              </div>
              <h3 className="font-bold text-[#0a1628] text-sm">Limpopo Bar</h3>
              <p className="text-xs text-[#888] mt-1">Member</p>
            </a>

            {/* GCBSA */}
            <a 
              href="https://GCBSA.co.za" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 text-center border border-[#e8e0d4] hover:border-[#c9a84c] hover:shadow-lg transition-all group"
            >
              <div className="h-16 flex items-center justify-center mb-3">
                <img 
                  src="/images/logos/gcbsa.png" 
                  alt="GCBSA"
                  className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                <span className="hidden text-[#0a1628] font-bold text-sm">GCBSA</span>
              </div>
              <h3 className="font-bold text-[#0a1628] text-sm">GCBSA</h3>
              <p className="text-xs text-[#888] mt-1">Constituent Member</p>
            </a>

            {/* LPC */}
            <a 
              href="https://lpc.org.za" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 text-center border border-[#e8e0d4] hover:border-[#c9a84c] hover:shadow-lg transition-all group"
            >
              <div className="h-16 flex items-center justify-center mb-3">
                <img 
                  src="/images/logos/lpc.png" 
                  alt="LPC"
                  className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                <span className="hidden text-[#0a1628] font-bold text-sm">LPC</span>
              </div>
              <h3 className="font-bold text-[#0a1628] text-sm">LPC</h3>
              <p className="text-xs text-[#888] mt-1">Regulated By</p>
            </a>

            {/* DOJ */}
            <a 
              href="https://justice.gov.za" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 text-center border border-[#e8e0d4] hover:border-[#c9a84c] hover:shadow-lg transition-all group"
            >
              <div className="h-16 flex items-center justify-center mb-3">
                <img 
                  src="/images/logos/doj.png" 
                  alt="DOJ"
                  className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                <span className="hidden text-[#0a1628] font-bold text-sm">DOJ</span>
              </div>
              <h3 className="font-bold text-[#0a1628] text-sm">DOJ</h3>
              <p className="text-xs text-[#888] mt-1">Framework Partner</p>
            </a>
          </div>
        </div>
      </section>

      {/* ===== LOCATION ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#0a1628] text-[#c9a84c] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                Our Location
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628] mb-4">
                Visit <span className="text-[#c9a84c]">Our Chambers</span>
              </h2>
              <div className="space-y-4 text-[#555]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0a1628]">39 Voortrekker Street, Polokwane</p>
                    <p className="text-sm">STATSA Campus, across from Limpopo High Court Building</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0a1628]">Office Hours</p>
                    <p className="text-sm">Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-sm">Sat: By appointment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0a1628]">Contact</p>
                    <p className="text-sm">📞 082 341 3333</p>
                    <p className="text-sm">✉️ cali.mathabatha@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="https://maps.google.com/?q=39+Voortrekker+Street+Polokwane" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0a1628] px-6 py-2.5 font-bold rounded-lg hover:bg-[#e0c66e] transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#e8e0d4] shadow-md h-[300px] md:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.4722561680227!2d29.46129851982739!3d-23.902557255811948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec1286a8cd07d6b%3A0x98b7f4b705f29d54!2s39%20Voortrekker%20St%2C%20Polokwane%2C%200699!5e0!3m2!1sen!2sza!4v1719585679058!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="G20 Chambers Location - 39 Voortrekker Street, Polokwane"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] border-y-4 border-[#c9a84c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Ready to Work With <span className="text-[#c9a84c]">Us</span>?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Get in touch with G20 Chambers for expert legal advice and representation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] px-8 py-3.5 font-bold rounded-xl hover:bg-[#e0c66e] transition-all hover:scale-105"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/barristers"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-3.5 font-semibold rounded-xl border-2 border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all hover:scale-105"
            >
              Meet Our Barristers <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
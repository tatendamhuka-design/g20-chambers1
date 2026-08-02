'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// Split Quick Links into two groups
const quickLinksLeft = [
  { name: 'About', href: '/about' },
  { name: 'Advocates', href: '/barristers' },  // ← Changed from "Barristers"
  { name: 'Clerks & Staff', href: '/clerks' },
  { name: 'Areas of Law', href: '/areas' },
]

const quickLinksRight = [
  { name: 'Public Access', href: '/public-access' },
  { name: 'News & Blogs', href: '/insights' },
  { name: 'Events', href: '/events' },
  { name: 'Join Us', href: '/join' },
  { name: 'Contact', href: '/contact' },
]

const legalNav = [
  { name: 'Limpopo Bar', href: 'https://limpopobar.co.za' },
  { name: 'GCBSA', href: 'https://gcbsa.co.za' },
  { name: 'LPC', href: 'https://lpc.org.za' },
  { name: 'DOJ', href: 'https://justice.gov.za' },
]

const legalLinks = [
  {
    name: 'Limpopo Bar',
    href: 'https://limpopobar.co.za',
    image: '/images/logos/limpopo-bar.png',
  },
  {
    name: 'GCBSA',
    href: 'https://gcbsa.co.za',
    image: '/images/logos/gcbsa.png',
  },
  {
    name: 'LPC',
    href: 'https://lpc.org.za',
    image: '/images/logos/lpc.png',
  },
  {
    name: 'DOJ',
    href: 'https://justice.gov.za',
    image: '/images/logos/doj.png',
  },
]

export default function Footer() {
  const [logoErrors, setLogoErrors] = useState({})

  const handleLogoError = (name) => {
    setLogoErrors(prev => ({ ...prev, [name]: true }))
  }

  return (
    <footer className="bg-[#060e1e] text-[#aab] pt-12 pb-6 border-t-4 border-[#c9a84c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Legal Affiliations - White Background Section */}
        <div className="bg-white rounded-xl mb-10 p-6 md:p-8 shadow-sm border border-[#e8e0d4]">
          <div className="hidden md:flex items-center justify-center gap-8 md:gap-12 mb-4">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity hover:opacity-80"
                aria-label={link.name}
              >
                {!logoErrors[link.name] ? (
                  <img
                    src={link.image}
                    alt={link.name}
                    className="h-10 md:h-12 w-auto object-contain"
                    onError={() => handleLogoError(link.name)}
                  />
                ) : (
                  <span className="text-[#0a1628] text-sm font-semibold px-3 py-2 border border-[#e8e0d4] rounded-lg">
                    {link.name}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="md:hidden relative overflow-hidden py-2">
            <div className="flex animate-scroll-left whitespace-nowrap">
              {[...legalLinks, ...legalLinks, ...legalLinks].map((link, index) => (
                <a
                  key={`${link.name}-${index}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mx-4 transition-opacity hover:opacity-80"
                  aria-label={link.name}
                >
                  {!logoErrors[link.name] ? (
                    <img
                      src={link.image}
                      alt={link.name}
                      className="h-8 w-auto object-contain"
                      onError={() => handleLogoError(link.name)}
                    />
                  ) : (
                    <span className="text-[#0a1628] text-xs font-semibold px-3 py-1.5 border border-[#e8e0d4] rounded-lg">
                      {link.name}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          <p className="text-center text-xs md:text-sm text-[#555] max-w-3xl mx-auto mt-4 leading-relaxed">
            G20 Chambers is proudly affiliated with the{' '}
            <a href="https://limpopobar.co.za" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] hover:underline font-medium">
              Limpopo Bar
            </a>
            {' '}and is a constituent member of the{' '}
            <a href="https://gcbsa.co.za" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] hover:underline font-medium">
              General Council of the Bar of South Africa (GCBSA)
            </a>
            . Our advocates are regulated by the{' '}
            <a href="https://lpc.org.za" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] hover:underline font-medium">
              Legal Practice Council (LPC)
            </a>
            {' '}and operate within the framework of the{' '}
            <a href="https://justice.gov.za" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] hover:underline font-medium">
              Department of Justice and Constitutional Development
            </a>
            .
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1 text-center md:text-left">
            <Link href="/" className="flex flex-col items-center md:items-start">
              <span className="text-xl font-extrabold text-white tracking-wide">
                G20 <span className="text-[#c9a84c]">Chambers</span>
              </span>
              <span className="text-[0.6rem] font-light tracking-[0.2em] uppercase text-[#889] -mt-0.5">
                The home of premier advocates
              </span>
            </Link>
            <p className="text-sm text-[#889] mt-3 max-w-xs mx-auto md:mx-0">
              Providing top-notch advocate services to clients in Limpopo.
            </p>
            <div className="mt-3 text-sm text-[#889] space-y-1">
              <p>📞 <a href="tel:+27823413333" className="hover:text-[#c9a84c] transition-colors">082 341 3333</a></p>
              <p>📞 <a href="tel:+27158801865" className="hover:text-[#c9a84c] transition-colors">015 880 1865</a></p>
              <p>✉️ <a href="mailto:cali.mathabatha@gmail.com" className="hover:text-[#c9a84c] transition-colors">cali.mathabatha@gmail.com</a></p>
              <p>📍 39 Voortrekker Street, Polokwane</p>
            </div>
          </div>

          {/* Quick Links - Left Column */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 text-center md:text-left">Quick Links</h4>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              {quickLinksLeft.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[#bbb] hover:text-[#c9a84c] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links - Right Column */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 text-center md:text-left">&nbsp;</h4>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              {quickLinksRight.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[#bbb] hover:text-[#c9a84c] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Links Column */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 text-center md:text-left">Legal Links</h4>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              {legalNav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#bbb] hover:text-[#c9a84c] transition-colors flex items-center gap-1"
                >
                  {item.name}
                  <svg className="w-3 h-3 text-[#888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </nav>
          </div>

          {/* Hours & Credit Column */}
          <div className="md:col-span-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 text-center md:text-left">Office Hours</h4>
            <div className="text-sm text-[#889] space-y-1 text-center md:text-left">
              <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p>Sat: By appointment</p>
              <p>Sun: Closed</p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-[#1a2a3a] text-center">
              <p className="text-xs text-[#667]">
                Designed by{' '}
                <a href="https://inkspiredigitaldesigns.co.za" target="_blank" rel="noopener noreferrer" className="text-[#c9a84c] hover:underline font-medium">
                  Inkspire Digital Designs
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1a2a3a] text-center text-sm text-[#667]">
          &copy; 2026 G20 Chambers. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
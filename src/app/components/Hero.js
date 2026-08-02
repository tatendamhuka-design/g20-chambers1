'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <Image
            src="/images/hero-bg.jpg"
            alt="G20 Chambers - Justice and Advocacy"
            fill
            className="object-cover object-center"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628]">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
            <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-[#c9a84c]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/70 via-[#0a1628]/50 to-transparent md:from-[#0a1628]/70 md:via-[#0a1628]/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center md:text-left max-w-2xl lg:max-w-3xl mx-auto md:mx-0">
          <p className="text-xs md:text-base font-semibold tracking-[0.25em] uppercase text-[#c9a84c] mb-3 md:mb-4 animate-fadeIn">
            G20 Chambers
          </p>

          <h1 className="font-extrabold text-white leading-tight mb-2 md:mb-4">
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl block">
              The home of
            </span>
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#c9a84c] italic block">
              premier advocates
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-[#ccd] italic mb-4 md:mb-6 font-light">
            A group of Advocates
          </p>

          <p className="text-sm md:text-lg font-light max-w-xl text-gray-300 leading-relaxed mb-6 md:mb-8 mx-auto md:mx-0">
            G20 Chambers is a premier advocates' chambers dedicated to providing
            top-notch advocate services to clients across Limpopo and beyond.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-block bg-[#c9a84c] text-[#0a1628] px-6 md:px-8 py-2.5 md:py-3.5 font-bold rounded-lg hover:bg-[#e0c66e] transition-all hover:scale-105 uppercase tracking-wide text-xs md:text-sm"
            >
              Contact Our Team
            </Link>
            <Link
              href="/barristers"
              className="inline-block bg-transparent text-white px-6 md:px-8 py-2.5 md:py-3.5 font-semibold rounded-lg border-2 border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all hover:scale-105 uppercase tracking-wide text-xs md:text-sm"
            >
              Meet Our Advocates
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
    </section>
  )
}
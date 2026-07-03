'use client'

import { MapPin } from 'lucide-react'
import Link from 'next/link'

const locations = [
  'Polokwane',
  'Tzaneen', 
  'Mokopane',
  'Musina',
  'Thohoyandou',
  'Lebowakgomo',
  'Louis Trichardt',
  'Bela-Bela',
  'Giyani',
  'Makhado',
  'Modimolle',
  'Lephalale',
]

export default function LocationsWeServe() {
  const allLocations = [...locations, ...locations, ...locations]

  return (
    <section className="relative py-16 md:py-20 overflow-hidden border-y-4 border-[#c9a84c]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/locations-bg.jpg)',
          backgroundSize: '100% auto',  // ← FIXED: Shows full width
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-[#0a1628]/60"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a1628]/40 via-transparent to-[#0a1628]/40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-[#c9a84c]/20 text-[#c9a84c] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-[#c9a84c]/30">
            Where We Serve
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Serving Communities Across <span className="text-[#c9a84c]">Limpopo</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base mt-2 max-w-2xl mx-auto">
            Providing expert legal representation across Limpopo and beyond
          </p>
        </div>

        {/* Continuous Scrolling Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#0a1628]/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#0a1628]/80 to-transparent z-10"></div>
          
          <div className="flex animate-scroll-left whitespace-nowrap">
            {allLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-3 mx-6 py-4">
                <MapPin className="w-5 h-5 text-[#c9a84c] flex-shrink-0" />
                <span className="text-white text-lg md:text-xl font-semibold tracking-wide">
                  {location}
                </span>
                <span className="text-[#c9a84c]/40 text-2xl ml-2">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0a1628] px-8 py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all hover:scale-105"
          >
            <MapPin className="w-5 h-5" />
            Visit Our Chambers in Polokwane
          </Link>
          <p className="text-gray-400 text-sm mt-3">
            📍 39 Voortrekker Street, Polokwane • Across from Limpopo High Court
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
    </section>
  )
}
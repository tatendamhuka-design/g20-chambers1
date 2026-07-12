'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Scale, Users, Award, ChevronRight, Calendar, MapPin, Building } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#c9a84c]/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-[#c9a84c]/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content - LEFT */}
          <div className="order-1">
            <span className="inline-block bg-[#0a1628] text-[#c9a84c] text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              About G20 Chambers
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a1628] leading-tight mb-4">
              The home of <span className="text-[#c9a84c]">premier barristers</span> in Limpopo
            </h2>
            
            <div className="bg-[#faf8f5] p-5 rounded-xl border-l-4 border-[#c9a84c] mb-6">
              <p className="font-serif text-base md:text-lg font-medium text-[#0a1628] leading-relaxed">
                "G20 Chambers is a group of barristers who are members of the Limpopo Bar, a constituent member of the General Council of the Bar of South Africa (GCB)."
              </p>
            </div>
            
            <div className="space-y-4 text-[#444] text-sm md:text-base leading-relaxed">
              <p>
                <span className="font-semibold text-[#0a1628]">G20 Chambers</span> was established in <span className="font-semibold text-[#0a1628]">2021</span> by a group of passionate advocates: 
                <span className="text-[#0a1628] font-medium"> Adv. Malose Monene, Adv. Cali Mathabatha, Adv. Sentle Fenyane, Adv. Germain Ledwaba, and Adv. Chuene Rammutla</span>.
                They were soon joined by <span className="text-[#0a1628] font-medium">Adv. Isaac Maila, Adv. Eunice Thete, Adv. Lindiwe Vilakazi, and Adv. Sydney Mgimeti</span>.
              </p>
              
              <p>
                The group now has <span className="font-semibold text-[#0a1628]">14 barristers</span> and is situated at 
                <span className="text-[#0a1628] font-semibold"> 39 Voortrekker Street, Polokwane</span> at the STATSA Campus, 
                directly across from the Limpopo High Court Building.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span className="text-sm text-[#555]">14+ Barristers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span className="text-sm text-[#555]">Est. 2021</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span className="text-sm text-[#555]">Limpopo Bar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span className="text-sm text-[#555]">GCB Member</span>
              </div>
            </div>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-[#c9a84c] font-medium hover:gap-3 transition-all group mt-4"
            >
              Learn more about us
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image Column - RIGHT */}
          <div className="relative order-2">
            <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              {!imgError ? (
                <>
                  <Image
                    src="/images/about-image.jpg"
                    alt="G20 Chambers - The home of premier barristers in Limpopo"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    onError={() => setImgError(true)}
                  />
                  
                  {/* Gold Border Overlay */}
                  <div className="absolute inset-0 border-2 border-[#c9a84c]/20 rounded-2xl pointer-events-none"></div>
                  
                  {/* EST. 2021 BADGE - Top Right */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-[#c9a84c] text-[#0a1628] px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-2xl border-2 border-white/30 flex items-center gap-2">
                      <Calendar className="w-4 h-4 md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm font-semibold tracking-wide">Est. 2021</span>
                    </div>
                  </div>

                  {/* Bottom Badge - "A group of Advocates" */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-[#0a1628]/80 backdrop-blur-sm text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full border border-[#c9a84c]/30 flex items-center gap-2 whitespace-nowrap">
                    <Scale className="w-4 h-4 text-[#c9a84c]" />
                    <span className="text-xs md:text-sm font-medium tracking-wide">A group of Advocates</span>
                  </div>

                  {/* Top Left - G20 Chambers Tag */}
                  <div className="absolute top-4 left-4 z-20 bg-[#0a1628]/70 backdrop-blur-sm text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-[#c9a84c]/20">
                    <span className="text-xs md:text-sm font-semibold tracking-wide">
                      G20 <span className="text-[#c9a84c]">Chambers</span>
                    </span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Scale className="w-16 h-16 text-[#c9a84c] mx-auto mb-4" />
                    <p className="text-xl font-bold text-[#c9a84c]">G20 Chambers</p>
                    <p className="text-sm text-gray-400">The home of premier barristers</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
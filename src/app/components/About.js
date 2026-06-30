'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Scale, Users, Award, ChevronRight } from 'lucide-react'

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#c9a84c]/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-[#c9a84c]/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Column - LEFT */}
          <div className="order-1">
            <span className="inline-block bg-[#0a1628] text-[#c9a84c] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
              About G20 Chambers
            </span>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] leading-tight mb-4">
              Advocates with <span className="text-[#c9a84c]">integrity</span>,
              driven by <span className="text-[#c9a84c]">excellence</span>
            </h2>
            
            <div className="bg-[#faf8f5] p-5 rounded-xl border-l-4 border-[#c9a84c] mb-6">
              <p className="text-lg font-semibold text-[#0a1628] leading-relaxed">
                "Our mission is to provide top-notch advocate services to clients in Limpopo."
              </p>
            </div>
            
            <p className="text-[#444] text-base md:text-lg leading-relaxed mb-4">
              G20 Chambers brings together a collective of passionate advocates
              who are committed to fighting for justice. As <strong className="text-[#0a1628]">"A group of Advocates"</strong>,
              we pride ourselves on delivering strategic, robust, and
              compassionate legal representation.
            </p>
            
            <p className="text-[#444] text-base md:text-lg leading-relaxed mb-6">
              Led by <strong className="text-[#0a1628]">Barrister Mathabatha</strong>, our chambers has deep roots in Limpopo 
              and a reputation for excellence. Our barristers are regularly instructed 
              in complex, high-profile cases across all areas of law.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span className="text-sm font-medium text-[#555]">15+ Barristers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span className="text-sm font-medium text-[#555]">20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span className="text-sm font-medium text-[#555]">Limpopo-Based</span>
              </div>
            </div>
            
            <a 
              href="/about" 
              className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:gap-3 transition-all group"
            >
              Learn more about us
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Image Column - RIGHT */}
          <div className="relative order-2">
            <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl">
              {!imgError ? (
                <>
                  <Image
                    src="/images/about-image.jpg"
                    alt="G20 Chambers - Advocates with integrity"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    onError={() => setImgError(true)}
                  />
                  <div className="absolute inset-0 border-2 border-[#c9a84c]/20 rounded-2xl pointer-events-none"></div>
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Scale className="w-16 h-16 text-[#c9a84c] mx-auto mb-4" />
                    <p className="text-xl font-bold text-[#c9a84c]">G20 Chambers</p>
                    <p className="text-sm text-gray-400">Advocates with integrity</p>
                  </div>
                </div>
              )}
              
              {/* Est. 2005 Badge - ALWAYS VISIBLE */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-[#c9a84c] text-[#0a1628] px-4 py-2 md:px-5 md:py-2.5 rounded-xl shadow-lg text-xs md:text-sm font-bold flex items-center gap-2 z-10">
                <Award className="w-3 h-3 md:w-4 md:h-4" />
                Est. 2005
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

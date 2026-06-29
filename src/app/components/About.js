'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block bg-[#2C4355] text-[#c9a84c] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              About G20 Chambers
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C4355] leading-tight mb-4 tracking-tight">
              Advocates with <span className="text-[#c9a84c]">integrity</span>,<br />
              driven by <span className="text-[#c9a84c]">excellence</span>
            </h2>
            <div className="text-lg font-semibold text-[#2C4355] border-l-4 border-[#c9a84c] pl-5 my-4 leading-relaxed text-left md:text-left">
              Our mission is to provide top-notch advocate services to clients in Limpopo.
            </div>
            <p className="text-[#444] text-lg leading-relaxed mb-4">
              G20 Chambers brings together a collective of passionate advocates
              who are committed to fighting for justice. As <strong>"A group of Advocates"</strong>,
              we pride ourselves on delivering strategic, robust, and
              compassionate legal representation.
            </p>
            <p className="text-[#444] text-lg leading-relaxed mb-4">
              Led by <strong>Barrister Mathabatha</strong>, our chambers has deep roots in Limpopo 
              and a reputation for excellence. Our barristers are regularly instructed 
              in complex, high-profile cases across all areas of law.
            </p>
            <a href="/about" className="text-[#c9a84c] font-semibold hover:underline inline-block mt-2">
              Learn more about us →
            </a>
          </div>

          <div className="relative flex justify-center md:justify-end">
            {!imgError ? (
              <div className="relative h-72 md:h-96 w-full max-w-md rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-image.jpg"
                  alt="G20 Chambers - Advocates with integrity"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  onError={() => setImgError(true)}
                />
                <div className="absolute inset-0 border-2 border-[#c9a84c]/30 rounded-xl pointer-events-none"></div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#c9a84c]/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-[#c9a84c]/10 rounded-full blur-2xl"></div>
              </div>
            ) : (
              <div className="relative h-72 md:h-96 w-full max-w-md rounded-xl overflow-hidden bg-gradient-to-br from-[#2C4355] to-[#1a2a3a] flex items-center justify-center border-2 border-dashed border-[#c9a84c]">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">⚖️</div>
                  <p className="text-lg font-semibold text-[#c9a84c]">G20 Chambers</p>
                  <p className="text-sm text-gray-400">Advocates with integrity</p>
                </div>
              </div>
            )}
            
            <div className="absolute -bottom-4 -right-4 bg-[#c9a84c] text-[#2C4355] px-4 py-2 rounded-lg shadow-lg text-sm font-bold">
              Est. 2005
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
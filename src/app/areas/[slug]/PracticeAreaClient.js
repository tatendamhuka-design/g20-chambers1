'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  Scale, Home, FileText, Landmark, Globe, Briefcase, Building, Users,
  Award, Calendar, Star, ArrowLeft, ChevronDown
} from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

// Map icon names to components
const iconMap = {
  'Scale': Scale,
  'Home': Home,
  'FileText': FileText,
  'Landmark': Landmark,
  'Globe': Globe,
  'Briefcase': Briefcase,
  'Building': Building,
  'Users': Users,
}

export default function PracticeAreaClient({ areaData, barristersInArea, slug }) {
  const [imageError, setImageError] = useState(false)
  const Icon = iconMap[areaData.icon] || Scale

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: `${areaData.title} | G20 Chambers`,
            description: areaData.description,
            url: `https://g20chambers.co.za/areas/${slug}`,
            provider: {
              '@type': 'Organization',
              name: 'G20 Chambers',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '39 Voortrekker Street',
                addressLocality: 'Polokwane',
                addressRegion: 'Limpopo',
                postalCode: '0699',
                addressCountry: 'ZA',
              },
            },
            telephone: '+27823413333',
            email: 'cali.mathabatha@gmail.com',
            image: areaData.ogImage,
          }),
        }}
      />

      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 md:py-20 overflow-hidden">
        {/* Hero Background Image */}
        {areaData.heroImage && !imageError && (
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src={areaData.heroImage}
              alt={areaData.title}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          </div>
        )}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon */}
            <div className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl ${areaData.iconBg} border-2 border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-12 h-12 md:w-16 md:h-16" />
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <Link href="/areas" className="inline-flex items-center gap-1 text-gray-400 hover:text-[#c9a84c] transition-colors text-sm mb-2">
                <ArrowLeft className="w-4 h-4" /> Back to all areas
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                {areaData.title}
              </h1>
              <p className="text-gray-300 text-lg mt-2 max-w-2xl">
                {areaData.description}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full Description */}
          <div className="prose prose-lg max-w-none">
            <div className="text-[#444] leading-relaxed whitespace-pre-line">
              {areaData.fullDescription}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-[#faf8f5] rounded-xl border border-[#e8e0d4]">
            <div className="text-center">
              <p className="text-2xl font-extrabold text-[#c9a84c]">{areaData.cases}</p>
              <p className="text-xs text-[#888]">Cases Handled</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-[#c9a84c]">{barristersInArea.length}</p>
              <p className="text-xs text-[#888]">Specialist Barristers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-[#c9a84c]">100%</p>
              <p className="text-xs text-[#888]">Client Commitment</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-[#c9a84c]">Limpopo</p>
              <p className="text-xs text-[#888]">Proudly Based</p>
            </div>
          </div>

          {/* Barristers Specializing in This Area - DYNAMIC */}
          {barristersInArea.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-8 bg-[#c9a84c] rounded-full"></span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">
                  Barristers Specializing in {areaData.title}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {barristersInArea.map((barrister, index) => {
                  const initials = barrister.name?.split(' ').map(n => n[0]).join('') || '?'
                  const practiceAreas = Array.isArray(barrister.practiceAreas) 
                    ? barrister.practiceAreas 
                    : JSON.parse(barrister.practiceAreas || '[]')
                  return (
                    <Link
                      key={index}
                      href={`/barristers/${barrister.slug}`}
                      className="group bg-white rounded-xl p-6 border border-[#e8e0d4] hover:shadow-lg transition-all hover:-translate-y-1 text-center"
                    >
                      <div className="w-20 h-20 mx-auto rounded-full bg-[#0a1628] flex items-center justify-center text-white font-bold text-2xl mb-3 group-hover:bg-[#c9a84c] transition-colors overflow-hidden">
                        {barrister.profileImage ? (
                          <img src={barrister.profileImage} alt={barrister.name} className="w-full h-full object-cover" />
                        ) : (
                          initials
                        )}
                      </div>
                      <h3 className="font-bold text-[#0a1628] group-hover:text-[#c9a84c] transition-colors">
                        {barrister.name}
                      </h3>
                      <p className="text-[#888] text-sm">{barrister.title}</p>
                      <p className="text-xs text-[#555] mt-1">
                        {practiceAreas.slice(0, 2).join(', ')}
                        {practiceAreas.length > 2 && ` +${practiceAreas.length - 2}`}
                      </p>
                      <span className="inline-block mt-3 text-[#c9a84c] text-sm font-semibold group-hover:underline">
                        View Profile →
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Notable Cases */}
          {areaData.notableCases.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-8 bg-[#c9a84c] rounded-full"></span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">Notable Cases</h2>
              </div>
              <div className="space-y-4">
                {areaData.notableCases.map((caseItem, index) => (
                  <div key={index} className="bg-[#faf8f5] rounded-xl p-5 border border-[#e8e0d4] hover:border-[#c9a84c] transition-colors">
                    <div className="flex items-start gap-4">
                      <Award className="w-6 h-6 text-[#c9a84c] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-[#0a1628] text-lg">
                          {caseItem.title}
                        </h4>
                        <p className="text-[#555] mt-1">{caseItem.description}</p>
                        <span className="inline-block mt-2 text-xs font-semibold text-[#c9a84c] bg-[#c9a84c]/10 px-3 py-1 rounded-full">
                          {caseItem.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials */}
          {areaData.testimonials.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-8 bg-[#c9a84c] rounded-full"></span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">Client Reviews</h2>
              </div>
              <div className="space-y-4">
                {areaData.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 border border-[#e8e0d4] shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex text-[#c9a84c]">
                        {'★'.repeat(testimonial.rating)}
                        {'☆'.repeat(5 - testimonial.rating)}
                      </div>
                      <span className="text-xs text-[#888]">{testimonial.date}</span>
                    </div>
                    <p className="text-[#555] italic">"{testimonial.comment}"</p>
                    <p className="text-sm font-semibold text-[#0a1628] mt-2">— {testimonial.client}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {areaData.faq.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-8 bg-[#c9a84c] rounded-full"></span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-3">
                {areaData.faq.map((item, index) => (
                  <details key={index} className="group bg-white rounded-xl border border-[#e8e0d4] overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#faf8f5] transition-colors">
                      <span className="font-semibold text-[#0a1628]">{item.question}</span>
                      <ChevronDown className="w-5 h-5 text-[#888] group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 pt-2 text-[#555] border-t border-[#e8e0d4]">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] rounded-2xl text-white text-center">
            <h3 className="text-2xl font-extrabold mb-3">Need legal advice in {areaData.title}?</h3>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Contact G20 Chambers today for expert legal representation from our specialist barristers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#c9a84c] text-[#0a1628] px-8 py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all">
                Contact Us
              </Link>
              <a href="tel:+27823413333" className="bg-transparent text-white px-8 py-3 font-semibold rounded-xl border-2 border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all">
                Call: 082 341 3333
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
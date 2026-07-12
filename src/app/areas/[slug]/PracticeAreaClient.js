'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  Scale, Home, FileText, Landmark, Globe, Briefcase, Building, Users,
  Award, Calendar, Star, ArrowLeft, ChevronDown, Phone, Mail, MessageCircle
} from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import PageHero from '@/app/components/PageHero'

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

  // Check if barristers are available
  const hasBarristers = barristersInArea && barristersInArea.length > 0

  // Function to format inline links (Limpopo Bar, GCBSA, LPC, DOJ)
  const formatInlineLinks = (text) => {
    if (!text) return text
    
    // Define legal links with their URLs
    const legalLinks = [
      { 
        name: 'Limpopo Bar', 
        url: 'https://limpopobar.co.za',
        pattern: /\bLimpopo Bar\b/g
      },
      { 
        name: 'GCBSA', 
        url: 'https://gcbsa.co.za',
        pattern: /\bGCBSA\b/g
      },
      { 
        name: 'General Council of the Bar of South Africa', 
        url: 'https://gcbsa.co.za',
        pattern: /\bGeneral Council of the Bar of South Africa\b/g
      },
      { 
        name: 'Legal Practice Council', 
        url: 'https://lpc.org.za',
        pattern: /\bLegal Practice Council\b/g
      },
      { 
        name: 'LPC', 
        url: 'https://lpc.org.za',
        pattern: /\bLPC\b/g
      },
      { 
        name: 'Department of Justice and Constitutional Development', 
        url: 'https://justice.gov.za',
        pattern: /\bDepartment of Justice and Constitutional Development\b/g
      },
      { 
        name: 'DOJ', 
        url: 'https://justice.gov.za',
        pattern: /\bDOJ\b/g
      },
    ]
    
    // Replace each link with a highlighted Link component
    let result = text
    legalLinks.forEach(link => {
      result = result.replace(link.pattern, (match) => {
        return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-[#c9a84c] font-semibold hover:underline">${match}</a>`
      })
    })
    
    // Return as HTML string
    return <span dangerouslySetInnerHTML={{ __html: result }} />
  }

  // Function to format text with paragraphs
  const formatContent = (text) => {
    if (!text) return null
    
    // Split by double newlines to create paragraphs
    const paragraphs = text.split('\n\n').filter(p => p.trim())
    
    return paragraphs.map((paragraph, index) => {
      // Check if paragraph contains bullet points
      if (paragraph.includes('•')) {
        const lines = paragraph.split('\n').filter(line => line.trim())
        return (
          <div key={index} className="mb-4">
            {lines.map((line, lineIndex) => {
              if (line.trim().startsWith('•')) {
                return (
                  <div key={lineIndex} className="flex items-start gap-2 text-[#444] leading-relaxed mb-1.5">
                    <span className="text-[#c9a84c] font-bold">•</span>
                    <span>{formatInlineLinks(line.replace('•', '').trim())}</span>
                  </div>
                )
              } else if (line.trim() && !line.trim().startsWith('•')) {
                return (
                  <p key={lineIndex} className="text-[#444] leading-relaxed mb-3">
                    {formatInlineLinks(line.trim())}
                  </p>
                )
              }
              return null
            })}
          </div>
        )
      }
      
      // Regular paragraph with inline links
      return (
        <p key={index} className="text-[#444] leading-relaxed mb-4">
          {formatInlineLinks(paragraph.trim())}
        </p>
      )
    })
  }

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* ===== SCHEMA MARKUP ===== */}
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
            priceRange: '$$',
            openingHours: 'Mo-Fr 08:00-17:00',
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <PageHero
        title={areaData.title}
        subtitle={areaData.description}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Areas of Law', href: '/areas' },
          { label: areaData.title },
        ]}
        showBackButton={true}
        backLink="/areas"
        backLabel="Back to all areas"
      />

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ===== 500+ WORD CONTENT WITH PROPER PARAGRAPHS ===== */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-4">
              {formatContent(areaData.fullDescription)}
            </div>
          </div>

          {/* ===== STATS BAR ===== */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-[#faf8f5] rounded-xl border border-[#e8e0d4]">
            <div className="text-center">
              <p className="text-2xl font-extrabold text-[#c9a84c]">{areaData.cases}+</p>
              <p className="text-xs text-[#888]">Cases Handled</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-[#c9a84c]">{barristersInArea.length}</p>
              <p className="text-xs text-[#888]">Specialist Barristers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-[#c9a84c]">{areaData.experience || '10'}+</p>
              <p className="text-xs text-[#888]">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-[#c9a84c]">Limpopo</p>
              <p className="text-xs text-[#888]">Proudly Based</p>
            </div>
          </div>

          {/* ===== BARRISTERS IN THIS AREA ===== */}
          {hasBarristers && (
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

          {/* ===== NOTABLE CASES ===== */}
          {areaData.notableCases && areaData.notableCases.length > 0 && (
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

          {/* ===== TESTIMONIALS ===== */}
          {areaData.testimonials && areaData.testimonials.length > 0 && (
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

          {/* ===== FAQ SECTION ===== */}
          {areaData.faq && areaData.faq.length > 0 && (
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
                      {formatInlineLinks(item.answer)}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* ===== CTA ===== */}
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
              <a href="https://wa.me/27823413333" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-3 font-semibold rounded-xl hover:bg-[#1da851] transition-all flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
'use client'

import { useState } from 'react'
import { 
  Scale, Home, FileText, Landmark, Globe, Briefcase, Building, Users, 
  ChevronRight, Award, Calendar, Star 
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const practiceAreas = [
  {
    slug: 'criminal-law',
    icon: Scale,
    name: 'Criminal Law',
    description: 'Expert defence and prosecution representation in all criminal matters, from bail applications to complex trials and appeals.',
    stats: '50+ Cases Won • 15+ Years Experience',
    cases: '50+',
    barristers: 3,
    color: 'from-red-500/10 to-red-500/5',
    borderColor: 'border-red-200',
    iconBg: 'bg-red-50 text-red-600',
    image: '/images/areas/criminal-law-thumb.jpg',
  },
  {
    slug: 'family-law',
    icon: Home,
    name: 'Family Law',
    description: 'Compassionate and strategic representation in divorce, child custody, maintenance, domestic violence, and family disputes.',
    stats: '100+ Families Helped • 12+ Years Experience',
    cases: '100+',
    barristers: 2,
    color: 'from-pink-500/10 to-pink-500/5',
    borderColor: 'border-pink-200',
    iconBg: 'bg-pink-50 text-pink-600',
    image: '/images/areas/family-law-thumb.jpg',
  },
  {
    slug: 'human-rights',
    icon: FileText,
    name: 'Human Rights',
    description: 'Defending fundamental rights and challenging injustice through constitutional litigation and human rights advocacy.',
    stats: '30+ Landmark Cases • 10+ Years Experience',
    cases: '30+',
    barristers: 2,
    color: 'from-blue-500/10 to-blue-500/5',
    borderColor: 'border-blue-200',
    iconBg: 'bg-blue-50 text-blue-600',
    image: '/images/areas/human-rights-thumb.jpg',
  },
  {
    slug: 'civil-litigation',
    icon: Landmark,
    name: 'Civil Litigation',
    description: 'Commercial disputes, personal injury claims, property disputes, and civil litigation in the High Court and Magistrate\'s Court.',
    stats: '200+ Cases Resolved • 15+ Years Experience',
    cases: '200+',
    barristers: 3,
    color: 'from-indigo-500/10 to-indigo-500/5',
    borderColor: 'border-indigo-200',
    iconBg: 'bg-indigo-50 text-indigo-600',
    image: '/images/areas/civil-litigation-thumb.jpg',
  },
  {
    slug: 'immigration-law',
    icon: Globe,
    name: 'Immigration Law',
    description: 'Expert guidance on asylum applications, deportation appeals, visa applications, and citizenship matters.',
    stats: '150+ Clients Helped • 8+ Years Experience',
    cases: '150+',
    barristers: 1,
    color: 'from-cyan-500/10 to-cyan-500/5',
    borderColor: 'border-cyan-200',
    iconBg: 'bg-cyan-50 text-cyan-600',
    image: '/images/areas/immigration-law-thumb.jpg',
  },
  {
    slug: 'employment-law',
    icon: Briefcase,
    name: 'Employment Law',
    description: 'Workplace disputes, unfair dismissal claims, discrimination matters, and employment contract advice.',
    stats: '80+ Cases Won • 10+ Years Experience',
    cases: '80+',
    barristers: 1,
    color: 'from-amber-500/10 to-amber-500/5',
    borderColor: 'border-amber-200',
    iconBg: 'bg-amber-50 text-amber-600',
    image: '/images/areas/employment-law-thumb.jpg',
  },
  {
    slug: 'public-administrative-law',
    icon: Building,
    name: 'Public & Administrative Law',
    description: 'Judicial review, regulatory matters, public interest cases, and administrative law challenges.',
    stats: '40+ Judicial Reviews • 8+ Years Experience',
    cases: '40+',
    barristers: 2,
    color: 'from-purple-500/10 to-purple-500/5',
    borderColor: 'border-purple-200',
    iconBg: 'bg-purple-50 text-purple-600',
    image: '/images/areas/public-administrative-law-thumb.jpg',
  },
  {
    slug: 'property-land-law',
    icon: Users,
    name: 'Property & Land Law',
    description: 'Property disputes, land claims, conveyancing advice, and property litigation.',
    stats: '60+ Property Cases • 10+ Years Experience',
    cases: '60+',
    barristers: 1,
    color: 'from-emerald-500/10 to-emerald-500/5',
    borderColor: 'border-emerald-200',
    iconBg: 'bg-emerald-50 text-emerald-600',
    image: '/images/areas/property-land-law-thumb.jpg',
  },
]

// Image component with error handling
function AreaImage({ src, alt, className, iconBg, icon: Icon }) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center`}>
        <Icon className="w-8 h-8" />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  )
}

export default function AreasPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 text-[#c9a84c] px-4 py-1.5 rounded-full text-sm font-medium border border-[#c9a84c]/20 mb-6">
              <Award className="w-4 h-4" />
              <span>8 Practice Areas</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Areas of <span className="text-[#c9a84c]">Law</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              G20 Chambers provides expert legal services across a wide range of practice areas. Our barristers are specialists in their fields, committed to fighting for justice.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>8 Practice Areas</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>14 Barristers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>20+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* Practice Areas List - Horizontal Cards with Images */}
      <section className="py-12 md:py-16 bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Link
                  key={index}
                  href={`/areas/${area.slug}`}
                  className="block group"
                >
                  <div className={`bg-white rounded-2xl p-6 md:p-8 border-l-4 ${area.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                      {/* Image with Placeholder */}
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl flex-shrink-0 overflow-hidden bg-[#0a1628] flex items-center justify-center">
                        <AreaImage
                          src={area.image}
                          alt={area.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          iconBg={area.iconBg}
                          icon={Icon}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="text-xl md:text-2xl font-bold text-[#0a1628] group-hover:text-[#c9a84c] transition-colors">
                            {area.name}
                          </h3>
                          <span className="text-xs font-medium text-[#888] bg-[#faf8f5] px-2.5 py-0.5 rounded-full border border-[#e8e0d4]">
                            {area.barristers} Barristers
                          </span>
                        </div>
                        <p className="text-[#555] text-sm md:text-base leading-relaxed max-w-2xl">
                          {area.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                          <span className="flex items-center gap-1.5 text-[#888]">
                            <Award className="w-4 h-4 text-[#c9a84c]" />
                            {area.cases} Cases
                          </span>
                          <span className="flex items-center gap-1.5 text-[#888]">
                            <Star className="w-4 h-4 text-[#c9a84c]" />
                            {area.stats}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold group-hover:gap-2 transition-all ml-auto">
                            Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-[#e8e0d4] shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#0a1628] mb-3">Need legal advice?</h3>
            <p className="text-[#555] mb-6 max-w-lg mx-auto">
              Contact G20 Chambers for expert legal representation in any of our practice areas.
            </p>
            <Link href="/contact" className="inline-block bg-[#c9a84c] text-[#0a1628] px-8 py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
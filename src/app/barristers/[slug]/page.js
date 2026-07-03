import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client'
import {
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  BookOpen,
  Award,
  MapPin,
  FileDown,
  ChevronRight
} from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Breadcrumb from '@/components/Breadcrumb' // Added import

const prisma = new PrismaClient()

// Generate static paths
export async function generateStaticParams() {
  const barristers = await prisma.barrister.findMany({
    select: { slug: true }
  })
  return barristers.map((barrister) => ({
    slug: barrister.slug,
  }))
}

// Get barrister by slug
async function getBarristerBySlug(slug) {
  const barrister = await prisma.barrister.findUnique({
    where: { slug }
  })
  
  if (!barrister) return null
  
  return {
    ...barrister,
    practiceAreas: JSON.parse(barrister.practiceAreas || '[]'),
    socialLinks: JSON.parse(barrister.socialLinks || '{}'),
    notableCases: JSON.parse(barrister.notableCases || '[]'),
    reviews: JSON.parse(barrister.reviews || '[]')
  }
}

// Get related barristers
async function getRelatedBarristers(slug, limit = 3) {
  const current = await getBarristerBySlug(slug)
  if (!current) return []
  
  const barristers = await prisma.barrister.findMany({
    where: {
      NOT: { slug },
      practiceAreas: {
        contains: current.practiceAreas[0] || ''
      }
    },
    take: limit
  })
  
  return barristers.map(b => ({
    ...b,
    practiceAreas: JSON.parse(b.practiceAreas || '[]')
  }))
}

export async function generateMetadata({ params }) {
  const barrister = await getBarristerBySlug(params.slug)
  
  if (!barrister) {
    return {
      title: 'Barrister Not Found',
    }
  }

  return {
    title: `${barrister.name} | Barrister at G20 Chambers`,
    description: `${barrister.name} is a ${barrister.title} at G20 Chambers in Limpopo. Specializes in ${barrister.practiceAreas.join(', ')}. Expert legal representation in ${barrister.practiceAreas[0] || 'law'} and more.`,
    keywords: `${barrister.name}, barrister Limpopo, advocate Polokwane, ${barrister.practiceAreas.join(', ')}, legal representation South Africa`,
    openGraph: {
      title: `${barrister.name} | Barrister at G20 Chambers`,
      description: `${barrister.name} is a ${barrister.title} at G20 Chambers in Limpopo. Specializes in ${barrister.practiceAreas.join(', ')}.`,
      url: `https://g20chambers.co.za/barristers/${barrister.slug}`,
      type: 'profile',
    },
  }
}

// Premium Star Rating
function PremiumStarRating({ rating, reviewCount }) {
  const fullStars = Math.floor(rating || 0)
  const totalStars = 5
  
  return (
    <div className="flex items-center gap-3">
      <div className="flex">
        {[...Array(totalStars)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < fullStars ? 'text-[#c9a84c] fill-current' : 'text-[#d1d5db] fill-current'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
      {reviewCount !== undefined && reviewCount > 0 && (
        <span className="text-sm font-medium text-[#888]">({reviewCount} reviews)</span>
      )}
    </div>
  )
}

// Premium Availability Badge
function PremiumAvailabilityBadge({ status }) {
  const config = {
    accepting: {
      label: '✅ Accepting New Cases',
      className: 'bg-green-50 text-green-700 border-green-200',
    },
    limited: {
      label: '⚠️ Limited Availability',
      className: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    },
    full: {
      label: '❌ Not Accepting New Cases',
      className: 'bg-red-50 text-red-700 border-red-200',
    },
  }

  const { label, className } = config[status] || config.full

  return (
    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border ${className}`}>
      {label}
    </span>
  )
}

export default async function BarristerProfile({ params }) {
  const barrister = await getBarristerBySlug(params.slug)

  if (!barrister) {
    notFound()
  }

  const relatedBarristers = await getRelatedBarristers(params.slug)

  // Get initials for fallback
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Breadcrumb */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb items={[
          { label: 'Barristers', href: '/barristers' },
          { label: barrister.name, href: `/barristers/${barrister.slug}` },
        ]} />
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: barrister.name,
            jobTitle: barrister.title,
            worksFor: {
              '@type': 'Organization',
              name: 'G20 Chambers'
            },
            description: barrister.bio,
            email: barrister.email,
            telephone: barrister.phone,
            url: `https://g20chambers.co.za/barristers/${barrister.slug}`,
            alumniOf: barrister.education,
            knowsAbout: barrister.practiceAreas,
            aggregateRating: barrister.reviews?.length > 0 ? {
              '@type': 'AggregateRating',
              ratingValue: barrister.rating,
              reviewCount: barrister.reviewCount
            } : undefined,
          }),
        }}
      />

      {/* ===== PREMIUM HERO SECTION ===== */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/barristers"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all barristers
          </Link>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Avatar with Image */}
            <div className="relative flex-shrink-0">
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#c9a84c] shadow-2xl shadow-[#c9a84c]/30 bg-[#1a2a3a]">
                {barrister.profileImage ? (
                  <img 
                    src={barrister.profileImage} 
                    alt={barrister.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white bg-[#0a1628]">
                    {getInitials(barrister.name)}
                  </div>
                )}
              </div>
              {/* Availability Badge Below Avatar */}
              <div className="flex justify-center mt-3">
                <PremiumAvailabilityBadge status={barrister.availability} />
              </div>
            </div>

            {/* Name and Details */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-1">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                  {barrister.name}
                </h1>
                {barrister.title === 'Head of Chambers' && (
                  <span className="bg-[#c9a84c] text-[#0a1628] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    Head of Chambers
                  </span>
                )}
              </div>
              <p className="text-lg text-[#c9a84c] font-semibold">{barrister.title}</p>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-3">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Calendar className="w-4 h-4 text-[#c9a84c]" />
                  Year of Call: {barrister.yearOfCall}
                </div>
                <div className="flex items-center gap-2">
                  <PremiumStarRating rating={barrister.rating} reviewCount={barrister.reviewCount} />
                </div>
              </div>

              {/* Social Links */}
              {(barrister.socialLinks?.linkedin || barrister.socialLinks?.twitter) && (
                <div className="flex gap-2 mt-3 justify-center md:justify-start">
                  {barrister.socialLinks?.linkedin && (
                    <a
                      href={barrister.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-white/10 hover:bg-[#c9a84c] text-white hover:text-[#0a1628] rounded-full text-xs font-semibold transition-all duration-300 border border-white/20"
                    >
                      LinkedIn
                    </a>
                  )}
                  {barrister.socialLinks?.twitter && (
                    <a
                      href={barrister.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-white/10 hover:bg-[#c9a84c] text-white hover:text-[#0a1628] rounded-full text-xs font-semibold transition-all duration-300 border border-white/20"
                    >
                      Twitter/X
                    </a>
                  )}
                </div>
              )}

              {/* Practice Areas */}
              <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                {barrister.practiceAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gold Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 p-4 bg-[#faf8f5] rounded-xl border border-[#e8e0d4]">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#c9a84c] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#888] font-medium uppercase tracking-wider">Email</p>
                <a href={`mailto:${barrister.email}`} className="text-sm text-[#0a1628] hover:text-[#c9a84c] transition-colors font-medium break-all">
                  {barrister.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#c9a84c] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#888] font-medium uppercase tracking-wider">Phone</p>
                <a href={`tel:${barrister.phone}`} className="text-sm text-[#0a1628] hover:text-[#c9a84c] transition-colors font-medium">
                  {barrister.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#c9a84c] flex-shrink-0" />
              <div>
                <p className="text-[10px] text-[#888] font-medium uppercase tracking-wider">Chambers</p>
                <p className="text-sm text-[#0a1628] font-medium">{barrister.chambers || 'G20 Chambers, Limpopo'}</p>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="mb-10">
            <h2 className="text-2xl font-extrabold text-[#0a1628] mb-4 flex items-center gap-3">
              <span className="w-1 h-8 bg-[#c9a84c] rounded-full"></span>
              Biography
            </h2>
            <div className="text-[#444] leading-relaxed whitespace-pre-line pl-4 border-l-2 border-[#e8e0d4]">
              {barrister.bio}
            </div>
          </div>

          {/* Notable Cases */}
          {barrister.notableCases && barrister.notableCases.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#c9a84c] rounded-full"></span>
                Notable Cases
              </h2>
              <div className="space-y-3">
                {barrister.notableCases.map((caseItem, index) => (
                  <div key={index} className="group bg-[#faf8f5] rounded-xl p-4 border border-[#e8e0d4] hover:border-[#c9a84c] hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#c9a84c] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-[#0a1628]">
                          {caseItem.title}
                        </h4>
                        <p className="text-[#555] text-sm mt-1 leading-relaxed">{caseItem.description}</p>
                        <span className="inline-block mt-1.5 text-xs font-semibold text-[#c9a84c] bg-[#c9a84c]/10 px-2.5 py-0.5 rounded-full">
                          {caseItem.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client Reviews */}
          {barrister.reviews && barrister.reviews.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-extrabold text-[#0a1628] mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#c9a84c] rounded-full"></span>
                Client Reviews
              </h2>
              <div className="space-y-3">
                {barrister.reviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-xl p-4 border border-[#e8e0d4] shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-[#0a1628] text-sm">{review.client}</span>
                        <PremiumStarRating rating={review.rating} />
                      </div>
                      <span className="text-xs text-[#888]">{review.date}</span>
                    </div>
                    <p className="text-[#555] text-sm italic leading-relaxed">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#e8e0d4]">
            <a
              href="/contact"
              className="bg-[#c9a84c] text-[#0a1628] px-4 py-2.5 font-bold rounded-xl hover:bg-[#e0c66e] transition-all text-center text-sm"
            >
              Enquire About This Barrister
            </a>
            <a
              href="https://wa.me/27823413333"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a1628] text-white px-4 py-2.5 font-bold rounded-xl hover:bg-[#1a2a3a] transition-all text-center text-sm"
            >
              Chat on WhatsApp
            </a>
            <button
              onClick={() => {
                const content = `
BARRISTER PROFILE
=================
${barrister.name}
${barrister.title}
Year of Call: ${barrister.yearOfCall}

PRACTICE AREAS
--------------
${barrister.practiceAreas.join(', ')}

CONTACT
-------
Email: ${barrister.email}
Phone: ${barrister.phone}

EDUCATION
---------
${barrister.education}

BIOGRAPHY
---------
${barrister.bio}

NOTABLE CASES
-------------
${barrister.notableCases?.map(c => `- ${c.title} (${c.year})`).join('\n')}
`
                const blob = new Blob([content], { type: 'text/plain' })
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `${barrister.name.replace(/\s/g, '_')}_CV.txt`
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
                URL.revokeObjectURL(url)
              }}
              className="bg-transparent text-[#0a1628] px-4 py-2.5 font-semibold rounded-xl border-2 border-[#e8e0d4] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all text-center text-sm flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </button>
          </div>

          {/* Related Barristers */}
          {relatedBarristers.length > 0 && (
            <div className="mt-12 pt-10 border-t border-[#e8e0d4]">
              <h2 className="text-xl font-extrabold text-[#0a1628] mb-6 text-center">
                Related <span className="text-[#c9a84c]">Barristers</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedBarristers.map((related) => (
                  <Link
                    key={related.id}
                    href={`/barristers/${related.slug}`}
                    className="group bg-[#faf8f5] rounded-xl p-4 border border-[#e8e0d4] hover:border-[#c9a84c] hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#0a1628] to-[#1a2a3a] flex items-center justify-center text-lg font-bold text-white mb-2 group-hover:from-[#c9a84c] group-hover:to-[#e0c66e] transition-all duration-300">
                      {related.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-bold text-[#0a1628] text-sm group-hover:text-[#c9a84c] transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-[#c9a84c] text-xs font-semibold">{related.title}</p>
                    <p className="text-[#888] text-xs mt-1">Year: {related.yearOfCall}</p>
                    <span className="inline-flex items-center gap-1 text-[#c9a84c] text-xs font-semibold group-hover:underline transition-all mt-2">
                      View Profile <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
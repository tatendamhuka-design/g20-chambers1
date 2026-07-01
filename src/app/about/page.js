import { Scale, Users, Award, MapPin, Calendar, Building, ChevronRight, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'About Us | G20 Chambers',
  description: 'G20 Chambers was established in 2021 and is a leading group of barristers at the Limpopo Bar. Learn about our history, founders, values, and team of expert advocates in Polokwane.',
  keywords: 'about G20 Chambers, barristers Limpopo, advocates Polokwane, Limpopo Bar, legal history South Africa, GCB',
  openGraph: {
    title: 'About Us | G20 Chambers',
    description: 'Learn about G20 Chambers, a leading group of barristers at the Limpopo Bar. Established in 2021, we are the home of premier barristers in Polokwane.',
    url: 'https://g20chambers.co.za/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About G20 Chambers',
            description: 'G20 Chambers is a leading group of barristers at the Limpopo Bar, established in 2021.',
            url: 'https://g20chambers.co.za/about',
            mainEntity: {
              '@type': 'LegalService',
              name: 'G20 Chambers',
              description: 'A leading group of barristers at the Limpopo Bar, providing expert legal representation.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '39 Voortrekker Street',
                addressLocality: 'Polokwane',
                addressRegion: 'Limpopo',
                postalCode: '0699',
                addressCountry: 'ZA',
              },
              foundingDate: '2021',
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              About <span className="text-[#c9a84c]">G20 Chambers</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              The home of premier barristers in Limpopo, committed to fighting injustice, defending human rights, and upholding the rule of law.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* History */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-10 bg-[#c9a84c] rounded-full"></span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">Our History</h2>
            </div>
            
            <div className="space-y-6 text-[#444] text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-[#0a1628]">G20 Chambers</strong> was established in <strong className="text-[#0a1628]">2021</strong> by a group of passionate advocates who shared a common vision: to create a premier barristers' chambers in Limpopo that would serve the community with integrity, excellence, and fearlessness.
              </p>
              <p>
                The group was founded by <strong className="text-[#0a1628]">Adv. Malose Monene, Adv. Cali Mathabatha, Adv. Sentle Fenyane, Adv. Germain Ledwaba, and Adv. Chuene Rammutla</strong>. These founding members were soon joined by <strong className="text-[#0a1628]">Adv. Isaac Maila, Adv. Eunice Thete, Adv. Lindiwe Vilakazi, and Adv. Sydney Mgimeti</strong>.
              </p>
              <p>
                Today, G20 Chambers has grown to <strong className="text-[#0a1628]">14 barristers</strong> and is proudly situated at <strong className="text-[#0a1628]">39 Voortrekker Street, Polokwane</strong> at the STATSA Campus, directly across from the Limpopo High Court Building. The group is a constituent member of the <strong className="text-[#0a1628]">General Council of the Bar of South Africa (GCB)</strong> through its affiliation with the <strong className="text-[#0a1628]">Limpopo Bar</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-10">
              <div className="bg-[#faf8f5] rounded-xl p-6 text-center border border-[#e8e0d4]">
                <p className="text-3xl md:text-4xl font-extrabold text-[#c9a84c]">2021</p>
                <p className="text-xs md:text-sm text-[#888] mt-1">Established</p>
              </div>
              <div className="bg-[#faf8f5] rounded-xl p-6 text-center border border-[#e8e0d4]">
                <p className="text-3xl md:text-4xl font-extrabold text-[#c9a84c]">14</p>
                <p className="text-xs md:text-sm text-[#888] mt-1">Barristers</p>
              </div>
              <div className="bg-[#faf8f5] rounded-xl p-6 text-center border border-[#e8e0d4]">
                <p className="text-3xl md:text-4xl font-extrabold text-[#c9a84c]">5</p>
                <p className="text-xs md:text-sm text-[#888] mt-1">Founders</p>
              </div>
              <div className="bg-[#faf8f5] rounded-xl p-6 text-center border border-[#e8e0d4]">
                <p className="text-3xl md:text-4xl font-extrabold text-[#c9a84c]">GCB</p>
                <p className="text-xs md:text-sm text-[#888] mt-1">Member</p>
              </div>
            </div>

            {/* Mission & Values */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e0d4]">
                <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-2">Our Mission</h3>
                <p className="text-[#555] leading-relaxed">
                  To provide top-notch advocate services to clients in Limpopo and beyond, fighting for justice with integrity, excellence, and fearlessness.
                </p>
              </div>
              <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e0d4]">
                <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[#c9a84c]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1628] mb-2">Our Values</h3>
                <ul className="text-[#555] leading-relaxed space-y-1">
                  <li>✓ Integrity in all we do</li>
                  <li>✓ Excellence in advocacy</li>
                  <li>✓ Fearless pursuit of justice</li>
                  <li>✓ Compassion for our clients</li>
                  <li>✓ Commitment to the rule of law</li>
                </ul>
              </div>
            </div>

            {/* Location */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-10 bg-[#c9a84c] rounded-full"></span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">Our Location</h2>
              </div>
              <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e0d4]">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#c9a84c] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-semibold text-[#0a1628]">39 Voortrekker Street, Polokwane</p>
                    <p className="text-[#555]">STATSA Campus, across from Limpopo High Court Building</p>
                    <p className="text-[#555]">Polokwane, Limpopo, South Africa</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#e8e0d4] flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-2 text-[#555]">
                    <Calendar className="w-4 h-4 text-[#c9a84c]" />
                    Mon-Fri: 8:00 AM - 5:00 PM
                  </span>
                  <span className="flex items-center gap-2 text-[#555]">
                    <Building className="w-4 h-4 text-[#c9a84c]" />
                    Sat: By appointment
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center p-8 bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] rounded-2xl text-white">
              <h3 className="text-2xl font-extrabold mb-3">Ready to work with us?</h3>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Get in touch with G20 Chambers for expert legal advice and representation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#c9a84c] text-[#0a1628] px-8 py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all text-center">
                  Contact Us
                </Link>
                <Link href="/barristers" className="bg-transparent text-white px-8 py-3 font-semibold rounded-xl border-2 border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all text-center">
                  Meet Our Barristers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
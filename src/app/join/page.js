import { Users, GraduationCap, Briefcase, Award, ChevronRight, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Join Us | G20 Chambers',
  description: 'Join G20 Chambers at the Limpopo Bar. Learn about pupillage, tenancy, and career opportunities for advocates and legal professionals in Polokwane.',
  keywords: 'join G20 Chambers, pupillage Limpopo, tenancy South Africa, barristers careers, advocates Limpopo, legal jobs Polokwane',
  openGraph: {
    title: 'Join Us | G20 Chambers',
    description: 'Join G20 Chambers at the Limpopo Bar. Learn about pupillage, tenancy, and career opportunities in Polokwane.',
    url: 'https://g20chambers.co.za/join',
    type: 'website',
  },
}

export default function JoinUsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Join G20 Chambers',
            description: 'Career opportunities at G20 Chambers, including pupillage and tenancy positions.',
            url: 'https://g20chambers.co.za/join',
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
              Join <span className="text-[#c9a84c]">Us</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              Join G20 Chambers at the Limpopo Bar and be part of a premier group of barristers committed to justice and excellence.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">Why Join G20 Chambers?</h2>
            <p className="text-[#444] leading-relaxed">
              G20 Chambers is a premier group of barristers at the Limpopo Bar, a constituent member of the General Council of the Bar of South Africa (GCB). We are committed to fighting injustice, defending human rights, and upholding the rule of law.
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-white rounded-xl p-6 border border-[#e8e0d4] text-center">
                <Award className="w-12 h-12 text-[#c9a84c] mx-auto mb-3" />
                <h4 className="font-bold text-[#0a1628]">Excellence</h4>
                <p className="text-[#555] text-sm">Join a chambers with a reputation for excellence and integrity.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e8e0d4] text-center">
                <Users className="w-12 h-12 text-[#c9a84c] mx-auto mb-3" />
                <h4 className="font-bold text-[#0a1628]">Community</h4>
                <p className="text-[#555] text-sm">Be part of a supportive and collaborative group of advocates.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e8e0d4] text-center">
                <Briefcase className="w-12 h-12 text-[#c9a84c] mx-auto mb-3" />
                <h4 className="font-bold text-[#0a1628]">Opportunity</h4>
                <p className="text-[#555] text-sm">Access to a wide range of practice areas and high-profile cases.</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628] mt-8">Pupillage</h2>
            <p className="text-[#444] leading-relaxed">
              G20 Chambers offers pupillage opportunities for law graduates who are completing their practical legal training. Our pupillage program provides hands-on experience and mentorship from experienced barristers.
            </p>
            <div className="bg-[#faf8f5] p-6 rounded-xl border-l-4 border-[#c9a84c] my-6">
              <h4 className="font-bold text-[#0a1628]">What We Offer:</h4>
              <ul className="space-y-2 text-[#555]">
                <li>✓ One-on-one mentorship with senior barristers</li>
                <li>✓ Exposure to a wide range of practice areas</li>
                <li>✓ Courtroom experience and advocacy training</li>
                <li>✓ Supportive learning environment</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628] mt-8">Tenancy</h2>
            <p className="text-[#444] leading-relaxed">
              G20 Chambers welcomes applications from experienced advocates seeking tenancy. We are looking for barristers who share our commitment to justice, integrity, and excellence.
            </p>
            <div className="bg-[#faf8f5] p-6 rounded-xl border-l-4 border-[#c9a84c] my-6">
              <h4 className="font-bold text-[#0a1628]">Requirements:</h4>
              <ul className="space-y-2 text-[#555]">
                <li>✓ Called to the Bar with relevant experience</li>
                <li>✓ Strong track record in their practice areas</li>
                <li>✓ Commitment to professional development</li>
                <li>✓ Alignment with G20 Chambers' values</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] rounded-2xl text-white text-center">
              <h3 className="text-2xl font-extrabold mb-3">Ready to Join Us?</h3>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Contact G20 Chambers to express your interest in pupillage or tenancy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#c9a84c] text-[#0a1628] px-8 py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all">
                  Get in Touch
                </Link>
                <a href="tel:+27823413333" className="bg-transparent text-white px-8 py-3 font-semibold rounded-xl border-2 border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all">
                  Call Us: 082 341 3333
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
import { FileText, Users, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Public Access | G20 Chambers',
  description: 'Direct access to barristers at G20 Chambers in Polokwane. Learn how to instruct a barrister directly without a solicitor for expert legal representation in Limpopo.',
  keywords: 'public access, direct access barristers, instruct barrister directly, barristers Limpopo, legal representation without solicitor',
  openGraph: {
    title: 'Public Access | G20 Chambers',
    description: 'Learn how to instruct a barrister directly at G20 Chambers in Polokwane, Limpopo. Direct access to expert legal representation.',
    url: 'https://g20chambers.co.za/public-access',
    type: 'website',
  },
}

export default function PublicAccessPage() {
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
            name: 'Public Access to G20 Chambers',
            description: 'Direct access to barristers at G20 Chambers in Polokwane, Limpopo.',
            url: 'https://g20chambers.co.za/public-access',
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
              Public <span className="text-[#c9a84c]">Access</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              You can instruct a barrister directly at G20 Chambers without going through a solicitor.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">What is Public Access?</h2>
            <p className="text-[#444] leading-relaxed">
              Public Access (also known as Direct Access) allows members of the public to instruct a barrister directly without the need to go through a solicitor. This can save time and reduce legal costs.
            </p>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628] mt-8">When Can You Use Public Access?</h2>
            <p className="text-[#444] leading-relaxed">
              You can instruct a barrister directly for most types of legal work, including:
            </p>
            <ul className="space-y-2 text-[#444]">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <span><strong>Advice:</strong> Getting legal advice on your case</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <span><strong>Drafting:</strong> Preparing legal documents</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <span><strong>Representation:</strong> Representing you in court</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <span><strong>Mediation:</strong> Alternative dispute resolution</span>
              </li>
            </ul>

            <div className="bg-[#faf8f5] p-6 rounded-xl border-l-4 border-[#c9a84c] my-8">
              <h3 className="text-lg font-bold text-[#0a1628]">Important Note</h3>
              <p className="text-[#555] leading-relaxed">
                Under the Public Access rules, barristers can accept instructions directly from members of the public. However, certain types of work, such as litigation funding, may require a solicitor's involvement. Our barristers will advise you on the best approach for your case.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628] mt-8">How to Instruct a Barrister</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="bg-white rounded-xl p-6 border border-[#e8e0d4] text-center">
                <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#c9a84c]">1</span>
                </div>
                <h4 className="font-bold text-[#0a1628]">Contact Us</h4>
                <p className="text-[#555] text-sm">Get in touch with G20 Chambers to discuss your legal matter.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e8e0d4] text-center">
                <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#c9a84c]">2</span>
                </div>
                <h4 className="font-bold text-[#0a1628]">Initial Consultation</h4>
                <p className="text-[#555] text-sm">Discuss your case with a barrister and get initial advice.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#e8e0d4] text-center">
                <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#c9a84c]">3</span>
                </div>
                <h4 className="font-bold text-[#0a1628]">Instruction</h4>
                <p className="text-[#555] text-sm">Instruct the barrister to represent you or provide legal advice.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] rounded-2xl text-white text-center">
              <h3 className="text-2xl font-extrabold mb-3">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Contact G20 Chambers today to discuss your legal matter and how we can help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[#c9a84c] text-[#0a1628] px-8 py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all">
                  Contact Us
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
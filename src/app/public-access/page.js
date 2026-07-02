'use client'

import { useState } from 'react'
import { 
  Phone, Mail, MessageCircle, Clock, MapPin, Award, 
  CheckCircle, Users, Briefcase, Star, ArrowRight,
  ChevronDown, Shield, Clock as ClockIcon, 
  DollarSign, MessageSquare, Zap, BookOpen
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost Effective',
    description: 'Save on solicitor fees by instructing a barrister directly. Transparent pricing with no hidden costs.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Communication',
    description: 'Speak directly to your barrister. No middlemen, no delays, clear and direct legal advice.',
  },
  {
    icon: Zap,
    title: 'Faster Process',
    description: 'Reduce time and paperwork. Get straight to the expert advice you need without unnecessary delays.',
  },
  {
    icon: BookOpen,
    title: 'Expert Advice',
    description: 'Specialist barristers with expertise across 8 practice areas. Get the right advice from the right expert.',
  },
]

const faqs = [
  {
    question: 'What is Public Access?',
    answer: 'Public Access (also known as Direct Access) allows members of the public to instruct a barrister directly without the need to go through a solicitor. This can save time and reduce legal costs while giving you direct access to specialist legal expertise.',
  },
  {
    question: 'Can anyone use Public Access?',
    answer: 'Yes, any member of the public can use Public Access. This includes individuals, businesses, organizations, trusts, and estates. Our barristers are authorised to accept instructions directly from the public.',
  },
  {
    question: 'What types of legal work can be done through Public Access?',
    answer: 'You can instruct a barrister directly for most types of legal work, including: legal advice, document drafting, court representation, mediation, and alternative dispute resolution. Some complex litigation may still require a solicitor.',
  },
  {
    question: 'How do I choose a barrister?',
    answer: 'We will recommend a barrister based on your case type and specific needs. You will have the opportunity to discuss your case with the barrister before making a decision. You have the final say in who represents you.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Costs vary depending on the complexity of your case and the level of expertise required. We provide transparent pricing during your initial consultation with no obligation. We believe in fair and accessible legal representation.',
  },
  {
    question: 'How long does the process take?',
    answer: 'The timeline depends on the complexity of your case. Simple advice can be provided quickly, while more complex litigation may take longer. Your barrister will provide a clear timeline during your consultation.',
  },
  {
    question: 'What if my case is complex?',
    answer: 'Our barristers have extensive experience in complex litigation. If your case requires additional expertise, we will recommend the right specialist. In some cases, we may suggest working with a solicitor for certain aspects.',
  },
  {
    question: 'Is Public Access confidential?',
    answer: 'Yes, all communications with your barrister are protected by legal professional privilege. Your case is treated with the utmost confidentiality and discretion.',
  },
  {
    question: 'Can I switch barristers if I am not satisfied?',
    answer: 'Yes, if you are not satisfied with your barrister, you can request a change. We are committed to ensuring you receive the best possible representation.',
  },
  {
    question: 'Do you offer legal aid or pro bono services?',
    answer: 'We are committed to access to justice and provide pro bono services on a case-by-case basis. Contact us to discuss your situation and we will see how we can help.',
  },
]

// Image component with error handling
function HeroImage({ src, alt }) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div className="relative h-80 md:h-96 w-full bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] flex items-center justify-center">
        <div className="text-center text-white p-8">
          <Award className="w-20 h-20 text-[#c9a84c] mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-semibold italic leading-relaxed">
            "We believe everyone deserves access to expert legal representation, 
            regardless of their situation."
          </p>
          <p className="text-[#c9a84c] font-semibold mt-4">
            — Barrister Mathabatha, Head of Chambers
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-80 md:h-96 w-full bg-gradient-to-br from-[#0a1628] to-[#1a2a4a]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover opacity-20"
        onError={() => setError(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
        <div className="max-w-2xl">
          <Award className="w-16 h-16 text-[#c9a84c] mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-semibold italic leading-relaxed">
            "We believe everyone deserves access to expert legal representation, 
            regardless of their situation."
          </p>
          <p className="text-[#c9a84c] font-semibold mt-4">
            — Barrister Mathabatha, Head of Chambers
          </p>
        </div>
      </div>
    </div>
  )
}

export default function PublicAccessPage() {
  const [imageError, setImageError] = useState(false)

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* ===== HERO SECTION - TEXT ONLY ===== */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 text-[#c9a84c] px-4 py-1.5 rounded-full text-sm font-medium border border-[#c9a84c]/20 mb-6">
              <Award className="w-4 h-4" />
              <span>Direct Access to Justice</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Instruct a Barrister <br />
              <span className="text-[#c9a84c]">Directly</span>
            </h1>
            
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              Public Access allows you to instruct a barrister directly without a solicitor. 
              Expert legal representation at your fingertips. Save time, reduce costs, 
              and speak directly to your barrister.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] px-8 py-3.5 font-bold rounded-xl hover:bg-[#e0c66e] transition-all hover:scale-105"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+27823413333"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-3.5 font-semibold rounded-xl border-2 border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Call: 082 341 3333
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>100+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>14 Barristers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>8 Practice Areas</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* ===== IMAGE SECTION ===== */}
      <section className="py-12 md:py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <HeroImage 
              src="/images/public-access-about.jpg" 
              alt="Direct Access to Justice - G20 Chambers" 
            />
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">
              How <span className="text-[#c9a84c]">It Works</span>
            </h2>
            <p className="text-[#555] text-lg mt-2 max-w-2xl mx-auto">
              Three simple steps to instruct a barrister directly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#c9a84c]/20 -translate-y-1/2"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#c9a84c] flex items-center justify-center text-2xl font-bold text-[#0a1628] mb-4">
                1
              </div>
              <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e0d4] hover:shadow-lg transition-all hover:-translate-y-1">
                <Phone className="w-8 h-8 text-[#c9a84c] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#0a1628]">Contact Us</h3>
                <p className="text-[#555] text-sm leading-relaxed">
                  Call, email, or WhatsApp us to discuss your legal matter. 
                  We will listen and understand your needs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#c9a84c] flex items-center justify-center text-2xl font-bold text-[#0a1628] mb-4">
                2
              </div>
              <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e0d4] hover:shadow-lg transition-all hover:-translate-y-1">
                <MessageCircle className="w-8 h-8 text-[#c9a84c] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#0a1628]">Consultation</h3>
                <p className="text-[#555] text-sm leading-relaxed">
                  Discuss your case with a specialist barrister. 
                  Get initial advice and understand your options.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#c9a84c] flex items-center justify-center text-2xl font-bold text-[#0a1628] mb-4">
                3
              </div>
              <div className="bg-[#faf8f5] rounded-xl p-6 border border-[#e8e0d4] hover:shadow-lg transition-all hover:-translate-y-1">
                <CheckCircle className="w-8 h-8 text-[#c9a84c] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#0a1628]">Instruction</h3>
                <p className="text-[#555] text-sm leading-relaxed">
                  Instruct your barrister to represent you. 
                  Get expert legal representation for your case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-12 md:py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">
              Why Choose <span className="text-[#c9a84c]">Direct Access</span>?
            </h2>
            <p className="text-[#555] text-lg mt-2 max-w-2xl mx-auto">
              The benefits of instructing a barrister directly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center border border-[#e8e0d4] hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#c9a84c]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1628]">{benefit.title}</h3>
                  <p className="text-[#555] text-sm mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">
              Frequently Asked <span className="text-[#c9a84c]">Questions</span>
            </h2>
            <p className="text-[#555] text-lg mt-2">
              Everything you need to know about Public Access.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-[#e8e0d4] overflow-hidden hover:border-[#c9a84c] transition-colors"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#faf8f5] transition-colors">
                  <span className="font-semibold text-[#0a1628] group-open:text-[#c9a84c] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-[#888] group-open:rotate-180 group-open:text-[#c9a84c] transition-all" />
                </summary>
                <div className="px-5 pb-5 pt-2 text-[#555] border-t border-[#e8e0d4] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] border-y-4 border-[#c9a84c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Ready to Instruct a <span className="text-[#c9a84c]">Barrister</span>?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Contact G20 Chambers today for expert legal representation. 
            Speak directly to a barrister about your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] px-8 py-3.5 font-bold rounded-xl hover:bg-[#e0c66e] transition-all hover:scale-105"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+27823413333"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-3.5 font-semibold rounded-xl border-2 border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Call: 082 341 3333
            </a>
            <a
              href="https://wa.me/27823413333"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3.5 font-bold rounded-xl hover:bg-[#1da851] transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
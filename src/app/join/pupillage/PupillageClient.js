'use client'

import Link from 'next/link'
import {
  GraduationCap, Users, BookOpen, Scale, Briefcase,
  CheckCircle, ArrowRight, ChevronDown, Phone,
  Mail, MessageCircle, Clock, Award
} from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const programHighlights = [
  {
    icon: BookOpen,
    title: 'Hands-On Training',
    description: 'Practical experience in real cases, drafting, and courtroom advocacy.',
  },
  {
    icon: Users,
    title: 'One-on-One Mentorship',
    description: 'Direct mentorship from experienced barristers and senior advocates.',
  },
  {
    icon: Scale,
    title: 'Courtroom Experience',
    description: 'Observe and participate in hearings, trials, and appeals.',
  },
  {
    icon: Briefcase,
    title: 'Practice Area Exposure',
    description: 'Work across multiple practice areas including Criminal, Family, and Human Rights.',
  },
]

const requirements = [
  'Law degree (LLB or equivalent) from a recognized university',
  'Strong academic record with a passion for advocacy',
  'Commitment to justice and the rule of law',
  'Excellent communication and analytical skills',
  'Admission to the Limpopo Bar',
]

const faqs = [
  {
    question: 'What is pupillage?',
    answer: 'Pupillage is a period of practical training for law graduates who are completing their practical legal training. At G20 Chambers, pupillage provides hands-on experience and mentorship from experienced barristers.',
  },
  {
    question: 'How long does pupillage last?',
    answer: 'Pupillage typically lasts 12 to 18 months, depending on the specific requirements and progress of the pupil.',
  },
  {
    question: 'What are the requirements for pupillage?',
    answer: 'You must have a law degree (LLB or equivalent) and a strong academic record. A passion for advocacy and commitment to justice is essential.',
  },
  {
    question: 'How do I apply for pupillage?',
    answer: 'Contact G20 Chambers to express your interest. We will provide you with application details and requirements.',
  },
  {
    question: 'What will I learn during pupillage?',
    answer: 'You will gain practical experience in case preparation, legal drafting, courtroom advocacy, and client interaction across multiple practice areas.',
  },
  {
    question: 'Will I be mentored?',
    answer: 'Yes, you will be assigned a mentor who will guide you throughout your pupillage and provide ongoing support and feedback.',
  },
  {
    question: 'What happens after pupillage?',
    answer: 'Upon successful completion of pupillage, you may be invited to apply for tenancy at G20 Chambers.',
  },
  {
    question: 'Do you offer financial support?',
    answer: 'We offer a stipend to support pupils during their training. Contact us for more details.',
  },
]

export default function PupillageClient() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col">
            <Link href="/join" className="inline-flex items-center gap-1 text-gray-400 hover:text-[#c9a84c] transition-colors text-sm mb-4">
              ← Back to Join Us
            </Link>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 text-[#c9a84c] px-4 py-1.5 rounded-full text-sm font-medium border border-[#c9a84c]/20 mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Start Your Journey</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Pupillage at <br />
                <span className="text-[#c9a84c]">G20 Chambers</span>
              </h1>
              <p className="text-gray-300 text-lg mt-4 max-w-2xl leading-relaxed">
                Hands-on training, mentorship, and courtroom experience for future barristers. 
                Start your journey with G20 Chambers at the Limpopo Bar.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0a1628] px-6 py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+27823413333" className="inline-flex items-center gap-2 bg-transparent text-white px-6 py-3 font-semibold rounded-xl border-2 border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all">
                  <Phone className="w-4 h-4" /> Call: 082 341 3333
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* Program Highlights */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">
              Program <span className="text-[#c9a84c]">Highlights</span>
            </h2>
            <p className="text-[#555] text-lg mt-2 max-w-2xl mx-auto">
              What you'll gain during your pupillage at G20 Chambers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div key={index} className="bg-[#faf8f5] rounded-xl p-6 text-center border border-[#e8e0d4] hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4 group-hover:bg-[#c9a84c] transition-colors">
                    <Icon className="w-7 h-7 text-[#c9a84c] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1628] group-hover:text-[#c9a84c] transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-[#555] text-sm mt-2 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 md:py-16 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">
              Requirements & <span className="text-[#c9a84c]">Qualifications</span>
            </h2>
          </div>
          <div className="bg-white rounded-xl p-8 border border-[#e8e0d4]">
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <p className="text-[#555]">{req}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">
              Frequently Asked <span className="text-[#c9a84c]">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-[#faf8f5] rounded-xl border border-[#e8e0d4] overflow-hidden hover:border-[#c9a84c] transition-colors">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-white transition-colors">
                  <span className="font-semibold text-[#0a1628] group-open:text-[#c9a84c]">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-[#888] group-open:rotate-180 group-open:text-[#c9a84c]" />
                </summary>
                <div className="px-5 pb-5 pt-2 text-[#555] border-t border-[#e8e0d4]">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] border-y-4 border-[#c9a84c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to Start Your <span className="text-[#c9a84c]">Pupillage</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            Contact G20 Chambers today to begin your journey as a barrister.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#c9a84c] text-[#0a1628] px-8 py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all">Apply Now</Link>
            <a href="tel:+27823413333" className="bg-transparent text-white px-8 py-3 font-semibold rounded-xl border-2 border-white/30 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all">Call: 082 341 3333</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
'use client'

import Link from 'next/link'
import {
  Award, Users, Briefcase, GraduationCap, Scale,
  Shield, Star, ArrowRight, ChevronDown,
  Phone, Mail, MessageCircle, CheckCircle, Clock,
  Handshake
} from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const opportunities = [
  {
    icon: GraduationCap,
    title: 'Pupillage',
    description: 'Hands-on training with experienced barristers. Courtroom experience and advocacy development.',
    details: '12-18 months • Mentorship • Court exposure',
    link: '/join/pupillage',
    cta: 'Learn More →',
  },
  {
    icon: Briefcase,
    title: 'Tenancy',
    description: 'Join our chambers as a full member with access to diverse practice areas and support.',
    details: 'Full membership • Practice support • Diverse areas',
    link: '/join/tenancy',
    cta: 'Learn More →',
  },
  {
    icon: Users,
    title: 'Clerks & Staff',
    description: 'Support our barristers and chambers operations. Various roles available.',
    details: 'Administration • Support • Operations',
    link: '/join/clerks-staff',
    cta: 'Learn More →',
  },
]

export default function JoinClient() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 text-[#c9a84c] px-4 py-1.5 rounded-full text-sm font-medium border border-[#c9a84c]/20 mb-6">
              <Award className="w-4 h-4" />
              <span>Join Our Chambers</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Build Your Career <br />
              <span className="text-[#c9a84c]">at G20 Chambers</span>
            </h1>
            
            <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              Join a premier group of barristers at the Limpopo Bar. 
              Excellence. Integrity. Justice. Build your career with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] px-8 py-3.5 font-bold rounded-xl hover:bg-[#e0c66e] transition-all hover:scale-105"
              >
                Explore Opportunities <ArrowRight className="w-4 h-4" />
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
                <span>14 Barristers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>Est. 2021</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>GCB Member</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* Opportunities */}
      <section className="py-12 md:py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1628]">
              Available <span className="text-[#c9a84c]">Opportunities</span>
            </h2>
            <p className="text-[#555] text-lg mt-2 max-w-2xl mx-auto">
              Explore career paths at G20 Chambers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-[#e8e0d4] hover:shadow-xl transition-all hover:-translate-y-1 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                  <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-4 group-hover:bg-[#c9a84c] transition-colors">
                    <Icon className="w-7 h-7 text-[#c9a84c] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1628] group-hover:text-[#c9a84c] transition-colors">
                    {opportunity.title}
                  </h3>
                  <p className="text-[#555] text-sm mt-2 leading-relaxed">
                    {opportunity.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-[#888]">
                    <Clock className="w-4 h-4 text-[#c9a84c]" />
                    {opportunity.details}
                  </div>
                  <Link
                    href={opportunity.link}
                    className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold text-sm mt-4 group-hover:gap-2 transition-all"
                  >
                    {opportunity.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] border-y-4 border-[#c9a84c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Ready to <span className="text-[#c9a84c]">Join Us</span>?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Take the next step in your career. Contact G20 Chambers today to discuss opportunities.
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
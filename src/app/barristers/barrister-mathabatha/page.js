import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Mail, Phone, Calendar, BookOpen, Award, MapPin } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

// Mathabatha's full data
const mathabatha = {
  name: 'Barrister Mathabatha',
  title: 'Head of Chambers',
  yearOfCall: 2005,
  practiceAreas: ['Criminal Law', 'Human Rights', 'Civil Litigation', 'Constitutional Law'],
  bio: `
    Barrister Mathabatha is the founding Head of G20 Chambers. With over 19 years of experience at the Bar, he is a leading advocate in Limpopo, known for his fearless representation in complex criminal and human rights cases.

    He has successfully handled numerous high-profile matters, including landmark constitutional challenges and appeals before the Supreme Court of Appeal. His commitment to justice and the rule of law has earned him a reputation as one of the most respected advocates in the region.

    Barrister Mathabatha is also deeply committed to access to justice, regularly providing pro bono services and mentoring young advocates. He believes in the power of the law to transform lives and fights tirelessly for every client, no matter how powerful the opponent.
  `,
  email: 'cali.mathabatha@gmail.com',
  phone: '082 341 3333',
  education: 'LLB, University of Limpopo',
  callToBar: '2005 - High Court of South Africa',
  chambers: 'G20 Chambers, Limpopo',
  image: '/images/barristers/mathabatha.jpg', // ← Your image goes here
  notableCases: [
    'Landmark constitutional challenge - R v. State (2024)',
    'Successful human rights appeal - S v. Mthembu (2023)',
    'Complex criminal defence - State v. Ramaphosa (2022)',
    'Civil rights victory - Community Land Claim (2021)',
  ],
}

export default function BarristerMathabathaPage() {
  return (
    <main>
      <Header />

      <section className="section-padding bg-white">
        <div className="container max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/barristers"
            className="inline-flex items-center gap-2 text-[#555] hover:text-[#c9a84c] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all barristers
          </Link>

          {/* Profile Card */}
          <div className="bg-[#faf8f5] rounded-xl p-8 md:p-10 border border-[#e8e0d4]">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Image / Avatar */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#c9a84c] shadow-lg">
                  {mathabatha.image ? (
                    <Image
                      src={mathabatha.image}
                      alt={mathabatha.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#0a1628] flex items-center justify-center text-4xl font-bold text-white">
                      {mathabatha.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a1628]">
                    {mathabatha.name}
                  </h1>
                  <span className="bg-[#c9a84c] text-[#0a1628] text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full">
                    Head of Chambers
                  </span>
                </div>
                <p className="text-xl text-[#c9a84c] font-semibold">{mathabatha.title}</p>
                <p className="text-[#888] text-sm mt-1">Year of Call: {mathabatha.yearOfCall}</p>

                {/* Practice Areas */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {mathabatha.practiceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="bg-[#0a1628] text-[#c9a84c] text-sm px-4 py-1.5 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-3 text-[#555]">
                    <Mail className="w-4 h-4 text-[#c9a84c]" />
                    <a href={`mailto:${mathabatha.email}`} className="hover:text-[#c9a84c] transition-colors">
                      {mathabatha.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[#555]">
                    <Phone className="w-4 h-4 text-[#c9a84c]" />
                    <a href={`tel:${mathabatha.phone}`} className="hover:text-[#c9a84c] transition-colors">
                      {mathabatha.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-[#555]">
                    <Calendar className="w-4 h-4 text-[#c9a84c]" />
                    <span>Called to the Bar: {mathabatha.callToBar}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#555]">
                    <BookOpen className="w-4 h-4 text-[#c9a84c]" />
                    <span>{mathabatha.education}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#555]">
                    <MapPin className="w-4 h-4 text-[#c9a84c]" />
                    <span>{mathabatha.chambers}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-8 pt-8 border-t border-[#e8e0d4]">
              <h2 className="text-xl font-bold text-[#0a1628] mb-4">Biography</h2>
              <div className="text-[#444] leading-relaxed whitespace-pre-line">
                {mathabatha.bio}
              </div>
            </div>

            {/* Notable Cases */}
            {mathabatha.notableCases && (
              <div className="mt-8 pt-8 border-t border-[#e8e0d4]">
                <h2 className="text-xl font-bold text-[#0a1628] mb-4">Notable Cases</h2>
                <ul className="space-y-2">
                  {mathabatha.notableCases.map((caseItem, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#555]">
                      <Award className="w-4 h-4 text-[#c9a84c] mt-1 flex-shrink-0" />
                      <span>{caseItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-[#e8e0d4] flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-[#c9a84c] text-[#0a1628] px-8 py-3 font-bold rounded hover:bg-[#e0c66e] transition-all text-center"
              >
                Enquire About This Barrister
              </a>
              <a
                href="https://wa.me/27823413333"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a1628] text-white px-8 py-3 font-bold rounded hover:bg-[#1a2a4a] transition-all text-center"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
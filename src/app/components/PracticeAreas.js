import Link from 'next/link'

const practiceAreas = [
  { 
    icon: '⚖️', 
    name: 'Criminal Law', 
    desc: 'Expert defence and prosecution representation in all criminal matters.',
    slug: 'criminal-law'
  },
  { 
    icon: '🏠', 
    name: 'Family Law', 
    desc: 'Children matters, divorce, and family disputes handled with care.',
    slug: 'family-law'
  },
  { 
    icon: '📜', 
    name: 'Human Rights', 
    desc: 'Defending fundamental rights and challenging injustice.',
    slug: 'human-rights'
  },
  { 
    icon: '🏛️', 
    name: 'Civil Litigation', 
    desc: 'Commercial disputes, personal injury, and property matters.',
    slug: 'civil-litigation'
  },
  { 
    icon: '🛂', 
    name: 'Immigration Law', 
    desc: 'Asylum, deportation, and visa appeals with expert guidance.',
    slug: 'immigration-law'
  },
  { 
    icon: '🏢', 
    name: 'Employment Law', 
    desc: 'Workplace disputes, unfair dismissal, and discrimination claims.',
    slug: 'employment-law'
  },
  { 
    icon: '🌍', 
    name: 'Public & Administrative', 
    desc: 'Judicial review, regulatory matters, and public interest cases.',
    slug: 'public-administrative-law'
  },
  { 
    icon: '📋', 
    name: 'Property & Land Law', 
    desc: 'Property disputes, land claims, and conveyancing advice.',
    slug: 'property-land-law'
  },
]

export default function PracticeAreas() {
  return (
    <section id="areas" className="section-padding bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
            Our <span className="text-[#c9a84c]">Areas of Law</span>
          </h2>
          <p className="text-[#666] text-lg mt-2 max-w-lg mx-auto">
            Specialist advocacy across a wide range of legal practice areas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center border border-[#e8e0d4] hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform" />
              <span className="text-4xl block mb-3">{area.icon}</span>
              <h3 className="text-lg font-bold text-[#0a1628] mb-2">
                {area.name}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed mb-3">{area.desc}</p>
              <Link 
                href={`/areas/${area.slug}`}
                className="text-[#c9a84c] font-semibold text-sm hover:underline inline-block"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        {/* View All Areas Button */}
        <div className="text-center mt-10">
          <Link
            href="/areas"
            className="inline-block bg-[#c9a84c] text-[#0a1628] px-8 py-3 font-bold rounded-lg hover:bg-[#e0c66e] transition-all hover:scale-105"
          >
            View All Practice Areas →
          </Link>
        </div>
      </div>
    </section>
  )
}
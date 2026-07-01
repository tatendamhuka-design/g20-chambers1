import { Scale, Users, Home, FileText, Globe, Briefcase, Building, Landmark, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Areas of Law | G20 Chambers',
  description: 'G20 Chambers provides expert legal services in Criminal Law, Family Law, Human Rights, Civil Litigation, Immigration, Employment, and more. Contact us for legal representation in Limpopo.',
  keywords: 'areas of law, criminal lawyers Limpopo, family law attorneys Polokwane, human rights lawyers South Africa, civil litigation Limpopo, immigration lawyers, employment lawyers',
  openGraph: {
    title: 'Areas of Law | G20 Chambers',
    description: 'Expert legal services in Criminal Law, Family Law, Human Rights, Civil Litigation, Immigration, Employment, and more. Contact G20 Chambers in Polokwane.',
    url: 'https://g20chambers.co.za/areas',
    type: 'website',
  },
}

const practiceAreas = [
  {
    icon: Scale,
    name: 'Criminal Law',
    description: 'Expert defence and prosecution representation in all criminal matters, from bail applications to complex trials and appeals.',
    color: 'bg-red-50 text-red-600 border-red-200',
  },
  {
    icon: Home,
    name: 'Family Law',
    description: 'Compassionate and strategic representation in divorce, child custody, maintenance, domestic violence, and family disputes.',
    color: 'bg-pink-50 text-pink-600 border-pink-200',
  },
  {
    icon: FileText,
    name: 'Human Rights',
    description: 'Defending fundamental rights and challenging injustice through constitutional litigation and human rights advocacy.',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
  },
  {
    icon: Landmark,
    name: 'Civil Litigation',
    description: 'Commercial disputes, personal injury claims, property disputes, and civil litigation in the High Court and Magistrate\'s Court.',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  },
  {
    icon: Globe,
    name: 'Immigration Law',
    description: 'Expert guidance on asylum applications, deportation appeals, visa applications, and citizenship matters.',
    color: 'bg-cyan-50 text-cyan-600 border-cyan-200',
  },
  {
    icon: Briefcase,
    name: 'Employment Law',
    description: 'Workplace disputes, unfair dismissal claims, discrimination matters, and employment contract advice.',
    color: 'bg-amber-50 text-amber-600 border-amber-200',
  },
  {
    icon: Building,
    name: 'Public & Administrative Law',
    description: 'Judicial review, regulatory matters, public interest cases, and administrative law challenges.',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
  },
  {
    icon: Users,
    name: 'Property & Land Law',
    description: 'Property disputes, land claims, conveyancing advice, and property litigation.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  },
]

export default function AreasPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Areas of Law at G20 Chambers',
            description: 'Expert legal services in Criminal Law, Family Law, Human Rights, Civil Litigation, Immigration, Employment, and more.',
            url: 'https://g20chambers.co.za/areas',
            hasPart: practiceAreas.map(area => ({
              '@type': 'LegalService',
              name: area.name,
              description: area.description,
            })),
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
              Areas of <span className="text-[#c9a84c]">Law</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              G20 Chambers provides expert legal services across a wide range of practice areas. Our barristers are specialists in their fields.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* Areas Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-[#e8e0d4] hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className={`w-12 h-12 rounded-full ${area.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1628] group-hover:text-[#c9a84c] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-[#555] mt-2 leading-relaxed">{area.description}</p>
                  <Link
                    href={`/areas/${area.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold text-sm mt-4 hover:gap-2 transition-all"
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-8 bg-[#faf8f5] rounded-2xl border border-[#e8e0d4]">
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
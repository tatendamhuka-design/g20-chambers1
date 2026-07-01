import { Mail, Phone, Users, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Clerks & Staff | G20 Chambers',
  description: 'Meet the clerks and staff at G20 Chambers in Polokwane. Our dedicated team supports our barristers and ensures smooth operations at the chambers.',
  keywords: 'clerks G20 Chambers, staff Polokwane, chambers clerks Limpopo, legal support staff',
  openGraph: {
    title: 'Clerks & Staff | G20 Chambers',
    description: 'Meet the clerks and staff at G20 Chambers. Our dedicated team supports our barristers in Polokwane, Limpopo.',
    url: 'https://g20chambers.co.za/clerks',
    type: 'website',
  },
}

// Fetch staff from API - This would be dynamic in a real implementation
async function getStaff() {
  // For now, we'll use static data
  return [
    {
      id: 1,
      name: 'Christina Mamabolo',
      role: 'Group Administrator',
      department: 'Administration',
      bio: 'Christina is the Group Administrator at G20 Chambers, overseeing the day-to-day operations of the chambers and ensuring that all administrative functions run smoothly.',
      email: 'christina@g20chambers.co.za',
      phone: '082 341 3333',
      profileImage: null,
    },
    {
      id: 2,
      name: 'Mathipa Malesela',
      role: 'Handyman',
      department: 'Maintenance',
      bio: 'Mathipa is our dedicated handyman, ensuring that the chambers are well-maintained and that all facilities are in excellent working condition.',
      email: null,
      phone: null,
      profileImage: null,
    },
  ]
}

export default async function ClerksPage() {
  const staff = await getStaff()

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
            name: 'Clerks & Staff at G20 Chambers',
            description: 'Meet the clerks and staff at G20 Chambers in Polokwane, Limpopo.',
            url: 'https://g20chambers.co.za/clerks',
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
              Clerks & <span className="text-[#c9a84c]">Staff</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              Meet the dedicated team that supports our barristers and ensures the smooth operation of G20 Chambers.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* Staff Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {staff.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#888]">No staff members have been added yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staff.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl p-6 border border-[#e8e0d4] hover:shadow-lg transition-all hover:-translate-y-1 text-center"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#0a1628] flex items-center justify-center text-white font-bold text-2xl overflow-hidden">
                    {member.profileImage ? (
                      <Image src={member.profileImage} alt={member.name} width={96} height={96} className="object-cover" />
                    ) : (
                      member.name.split(' ').map(n => n[0]).join('')
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1628] mt-4">{member.name}</h3>
                  <p className="text-[#c9a84c] font-semibold">{member.role}</p>
                  <p className="text-[#888] text-sm mt-1">{member.department}</p>
                  <p className="text-[#555] text-sm mt-3 leading-relaxed">{member.bio}</p>
                  <div className="mt-4 pt-4 border-t border-[#e8e0d4] space-y-1 text-sm text-[#888]">
                    {member.email && (
                      <p className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4 text-[#c9a84c]" />
                        <a href={`mailto:${member.email}`} className="hover:text-[#c9a84c] transition-colors">
                          {member.email}
                        </a>
                      </p>
                    )}
                    {member.phone && (
                      <p className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4 text-[#c9a84c]" />
                        <a href={`tel:${member.phone}`} className="hover:text-[#c9a84c] transition-colors">
                          {member.phone}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Staff Info */}
          <div className="mt-12 bg-[#faf8f5] rounded-xl p-6 border border-[#e8e0d4] text-center">
            <Users className="w-8 h-8 text-[#c9a84c] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0a1628]">Our Support Team</h3>
            <p className="text-[#555] text-sm max-w-lg mx-auto">
              The clerks and staff at G20 Chambers are dedicated to providing exceptional support to our barristers and clients. They are the backbone of our chambers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
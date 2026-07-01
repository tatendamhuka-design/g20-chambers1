import { Calendar, MapPin, Clock, Users, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Events | G20 Chambers',
  description: 'Upcoming legal events, seminars, and training sessions hosted by G20 Chambers in Limpopo. Stay informed about our public lectures and professional development opportunities.',
  keywords: 'legal events Limpopo, barristers seminars Polokwane, legal training South Africa, G20 Chambers events',
  openGraph: {
    title: 'Events | G20 Chambers',
    description: 'Upcoming legal events, seminars, and training sessions hosted by G20 Chambers in Polokwane, Limpopo.',
    url: 'https://g20chambers.co.za/events',
    type: 'website',
  },
}

// Sample events data - would come from database in production
const events = [
  {
    id: 1,
    title: 'Public Access Information Session',
    date: '2026-07-15',
    time: '10:00 AM - 12:00 PM',
    location: 'G20 Chambers, 39 Voortrekker Street, Polokwane',
    description: 'Learn how to instruct a barrister directly without a solicitor. Free information session open to the public.',
    type: 'Information Session',
    price: 'Free',
  },
  {
    id: 2,
    title: 'Human Rights Conference',
    date: '2026-07-22',
    time: '9:00 AM - 4:00 PM',
    location: 'Limpopo High Court Building, Polokwane',
    description: 'Annual conference featuring leading practitioners and academics discussing key developments in human rights law.',
    type: 'Conference',
    price: 'R500',
  },
  {
    id: 3,
    title: 'Pupillage Open Evening',
    date: '2026-08-05',
    time: '5:30 PM - 8:00 PM',
    location: 'G20 Chambers, 39 Voortrekker Street, Polokwane',
    description: 'Meet our barristers and learn about pupillage opportunities at G20 Chambers. Open to law graduates and students.',
    type: 'Open Evening',
    price: 'Free',
  },
]

export default function EventsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EventCollection',
            name: 'Events at G20 Chambers',
            description: 'Upcoming legal events, seminars, and training sessions hosted by G20 Chambers.',
            url: 'https://g20chambers.co.za/events',
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
              Upcoming <span className="text-[#c9a84c]">Events</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              Join us at our upcoming events, seminars, and training sessions to stay informed and connected.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* Events List */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {events.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#888]">No upcoming events at this time. Please check back later.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl border border-[#e8e0d4] overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                      <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                        {event.price}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0a1628] mb-3">{event.title}</h3>
                    <p className="text-[#555] leading-relaxed mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-[#555]">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-[#c9a84c]" />
                        <span>{new Date(event.date).toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-[#c9a84c]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-[#c9a84c]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-[#e8e0d4]">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:gap-3 transition-all"
                      >
                        Register for this event <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
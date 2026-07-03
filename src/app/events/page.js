'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Clock, ArrowRight, Search } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function EventsPage() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/public/events')
      const data = await res.json()
      setEvents(data.events || [])
    } catch (error) {
      console.error('Error fetching events:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getTypeBadge = (type) => {
    const config = {
      'Information Session': 'bg-blue-100 text-blue-700 border-blue-200',
      'Conference': 'bg-purple-100 text-purple-700 border-purple-200',
      'Open Evening': 'bg-amber-100 text-amber-700 border-amber-200',
      'Training': 'bg-green-100 text-green-700 border-green-200',
      'Seminar': 'bg-indigo-100 text-indigo-700 border-indigo-200'
    }
    const className = config[type] || 'bg-gray-100 text-gray-700 border-gray-200'
    return <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${className}`}>{type || 'Other'}</span>
  }

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

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
          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              />
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-[#888]">Loading events...</p>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#888]">
                {searchTerm ? 'No events found matching your search.' : 'No upcoming events at this time. Please check back later.'}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl border border-[#e8e0d4] overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {getTypeBadge(event.type)}
                      <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                        {event.price || 'Free'}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0a1628] mb-3">{event.title}</h3>
                    <p className="text-[#555] leading-relaxed mb-4">{event.description}</p>
                    <div className="space-y-2 text-sm text-[#555]">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-[#c9a84c]" />
                        <span>{new Date(event.date).toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-[#c9a84c]" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-[#c9a84c]" />
                          <span>{event.location}</span>
                        </div>
                      )}
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
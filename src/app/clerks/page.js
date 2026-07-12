'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, Users, Award, User, Briefcase, Building, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Breadcrumb from '@/app/components/Breadcrumb'

export default function ClerksPage() {
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchStaff()
  }, [])

  const fetchStaff = async () => {
    try {
      const res = await fetch('/api/admin/staff?limit=100')
      if (res.ok) {
        const data = await res.json()
        setStaff(data.staff || [])
      } else {
        setError('Failed to load staff')
      }
    } catch (error) {
      console.error('Error fetching staff:', error)
      setError('Failed to load staff')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <main className="w-full overflow-x-hidden">
        <Header />
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#888]">Loading staff...</p>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

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

      {/* ===== HERO SECTION - DARK WITH WHITE BREADCRUMB ===== */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb - White text */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <nav className="flex items-center gap-1 text-sm text-gray-300 py-3 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
              <Link href="/" className="flex items-center gap-1 hover:text-[#c9a84c] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
                </svg>
                <span>Home</span>
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-white font-medium">Clerks & Staff</span>
            </nav>
          </div>
          
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

      {/* ===== INTRODUCTORY PARAGRAPHS - COMPACT ===== */}
      <section className="py-3 md:py-4 bg-white border-b border-[#e8e0d4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#faf8f5] rounded-lg p-4 md:p-5 border-l-4 border-[#c9a84c]">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-[#0a1628] mb-1">The Backbone of Our Chambers</h2>
                <p className="text-[#555] text-sm leading-relaxed">
                  The clerks and administrative staff at G20 Chambers are the backbone of our operations. 
                  They manage court listings, client communications, scheduling, and the day-to-day running 
                  of the chambers. Our dedicated team ensures that our barristers can focus on what they do 
                  best - providing exceptional legal representation to our clients.
                </p>
                <p className="text-[#555] text-sm leading-relaxed mt-1.5">
                  From our experienced clerks who coordinate with courts and solicitors, to our administrative 
                  team who keep everything running smoothly, every member of our staff is committed to 
                  providing the highest level of service and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STAFF GRID ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200 mb-6 text-center">
              {error}
            </div>
          )}

          {staff.length === 0 && !error ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#faf8f5] flex items-center justify-center mb-4">
                <Users className="w-10 h-10 text-[#888]" />
              </div>
              <p className="text-[#888] text-lg">No staff members have been added yet.</p>
              <p className="text-[#888] text-sm mt-2">Staff will appear here once added through the admin panel.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staff.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl p-6 border border-[#e8e0d4] hover:shadow-lg transition-all hover:-translate-y-1 text-center group"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#0a1628] flex items-center justify-center text-white font-bold text-2xl overflow-hidden group-hover:bg-[#c9a84c] transition-colors">
                    {member.profileImage ? (
                      <img src={member.profileImage} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      member.name?.split(' ').map(n => n[0]).join('') || '?'
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1628] mt-4 group-hover:text-[#c9a84c] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#c9a84c] font-semibold">{member.role}</p>
                  {member.department && (
                    <p className="text-[#888] text-sm mt-1">{member.department}</p>
                  )}
                  {member.bio && (
                    <p className="text-[#555] text-sm mt-3 leading-relaxed line-clamp-3">{member.bio}</p>
                  )}
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

          {/* Staff Info Footer */}
          <div className="mt-12 bg-[#faf8f5] rounded-xl p-6 border border-[#e8e0d4] text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-[#555]">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>{staff.length} Staff Members</span>
              </div>
              <div className="flex items-center gap-2 text-[#555]">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>Dedicated Support Team</span>
              </div>
              <div className="flex items-center gap-2 text-[#555]">
                <div className="w-2 h-2 rounded-full bg-[#c9a84c]"></div>
                <span>Professional Service</span>
              </div>
            </div>
            <p className="text-[#555] text-sm max-w-lg mx-auto mt-3">
              The clerks and staff at G20 Chambers are dedicated to providing exceptional support 
              to our barristers and clients. They are the backbone of our chambers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
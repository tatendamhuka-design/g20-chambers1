'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Team() {
  const [barristers, setBarristers] = useState([])
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/barristers?limit=100').then(res => res.json()),
      fetch('/api/admin/staff?limit=100').then(res => res.json())
    ]).then(([barristersData, staffData]) => {
      // Parse practiceAreas for each barrister
      const parsedBarristers = (barristersData.barristers || []).map(barrister => ({
        ...barrister,
        practiceAreas: barrister.practiceAreas ? JSON.parse(barrister.practiceAreas) : []
      }))
      setBarristers(parsedBarristers)
      setStaff(staffData.staff || [])
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section className="section-padding bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#888]">Loading team...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="barristers" className="section-padding bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
            Our <span className="text-[#c9a84c]">Team</span>
          </h2>
          <p className="text-[#666] text-lg mt-2 max-w-2xl mx-auto">
            A group of passionate advocates committed to justice, supported by dedicated staff
          </p>
        </div>

        {/* Barristers */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-xl font-bold text-[#0a1628]">Barristers</h3>
            <div className="flex-1 h-px bg-[#e8e0d4]"></div>
            <span className="text-sm text-[#888]">{barristers.length} members</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {barristers.slice(0, 4).map((barrister) => (
              <TeamCard key={barrister.id} member={barrister} type="barrister" />
            ))}
          </div>
          {barristers.length > 4 && (
            <div className="text-center mt-6">
              <Link href="/barristers" className="text-[#c9a84c] font-semibold hover:underline">
                View all {barristers.length} barristers →
              </Link>
            </div>
          )}
        </div>

        {/* Staff */}
        {staff.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-xl font-bold text-[#0a1628]">Our Staff</h3>
              <div className="flex-1 h-px bg-[#e8e0d4]"></div>
              <span className="text-sm text-[#888]">{staff.length} members</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {staff.map((member) => (
                <TeamCard key={member.id} member={member} type="staff" />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function TeamCard({ member, type }) {
  const isBarrister = type === 'barrister'
  const isHead = member.title === 'Head of Chambers'
  
  const cardStyles = `bg-white rounded-xl p-6 text-center border hover:shadow-lg transition-all hover:-translate-y-1 ${
    isHead ? 'border-[#c9a84c] border-2 shadow-md' : 'border-[#e8e0d4]'
  }`

  const avatarStyles = `w-24 h-24 mx-auto rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 overflow-hidden ${
    isHead ? 'border-2 border-[#c9a84c]' : ''
  }`

  const initials = member.name?.split(' ').map(n => n[0]).join('') || '?'

  return (
    <div className={cardStyles}>
      <div className={avatarStyles}>
        {member.profileImage ? (
          <img src={member.profileImage} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${isHead ? 'bg-[#c9a84c]' : 'bg-[#0a1628]'}`}>
            {initials}
          </div>
        )}
      </div>

      {isHead && (
        <span className="inline-block bg-[#c9a84c] text-[#0a1628] text-xs font-bold tracking-wide uppercase px-3 py-0.5 rounded-full mb-2">
          Head of Chambers
        </span>
      )}

      <h3 className="text-lg font-bold text-[#0a1628]">{member.name}</h3>
      <p className={`${isHead ? 'text-[#c9a84c]' : 'text-[#888]'} text-sm font-semibold`}>
        {isBarrister ? member.title : member.role}
      </p>
      <p className="text-[#555] text-sm mt-2 leading-relaxed">
        {isBarrister ? (
          member.practiceAreas?.slice(0, 2).join(', ')
        ) : (
          member.department || member.bio
        )}
      </p>

      {isBarrister && member.slug && (
        <Link href={`/barristers/${member.slug}`} className="inline-block mt-4 text-[#c9a84c] font-semibold text-sm hover:underline">
          View full profile →
        </Link>
      )}
    </div>
  )
}
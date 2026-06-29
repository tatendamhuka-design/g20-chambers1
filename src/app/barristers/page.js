'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BarristerCard from '../components/BarristerCard'
import QuickViewModal from '../components/QuickViewModal'
import { barristers, practiceAreas, availabilityStatuses, getGroupedBarristers } from '@/data/barristers'

export default function BarristersPage() {
  const [selectedArea, setSelectedArea] = useState('All')
  const [selectedAvailability, setSelectedAvailability] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('seniority')
  const [selectedBarrister, setSelectedBarrister] = useState(null)

  // Get grouped barristers
  const groupedBarristers = getGroupedBarristers()

  // Filter barristers
  const filteredBarristers = barristers.filter(barrister => {
    const matchesArea = selectedArea === 'All' || barrister.practiceAreas.includes(selectedArea)
    const matchesAvailability = selectedAvailability === 'All' || barrister.availability === selectedAvailability
    const matchesSearch = barrister.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          barrister.practiceAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesArea && matchesAvailability && matchesSearch
  })

  // Sort barristers
  const sortedBarristers = [...filteredBarristers].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name)
    } else if (sortBy === 'seniority') {
      return a.yearOfCall - b.yearOfCall
    } else if (sortBy === 'seniority-desc') {
      return b.yearOfCall - a.yearOfCall
    } else if (sortBy === 'rating') {
      return (b.rating || 0) - (a.rating || 0)
    }
    return 0
  })

  const availabilityLabels = {
    accepting: 'Accepting New Cases',
    limited: 'Limited Availability',
    full: 'Not Accepting Cases',
  }

  const sortOptions = [
    { value: 'seniority', label: 'Seniority (Most Senior First)' },
    { value: 'seniority-desc', label: 'Seniority (Most Junior First)' },
    { value: 'name', label: 'Alphabetical (A-Z)' },
    { value: 'rating', label: 'Highest Rated First' },
  ]

  const hasActiveFilters = selectedArea !== 'All' || selectedAvailability !== 'All' || searchTerm

  return (
    <main>
      <Header />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] tracking-tight">
              Our <span className="text-[#c9a84c]">Barristers</span>
            </h1>
            <p className="text-[#666] text-lg mt-3 max-w-2xl mx-auto">
              Experienced advocates committed to your case. With expertise across multiple practice areas, our team is ready to fight for justice.
            </p>
          </div>

          <div className="bg-[#faf8f5] rounded-xl p-6 mb-8 flex flex-wrap justify-between items-center border border-[#e8e0d4]">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <span className="text-2xl font-extrabold text-[#0a1628]">{barristers.length}</span>
                <span className="text-[#555] ml-2">Barristers</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-[#0a1628]">{practiceAreas.length}</span>
                <span className="text-[#555] ml-2">Practice Areas</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold text-[#c9a84c]">{barristers.filter(b => b.availability === 'accepting').length}</span>
                <span className="text-[#555] ml-2">Available Now</span>
              </div>
            </div>
            <div className="text-sm text-[#888]">
              {filteredBarristers.length} of {barristers.length} shown
            </div>
          </div>

          <div className="bg-[#faf8f5] rounded-xl p-6 mb-8 border border-[#e8e0d4]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-4">
                <input
                  type="text"
                  placeholder="Search by name or practice area..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">
                  Area of Law
                </label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition bg-white text-[#0a1628] appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    paddingRight: '40px',
                  }}
                >
                  <option value="All">All Areas</option>
                  {practiceAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">
                  Availability
                </label>
                <select
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition bg-white text-[#0a1628] appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    paddingRight: '40px',
                  }}
                >
                  <option value="All">All</option>
                  {availabilityStatuses.map((status) => (
                    <option key={status} value={status}>{availabilityLabels[status]}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">
                  Sort by
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition bg-white text-[#0a1628] appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    paddingRight: '40px',
                  }}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="mt-4 pt-4 border-t border-[#e8e0d4] flex justify-end">
                <button
                  onClick={() => {
                    setSelectedArea('All')
                    setSelectedAvailability('All')
                    setSearchTerm('')
                  }}
                  className="text-sm text-[#c9a84c] font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Hierarchy Display */}
          {sortedBarristers.length > 0 ? (
            <div className="space-y-12">
              {groupedBarristers.map((group) => {
                // Filter group members
                const filteredMembers = group.members.filter(m => 
                  sortedBarristers.some(s => s.id === m.id)
                )
                if (filteredMembers.length === 0) return null

                return (
                  <div key={group.level}>
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="text-2xl font-bold text-[#0a1628]">
                        {group.label}
                      </h2>
                      <div className="flex-1 h-px bg-[#e8e0d4]"></div>
                      <span className="text-sm text-[#888] font-medium">
                        {filteredMembers.length} {filteredMembers.length === 1 ? 'member' : 'members'}
                      </span>
                    </div>

                    <div className={`grid gap-6 ${
                      group.level === 'head' 
                        ? 'grid-cols-1 md:grid-cols-1 max-w-md mx-auto' 
                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    }`}>
                      {filteredMembers.map((barrister) => (
                        <BarristerCard
                          key={barrister.id}
                          barrister={barrister}
                          onQuickView={setSelectedBarrister}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#888] text-lg">No barristers found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedArea('All')
                  setSelectedAvailability('All')
                  setSearchTerm('')
                }}
                className="mt-4 text-[#c9a84c] font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {selectedBarrister && (
        <QuickViewModal
          barrister={selectedBarrister}
          onClose={() => setSelectedBarrister(null)}
        />
      )}
    </main>
  )
}
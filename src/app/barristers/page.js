'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BarristerCard from '../components/BarristerCard'
import QuickViewModal from '../components/QuickViewModal'
import Breadcrumb from '../components/Breadcrumb'

export default function BarristersPage() {
  const [barristers, setBarristers] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedArea, setSelectedArea] = useState('All')
  const [selectedAvailability, setSelectedAvailability] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('seniority')
  const [selectedBarrister, setSelectedBarrister] = useState(null)
  const [practiceAreas, setPracticeAreas] = useState([])

  useEffect(() => {
    fetchBarristers()
  }, [])

  const fetchBarristers = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/barristers?limit=100')
      const data = await res.json()
      const barristersData = data.barristers || []
      
      const parsedBarristers = barristersData.map(barrister => ({
        ...barrister,
        practiceAreas: barrister.practiceAreas ? JSON.parse(barrister.practiceAreas) : []
      }))
      
      setBarristers(parsedBarristers)
      
      const areas = [...new Set(parsedBarristers.flatMap(b => b.practiceAreas))].sort()
      setPracticeAreas(areas)
    } catch (error) {
      console.error('Error fetching barristers:', error)
    } finally {
      setLoading(false)
    }
  }

  const availabilityLabels = {
    accepting: 'Accepting New Cases',
    limited: 'Limited Availability',
    full: 'Not Accepting Cases',
  }

  const availabilityStatuses = ['accepting', 'limited', 'full']

  const sortOptions = [
    { value: 'seniority', label: 'Seniority (Most Senior First)' },
    { value: 'seniority-desc', label: 'Seniority (Most Junior First)' },
    { value: 'name', label: 'Alphabetical (A-Z)' },
    { value: 'rating', label: 'Highest Rated First' },
  ]

  const filteredBarristers = barristers.filter(barrister => {
    const matchesArea = selectedArea === 'All' || barrister.practiceAreas.includes(selectedArea)
    const matchesAvailability = selectedAvailability === 'All' || barrister.availability === selectedAvailability
    const matchesSearch = barrister.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          barrister.practiceAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesArea && matchesAvailability && matchesSearch
  })

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

  const hasActiveFilters = selectedArea !== 'All' || selectedAvailability !== 'All' || searchTerm

  if (loading) {
    return (
      <main className="w-full overflow-x-hidden">
        <Header />
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <p className="text-[#888]">Loading barristers...</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumb items={[{ label: 'Barristers', href: '/barristers' }]} />
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] tracking-tight">
              Our <span className="text-[#c9a84c]">Barristers</span>
            </h1>
            <p className="text-[#666] text-lg mt-3 max-w-2xl mx-auto">
              Experienced advocates committed to your case. With expertise across multiple practice areas, our team is ready to fight for justice.
            </p>
          </div>

          {/* Stats Bar */}
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

          {/* Filters */}
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

          {/* Barristers Grid */}
          {sortedBarristers.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedBarristers.map((barrister) => (
                <BarristerCard
                  key={barrister.id}
                  barrister={barrister}
                  onQuickView={setSelectedBarrister}
                />
              ))}
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
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
      
      {/* ===== HERO SECTION - DARK WITH WHITE BREADCRUMB ===== */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 md:py-24 overflow-hidden">
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
              <span className="text-white font-medium">Barristers</span>
            </nav>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Our <span className="text-[#c9a84c]">Barristers</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              Experienced advocates committed to your case. With expertise across multiple practice areas, our team is ready to fight for justice.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* ===== FILTERS & BARRISTERS GRID ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
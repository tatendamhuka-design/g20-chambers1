'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Search, Edit, Trash2, Eye, CheckCircle, Clock, XCircle, ChevronLeft, ChevronRight } from 'lucide-react'

export default function AdminBarristers() {
  const [barristers, setBarristers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [deleting, setDeleting] = useState(null)

  const itemsPerPage = 10

  useEffect(() => {
    fetchBarristers()
  }, [currentPage, search])

  const fetchBarristers = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/barristers?page=${currentPage}&limit=${itemsPerPage}&search=${search}`)
      const data = await res.json()
      
      setBarristers(
        (data.barristers || []).map((barrister) => ({
          ...barrister,
          practiceAreas: Array.isArray(barrister.practiceAreas)
            ? barrister.practiceAreas
            : JSON.parse(barrister.practiceAreas || "[]"),
        }))
      )
      
      setTotalPages(data.totalPages || 1)
    } catch (error) {
      console.error('Error fetching advocates:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this advocate?')) return

    setDeleting(id)
    try {
      const res = await fetch(`/api/admin/barristers/${id}`, { method: 'DELETE' })
      if (res.ok) {
        fetchBarristers()
      } else {
        alert('Failed to delete advocate')
      }
    } catch (error) {
      console.error('Error deleting advocate:', error)
      alert('Failed to delete advocate')
    } finally {
      setDeleting(null)
    }
  }

  const toggleAvailability = async (id, currentStatus) => {
    const statusMap = {
      'accepting': 'limited',
      'limited': 'full',
      'full': 'accepting'
    }
    const newStatus = statusMap[currentStatus] || 'accepting'

    try {
      const res = await fetch(`/api/admin/barristers/${id}/availability`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ availability: newStatus })
      })
      if (res.ok) {
        fetchBarristers()
      }
    } catch (error) {
      console.error('Error updating availability:', error)
    }
  }

  const getAvailabilityBadge = (status) => {
    const config = {
      'accepting': { label: 'Accepting', className: 'bg-green-100 text-green-700 border-green-200' },
      'limited': { label: 'Limited', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
      'full': { label: 'Full', className: 'bg-red-100 text-red-700 border-red-200' }
    }
    const { label, className } = config[status] || config['full']
    return <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${className}`}>{label}</span>
  }

  const getAvailabilityIcon = (status) => {
    const icons = {
      'accepting': <CheckCircle className="w-4 h-4 text-green-600" />,
      'limited': <Clock className="w-4 h-4 text-yellow-600" />,
      'full': <XCircle className="w-4 h-4 text-red-600" />
    }
    return icons[status] || icons['full']
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">Advocates</h1>
          <p className="text-sm text-[#888] mt-1">Manage your advocates and their availability</p>
        </div>
        <Link
          href="/admin/barristers/new"
          className="flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] px-4 py-2.5 rounded-xl font-bold hover:bg-[#e0c66e] transition-all hover:scale-[1.02] text-sm whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Add Advocate
        </Link>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl p-4 border border-[#e8e0d4] mb-6 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
          <input
            type="text"
            placeholder="Search by name, title, or practice area..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#e8e0d4] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#faf8f5] border-b border-[#e8e0d4]">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider">Advocate</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden sm:table-cell">Title</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden md:table-cell">Practice Areas</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider">Availability</th>
                <th className="text-right px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-[#888]">Loading advocates...</td>
                </tr>
              ) : barristers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-[#888]">
                    {search ? 'No advocates found matching your search.' : 'No advocates added yet. Click "Add Advocate" to get started.'}
                  </td>
                </tr>
              ) : (
                barristers.map((barrister) => {
                  const practiceAreas = Array.isArray(barrister.practiceAreas) ? barrister.practiceAreas : []
                  const initials = barrister.name?.split(' ').map(n => n[0]).join('') || '?'

                  return (
                    <tr key={barrister.id} className="border-b border-[#e8e0d4] hover:bg-[#faf8f5] transition-colors">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#0a1628] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 overflow-hidden">
                            {barrister.profileImage ? (
                              <img src={barrister.profileImage} alt={barrister.name} className="w-full h-full object-cover" />
                            ) : (
                              initials
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-[#0a1628] truncate">{barrister.name || 'Unnamed'}</p>
                            <p className="text-xs text-[#888] sm:hidden">{barrister.title || 'No title'}</p>
                            <p className="text-xs text-[#888] hidden sm:block">Year: {barrister.yearOfCall || 'N/A'}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <span className="text-[#555]">{barrister.title || '-'}</span>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {practiceAreas.slice(0, 2).map((area, i) => (
                            <span key={i} className="bg-[#faf8f5] text-[#555] text-xs px-2 py-0.5 rounded-full border border-[#e8e0d4]">
                              {area}
                            </span>
                          ))}
                          {practiceAreas.length > 2 && (
                            <span className="text-[#888] text-xs">+{practiceAreas.length - 2}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => toggleAvailability(barrister.id, barrister.availability)}
                          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                          title="Click to change status"
                        >
                          {getAvailabilityIcon(barrister.availability)}
                          <span className="hidden sm:inline">{getAvailabilityBadge(barrister.availability)}</span>
                        </button>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1 sm:gap-2">
                          <Link
                            href={`/barristers/${barrister.slug}`}
                            target="_blank"
                            className="p-1.5 text-[#888] hover:text-[#c9a84c] transition-colors rounded-lg hover:bg-[#faf8f5]"
                            title="View on website"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <Link
                            href={`/admin/barristers/${barrister.id}/edit`}
                            className="p-1.5 text-[#888] hover:text-blue-600 transition-colors rounded-lg hover:bg-[#faf8f5]"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(barrister.id)}
                            disabled={deleting === barrister.id}
                            className="p-1.5 text-[#888] hover:text-red-600 transition-colors rounded-lg hover:bg-[#faf8f5] disabled:opacity-50"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 border-t border-[#e8e0d4] bg-[#faf8f5]">
            <p className="text-sm text-[#888]">
              Page {currentPage} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#e8e0d4] bg-white text-sm hover:bg-[#faf8f5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#e8e0d4] bg-white text-sm hover:bg-[#faf8f5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
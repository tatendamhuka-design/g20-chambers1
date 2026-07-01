'use client'

import { useState, useEffect } from 'react'
import { Search, Trash2, ChevronLeft, ChevronRight, Users, UserCheck, UserX, Mail } from 'lucide-react'

export default function AdminSubscribers() {
  const [subscribers, setSubscribers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [activeCount, setActiveCount] = useState(0)
  const [unsubscribedCount, setUnsubscribedCount] = useState(0)
  const [deleting, setDeleting] = useState(null)

  const itemsPerPage = 10

  useEffect(() => {
    fetchSubscribers()
  }, [currentPage, search, status])

  const fetchSubscribers = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/subscribers?page=${currentPage}&limit=${itemsPerPage}&search=${search}&status=${status}`)
      const data = await res.json()
      setSubscribers(data.subscribers || [])
      setTotalPages(data.totalPages || 1)
      setActiveCount(data.activeCount || 0)
      setUnsubscribedCount(data.unsubscribedCount || 0)
    } catch (error) {
      console.error('Error fetching subscribers:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this subscriber?')) return

    setDeleting(id)
    try {
      const res = await fetch(`/api/admin/subscribers/${id}`, { method: 'DELETE' })
      if (res.ok) {
        fetchSubscribers()
      } else {
        alert('Failed to delete subscriber')
      }
    } catch (error) {
      console.error('Error deleting subscriber:', error)
      alert('Failed to delete subscriber')
    } finally {
      setDeleting(null)
    }
  }

  const stats = [
    { label: 'Total', value: subscribers.length + (activeCount + unsubscribedCount > 0 ? 0 : 0), icon: Users, color: 'bg-blue-50 text-blue-600' },
    { label: 'Active', value: activeCount, icon: UserCheck, color: 'bg-green-50 text-green-600' },
    { label: 'Unsubscribed', value: unsubscribedCount, icon: UserX, color: 'bg-red-50 text-red-600' }
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">Subscribers</h1>
        <p className="text-sm text-[#888] mt-1">Manage your newsletter subscribers</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className={`bg-white rounded-xl p-4 border border-[#e8e0d4] shadow-sm`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#888]">{stat.label}</p>
                  <p className="text-xl font-extrabold text-[#0a1628]">{stat.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl p-4 border border-[#e8e0d4] mb-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
            <input
              type="text"
              placeholder="Search by email or name..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
            />
          </div>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full sm:w-40 px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm bg-white"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="unsubscribed">Unsubscribed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[#e8e0d4] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#faf8f5] border-b border-[#e8e0d4]">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider">Email</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden sm:table-cell">Name</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden md:table-cell">Status</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden lg:table-cell">Subscribed</th>
                <th className="text-right px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-[#888]">Loading subscribers...</td>
                </tr>
              ) : subscribers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-[#888]">
                    {search ? 'No subscribers found matching your search.' : 'No subscribers yet.'}
                  </td>
                </tr>
              ) : (
                subscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="border-b border-[#e8e0d4] hover:bg-[#faf8f5] transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#888]" />
                        <span className="font-medium text-[#0a1628]">{subscriber.email}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="text-[#555]">{subscriber.name || '—'}</span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                        subscriber.status === 'active' 
                          ? 'bg-green-100 text-green-700 border-green-200' 
                          : 'bg-red-100 text-red-700 border-red-200'
                      }`}>
                        {subscriber.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-[#555]">{new Date(subscriber.subscribedAt).toLocaleDateString()}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => handleDelete(subscriber.id)}
                        disabled={deleting === subscriber.id}
                        className="p-1.5 text-[#888] hover:text-red-600 transition-colors rounded-lg hover:bg-[#faf8f5] disabled:opacity-50"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
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
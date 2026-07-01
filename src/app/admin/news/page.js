'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Search, Edit, Trash2, Eye, ChevronLeft, ChevronRight } from 'lucide-react'

export default function AdminNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [deleting, setDeleting] = useState(null)

  const itemsPerPage = 10

  useEffect(() => {
    fetchNews()
  }, [currentPage, search])

  const fetchNews = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/news?page=${currentPage}&limit=${itemsPerPage}&search=${search}`)
      const data = await res.json()
      setNews(data.news || [])
      setTotalPages(data.totalPages || 1)
    } catch (error) {
      console.error('Error fetching news:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this news article?')) return

    setDeleting(id)
    try {
      const res = await fetch(`/api/admin/news/${id}`, { method: 'DELETE' })
      if (res.ok) {
        fetchNews()
      } else {
        alert('Failed to delete news article')
      }
    } catch (error) {
      console.error('Error deleting news:', error)
      alert('Failed to delete news article')
    } finally {
      setDeleting(null)
    }
  }

  const getCategoryBadge = (category) => {
    const config = {
      'case-update': { label: 'Case Update', className: 'bg-blue-100 text-blue-700 border-blue-200' },
      'chambers-news': { label: 'Chambers News', className: 'bg-green-100 text-green-700 border-green-200' },
      'legal-analysis': { label: 'Legal Analysis', className: 'bg-purple-100 text-purple-700 border-purple-200' },
      'event': { label: 'Event', className: 'bg-amber-100 text-amber-700 border-amber-200' },
      'press-release': { label: 'Press Release', className: 'bg-red-100 text-red-700 border-red-200' }
    }
    const { label, className } = config[category] || { label: category, className: 'bg-gray-100 text-gray-700 border-gray-200' }
    return <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${className}`}>{label}</span>
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">News & Articles</h1>
          <p className="text-sm text-[#888] mt-1">Manage your news articles and updates</p>
        </div>
        <Link
          href="/admin/news/new"
          className="flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] px-4 py-2.5 rounded-xl font-bold hover:bg-[#e0c66e] transition-all hover:scale-[1.02] text-sm whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Add News
        </Link>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl p-4 border border-[#e8e0d4] mb-6 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
          <input
            type="text"
            placeholder="Search by title or category..."
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
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider">Title</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden sm:table-cell">Category</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden md:table-cell">Author</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden lg:table-cell">Date</th>
                <th className="text-right px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-[#888]">Loading news...</td>
                </tr>
              ) : news.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-[#888]">
                    {search ? 'No news articles found matching your search.' : 'No news articles added yet. Click "Add News" to get started.'}
                  </td>
                </tr>
              ) : (
                news.map((item) => (
                  <tr key={item.id} className="border-b border-[#e8e0d4] hover:bg-[#faf8f5] transition-colors">
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-semibold text-[#0a1628]">{item.title}</p>
                        <p className="text-xs text-[#888] sm:hidden">{getCategoryBadge(item.category)}</p>
                        <p className="text-xs text-[#888] md:hidden lg:hidden">By: {item.author?.name || 'Unknown'}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      {getCategoryBadge(item.category)}
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-[#555]">{item.author?.name || 'Unknown'}</span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-[#555]">{new Date(item.publishedDate).toLocaleDateString()}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1 sm:gap-2">
                        <Link
                          href={`/news/${item.slug}`}
                          target="_blank"
                          className="p-1.5 text-[#888] hover:text-[#c9a84c] transition-colors rounded-lg hover:bg-[#faf8f5]"
                          title="View on website"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/news/${item.id}/edit`}
                          className="p-1.5 text-[#888] hover:text-blue-600 transition-colors rounded-lg hover:bg-[#faf8f5]"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(item.id)}
                          disabled={deleting === item.id}
                          className="p-1.5 text-[#888] hover:text-red-600 transition-colors rounded-lg hover:bg-[#faf8f5] disabled:opacity-50"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
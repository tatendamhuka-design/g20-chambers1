'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Search, Edit, Trash2, ChevronLeft, ChevronRight, UsersRound } from 'lucide-react'

export default function AdminStaff() {
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [deleting, setDeleting] = useState(null)

  const itemsPerPage = 10

  useEffect(() => {
    fetchStaff()
  }, [currentPage, search])

  const fetchStaff = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/staff?page=${currentPage}&limit=${itemsPerPage}&search=${search}`)
      const data = await res.json()
      setStaff(data.staff || [])
      setTotalPages(data.totalPages || 1)
    } catch (error) {
      console.error('Error fetching staff:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this staff member?')) return

    setDeleting(id)
    try {
      const res = await fetch(`/api/admin/staff/${id}`, { method: 'DELETE' })
      if (res.ok) {
        fetchStaff()
      } else {
        alert('Failed to delete staff member')
      }
    } catch (error) {
      console.error('Error deleting staff:', error)
      alert('Failed to delete staff member')
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">Staff</h1>
          <p className="text-sm text-[#888] mt-1">Manage your chambers staff</p>
        </div>
        <Link
          href="/admin/staff/new"
          className="flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] px-4 py-2.5 rounded-xl font-bold hover:bg-[#e0c66e] transition-all hover:scale-[1.02] text-sm whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Add Staff
        </Link>
      </div>

      <div className="bg-white rounded-xl p-4 border border-[#e8e0d4] mb-6 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
          <input
            type="text"
            placeholder="Search by name or role..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#e8e0d4] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#faf8f5] border-b border-[#e8e0d4]">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider">Name</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden sm:table-cell">Role</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden md:table-cell">Department</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden lg:table-cell">Contact</th>
                <th className="text-right px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-[#888]">Loading staff...</td>
                </tr>
              ) : staff.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-[#888]">
                    {search ? 'No staff found matching your search.' : 'No staff added yet. Click "Add Staff" to get started.'}
                  </td>
                </tr>
              ) : (
                staff.map((member) => (
                  <tr key={member.id} className="border-b border-[#e8e0d4] hover:bg-[#faf8f5] transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0a1628] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 overflow-hidden">
                          {member.profileImage ? (
                            <img src={member.profileImage} alt={member.name} className="w-full h-full object-cover" />
                          ) : (
                            member.name?.split(' ').map(n => n[0]).join('') || '?'
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-[#0a1628]">{member.name}</p>
                          <p className="text-xs text-[#888] sm:hidden">{member.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="text-[#555]">{member.role}</span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-[#555]">{member.department || '—'}</span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <div className="text-xs text-[#555]">
                        {member.email && <div>{member.email}</div>}
                        {member.phone && <div>{member.phone}</div>}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1 sm:gap-2">
                        <Link
                          href={`/admin/staff/${member.id}/edit`}
                          className="p-1.5 text-[#888] hover:text-blue-600 transition-colors rounded-lg hover:bg-[#faf8f5]"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(member.id)}
                          disabled={deleting === member.id}
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

        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 border-t border-[#e8e0d4] bg-[#faf8f5]">
            <p className="text-sm text-[#888]">Page {currentPage} of {totalPages}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#e8e0d4] bg-white text-sm hover:bg-[#faf8f5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#e8e0d4] bg-white text-sm hover:bg-[#faf8f5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
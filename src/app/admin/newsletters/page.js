'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Send, FileText, Mail, CheckCircle, Clock, Trash2 } from 'lucide-react'

export default function AdminNewsletters() {
  const [newsletters, setNewsletters] = useState([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchNewsletters()
  }, [])

  const fetchNewsletters = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/newsletters')
      const data = await res.json()
      setNewsletters(data.newsletters || [])
    } catch (error) {
      console.error('Error fetching newsletters:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSend = async (id) => {
    if (!confirm('Are you sure you want to send this newsletter to all active subscribers?')) return

    setSending(id)
    setMessage('')
    try {
      const res = await fetch(`/api/admin/newsletters/${id}/send`, {
        method: 'POST'
      })
      const data = await res.json()
      
      if (res.ok) {
        setMessage(`✅ ${data.message || 'Newsletter sent successfully!'}`)
        fetchNewsletters()
      } else {
        setMessage(`❌ ${data.error || 'Failed to send newsletter'}`)
      }
    } catch (error) {
      console.error('Error sending newsletter:', error)
      setMessage('❌ Failed to send newsletter')
    } finally {
      setSending(null)
    }
  }

  const getStatusBadge = (status) => {
    const config = {
      'draft': { label: 'Draft', className: 'bg-gray-100 text-gray-700 border-gray-200' },
      'sent': { label: 'Sent', className: 'bg-green-100 text-green-700 border-green-200' },
      'scheduled': { label: 'Scheduled', className: 'bg-amber-100 text-amber-700 border-amber-200' }
    }
    const { label, className } = config[status] || config['draft']
    return <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${className}`}>{label}</span>
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">Newsletters</h1>
          <p className="text-sm text-[#888] mt-1">Create and send newsletters to subscribers</p>
        </div>
        <Link
          href="/admin/newsletters/new"
          className="flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] px-4 py-2.5 rounded-xl font-bold hover:bg-[#e0c66e] transition-all hover:scale-[1.02] text-sm whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Create Newsletter
        </Link>
      </div>

      {message && (
        <div className={`p-4 rounded-xl mb-6 ${message.includes('✅') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
          {message}
        </div>
      )}

      <div className="bg-white rounded-xl border border-[#e8e0d4] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#faf8f5] border-b border-[#e8e0d4]">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider">Subject</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden sm:table-cell">Status</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden md:table-cell">Recipients</th>
                <th className="text-left px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider hidden lg:table-cell">Created</th>
                <th className="text-right px-4 py-3 font-semibold text-[#888] uppercase text-xs tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-[#888]">Loading newsletters...</td>
                </tr>
              ) : newsletters.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-[#888]">
                    No newsletters created yet. Click "Create Newsletter" to get started.
                  </td>
                </tr>
              ) : (
                newsletters.map((newsletter) => (
                  <tr key={newsletter.id} className="border-b border-[#e8e0d4] hover:bg-[#faf8f5] transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#888]" />
                        <span className="font-medium text-[#0a1628]">{newsletter.subject}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      {getStatusBadge(newsletter.status)}
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-[#555]">{newsletter.recipients || 0}</span>
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-[#555]">{new Date(newsletter.createdAt).toLocaleDateString()}</span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1 sm:gap-2">
                        {newsletter.status !== 'sent' && (
                          <button
                            onClick={() => handleSend(newsletter.id)}
                            disabled={sending === newsletter.id}
                            className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                          >
                            <Send className="w-3 h-3" />
                            {sending === newsletter.id ? 'Sending...' : 'Send'}
                          </button>
                        )}
                        <Link
                          href={`/admin/newsletters/${newsletter.id}/edit`}
                          className="p-1.5 text-[#888] hover:text-blue-600 transition-colors rounded-lg hover:bg-[#faf8f5]"
                        >
                          <FileText className="w-4 h-4" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save } from 'lucide-react'

export default function CreateNewsletter() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    subject: '',
    content: '',
    status: 'draft'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!formData.subject) {
      setError('Subject is required.')
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/admin/newsletters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.push('/admin/newsletters')
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to create newsletter')
      }
    } catch (error) {
      console.error('Error creating newsletter:', error)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/newsletters" className="p-2 hover:bg-[#faf8f5] rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-[#888]" />
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">Create Newsletter</h1>
          <p className="text-sm text-[#888] mt-1">Compose a new newsletter for subscribers</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200 mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-4 sm:p-6 border border-[#e8e0d4] shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
            placeholder="Newsletter subject"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Content (HTML)</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="12"
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm resize-none"
            placeholder="Write your newsletter content in HTML format...<br><p>Hello subscribers!</p>"
          />
          <p className="text-xs text-[#888] mt-1">HTML content is supported for formatting</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm bg-white"
          >
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
          </select>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e8e0d4]">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] px-6 py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all hover:scale-[1.01] disabled:opacity-70 text-sm"
          >
            <Save className="w-4 h-4" />
            {loading ? 'Creating...' : 'Create Newsletter'}
          </button>
          <Link
            href="/admin/newsletters"
            className="flex-1 flex items-center justify-center gap-2 bg-[#faf8f5] text-[#555] px-6 py-3 font-medium rounded-xl hover:bg-[#e8e0d4] transition-all text-sm border border-[#e8e0d4]"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}
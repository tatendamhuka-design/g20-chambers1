'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Calendar } from 'lucide-react'
import ImageUpload from '@/app/components/ImageUpload'

export default function EditEvent({ params }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    type: '',
    price: '',
    image: '',
    seoMetaTitle: '',
    seoMetaDesc: ''
  })

  useEffect(() => {
    fetchEvent()
  }, [])

  const fetchEvent = async () => {
    try {
      const res = await fetch(`/api/admin/events/${params.id}`)
      if (res.ok) {
        const data = await res.json()
        setFormData({
          ...data,
          date: data.date ? new Date(data.date).toISOString().split('T')[0] : ''
        })
      } else {
        setError('Failed to load event')
      }
    } catch (error) {
      setError('Failed to load event')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    if (!formData.title || !formData.date) {
      setError('Title and date are required.')
      setSaving(false)
      return
    }

    try {
      const res = await fetch(`/api/admin/events/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.push('/admin/events')
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to update event')
      }
    } catch (error) {
      console.error('Error updating event:', error)
      setError('Something went wrong. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const eventTypes = [
    'Information Session',
    'Conference',
    'Open Evening',
    'Training',
    'Seminar',
    'Other'
  ]

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl mx-auto">
        <div className="text-center py-12 text-[#888]">Loading event...</div>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/events" className="p-2 hover:bg-[#faf8f5] rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-[#888]" />
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">Edit Event</h1>
          <p className="text-sm text-[#888] mt-1">Update the event details</p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200 mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-4 sm:p-6 border border-[#e8e0d4] shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Date *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Time</label>
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Event Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm bg-white"
            >
              <option value="">Select type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
            />
          </div>
        </div>

        {/* EVENT IMAGE - WITH UPLOAD */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Event Image</label>
          <ImageUpload
            folder="events"
            onUpload={(url) => setFormData(prev => ({ ...prev, image: url }))}
            existingImage={formData.image}
            className="mb-2"
          />
          <p className="text-xs text-[#888] mt-1">Upload an event image (recommended: 1200x630px). JPG, PNG, or WebP format.</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">SEO Meta Title</label>
            <input
              type="text"
              name="seoMetaTitle"
              value={formData.seoMetaTitle}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">SEO Meta Description</label>
            <input
              type="text"
              name="seoMetaDesc"
              value={formData.seoMetaDesc}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e8e0d4]">
          <button
            type="submit"
            disabled={saving}
            className="flex-1 flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] px-6 py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all hover:scale-[1.01] disabled:opacity-70 text-sm"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          <Link
            href="/admin/events"
            className="flex-1 flex items-center justify-center gap-2 bg-[#faf8f5] text-[#555] px-6 py-3 font-medium rounded-xl hover:bg-[#e8e0d4] transition-all text-sm border border-[#e8e0d4]"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}
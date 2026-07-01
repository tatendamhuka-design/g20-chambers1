'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save } from 'lucide-react'

export default function EditNews({ params }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [barristers, setBarristers] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    authorId: '',
    featuredImage: '',
    excerpt: '',
    content: '',
    publishedDate: '',
    seoMetaTitle: '',
    seoMetaDesc: ''
  })

  useEffect(() => {
    fetchNews()
    fetchBarristers()
  }, [])

  const fetchNews = async () => {
    try {
      const res = await fetch(`/api/admin/news/${params.id}`)
      if (res.ok) {
        const data = await res.json()
        setFormData({
          ...data,
          publishedDate: data.publishedDate ? new Date(data.publishedDate).toISOString().split('T')[0] : ''
        })
      } else {
        setError('Failed to load news article')
      }
    } catch (error) {
      setError('Failed to load news article')
    } finally {
      setLoading(false)
    }
  }

  const fetchBarristers = async () => {
    try {
      const res = await fetch('/api/admin/barristers?limit=100')
      const data = await res.json()
      setBarristers(data.barristers || [])
    } catch (error) {
      console.error('Error fetching barristers:', error)
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

    if (!formData.title || !formData.category) {
      setError('Title and category are required.')
      setSaving(false)
      return
    }

    try {
      const res = await fetch(`/api/admin/news/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        router.push('/admin/news')
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to update news article')
      }
    } catch (error) {
      console.error('Error updating news:', error)
      setError('Something went wrong. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const categories = [
    { value: 'case-update', label: 'Case Update' },
    { value: 'chambers-news', label: 'Chambers News' },
    { value: 'legal-analysis', label: 'Legal Analysis' },
    { value: 'event', label: 'Event' },
    { value: 'press-release', label: 'Press Release' }
  ]

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl mx-auto">
        <div className="text-center py-12 text-[#888]">Loading news article...</div>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/news" className="p-2 hover:bg-[#faf8f5] rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-[#888]" />
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">Edit News Article</h1>
          <p className="text-sm text-[#888] mt-1">Update the news article</p>
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
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm bg-white"
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Author</label>
            <select
              name="authorId"
              value={formData.authorId}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm bg-white"
            >
              <option value="">Select author</option>
              {barristers.map((barrister) => (
                <option key={barrister.id} value={barrister.id}>{barrister.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Featured Image URL</label>
          <input
            type="text"
            name="featuredImage"
            value={formData.featuredImage}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows="2"
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="8"
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Published Date</label>
          <input
            type="date"
            name="publishedDate"
            value={formData.publishedDate}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
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
            href="/admin/news"
            className="flex-1 flex items-center justify-center gap-2 bg-[#faf8f5] text-[#555] px-6 py-3 font-medium rounded-xl hover:bg-[#e8e0d4] transition-all text-sm border border-[#e8e0d4]"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}
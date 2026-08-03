'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, X, Plus, Trash2 } from 'lucide-react'
import ImageUpload from '@/app/components/ImageUpload'

export default function EditBarrister({ params }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    titlePrefix: '',
    currentPosition: '',
    yearOfCall: '',
    practiceAreas: [],
    availability: 'accepting',
    bio: '',
    email: '',
    phone: '',
    education: '',
    profileImage: '',
    socialLinks: { linkedin: '', twitter: '' },
    notableCases: [],
    reviews: []
  })

  const [newPracticeArea, setNewPracticeArea] = useState('')
  const [newCase, setNewCase] = useState({ title: '', year: '', description: '' })
  const [newReview, setNewReview] = useState({ client: '', rating: 5, comment: '' })

  const titlePrefixOptions = [
    { value: '', label: 'Select title prefix' },
    { value: 'Adv.', label: 'Adv.' },
    { value: 'Junior Council', label: 'Junior Council' },
    { value: 'Mr.', label: 'Mr.' },
    { value: 'Mrs.', label: 'Mrs.' },
    { value: 'Ms.', label: 'Ms.' },
    { value: 'Dr.', label: 'Dr.' },
  ]

  const currentPositionOptions = [
    { value: '', label: 'Select current position' },
    { value: 'Head of Chambers', label: 'Head of Chambers' },
    { value: 'Senior Advocate', label: 'Senior Advocate' },
    { value: 'Advocate', label: 'Advocate' },
    { value: 'Junior Advocate', label: 'Junior Advocate' },
    { value: 'Junior Council', label: 'Junior Council' },  // ← Added here
    { value: 'Pupil', label: 'Pupil' },
    { value: 'Council Member', label: 'Council Member' },
  ]

  const practiceAreaOptions = [
    'Criminal Law', 'Human Rights', 'Civil Litigation', 'Family Law',
    'Immigration Law', 'Employment Law', 'Public Law', 'Administrative Law',
    'Property Law', 'Constitutional Law'
  ]

  useEffect(() => {
    fetchBarrister()
  }, [])

  const fetchBarrister = async () => {
    try {
      const res = await fetch(`/api/admin/barristers/${params.id}`)
      if (res.ok) {
        const data = await res.json()
        
        let practiceAreas = []
        try {
          if (typeof data.practiceAreas === 'string') {
            practiceAreas = JSON.parse(data.practiceAreas)
          } else if (Array.isArray(data.practiceAreas)) {
            practiceAreas = data.practiceAreas
          }
        } catch (e) {
          console.warn('Error parsing practiceAreas:', e)
          practiceAreas = []
        }

        setFormData({
          ...data,
          yearOfCall: data.yearOfCall || '',
          titlePrefix: data.titlePrefix || '',
          currentPosition: data.currentPosition || '',
          practiceAreas: practiceAreas,
          socialLinks: data.socialLinks || { linkedin: '', twitter: '' },
          notableCases: data.notableCases || [],
          reviews: data.reviews || []
        })
      } else {
        setError('Failed to load advocate profile')
      }
    } catch (error) {
      setError('Failed to load advocate profile')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSocialChange = (platform, value) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, [platform]: value }
    }))
  }

  const addPracticeArea = (e) => {
    e.preventDefault()
    if (newPracticeArea && !formData.practiceAreas.includes(newPracticeArea)) {
      setFormData(prev => ({
        ...prev,
        practiceAreas: [...prev.practiceAreas, newPracticeArea]
      }))
      setNewPracticeArea('')
    }
  }

  const removePracticeArea = (area) => {
    setFormData(prev => ({
      ...prev,
      practiceAreas: prev.practiceAreas.filter(a => a !== area)
    }))
  }

  const addCase = (e) => {
    e.preventDefault()
    if (newCase.title && newCase.year) {
      setFormData(prev => ({
        ...prev,
        notableCases: [...prev.notableCases, { ...newCase }]
      }))
      setNewCase({ title: '', year: '', description: '' })
    }
  }

  const removeCase = (index) => {
    setFormData(prev => ({
      ...prev,
      notableCases: prev.notableCases.filter((_, i) => i !== index)
    }))
  }

  const addReview = (e) => {
    e.preventDefault()
    if (newReview.client && newReview.comment) {
      setFormData(prev => ({
        ...prev,
        reviews: [...prev.reviews, { ...newReview, date: new Date().toISOString().split('T')[0] }]
      }))
      setNewReview({ client: '', rating: 5, comment: '' })
    }
  }

  const removeReview = (index) => {
    setFormData(prev => ({
      ...prev,
      reviews: prev.reviews.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')

    if (!formData.name || !formData.title) {
      setError('Name and title are required.')
      setSaving(false)
      return
    }

    try {
      const res = await fetch(`/api/admin/barristers/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          yearOfCall: parseInt(formData.yearOfCall) || null,
          practiceAreas: formData.practiceAreas,
          socialLinks: formData.socialLinks,
          notableCases: formData.notableCases,
          reviews: formData.reviews
        })
      })

      if (res.ok) {
        router.push('/admin/barristers')
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Failed to update advocate profile')
      }
    } catch (error) {
      console.error('Error updating advocate:', error)
      setError('Something went wrong. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl mx-auto">
        <div className="text-center py-12 text-[#888]">Loading advocate profile...</div>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/admin/barristers"
          className="p-2 hover:bg-[#faf8f5] rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-[#888]" />
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">Edit Advocate</h1>
          <p className="text-sm text-[#888] mt-1">Update advocate profile</p>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-200 mb-6">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-4 sm:p-6 border border-[#e8e0d4] shadow-sm space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Title Prefix</label>
            <select
              name="titlePrefix"
              value={formData.titlePrefix}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm bg-white"
            >
              {titlePrefixOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Current Position</label>
            <select
              name="currentPosition"
              value={formData.currentPosition}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm bg-white"
            >
              {currentPositionOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              placeholder="Mathabatha"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Title *</label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm bg-white"
            >
              <option value="">Select title</option>
              <option value="Head of Chambers">Head of Chambers</option>
              <option value="Senior Advocate">Senior Advocate</option>
              <option value="Advocate">Advocate</option>
              <option value="Junior Advocate">Junior Advocate</option>
              <option value="Junior Council">Junior Council</option>
              <option value="Pupil">Pupil</option>
              <option value="Council Member">Council Member</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Year of Call</label>
            <input
              type="number"
              name="yearOfCall"
              value={formData.yearOfCall}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              placeholder="2005"
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Availability</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm bg-white"
            >
              <option value="accepting">Accepting New Cases</option>
              <option value="limited">Limited Availability</option>
              <option value="full">Not Accepting Cases</option>
            </select>
          </div>
        </div>

        {/* Practice Areas */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Practice Areas</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {formData.practiceAreas.map((area) => (
              <span key={area} className="flex items-center gap-1 bg-[#faf8f5] text-[#555] text-sm px-3 py-1 rounded-full border border-[#e8e0d4]">
                {area}
                <button type="button" onClick={() => removePracticeArea(area)} className="text-[#888] hover:text-red-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newPracticeArea}
              onChange={(e) => setNewPracticeArea(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              placeholder="Add practice area"
              list="practiceAreaOptions"
            />
            <datalist id="practiceAreaOptions">
              {practiceAreaOptions.map((area) => (
                <option key={area} value={area} />
              ))}
            </datalist>
            <button
              type="button"
              onClick={addPracticeArea}
              className="px-4 py-2.5 bg-[#0a1628] text-white rounded-lg hover:bg-[#1a2a3a] transition-colors text-sm font-medium whitespace-nowrap"
            >
              Add
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              placeholder="cali.mathabatha@gmail.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              placeholder="082 341 3333"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
            placeholder="LLB, University of Limpopo"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Biography</label>
          <textarea
            name="bio"
            value={formData.bio || ''}
            onChange={handleChange}
            rows="6"
            className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm resize-none"
            placeholder="Write a detailed biography of the advocate..."
          />
        </div>

        {/* Profile Image */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Profile Image</label>
          <ImageUpload
            folder="barristers"
            onUpload={(url) => setFormData(prev => ({ ...prev, profileImage: url }))}
            existingImage={formData.profileImage}
            className="mb-2"
          />
          <p className="text-xs text-[#888] mt-1">Upload a square image (recommended: 400x400px). JPG, PNG, or WebP format.</p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">LinkedIn URL</label>
            <input
              type="text"
              value={formData.socialLinks?.linkedin || ''}
              onChange={(e) => handleSocialChange('linkedin', e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              placeholder="https://linkedin.com/in/..."
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Twitter URL</label>
            <input
              type="text"
              value={formData.socialLinks?.twitter || ''}
              onChange={(e) => handleSocialChange('twitter', e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              placeholder="https://twitter.com/..."
            />
          </div>
        </div>

        {/* Notable Cases */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Notable Cases</label>
          {formData.notableCases?.map((caseItem, index) => (
            <div key={index} className="flex items-start gap-2 bg-[#faf8f5] p-3 rounded-lg mb-2">
              <div className="flex-1">
                <p className="font-medium text-sm text-[#0a1628]">{caseItem.title}</p>
                <p className="text-sm text-[#555]">{caseItem.description}</p>
                <p className="text-xs text-[#888]">Year: {caseItem.year}</p>
              </div>
              <button type="button" onClick={() => removeCase(index)} className="text-[#888] hover:text-red-500 mt-1">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <input
              type="text"
              value={newCase.title}
              onChange={(e) => setNewCase({ ...newCase, title: e.target.value })}
              className="px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              placeholder="Case title"
            />
            <input
              type="text"
              value={newCase.year}
              onChange={(e) => setNewCase({ ...newCase, year: e.target.value })}
              className="px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              placeholder="Year"
            />
            <button
              type="button"
              onClick={addCase}
              className="flex items-center justify-center gap-1 px-4 py-2.5 bg-[#0a1628] text-white rounded-lg hover:bg-[#1a2a3a] transition-colors text-sm font-medium"
            >
              <Plus className="w-4 h-4" /> Add Case
            </button>
          </div>
          <input
            type="text"
            value={newCase.description}
            onChange={(e) => setNewCase({ ...newCase, description: e.target.value })}
            className="w-full mt-2 px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
            placeholder="Case description"
          />
        </div>

        {/* Reviews */}
        <div>
          <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">Client Reviews</label>
          {formData.reviews?.map((review, index) => (
            <div key={index} className="flex items-start gap-2 bg-[#faf8f5] p-3 rounded-lg mb-2">
              <div className="flex-1">
                <p className="font-medium text-sm text-[#0a1628]">{review.client}</p>
                <p className="text-sm text-[#555]">{review.comment}</p>
                <p className="text-xs text-[#888]">Rating: {review.rating}★ • {review.date}</p>
              </div>
              <button type="button" onClick={() => removeReview(index)} className="text-[#888] hover:text-red-500 mt-1">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <input
              type="text"
              value={newReview.client}
              onChange={(e) => setNewReview({ ...newReview, client: e.target.value })}
              className="px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              placeholder="Client name"
            />
            <input
              type="number"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              min="1"
              max="5"
              className="px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              placeholder="Rating (1-5)"
            />
            <button
              type="button"
              onClick={addReview}
              className="flex items-center justify-center gap-1 px-4 py-2.5 bg-[#0a1628] text-white rounded-lg hover:bg-[#1a2a3a] transition-colors text-sm font-medium"
            >
              <Plus className="w-4 h-4" /> Add Review
            </button>
          </div>
          <textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="w-full mt-2 px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm resize-none"
            placeholder="Review comment"
            rows="2"
          />
        </div>

        {/* Submit Button */}
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
            href="/admin/barristers"
            className="flex-1 flex items-center justify-center gap-2 bg-[#faf8f5] text-[#555] px-6 py-3 font-medium rounded-xl hover:bg-[#e8e0d4] transition-all text-sm border border-[#e8e0d4]"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}
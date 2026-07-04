'use client'

import { useState } from 'react'
import { Upload, X, Loader2, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function ImageUpload({ 
  onUpload, 
  folder = 'barristers',
  existingImage = '',
  label = 'Upload Image',
  className = ''
}) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState(existingImage)
  const [error, setError] = useState('')
  const [dragActive, setDragActive] = useState(false)

  const handleFile = async (file) => {
    if (!file) return

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg']
    if (!validTypes.includes(file.type)) {
      setError('Please upload a JPG, PNG, or WebP image')
      return
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be less than 5MB')
      return
    }

    setUploading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', folder)

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (res.ok) {
        setPreview(data.url)
        onUpload(data.url)
      } else {
        setError(data.error || 'Upload failed')
      }
    } catch (error) {
      setError('Upload failed. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDragActive(false)
  }

  const handleChange = (e) => {
    const file = e.target.files[0]
    if (file) handleFile(file)
  }

  const removeImage = () => {
    setPreview('')
    onUpload('')
  }

  return (
    <div className={className}>
      {preview ? (
        <div className="relative group">
          <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-[#e8e0d4]">
            <Image
              src={preview}
              alt="Uploaded image"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={removeImage}
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              title="Remove image"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-[#888] mt-1 truncate w-32">
            {preview.split('/').pop()}
          </p>
        </div>
      ) : (
        <div
          className={`relative border-2 border-dashed rounded-lg p-6 text-center transition ${
            dragActive 
              ? 'border-[#c9a84c] bg-[#c9a84c]/5' 
              : 'border-[#e8e0d4] hover:border-[#c9a84c]'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 text-[#c9a84c] animate-spin" />
              <p className="text-sm text-[#888]">Uploading...</p>
            </div>
          ) : (
            <>
              <Upload className="w-8 h-8 text-[#888] mx-auto mb-2" />
              <p className="text-sm text-[#888]">
                Drag & drop or click to upload
              </p>
              <p className="text-xs text-[#aaa] mt-1">
                JPG, PNG, WebP • Max 5MB
              </p>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </>
          )}
        </div>
      )}
      
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
}
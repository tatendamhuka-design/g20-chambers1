'use client'

import { useEffect } from 'react'
import { X, Mail, Phone, Calendar, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import StarRating from './StarRating'
import AvailabilityBadge from './AvailabilityBadge'

export default function QuickViewModal({ barrister, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  if (!barrister) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-[#faf8f5] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-[#888]" />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar with Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-[#0a1628] flex items-center justify-center text-3xl font-bold text-white overflow-hidden">
              {barrister.profileImage ? (
                <img 
                  src={barrister.profileImage} 
                  alt={barrister.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                barrister.name.split(' ').map(n => n[0]).join('')
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-2xl font-bold text-[#0a1628]">{barrister.name}</h3>
                <p className="text-[#c9a84c] font-semibold">{barrister.title}</p>
                <p className="text-[#888] text-sm">Year of Call: {barrister.yearOfCall}</p>
              </div>
              <AvailabilityBadge status={barrister.availability} />
            </div>

            {/* Rating */}
            <div className="mt-3">
              <StarRating rating={barrister.rating} reviewCount={barrister.reviewCount} />
            </div>

            {/* Practice Areas */}
            <div className="flex flex-wrap gap-2 mt-3">
              {barrister.practiceAreas.map((area, index) => (
                <span key={index} className="bg-[#faf8f5] text-[#555] text-xs px-3 py-1 rounded-full border border-[#e8e0d4]">
                  {area}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-4 space-y-1.5 text-sm">
              <div className="flex items-center gap-2 text-[#555]">
                <Mail className="w-4 h-4 text-[#c9a84c]" />
                <a href={`mailto:${barrister.email}`} className="hover:text-[#c9a84c] transition-colors">
                  {barrister.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#555]">
                <Phone className="w-4 h-4 text-[#c9a84c]" />
                <a href={`tel:${barrister.phone}`} className="hover:text-[#c9a84c] transition-colors">
                  {barrister.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#555]">
                <Calendar className="w-4 h-4 text-[#c9a84c]" />
                <span>Called: {barrister.yearOfCall}</span>
              </div>
            </div>

            {/* Quick Bio */}
            <p className="mt-4 text-sm text-[#555] line-clamp-3">{barrister.bio}</p>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={`/barristers/${barrister.slug}`}
                className="bg-[#c9a84c] text-[#0a1628] px-6 py-2.5 font-bold rounded hover:bg-[#e0c66e] transition-colors text-sm"
              >
                View Full Profile
              </Link>
              <a
                href={`mailto:${barrister.email}`}
                className="bg-[#faf8f5] text-[#0a1628] px-6 py-2.5 font-semibold rounded hover:bg-[#e8e0d4] transition-colors text-sm border border-[#e8e0d4]"
              >
                Send Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
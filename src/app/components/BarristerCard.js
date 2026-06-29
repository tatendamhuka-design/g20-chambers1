'use client'

import Link from 'next/link'
import StarRating from './StarRating'
import AvailabilityBadge from './AvailabilityBadge'

export default function BarristerCard({ barrister, onQuickView }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-[#e8e0d4] hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group h-full flex flex-col">
      {/* Avatar / Image */}
      <div className="w-24 h-24 mx-auto rounded-full bg-[#0a1628] flex items-center justify-center text-2xl font-bold text-white mb-4 group-hover:bg-[#c9a84c] transition-colors">
        {barrister.name.split(' ').map(n => n[0]).join('')}
      </div>

      {/* Name & Title */}
      <h3 className="text-lg font-bold text-[#0a1628] text-center group-hover:text-[#c9a84c] transition-colors">
        {barrister.name}
      </h3>
      <p className="text-[#c9a84c] text-sm font-semibold text-center">{barrister.title}</p>
      <p className="text-[#888] text-xs text-center mt-1">Year of Call: {barrister.yearOfCall}</p>

      {/* Rating */}
      <div className="flex justify-center mt-2">
        <StarRating rating={barrister.rating} reviewCount={barrister.reviewCount} size="sm" />
      </div>

      {/* Availability */}
      <div className="flex justify-center mt-2">
        <AvailabilityBadge status={barrister.availability} />
      </div>

      {/* Practice Areas */}
      <div className="flex flex-wrap gap-1.5 justify-center mt-3">
        {barrister.practiceAreas.slice(0, 3).map((area, index) => (
          <span key={index} className="bg-[#faf8f5] text-[#555] text-xs px-3 py-1 rounded-full border border-[#e8e0d4]">
            {area}
          </span>
        ))}
        {barrister.practiceAreas.length > 3 && (
          <span className="text-[#888] text-xs px-2 py-1">+{barrister.practiceAreas.length - 3}</span>
        )}
      </div>

      {/* Actions */}
      <div className="mt-4 flex gap-2 justify-center">
        <Link
          href={`/barristers/${barrister.slug}`}
          className="text-[#c9a84c] font-semibold text-sm hover:underline"
        >
          View Profile →
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault()
            onQuickView(barrister)
          }}
          className="text-[#888] font-semibold text-sm hover:text-[#c9a84c] transition-colors"
        >
          Quick View
        </button>
      </div>
    </div>
  )
}
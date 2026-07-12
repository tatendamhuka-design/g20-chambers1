'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PageHero({ 
  title, 
  subtitle, 
  breadcrumb, 
  showBackButton = false,
  backLink = '/',
  backLabel = 'Back',
  className = ''
}) {
  return (
    <section className={`relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 md:py-24 overflow-hidden ${className}`}>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        {showBackButton && (
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors mb-4 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>
        )}

        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="text-sm text-gray-400 mb-3">
            {breadcrumb.map((item, index) => (
              <span key={index}>
                {index > 0 && ' / '}
                {item.href ? (
                  <Link href={item.href} className="hover:text-[#c9a84c] transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white">{item.label}</span>
                )}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-300 text-lg mt-3 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Gold Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
    </section>
  )
}
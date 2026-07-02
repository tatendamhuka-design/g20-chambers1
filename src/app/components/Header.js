'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Barristers', href: '/barristers' },
  { name: 'Clerks & Staff', href: '/clerks' },
  { name: 'Areas of Law', href: '/areas' },  // ← This is the link
  { name: 'Public Access', href: '/public-access' },
  { name: 'News & Blogs', href: '/insights' },
  { name: 'Events', href: '/events' },
  { name: 'Join Us', href: '/join' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0a1628] border-b-4 border-[#c9a84c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link 
            href="/" 
            className="flex items-center gap-3 md:gap-4 group flex-shrink-0"
            suppressHydrationWarning
          >
            {!imgError ? (
              <div className="relative w-12 h-12 md:w-14 md:h-16 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="G20 Chambers"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                  priority
                  onError={() => setImgError(true)}
                />
              </div>
            ) : (
              <div className="w-12 h-12 md:w-14 md:h-16 rounded-full bg-[#c9a84c] flex items-center justify-center text-lg md:text-xl font-extrabold text-[#0a1628] flex-shrink-0">
                G20
              </div>
            )}
            
            <div className="flex flex-col min-w-0">
              <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-wide truncate">
                G20 <span className="text-[#c9a84c]">Chambers</span>
              </span>
              <span className="text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] font-light tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] uppercase text-[#aab] -mt-0.5 truncate">
                The home of premier barristers
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#c9a84c] transition-colors border-b-2 border-transparent hover:border-[#c9a84c] pb-1"
                suppressHydrationWarning
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-white transition-colors p-2 flex-shrink-0"
            aria-label="Toggle menu"
            suppressHydrationWarning
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#0a1628] border-t border-[#1a2a3a]">
          <div className="container py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm text-gray-300 hover:text-[#c9a84c] transition-colors py-2 border-b border-[#1a2a3a] last:border-0"
                onClick={() => setIsOpen(false)}
                suppressHydrationWarning
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

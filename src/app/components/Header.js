'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Barristers', href: '/barristers' },
  { name: 'Clerks & Staff', href: '/clerks' },
  { name: 'Areas of Law', href: '/areas' },
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
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 999, 
      width: '100%',
      boxShadow: '0 2px 20px rgba(0,0,0,0.3)'
    }}>
      {/* ===== TOP BAR - GOLD/WHITE ===== */}
      <div className="bg-[#c9a84c] py-1.5 md:py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs md:text-sm">
            {/* Left: Contact Info */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[#0a1628] font-medium">
              <a 
                href="tel:+27823413333" 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span>082 341 3333</span>
              </a>
              <span className="text-[#0a1628]/30">|</span>
              <a 
                href="tel:+27158801865" 
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span>015 880 1865</span>
              </a>
              <span className="text-[#0a1628]/30 hidden sm:inline">|</span>
              <a 
                href="mailto:cali.mathabatha@gmail.com" 
                className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span>cali.mathabatha@gmail.com</span>
              </a>
            </div>

            {/* Right: Location + WhatsApp */}
            <div className="flex items-center gap-2 md:gap-3">
              <a 
                href="https://maps.google.com/?q=39+Voortrekker+Street+Polokwane" 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 text-[#0a1628] hover:text-white transition-colors text-xs font-medium"
              >
                <MapPin className="w-3 h-3" />
                <span>39 Voortrekker St, Polokwane</span>
              </a>
              <a 
                href="https://wa.me/27823413333" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#25D366] text-white px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-semibold hover:bg-[#1da851] transition-colors"
              >
                {/* Official WhatsApp SVG Icon */}
                <svg 
                  className="w-3 h-3 md:w-3.5 md:h-3.5 fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER - DARK ===== */}
      <div className="bg-[#0a1628] border-b-4 border-[#c9a84c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 md:gap-4 group flex-shrink-0"
              suppressHydrationWarning
            >
              {!imgError ? (
                <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                  <Image
                    src="/images/logo.jpg"
                    alt="G20 Chambers"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                    onError={() => setImgError(true)}
                  />
                </div>
              ) : (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#c9a84c] flex items-center justify-center text-lg md:text-xl font-extrabold text-[#0a1628] flex-shrink-0">
                  G20
                </div>
              )}
              
              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-wide truncate">
                  G20 <span className="text-[#c9a84c]">Chambers</span>
                </span>
                <span className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.55rem] font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#aab] -mt-0.5 truncate">
                  The home of premier barristers
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
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

            {/* Mobile Menu Button */}
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
      </div>

      {/* ===== MOBILE MENU ===== */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a1628] border-t border-[#1a2a3a] max-h-[80vh] overflow-y-auto">
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
            
            {/* Mobile Contact Info */}
            <div className="pt-4 border-t border-[#1a2a3a] space-y-2">
              <a 
                href="tel:+27823413333" 
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#c9a84c] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c9a84c]" />
                082 341 3333
              </a>
              <a 
                href="tel:+27158801865" 
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#c9a84c] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c9a84c]" />
                015 880 1865
              </a>
              <a 
                href="mailto:cali.mathabatha@gmail.com" 
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#c9a84c] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c9a84c]" />
                cali.mathabatha@gmail.com
              </a>
              <a 
                href="https://wa.me/27823413333" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1da851] transition-colors w-fit"
              >
                <svg 
                  className="w-4 h-4 fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
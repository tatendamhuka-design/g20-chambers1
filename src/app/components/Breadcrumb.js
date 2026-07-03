'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-1 text-sm text-[#888] py-3 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center gap-1 hover:text-[#c9a84c] transition-colors">
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <div key={index} className="flex items-center gap-1">
            <ChevronRight className="w-3 h-3 text-[#ccc]" />
            {isLast ? (
              <span className="text-[#0a1628] font-medium">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-[#c9a84c] transition-colors">
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
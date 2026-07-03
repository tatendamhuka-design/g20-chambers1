'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, User, ChevronRight, Search, Filter } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function InsightsPage() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [categories, setCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const itemsPerPage = 9

  useEffect(() => {
    fetchNews()
  }, [currentPage, selectedCategory])

  const fetchNews = async () => {
    setLoading(true)
    try {
      const url = `/api/public/news?page=${currentPage}&limit=${itemsPerPage}${selectedCategory ? `&category=${selectedCategory}` : ''}`
      const res = await fetch(url)
      const data = await res.json()
      setNews(data.news || [])
      setTotalPages(data.totalPages || 1)
      setCategories(data.categories || [])
    } catch (error) {
      console.error('Error fetching news:', error)
    } finally {
      setLoading(false)
    }
  }

  const getCategoryBadge = (category) => {
    const config = {
      'case-update': { label: 'Case Update', className: 'bg-blue-100 text-blue-700 border-blue-200' },
      'chambers-news': { label: 'Chambers News', className: 'bg-green-100 text-green-700 border-green-200' },
      'legal-analysis': { label: 'Legal Analysis', className: 'bg-purple-100 text-purple-700 border-purple-200' },
      'event': { label: 'Event', className: 'bg-amber-100 text-amber-700 border-amber-200' },
      'press-release': { label: 'Press Release', className: 'bg-red-100 text-red-700 border-red-200' }
    }
    const { label, className } = config[category] || { label: category, className: 'bg-gray-100 text-gray-700 border-gray-200' }
    return <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${className}`}>{label}</span>
  }

  const getCategoryLabel = (category) => {
    const labels = {
      'case-update': 'Case Update',
      'chambers-news': 'Chambers News',
      'legal-analysis': 'Legal Analysis',
      'event': 'Event',
      'press-release': 'Press Release'
    }
    return labels[category] || category
  }

  const filteredNews = news.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              News & <span className="text-[#c9a84c]">Insights</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              Stay informed with the latest legal news, case updates, and insights from G20 Chambers barristers.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* News Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition text-sm"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  selectedCategory === '' 
                    ? 'bg-[#c9a84c] text-[#0a1628]' 
                    : 'bg-[#faf8f5] text-[#555] hover:bg-[#e8e0d4]'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                    selectedCategory === category 
                      ? 'bg-[#c9a84c] text-[#0a1628]' 
                      : 'bg-[#faf8f5] text-[#555] hover:bg-[#e8e0d4]'
                  }`}
                >
                  {getCategoryLabel(category)}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-[#888]">Loading news...</p>
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#888]">No news articles found.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border border-[#e8e0d4] overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    {item.featuredImage && (
                      <div className="h-48 bg-[#faf8f5] flex items-center justify-center overflow-hidden">
                        <img src={item.featuredImage} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        {getCategoryBadge(item.category)}
                      </div>
                      <h3 className="text-xl font-bold text-[#0a1628] mb-2 hover:text-[#c9a84c] transition-colors">
                        <Link href={`/insights/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p className="text-[#555] text-sm leading-relaxed">{item.excerpt}</p>
                      <div className="mt-4 pt-4 border-t border-[#e8e0d4] flex items-center justify-between text-xs text-[#888]">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {item.author?.name || 'Unknown'}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(item.publishedDate).toLocaleDateString()}
                        </span>
                      </div>
                      <Link
                        href={`/insights/${item.slug}`}
                        className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold text-sm mt-4 hover:gap-2 transition-all"
                      >
                        Read more <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-[#e8e0d4] hover:bg-[#faf8f5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2 text-sm text-[#888]">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-[#e8e0d4] hover:bg-[#faf8f5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
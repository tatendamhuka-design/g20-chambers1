'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  Users, 
  Newspaper, 
  Mail, 
  UsersRound, 
  CheckCircle, 
  Clock, 
  XCircle,
  LayoutDashboard,
  TrendingUp,
  Activity
} from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    barristers: 0,
    staff: 0,
    news: 0,
    subscribers: 0,
    newsletters: 0,
    available: 0,
    limited: 0,
    full: 0,
  })
  const [loading, setLoading] = useState(true)
  const [recentBarristers, setRecentBarristers] = useState([])
  const [recentNews, setRecentNews] = useState([])

  useEffect(() => {
    fetchStats()
    fetchRecentActivity()
  }, [])

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats')
      if (res.ok) {
        const data = await res.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchRecentActivity = async () => {
    try {
      // Fetch recent barristers
      const barristersRes = await fetch('/api/admin/barristers?limit=5')
      if (barristersRes.ok) {
        const data = await barristersRes.json()
        setRecentBarristers(data.barristers || [])
      }

      // Fetch recent news
      const newsRes = await fetch('/api/admin/news?limit=5')
      if (newsRes.ok) {
        const data = await newsRes.json()
        setRecentNews(data.news || [])
      }
    } catch (error) {
      console.error('Error fetching recent activity:', error)
    }
  }

  const statCards = [
    {
      title: 'Total Barristers',
      value: stats.barristers,
      icon: Users,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      href: '/admin/barristers',
    },
    {
      title: 'Staff Members',
      value: stats.staff,
      icon: UsersRound,
      color: 'bg-teal-50 text-teal-600 border-teal-200',
      href: '/admin/staff',
    },
    {
      title: 'News Articles',
      value: stats.news,
      icon: Newspaper,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      href: '/admin/news',
    },
    {
      title: 'Subscribers',
      value: stats.subscribers,
      icon: Mail,
      color: 'bg-green-50 text-green-600 border-green-200',
      href: '/admin/subscribers',
    },
  ]

  const availabilityStats = [
    {
      label: 'Available',
      count: stats.available,
      icon: CheckCircle,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      label: 'Limited',
      count: stats.limited,
      icon: Clock,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      label: 'Full',
      count: stats.full,
      icon: XCircle,
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-[#888]">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">Dashboard</h1>
        <p className="text-sm text-[#888] mt-1">Welcome back! Here's what's happening with G20 Chambers.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <Link
              key={stat.title}
              href={stat.href}
              className={`bg-white rounded-xl p-6 border ${stat.color} shadow-sm hover:shadow-md transition-all hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#888]">{stat.title}</p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Availability Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
        {availabilityStats.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              className="bg-white rounded-xl p-6 border border-[#e8e0d4] shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${item.bg}`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#888]">{item.label}</p>
                  <p className="text-2xl font-extrabold text-[#0a1628]">{item.count}</p>
                </div>
              </div>
              <div className="text-xs text-[#888]">
                {stats.barristers > 0 ? Math.round((item.count / stats.barristers) * 100) : 0}%
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Barristers */}
        <div className="bg-white rounded-xl border border-[#e8e0d4] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e8e0d4] flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#0a1628]">Recent Barristers</h2>
            <Link href="/admin/barristers" className="text-sm text-[#c9a84c] hover:underline">
              View all
            </Link>
          </div>
          <div className="divide-y divide-[#e8e0d4]">
            {recentBarristers.length === 0 ? (
              <div className="px-6 py-8 text-center text-[#888] text-sm">
                No barristers added yet.
                <Link href="/admin/barristers/new" className="block text-[#c9a84c] hover:underline mt-1">
                  Add your first barrister →
                </Link>
              </div>
            ) : (
              recentBarristers.map((barrister) => (
                <div key={barrister.id} className="px-6 py-3 flex items-center justify-between hover:bg-[#faf8f5] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0a1628] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 overflow-hidden">
                      {barrister.profileImage ? (
                        <img src={barrister.profileImage} alt={barrister.name} className="w-full h-full object-cover" />
                      ) : (
                        barrister.name?.split(' ').map(n => n[0]).join('') || '?'
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#0a1628]">{barrister.name}</p>
                      <p className="text-xs text-[#888]">{barrister.title}</p>
                    </div>
                  </div>
                  <div className="text-xs text-[#888]">
                    {barrister.availability === 'accepting' && <span className="text-green-600">● Active</span>}
                    {barrister.availability === 'limited' && <span className="text-amber-600">● Limited</span>}
                    {barrister.availability === 'full' && <span className="text-red-600">● Full</span>}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent News */}
        <div className="bg-white rounded-xl border border-[#e8e0d4] shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e8e0d4] flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#0a1628]">Recent News</h2>
            <Link href="/admin/news" className="text-sm text-[#c9a84c] hover:underline">
              View all
            </Link>
          </div>
          <div className="divide-y divide-[#e8e0d4]">
            {recentNews.length === 0 ? (
              <div className="px-6 py-8 text-center text-[#888] text-sm">
                No news articles yet.
                <Link href="/admin/news/new" className="block text-[#c9a84c] hover:underline mt-1">
                  Add your first news article →
                </Link>
              </div>
            ) : (
              recentNews.map((article) => (
                <div key={article.id} className="px-6 py-3 flex items-center justify-between hover:bg-[#faf8f5] transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-[#0a1628] truncate">{article.title}</p>
                    <p className="text-xs text-[#888]">
                      {article.category} • {new Date(article.publishedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-xs text-[#888] ml-4">
                    {article.author?.name || 'Unknown'}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-[#0a1628] mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            href="/admin/barristers/new"
            className="bg-white rounded-xl p-4 border border-[#e8e0d4] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm font-medium text-[#0a1628]">Add Barrister</p>
          </Link>
          <Link
            href="/admin/staff/new"
            className="bg-white rounded-xl p-4 border border-[#e8e0d4] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-teal-50 flex items-center justify-center mb-2">
              <UsersRound className="w-6 h-6 text-teal-600" />
            </div>
            <p className="text-sm font-medium text-[#0a1628]">Add Staff</p>
          </Link>
          <Link
            href="/admin/news/new"
            className="bg-white rounded-xl p-4 border border-[#e8e0d4] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-purple-50 flex items-center justify-center mb-2">
              <Newspaper className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm font-medium text-[#0a1628]">Add News</p>
          </Link>
          <Link
            href="/admin/newsletters/new"
            className="bg-white rounded-xl p-4 border border-[#e8e0d4] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-2">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm font-medium text-[#0a1628]">Create Newsletter</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
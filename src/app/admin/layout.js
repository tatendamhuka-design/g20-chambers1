'use client'

import { SessionProvider } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect } from 'react'
import { 
  LayoutDashboard, 
  Users, 
  Newspaper, 
  Mail, 
  UsersRound,
  Calendar,
  LogOut
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Barristers', href: '/admin/barristers', icon: Users },
  { name: 'Staff', href: '/admin/staff', icon: UsersRound },
  { name: 'News', href: '/admin/news', icon: Newspaper },
  { name: 'Events', href: '/admin/events', icon: Calendar }, // ← Add this
  { name: 'Subscribers', href: '/admin/subscribers', icon: UsersRound },
  { name: 'Newsletters', href: '/admin/newsletters', icon: Mail },
]
function AdminLayoutContent({ children }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a1628]">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a1628] text-white flex flex-col fixed h-full">
        <div className="p-6 border-b border-[#1a2a3a]">
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-white">
              G20 <span className="text-[#c9a84c]">Chambers</span>
            </span>
            <span className="text-[0.6rem] font-light tracking-[0.2em] uppercase text-[#889] -mt-0.5">
              Admin Panel
            </span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
            const Icon = item.icon
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#c9a84c] text-[#0a1628]'
                    : 'text-gray-300 hover:bg-[#1a2a3a] hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-[#1a2a3a]">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0a1628] font-bold text-sm">
              {session?.user?.name?.charAt(0) || 'A'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{session?.user?.name}</p>
              <p className="text-xs text-gray-400 truncate">{session?.user?.email}</p>
            </div>
            <button
              onClick={() => {
                fetch('/api/auth/signout', { method: 'POST' }).then(() => {
                  router.push('/admin/login')
                })
              }}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}

export default function AdminLayout({ children }) {
  return (
    <SessionProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SessionProvider>
  )
}
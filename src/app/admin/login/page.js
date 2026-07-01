'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password')
        setLoading(false)
        return
      }

      router.push('/admin')
      router.refresh()
    } catch (err) {
      setError('Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl border-t-4 border-[#c9a84c]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-[#0a1628]">G20 Chambers</h1>
          <p className="text-gray-500 text-sm mt-1">Admin Login</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition"
              placeholder="admin@g20chambers.co.za"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#0a1628] mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-[#e8e0d4] focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20 transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#c9a84c] text-[#0a1628] py-3 font-bold rounded-xl hover:bg-[#e0c66e] transition-all hover:scale-[1.01] disabled:opacity-70"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-400">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  )
}
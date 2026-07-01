import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import prisma from '../../../../lib/prisma'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const admin = await prisma.admin.findUnique({
            where: { email: credentials.email },
          })

          if (!admin) {
            return null
          }

          const isValid = await bcrypt.compare(credentials.password, admin.password)

          if (!isValid) {
            return null
          }

          return {
            id: admin.id,
            email: admin.email,
            name: admin.name,
          }
        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub
      }
      return session
    },
  },
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-here',
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
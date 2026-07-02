import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const [barristers, staff, news, subscribers, newsletters] = await Promise.all([
  prisma.barrister.count(),
  prisma.staff.count(),  // ← ADD THIS
  prisma.news.count(),
  prisma.subscriber.count({ where: { status: 'active' } }),
  prisma.newsletter.count({ where: { status: 'sent' } }),
])

    const availability = await prisma.barrister.groupBy({
      by: ['availability'],
      _count: true,
    })

    const available = availability.find(a => a.availability === 'accepting')?._count || 0
    const limited = availability.find(a => a.availability === 'limited')?._count || 0
    const full = availability.find(a => a.availability === 'full')?._count || 0

    return Response.json({
  barristers,
  staff,  // ← ADD THIS
  news,
  subscribers,
  newsletters,
  available,
  limited,
  full,
    })
  } catch (error) {
    console.error('Stats error:', error)
    return Response.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}


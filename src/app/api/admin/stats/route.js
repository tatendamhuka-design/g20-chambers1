import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

// GET - Get dashboard statistics
export async function GET(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const [barristers, staff, news, subscribers, newsletters] = await Promise.all([
      prisma.barrister.count(),
      prisma.staff.count(),
      prisma.news.count(),
      prisma.subscriber.count({ where: { status: 'active' } }),
      prisma.newsletter.count()
    ])

    // Get availability counts
    const [available, limited, full] = await Promise.all([
      prisma.barrister.count({ where: { availability: 'accepting' } }),
      prisma.barrister.count({ where: { availability: 'limited' } }),
      prisma.barrister.count({ where: { availability: 'full' } })
    ])

    return Response.json({
      barristers,
      staff,
      news,
      subscribers,
      newsletters,
      available,
      limited,
      full
    })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return Response.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

// GET - List all subscribers
export async function GET(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    const search = searchParams.get('search') || ''
    const status = searchParams.get('status') || 'all'

    const skip = (page - 1) * limit

    const where = {
      ...(search ? {
        OR: [
          { email: { contains: search } },
          { name: { contains: search } }
        ]
      } : {}),
      ...(status !== 'all' ? { status } : {})
    }

    const [subscribers, total, activeCount, unsubscribedCount] = await Promise.all([
      prisma.subscriber.findMany({
        where,
        skip,
        take: limit,
        orderBy: { subscribedAt: 'desc' }
      }),
      prisma.subscriber.count({ where }),
      prisma.subscriber.count({ where: { status: 'active' } }),
      prisma.subscriber.count({ where: { status: 'unsubscribed' } })
    ])

    return Response.json({
      subscribers,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      activeCount,
      unsubscribedCount
    })
  } catch (error) {
    console.error('Error fetching subscribers:', error)
    return Response.json({ error: 'Failed to fetch subscribers' }, { status: 500 })
  }
}
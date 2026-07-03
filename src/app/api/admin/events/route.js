import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

// GET - List all events
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

    const skip = (page - 1) * limit

    const where = search ? {
      OR: [
        { title: { contains: search } },
        { location: { contains: search } }
      ]
    } : {}

    const [events, total] = await Promise.all([
      prisma.event.findMany({
        where,
        skip,
        take: limit,
        orderBy: { date: 'asc' }
      }),
      prisma.event.count({ where })
    ])

    return Response.json({
      events,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    return Response.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

// POST - Create a new event
export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    // Generate slug from title
    const slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    const event = await prisma.event.create({
      data: {
        title: data.title,
        slug,
        description: data.description || '',
        date: new Date(data.date),
        time: data.time || '',
        location: data.location || '',
        type: data.type || '',
        price: data.price || '',
        image: data.image || '',
        seoMetaTitle: data.seoMetaTitle || '',
        seoMetaDesc: data.seoMetaDesc || ''
      }
    })

    return Response.json(event, { status: 201 })
  } catch (error) {
    console.error('Error creating event:', error)
    return Response.json({ error: 'Failed to create event' }, { status: 500 })
  }
}
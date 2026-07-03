import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

// GET - List all barristers
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
        { name: { contains: search } },
        { title: { contains: search } }
      ]
    } : {}

    const [barristers, total] = await Promise.all([
      prisma.barrister.findMany({
        where,
        skip,
        take: limit,
        orderBy: { name: 'asc' }
      }),
      prisma.barrister.count({ where })
    ])

    // Parse JSON fields for each barrister
    const parsedBarristers = barristers.map(barrister => ({
      ...barrister,
      practiceAreas: barrister.practiceAreas ? JSON.parse(barrister.practiceAreas) : [],
      socialLinks: barrister.socialLinks ? JSON.parse(barrister.socialLinks) : {},
      notableCases: barrister.notableCases ? JSON.parse(barrister.notableCases) : [],
      reviews: barrister.reviews ? JSON.parse(barrister.reviews) : []
    }))

    return Response.json({
      barristers: parsedBarristers,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    })
  } catch (error) {
    console.error('Error fetching barristers:', error)
    return Response.json({ error: 'Failed to fetch barristers' }, { status: 500 })
  }
}

// POST - Create a new barrister
export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    // Generate slug from name
    const slug = data.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    const barrister = await prisma.barrister.create({
      data: {
        name: data.name,
        slug,
        title: data.title,
        yearOfCall: data.yearOfCall || null,
        practiceAreas: JSON.stringify(data.practiceAreas || []),
        availability: data.availability || 'accepting',
        bio: data.bio || '',
        email: data.email || '',
        phone: data.phone || '',
        education: data.education || '',
        profileImage: data.profileImage || '',
        socialLinks: JSON.stringify(data.socialLinks || {}),
        notableCases: JSON.stringify(data.notableCases || []),
        reviews: JSON.stringify(data.reviews || [])
      }
    })

    return Response.json(barrister, { status: 201 })
  } catch (error) {
    console.error('Error creating barrister:', error)
    return Response.json({ error: 'Failed to create barrister' }, { status: 500 })
  }
}
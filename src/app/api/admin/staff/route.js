import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

// GET - List all staff
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
        { role: { contains: search } }
      ]
    } : {}

    const [staff, total] = await Promise.all([
      prisma.staff.findMany({
        where,
        skip,
        take: limit,
        orderBy: { order: 'asc' }
      }),
      prisma.staff.count({ where })
    ])

    return Response.json({
      staff,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    })
  } catch (error) {
    console.error('Error fetching staff:', error)
    return Response.json({ error: 'Failed to fetch staff' }, { status: 500 })
  }
}

// POST - Create a new staff member
export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    const staff = await prisma.staff.create({
      data: {
        name: data.name,
        role: data.role,
        email: data.email || null,
        phone: data.phone || null,
        department: data.department || null,
        bio: data.bio || null,
        profileImage: data.profileImage || null,
        order: data.order || 0
      }
    })

    return Response.json(staff, { status: 201 })
  } catch (error) {
    console.error('Error creating staff:', error)
    return Response.json({ error: 'Failed to create staff' }, { status: 500 })
  }
}
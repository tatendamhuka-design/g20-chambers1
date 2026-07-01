import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

// GET - List all newsletters
export async function GET(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const newsletters = await prisma.newsletter.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return Response.json({ newsletters })
  } catch (error) {
    console.error('Error fetching newsletters:', error)
    return Response.json({ error: 'Failed to fetch newsletters' }, { status: 500 })
  }
}

// POST - Create a new newsletter
export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    const newsletter = await prisma.newsletter.create({
      data: {
        subject: data.subject,
        content: data.content || '',
        status: data.status || 'draft',
        recipients: data.recipients || 0
      }
    })

    return Response.json(newsletter, { status: 201 })
  } catch (error) {
    console.error('Error creating newsletter:', error)
    return Response.json({ error: 'Failed to create newsletter' }, { status: 500 })
  }
}
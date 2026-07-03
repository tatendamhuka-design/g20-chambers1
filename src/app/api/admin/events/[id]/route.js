import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

// GET - Get a single event
export async function GET(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const event = await prisma.event.findUnique({
      where: { id: params.id }
    })

    if (!event) {
      return Response.json({ error: 'Event not found' }, { status: 404 })
    }

    return Response.json(event)
  } catch (error) {
    console.error('Error fetching event:', error)
    return Response.json({ error: 'Failed to fetch event' }, { status: 500 })
  }
}

// PUT - Update an event
export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    const event = await prisma.event.update({
      where: { id: params.id },
      data: {
        title: data.title,
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

    return Response.json(event)
  } catch (error) {
    console.error('Error updating event:', error)
    return Response.json({ error: 'Failed to update event' }, { status: 500 })
  }
}

// DELETE - Delete an event
export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await prisma.event.delete({
      where: { id: params.id }
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error deleting event:', error)
    return Response.json({ error: 'Failed to delete event' }, { status: 500 })
  }
}
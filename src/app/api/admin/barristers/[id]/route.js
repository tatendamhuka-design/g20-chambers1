import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

// GET - Get a single barrister
export async function GET(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const barrister = await prisma.barrister.findUnique({
      where: { id: params.id }
    })

    if (!barrister) {
      return Response.json({ error: 'Barrister not found' }, { status: 404 })
    }

    return Response.json({
      ...barrister,
      practiceAreas: JSON.parse(barrister.practiceAreas || '[]'),
      socialLinks: JSON.parse(barrister.socialLinks || '{}'),
      notableCases: JSON.parse(barrister.notableCases || '[]'),
      reviews: JSON.parse(barrister.reviews || '[]')
    })
  } catch (error) {
    console.error('Error fetching barrister:', error)
    return Response.json({ error: 'Failed to fetch barrister' }, { status: 500 })
  }
}

// PUT - Update a barrister
export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    const barrister = await prisma.barrister.update({
      where: { id: params.id },
      data: {
        name: data.name,
        title: data.title,
        yearOfCall: data.yearOfCall,
        practiceAreas: JSON.stringify(data.practiceAreas || []),
        availability: data.availability || 'accepting',
        bio: data.bio,
        email: data.email,
        phone: data.phone,
        education: data.education,
        profileImage: data.profileImage,
        socialLinks: JSON.stringify(data.socialLinks || {}),
        notableCases: JSON.stringify(data.notableCases || []),
        reviews: JSON.stringify(data.reviews || [])
      }
    })

    return Response.json(barrister)
  } catch (error) {
    console.error('Error updating barrister:', error)
    return Response.json({ error: 'Failed to update barrister' }, { status: 500 })
  }
}

// DELETE - Delete a barrister
export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await prisma.barrister.delete({
      where: { id: params.id }
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error deleting barrister:', error)
    return Response.json({ error: 'Failed to delete barrister' }, { status: 500 })
  }
}
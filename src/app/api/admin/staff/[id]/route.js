import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function GET(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const staff = await prisma.staff.findUnique({
      where: { id: params.id }
    })

    if (!staff) {
      return Response.json({ error: 'Staff member not found' }, { status: 404 })
    }

    return Response.json(staff)
  } catch (error) {
    console.error('Error fetching staff:', error)
    return Response.json({ error: 'Failed to fetch staff' }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    const staff = await prisma.staff.update({
      where: { id: params.id },
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

    return Response.json(staff)
  } catch (error) {
    console.error('Error updating staff:', error)
    return Response.json({ error: 'Failed to update staff' }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await prisma.staff.delete({
      where: { id: params.id }
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error deleting staff:', error)
    return Response.json({ error: 'Failed to delete staff' }, { status: 500 })
  }
}
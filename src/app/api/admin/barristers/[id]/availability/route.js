import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function PATCH(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { availability } = await request.json()

    const barrister = await prisma.barrister.update({
      where: { id: params.id },
      data: { availability }
    })

    return Response.json(barrister)
  } catch (error) {
    console.error('Error updating availability:', error)
    return Response.json({ error: 'Failed to update availability' }, { status: 500 })
  }
}
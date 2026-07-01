import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

// DELETE - Unsubscribe or delete a subscriber
export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await prisma.subscriber.delete({
      where: { id: params.id }
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error deleting subscriber:', error)
    return Response.json({ error: 'Failed to delete subscriber' }, { status: 500 })
  }
}
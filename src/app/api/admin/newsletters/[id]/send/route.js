import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function POST(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const newsletter = await prisma.newsletter.findUnique({
      where: { id: params.id }
    })

    if (!newsletter) {
      return Response.json({ error: 'Newsletter not found' }, { status: 404 })
    }

    if (newsletter.status === 'sent') {
      return Response.json({ error: 'Newsletter already sent' }, { status: 400 })
    }

    const subscribers = await prisma.subscriber.findMany({
      where: { status: 'active' }
    })

    const updated = await prisma.newsletter.update({
      where: { id: params.id },
      data: {
        status: 'sent',
        sentDate: new Date(),
        recipients: subscribers.length
      }
    })

    return Response.json({ 
      success: true, 
      newsletter: updated,
      message: `Newsletter sent to ${subscribers.length} subscribers` 
    })
  } catch (error) {
    console.error('Error sending newsletter:', error)
    return Response.json({ error: 'Failed to send newsletter' }, { status: 500 })
  }
}
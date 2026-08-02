import { PrismaClient } from '@prisma/client'

export async function POST(request) {
  try {
    const prisma = new PrismaClient()
    const { email, name } = await request.json()

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    const existing = await prisma.subscriber.findUnique({
      where: { email }
    })

    if (existing) {
      if (existing.status === 'active') {
        await prisma.$disconnect()
        return Response.json({ error: 'Already subscribed' }, { status: 400 })
      } else {
        const updated = await prisma.subscriber.update({
          where: { email },
          data: { status: 'active', unsubscribedAt: null }
        })
        await prisma.$disconnect()
        return Response.json({ success: true, message: 'Re-subscribed successfully!' })
      }
    }

    const subscriber = await prisma.subscriber.create({
      data: {
        email,
        name: name || null,
        status: 'active'
      }
    })

    await prisma.$disconnect()

    return Response.json({ success: true, message: 'Subscribed successfully!' })
  } catch (error) {
    console.error('Error subscribing:', error)
    return Response.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
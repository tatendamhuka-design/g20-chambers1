import { PrismaClient } from '@prisma/client'

export async function GET(request, { params }) {
  try {
    const prisma = new PrismaClient()
    const { email } = params

    if (!email) {
      await prisma.$disconnect()
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    const subscriber = await prisma.subscriber.update({
      where: { email: decodeURIComponent(email) },
      data: { 
        status: 'unsubscribed',
        unsubscribedAt: new Date()
      }
    })

    await prisma.$disconnect()

    return Response.json({ success: true, message: 'Unsubscribed successfully' })
  } catch (error) {
    console.error('Error unsubscribing:', error)
    return Response.json({ error: 'Failed to unsubscribe' }, { status: 500 })
  }
}
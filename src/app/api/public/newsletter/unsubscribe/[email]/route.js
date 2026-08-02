import { prisma } from '@/lib/prisma'  // ← Changed from '@prisma/client'

export async function GET(request, { params }) {
  try {
    const { email } = params

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    const subscriber = await prisma.subscriber.update({
      where: { email: decodeURIComponent(email) },
      data: { 
        status: 'unsubscribed',
        unsubscribedAt: new Date()
      }
    })

    return Response.json({ success: true, message: 'Unsubscribed successfully' })
  } catch (error) {
    console.error('Error unsubscribing:', error)
    return Response.json({ error: 'Failed to unsubscribe' }, { status: 500 })
  }
}
import { prisma } from '../../../../lib/prisma'  // This is correct (4 levels up)

export async function POST(request) {
  try {
    const { email, name } = await request.json()

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    // Check if subscriber already exists
    const existing = await prisma.subscriber.findUnique({
      where: { email }
    })

    if (existing) {
      if (existing.status === 'active') {
        return Response.json({ error: 'Already subscribed' }, { status: 400 })
      } else {
        // Re-activate
        const updated = await prisma.subscriber.update({
          where: { email },
          data: { status: 'active', unsubscribedAt: null }
        })
        return Response.json({ success: true, message: 'Re-subscribed successfully!' })
      }
    }

    // Create new subscriber
    const subscriber = await prisma.subscriber.create({
      data: {
        email,
        name: name || null,
        status: 'active'
      }
    })

    return Response.json({ success: true, message: 'Subscribed successfully!' })
  } catch (error) {
    console.error('Error subscribing:', error)
    return Response.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
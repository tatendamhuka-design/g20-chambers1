import { prisma } from '../../../../lib/prisma'  // ← Changed from '@/lib/prisma'

// GET - Public events listing
export async function GET() {
  try {
    const events = await prisma.event.findMany({
      where: {
        date: {
          gte: new Date()
        }
      },
      orderBy: { date: 'asc' }
    })

    return Response.json({
      events,
      total: events.length
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    return Response.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}
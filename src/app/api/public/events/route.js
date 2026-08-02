import { PrismaClient } from '@prisma/client'

export async function GET() {
  try {
    const prisma = new PrismaClient()
    
    const events = await prisma.event.findMany({
      where: {
        date: {
          gte: new Date()
        }
      },
      orderBy: { date: 'asc' }
    })

    await prisma.$disconnect()

    return Response.json({
      events,
      total: events.length
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    return Response.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}
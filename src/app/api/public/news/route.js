import { PrismaClient } from '@prisma/client'

export async function GET(request) {
  try {
    const prisma = new PrismaClient()
    
    const url = new URL(request.url)
    const page = parseInt(url.searchParams.get('page')) || 1
    const limit = parseInt(url.searchParams.get('limit')) || 9
    const category = url.searchParams.get('category') || ''

    const skip = (page - 1) * limit

    const where = category ? { category } : {}

    const [news, total] = await Promise.all([
      prisma.news.findMany({
        where,
        skip,
        take: limit,
        orderBy: { publishedDate: 'desc' },
        include: { author: true }
      }),
      prisma.news.count({ where })
    ])

    const categories = await prisma.news.groupBy({
      by: ['category'],
      _count: true
    })

    await prisma.$disconnect()

    return Response.json({
      news,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      categories: categories.map(c => c.category)
    })
  } catch (error) {
    console.error('Error fetching news:', error)
    return Response.json({ error: 'Failed to fetch news' }, { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
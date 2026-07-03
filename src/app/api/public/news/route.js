import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET - Public news listing
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 9
    const category = searchParams.get('category') || ''

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

    // Get all categories for filter
    const categories = await prisma.news.groupBy({
      by: ['category'],
      _count: true
    })

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
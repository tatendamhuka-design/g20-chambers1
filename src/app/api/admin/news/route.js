import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const prisma = new PrismaClient()

// GET - List all news articles
export async function GET(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    const search = searchParams.get('search') || ''

    const skip = (page - 1) * limit

    const where = search ? {
      OR: [
        { title: { contains: search } },
        { category: { contains: search } }
      ]
    } : {}

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

    return Response.json({
      news,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    })
  } catch (error) {
    console.error('Error fetching news:', error)
    return Response.json({ error: 'Failed to fetch news' }, { status: 500 })
  }
}

// POST - Create a new news article
export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    // Generate slug from title
    const slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    const news = await prisma.news.create({
      data: {
        title: data.title,
        slug,
        category: data.category,
        authorId: data.authorId || null,
        featuredImage: data.featuredImage || '',
        excerpt: data.excerpt || '',
        content: data.content || '',
        publishedDate: data.publishedDate ? new Date(data.publishedDate) : new Date(),
        seoMetaTitle: data.seoMetaTitle || '',
        seoMetaDesc: data.seoMetaDesc || ''
      }
    })

    return Response.json(news, { status: 201 })
  } catch (error) {
    console.error('Error creating news:', error)
    return Response.json({ error: error.message || 'Failed to create news' }, { status: 500 })
  }
}


import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

// GET - Get a single news article
export async function GET(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const news = await prisma.news.findUnique({
      where: { id: params.id },
      include: { author: true }
    })

    if (!news) {
      return Response.json({ error: 'News article not found' }, { status: 404 })
    }

    return Response.json(news)
  } catch (error) {
    console.error('Error fetching news:', error)
    return Response.json({ error: 'Failed to fetch news' }, { status: 500 })
  }
}

// PUT - Update a news article
export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    const news = await prisma.news.update({
      where: { id: params.id },
      data: {
        title: data.title,
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

    return Response.json(news)
  } catch (error) {
    console.error('Error updating news:', error)
    return Response.json({ error: 'Failed to update news' }, { status: 500 })
  }
}

// DELETE - Delete a news article
export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await prisma.news.delete({
      where: { id: params.id }
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Error deleting news:', error)
    return Response.json({ error: 'Failed to delete news' }, { status: 500 })
  }
}
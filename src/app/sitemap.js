import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function sitemap() {
  const baseUrl = 'https://g20-chambers1.vercel.app'

  // Get all barristers
  const barristers = await prisma.barrister.findMany({
    select: { slug: true, updatedAt: true }
  })

  // Get all news articles
  const news = await prisma.news.findMany({
    select: { slug: true, updatedAt: true }
  })

  // Get all events
  const events = await prisma.event.findMany({
    select: { slug: true, updatedAt: true }
  })

  // Static pages
  const staticPages = [
    { url: '/', priority: 1.0, changeFrequency: 'daily' },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/barristers', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/areas', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/public-access', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/insights', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/events', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/join', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/clerks', priority: 0.6, changeFrequency: 'monthly' },
  ]

  // Dynamic pages
  const barristerPages = barristers.map((barrister) => ({
    url: `/barristers/${barrister.slug}`,
    lastModified: barrister.updatedAt,
    priority: 0.8,
    changeFrequency: 'monthly',
  }))

  const newsPages = news.map((article) => ({
    url: `/insights/${article.slug}`,
    lastModified: article.updatedAt,
    priority: 0.6,
    changeFrequency: 'monthly',
  }))

  const eventPages = events.map((event) => ({
    url: `/events/${event.slug}`,
    lastModified: event.updatedAt,
    priority: 0.6,
    changeFrequency: 'monthly',
  }))

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...barristerPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: page.lastModified || new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...newsPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: page.lastModified || new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...eventPages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: page.lastModified || new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ]
}
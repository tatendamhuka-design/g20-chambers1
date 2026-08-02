import { prisma } from '../../lib/prisma'  // ← Changed from '@/lib/prisma'

export default async function sitemap() {
  const baseUrl = 'https://g20chambers.co.za'

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

  // Practice areas (static slugs)
  const practiceAreaSlugs = [
    'criminal-law',
    'family-law',
    'human-rights',
    'civil-litigation',
    'immigration-law',
    'employment-law',
    'public-administrative-law',
    'property-land-law'
  ]

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
    { url: '/join/pupillage', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/join/tenancy', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/join/clerks-staff', priority: 0.6, changeFrequency: 'monthly' },
  ]

  // Practice area pages
  const practiceAreaPages = practiceAreaSlugs.map((slug) => ({
    url: `/areas/${slug}`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: 'monthly',
  }))

  // Barrister profile pages
  const barristerPages = barristers.map((barrister) => ({
    url: `/barristers/${barrister.slug}`,
    lastModified: barrister.updatedAt || new Date(),
    priority: 0.8,
    changeFrequency: 'monthly',
  }))

  // News/insight pages
  const newsPages = news.map((article) => ({
    url: `/insights/${article.slug}`,
    lastModified: article.updatedAt || new Date(),
    priority: 0.6,
    changeFrequency: 'monthly',
  }))

  // Event pages
  const eventPages = events.map((event) => ({
    url: `/events/${event.slug}`,
    lastModified: event.updatedAt || new Date(),
    priority: 0.6,
    changeFrequency: 'monthly',
  }))

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...practiceAreaPages,
    ...barristerPages,
    ...newsPages,
    ...eventPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified || new Date(),
    changeFrequency: page.changeFrequency || 'monthly',
    priority: page.priority || 0.5,
  }))
}
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, ChevronRight } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Generate static paths
export async function generateStaticParams() {
  const news = await prisma.news.findMany({
    select: { slug: true }
  })
  return news.map((item) => ({
    slug: item.slug,
  }))
}

// Get news article by slug
async function getNewsBySlug(slug) {
  const news = await prisma.news.findUnique({
    where: { slug },
    include: { author: true }
  })
  return news
}

export async function generateMetadata({ params }) {
  const article = await getNewsBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.seoMetaTitle || `${article.title} | G20 Chambers`,
    description: article.seoMetaDesc || article.excerpt || `Read about ${article.title} from G20 Chambers.`,
    openGraph: {
      title: article.seoMetaTitle || article.title,
      description: article.seoMetaDesc || article.excerpt,
      url: `https://g20chambers.co.za/insights/${article.slug}`,
      type: 'article',
      publishedTime: article.publishedDate,
      authors: [article.author?.name || 'G20 Chambers'],
    },
  }
}

export default async function SingleNewsPage({ params }) {
  const article = await getNewsBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const getCategoryBadge = (category) => {
    const config = {
      'case-update': { label: 'Case Update', className: 'bg-blue-100 text-blue-700 border-blue-200' },
      'chambers-news': { label: 'Chambers News', className: 'bg-green-100 text-green-700 border-green-200' },
      'legal-analysis': { label: 'Legal Analysis', className: 'bg-purple-100 text-purple-700 border-purple-200' },
      'event': { label: 'Event', className: 'bg-amber-100 text-amber-700 border-amber-200' },
      'press-release': { label: 'Press Release', className: 'bg-red-100 text-red-700 border-red-200' }
    }
    const { label, className } = config[category] || { label: category, className: 'bg-gray-100 text-gray-700 border-gray-200' }
    return <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${className}`}>{label}</span>
  }

  return (
    <main className="w-full overflow-x-hidden">
      <Header />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            author: {
              '@type': 'Person',
              name: article.author?.name || 'G20 Chambers',
            },
            datePublished: article.publishedDate,
            articleSection: article.category,
            publisher: {
              '@type': 'Organization',
              name: 'G20 Chambers',
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/insights" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to all news
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {getCategoryBadge(article.category)}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {article.author?.name || 'Unknown'}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(article.publishedDate).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.featuredImage && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img src={article.featuredImage} alt={article.title} className="w-full h-auto" />
            </div>
          )}
          <div className="prose prose-lg max-w-none">
            <div className="text-[#444] leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#e8e0d4]">
            <Link href="/insights" className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold hover:gap-2 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to all news
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
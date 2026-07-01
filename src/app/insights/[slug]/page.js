import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, ChevronRight } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

// This would normally come from the database
const newsArticles = [
  {
    id: 1,
    slug: 'landmark-human-rights-ruling-limpopo',
    title: 'Landmark Human Rights Ruling in Limpopo',
    category: 'Case Update',
    content: `<p>G20 Chambers secured a landmark victory in the High Court, reinforcing constitutional rights and setting a precedent for due process in Limpopo.</p>
    <p>The case involved a challenge to unlawful detention, with our barristers successfully arguing that the detention violated the constitutional rights of the client.</p>
    <p>This ruling has significant implications for future cases and reinforces the importance of protecting fundamental rights in the justice system.</p>`,
    publishedDate: '2026-06-15',
    author: { name: 'Barrister Mathabatha' },
    featuredImage: null,
  },
  // Add more articles as needed
]

function getArticleBySlug(slug) {
  return newsArticles.find(article => article.slug === slug)
}

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default function SingleNewsPage({ params }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
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
            <span className="bg-[#c9a84c] text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full">
              {article.category}
            </span>
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
          <div className="prose prose-lg max-w-none">
            {article.featuredImage && (
              <div className="mb-8 rounded-xl overflow-hidden">
                <img src={article.featuredImage} alt={article.title} className="w-full h-auto" />
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
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
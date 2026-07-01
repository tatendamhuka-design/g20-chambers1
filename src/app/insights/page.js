import Link from 'next/link'
import { Calendar, User, ChevronRight } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'News & Insights | G20 Chambers',
  description: 'Read the latest legal news, case updates, and insights from G20 Chambers barristers in Limpopo. Stay informed about developments in Criminal, Family, Human Rights, and more.',
  keywords: 'legal news Limpopo, case updates, barristers insights, legal analysis South Africa, G20 Chambers news',
  openGraph: {
    title: 'News & Insights | G20 Chambers',
    description: 'Latest legal news, case updates, and insights from G20 Chambers barristers in Limpopo.',
    url: 'https://g20chambers.co.za/insights',
    type: 'website',
  },
}

// Fetch news from API - This would be dynamic in a real implementation
async function getNews() {
  // For now, we'll use static data
  return [
    {
      id: 1,
      slug: 'landmark-human-rights-ruling-limpopo',
      title: 'Landmark Human Rights Ruling in Limpopo',
      category: 'Case Update',
      excerpt: 'G20 Chambers secures a landmark victory in the High Court, reinforcing constitutional rights and setting a precedent for due process in Limpopo.',
      publishedDate: '2026-06-15',
      author: { name: 'Barrister Mathabatha' },
      featuredImage: null,
    },
    {
      id: 2,
      slug: 'changes-to-immigration-law',
      title: 'Changes to Immigration Law: What You Need to Know',
      category: 'Legal Analysis',
      excerpt: 'Our immigration team breaks down the latest legislative changes and their impact on clients, including new visa requirements and asylum procedures.',
      publishedDate: '2026-06-02',
      author: { name: 'Adv. K. Mphahlele' },
      featuredImage: null,
    },
    {
      id: 3,
      slug: 'g20-chambers-expands-team',
      title: 'G20 Chambers Expands with Two New Barristers',
      category: 'Chambers News',
      excerpt: 'We welcome Adv. K. Mphahlele and Adv. L. Maseko to our growing team, strengthening our expertise in Immigration, Employment, and Public Law.',
      publishedDate: '2026-05-18',
      author: { name: 'Barrister Mathabatha' },
      featuredImage: null,
    },
  ]
}

export default async function InsightsPage() {
  const news = await getNews()

  const getCategoryBadge = (category) => {
    const config = {
      'Case Update': 'bg-blue-100 text-blue-700 border-blue-200',
      'Chambers News': 'bg-green-100 text-green-700 border-green-200',
      'Legal Analysis': 'bg-purple-100 text-purple-700 border-purple-200',
      'Event': 'bg-amber-100 text-amber-700 border-amber-200',
      'Press Release': 'bg-red-100 text-red-700 border-red-200',
    }
    return config[category] || 'bg-gray-100 text-gray-700 border-gray-200'
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
            '@type': 'Blog',
            name: 'News & Insights from G20 Chambers',
            description: 'Latest legal news, case updates, and insights from G20 Chambers barristers.',
            url: 'https://g20chambers.co.za/insights',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2a4a] to-[#0a1628] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c9a84c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#c9a84c]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              News & <span className="text-[#c9a84c]">Insights</span>
            </h1>
            <p className="text-gray-300 text-lg mt-3 max-w-2xl mx-auto">
              Stay informed with the latest legal news, case updates, and insights from G20 Chambers barristers.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent"></div>
      </section>

      {/* News Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {news.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#888]">No news articles have been published yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-[#e8e0d4] overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  {item.featuredImage && (
                    <div className="h-48 bg-[#faf8f5] flex items-center justify-center">
                      <span className="text-[#888] text-sm">Featured Image</span>
                    </div>
                  )}
                  <div className="p-6">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${getCategoryBadge(item.category)} mb-3`}>
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#0a1628] mb-2 hover:text-[#c9a84c] transition-colors">
                      <Link href={`/insights/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p className="text-[#555] text-sm leading-relaxed">{item.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-[#e8e0d4] flex items-center justify-between text-xs text-[#888]">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {item.author?.name || 'Unknown'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(item.publishedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <Link
                      href={`/insights/${item.slug}`}
                      className="inline-flex items-center gap-1 text-[#c9a84c] font-semibold text-sm mt-4 hover:gap-2 transition-all"
                    >
                      Read more <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
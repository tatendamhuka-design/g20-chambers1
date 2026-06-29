const insights = [
  {
    tag: 'Case Update',
    date: '15 June 2026',
    title: 'Landmark human rights ruling in Limpopo',
    desc: 'G20 Chambers secures a landmark victory in the High Court, reinforcing constitutional rights.',
  },
  {
    tag: 'Legal Analysis',
    date: '2 June 2026',
    title: 'Changes to immigration law: what you need to know',
    desc: 'Our immigration team breaks down the latest legislative changes and their impact on clients.',
  },
  {
    tag: 'Chambers News',
    date: '18 May 2026',
    title: 'G20 Chambers expands with two new barristers',
    desc: 'We welcome Adv. K. Mphahlele and Adv. L. Maseko to our growing team.',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="section-padding bg-[#faf8f5]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
            News &amp; <span className="text-[#c9a84c]">Insights</span>
          </h2>
          <p className="text-[#666] text-lg mt-2">Latest updates, legal analysis, and thought leadership</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-[#e8e0d4] hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="bg-[#0a1628] text-[#c9a84c] text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full">
                  {item.tag}
                </span>
                <span className="text-[#888] text-sm">{item.date}</span>
              </div>
              <h3 className="text-lg font-bold text-[#0a1628] mb-2">
                {item.title}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
              <a href="#" className="text-[#c9a84c] font-semibold text-sm hover:underline inline-block mt-3">
                Read more →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-[#c9a84c] font-semibold hover:underline text-lg">
            View all news &amp; insights →
          </a>
        </div>
      </div>
    </section>
  )
}
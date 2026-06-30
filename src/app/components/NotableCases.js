const cases = [
  {
    verdict: 'Landmark Victory',
    title: 'R v. State — Constitutional Challenge',
    desc: 'Successfully challenged unlawful detention, setting a precedent for due process in Limpopo.',
  },
  {
    verdict: 'High Court Win',
    title: 'Family Law — Child Custody Appeal',
    desc: 'Secured parental rights in a complex custody dispute, prioritising the best interests of the child.',
  },
  {
    verdict: 'Supreme Court Appeal',
    title: 'Human Rights — Freedom of Expression',
    desc: 'Defended a landmark free speech case, reinforcing constitutional protections.',
  },
  {
    verdict: 'Historic Settlement',
    title: 'Land & Property — Community Claim',
    desc: 'Negotiated a historic settlement for a community land claim, restoring ancestral rights.',
  },
]

export default function NotableCases() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
            Notable <span className="text-[#c9a84c]">Cases &amp; Wins</span>
          </h2>
          <p className="text-[#666] text-lg mt-2">Our track record speaks for itself</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-[#faf8f5] rounded-xl p-6 border-l-4 border-[#c9a84c] hover:shadow-md transition-shadow"
            >
              <span className="inline-block bg-[#0a1628] text-[#c9a84c] text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                {item.verdict}
              </span>
              <h3 className="text-lg font-bold text-[#0a1628] mb-2">
                {item.title}
              </h3>
              <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

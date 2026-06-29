const stats = [
  { number: '20+', label: 'Years of Combined Experience' },
  { number: '15+', label: 'Specialist Barristers' },
  { number: '100%', label: 'Client Commitment' },
  { number: 'Limpopo', label: 'Proudly Based' },
]

export default function WhyChoose() {
  return (
    <section className="section-padding bg-[#0a1628] text-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Why <span className="text-[#c9a84c]">G20 Chambers</span>
            </h2>
            <p className="text-[#aab] text-lg leading-relaxed mb-4">
              As <strong>"A group of Advocates"</strong> based in Limpopo, we combine
              local insight with national expertise. Our commitment to excellence
              ensures every client receives the highest standard of representation.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                'Top-ranked advocates with proven track records',
                'Deep understanding of Limpopo\'s legal landscape',
                'Personalised, client-focused approach',
                'Fearless advocacy in and out of court',
                'Commitment to access to justice for all',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-[#ccd] border-b border-[#1a2a3a] pb-2">
                  <span className="text-[#c9a84c] font-bold text-xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#0a1628]/50 text-center p-6 rounded-lg border border-[#1a2a3a]"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#c9a84c]">
                  {stat.number}
                </div>
                <div className="text-[#889] text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
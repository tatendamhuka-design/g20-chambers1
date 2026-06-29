const testimonials = [
  {
    quote: 'G20 Chambers fought for me when I had nowhere else to turn. Their advocacy changed my life.',
    client: 'M. Ramaphosa',
    detail: 'Criminal Defence Client, Limpopo',
  },
  {
    quote: 'Professional, compassionate, and relentless. I couldn\'t have asked for better representation.',
    client: 'S. Mthembu',
    detail: 'Family Law Client, Polokwane',
  },
  {
    quote: 'They understood my case inside out and secured an outcome I never thought possible.',
    client: 'D. Patel',
    detail: 'Immigration Client, Tzaneen',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] tracking-tight">
            What Our <span className="text-[#c9a84c]">Clients Say</span>
          </h2>
          <p className="text-[#666] text-lg mt-2">Real feedback from real people we've helped</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#faf8f5] rounded-xl p-6 border-b-4 border-[#c9a84c]"
            >
              <div className="text-[#c9a84c] text-xl mb-2">★★★★★</div>
              <blockquote className="text-lg italic text-[#222] leading-relaxed mb-4">
                "{item.quote}"
              </blockquote>
              <p className="font-semibold text-[#0a1628]">{item.client}</p>
              <p className="text-[#777] text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
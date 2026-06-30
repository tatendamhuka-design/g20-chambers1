export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a1628] to-[#1a2a4a] border-y-4 border-[#c9a84c] text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Ready to <span className="text-[#c9a84c]">work with us</span>?
        </h2>
        <p className="text-[#aab] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Contact G20 Chambers today for expert legal advice and representation you can trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-[#c9a84c] text-[#0a1628] px-10 py-3.5 font-bold rounded hover:bg-[#e0c66e] transition-all hover:scale-105 uppercase tracking-wide text-sm"
          >
            Book a Consultation
          </a>
          <a
            href="tel:+27823413333"
            className="bg-transparent text-white px-10 py-3.5 font-semibold rounded border-2 border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all hover:scale-105 uppercase tracking-wide text-sm"
          >
            Call Us: 082 341 3333
          </a>
        </div>
      </div>
    </section>
  )
}
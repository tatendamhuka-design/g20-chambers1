import Link from 'next/link'

const footerNav = [
  'About', 'Barristers', 'Admin & Staff', 'Areas of Law',
  'Public Access', 'News & Blogs', 'Events', 'Join Us', 'Contact'
]

export default function Footer() {
  return (
    <footer className="bg-[#060e1e] text-[#aab] pt-12 pb-6 border-t-4 border-[#c9a84c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-extrabold text-white tracking-wide">
                G20 <span className="text-[#c9a84c]">Chambers</span>
              </span>
              <span className="text-[0.6rem] font-light tracking-[0.2em] uppercase text-[#889] -mt-0.5">
                The home of premier barristers
              </span>
            </Link>
            <p className="text-sm text-[#889] mt-3 max-w-xs">
              Providing top-notch advocate services to clients in Limpopo.
            </p>
            <div className="mt-3 text-sm text-[#889] space-y-1">
              <p>📞 <a href="tel:+27823413333" className="hover:text-[#c9a84c] transition-colors">082 341 3333</a></p>
              <p>✉️ <a href="mailto:cali.mathabatha@gmail.com" className="hover:text-[#c9a84c] transition-colors">cali.mathabatha@gmail.com</a></p>
              <p>📍 39 Voortrekker Street, Polokwane</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {footerNav.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="text-sm text-[#bbb] hover:text-[#c9a84c] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours & Credit Column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Office Hours</h4>
            <div className="text-sm text-[#889] space-y-1">
              <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p>Sat: By appointment</p>
              <p>Sun: Closed</p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-[#1a2a3a]">
              <p className="text-xs text-[#667]">
                Designed by{' '}
                <a 
                  href="https://inkspiredigitaldesigns.co.za" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#c9a84c] hover:underline font-medium"
                >
                  Inkspire Digital Designs
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1a2a3a] text-center text-sm text-[#667]">
          &copy; 2026 G20 Chambers. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'

const footerNav = [
  'About', 'Barristers', 'Clerks & Staff', 'Areas of Law',
  'Public Access', 'News & Blogs', 'Events', 'Join Us', 'Contact'
]

export default function Footer() {
  return (
    <footer className="bg-[#1a2a3a] text-[#aab] pt-12 pb-6 border-t-4 border-[#c9a84c]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
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
            <div className="mt-3 text-sm text-[#889]">
              <p>📞 <a href="tel:+27823413333" className="hover:text-[#c9a84c] transition-colors">082 341 3333</a></p>
              <p>✉️ <a href="mailto:cali.mathabatha@gmail.com" className="hover:text-[#c9a84c] transition-colors">cali.mathabatha@gmail.com</a></p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 max-w-md">
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

        <div className="mt-8 pt-6 border-t border-[#2C4355] text-center text-sm text-[#667]">
          &copy; 2026 G20 Chambers. All rights reserved. | The home of premier barristers
        </div>
      </div>
    </footer>
  )
}
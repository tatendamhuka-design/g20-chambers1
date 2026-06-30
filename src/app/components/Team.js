import Link from 'next/link'

const team = [
  { 
    initials: 'BM', 
    name: 'Barrister Mathabatha', 
    role: 'Head of Chambers', 
    specialism: 'Leading advocate with extensive experience in criminal law, human rights, and civil litigation.',
    slug: 'barrister-mathabatha',
    image: '/images/barristers/mathabatha.jpg',
  },
  { 
    initials: 'AM', 
    name: 'Adv. A. Mokoena', 
    role: 'Senior Barrister', 
    specialism: 'Criminal & Human Rights specialist with 15+ years\' experience.',
    slug: 'adv-mokoena',
    image: null,
  },
  { 
    initials: 'TN', 
    name: 'Adv. T. Ndlovu', 
    role: 'Senior Barrister', 
    specialism: 'Family & Civil Litigation expert, known for compassionate client care.',
    slug: 'adv-ndlovu',
    image: null,
  },
  { 
    initials: 'KM', 
    name: 'Adv. K. Mphahlele', 
    role: 'Barrister', 
    specialism: 'Immigration & Employment Law specialist with a strong track record.',
    slug: 'adv-mphahlele',
    image: null,
  },
]

export default function Team() {
  return (
    <section id="barristers" className="section-padding bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C4355] tracking-tight">
            Our <span className="text-[#c9a84c]">Team</span>
          </h2>
          <p className="text-[#666] text-lg mt-2 max-w-2xl mx-auto">
            A group of passionate advocates committed to justice
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-[#e8e0d4]">
          <Link href="/barristers" className="text-[#c9a84c] font-semibold hover:underline text-lg">
            View full barristers directory →
          </Link>
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member }) {
  const isHead = member.role === 'Head of Chambers'
  
  let cardStyles = 'bg-white rounded-xl p-6 text-center border hover:shadow-lg transition-all hover:-translate-y-1'
  if (isHead) {
    cardStyles += ' border-[#c9a84c] border-2 shadow-md'
  } else {
    cardStyles += ' border-[#e8e0d4]'
  }

  let avatarStyles = 'w-24 h-24 mx-auto rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 overflow-hidden'
  if (isHead) {
    avatarStyles += ' border-2 border-[#c9a84c]'
  }

  return (
    <div className={cardStyles}>
      <div className={avatarStyles}>
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${isHead ? 'bg-[#c9a84c]' : 'bg-[#2C4355]'}`}>
            {member.initials}
          </div>
        )}
      </div>

      {isHead && (
        <span className="inline-block bg-[#c9a84c] text-[#2C4355] text-xs font-bold tracking-wide uppercase px-3 py-0.5 rounded-full mb-2">
          Head of Chambers
        </span>
      )}

      <h3 className={`text-lg font-bold text-[#2C4355] ${isHead ? 'text-xl' : ''}`}>
        {member.name}
      </h3>
      
      <p className={`${isHead ? 'text-[#c9a84c]' : 'text-[#888]'} text-sm font-semibold`}>
        {member.role}
      </p>
      
      <p className="text-[#555] text-sm mt-2 leading-relaxed">{member.specialism}</p>

      {isHead && member.slug && (
        <Link 
          href={`/barristers/${member.slug}`}
          className="inline-block mt-4 text-[#c9a84c] font-semibold text-sm hover:underline"
        >
          View full profile →
        </Link>
      )}
    </div>
  )
}

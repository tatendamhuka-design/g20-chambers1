export const barristers = [
  // ===== HEAD OF CHAMBERS =====
  {
  id: 1,
  slug: 'barrister-mathabatha',
  name: 'Barrister Mathabatha',
  title: 'Head of Chambers',
  level: 'head',
  yearOfCall: 2005,
  practiceAreas: ['Criminal Law', 'Human Rights', 'Civil Litigation', 'Constitutional Law'],
  availability: 'accepting',
  rating: 4.9,
  reviewCount: 27,
  bio: `Barrister Mathabatha is the founding Head of G20 Chambers. With over 19 years of experience at the Bar, he is a leading advocate in Limpopo, known for his fearless representation in complex criminal and human rights cases.

He has successfully handled numerous high-profile matters, including landmark constitutional challenges and appeals before the Supreme Court of Appeal. His commitment to justice and the rule of law has earned him a reputation as one of the most respected advocates in the region.

Barrister Mathabatha is also deeply committed to access to justice, regularly providing pro bono services and mentoring young advocates. He believes in the power of the law to transform lives and fights tirelessly for every client, no matter how powerful the opponent.`,
  email: 'cali.mathabatha@gmail.com',
  phone: '082 341 3333',
  education: 'LLB, University of Limpopo',
  callToBar: '2005 - High Court of South Africa',
  chambers: 'G20 Chambers, Limpopo',
  profileImage: '/images/barristers/mathabatha.jpg',  // ← This is the path
  social: {
    linkedin: 'https://linkedin.com/in/barrister-mathabatha',
    twitter: 'https://twitter.com/barrister_mathabatha',
  },
  notableCases: [
    { title: 'Landmark constitutional challenge - R v. State', year: 2024, description: 'Successfully challenged unlawful detention, setting a precedent for due process in Limpopo.' },
    { title: 'Successful human rights appeal - S v. Mthembu', year: 2023, description: 'Secured the release of a client wrongly convicted, reinforcing the right to a fair trial.' },
    { title: 'Complex criminal defence - State v. Ramaphosa', year: 2022, description: 'Acquitted a client of serious criminal charges through meticulous cross-examination.' },
    { title: 'Civil rights victory - Community Land Claim', year: 2021, description: 'Negotiated a historic settlement returning ancestral land to a local community.' },
  ],
  reviews: [
    { id: 1, client: 'S. Mthembu', rating: 5, date: 'June 2024', comment: 'Barrister Mathabatha fought tirelessly for my freedom. I will be forever grateful.' },
    { id: 2, client: 'T. Ramaphosa', rating: 5, date: 'March 2024', comment: 'Professional, compassionate, and relentless. The best advocate in Limpopo.' },
    { id: 3, client: 'D. Patel', rating: 4, date: 'January 2024', comment: 'Very knowledgeable and strategic. Helped me navigate a complex legal matter.' },
  ],
},
  
  // ===== SENIOR BARRISTERS =====
  {
    id: 2,
    slug: 'adv-mokoena',
    name: 'Adv. A. Mokoena',
    title: 'Senior Barrister',
    level: 'senior',
    yearOfCall: 2010,
    practiceAreas: ['Criminal Law', 'Human Rights'],
    availability: 'accepting',
    rating: 4.8,
    reviewCount: 18,
    bio: 'Adv. Mokoena is a senior barrister with 14 years of experience in criminal defence and human rights law. He has a reputation for meticulous preparation and persuasive advocacy in court.',
    email: 'a.mokoena@g20chambers.co.za',
    phone: '082 341 3333',
    education: 'LLB, University of Cape Town',
    callToBar: '2010 - High Court of South Africa',
    chambers: 'G20 Chambers, Limpopo',
    profileImage: '/images/barristers/mokoena.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/adv-mokoena',
      twitter: null,
    },
    notableCases: [
      { title: 'Successful criminal defence - State v. Khoza', year: 2023, description: 'Secured acquittal in a complex murder trial through expert witness cross-examination.' },
      { title: 'Human rights challenge - S v. Police Commissioner', year: 2022, description: 'Challenged unlawful arrest and detention, leading to policy reform.' },
    ],
    reviews: [
      { id: 1, client: 'M. Mokoena', rating: 5, date: 'May 2024', comment: 'Adv. Mokoena was thorough and professional. Highly recommended.' },
      { id: 2, client: 'P. Ndlovu', rating: 4, date: 'February 2024', comment: 'Very knowledgeable in criminal law. Got me a fair outcome.' },
    ],
  },
  {
    id: 3,
    slug: 'adv-ndlovu',
    name: 'Adv. T. Ndlovu',
    title: 'Senior Barrister',
    level: 'senior',
    yearOfCall: 2012,
    practiceAreas: ['Family Law', 'Civil Litigation'],
    availability: 'limited',
    rating: 4.7,
    reviewCount: 15,
    bio: 'Adv. Ndlovu specialises in family law and civil litigation. She is known for her compassionate client care and strategic approach to complex disputes involving children and families.',
    email: 't.ndlovu@g20chambers.co.za',
    phone: '082 341 3333',
    education: 'LLB, University of Pretoria',
    callToBar: '2012 - High Court of South Africa',
    chambers: 'G20 Chambers, Limpopo',
    profileImage: '/images/barristers/ndlovu.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/adv-ndlovu',
      twitter: null,
    },
    notableCases: [
      { title: 'Child custody appeal - Ndlovu v. Ndlovu', year: 2023, description: 'Secured parental rights for a mother in a complex custody dispute.' },
      { title: 'Civil litigation victory - Property dispute', year: 2022, description: 'Successfully resolved a lengthy property dispute through strategic negotiation.' },
    ],
    reviews: [
      { id: 1, client: 'R. Mthembu', rating: 5, date: 'April 2024', comment: 'Adv. Ndlovu is compassionate and fought hard for my children.' },
      { id: 2, client: 'S. Naidoo', rating: 4, date: 'December 2023', comment: 'Professional and caring. Helped me through a difficult divorce.' },
    ],
  },

  // ===== BARRISTERS =====
  {
    id: 4,
    slug: 'adv-mphahlele',
    name: 'Adv. K. Mphahlele',
    title: 'Barrister',
    level: 'barrister',
    yearOfCall: 2016,
    practiceAreas: ['Immigration Law', 'Employment Law'],
    availability: 'accepting',
    rating: 4.5,
    reviewCount: 10,
    bio: 'Adv. Mphahlele is a barrister with a strong focus on immigration and employment law. He has a proven track record in asylum cases, visa appeals, and workplace disputes.',
    email: 'k.mphahlele@g20chambers.co.za',
    phone: '082 341 3333',
    education: 'LLB, University of Johannesburg',
    callToBar: '2016 - High Court of South Africa',
    chambers: 'G20 Chambers, Limpopo',
    profileImage: '/images/barristers/mphahlele.jpg',
    social: {
      linkedin: null,
      twitter: null,
    },
    notableCases: [
      { title: 'Asylum appeal - S v. Home Affairs', year: 2023, description: 'Successfully appealed a deportation order, granting the client asylum.' },
      { title: 'Employment dispute - Workplace discrimination', year: 2022, description: 'Secured compensation for a client in a landmark employment discrimination case.' },
    ],
    reviews: [
      { id: 1, client: 'A. Patel', rating: 5, date: 'March 2024', comment: 'Adv. Mphahlele saved me from deportation. I cannot thank him enough.' },
    ],
  },

  // ===== JUNIOR BARRISTERS =====
  {
    id: 5,
    slug: 'adv-maseko',
    name: 'Adv. L. Maseko',
    title: 'Junior Barrister',
    level: 'junior',
    yearOfCall: 2020,
    practiceAreas: ['Public Law', 'Administrative Law'],
    availability: 'accepting',
    rating: 4.6,
    reviewCount: 8,
    bio: 'Adv. Maseko is a passionate junior barrister specialising in public and administrative law. She is committed to access to justice and has experience in judicial review and regulatory matters.',
    email: 'l.maseko@g20chambers.co.za',
    phone: '082 341 3333',
    education: 'LLB, University of KwaZulu-Natal',
    callToBar: '2020 - High Court of South Africa',
    chambers: 'G20 Chambers, Limpopo',
    profileImage: '/images/barristers/maseko.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/adv-maseko',
      twitter: 'https://twitter.com/adv_maseko',
    },
    notableCases: [
      { title: 'Judicial review - Environmental regulation', year: 2023, description: 'Challenged unlawful government action, resulting in policy reversal.' },
    ],
    reviews: [
      { id: 1, client: 'T. Ndlovu', rating: 5, date: 'February 2024', comment: 'Adv. Maseko is brilliant and passionate about justice.' },
    ],
  },

  // ===== PUPILS =====
  {
    id: 6,
    slug: 'pupil-mphahlele',
    name: 'N. Mphahlele',
    title: 'Pupil',
    level: 'pupil',
    yearOfCall: 2024,
    practiceAreas: ['Criminal Law', 'Family Law'],
    availability: 'accepting',
    rating: null,
    reviewCount: 0,
    bio: 'N. Mphahlele is currently undergoing pupillage under the supervision of Barrister Mathabatha. She is developing expertise in criminal and family law.',
    email: 'n.mphahlele@g20chambers.co.za',
    phone: '082 341 3333',
    education: 'LLB, University of Limpopo',
    callToBar: '2024 - Pupil',
    chambers: 'G20 Chambers, Limpopo',
    profileImage: null,
    social: {
      linkedin: null,
      twitter: null,
    },
    notableCases: [],
    reviews: [],
  },

  // ===== COUNCIL =====
  {
    id: 7,
    slug: 'council-ramaphosa',
    name: 'M. Ramaphosa',
    title: 'Council Member',
    level: 'council',
    yearOfCall: 1998,
    practiceAreas: ['Legal Ethics', 'Governance'],
    availability: 'limited',
    rating: null,
    reviewCount: 0,
    bio: 'M. Ramaphosa is a Council Member at G20 Chambers, bringing decades of experience in legal ethics and governance. He provides strategic oversight and guidance to the chambers.',
    email: 'm.ramaphosa@g20chambers.co.za',
    phone: '082 341 3333',
    education: 'LLB, University of Cape Town',
    callToBar: '1998 - High Court of South Africa',
    chambers: 'G20 Chambers, Limpopo',
    profileImage: null,
    social: {
      linkedin: 'https://linkedin.com/in/m-ramaphosa',
      twitter: null,
    },
    notableCases: [],
    reviews: [],
  },
]

// Helper functions
export const practiceAreas = [...new Set(barristers.flatMap(b => b.practiceAreas))].sort()
export const availabilityStatuses = ['accepting', 'limited', 'full']

// Get a barrister by slug
export function getBarristerBySlug(slug) {
  return barristers.find(b => b.slug === slug)
}

// Get barristers by level
export function getBarristersByLevel(level) {
  return barristers.filter(b => b.level === level)
}

// Get related barristers (same practice area, excluding current)
export function getRelatedBarristers(slug, limit = 3) {
  const current = getBarristerBySlug(slug)
  if (!current) return []
  
  return barristers
    .filter(b => b.id !== current.id && b.practiceAreas.some(area => current.practiceAreas.includes(area)))
    .slice(0, limit)
}

// Get all levels with their members
export function getGroupedBarristers() {
  const levels = ['head', 'senior', 'barrister', 'junior', 'pupil', 'council']
  const levelLabels = {
    head: 'Head of Chambers',
    senior: 'Senior Barristers',
    barrister: 'Barristers',
    junior: 'Junior Barristers',
    pupil: 'Pupils',
    council: 'Council',
  }
  
  return levels.map(level => ({
    level,
    label: levelLabels[level],
    members: getBarristersByLevel(level),
  })).filter(group => group.members.length > 0)
}
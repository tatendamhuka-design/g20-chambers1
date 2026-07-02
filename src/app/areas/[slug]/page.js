import { notFound } from 'next/navigation'
import { barristers } from '@/data/barristers'
import PracticeAreaClient from './PracticeAreaClient'

// Practice areas data - moved to a separate file or kept here
const practiceAreas = {
  'criminal-law': {
    title: 'Criminal Law',
    icon: 'Scale',
    iconBg: 'bg-red-50 text-red-600',
    description: 'Expert defence and prosecution representation in all criminal matters.',
    ogImage: '/images/areas/criminal-law-og.jpg',
    heroImage: '/images/areas/criminal-law-hero.jpg',
    fullDescription: `
      G20 Chambers provides expert criminal law representation across all levels of the South African justice system. Our barristers are experienced in bail applications, plea negotiations, complex trials, and appeals before the High Court and Supreme Court of Appeal.

      We handle a wide range of criminal matters including:
      • Serious and violent crimes
      • White-collar crime and fraud
      • Drug offences
      • Driving offences
      • Bail applications
      • Appeals and reviews

      Our approach is thorough and strategic. We leave no stone unturned in building your defence, ensuring that every legal avenue is explored.
    `,
    stats: '50+ Cases Won • 15+ Years Experience',
    cases: '50+',
    notableCases: [
      { title: 'Landmark constitutional challenge - R v. State', year: 2024, description: 'Successfully challenged unlawful detention, setting a precedent for due process in Limpopo.' },
      { title: 'Successful criminal defence - State v. Khoza', year: 2023, description: 'Secured acquittal in a complex murder trial through expert witness cross-examination.' },
      { title: 'Complex criminal defence - State v. Ramaphosa', year: 2022, description: 'Acquitted a client of serious criminal charges through meticulous cross-examination.' },
    ],
    testimonials: [
      { client: 'S. Mthembu', rating: 5, date: 'June 2024', comment: 'Barrister Mathabatha fought tirelessly for my freedom. I will be forever grateful.' },
      { client: 'M. Mokoena', rating: 5, date: 'May 2024', comment: 'Adv. Mokoena was thorough and professional. Highly recommended for criminal defence.' },
    ],
    faq: [
      { question: 'What should I do if I am arrested?', answer: 'You have the right to remain silent and the right to legal representation. Contact G20 Chambers immediately for legal advice.' },
      { question: 'How much does a criminal defence lawyer cost?', answer: 'Costs vary depending on the complexity of the case. We offer competitive rates and can discuss payment options during your initial consultation.' },
      { question: 'Can you help with bail applications?', answer: 'Yes, our barristers are experienced in bail applications and can represent you at bail hearings.' },
      { question: 'What happens if I am found guilty?', answer: 'We will advise you on the best course of action, including appeals and sentencing options. Our barristers will fight for the best possible outcome.' },
    ],
    seoTitle: 'Criminal Law | G20 Chambers | Expert Defence & Prosecution in Limpopo',
    seoDescription: 'Expert criminal defence and prosecution in Limpopo. Contact our specialist barristers for bail applications, trials, and appeals. Call 082 341 3333.',
    keywords: 'criminal defence Limpopo, criminal lawyer Polokwane, bail applications, criminal trials, appeals, prosecution',
  },
  'family-law': {
    title: 'Family Law',
    icon: 'Home',
    iconBg: 'bg-pink-50 text-pink-600',
    description: 'Compassionate and strategic representation in family matters.',
    ogImage: '/images/areas/family-law-og.jpg',
    heroImage: '/images/areas/family-law-hero.jpg',
    fullDescription: `
      G20 Chambers provides compassionate and strategic family law representation. Our barristers understand the emotional and financial challenges that family disputes can bring, and we are committed to achieving the best possible outcomes for our clients.

      We handle a wide range of family law matters including:
      • Divorce and separation
      • Child custody and access
      • Maintenance and spousal support
      • Domestic violence protection orders
      • Parental responsibilities and rights
      • Mediation and alternative dispute resolution

      Our approach is sensitive and solution-focused, always keeping the best interests of children and families at the forefront.
    `,
    stats: '100+ Families Helped • 12+ Years Experience',
    cases: '100+',
    notableCases: [
      { title: 'Child custody appeal - Ndlovu v. Ndlovu', year: 2023, description: 'Secured parental rights for a mother in a complex custody dispute.' },
      { title: 'High Court victory - Divorce settlement', year: 2022, description: 'Successfully negotiated a fair divorce settlement protecting our client\'s interests.' },
    ],
    testimonials: [
      { client: 'R. Mthembu', rating: 5, date: 'April 2024', comment: 'Adv. Ndlovu is compassionate and fought hard for my children.' },
    ],
    faq: [
      { question: 'How long does a divorce take?', answer: 'The duration varies depending on the complexity of the case and whether the divorce is contested or uncontested.' },
      { question: 'What factors determine child custody?', answer: 'The court considers the best interests of the child, including the child\'s age, emotional needs, and the ability of each parent to provide care.' },
      { question: 'Do I need a lawyer for a divorce?', answer: 'While not mandatory, having a lawyer ensures your rights are protected and that all legal requirements are met.' },
    ],
    seoTitle: 'Family Law | G20 Chambers | Compassionate Family Legal Services in Limpopo',
    seoDescription: 'Compassionate family law representation in Limpopo. Contact our specialist barristers for divorce, child custody, and maintenance. Call 082 341 3333.',
    keywords: 'family law Limpopo, divorce lawyer Polokwane, child custody, maintenance, family dispute resolution',
  },
  'human-rights': {
    title: 'Human Rights',
    icon: 'FileText',
    iconBg: 'bg-blue-50 text-blue-600',
    description: 'Defending fundamental rights through constitutional litigation.',
    ogImage: '/images/areas/human-rights-og.jpg',
    heroImage: '/images/areas/human-rights-hero.jpg',
    fullDescription: `
      G20 Chambers is committed to defending fundamental rights and challenging injustice through constitutional litigation. Our barristers have a proven track record of success in human rights cases.

      We handle a wide range of human rights matters including:
      • Constitutional challenges
      • Unlawful detention and arrest
      • Freedom of expression
      • Right to a fair trial
      • Equality and non-discrimination
      • Access to justice

      Our barristers are fearless advocates for justice, prepared to take on powerful opponents and fight for what is right.
    `,
    stats: '30+ Landmark Cases • 10+ Years Experience',
    cases: '30+',
    notableCases: [
      { title: 'Human rights appeal - S v. Mthembu', year: 2023, description: 'Secured the release of a client wrongly convicted, reinforcing the right to a fair trial.' },
      { title: 'Human rights challenge - S v. Police Commissioner', year: 2022, description: 'Challenged unlawful arrest and detention, leading to policy reform.' },
    ],
    testimonials: [
      { client: 'T. Ramaphosa', rating: 5, date: 'March 2024', comment: 'Professional, compassionate, and relentless. The best advocate for human rights in Limpopo.' },
    ],
    faq: [
      { question: 'What are my fundamental rights?', answer: 'The South African Constitution protects a wide range of rights, including the right to life, dignity, equality, and freedom from discrimination.' },
      { question: 'How can I challenge unlawful detention?', answer: 'Our barristers can represent you in court to challenge unlawful detention and seek your immediate release.' },
    ],
    seoTitle: 'Human Rights | G20 Chambers | Constitutional & Human Rights Lawyers in Limpopo',
    seoDescription: 'Expert human rights and constitutional litigation in Limpopo. Contact our specialist barristers to defend your fundamental rights. Call 082 341 3333.',
    keywords: 'human rights lawyers Limpopo, constitutional litigation, fundamental rights, human rights advocacy, civil rights',
  },
  'civil-litigation': {
    title: 'Civil Litigation',
    icon: 'Landmark',
    iconBg: 'bg-indigo-50 text-indigo-600',
    description: 'Commercial disputes, personal injury, and property matters.',
    ogImage: '/images/areas/civil-litigation-og.jpg',
    heroImage: '/images/areas/civil-litigation-hero.jpg',
    fullDescription: `
      G20 Chambers provides expert civil litigation representation across a wide range of disputes. Our barristers are skilled negotiators and trial advocates, committed to achieving the best outcomes for our clients.

      We handle a wide range of civil litigation matters including:
      • Commercial and contractual disputes
      • Personal injury claims
      • Property disputes
      • Professional negligence claims
      • Debt recovery
      • Defamation and reputation management

      Our approach is strategic and results-focused, always seeking the most effective resolution for our clients.
    `,
    stats: '200+ Cases Resolved • 15+ Years Experience',
    cases: '200+',
    notableCases: [
      { title: 'Civil rights victory - Community Land Claim', year: 2021, description: 'Negotiated a historic settlement returning ancestral land to a local community.' },
      { title: 'Civil litigation victory - Property dispute', year: 2022, description: 'Successfully resolved a lengthy property dispute through strategic negotiation.' },
    ],
    testimonials: [
      { client: 'D. Patel', rating: 4, date: 'January 2024', comment: 'Very knowledgeable and strategic. Helped me navigate a complex legal matter.' },
    ],
    faq: [
      { question: 'How long does a civil case take?', answer: 'The duration varies depending on the complexity of the case and whether it goes to trial.' },
      { question: 'What is the cost of civil litigation?', answer: 'Costs depend on the complexity of the matter. We provide transparent fee structures during your initial consultation.' },
    ],
    seoTitle: 'Civil Litigation | G20 Chambers | Commercial & Civil Dispute Lawyers in Limpopo',
    seoDescription: 'Expert civil litigation in Limpopo. Contact our specialist barristers for commercial disputes, personal injury, and property matters. Call 082 341 3333.',
    keywords: 'civil litigation Limpopo, commercial dispute lawyer, personal injury claims, property disputes, civil litigation',
  },
  'immigration-law': {
    title: 'Immigration Law',
    icon: 'Globe',
    iconBg: 'bg-cyan-50 text-cyan-600',
    description: 'Expert guidance on asylum, deportation, and visa appeals.',
    ogImage: '/images/areas/immigration-law-og.jpg',
    heroImage: '/images/areas/immigration-law-hero.jpg',
    fullDescription: `
      G20 Chambers provides expert immigration law representation. Our barristers understand the complexities of South African immigration law and are committed to protecting your rights.

      We handle a wide range of immigration matters including:
      • Asylum applications
      • Deportation appeals
      • Visa applications
      • Citizenship matters
      • Refugee status
      • Immigration detention

      Our approach is compassionate and thorough, ensuring that your case is presented with the best possible chance of success.
    `,
    stats: '150+ Clients Helped • 8+ Years Experience',
    cases: '150+',
    notableCases: [
      { title: 'Asylum appeal - S v. Home Affairs', year: 2023, description: 'Successfully appealed a deportation order, granting the client asylum.' },
    ],
    testimonials: [
      { client: 'A. Patel', rating: 5, date: 'March 2024', comment: 'Adv. Mphahlele saved me from deportation. I cannot thank him enough.' },
    ],
    faq: [
      { question: 'How do I apply for asylum?', answer: 'Our barristers can guide you through the asylum application process and represent you at hearings.' },
      { question: 'What happens if I am facing deportation?', answer: 'We can represent you in deportation proceedings and appeal any adverse decisions.' },
    ],
    seoTitle: 'Immigration Law | G20 Chambers | Asylum & Deportation Lawyers in Limpopo',
    seoDescription: 'Expert immigration law in Limpopo. Contact our specialist barristers for asylum, deportation appeals, and visa applications. Call 082 341 3333.',
    keywords: 'immigration lawyer Limpopo, asylum applications, deportation appeals, visa applications, refugee status',
  },
  'employment-law': {
    title: 'Employment Law',
    icon: 'Briefcase',
    iconBg: 'bg-amber-50 text-amber-600',
    description: 'Workplace disputes, unfair dismissal, and discrimination.',
    ogImage: '/images/areas/employment-law-og.jpg',
    heroImage: '/images/areas/employment-law-hero.jpg',
    fullDescription: `
      G20 Chambers provides expert employment law representation for both employees and employers. Our barristers are experienced in all aspects of employment law.

      We handle a wide range of employment matters including:
      • Unfair dismissal
      • Discrimination claims
      • Workplace harassment
      • Employment contract disputes
      • Labour Court proceedings
      • CCMA matters

      Our approach is strategic and results-focused, ensuring that your rights are protected throughout the process.
    `,
    stats: '80+ Cases Won • 10+ Years Experience',
    cases: '80+',
    notableCases: [
      { title: 'Employment dispute - Workplace discrimination', year: 2022, description: 'Secured compensation for a client in a landmark employment discrimination case.' },
    ],
    testimonials: [],
    faq: [
      { question: 'What is unfair dismissal?', answer: 'Unfair dismissal occurs when an employee is dismissed without a valid reason or without following proper procedures.' },
      { question: 'How do I challenge a dismissal?', answer: 'Our barristers can represent you at the CCMA or Labour Court to challenge unfair dismissal.' },
    ],
    seoTitle: 'Employment Law | G20 Chambers | Labour & Employment Lawyers in Limpopo',
    seoDescription: 'Expert employment law in Limpopo. Contact our specialist barristers for unfair dismissal, discrimination, and workplace disputes. Call 082 341 3333.',
    keywords: 'employment lawyer Limpopo, unfair dismissal, discrimination claims, labour law, CCMA representation',
  },
  'public-administrative-law': {
    title: 'Public & Administrative Law',
    icon: 'Building',
    iconBg: 'bg-purple-50 text-purple-600',
    description: 'Judicial review, regulatory matters, and public interest cases.',
    ogImage: '/images/areas/public-administrative-law-og.jpg',
    heroImage: '/images/areas/public-administrative-law-hero.jpg',
    fullDescription: `
      G20 Chambers provides expert public and administrative law representation. Our barristers are experienced in challenging government decisions and protecting the public interest.

      We handle a wide range of public law matters including:
      • Judicial review
      • Regulatory compliance
      • Public interest litigation
      • Administrative law challenges
      • Constitutional law matters
      • Government accountability

      Our approach is strategic and principled, committed to upholding the rule of law and protecting the rights of citizens.
    `,
    stats: '40+ Judicial Reviews • 8+ Years Experience',
    cases: '40+',
    notableCases: [
      { title: 'Judicial review - Environmental regulation', year: 2023, description: 'Challenged unlawful government action, resulting in policy reversal.' },
    ],
    testimonials: [],
    faq: [
      { question: 'What is judicial review?', answer: 'Judicial review is a process by which courts review government decisions to ensure they are lawful and reasonable.' },
      { question: 'How do I challenge a government decision?', answer: 'Our barristers can advise you on the merits of a judicial review application and represent you in court.' },
    ],
    seoTitle: 'Public & Administrative Law | G20 Chambers | Judicial Review & Public Interest Lawyers',
    seoDescription: 'Expert public and administrative law in Limpopo. Contact our specialist barristers for judicial review and public interest cases. Call 082 341 3333.',
    keywords: 'public law Limpopo, administrative law, judicial review, regulatory compliance, public interest litigation',
  },
  'property-land-law': {
    title: 'Property & Land Law',
    icon: 'Users',
    iconBg: 'bg-emerald-50 text-emerald-600',
    description: 'Property disputes, land claims, and conveyancing advice.',
    ogImage: '/images/areas/property-land-law-og.jpg',
    heroImage: '/images/areas/property-land-law-hero.jpg',
    fullDescription: `
      G20 Chambers provides expert property and land law representation. Our barristers are experienced in all aspects of property law.

      We handle a wide range of property matters including:
      • Property disputes
      • Land claims
      • Conveyancing advice
      • Property litigation
      • Eviction proceedings
      • Lease disputes

      Our approach is thorough and strategic, ensuring that your property rights are protected.
    `,
    stats: '60+ Property Cases • 10+ Years Experience',
    cases: '60+',
    notableCases: [
      { title: 'Civil rights victory - Community Land Claim', year: 2021, description: 'Negotiated a historic settlement returning ancestral land to a local community.' },
    ],
    testimonials: [],
    faq: [
      { question: 'How do I resolve a property dispute?', answer: 'Our barristers can advise you on the best course of action, whether through negotiation, mediation, or litigation.' },
      { question: 'What is the process for a land claim?', answer: 'We can guide you through the land claim process and represent you in court if necessary.' },
    ],
    seoTitle: 'Property & Land Law | G20 Chambers | Property & Land Claims Lawyers in Limpopo',
    seoDescription: 'Expert property and land law in Limpopo. Contact our specialist barristers for property disputes, land claims, and conveyancing. Call 082 341 3333.',
    keywords: 'property lawyer Limpopo, land claims, property disputes, conveyancing, property litigation',
  },
}

// Generate static paths - this MUST be in a Server Component
export function generateStaticParams() {
  return Object.keys(practiceAreas).map((slug) => ({
    slug,
  }))
}

// Helper function to get barristers for a practice area
function getBarristersByArea(areaTitle) {
  return barristers.filter(barrister => {
    const areas = Array.isArray(barrister.practiceAreas) 
      ? barrister.practiceAreas 
      : JSON.parse(barrister.practiceAreas || '[]')
    return areas.includes(areaTitle)
  })
}

export default function PracticeAreaPage({ params }) {
  const areaData = practiceAreas[params.slug]

  if (!areaData) {
    notFound()
  }

  const barristersInArea = getBarristersByArea(areaData.title)

  // Pass the data to the client component
  return (
    <PracticeAreaClient 
      areaData={areaData} 
      barristersInArea={barristersInArea}
      slug={params.slug}
    />
  )
}
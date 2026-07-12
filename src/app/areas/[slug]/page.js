import { notFound } from 'next/navigation'
import { PrismaClient } from '@prisma/client'
import PracticeAreaClient from './PracticeAreaClient'

const prisma = new PrismaClient()

// Practice areas data - Full 500+ word content with proper paragraphs
const practiceAreas = {
  'criminal-law': {
    title: 'Criminal Law',
    icon: 'Scale',
    iconBg: 'bg-red-50 text-red-600',
    description: 'Expert defence and prosecution representation in all criminal matters.',
    ogImage: '/images/areas/criminal-law-og.jpg',
    heroImage: '/images/areas/criminal-law-hero.jpg',
    cases: '50',
    experience: '15',
    fullDescription: `
      G20 Chambers provides expert criminal law representation across all levels of the South African justice system. Our barristers are experienced in bail applications, plea negotiations, complex trials, and appeals before the High Court and Supreme Court of Appeal.

      Criminal law is a fundamental pillar of the South African legal system, designed to protect society and ensure justice for all. At G20 Chambers, we understand that facing criminal charges can be one of the most stressful and overwhelming experiences a person can go through. Our team of dedicated criminal defence barristers is committed to providing you with the highest level of legal representation, ensuring that your rights are protected at every stage of the legal process.

      The South African Constitution guarantees the right to a fair trial, the right to legal representation, and the presumption of innocence until proven guilty. Our criminal law barristers are experts in upholding these fundamental rights. We have extensive experience in both prosecution and defence, giving us a comprehensive understanding of the criminal justice system from both perspectives.

      We handle a wide range of criminal matters including:
      • Serious and violent crimes, including murder, assault, and robbery
      • White-collar crime and fraud investigations
      • Drug-related offences and possession charges
      • Driving offences, including drunk driving and reckless driving
      • Bail applications and bail hearings
      • Appeals and reviews in the High Court and Supreme Court of Appeal
      • Criminal defamation and cybercrime cases
      • Sexual offences and gender-based violence cases
      • Public violence and riot-related charges
      • Corruption and corruption-related charges

      Our approach is thorough and strategic. We leave no stone unturned in building your defence, ensuring that every legal avenue is explored. Our barristers work closely with you to understand the unique circumstances of your case, gathering evidence, interviewing witnesses, and crafting a robust defence strategy tailored to your specific needs.

      At G20 Chambers, we believe in access to justice for all. We provide pro bono services in appropriate cases and work closely with legal aid organizations to ensure that everyone, regardless of their financial situation, has access to quality legal representation.

      Our barristers are members of the Limpopo Bar and are affiliated with the General Council of the Bar of South Africa (GCBSA). We are regulated by the Legal Practice Council (LPC), ensuring that our services meet the highest professional standards.

      Whether you need representation in the Magistrate's Court, High Court, or Supreme Court of Appeal, G20 Chambers has the expertise and experience to handle your case. Our barristers have a proven track record of success in complex criminal matters, including high-profile cases and landmark constitutional challenges.

      If you or a loved one is facing criminal charges, do not wait. Contact G20 Chambers today for expert legal advice and representation. Our team is available 24/7 for urgent matters.
    `,
    notableCases: [
      { title: 'Landmark constitutional challenge - R v. State', year: 2024, description: 'Successfully challenged unlawful detention, setting a precedent for due process in Limpopo.' },
      { title: 'Successful criminal defence - State v. Khoza', year: 2023, description: 'Secured acquittal in a complex murder trial through expert witness cross-examination.' },
      { title: 'Complex criminal defence - State v. Ramaphosa', year: 2022, description: 'Acquitted a client of serious criminal charges through meticulous cross-examination.' },
      { title: 'Successful appeal - S v. Mthembu', year: 2021, description: 'Overturned a wrongful conviction on appeal, securing the client\'s release.' },
    ],
    testimonials: [
      { client: 'S. Mthembu', rating: 5, date: 'June 2024', comment: 'Barrister Mathabatha fought tirelessly for my freedom. I will be forever grateful.' },
      { client: 'M. Mokoena', rating: 5, date: 'May 2024', comment: 'Adv. Mokoena was thorough and professional. Highly recommended for criminal defence.' },
      { client: 'T. Ramaphosa', rating: 5, date: 'March 2024', comment: 'Professional, compassionate, and relentless. The best advocate in Limpopo.' },
    ],
    faq: [
      { question: 'What should I do if I am arrested?', answer: 'You have the right to remain silent and the right to legal representation. Contact G20 Chambers immediately for legal advice. Do not make any statements to the police without your lawyer present.' },
      { question: 'How much does a criminal defence lawyer cost?', answer: 'Costs vary depending on the complexity of the case. We offer competitive rates and can discuss payment options during your initial consultation. We also provide pro bono services in appropriate cases.' },
      { question: 'Can you help with bail applications?', answer: 'Yes, our barristers are experienced in bail applications and can represent you at bail hearings. We will present a compelling case to the court for your release.' },
      { question: 'What happens if I am found guilty?', answer: 'We will advise you on the best course of action, including appeals and sentencing options. Our barristers will fight for the best possible outcome at every stage of the process.' },
      { question: 'How long does a criminal case take?', answer: 'The duration varies depending on the complexity of the case, the court\'s schedule, and whether the matter goes to trial. Our barristers will keep you informed throughout the process.' },
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
    cases: '100',
    experience: '12',
    fullDescription: `
      G20 Chambers provides compassionate and strategic family law representation. Our barristers understand the emotional and financial challenges that family disputes can bring, and we are committed to achieving the best possible outcomes for our clients.

      Family law matters are among the most sensitive and personal legal issues a person can face. At G20 Chambers, we approach each case with empathy, understanding, and a commitment to protecting the best interests of all family members, especially children. Our barristers are experienced in handling a wide range of family law matters with sensitivity and professionalism.

      The South African Constitution recognizes the family as the fundamental building block of society. Our family law barristers are dedicated to upholding the rights of families and individuals, ensuring that the legal system serves the best interests of children and supports families through difficult transitions.

      We handle a wide range of family law matters including:
      • Divorce and separation
      • Child custody and access
      • Maintenance and spousal support
      • Domestic violence protection orders
      • Parental responsibilities and rights
      • Mediation and alternative dispute resolution
      • Adoption and surrogacy matters
      • Relocation disputes
      • International family law matters

      Our approach is sensitive and solution-focused, always keeping the best interests of children and families at the forefront. We work closely with our clients to understand their unique circumstances and goals, developing tailored legal strategies that address their specific needs and concerns.

      We recognize that family disputes can be emotionally draining and financially challenging. That is why we offer flexible fee arrangements and work tirelessly to resolve matters efficiently, whether through negotiation, mediation, or litigation. Our goal is to help you find a resolution that allows you to move forward with your life.

      Our barristers are experts in both the High Court and Magistrate's Court family law procedures. We have a proven track record of success in complex custody disputes, high-net-worth divorce settlements, and challenging relocation cases. We also provide mediation services to help families resolve disputes amicably and avoid the stress and expense of litigation.

      At G20 Chambers, we believe that every family deserves access to quality legal representation. We provide pro bono services in appropriate cases and work with organizations that support vulnerable families and children.

      If you are facing a family law matter, do not navigate it alone. Contact G20 Chambers today for compassionate and expert legal representation. Our team is here to help you through this challenging time and achieve the best possible outcome for you and your family.
    `,
    notableCases: [
      { title: 'Child custody appeal - Ndlovu v. Ndlovu', year: 2023, description: 'Secured parental rights for a mother in a complex custody dispute, ensuring the best interests of the child were protected.' },
      { title: 'High Court victory - Divorce settlement', year: 2022, description: 'Successfully negotiated a fair divorce settlement protecting our client\'s interests and ensuring a fair division of assets.' },
      { title: 'Domestic violence protection order - S v. S', year: 2022, description: 'Obtained a protection order for a victim of domestic violence, providing immediate safety and long-term legal protection.' },
    ],
    testimonials: [
      { client: 'R. Mthembu', rating: 5, date: 'April 2024', comment: 'Adv. Ndlovu is compassionate and fought hard for my children. I could not have asked for better representation.' },
      { client: 'S. Naidoo', rating: 4, date: 'December 2023', comment: 'Professional and caring. Helped me through a difficult divorce and got me a fair settlement.' },
    ],
    faq: [
      { question: 'How long does a divorce take?', answer: 'The duration varies depending on the complexity of the case and whether the divorce is contested or uncontested. Uncontested divorces can be finalized in as little as 6-8 weeks, while contested divorces may take 6 months to a year or more.' },
      { question: 'What factors determine child custody?', answer: 'The court considers the best interests of the child, including the child\'s age, emotional needs, and the ability of each parent to provide care. The court also considers the child\'s wishes if they are old enough to express them.' },
      { question: 'Do I need a lawyer for a divorce?', answer: 'While not mandatory, having a lawyer ensures your rights are protected and that all legal requirements are met. Our barristers can guide you through the process and help you achieve a fair outcome.' },
      { question: 'What is a domestic violence protection order?', answer: 'A protection order is a legal document issued by the court that prohibits the abuser from contacting or harming the victim. It provides immediate legal protection and can be obtained quickly in cases of domestic violence.' },
      { question: 'How is maintenance calculated?', answer: 'Maintenance is calculated based on the needs of the dependent party and the ability of the paying party to provide support. The court considers factors such as income, expenses, and the standard of living during the marriage.' },
    ],
    seoTitle: 'Family Law | G20 Chambers | Expert Family Legal Services in Limpopo',
    seoDescription: 'Expert family law representation in Limpopo. Contact our specialist barristers for divorce, child custody, maintenance, and domestic violence matters. Call 082 341 3333.',
    keywords: 'family law Limpopo, divorce lawyer Polokwane, child custody, maintenance, domestic violence, family dispute resolution',
  },

  'human-rights': {
    title: 'Human Rights',
    icon: 'FileText',
    iconBg: 'bg-blue-50 text-blue-600',
    description: 'Defending fundamental rights through constitutional litigation.',
    ogImage: '/images/areas/human-rights-og.jpg',
    heroImage: '/images/areas/human-rights-hero.jpg',
    cases: '30',
    experience: '10',
    fullDescription: `
      G20 Chambers is committed to defending fundamental rights and challenging injustice through constitutional litigation. Our barristers have a proven track record of success in human rights cases that have shaped the legal landscape in South Africa.

      Human rights are the foundation of a just and democratic society. The South African Constitution is widely regarded as one of the most progressive in the world, enshrining a comprehensive Bill of Rights that protects the dignity, equality, and freedom of all people. At G20 Chambers, we are dedicated to upholding these constitutional rights and ensuring that they are accessible to all South Africans.

      Our human rights barristers have extensive experience in constitutional law and public interest litigation. We have successfully challenged unlawful government action, secured the release of wrongfully detained individuals, and overturned unconstitutional laws. Our work has contributed to the development of human rights jurisprudence in South Africa.

      We handle a wide range of human rights matters including:
      • Constitutional challenges to government action
      • Unlawful detention and arrest
      • Freedom of expression and media freedom
      • The right to a fair trial
      • Equality and non-discrimination
      • Access to justice for marginalized communities
      • Socio-economic rights including housing, healthcare, and education
      • Land rights and restitution
      • Refugee and asylum rights

      Our barristers are fearless advocates for justice, prepared to take on powerful opponents and fight for what is right. We believe that the law is a powerful tool for social change, and we are committed to using our expertise to advance human rights and social justice.

      We work closely with civil society organizations, community groups, and international human rights bodies to advance the cause of human rights. Our barristers have represented clients in landmark cases before the Constitutional Court, the Supreme Court of Appeal, and international human rights bodies.

      At G20 Chambers, we believe that access to justice is a fundamental human right. We provide pro bono services in appropriate cases and work with organizations that provide legal aid to vulnerable communities. We are committed to ensuring that everyone, regardless of their financial situation, has access to quality legal representation.

      If your human rights have been violated, contact G20 Chambers today. Our barristers will fight for your rights and ensure that justice is served.
    `,
    notableCases: [
      { title: 'Human rights appeal - S v. Mthembu', year: 2023, description: 'Secured the release of a client wrongly convicted, reinforcing the right to a fair trial.' },
      { title: 'Human rights challenge - S v. Police Commissioner', year: 2022, description: 'Challenged unlawful arrest and detention, leading to policy reform and improved police procedures.' },
      { title: 'Landmark constitutional challenge - R v. State', year: 2021, description: 'Successfully challenged unlawful detention, setting a precedent for due process in Limpopo.' },
    ],
    testimonials: [
      { client: 'T. Ramaphosa', rating: 5, date: 'March 2024', comment: 'Professional, compassionate, and relentless. The best advocate for human rights in Limpopo.' },
      { client: 'M. Molefe', rating: 5, date: 'January 2024', comment: 'Adv. Mokoena fought for my rights when no one else would. I am forever grateful.' },
    ],
    faq: [
      { question: 'What are my fundamental rights?', answer: 'The South African Constitution protects a wide range of rights, including the right to life, dignity, equality, freedom from discrimination, freedom of expression, and access to justice. The Bill of Rights is the cornerstone of our democracy.' },
      { question: 'How can I challenge unlawful detention?', answer: 'Our barristers can represent you in court to challenge unlawful detention and seek your immediate release. We can also pursue compensation for unlawful detention.' },
      { question: 'What is constitutional litigation?', answer: 'Constitutional litigation involves challenging laws or government actions that violate the Constitution. This can include cases before the High Court, Supreme Court of Appeal, and Constitutional Court.' },
      { question: 'Do you provide legal aid?', answer: 'Yes, we provide pro bono services in appropriate cases and work with organizations that provide legal aid to vulnerable communities. Contact us to discuss your situation.' },
      { question: 'How do I report a human rights violation?', answer: 'Contact G20 Chambers to discuss your situation. Our barristers will advise you on the best course of action and represent you in pursuing justice.' },
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
    cases: '200',
    experience: '15',
    fullDescription: `
      G20 Chambers provides expert civil litigation representation across a wide range of disputes. Our barristers are skilled negotiators and trial advocates, committed to achieving the best outcomes for our clients.

      Civil litigation encompasses a broad spectrum of legal disputes that do not involve criminal charges. At G20 Chambers, we handle complex civil matters with strategic precision and a focus on achieving results. Our barristers have extensive experience in both the High Court and Magistrate's Court, and we are adept at navigating the complexities of civil procedure.

      We understand that civil disputes can be costly, time-consuming, and emotionally draining. That is why we approach each case with a strategic mindset, exploring all avenues for resolution while preparing for trial if necessary. Our goal is to achieve the best possible outcome for our clients, whether through negotiation, mediation, or litigation.

      We handle a wide range of civil litigation matters including:
      • Commercial and contractual disputes
      • Personal injury claims and compensation
      • Property disputes and eviction proceedings
      • Professional negligence claims
      • Debt recovery and enforcement
      • Defamation and reputation management
      • Insurance claims and disputes
      • Shareholder and partnership disputes
      • Construction and engineering disputes
      • Employment-related civil claims

      Our barristers are experts in civil procedure and evidence, with a proven track record of success in complex civil cases. We have represented clients in landmark commercial disputes, high-value personal injury claims, and complex property matters. Our approach is strategic and results-focused, always seeking the most effective resolution for our clients.

      At G20 Chambers, we believe that access to justice is essential for a fair and functioning society. We offer competitive fee structures and work with clients to find affordable solutions for their legal needs. We also provide pro bono services in appropriate cases.

      If you are involved in a civil dispute, do not wait. Contact G20 Chambers today for expert legal advice and representation. Our barristers will guide you through the legal process and fight for your rights.
    `,
    notableCases: [
      { title: 'Civil rights victory - Community Land Claim', year: 2021, description: 'Negotiated a historic settlement returning ancestral land to a local community.' },
      { title: 'Civil litigation victory - Property dispute', year: 2022, description: 'Successfully resolved a lengthy property dispute through strategic negotiation and litigation.' },
      { title: 'Commercial dispute - Breach of contract', year: 2023, description: 'Secured substantial compensation for a client in a complex commercial contract dispute.' },
    ],
    testimonials: [
      { client: 'D. Patel', rating: 4, date: 'January 2024', comment: 'Very knowledgeable and strategic. Helped me navigate a complex legal matter.' },
      { client: 'P. Nkosi', rating: 5, date: 'November 2023', comment: 'Adv. Mathabatha handled my property dispute with professionalism and skill.' },
    ],
    faq: [
      { question: 'How long does a civil case take?', answer: 'The duration varies depending on the complexity of the case and whether it goes to trial. Simple matters may be resolved in a few months, while complex cases can take a year or more.' },
      { question: 'What is the cost of civil litigation?', answer: 'Costs depend on the complexity of the matter. We provide transparent fee structures during your initial consultation and explore all options to manage costs.' },
      { question: 'Do I need a lawyer for civil litigation?', answer: 'While you can represent yourself, having a lawyer ensures your rights are protected and that you comply with complex court procedures. Our barristers can significantly improve your chances of success.' },
      { question: 'What is the difference between civil and criminal law?', answer: 'Civil law deals with disputes between individuals or organizations, while criminal law deals with offences against the state. Civil litigation seeks compensation or remedies, while criminal law seeks punishment.' },
      { question: 'Can we settle out of court?', answer: 'Yes, many civil disputes are settled out of court through negotiation or mediation. Our barristers are skilled negotiators and will explore settlement options while preparing for trial if necessary.' },
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
    cases: '150',
    experience: '8',
    fullDescription: `
      G20 Chambers provides expert immigration law representation. Our barristers understand the complexities of South African immigration law and are committed to protecting your rights.

      Immigration law in South Africa is governed by the Immigration Act and its regulations, which establish the legal framework for the entry, residence, and departure of foreign nationals. At G20 Chambers, we have deep expertise in this complex area of law and a proven track record of success in immigration cases.

      We understand that immigration matters can be life-changing, affecting your ability to work, study, and live in South Africa. Our barristers are dedicated to providing compassionate and expert legal representation, ensuring that your case is presented with the best possible chance of success.

      We handle a wide range of immigration matters including:
      • Asylum applications and refugee status
      • Deportation appeals and removal proceedings
      • Visa applications and extensions
      • Citizenship and naturalization matters
      • Immigration detention and bail applications
      • Appeals to the Immigration Appeal Board
      • Judicial review of immigration decisions

      Our approach is compassionate and thorough, ensuring that your case is presented with the best possible chance of success. We work closely with you to understand your unique circumstances and goals, developing a tailored legal strategy that addresses your specific needs.

      Our barristers are experts in immigration law and procedure, with a proven track record of success in complex cases. We have represented clients from diverse backgrounds, including refugees fleeing persecution, families seeking reunification, and skilled professionals seeking work visas.

      At G20 Chambers, we believe that access to justice is a fundamental right. We provide pro bono services in appropriate cases and work with organizations that support refugees and immigrants.

      If you need assistance with an immigration matter, contact G20 Chambers today. Our barristers will guide you through the legal process and fight for your rights.
    `,
    notableCases: [
      { title: 'Asylum appeal - S v. Home Affairs', year: 2023, description: 'Successfully appealed a deportation order, granting the client asylum and protection from persecution.' },
      { title: 'Immigration detention - Bail application', year: 2022, description: 'Secured the release of a client from immigration detention through a successful bail application.' },
      { title: 'Visa appeal - Work visa renewal', year: 2021, description: 'Successfully appealed a visa refusal, allowing a skilled professional to remain in South Africa.' },
    ],
    testimonials: [
      { client: 'A. Patel', rating: 5, date: 'March 2024', comment: 'Adv. Mphahlele saved me from deportation. I cannot thank him enough.' },
      { client: 'M. Ndlovu', rating: 5, date: 'February 2024', comment: 'Professional and compassionate. Helped me navigate the asylum process with expertise.' },
    ],
    faq: [
      { question: 'How do I apply for asylum?', answer: 'Our barristers can guide you through the asylum application process and represent you at hearings before the Department of Home Affairs and the Refugee Appeal Board.' },
      { question: 'What happens if I am facing deportation?', answer: 'We can represent you in deportation proceedings and appeal any adverse decisions. We will fight to ensure your rights are protected.' },
      { question: 'What are the requirements for a work visa?', answer: 'Requirements vary depending on the type of work visa. Our barristers can advise you on the specific requirements and assist with the application process.' },
      { question: 'How long does a visa application take?', answer: 'Processing times vary depending on the type of visa and the workload of the Department of Home Affairs. Our barristers can provide guidance on expected timelines.' },
      { question: 'Can you help with citizenship applications?', answer: 'Yes, our barristers can assist with citizenship and naturalization applications and advise on the requirements and process.' },
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
    cases: '80',
    experience: '10',
    fullDescription: `
      G20 Chambers provides expert employment law representation for both employees and employers. Our barristers are experienced in all aspects of employment law, including unfair dismissal, discrimination, and workplace disputes.

      Employment law governs the relationship between employers and employees, establishing the rights and obligations of both parties. At G20 Chambers, we have extensive experience in this area of law and are committed to protecting the rights of workers while ensuring that employers comply with their legal obligations.

      We understand that workplace disputes can be stressful and disruptive to both your professional and personal life. Our barristers are dedicated to providing strategic and effective legal representation, ensuring that your rights are protected throughout the process.

      We handle a wide range of employment matters including:
      • Unfair dismissal and wrongful termination
      • Discrimination and harassment claims
      • Workplace bullying and victimization
      • Employment contract disputes
      • Labour Court proceedings
      • CCMA proceedings and arbitration
      • Collective bargaining and union matters
      • Retrenchment and restructuring
      • Employment equity and affirmative action

      Our approach is strategic and results-focused, ensuring that your rights are protected throughout the process. We work closely with you to understand your unique circumstances and goals, developing a tailored legal strategy that addresses your specific needs.

      Our barristers are experts in labour law and procedure, with a proven track record of success in complex employment matters. We have represented both employees and employers in cases before the CCMA, Labour Court, and Labour Appeal Court.

      At G20 Chambers, we believe that everyone deserves a fair and safe workplace. We provide pro bono services in appropriate cases and work with organizations that support workers' rights.

      If you are facing an employment dispute, contact G20 Chambers today for expert legal advice and representation. Our barristers will fight for your rights and ensure that justice is served.
    `,
    notableCases: [
      { title: 'Employment dispute - Workplace discrimination', year: 2022, description: 'Secured compensation for a client in a landmark employment discrimination case.' },
      { title: 'Unfair dismissal - CCMA arbitration', year: 2023, description: 'Successfully challenged an unfair dismissal at the CCMA, securing reinstatement and compensation for our client.' },
      { title: 'Employment contract dispute - Executive termination', year: 2021, description: 'Negotiated a favorable settlement for a senior executive in a complex contract dispute.' },
    ],
    testimonials: [
      { client: 'T. Mokoena', rating: 5, date: 'June 2024', comment: 'Adv. Mphahlele fought for my rights and secured a fair outcome after my unfair dismissal.' },
      { client: 'S. Ndlovu', rating: 4, date: 'April 2024', comment: 'Professional and knowledgeable. Helped me navigate my discrimination claim.' },
    ],
    faq: [
      { question: 'What is unfair dismissal?', answer: 'Unfair dismissal occurs when an employee is dismissed without a valid reason or without following proper procedures. This includes dismissals based on discrimination, retaliation, or arbitrary grounds.' },
      { question: 'How do I challenge a dismissal?', answer: 'Our barristers can represent you at the CCMA or Labour Court to challenge unfair dismissal. We will gather evidence, prepare your case, and advocate for your rights.' },
      { question: 'What is discrimination in the workplace?', answer: 'Discrimination occurs when an employee is treated unfairly based on race, gender, age, disability, religion, or other protected characteristics. This includes harassment, unequal pay, and unfair treatment.' },
      { question: 'What is the CCMA?', answer: 'The Commission for Conciliation, Mediation and Arbitration (CCMA) is an independent body that resolves workplace disputes. Our barristers can represent you in CCMA proceedings.' },
      { question: 'How long do I have to file a claim?', answer: 'Time limits vary depending on the type of claim. For unfair dismissal claims, you generally have 30 days to refer the matter to the CCMA. Contact us immediately to ensure you do not miss any deadlines.' },
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
    cases: '40',
    experience: '8',
    fullDescription: `
      G20 Chambers provides expert public and administrative law representation. Our barristers are experienced in challenging government decisions and protecting the public interest.

      Public and administrative law governs the relationship between the state and its citizens. At G20 Chambers, we are dedicated to ensuring that government actions are lawful, reasonable, and procedurally fair. Our barristers have extensive experience in challenging government decisions that violate constitutional rights and the public interest.

      We understand that government decisions can have a profound impact on your life, whether you are a business seeking regulatory approval, a community fighting for land rights, or an individual challenging an unlawful government action. Our barristers are committed to providing strategic and effective legal representation, ensuring that your voice is heard.

      We handle a wide range of public law matters including:
      • Judicial review of government decisions
      • Regulatory compliance and enforcement
      • Public interest litigation
      • Administrative law challenges
      • Constitutional law matters
      • Government accountability and transparency
      • Environmental law and regulation
      • Planning and zoning decisions
      • Government tenders and procurement

      Our approach is strategic and principled, committed to upholding the rule of law and protecting the rights of citizens. We work closely with our clients to understand their unique circumstances and goals, developing a tailored legal strategy that addresses their specific needs.

      Our barristers are experts in public law and procedure, with a proven track record of success in complex cases. We have represented clients in landmark judicial review cases, public interest litigation, and constitutional challenges.

      At G20 Chambers, we believe that government accountability is essential for a just and democratic society. We provide pro bono services in appropriate cases and work with organizations that promote good governance and the rule of law.

      If you need assistance with a public law matter, contact G20 Chambers today. Our barristers will fight for your rights and ensure that justice is served.
    `,
    notableCases: [
      { title: 'Judicial review - Environmental regulation', year: 2023, description: 'Challenged unlawful government action, resulting in policy reversal and environmental protection.' },
      { title: 'Public interest litigation - Land rights', year: 2022, description: 'Successfully challenged a government decision that violated community land rights.' },
      { title: 'Administrative law challenge - Regulatory compliance', year: 2021, description: 'Secured a favorable ruling for a client in a complex regulatory compliance matter.' },
    ],
    testimonials: [
      { client: 'T. Ndlovu', rating: 5, date: 'February 2024', comment: 'Adv. Maseko is brilliant and passionate about justice. She fought for my community\'s rights.' },
      { client: 'M. Molefe', rating: 4, date: 'December 2023', comment: 'Professional and knowledgeable. Helped me navigate a complex regulatory matter.' },
    ],
    faq: [
      { question: 'What is judicial review?', answer: 'Judicial review is a process by which courts review government decisions to ensure they are lawful, reasonable, and procedurally fair. Our barristers can advise you on the merits of a judicial review application.' },
      { question: 'How do I challenge a government decision?', answer: 'Our barristers can advise you on the merits of a judicial review application and represent you in court. We will gather evidence, prepare your case, and advocate for your rights.' },
      { question: 'What is public interest litigation?', answer: 'Public interest litigation involves bringing legal action that benefits the public interest, rather than just the individual bringing the case. This can include cases involving human rights, environmental protection, and good governance.' },
      { question: 'Can you help with regulatory compliance?', answer: 'Yes, our barristers can advise you on regulatory compliance and represent you in enforcement proceedings. We can help you understand your obligations and ensure compliance.' },
      { question: 'How long does a judicial review take?', answer: 'The duration varies depending on the complexity of the case and the court\'s schedule. Judicial review applications can be expedited in urgent cases.' },
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
    cases: '60',
    experience: '10',
    fullDescription: `
      G20 Chambers provides expert property and land law representation. Our barristers are experienced in all aspects of property law, including property disputes, land claims, and conveyancing advice.

      Property and land law is a complex and evolving area of South African law, shaped by the country's history, the Constitution, and the need for land reform. At G20 Chambers, we have deep expertise in this area and are committed to protecting your property rights.

      We understand that property matters can be complex and emotionally charged, involving deep connections to land and home. Our barristers are dedicated to providing strategic and effective legal representation, ensuring that your rights are protected throughout the process.

      We handle a wide range of property matters including:
      • Property disputes and litigation
      • Land claims and restitution
      • Conveyancing advice and transactions
      • Property development and planning
      • Eviction proceedings and landlord-tenant disputes
      • Lease agreements and disputes
      • Sectional title and homeowners' association disputes
      • Mortgage and bond matters
      • Property insurance claims

      Our approach is thorough and strategic, ensuring that your property rights are protected. We work closely with you to understand your unique circumstances and goals, developing a tailored legal strategy that addresses your specific needs.

      Our barristers are experts in property law and procedure, with a proven track record of success in complex property disputes. We have represented clients in landmark land claims, high-value property disputes, and complex conveyancing matters.

      At G20 Chambers, we believe that access to land and property is a fundamental right. We provide pro bono services in appropriate cases and work with organizations that support land reform and access to housing.

      If you need assistance with a property or land matter, contact G20 Chambers today. Our barristers will fight for your rights and ensure that justice is served.
    `,
    notableCases: [
      { title: 'Civil rights victory - Community Land Claim', year: 2021, description: 'Negotiated a historic settlement returning ancestral land to a local community.' },
      { title: 'Property dispute - Boundary determination', year: 2022, description: 'Successfully resolved a lengthy property boundary dispute through strategic negotiation.' },
      { title: 'Land claim - Restitution of land rights', year: 2023, description: 'Secured the restitution of land rights for a community that had been dispossessed of their land.' },
    ],
    testimonials: [
      { client: 'P. Nkosi', rating: 5, date: 'November 2023', comment: 'Adv. Mathabatha handled my property dispute with professionalism and skill. I got a fair outcome.' },
      { client: 'R. Mthembu', rating: 4, date: 'September 2023', comment: 'Knowledgeable and strategic. Helped me understand the land claim process.' },
    ],
    faq: [
      { question: 'How do I resolve a property dispute?', answer: 'Our barristers can advise you on the best course of action, whether through negotiation, mediation, or litigation. We will develop a strategy tailored to your specific situation.' },
      { question: 'What is the process for a land claim?', answer: 'We can guide you through the land claim process and represent you in court if necessary. This includes gathering evidence, preparing your case, and advocating for your rights.' },
      { question: 'How long does a property dispute take?', answer: 'The duration varies depending on the complexity of the matter and whether it goes to trial. Simple matters may be resolved in a few months, while complex cases can take a year or more.' },
      { question: 'What is conveyancing?', answer: 'Conveyancing is the legal process of transferring property ownership from one person to another. Our barristers can advise you on the conveyancing process and ensure that your transaction is legally sound.' },
      { question: 'Can you help with eviction proceedings?', answer: 'Yes, our barristers can represent both landlords and tenants in eviction proceedings, ensuring that the law is followed and rights are protected.' },
    ],
    seoTitle: 'Property & Land Law | G20 Chambers | Property & Land Claims Lawyers in Limpopo',
    seoDescription: 'Expert property and land law in Limpopo. Contact our specialist barristers for property disputes, land claims, and conveyancing. Call 082 341 3333.',
    keywords: 'property lawyer Limpopo, land claims, property disputes, conveyancing, property litigation',
  },
}

// Generate static paths
export function generateStaticParams() {
  return Object.keys(practiceAreas).map((slug) => ({
    slug,
  }))
}

// Helper function to get barristers for a practice area - FROM DATABASE
async function getBarristersByArea(areaTitle) {
  try {
    // Get all barristers from database
    const barristers = await prisma.barrister.findMany({
      where: {
        // Filter by practice area
        practiceAreas: {
          contains: areaTitle
        }
      }
    })
    
    // Parse JSON fields
    return barristers.map(barrister => ({
      ...barrister,
      practiceAreas: JSON.parse(barrister.practiceAreas || '[]'),
      socialLinks: JSON.parse(barrister.socialLinks || '{}'),
      notableCases: JSON.parse(barrister.notableCases || '[]'),
      reviews: JSON.parse(barrister.reviews || '[]')
    }))
  } catch (error) {
    console.error('Error fetching barristers:', error)
    return []
  }
}

export default async function PracticeAreaPage({ params }) {
  const areaData = practiceAreas[params.slug]

  if (!areaData) {
    notFound()
  }

  // Get barristers from database
  const barristersInArea = await getBarristersByArea(areaData.title)

  // Pass the data to the client component
  return (
    <PracticeAreaClient 
      areaData={areaData} 
      barristersInArea={barristersInArea}
      slug={params.slug}
    />
  )
}
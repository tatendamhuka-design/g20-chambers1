'use client'

import { FileDown } from 'lucide-react'

export default function PDFDownloadButton({ barrister }) {
  const generateCV = () => {
    const content = `
BARRISTER PROFILE
=================

${barrister.name}
${barrister.title}
Year of Call: ${barrister.yearOfCall}

PRACTICE AREAS
--------------
${barrister.practiceAreas.join(', ')}

CONTACT
-------
Email: ${barrister.email}
Phone: ${barrister.phone}
Chambers: ${barrister.chambers || 'G20 Chambers, Limpopo'}

EDUCATION
---------
${barrister.education || 'LLB'}

PROFESSIONAL BIOGRAPHY
----------------------
${barrister.bio}

NOTABLE CASES
-------------
${barrister.notableCases?.map(c => `- ${c.title} (${c.year}): ${c.description}`).join('\n') || 'N/A'}

${barrister.reviews?.length > 0 ? `
CLIENT REVIEWS
--------------
${barrister.reviews.map(r => `"${r.comment}" - ${r.client} (${r.rating}★) (${r.date})`).join('\n')}
` : ''}

G20 Chambers | The home of premier barristers
    `

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${barrister.name.replace(/\s/g, '_')}_CV.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={generateCV}
      className="w-full bg-[#0a1628] text-white px-8 py-3 font-bold rounded-lg hover:bg-[#1a2a4a] transition-all text-center"
    >
      <FileDown className="w-4 h-4 inline mr-2" />
      Download CV
    </button>
  )
}
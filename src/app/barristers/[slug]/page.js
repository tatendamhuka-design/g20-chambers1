import { notFound } from 'next/navigation'
import { barristers, getBarristerBySlug } from '@/data/barristers'
import BarristerProfileClient from './BarristerProfileClient'

// Generate static paths - this MUST be in a Server Component
export function generateStaticParams() {
  return barristers.map((barrister) => ({
    slug: barrister.slug,
  }))
}

export default function BarristerProfilePage({ params }) {
  const barrister = getBarristerBySlug(params.slug)

  if (!barrister) {
    notFound()
  }

  // Pass the data to the client component
  return <BarristerProfileClient barrister={barrister} />
}
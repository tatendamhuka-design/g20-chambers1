import JoinClient from './JoinClient'

export const metadata = {
  title: 'Join Us | Careers at G20 Chambers | Pupillage & Tenancy Limpopo',
  description: 'Join G20 Chambers at the Limpopo Bar. Explore pupillage, tenancy, and career opportunities for barristers and staff. Contact us to start your journey. Call 082 341 3333.',
  keywords: 'join G20 Chambers, pupillage Limpopo, tenancy South Africa, barristers careers, advocates Limpopo, legal jobs Polokwane, Limpopo Bar, GCB membership',
  openGraph: {
    title: 'Join Us | Careers at G20 Chambers',
    description: 'Explore pupillage, tenancy, and career opportunities at G20 Chambers in Limpopo.',
    url: 'https://g20chambers.co.za/join',
    siteName: 'G20 Chambers',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/images/join-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Join G20 Chambers - Careers in Law',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Us | Careers at G20 Chambers',
    description: 'Explore pupillage, tenancy, and career opportunities at G20 Chambers in Limpopo.',
    images: ['/images/join-og.jpg'],
  },
  alternates: {
    canonical: 'https://g20chambers.co.za/join',
  },
}

export default function JoinPage() {
  return <JoinClient />
}
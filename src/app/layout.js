// src/app/layout.js
import './globals.css'
import { Merriweather_Sans } from 'next/font/google'
import WhatsAppButton from './components/WhatsAppButton'

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--font-merriweather-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

// SEO Metadata for entire site
export const metadata = {
  title: {
    default: 'G20 Chambers | The home of premier barristers in Limpopo',
    template: '%s | G20 Chambers'
  },
  description: 'G20 Chambers is a leading group of barristers at the Limpopo Bar. Expert legal representation in Criminal Law, Family Law, Human Rights, Civil Litigation, and more.',
  keywords: [
    'barristers Limpopo',
    'advocates Polokwane',
    'Limpopo Bar',
    'criminal lawyers Limpopo',
    'family law attorneys Polokwane',
    'human rights lawyers South Africa',
    'civil litigation lawyers Limpopo',
    'immigration lawyers Polokwane',
    'employment lawyers Limpopo',
    'legal representation South Africa',
    'barristers South Africa',
    'G20 Chambers'
  ],
  authors: [{ name: 'G20 Chambers' }],
  creator: 'G20 Chambers',
  publisher: 'G20 Chambers',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'G20 Chambers | The home of premier barristers in Limpopo',
    description: 'G20 Chambers is a leading group of barristers at the Limpopo Bar. Expert legal representation in Criminal, Family, Human Rights, and Civil Litigation.',
    url: 'https://g20chambers.co.za',
    siteName: 'G20 Chambers',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'G20 Chambers - The home of premier barristers in Limpopo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G20 Chambers | The home of premier barristers in Limpopo',
    description: 'Expert legal representation in Criminal Law, Family Law, Human Rights, and Civil Litigation. Call 082 341 3333.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://g20chambers.co.za',
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'G20 Chambers',
              description: 'A leading group of barristers at the Limpopo Bar, providing expert legal representation in Criminal Law, Family Law, Human Rights, Civil Litigation, and more.',
              url: 'https://g20chambers.co.za',
              telephone: '+27823413333',
              email: 'cali.mathabatha@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '39 Voortrekker Street',
                addressLocality: 'Polokwane',
                addressRegion: 'Limpopo',
                postalCode: '0699',
                addressCountry: 'ZA',
              },
              openingHours: 'Mo-Fr 08:00-17:00',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '17:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '13:00',
                },
              ],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -23.9026,
                longitude: 29.4613,
              },
              sameAs: [
                'https://linkedin.com/company/g20-chambers',
                'https://twitter.com/g20chambers',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${merriweatherSans.variable} font-merriweather-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <WhatsAppButton phoneNumber="+27823413333" />
      </body>
    </html>
  )
}
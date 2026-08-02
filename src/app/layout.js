import './globals.css'
import { Merriweather_Sans } from 'next/font/google'
import WhatsAppButton from './components/WhatsAppButton'

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--font-merriweather-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  metadataBase: new URL('https://g20chambers.co.za'),
  title: {
    default: 'G20 Chambers | The home of premier advocates in Limpopo',
    template: '%s | G20 Chambers'
  },
  description: 'G20 Chambers is a leading group of advocates at the Limpopo Bar. Expert legal representation in Criminal Law, Family Law, Human Rights, Civil Litigation, and more. Call 082 341 3333.',
  keywords: [
    'advocates Limpopo',
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
    'G20 Chambers',
    'advocates'
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
    title: 'G20 Chambers | The home of premier advocates in Limpopo',
    description: 'G20 Chambers is a leading group of advocates at the Limpopo Bar. Expert legal representation in Criminal, Family, Human Rights, and Civil Litigation.',
    url: 'https://g20chambers.co.za',
    siteName: 'G20 Chambers',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'G20 Chambers - The home of premier advocates in Limpopo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G20 Chambers | The home of premier advocates in Limpopo',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${merriweatherSans.variable} font-merriweather-sans antialiased`}
        suppressHydrationWarning
      >
        <div className="pt-[72px] md:pt-[84px]">
          {children}
        </div>
        <WhatsAppButton phoneNumber="+27823413333" />
      </body>
    </html>
  )
}
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
  title: 'G20 Chambers | The home of premier barristers',
  description: 'G20 Chambers provides top-notch advocate services to clients in Limpopo. Expert barristers in criminal, family, human rights, and more.',
  keywords: 'barristers, advocates, Limpopo, legal services, criminal law, family law, human rights, Mathabatha',
  openGraph: {
    title: 'G20 Chambers | The home of premier barristers',
    description: 'Top-notch advocate services to clients in Limpopo.',
    url: 'https://g20chambers.co.za',
    siteName: 'G20 Chambers',
    locale: 'en_ZA',
    type: 'website',
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
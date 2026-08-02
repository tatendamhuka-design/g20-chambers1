// src/app/about/layout.js
export const metadata = {
  title: 'About Us | G20 Chambers',
  description: 'Learn about G20 Chambers, a leading group of advocates at the Limpopo Bar. Established in 2021, we are the home of premier advocates in Polokwane. Call 082 341 3333.',
  keywords: 'about G20 Chambers, advocates Limpopo, advocates Polokwane, Limpopo Bar, legal history South Africa, GCB, legal representation South Africa',
  openGraph: {
    title: 'About Us | G20 Chambers',
    description: 'Learn about G20 Chambers, a leading group of advocates at the Limpopo Bar. Established in 2021, we are the home of premier advocates in Polokwane.',
    url: 'https://g20chambers.co.za/about',
    type: 'website',
  },
}

export default function AboutLayout({ children }) {
  return <>{children}</>
}
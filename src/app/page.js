import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import PracticeAreas from './components/PracticeAreas'
import AreasWeServe from './components/AreasWeServe'
import NotableCases from './components/NotableCases'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Insights from './components/Insights'
import CTABanner from './components/CTABanner'
import WhyChoose from './components/WhyChoose'
import Footer from './components/Footer'

export const metadata = {
  title: 'G20 Chambers | The home of premier advocates in Limpopo',
  description: 'G20 Chambers is a leading group of advocates at the Limpopo Bar. Expert legal representation in Criminal Law, Family Law, Human Rights, Civil Litigation, and more. Call 082 341 3333.',
  keywords: 'advocates Limpopo, advocates Polokwane, criminal lawyers Limpopo, family law attorneys Polokwane, human rights lawyers South Africa',
  openGraph: {
    title: 'G20 Chambers | The home of premier advocates in Limpopo',
    description: 'Expert legal representation in Criminal Law, Family Law, Human Rights, and Civil Litigation from G20 Chambers in Polokwane, Limpopo.',
    url: 'https://g20chambers.co.za',
    siteName: 'G20 Chambers',
    locale: 'en_ZA',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <AreasWeServe />
      <NotableCases />
      <Team />
      <Testimonials />
      <Insights />
      <CTABanner />
      <WhyChoose />
      <Footer />
    </main>
  )
}
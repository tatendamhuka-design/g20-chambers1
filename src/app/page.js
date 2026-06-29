import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import PracticeAreas from './components/PracticeAreas'
import NotableCases from './components/NotableCases'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Insights from './components/Insights'
import CTABanner from './components/CTABanner'
import WhyChoose from './components/WhyChoose'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
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
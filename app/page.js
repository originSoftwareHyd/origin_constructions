import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutProcess from '../components/AboutProcess'
import Services from '../components/Services'
import PortfolioStats from '../components/PortfolioStats'
import Team from '../components/Team'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { siteData } from '../data/siteData'

export default function HomePage() {
  return (
    <>
      <Header data={siteData} />
      <main id="main-content">
        <Hero data={siteData.hero} brand={siteData.brand} />
        <AboutProcess data={siteData.about} />
        <Services data={siteData.services} />
        <PortfolioStats data={siteData.stats} />
        <Team data={siteData.team} />
        <ContactSection data={siteData.contact} brand={siteData.brand} />
      </main>
      <Footer data={siteData} />
    </>
  )
}

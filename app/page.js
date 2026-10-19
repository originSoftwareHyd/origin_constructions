import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutProcess from '../components/AboutProcess'
import Services from '../components/Services'
import PortfolioStats from '../components/PortfolioStats'
import ServiceAreas from '../components/ServiceAreas'
import Team from '../components/Team'
import FAQ from '../components/FAQ'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'
import { siteData } from '../data/siteData'

export default function HomePage() {
  return (
    <>
      <StructuredData data={siteData} />
      <Header data={siteData} />
      <main id="main-content">
        <Hero data={siteData.hero} brand={siteData.brand} stats={siteData.stats.items} phone={siteData.contact.phone} />
        <AboutProcess data={siteData.about} />
        <Services data={siteData.services} />
        <PortfolioStats data={siteData.stats} />
        <ServiceAreas data={siteData.serviceAreas} />
        <Team data={siteData.team} />
        <FAQ data={siteData.faq} />
        <ContactSection data={siteData.contact} brand={siteData.brand} />
      </main>
      <Footer data={siteData} />
    </>
  )
}

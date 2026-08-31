import Navbar from './navbar'
import Hero from './hero'
import ToolsSection from './tools-selection'
import TechnicalSkills from './skills'
import AboutPage from './about'
import Certifications from './certificates'
import ContactPage from './conatact'

export default function Page() {
  return (
    <main className=" bg-black">
      <Navbar />
      <Hero />
      <AboutPage />
      <ToolsSection />
      <TechnicalSkills />
      <Certifications />
      <ContactPage />
    </main>
  )
}


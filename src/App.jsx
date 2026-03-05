import { ReactLenis } from 'lenis/react'
import NoiseOverlay from './components/NoiseOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import LeadCapture from './components/LeadCapture'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <ReactLenis root>
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <FeatureCards />
      <Philosophy />
      <Protocol />
      <LeadCapture />
      <Footer />
      <FloatingWhatsApp />
    </ReactLenis>
  )
}

export default App

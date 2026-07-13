import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUp } from 'lucide-react'

// Layout Elements
import Navigation from './sections/Navigation'
import Footer from './sections/Footer'
import SupportWidget from './components/SupportWidget'
import ScrollToTop from './components/ScrollToTop'

// Core Pages
import Home from './pages/Home'
import About from './pages/About'
import ServicesIndex from './pages/ServicesIndex'
import ServiceDetail from './pages/ServiceDetail'
import Fleet from './pages/Fleet'
import Clients from './pages/Clients'
import ContactPage from './pages/ContactPage'

import { LanguageProvider, useLanguage } from './context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

function AppContent() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { isRtl, t } = useLanguage()

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!prefersReducedMotion) {
      // Initialize smooth scroll feel via ScrollTrigger defaults
      ScrollTrigger.defaults({
        toggleActions: 'play none none none'
      })
    }

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <BrowserRouter>
      {/* Scroll position reset utility on navigation changes */}
      <ScrollToTop />

      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between" dir={isRtl ? 'rtl' : 'ltr'}>
        <div>
          <Navigation />
          <main>
            <Routes>
              {/* Dynamic pages routing */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesIndex />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </div>

        <Footer />

        {/* Interactive Support / WhatsApp Assistant Widget */}
        <SupportWidget />

        {/* Scroll to Top Arrow */}
        {showScrollTop && (
          <button
            onClick={scrollTop}
            className={`fixed bottom-6 ${isRtl ? 'right-6 md:right-8' : 'left-6 md:left-8'} z-50 bg-gold text-white p-3.5 rounded-full shadow-xl hover:scale-110 hover:bg-gold-light active:scale-95 transition-all duration-300 cursor-pointer border border-white/10`}
            aria-label={t("الرجوع إلى الأعلى", "Back to top")}
          >
            <ArrowUp size={24} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

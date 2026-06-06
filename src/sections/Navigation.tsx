import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import gsap from 'gsap'

const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'أسطولنا', href: '#fleet' },
  { label: 'لماذا نحن', href: '#why' },
  { label: 'عملاؤنا', href: '#testimonials' },
  { label: 'تواصل معنا', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const navRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)

      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen && mobileMenuRef.current) {
      const links = mobileMenuRef.current.querySelectorAll('.mobile-link')
      gsap.fromTo(links,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.4, ease: 'power3.out' }
      )
    }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 right-0 left-0 z-50 h-16 transition-all duration-400 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gold/10 shadow-sm'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-[5vw]">
          {/* Logo - Right side (RTL) */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className={`font-display font-bold text-[22px] leading-tight transition-colors duration-300 ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}>
                أركان ترافيل
              </span>
              <span className={`font-body text-[10px] transition-colors duration-300 ${
                scrolled ? 'text-slate-500' : 'text-white/60'
              }`}>
                لنقل الموظفين
              </span>
            </div>
          </div>

          {/* Desktop Nav Links - Center Right */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`font-body font-medium text-base transition-colors duration-200 relative ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-gold font-bold'
                    : scrolled
                      ? 'text-slate-700 hover:text-gold'
                      : 'text-white/90 hover:text-gold'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button - Left side */}
          <button
            onClick={() => scrollTo('#contact')}
            className="hidden md:block font-body font-semibold text-sm bg-gold text-white px-6 py-2.5 rounded-full hover:bg-gold-light hover:scale-[1.03] transition-all duration-200"
          >
            اطلب عرض سعر
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="mobile-link font-display text-3xl text-slate-800 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="mobile-link mt-4 font-body font-semibold text-lg bg-gold text-white px-8 py-3 rounded-full"
          >
            اطلب عرض سعر
          </button>
        </div>
      )}
    </>
  )
}

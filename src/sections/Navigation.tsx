import { useEffect, useRef, useState } from 'react'
import { Menu, X, Globe, FileDown } from 'lucide-react'
import gsap from 'gsap'
import { useLanguage } from '../context/LanguageContext'
import { Link, useLocation } from 'react-router-dom'

const PROFILE_LINK = "https://drive.google.com/file/d/1LxJyof1LM-5wBe7gFcxSyiK9RSeVVvtB/view?usp=sharing"

export default function Navigation() {
  const { language, setLanguage, t, isRtl } = useLanguage()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (downloading) return;

    // Open immediately to bypass browser popup blockers
    window.open(PROFILE_LINK, "_blank");

    setDownloading(true);
    setDownloadSuccess(false);

    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);

      setTimeout(() => {
        setDownloadSuccess(false);
      }, 3000);
    }, 1800);
  }

  const navLinks = [
    { label: t('الرئيسية', 'Home'), href: '/' },
    { label: t('من نحن', 'About Us'), href: '/about' },
    { label: t('خدماتنا', 'Our Services'), href: '/services' },
    { label: t('أسطولنا', 'Our Fleet'), href: '/fleet' },
    { label: t('عملاؤنا', 'Our Clients'), href: '/clients' },
    { label: t('تواصل معنا', 'Contact Us'), href: '/contact' },
  ]

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
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

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 right-0 left-0 z-50 h-16 transition-all duration-400 ${
          scrolled || location.pathname !== '/'
            ? 'bg-white/95 backdrop-blur-xl border-b border-gold/10 shadow-sm'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-[5vw]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 select-none">
            <div className="flex flex-col text-start">
              <span className={`font-display font-bold text-[18px] md:text-[20px] leading-tight transition-colors duration-300 ${
                scrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'
              }`}>
                {t('أركان ترافيل', 'Arkan Travel')}
              </span>
              <span className={`font-body text-[9px] transition-colors duration-300 ${
                scrolled || location.pathname !== '/' ? 'text-slate-500' : 'text-white/60'
              }`}>
                {t('لنقل الموظفين والعمال بمصر', 'Corporate & Labor Transportation')}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-body font-medium text-sm md:text-base transition-colors duration-200 relative ${
                  isLinkActive(link.href)
                    ? 'text-gold font-bold'
                    : scrolled || location.pathname !== '/'
                      ? 'text-slate-700 hover:text-gold'
                      : 'text-white/90 hover:text-gold'
                }`}
              >
                {link.label}
                {isLinkActive(link.href) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA & Language switcher on Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className={`font-body font-semibold text-xs border px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                scrolled || location.pathname !== '/'
                  ? 'border-slate-300 text-slate-700 hover:border-gold hover:text-gold'
                  : 'border-white/30 text-white hover:border-gold hover:text-gold'
              }`}
            >
              <Globe size={13} />
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`font-body font-semibold text-xs border px-3.5 py-1.5 rounded-full hover:scale-[1.03] transition-all duration-200 flex items-center gap-1.5 min-w-[110px] justify-center disabled:opacity-80 disabled:cursor-not-allowed ${
                scrolled || location.pathname !== '/'
                  ? 'border-slate-300 text-slate-700 hover:border-gold hover:text-gold'
                  : 'border-white/30 text-white hover:border-gold hover:text-gold-light'
              }`}
            >
              {downloading ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-[10px]">{t('جاري الفتح...', 'Opening...')}</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <svg className="h-3.5 w-3.5 text-green-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-500 text-[10px] font-bold">{t('تم الفتح ✓', 'Opened ✓')}</span>
                </>
              ) : (
                <>
                  <FileDown size={13} />
                  <span>{t('الملف التعريفي', 'Company Profile')}</span>
                </>
              )}
            </button>
            <Link
              to="/contact"
              className="font-body font-semibold text-xs bg-gold text-white px-5 py-2 rounded-full hover:bg-gold-light hover:scale-[1.03] transition-all duration-200"
            >
              {t('اطلب عرض سعر', 'Request Quote')}
            </Link>
          </div>

          {/* Mobile Right Controls (Language toggle & Burger) */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className={`font-body font-semibold text-xs border px-2.5 py-1 rounded-full transition-all duration-200 flex items-center gap-1 ${
                scrolled || location.pathname !== '/'
                  ? 'border-slate-300 text-slate-700 hover:border-gold'
                  : 'border-white/30 text-white hover:border-gold'
              }`}
            >
              <Globe size={12} />
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 transition-colors duration-300 ${
                scrolled || location.pathname !== '/' ? 'text-slate-800' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="mobile-link font-display text-2xl text-slate-800 hover:text-gold transition-colors duration-200 font-bold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mobile-link mt-4 font-body font-semibold text-base bg-gold text-white px-8 py-3 rounded-full shadow-md shadow-gold/20"
          >
            {t('اطلب عرض سعر', 'Request Quote')}
          </Link>
          <button
            onClick={(e) => {
              handleDownload(e);
              setTimeout(() => setMobileOpen(false), 2000);
            }}
            disabled={downloading}
            className="mobile-link font-body font-semibold text-base border border-slate-300 text-slate-700 px-8 py-2.5 rounded-full flex items-center gap-2 hover:border-gold hover:text-gold transition-all justify-center min-w-[180px] disabled:opacity-85 disabled:cursor-not-allowed"
          >
            {downloading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{t('جاري جلب الملف...', 'Retrieving file...')}</span>
              </>
            ) : downloadSuccess ? (
              <>
                <svg className="h-4 w-4 text-green-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-500 font-bold">{t('تم الفتح بنجاح ✓', 'Opened Successfully ✓')}</span>
              </>
            ) : (
              <>
                <FileDown size={16} />
                <span>{t('الملف التعريفي (PDF)', 'Company Profile (PDF)')}</span>
              </>
            )}
          </button>
        </div>
      )}
    </>
  )
}


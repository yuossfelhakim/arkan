import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.to(labelRef.current, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power3.out'
    })
    .to(titleRef.current, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'
    }, '-=0.4')
    .to(subtitleRef.current, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'
    }, '-=0.5')
    .to(ctaRef.current, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power3.out'
    }, '-=0.4')
    .to(trustRef.current, {
      opacity: 1, y: 0, duration: 0.5, ease: 'power3.out'
    }, '-=0.3')
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-center justify-center p-4 bg-slate-950"
      dir="rtl"
    >
      {/* Background Video - Modern and immersive loop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
      >
        <source src="https://res.cloudinary.com/dyqji8zrj/video/upload/v1780728872/Convoy_of_buses_drives_highway_202606060953_ivbund.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 z-[1] bg-black/50"
        style={{
          background: `
            linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.65) 50%, rgba(15,23,42,0.9) 100%),
            radial-gradient(ellipse at center, transparent 30%, rgba(15,23,42,0.6) 100%)
          `
        }}
      />

      {/* Content */}
      <div className="relative z-[2] w-full max-w-[850px] text-center mx-auto py-[10vh] px-4">
        <span
          ref={labelRef}
          className="opacity-0 translate-y-5 inline-block font-body font-bold text-xs md:text-sm text-gold-light uppercase tracking-[0.1em] mb-5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
        >
          نقل موظفين احترافي متكامل · شريككم المعتمد منذ ٢٠١٥
        </span>

        <h1
          ref={titleRef}
          className="opacity-0 translate-y-10 font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.35] mt-[12px] ml-[-5px] mb-6 text-white"
        >
          خدمة نقل موظفين <br className="hidden sm:inline" />
          <span className="text-gold-light block mt-[23px] text-[45px] leading-[80px] w-[821px] max-w-full h-[161px] rounded-none mx-auto font-normal no-underline">تعتمد على الأمان، الالتزام، والانضباط</span>
        </h1>

        <p
          ref={subtitleRef}
          className="opacity-0 translate-y-8 font-body text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed mb-10 max-w-[700px] mx-auto"
        >
          نوفر أحدث أساطيل الحافلات الفاخرة المخصصة لنقل الموظفين والعمال والوفود بأعلى معايير الأمن والسلامة، مع الالتزام المطلق بجدول أعمال شركتكم.
        </p>

        <div ref={ctaRef} className="opacity-0 translate-y-5 flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollTo('contact')}
            className="font-body font-semibold text-base bg-gold text-white px-10 py-4 rounded-full hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-gold/20"
          >
            اطلب دراسة مسار وعرض سعر مجاني
          </button>
          <button
            onClick={() => scrollTo('fleet')}
            className="font-body font-semibold text-base bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-250 cursor-pointer"
          >
            استعرض أسطول حافلاتنا
          </button>
        </div>

        <div ref={trustRef} className="opacity-0 translate-y-4 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8">
          {[
            'شبكة تغطية 50+ مركبة حديثة',
            'سائقون بمعايير قيادة صارمة',
            'متابعة وتشغيل فوري 24/7'
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-gold" />
              <span className="font-body text-xs sm:text-sm text-slate-300 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

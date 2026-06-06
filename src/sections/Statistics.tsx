import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 50, suffix: '+', label: 'حافلة ومركبة حديثة' },
  { value: 99.2, suffix: '%', label: 'معدل الالتزام بالمواعيد', isDecimal: true },
  { value: 120, suffix: '+', label: 'عميل وشركة متعاقدة' },
  { value: 26, suffix: '+', label: 'عاماً من الخبرة والريادة' },
  { value: 85, suffix: '+', label: 'سائق محترف ومعتمد' },
  { value: 30000, suffix: '+', label: 'رحلة آمنة شهرياً' },
  { value: 24, suffix: '/7', label: 'دعم وغرفة عمليات' },
  { value: 100, suffix: '%', label: 'تغطية تأمينية شاملة' },
]

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null)
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, index) => {
        const el = numbersRef.current[index]
        if (!el) return

        const obj = { val: 0 }
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          delay: index * 0.1,
          ease: 'power2.out',
          snap: stat.isDecimal ? { val: 0.1 } : { val: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          onUpdate: () => {
            if (stat.isDecimal) {
              el.textContent = obj.val.toFixed(1) + stat.suffix
            } else {
              el.textContent = Math.floor(obj.val).toLocaleString('en-US') + stat.suffix
            }
          }
        })
      })

      // Fade in stat items
      const items = sectionRef.current?.querySelectorAll('.stat-item')
      if (items) {
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 border-t border-slate-100"
      dir="rtl"
    >
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body font-semibold text-[22px] text-gold uppercase tracking-[0.08em] bg-gold/10 px-3 py-1.5 rounded-full">
            أرقام تعكس جدارتنا
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl heading-gradient mt-5 leading-tight h-[62px]">
            مسيرة حافلة بالانضباط والتميز والنجاح
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stat-item text-center">
              <span
                ref={el => { numbersRef.current[index] = el }}
                className="font-display font-black text-4xl md:text-6xl text-gold leading-none block"
                dir="ltr"
              >
                0
              </span>
              <span className="w-1 h-1 rounded-full bg-gold/40 mx-auto my-3 block" />
              <span className="font-body font-medium text-sm md:text-base text-slate-600 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

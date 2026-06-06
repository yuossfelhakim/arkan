import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const fleetImages = [
  {
    src: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1780682258/Ultra_realistic_employee_transportation_service__202606052050_oxwrbw.jpg',
    label: 'نقل الموظفين اليومي',
    description: 'حافلات حديثة مجهزة بالكامل لضمان راحة وإنتاجية كوادر عملكم يومياً.'
  },
  {
    src: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1780682258/Ultra_realistic_factory_transportation_service__202606052051_mlbcs1.jpg',
    label: 'نقل عمال ومصانع',
    description: 'خطوط نقل دقيقة لخدمة الورديات المتعاقبة على مدار الساعة بأقصى درجات الالتزام.'
  },
  {
    src: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1780682259/Ultra_realistic_school_transportation_service__202606052056_b54af8.jpg',
    label: 'النقل المدرسي والجامعي',
    description: 'حلول ذكية وآمنة لنقل الطلاب بمشرفين مؤهلين وأعلى معايير الأمن والسلامة.'
  },
  {
    src: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1780682259/Ultra_realistic_security_personnel_transportation__202606052055_bfmlkc.jpg',
    label: 'نقل شركات الأمن',
    description: 'نوفر خدمات نقل يومية ومرنة لأفراد الأمن، مع متابعة مستمرة للرحلات والتزام كامل بمواعيد التشغيل.'
  }
]

export default function FleetShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      // Header entrance animation
      if (headerRef.current) {
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      }

      // Grid items entrance animation (staggered scroll triggered)
      if (cardsRef.current) {
        const cards = cardsRef.current.children
        gsap.fromTo(cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
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
      id="fleet"
      className="bg-[#F9FAFB] py-24 border-t border-slate-100 overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="font-body font-semibold text-[22px] text-gold uppercase tracking-[0.08em] bg-gold/10 px-3 py-1.5 rounded-full">
            خدمات أسطولنا المميز
          </span>
          <h2 className="font-display font-extrabold text-[47px] h-[73px] heading-gradient mt-[20px] leading-tight">
            حلول نقل متكاملة تلبي احتياجاتكم بدقة
          </h2>
          <p className="font-body text-base md:text-lg text-slate-600 max-w-[700px] mx-auto mt-4 leading-relaxed">
            نوفر لكم من خلال أسطولنا المتنوع والمجهز بأحدث الوسائل التكنولوجية خدمات نقل ذكية تضمن الأمان التام والالتزام الصارم بجميع جداول أعمالكم.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {fleetImages.map((img) => (
            <div
              key={img.src}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/65 shadow-sm hover:shadow-xl hover:border-gold/25 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Visual shade overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-90" />
                
                {/* Floating Category Tag */}
                <span className="absolute top-4 right-4 bg-gold text-white font-body font-medium text-xs px-3 py-1.5 rounded-md shadow-md">
                  خدمة متميزة
                </span>
                
                {/* On-image label (Fallback/Enhancement) */}
                <div className="absolute bottom-4 right-4 left-4 text-white z-10">
                  <h3 className="font-display font-bold text-xl md:text-2xl leading-tight">
                    {img.label}
                  </h3>
                </div>
              </div>

              {/* Text content under image for premium corporate details and clarity */}
              <div className="p-6 md:p-8 bg-white">
                <p className="font-body text-slate-600 text-sm md:text-base leading-relaxed">
                  {img.description}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-body">
                  <span>أنظمة تتبع GPS حية بدقة</span>
                  <span className="text-gold font-semibold">تأمين شامل 100%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

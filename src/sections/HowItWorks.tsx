import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PhoneCall, Route, FileCheck, Bus } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '٠١',
    icon: PhoneCall,
    title: 'تواصل وتحديد المتطلبات',
    description: 'تواصل معنا مباشرة عبر الهاتف أو موقعنا لتحديد أعداد الموظفين، نقاط الانطلاق والوصول، ومواعيد الورديات المطلوبة لمؤسستكم.'
  },
  {
    number: '٠٢',
    icon: Route,
    title: 'تخطيط المسارات الذكية',
    description: 'يقوم خبراؤنا بدراسة خطوط السير بدقة، وتصميم مسارات قيادة مثالية ومؤمنة لتفادي الازدحام المروري وضمان الالتزام الصارم بالمواعيد.'
  },
  {
    number: '٠٣',
    icon: FileCheck,
    title: 'عرض سعر مخصص ومدروس',
    description: 'نقدم لكم بوضوح تام وثيقة عرض أسعار شاملة وتنافسية، مقسمة وعادلة، ومبنية بدقة طبقاً للمسارات وعدد وموديل الحافلات المختارة.'
  },
  {
    number: '٠٤',
    icon: Bus,
    title: 'تسهيل وبدء التشغيل الفعلي',
    description: 'نوجه الحافلات المجهزة والسائقين المعتمدين والمشرفين لبدء العمل، مع متابعة فورية من غرفة العمليات لضمان أداء يومي مثالي.'
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.step-card')
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        )
      }

      // Connecting line animation
      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1, duration: 1.2, ease: 'power2.out', transformOrigin: 'right',
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
      className="bg-[#F9FAFB] py-24 border-t border-slate-100"
      dir="rtl"
    >
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body font-semibold text-[22px] text-gold uppercase tracking-[0.08em] bg-gold/10 px-3 py-1.5 rounded-full">
            رحلتك معنا في ٤ خطوات
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl heading-gradient mt-5 leading-tight h-[65px]">
            كيف تبدأ خدمة نقل موظفيك معنا؟
          </h2>
          <p className="font-body text-base md:text-lg text-slate-600 max-w-[700px] mx-auto mt-4 leading-relaxed">
            خطوات بسيطة ومدروسة تضمن لشركتكم الانتقال الفوري لخدمة نقل موظفين وعمال فائقة الانضباط والأمان.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-24 right-[12.5%] left-[12.5%] h-px bg-gold/20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="step-card bg-white rounded-2xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-250 text-center border border-slate-200/60"
              >
                {/* Step Number */}
                <span className="font-display font-black text-5xl text-gold/15 block mb-4">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon size={28} className="text-gold" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl md:text-lg text-slate-800 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-slate-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

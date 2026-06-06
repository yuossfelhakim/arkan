import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'تعاملنا مع أركان ترافيل منذ ثلاث سنوات، والخدمة ممتازة باستمرار. الالتزام بالمواعيد مثالي، والسائقون محترفون جداً. الموظفون يشعرون بالأمان والراحة في الرحلات اليومية.',
    name: 'محمد عبدالله',
    title: 'مدير الموارد البشرية · مصنع النهضة للصناعات',
    initials: 'م.ع'
  },
  {
    quote: 'كشركة تكنولوجيا نعمل في فترات مرنة، كنا نحتاج لشريك نقل يستوعب تغيرات الجداول. أركان قدموا لنا حلاً مرناً مع خدمة عملاء استثنائية. أنصح بهم بشدة.',
    name: 'سارة محمود',
    title: 'مديرة العمليات · شركات Delta Tech',
    initials: 'س.م'
  },
  {
    quote: 'النقل كان تحدياً كبيراً لنا مع توسع المصنع في العاشر من رمضان. أركان ترافيل وفروا لنا أسطولاً مخصصاً يغطي جميع الشفتات — الصباحية والمسائية والليلية — بدون أي تأخير.',
    name: 'أحمد خالد',
    title: 'مدير الإنتاج · مجموعة الأمل الصناعية',
    initials: 'أ.خ'
  }
]

// Shuffled columns to create variety
const firstColumn = [testimonials[0], testimonials[1], testimonials[2]]
const secondColumn = [testimonials[1], testimonials[2], testimonials[0]]
const thirdColumn = [testimonials[2], testimonials[0], testimonials[1]]

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ quote, name, title, initials }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-3xl border border-slate-100 shadow-lg bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-gold/30 w-full max-w-sm relative overflow-hidden"
                >
                  <blockquote className="m-0 p-0 relative z-10 text-right">
                    {/* Quote mark inside card */}
                    <span
                      className="absolute -top-6 -right-2 font-display font-black text-6xl text-slate-100 leading-none select-none"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                    <p className="font-body text-sm md:text-base text-slate-700 leading-relaxed m-0 relative z-10">
                      {quote}
                    </p>
                    <footer className="flex items-center gap-3 mt-6 justify-end">
                      <div className="flex flex-col text-right">
                        <cite className="font-display font-semibold not-italic tracking-tight leading-5 text-slate-900">
                          {name}
                        </cite>
                        <span className="font-body text-xs leading-5 tracking-tight text-slate-500 mt-1">
                          {title}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center flex-shrink-0 ring-2 ring-slate-100 group-hover:ring-gold/30 transition-all duration-300 ease-in-out">
                        <span className="font-display font-bold text-xs text-slate-950">
                          {initials}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = sectionRef.current?.querySelector('.testimonials-header')
      if (header) {
        gsap.fromTo(header,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 1, ease: 'power3.out',
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
      id="testimonials"
      className="bg-navy-base py-24 md:py-32 relative overflow-hidden"
      dir="rtl"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-700/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-[5vw] z-10 relative">
        {/* Header */}
        <div className="text-center mb-16 testimonials-header">
          <span className="font-body font-semibold text-[22px] text-gold tracking-[0.08em] block mb-2">
            شهادات عملائنا
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl heading-gradient leading-tight h-[62px] block mb-4">
            ماذا يقول عملاؤنا عنا
          </h2>
          <p className="font-body text-slate-400 max-w-[600px] mx-auto text-base md:text-lg leading-relaxed">
            شركاء النجاح يشاركون تجربتهم الاستثنائية والحلول المرنة والمنضبطة في تسيير رحلاتهم مع أركان ترافيل.
          </p>
        </div>

        {/* Scrolling Columns with fade masks */}
        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] max-h-[640px] overflow-hidden"
          role="region"
          aria-label="آراء العملاء تشغيل دائم"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={26} className="w-full max-w-sm" />
          <TestimonialsColumn testimonials={secondColumn} duration={32} className="hidden md:block w-full max-w-sm" />
          <TestimonialsColumn testimonials={thirdColumn} duration={29} className="hidden lg:block w-full max-w-sm" />
        </div>
      </div>
    </section>
  )
}

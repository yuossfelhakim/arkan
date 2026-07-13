import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, Factory, GraduationCap, Bus, FileText, Settings, Car, Shield } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const { t, isRtl } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      id: 'annual-contracts',
      icon: FileText,
      title: t('العقود السنوية والشهرية', 'Annual & Monthly Contracts'),
      description: t('نقدم مجموعة من حلول النقل المرنة التي تتناسب مع احتياجات الشركات والمؤسسات المتنوعة.', 'We offer a range of flexible transit solutions tailored to the diverse needs of corporate clients and institutions.'),
      // Configured with the requested custom annual contracts graphic
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757523/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_34_55_%D9%85_sbs5vd.png'
    },
    {
      id: 'transit-dispatch',
      icon: Settings,
      title: t('إدارة خطوط النقل', 'Transit Line Management'),
      description: t('تنظيم ومتابعة المسارات وخطط التشغيل لضمان تحقيق أعلى مستوى من الكفاءة التشغيلية.', 'Organizing and monitoring routes and operational schedules to ensure the highest level of operational efficiency.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757623/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_33_11_%D9%85_ynuu1p.png'
    },
    {
      id: 'factory-transportation',
      icon: Factory,
      title: t('نقل العاملين بالمصانع', 'Factory Employee Transportation'),
      description: t('حلول نقل فعالة للمناطق الصناعية والمصانع لضمان سهولة انتقال العاملين.', 'Effective transportation solutions for industrial zones and factories to ensure seamless worker commute.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757812/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_29_54_%D9%85_pkcmxt.png'
    },
    {
      id: 'employee-transportation',
      icon: Building2,
      title: t('نقل الموظفين اليومي', 'Daily Employee Transportation'),
      description: t('تقديم خدمات نقل منتظمة وموثوقة للشركات والمؤسسات مع الالتزام التام بالمواعيد المحددة.', 'Providing regular and reliable transit services for companies and institutions with complete commitment to set schedules.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757804/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_29_21_%D9%85_kannur.png'
    },
    {
      id: 'car-rental',
      icon: Car,
      title: t('تأجير السيارات للشركات', 'Corporate Car Rental'),
      description: t('تقديم سيارات ملاكي حديثة للشركات والمؤسسات من خلال عقود يومية أو شهرية أو سنوية، لتلبية احتياجات التنقل الإداري والتنفيذي والزيارات الرسمية.', 'Providing modern passenger cars for companies and institutions via daily, monthly, or yearly contracts, meeting administrative, executive, and official visit transit needs.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757814/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_46_41_%D9%85_ymvoku.png'
    },
    {
      id: 'security-transportation',
      icon: Shield,
      title: t('نقل أفراد شركات الأمن والحراسة', 'Security Personnel Transport'),
      description: t('حلول نقل موثوقة لفرق الأمن والإشراف على مدار الساعة، مما يضمن سلاسة الانتقال والانضباط التشغيلي.', 'Reliable transit solutions for security and supervisory staff 24/7, ensuring seamless commute and operational discipline.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757808/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_45_12_%D9%85_ispqyw.png'
    },
    {
      id: 'school-transportation',
      icon: GraduationCap,
      title: t('نقل طلاب المدارس', 'School Student Transportation'),
      description: t('توفير وسائل نقل آمنة ومنتظمة للمدارس والمؤسسات التعليمية مع الالتزام بأعلى معايير السلامة.', 'Providing safe and regular transportation for schools and educational institutions, adhering to the highest safety standards.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757806/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_51_59_%D9%85_t4qppe.png'
    },
    {
      id: 'events-transportation',
      icon: Bus,
      title: t('النقل للفعاليات والمؤتمرات', 'Event & Conference Transportation'),
      description: t('خدمات نقل احترافية للمناسبات والاجتماعات والمؤتمرات الكبرى.', 'Professional transportation services for major events, meetings, and conferences.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757815/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_37_05_%D9%85_nkdb9h.png'
    }
  ]

  useEffect(() => {
    if (!cardsRef.current) return

    const cards = cardsRef.current.querySelectorAll('.service-card')
    const ctx = gsap.context(() => {
      gsap.fromTo(cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-white py-24 border-t border-slate-100"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1240px] mx-auto px-[5vw]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body font-semibold text-xs text-gold uppercase tracking-[0.08em] bg-gold/10 px-3 py-1.5 rounded-full">
            {t('خدمات نقل مخصصة للشركات والمصانع', 'Tailored Corporate & Factory Transit Services')}
          </span>
          <h2 className="font-display font-extrabold text-[28px] sm:text-5xl heading-gradient mt-5 lg:h-[66px] sm:h-auto leading-relaxed">
            {t('حلول نقل تضمن استمرارية أعمالكم بكفاءة تامة', 'Transport Solutions Ensuring Perfect Efficiency for Your Business')}
          </h2>
          <p className="font-body text-base md:text-lg text-slate-600 max-w-[700px] mx-auto mt-4 leading-relaxed">
            {t('نقدم لكم خدمات نقل متطورة تُعنى بأدق تفاصيل رحلتكم اليومية، مما يمنح كوادركم رحلة مريحة تزيد من إنتاجيتهم وتقلل الإجهاد اليومي.', 'We provide sophisticated transportation services focusing on every detail of your daily commute, offering comfortable rides that boost productivity and reduce stress.')}
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card bg-white border border-slate-200/50 rounded-[20px] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-gold/30 hover:-translate-y-2 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="w-full aspect-[4/3] overflow-hidden border-b border-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 duration-500 transition-transform"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display font-bold text-lg md:text-xl text-[#8a151b] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed min-h-[60px] flex items-center justify-center">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  to={`/services/${service.id}`}
                  className="w-full font-body font-semibold text-xs bg-slate-50 hover:bg-gold hover:text-white text-slate-700 py-2.5 rounded-xl flex items-center justify-center transition-all border border-slate-200"
                >
                  {t('عرض التفاصيل والطلب', 'View Details')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

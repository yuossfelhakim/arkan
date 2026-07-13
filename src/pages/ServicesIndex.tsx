import { Building2, Factory, Landmark, GraduationCap, Bus, ShieldCheck, Clock, MapPin, FileText, Settings, Car, Shield } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function ServicesIndex() {
  const { t, isRtl } = useLanguage()

  const services = [
    {
      id: 'annual-contracts',
      icon: FileText,
      title: t('العقود السنوية والشهرية', 'Annual & Monthly Contracts'),
      shortDesc: t('نقدم مجموعة من حلول النقل المرنة التي تتناسب مع احتياجات الشركات والمؤسسات المتنوعة.', 'We offer a range of flexible transit solutions tailored to the diverse needs of corporate clients and institutions.'),
      // Configured with the requested custom annual contracts graphic
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757523/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_34_55_%D9%85_sbs5vd.png'
    },
    {
      id: 'transit-dispatch',
      icon: Settings,
      title: t('إدارة خطوط النقل', 'Transit Line Management'),
      shortDesc: t('تنظيم ومتابعة المسارات وخطط التشغيل لضمان تحقيق أعلى مستوى من الكفاءة التشغيلية.', 'Organizing and monitoring routes and operational schedules to ensure the highest level of operational efficiency.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757623/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_33_11_%D9%85_ynuu1p.png'
    },
    {
      id: 'factory-transportation',
      icon: Factory,
      title: t('نقل العاملين بالمصانع', 'Factory Employee Transportation'),
      shortDesc: t('حلول نقل فعالة للمناطق الصناعية والمصانع لضمان سهولة انتقال العاملين.', 'Effective transportation solutions for industrial zones and factories to ensure seamless worker commute.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757812/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_29_54_%D9%85_pkcmxt.png'
    },
    {
      id: 'employee-transportation',
      icon: Building2,
      title: t('نقل الموظفين اليومي', 'Daily Employee Transportation'),
      shortDesc: t('تقديم خدمات نقل منتظمة وموثوقة للشركات والمؤسسات مع الالتزام التام بالمواعيد المحددة.', 'Providing regular and reliable transit services for companies and institutions with complete commitment to set schedules.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757804/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_29_21_%D9%85_kannur.png'
    },
    {
      id: 'car-rental',
      icon: Car,
      title: t('تأجير السيارات للشركات', 'Corporate Car Rental'),
      shortDesc: t('تقديم سيارات ملاكي حديثة للشركات والمؤسسات من خلال عقود يومية أو شهرية أو سنوية، لتلبية احتياجات التنقل الإداري والتنفيذي والزيارات الرسمية.', 'Providing modern passenger cars for companies and institutions via daily, monthly, or yearly contracts, meeting administrative, executive, and official visit transit needs.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757814/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_46_41_%D9%85_ymvoku.png'
    },
    {
      id: 'security-transportation',
      icon: Shield,
      title: t('نقل أفراد شركات الأمن والحراسة', 'Security Personnel Transport'),
      shortDesc: t('حلول نقل موثوقة لفرق الأمن والإشراف على مدار الساعة، مما يضمن سلاسة الانتقال والانضباط التشغيلي.', 'Reliable transit solutions for security and supervisory staff 24/7, ensuring seamless commute and operational discipline.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757808/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_45_12_%D9%85_ispqyw.png'
    },
    {
      id: 'school-transportation',
      icon: GraduationCap,
      title: t('نقل طلاب المدارس', 'School Student Transportation'),
      shortDesc: t('توفير وسائل نقل آمنة ومنتظمة للمدارس والمؤسسات التعليمية مع الالتزام بأعلى معايير السلامة.', 'Providing safe and regular transportation for schools and educational institutions, adhering to the highest safety standards.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757806/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_51_59_%D9%85_t4qppe.png'
    },
    {
      id: 'events-transportation',
      icon: Bus,
      title: t('النقل للفعاليات والمؤتمرات', 'Event & Conference Transportation'),
      shortDesc: t('خدمات نقل احترافية للمناسبات والاجتماعات والمؤتمرات الكبرى.', 'Professional transportation services for major events, meetings, and conferences.'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757815/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_37_05_%D9%85_nkdb9h.png'
    }
  ]

  return (
    <div className="bg-slate-50 pt-32 pb-24" dir={isRtl ? 'rtl' : 'ltr'}>
      <SEO 
        titleAr="خدماتنا | باصات نقل الموظفين وعمال المصانع وإيجار حافلات في مصر"
        titleEn="Our Services | Employee, Factory Transport & Bus Rental in Egypt"
        descriptionAr="استكشف خدمات شركة أركان ترافيل المتميزة: نقل موظفي الشركات، نقل عمال المصانع، نقل المدارس والجامعات، النقل المؤسسي وإيجار حافلات حديثة بجميع المقاسات."
        descriptionEn="Explore Arkan Travel services: Corporate staff transit, industrial labor transport, university transport, VIP delegations, and luxury bus rentals."
      />

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-[5vw] mb-20 text-center">
        <span className="font-body font-semibold text-xs text-gold uppercase tracking-[0.08em] bg-gold/10 px-3 py-1.5 rounded-full inline-block">
          {t('خدمات النقل الجماعي والذكي', 'Smart & Group Transit Services')}
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl heading-gradient mt-5 leading-tight">
          {t('حلول ذكية وخدمات نقل متكاملة تلبي تطلعات أعمالكم', 'Smart Solutions & Tailored Transit Services For Your Business')}
        </h1>
        <p className="font-body text-base md:text-lg text-slate-600 max-w-[800px] mx-auto mt-6 leading-relaxed text-center">
          {t('نحن في أركان ترافيل لا نوفر مجرد باصات، بل نقدم حلول تشغيل وإشراف هندسي متكامل لرحلات النقل اليومي والطارئ، مما يوفر لشركتكم راحة البال والإنتاجية المثلى.', 'At Arkan Travel we provide integrated operational schemes and active dispatch for all daily and urgent commutes, gifting your company peace of mind and enhanced productivity.')}
        </p>
      </div>

      {/* Services Grid (The 8 services) */}
      <div id="services-grid" className="max-w-[1240px] mx-auto px-[5vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {services.map((service) => (
          <div 
            key={service.id}
            className="bg-white border border-slate-200/50 rounded-[20px] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-gold/30 transition-all duration-300"
          >
            <div>
              {service.image && (
                <div className="w-full aspect-[4/3] overflow-hidden border-b border-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="p-5 text-center">
                <h2 className="font-display font-bold text-lg md:text-xl text-[#8a151b] mb-3">
                  {service.title}
                </h2>
                <p className="font-body text-xs md:text-sm text-slate-600 leading-relaxed min-h-[60px] flex items-center justify-center">
                  {service.shortDesc}
                </p>
              </div>
            </div>
            
            <div className="p-5 pt-0">
              <Link 
                to={`/services/${service.id}`}
                className="w-full font-body font-semibold text-xs bg-slate-50 hover:bg-gold hover:text-white text-slate-700 py-2.5 rounded-xl flex items-center justify-center transition-all border border-slate-200"
              >
                {t('عرض التفاصيل والطلب', 'View Details & Request Quote')}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Arkan Services? (Beautiful Glassmorphism Section matching user's reference) */}
      <div className="relative text-white w-full overflow-hidden bg-[#0a0a0a] py-24 -mb-24">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('/about-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        />

        {/* Dark gradient overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.5) 50%, rgba(10, 10, 10, 0.95) 100%)',
            zIndex: 1
          }}
        />

        {/* Content Container */}
        <div className="relative max-w-[1200px] mx-auto px-6" style={{ zIndex: 2 }} dir="rtl">
          <div className="text-center mb-16">
            <span 
              className="font-body font-semibold text-xs uppercase tracking-[0.08em] px-3 py-1.5 rounded-full inline-block"
              style={{
                color: '#e01020',
                backgroundColor: 'rgba(224, 16, 32, 0.15)',
              }}
            >
              {t('مزايا خدماتنا', 'Our Advantages')}
            </span>
            <h2 
              className="text-white mt-4"
              style={{
                fontSize: '32px',
                fontWeight: 'extrabold',
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {t('لماذا تختار خدمات النقل من أركان ترافيل؟', 'Why Choose Arkan Travel Services?')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
            {/* Card 1 */}
            <div 
              style={{
                backgroundColor: 'rgba(20, 20, 20, 0.4)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '32px 24px',
              }}
              className="text-start flex flex-col items-start hover:border-red-500/30 transition-all duration-300"
            >
              <div 
                className="flex items-center justify-center rounded-full mb-6"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(224, 16, 32, 0.15)',
                }}
              >
                <ShieldCheck size={20} style={{ color: '#e01020' }} />
              </div>
              <h3 
                className="text-white mb-4"
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {t('أعلى معايير الأمان والسلامة', 'Highest Safety Standards')}
              </h3>
              <p 
                style={{
                  fontSize: '14px',
                  lineHeight: '1.8',
                  color: '#d1d1d1',
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {t('حافلاتنا مجهزة بأحدث وسائل الأمان وسائقونا مدربون باحترافية على القيادة الآمنة والوقائية لحماية الركاب.', 'Our buses are packed with leading safety tech and our drivers are professionally trained in defensive driving.')}
              </p>
            </div>

            {/* Card 2 */}
            <div 
              style={{
                backgroundColor: 'rgba(20, 20, 20, 0.4)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '32px 24px',
              }}
              className="text-start flex flex-col items-start hover:border-red-500/30 transition-all duration-300"
            >
              <div 
                className="flex items-center justify-center rounded-full mb-6"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(224, 16, 32, 0.15)',
                }}
              >
                <Clock size={20} style={{ color: '#e01020' }} />
              </div>
              <h3 
                className="text-white mb-4"
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {t('الالتزام التام بالمواعيد', 'Rigid Schedule Commitment')}
              </h3>
              <p 
                style={{
                  fontSize: '14px',
                  lineHeight: '1.8',
                  color: '#d1d1d1',
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {t('نعتمد خطط تشغيل دقيقة ومراقبة مستمرة للمسارات لتجنب تأخير الموظفين أو العمال عن وردياتهم اليومية.', 'We enforce rigorous operational planning and route-tracking to prevent any workforce delays.')}
              </p>
            </div>

            {/* Card 3 */}
            <div 
              style={{
                backgroundColor: 'rgba(20, 20, 20, 0.4)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '32px 24px',
              }}
              className="text-start flex flex-col items-start hover:border-red-500/30 transition-all duration-300"
            >
              <div 
                className="flex items-center justify-center rounded-full mb-6"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(224, 16, 32, 0.15)',
                }}
              >
                <MapPin size={20} style={{ color: '#e01020' }} />
              </div>
              <h3 
                className="text-white mb-4"
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {t('تغطية جغرافية شاملة', 'Comprehensive Geographic Coverage')}
              </h3>
              <p 
                style={{
                  fontSize: '14px',
                  lineHeight: '1.8',
                  color: '#d1d1d1',
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {t('نغطي كافة المحافظات والمناطق الصناعية الحيوية في مصر بشبكة خطوط سير ذكية ومتكاملة لتسهيل أعمالكم.', 'Covering all Egyptian governorates and major industrial nodes with smart, comprehensive networks.')}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

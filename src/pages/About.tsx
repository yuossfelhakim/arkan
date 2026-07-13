import { Users, Shield, Target, Award, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function About() {
  const { t, isRtl } = useLanguage()

  const stats = [
    { label: t('حافلة حديثة في الأسطول', 'Modern Buses in Fleet'), value: '100+' },
    { label: t('عميل شركات ومصانع', 'Corporate & Factory Clients'), value: '25+' },
    { label: t('خمسة الاف رحلة', 'Million Safe Trips Annually'), value: '5000+' },
    { label: t('عاما من الخبرة الممتدة', 'Years of Industry Experience'), value: '11+' },
  ]

  const values = [
    {
      icon: Shield,
      title: t('السلامة أولاً', 'Safety First'),
      desc: t('نضع سلامة الركاب والموظفين على رأس أولوياتنا من خلال الصيانة الدورية الدقيقة وتدريب السائقين المستمر.', 'Passenger and employee safety is our ultimate priority, secured through rigorous periodic maintenance and ongoing driver training.')
    },
    {
      icon: Target,
      title: t('الدقة والالتزام', 'Precision & Punctuality'),
      desc: t('نلتزم بجدول مواعيد صارم ومسارات مدروسة لضمان وصول الموظفين والعمال في مواعيدهم المحددة دون تأخير.', 'We adhere to rigid schedules and pre-studied routes to guarantee timely employee arrival with zero delays.')
    },
    {
      icon: Users,
      title: t('التركيز على العميل', 'Customer Centricity'),
      desc: t('نصمم حلول النقل خصيصاً لتناسب الاحتياجات التشغيلية لكل شركة ومصنع بشكل فريد ومرن.', 'We design and optimize bespoke transportation schemes tailored uniquely to the operational constraints of each enterprise.')
    },
    {
      icon: Award,
      title: t('الجودة والاحترافية', 'Quality & Professionalism'),
      desc: t('فريق عمل مؤهل وخدمة عملاء على مدار الساعة لضمان تجربة نقل مريحة وسلسة تليق باسم شركتكم.', 'Highly trained staff and 24/7 dedicated customer service ensuring a smooth, premium transit experience.')
    }
  ]

  return (
    <div className="bg-slate-50 pt-32 pb-24" dir={isRtl ? 'rtl' : 'ltr'}>
      <SEO 
        titleAr="من نحن | أركان ترافيل لنقل الموظفين والعمال في مصر"
        titleEn="About Us | Arkan Travel Employee Transportation Egypt"
        descriptionAr="تعرف على شركة أركان ترافيل للنقل الجماعي، رؤيتنا ورسالتنا وخبرتنا الممتدة في تقديم أفضل خدمات نقل الموظفين والعمال بأعلى معايير السلامة والجودة."
        descriptionEn="Discover Arkan Travel, our vision, mission, and over 11 years of experience providing leading employee and corporate transportation in Egypt."
      />

      {/* Hero Section of About */}
      <div className="max-w-[1200px] mx-auto px-[5vw] mb-20 text-center">
        <span className="font-body font-semibold text-xs text-gold uppercase tracking-[0.08em] bg-gold/10 px-3 py-1.5 rounded-full inline-block">
          {t('تعرّف على شريك نجاحكم', 'Get to know your success partner')}
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl heading-gradient mt-[21px] leading-relaxed sm:leading-[74px] pl-0 pt-0 w-full max-w-[1031.03px] lg:min-h-[133.0156px] rounded-none mx-auto">
          {t('ريادة قطاع النقل الجماعي ونقل الموظفين في مصر', 'Pioneering Corporate & Group Transportation in Egypt')}
        </h1>
        <p className="font-body text-base md:text-lg text-slate-600 max-w-[800px] mx-auto mt-6 leading-relaxed">
          {t('تأسست أركان ترافيل لتضع معايير جديدة في خدمات النقل الجماعي وتوفير باصات مجهزة لنقل الموظفين وعمال المصانع في مختلف محافظات مصر بكفاءة وموثوقية بالغة.', 'Arkan Travel was established to set new standards in group transport services, offering equipped buses for employees and factory laborers across Egypt with high efficiency and reliability.')}
        </p>
      </div>

      {/* Grid: Story & Stats */}
      <div className="max-w-[1200px] mx-auto px-[5vw] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Story Text */}
        <div className="lg:col-span-7 space-y-6 text-start">
          <h2 className="font-display font-bold text-2xl sm:text-3.5xl text-slate-800">
            {t('من نحن؟ خبرة تتجاوز الـ 11 عاماً من العطاء', 'Who We Are? Over 11 Years of Trusted Industry Experience')}
          </h2>
          <p className="font-body text-slate-600 leading-relaxed text-base">
            {t('أركان ترافيل هي شركة مصرية متخصصة ومحترفة في قطاع خدمات النقل الجماعي الذكي والموجه للشركات والمصانع والهيئات الحكومية. على مدار أكثر من عقد من الزمان، نجحنا في بناء شراكات استراتيجية طويلة الأمد مع كبرى الشركات المحلية والدولية، موفرين لهم حلول انتقال يومية مريحة وخالية من الإجهاد لكوادرهم البشرية.', 'Arkan Travel is a leading Egyptian enterprise specialized in smart group transit solutions targeting corporations, factories, and governmental bodies. For over a decade, we have forged strategic partnerships with major local and global brands, facilitating comfortable, stress-free daily commutes for their personnel.')}
          </p>
          <p className="font-body text-slate-600 leading-relaxed text-base">
            {t('يمتد نشاطنا ليغطي القاهرة الكبرى، الجيزة، الإسكندرية، والمناطق الصناعية الحيوية مثل السادس من أكتوبر، العاشر من رمضان، والسادات. نتميز بمرونة عالية في تلبية متطلبات التشغيل الدقيق للورديات المتتالية وتغطية خطوط السير الشاسعة بفضل فريق عمل وإدارة تشغيل متواجدة على مدار الساعة.', 'Our coverage spans Greater Cairo, Giza, Alexandria, and vital industrial zones like 6th of October, 10th of Ramadan, and Sadat City. We stand out with great flexibility in meeting sequential shift operations and extensive routes supported by a round-the-clock dispatch and operations team.')}
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              to="/contact" 
              className="font-body font-semibold text-sm bg-gold text-white px-6 py-3 rounded-full hover:bg-gold-light hover:scale-[1.03] transition-all"
            >
              {t('تواصل معنا الآن', 'Contact Us Now')}
            </Link>
            <Link 
              to="/services" 
              className="font-body font-semibold text-sm border border-slate-300 text-slate-700 px-6 py-3 rounded-full hover:border-gold hover:text-gold transition-all"
            >
              {t('استعرض خدماتنا', 'Explore Our Services')}
            </Link>
          </div>
        </div>

        {/* Stats Grid Display */}
        <div className="lg:col-span-5 bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <span className="block font-display font-black text-3xl sm:text-4xl text-gold mb-2">{stat.value}</span>
                <span className="block font-body text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision & Mission (Golden / Slate Backdrop Split with Background Image) */}
      <section className="relative min-h-[500px] overflow-hidden mb-24 bg-slate-950 text-white flex items-center mission-vision-section">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-image" 
          style={{ 
            backgroundImage: "url('/about-bg.png')",
            zIndex: 0
          }}
        />
        
        {/* Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            background: 'linear-gradient(90deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.95) 100%)',
            zIndex: 1
          }}
        />

        {/* Content Container with layout set to RTL and generous space below the two cards */}
        <div className="relative w-full pt-24 pb-52 px-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" style={{ zIndex: 2 }} dir="rtl">
          {/* Vision Card */}
          <div 
            style={{
              backgroundColor: 'rgba(20, 20, 20, 0.4)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '40px',
            }}
            className="text-start flex flex-col items-start"
          >
            <div 
              className="flex items-center justify-center rounded-full mb-6"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(224, 16, 32, 0.15)',
              }}
            >
              <Target size={20} style={{ color: '#e01020' }} />
            </div>
            <h3 
              className="text-white mb-4"
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {t('رؤيتنا', 'Our Vision')}
            </h3>
            <p 
              style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: '#d1d1d1',
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {t('أن نكون الخيار الأول والشركة الأكثر موثوقية وابتكاراً في قطاع النقل الجماعي وتوفير خدمات نقل الموظفين في مصر والشرق الأوسط، من خلال تبني أحدث التقنيات الذكية وصيانة أسطول حافلات فاخر وصديق للبيئة.', 'To become the first choice and the most trusted, innovative provider in the group transport sector and corporate staff transit across Egypt and the Middle East, utilizing smart tech and a luxury, eco-friendly fleet.')}
            </p>
          </div>

          {/* Mission Card */}
          <div 
            style={{
              backgroundColor: 'rgba(20, 20, 20, 0.4)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '40px',
            }}
            className="text-start flex flex-col items-start"
          >
            <div 
              className="flex items-center justify-center rounded-full mb-6"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(224, 16, 32, 0.15)',
              }}
            >
              <Shield size={20} style={{ color: '#e01020' }} />
            </div>
            <h3 
              className="text-white mb-4"
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {t('رسالتنا', 'Our Mission')}
            </h3>
            <p 
              style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: '#d1d1d1',
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              {t('توفير خدمات نقل آمنة، مريحة، ودقيقة تساهم في تقليل الضغوطات اليومية على الموظفين وزيادة إنتاجيتهم، ومساعدة شركائنا من الشركات والمصانع على تحقيق استمرارية أعمالهم بأقصى كفاءة تشغيلية واقتصادية ممكنة.', 'To deliver safe, comfortable, and punctual transit services that reduce daily commuting stress and boost workforce productivity, assisting our corporate partners in achieving business continuity with optimal cost efficiency.')}
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

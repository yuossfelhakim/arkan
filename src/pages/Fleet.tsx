import { CheckCircle, ShieldCheck, Star, Users, Briefcase, Compass } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function Fleet() {
  const { t, isRtl } = useLanguage()

  const fleetItems = [
    {
      id: 'toyota-hiace',
      nameAr: 'تويوتا هاي أس | Toyota Hiace',
      nameEn: 'Toyota Hiace Van',
      capacityAr: '14 راكب',
      capacityEn: '14 Seats',
      descAr: 'الحافلة الأصغر والأكثر ذكاءً ومناورة في شوارع القاهرة المزدحمة. اختيار مثالي للفرق الإدارية الصغيرة، والمهندسين، والتنقلات السريعة فائقة الدقة.',
      descEn: 'The smallest and smartest shuttle, cruising with extreme maneuverability through busy urban roads. Ideal for small executive groups, specialized engineering teams, and fast transits.',
      specsAr: ['تكييف هواء هادئ ومزدوج بقوة تبريد فائقة', 'أحزمة أمان فردية مدمجة بكل مقعد', 'فتحات يو إس بي (USB) مستقلة لشحن الهواتف', 'تتبع دائم عبر نظام تحديد المواقع العالمي GPS'],
      specsEn: ['Powerful double-blower whisper silent Air Conditioning', 'Individual safety belts integrated on every seat', 'Independent USB charging slots for mobile devices', 'Fully connected GPS dynamic tracking and fleet dispatch'],
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783766438/ChatGPT_Image_11_%D9%8A%D9%88%D9%84%D9%8A%D9%88_2026_01_14_12_%D9%85_ltnlfa.png',
      tagAr: 'الأسرع حركة',
      tagEn: 'Fastest Transit'
    },
    {
      id: 'toyota-coaster',
      nameAr: 'تويوتا كوستر | Toyota Coaster',
      nameEn: 'Toyota Coaster Coach',
      capacityAr: '29 راكب',
      capacityEn: '29 Seats',
      descAr: 'الحافلة الأكثر شعبية واعتمادية في مصر. تجمع بين الهيكل القوي والراحة الفائقة لتشكل الخيار الأمثل لنقل الموظفين اليومي وعمال المصانع.',
      descEn: 'The most popular, hyper-reliable group transit workhorse in Egypt. Blending rigid safety structure with outstanding cabin comfort to constitute the premier option for staff and workers.',
      specsAr: ['مقاعد مخملية مريحة مع مساند رأس مدمجة', 'مكيف هواء مركزي فعال وشديد التحمل', 'ميكروفون داخلي للمشرف لشرح التعليمات', 'مساحات مخصصة للحقائب والأدوات الشخصية'],
      specsEn: ['Comfortable plush seats with ergonomic headrests', 'Heavy-duty central climate control units', 'Internal paging mic for supervisor communications', 'Dedicated luggage compartments and personal racks'],
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783766441/ChatGPT_Image_11_%D9%8A%D9%88%D9%84%D9%8A%D9%88_2026_01_16_49_%D9%85_z8ddvw.png',
      tagAr: 'الأكثر طلباً',
      tagEn: 'Best Seller'
    },
    {
      id: 'mini-bus',
      nameAr: 'ميني باص مجهز | Equipped Mini Bus',
      nameEn: 'Equipped Mini Bus',
      capacityAr: '33 راكب',
      capacityEn: '33 Seats',
      descAr: 'يتميز بسعة ركاب مرتفعة ومساحة حركة داخلية ممتازة مع متانة إنشائية فائقة، مما يجعله الخيار الأول لتغطية الوردية المتتابعة لمصانع السادس من أكتوبر والعاشر من رمضان.',
      descEn: 'Boasting a high passenger capacity, spacious cabin aisle, and robust structural durability. It is the premier choice for covering sequential industrial factory shifts.',
      specsAr: ['مقاعد مرنة ذات خامات متينة ومقاومة للاهتراء', 'عزل صوتي وحراري فائق للتمتع برحلة هادئة', 'نظام تعليق ومساعدين مطور لامتصاص صدمات الطرق', 'باب تشغيل تلقائي ومثبت سرعة لسلامة القيادة'],
      specsEn: ['Flexible, heavy-wear proof fabrics and seating options', 'Advanced acoustic and thermal cabin insulation layers', 'Reinforced suspension assemblies for smooth highway rides', 'Automatic slide doors and strict speed-limiter controls'],
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783766752/ChatGPT_Image_11_%D9%8A%D9%88%D9%84%D9%8A%D9%88_2026_01_45_28_%D9%85_ebprff.png',
      tagAr: 'اقتصادي وعملي',
      tagEn: 'Optimal Economy'
    },
    {
      id: 'luxury-coach',
      nameAr: 'حافلات سياحية فاخرة | Luxury Coach',
      nameEn: 'Luxury Coach / VIP Bus',
      capacityAr: '50 راكب',
      capacityEn: '50 Seats',
      descAr: 'تاج أسطولنا والرمز الأبرز للفخامة المتكاملة. حافلة مرسيدس أو يوتونج عملاقة مزودة بجميع وسائل الترفيه لخدمة الوفود الأجنبية، المؤتمرات، والرحلات البعيدة بين المحافظات.',
      descEn: 'The absolute crown of our fleet and the signature of premium luxury. Spacious Mercedes-Benz or Yutong touring coach fully loaded with amenities to serve VIP conventions and long-distance intercity transits.',
      specsAr: ['مقاعد مخملية فاخرة قابلة للإمالة والتباعد بمرونة', 'دورة مياه مستقلة ونظيفة بالكامل مدمجة بالداخل', 'شاشات عرض ذكية متعددة مع نظام صوت مسرحي متطور', 'ثلاجة لتبريد المشروبات وصندوق أمتعة فائق الاتساع'],
      specsEn: ['Ultra-deluxe reclining executive seats with armrests', 'Fully functional, pristine on-board restroom (WC)', 'Dual LCD media screens with advanced surround sound system', 'On-board mini-fridge for drinks and cavernous cargo storage'],
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783766440/ChatGPT_Image_11_%D9%8A%D9%88%D9%84%D9%8A%D9%88_2026_01_39_21_%D9%85_baxscl.png',
      tagAr: 'VIP فاخر',
      tagEn: 'VIP Luxury'
    }
  ]

  const safetyGuarantees = [
    {
      icon: ShieldCheck,
      title: t('فحص فني وقائي دوري', 'Preventive Maintenance'),
      desc: t('تخضع جميع حافلاتنا لفحوصات ميكانيكية وكهربائية شاملة قبل انطلاق أي رحلة في مراكز الصيانة المعتمدة لدينا.', 'All vehicles go through detailed mechanical and electrical diagnostics prior to any shift departure at our centers.')
    },
    {
      icon: Users,
      title: t('سائقون مدربون بعناية', 'Vetted & Trained Operators'),
      desc: t('نختار سائقينا بعناية بالغة مع إجراء تحاليل طبية دورية واختبارات قيادة وقائية صارمة للتأكد من أمان ركابكم.', 'We handpick professional drivers, subject to regular drug tests, background checks, and defensive road reviews.')
    },
    {
      icon: Compass,
      title: t('غرفة عمليات وتحكم ذكية', 'Smart Command & Dispatch'),
      desc: t('جميع الباصات متصلة بغرفة عمليات ذكية لمتابعة السرعة والالتزام بالمسار المحدد لحظة بلحظة.', 'All coaches are hooked to our central live operations desk, monitoring vehicle speed, traffic, and schedules.')
    }
  ]

  return (
    <div className="bg-slate-50 pt-32 pb-24" dir={isRtl ? 'rtl' : 'ltr'}>
      <SEO 
        titleAr="أسطول باصات وحافلات أركان ترافيل | باصات نقل موظفين"
        titleEn="Our Fleet & Buses | Arkan Travel Employee Transportation"
        descriptionAr="استعرض أسطول حافلات أركان ترافيل الحديث: تويوتا هاي اس، تويوتا كوستر، ميني باص، حافلات مرسيدس 50 راكب لخدمة نقل الشركات والمصانع والوفود بمصر."
        descriptionEn="Explore Arkan Travel modern bus fleet: Toyota Hiace, Toyota Coaster, Mini Bus, and 50-Seat Mercedes VIP tourist coaches across Egypt."
      />

      {/* Hero Header */}
      <div className="max-w-[1200px] mx-auto px-[5vw] mb-20 text-center">
        <span className="font-body font-semibold text-xs text-gold uppercase tracking-[0.08em] bg-gold/10 px-3 py-1.5 rounded-full inline-block">
          {t('أسطول النقل الأحدث في مصر', 'Egypt’s Modern Transit Fleet')}
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl heading-gradient mt-5 leading-tight">
          {t('أسطول حافلات حديث ومتكامل يناسب كافة احتياجاتكم', 'A Modern, Integrated Fleet Ready For Every Transition')}
        </h1>
        <p className="font-body text-base md:text-lg text-slate-600 max-w-[800px] mx-auto mt-6 leading-relaxed text-center">
          {t('نمتلك ونشغل تشكيلة واسعة ومتنوعة من الحافلات الفاخرة والمعقمة، بدءاً من الباصات الصغيرة والسريعة وحتى الباصات السياحية الكبيرة، لضمان تلبية تطلعات شركتكم بدقة تشغيلية مطلقة.', 'We own and deploy a versatile fleet of pristine, sanitized luxury vehicles, ranging from quick shuttles to grand touring coaches, securing maximum operational excellence.')}
        </p>
      </div>

      {/* Fleet Catalog (Grid/Cards) */}
      <div className="max-w-[1200px] mx-auto px-[5vw] space-y-16 mb-24">
        {fleetItems.map((bus) => (
          <div 
            key={bus.id}
            className="bg-white border border-slate-200/60 rounded-[32px] overflow-hidden p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Bus Image Panel (Lg: col-span-5) */}
            <div className="lg:col-span-5 relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-slate-100">
              <img 
                src={bus.image} 
                alt={t(bus.nameAr, bus.nameEn)} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 right-4 bg-gold text-white font-body text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                {t(bus.tagAr, bus.tagEn)}
              </span>
            </div>

            {/* Bus Details Panel (Lg: col-span-7) */}
            <div className="lg:col-span-7 text-start space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="font-display font-extrabold text-2xl text-slate-800">
                    {t(bus.nameAr, bus.nameEn)}
                  </h2>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                    <span className="font-body text-xs text-slate-400 font-semibold">{t('جاهزة للتشغيل والتعاقد', 'Available for Contract')}</span>
                  </div>
                </div>
                <div className="bg-gold/10 text-gold px-4 py-2 rounded-xl flex items-center gap-2 font-display font-black text-sm">
                  <Users size={18} />
                  <span>{t(bus.capacityAr, bus.capacityEn)}</span>
                </div>
              </div>

              <p className="font-body text-sm md:text-base text-slate-600 leading-relaxed">
                {t(bus.descAr, bus.descEn)}
              </p>

              {/* Specs bullet points with check circles */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-slate-800 text-sm md:text-base">{t('تجهيزات ومزايا الحافلة:', 'Vehicle Amenities & Specs:')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(isRtl ? bus.specsAr : bus.specsEn).map((spec, index) => (
                    <div key={index} className="flex items-start gap-2.5 font-body text-xs md:text-sm text-slate-500 leading-relaxed">
                      <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="font-body font-bold text-sm bg-gold hover:bg-gold-light text-white px-6 py-3 rounded-xl transition-all shadow-sm"
                >
                  {t('طلب عرض سعر لهذا الباص', 'Request Quote For This Vehicle')}
                </Link>
                <Link 
                  to="/services" 
                  className="font-body font-semibold text-sm border border-slate-200 hover:border-gold hover:text-gold text-slate-600 px-6 py-3 rounded-xl transition-all"
                >
                  {t('استعرض خدماتنا', 'Explore Our Services')}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

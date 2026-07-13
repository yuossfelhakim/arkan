import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import { 
  Quote, 
  Star, 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle, 
  Clock, 
  Users, 
  ArrowLeft, 
  ArrowRight,
  Briefcase
} from 'lucide-react'

export default function Clients() {
  const { t, isRtl } = useLanguage()

  const partnerLogos = [
    {
      name: t('جيروليمو فودز', 'Gerolimo Foods'),
    
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926806/WhatsApp_Image_2026-06-24_at_1.14.17_PM_j0lf6d.jpg'
    },
    {
      name: t('إمبكس فودز', 'Empex Foods'),
   
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926834/cropped-empexFood_jrntae.png'
    },
    {
      name: t('جرين لاند', 'Green Land'),
      type: t('منتجات الألبان والأغذية', 'Dairy & Food Products'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926806/images_drw4qb.png'
    },
    {
      name: t('حلواني إخوان', 'Halwani Bros'),
      type: t('صناعات غذائية رائدة', 'Leading Food Industries'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926805/images_1_q2cjll.png'
    },
    {
      name: t('هارفست فودز', 'Harvest Foods'),
      type: t('صناعات غذائية وتعبئة', 'Food Processing & Packaging'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926806/%D9%87%D8%A7%D8%B1%D9%81%D8%B3%D8%AA-%D9%81%D9%88%D8%AF%D8%B2_fu6ole.png'
    },
    {
      name: t('البوادي', 'Al-Bawadi'),
      type: t('منتجات غذائية وحلاوة طحينية', 'Halva & Food Products'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926805/images_7_d3yrig.jpg'
    },
    {
      name: t('دومتي', 'Domty'),
      type: t('صناعات الأغذية والألبان', 'Food & Dairy Industries'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926805/images_paskhg.jpg'
    },
    {
      name: t('فرج الله', 'Faragalla'),
      type: t('مجموعة الصناعات الغذائية', 'Food Industries Group'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926805/images_6_bu3l83.jpg'
    },
    {
      name: t('جهينة للألبان', 'Juhayna Dairy'),
      type: t('منتجات الألبان والعصائر', 'Dairy & Juice Products'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926805/images_1_jkbgtk.jpg'
    },
    {
      name: t('جالاكسي للأغذية', 'Galaxy Foods'),
      type: t('صناعات غذائية وحلويات', 'Confectionery & Foods'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926805/images_3_nb2h8r.jpg'
    },
    {
      name: t('ريتش بيك', 'Rich Bake'),
      type: t('مخبوزات وصناعات غذائية', 'Bakery & Food Products'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926805/images_5_ozvxub.jpg'
    },
    {
      name: t('بيست فودز', 'Best Foods'),
      type: t('صناعات وتوزيع أغذية', 'Food Mfg & Distribution'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926805/images_2_fdcshe.png'
    },
    {
      name: t('بيتي', 'Beyti'),
      type: t('عصائر ومنتجات ألبان', 'Juices & Dairy Products'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926805/images_4_yivqil.jpg'
    },
    {
      name: t('عبور لاند', 'Obour Land'),
      type: t('صناعات غذائية متكاملة', 'Integrated Food Industries'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926804/images_3_vhlrvk.png'
    },
    {
      name: t('الرشيدي الميزان', 'El Rashidi El Mizan'),
      type: t('حلويات وطحينة وأغذية', 'Sweets & Halva Products'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926805/images_2_ocvy62.jpg'
    },
    {
      name: t('أمريكانا', 'Americana Group'),
      type: t('الأغذية والمطاعم', 'Food & Restaurant Services'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926804/download_yncunj.png'
    },
    {
      name: t('ريجينا', 'Regina'),
      type: t('صناعات غذائية ومكرونة', 'Pasta & Food Industries'),
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783926804/1631302359805_cxdcnp.jpg'
    }
  ]

  const detailedTestimonials = [
    {
      quote: t('نقل عمال مصانعنا في ورديات متتالية كان كابوساً تشغيلياً مستمراً حتى تعاقدنا مع شركة أركان ترافيل. تمكنوا بفضل غرفتهم التشغيلية الذكية من تنظيم خطوط السير بدقة مدهشة، حيث تصل الحافلات قبل موعدها بـ 10 دقائق دائماً.', 'Managing sequential factory worker shifts was a persistent logistics nightmare for us until we partnered with Arkan Travel. Their smart dispatch desk optimized our routing paths perfectly; buses arrive 10 minutes early consistently.'),
      name: t('المهندس محمود حسن', 'Eng. Mahmoud Hassan'),
      title: t('مدير الموارد البشرية واللوجستيات | مصانع السويدي', 'Director of HR & Logistics '),
      rating: 5,
      date: t('يونيو 2026', 'June 2026'),
      initials: t('م ح', 'MH')
    },
    {
      quote: t('في شركة دلتا تيك للتكنولوجيا، تهمنا جداً راحة موظفينا ليحافظوا على تركيزهم. باصات أركان ترافيل من طراز تويوتا هاي أس نظيفة جداً ومكيفة ومجهزة بمخارج شحن، مما يسمح للفريق بالاسترخاء أو بدء العمل أثناء طريقهم للمقر.', 'At Delta Tech, keeping our developers and engineers comfortable during their commute is vital for productivity. Arkan Travel’s Toyota Hiace vans are exceptionally clean, air-conditioned, and equipped with USB ports, allowing them to relax or code on-the-go.'),
      name: t('أ. دينا الشربيني', 'Mrs. Dina El Sherbini'),
      title: t('مدير السعادة والتطوير الوظيفي | Delta Tech', 'Employee Happiness & Development Manager | Delta Tech'),
      rating: 5,
      date: t('مايو 2026', 'May 2026'),
      initials: t('د ش', 'DS')
    },
    {
      quote: t('احترافية بالغة في استقبال الوفود الرسمية لوزارتنا. أسطول الباصات السياحية المرسيدس 50 راكب كان على أعلى مستوى من الفخامة، والسائقون ملمون تماماً بقواعد البروتوكول والتعامل الراقي مع كبار الشخصيات.', 'Outstanding professionalism in receiving our official ministry delegations. The 50-Seat Mercedes VIP coaches were of exceptional luxury, and the operators were fully aligned with protocol and high-end guest management.'),
      name: t('سعادة المستشار خالد فوزي', 'His Excellency Counselor Khaled Fawzy'),
      title: t('المتحدث الرسمي ومسؤول العلاقات الحكومية', 'Official Spokesperson & Government Relations Officer'),
      rating: 5,
      date: t('مارس 2026', 'March 2026'),
      initials: t('خ ف', 'KF')
    },
    {
      quote: t('نوجه الشكر الجزيل لإدارة أركان ترافيل على التزامهم المذهل أثناء فترة الامتحانات الجامعية. قمنا بتنسيق مسارات لـ 1500 طالب يومياً عبر القاهرة، ولم نتلقى شكوى واحدة عن أي تأخير.', 'We extend our deepest gratitude to Arkan Travel’s management for their phenomenal commitment during university exam seasons. We routed 1500 students daily across Cairo with absolute zero delay complaints.'),
      name: t('د. عبد الرحمن كامل', 'Dr. Abdel Rahman Kamel'),
      title: t('عميد شؤون الطلاب والأنشطة | الأكاديمية الحديثة', 'Dean of Student Affairs | Modern Academy'),
      rating: 5,
      date: t('يناير 2026', 'January 2026'),
      initials: t('ع ك', 'AK')
    }
  ]



  return (
    <div className="bg-slate-50 pt-32 pb-24" dir={isRtl ? 'rtl' : 'ltr'}>
      <SEO 
        titleAr="شركاء النجاح وعملاء أركان ترافيل | شهادات حقيقية"
        titleEn="Our Valued Clients & Partners | Arkan Travel Testimonials"
        descriptionAr="شاهد شركاء نجاح شركة أركان ترافيل للنقل الجماعي ونقل الموظفين في مصر. شهادات حقيقية لكبرى الشركات والمصانع والهيئات الحكومية التي تضع ثقتها الكاملة بنا."
        descriptionEn="Explore Arkan Travel success partners and clients in Egypt. Verified testimonials from leading corporations and factories trusting us."
      />

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-red-50/40 via-transparent to-transparent pointer-events-none -z-10" />

      {/* Header section with refined aesthetics */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 mb-16 text-center relative">
        <div className="inline-flex items-center gap-2 bg-gold/5 border border-gold/10 px-4 py-1.5 rounded-full mb-4">
          <Briefcase size={14} className="text-gold" />
          <span className="font-display font-semibold text-xs text-gold uppercase tracking-[0.05em]">
            {t('شركاء نعتز بثقتهم', 'Success Partners We Value')}
          </span>
        </div>
        <h1 
          className="font-display font-extrabold text-3xl sm:text-5xl heading-gradient mt-2 max-w-[850px] mx-auto"
          style={{ height: '141px', lineHeight: '64px' }}
        >
          {t('نبني شراكات ممتدة وتجارب نقل استثنائية لعملائنا', 'Building Enduring Partnerships & Exceptional Commutes')}
        </h1>
        <p className="font-body text-base md:text-lg text-slate-600 max-w-[780px] mx-auto mt-6 leading-relaxed">
          {t('نضع ثقة عملائنا في صدارة غايتنا التشغيلية واليومية. يسعدنا ويشرفنا تسيير آلاف الرحلات الآمنة والمنضبطة يومياً للحفاظ على سير العمل واستمرار طاقات الإنتاج بكفاءة مطلقة.', 'We place our clients’ trust at the absolute center of our operations. We are privileged to manage thousands of safe, seamless commutes daily to power business continuity and production lines.')}
        </p>
      </div>






      {/* Styled Minimalist Partner Categorization Cards */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-2.5xl sm:text-3.5xl text-slate-950 mt-3">
            {t('عملاء وشركاء النجاح المعتمدين', 'Our Certified Success Partners & Clients')}
          </h2>
          <p className="font-body text-sm text-slate-500 mt-2 max-w-[700px] mx-auto leading-relaxed">
            {t('نفخر بخدمة وتأمين حركة الكوادر البشرية والعمالية لكبرى الشركات والكيانات الاقتصادية والصناعية الرائدة في مصر.', 'We are privileged to manage and secure the daily employee commute for Egypt’s premier industrial, food manufacturing, and corporate brands.')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {partnerLogos.map((partner, idx) => (
            <div 
              key={idx} 
              className="bg-white/90 backdrop-blur-sm border border-slate-200/60 p-4 rounded-2xl flex items-center justify-center h-28 shadow-sm hover:shadow-md hover:border-gold/30 hover:translate-y-[-4px] transition-all duration-300 group"
              id={`partner-segment-${idx}`}
            >
              <img 
                src={partner.image} 
                alt={partner.name || `Partner ${idx + 1}`} 
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid Section */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 mb-24">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-2.5xl sm:text-3.5xl text-slate-800 mt-3">
            {t('قصص نجاح ومراجعات موثقة من مديري الشركات', 'Verified Success Stories & Reviews from Corporate Directors')}
          </h2>
          <p className="font-body text-sm text-slate-500 mt-2">
            {t('آراء موثقة من مدراء الموارد البشرية واللوجستيات في الشركات التي شرفنا بالتعاقد معها.', 'Real feedback from HR and logistics managers we proudly serve daily.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {detailedTestimonials.map((tItem, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/60 p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between text-start group"
              id={`testimonial-card-${idx}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(tItem.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" className="text-amber-400" />
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-300">
                    <Quote size={20} className="transform rotate-180 text-gold/20" />
                  </div>
                </div>

                <p className="font-body text-slate-600 leading-relaxed text-sm md:text-base relative z-10 mb-8 italic">
                  "{tItem.quote}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-5 mt-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold to-red-500 flex items-center justify-center text-white font-display font-bold text-sm shadow-md">
                  {tItem.initials}
                </div>
                <div>
                  <span className="font-display font-bold text-slate-800 block text-sm sm:text-base">{tItem.name}</span>
                  <span className="font-body text-[10px] text-slate-400 block mt-1.5 font-semibold bg-slate-50 px-2 py-0.5 rounded inline-block">
                    {tItem.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Corporate CTA Section */}
      <div className="max-w-[1000px] mx-auto px-6 sm:px-8">
        <div className="bg-slate-900 rounded-[32px] p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl shadow-slate-900/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-[700px] mx-auto space-y-6">
            <span className="text-gold font-display text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-white/5 rounded-full border border-white/10 inline-block">
              {t('عقد نقل موثق لمؤسستك', 'Corporate Transit Contract')}
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white leading-tight">
              {t('هل تبحث عن شريك نقل معتمد وموثوق لموظفي شركتك؟', 'Looking for a Verified & Reliable Transport Partner?')}
            </h2>
            <p className="font-body text-sm sm:text-base text-slate-300 leading-relaxed">
              {t('انضم إلى قائمة كبار الشركاء اليوم. تواصل معنا لبدء تخطيط جدول زمني ومسارات تشغيل ذكية تضمن الكفاءة، وتقلل كلفة تشغيل النقل بنسبة تصل إلى 25% مع أسطول مريح بالكامل.', 'Join our list of esteemed corporate partners. Contact us today to plan a customized, smart timeline and routing path that ensures performance and cuts commute overhead by up to 25%.')}
            </p>

            <div className="pt-6">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-red-600 hover:from-red-600 hover:to-gold text-white font-display font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-red-950/40 hover:shadow-xl hover:translate-y-[-1px] transition-all"
                id="clients-cta-btn"
              >
                <span>{t('اطلب عرض أسعار مخصص الآن', 'Request a Tailored Proposal Now')}</span>
                {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

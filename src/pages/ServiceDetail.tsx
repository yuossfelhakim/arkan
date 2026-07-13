import { useParams, Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/SEO'
import { Building2, Factory, Landmark, GraduationCap, Bus, Shield, Clock, Users, ArrowLeft, ArrowRight, MessageSquare, CheckCircle, FileText, Settings, Car } from 'lucide-react'
import { useState } from 'react'

interface ServiceData {
  titleAr: string
  titleEn: string
  h1Ar: string
  h1En: string
  descAr: string
  descEn: string
  detailedAr: string
  detailedEn: string
  image: string
  icon: any
  featuresAr: string[]
  featuresEn: string[]
  benefitsAr: { title: string; desc: string }[]
  benefitsEn: { title: string; desc: string }[]
}

export default function ServiceDetail() {
  const { id } = useParams()
  const { t, isRtl } = useLanguage()
  const navigate = useNavigate()

  // Form states
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    employeesCount: '',
    notes: '',
  })

  const servicesData: Record<string, ServiceData> = {
    'annual-contracts': {
      titleAr: 'العقود السنوية والشهرية لنقل الموظفين | أركان ترافيل',
      titleEn: 'Annual & Monthly Corporate Transit Contracts | Arkan Travel',
      h1Ar: 'العقود السنوية والشهرية للشركات',
      h1En: 'Annual & Monthly Corporate Contracts',
      descAr: 'نقدم مجموعة من حلول النقل المرنة التي تتناسب مع احتياجات الشركات والمؤسسات المتنوعة عبر عقود دورية مدروسة.',
      descEn: 'We offer a range of flexible transit solutions tailored to the diverse needs of corporate clients and institutions through optimized periodic contracts.',
      detailedAr: 'تقدم أركان ترافيل خدمات تعاقدية مخصصة طويلة وقصيرة المدى (سنوية وشهرية) تناسب ميزانيات الشركات والمؤسسات وتضمن كفاءة تشغيلية مستمرة. نوفر لعملائنا حافلات حديثة مخصصة بالكامل تخدم المسارات اليومية لموظفيكم مع التزام تعاقدي كامل بكافة بنود الصيانة، التراخيص، والتشغيل اليومي لتوفروا على أنفسكم مشقة إدارة حركة الحركة وتفرغوا لإدارة أعمالكم الأساسية.',
      detailedEn: 'Arkan Travel provides bespoke long and short-term (annual and monthly) contractual services that align with corporate budgets and ensure continuous operational efficiency. We supply our clients with fully dedicated modern buses serving daily routes for your employees, backed by full compliance on maintenance, licensing, and daily operations to free you from transit logistics.',
      // Configured with the requested custom annual contracts graphic
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757523/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_34_55_%D9%85_sbs5vd.png',
      icon: FileText,
      featuresAr: [
        'أسعار تشغيل ثابتة وتنافسية على مدار فترة التعاقد.',
        'تأمين باصات بديلة فورية ومكافئة في حال الصيانة أو الأعطال.',
        'عقود قانونية واضحة وموثوقة تضمن حقوق الطرفين بالكامل.',
        'فريق إشراف ومتابعة مخصص لكل تعاقد لمراقبة جودة الخدمة.',
      ],
      featuresEn: [
        'Stable and highly competitive operating rates throughout the contract term.',
        'Instant and equivalent bus backups during routine maintenance or emergency alerts.',
        'Transparent, legally robust contracts securing mutual interests fully.',
        'Dedicated dispatch and account management teams to monitor service quality.',
      ],
      benefitsAr: [
        { title: 'تحسين الكفاءة', desc: 'تقليل تأخر الموظفين والوصول المنسق للفريق ينعلس على انطلاقة يوم عمل ناجح.' },
        { title: 'راحة البال', desc: 'نوفر عليك أعباء التشغيل والإشراف والمتابعة اليومية لنهتم بها بالنيابة عنك.' },
        { title: 'ترشيد النفقات', desc: 'عقود سنوية وشهرية توفر حتى 30% من تكاليف التنقلات الفردية أو العشوائية.' },
      ],
      benefitsEn: [
        { title: 'Optimized Workflow', desc: 'Zero tardiness translates directly to on-time corporate performance.' },
        { title: 'Peace of Mind', desc: 'We take over all operational micro-management and route planning.' },
        { title: 'Cost Savings', desc: 'Periodic contracts save up to 30% compared to ad-hoc or individual transit costs.' },
      ]
    },
    'transit-dispatch': {
      titleAr: 'إدارة خطوط النقل وهندسة المسارات | أركان ترافيل',
      titleEn: 'Transit Line Management & Route Dispatch | Arkan Travel',
      h1Ar: 'إدارة خطوط النقل وهندسة المسارات',
      h1En: 'Transit Line Management & Route Dispatch',
      descAr: 'تنظيم ومتابعة المسارات وخطط التشغيل لضمان تحقيق أعلى مستوى من الكفاءة التشغيلية والالتزام بالمواعيد.',
      descEn: 'Organizing and monitoring routes and operational schedules to ensure the highest level of operational efficiency and schedule adherence.',
      detailedAr: 'نعتمد في أركان ترافيل على حلول تشغيل ذكية وغرفة عمليات مركزية لإدارة خطوط السير ومتابعة الحافلات لحظة بلحظة. يقوم مهندسو الحركة لدينا بتحليل الطرق، تحديد نقاط التجمع المثلى للموظفين، وتجنب الاختناقات المرورية، مما يوفر وقتاً كبيراً ويضمن وصول الحافلات في الوقت المحدد تماماً دون تأخير.',
      detailedEn: 'At Arkan Travel, we rely on smart operational systems and a centralized control room to manage transit lines and monitor buses in real-time. Our dispatchers analyze road patterns, design optimal collection points, and bypass traffic bottlenecks, saving significant commute time and ensuring absolute punctuality.',
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757623/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_33_11_%D9%85_ynuu1p.png',
      icon: Settings,
      featuresAr: [
        'تتبع مستمر بحلول الـ GPS لجميع الحافلات في أسطولنا.',
        'تقارير دورية للشركات توضح دقة المواعيد ونسب الإشغال.',
        'إعادة هندسة المسارات ديناميكياً لتجنب الحوادث والإصلاحات على الطرق.',
        'تواصل دائم مع السائقين والمشرفين لسرعة التعامل مع الطوارئ.',
      ],
      featuresEn: [
        'Real-time GPS tracking for every vehicle in our operating fleet.',
        'Periodic reporting for clients detailing arrival accuracy and bus occupancy.',
        'Dynamic route re-engineering to bypass accidents and road construction.',
        'Constant communication with operators for immediate emergency response.',
      ],
      benefitsAr: [
        { title: 'دقة بالغة', desc: 'تضمن تكنولوجيا المتابعة وصول موظفيكم قبل مواعيد العمل الرسمية بمرونة.' },
        { title: 'كفاءة استهلاك', desc: 'تخطيط المسارات الذكية يقلل المسافات المقطوعة ويوفر استهلاك الوقود والانبعاثات.' },
        { title: 'تقارير فورية', desc: 'إمكانية إطلاع العميل على حالة الرحلات ومواعيد الوصول بشكل لحظي شفاف.' },
      ],
      benefitsEn: [
        { title: 'High Punctuality', desc: 'Advanced dispatching ensures team arrivals ahead of official working hours.' },
        { title: 'Eco-Efficiency', desc: 'Smart routing cuts total mileage, reducing fuel usage and carbon footprint.' },
        { title: 'Active Reporting', desc: 'Transparent real-time status access for corporate HR and facility managers.' },
      ]
    },
    'factory-transportation': {
      titleAr: 'خدمة نقل عمال ومصانع ومناطق صناعية | أركان ترافيل',
      titleEn: 'Factory & Industrial Labor Transportation | Arkan Travel',
      h1Ar: 'نقل العاملين بالمصانع والمناطق الصناعية',
      h1En: 'Factory Worker Transportation',
      descAr: 'حلول نقل فعالة وموثوقة للمناطق الصناعية والمصانع لضمان سهولة انتقال العاملين على مدار الساعة.',
      descEn: 'Effective transportation solutions for industrial zones and factories to ensure seamless worker commute 24/7.',
      detailedAr: 'تتطلب المصانع والشركات الإنتاجية انضباطاً صارماً ومتابعة على مدار الساعة لخطوط سير العمالة لضمان عدم توقف الماكينات وخطوط الإنتاج. توفر أركان ترافيل خدمة نقل متكاملة للعمال تدعم الورديات المتتالية (الصباحية، المسائية، والليلية) مع الإشراف المباشر والتواصل المستمر مع إدارات الموارد البشرية والإنتاج بالمصانع.',
      detailedEn: 'Manufacturing facilities demand strict timing and prompt shifts to keep assembly lines running round-the-clock without a single hiccup. Arkan Travel coordinates custom schedules, covering morning, afternoon, and night shifts meticulously, supported by regular communication with factory HR managers.',
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757812/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_29_54_%D9%85_pkcmxt.png',
      icon: Factory,
      featuresAr: [
        'تغطية دقيقة لجميع الورديات (24/7) دون أي توقف أو تأخير.',
        'خبرة واسعة في نقل عمال السادس من أكتوبر، العاشر من رمضان، والسادات.',
        'أسطول حافلات مجهز ومتين يتحمل العمل الشاق والمسافات الطويلة.',
        'إشراف ميداني من مشرفي تشغيل ينسقون صعود ونزول العمال بانتظام.',
      ],
      featuresEn: [
        'Dedicated 24/7 operational support to handle every single shift transition.',
        'Unmatched expertise servicing 6th of October, 10th of Ramadan, and Sadat City nodes.',
        'Robust, high-durability transit vehicles made for heavy daily road work.',
        'On-ground dispatch team securing organized embarkations and drop-offs.',
      ],
      benefitsAr: [
        { title: 'استقرار الإنتاج', desc: 'ضمان تواجد العمالة في مواقعها قبل بدء الوردية يضمن عدم هدر وقت التصنيع.' },
        { title: 'أمان العمال', desc: 'توفير رحلة عودة مريحة وآمنة لعمالكم بعد عناء العمل الشاق لزيادة رضاهم الوظيفي.' },
        { title: 'تنظيم ذكي', desc: 'توزيع خطوط ومحطات التجمع بشكل مدروس يضمن تغطية أكبر مساحة بأقل عدد حافلات.' },
      ],
      benefitsEn: [
        { title: 'Unbroken Production', desc: 'Assuring labor is on-site ahead of the shift transition prevents manufacturing downtime.' },
        { title: 'Workforce Satisfaction', desc: 'A safe, comfortable and relaxing commute home after heavy labor boosts workforce retention.' },
        { title: 'Optimized Routing', desc: 'Geographically calculated collection nodes maximize coverage using minimal vehicles.' },
      ]
    },
    'employee-transportation': {
      titleAr: 'خدمة نقل الموظفين اليومي للشركات | أركان ترافيل',
      titleEn: 'Daily Employee Transportation Services | Arkan Travel',
      h1Ar: 'نقل الموظفين اليومي والمنتظم',
      h1En: 'Daily Employee Transportation',
      descAr: 'تقديم خدمات نقل منتظمة وموثوقة للشركات والمؤسسات مع الالتزام التام بالمواعيد المحددة والراحة الكاملة.',
      descEn: 'Providing regular and reliable transit services for companies and institutions with complete commitment to set schedules.',
      detailedAr: 'تتفهم أركان ترافيل أهمية الوقت والراحة في بيئة الأعمال المعاصرة. خدمة نقل الموظفين لدينا مصممة لتقليل إجهاد الطريق اليومي، مما ينعكس إيجاباً على إنتاجية الكادر الطبي والمهندسين والإداريين داخل شركتكم. نقوم بتخطيط ذكي لخطوط السير ونوفر حافلات مكيفة ونظيفة بالكامل مزودة بسائقي باصات محترفين وملتزمين.',
      detailedEn: 'Arkan Travel grasps how crucial comfort and scheduling are to the modern business landscape. Our office commute plans are highly optimized to minimize transit stress, boosting performance metrics. We actively layout smart routing paths, providing fully-equipped premium AC coaches run by dedicated professional operators.',
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757804/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_29_21_%D9%85_kannur.png',
      icon: Building2,
      featuresAr: [
        'تغطية خطوط سير شاملة عبر القاهرة الكبرى والمحافظات.',
        'مراقبة مستمرة للحافلات لضمان دقة مواعيد الحضور والانصراف.',
        'تأمين بدائل فورية في حال حدوث أي أعطال أو طوارئ.',
        'سائقون محترفون خاضعون لاختبارات دورية وتحاليل طبية مستمرة.',
      ],
      featuresEn: [
        'Comprehensive route coverage across Greater Cairo and surrounding regions.',
        'Continuous fleet dispatch monitoring ensuring perfect timing and punctuality.',
        'Guaranteed immediate vehicle backup in case of mechanical alerts or delays.',
        'Experienced operators subjected to periodic background and medical clearances.',
      ],
      benefitsAr: [
        { title: 'تحسين الكفاءة', desc: 'تقليل تأخر الموظفين والوصول المنسق للفريق ينعكس على انطلاقة يوم عمل ناجح.' },
        { title: 'راحة البال', desc: 'نوفر عليك أعباء التشغيل والإشراف والمتابعة اليومية لنهتم بها بالنيابة عنك.' },
        { title: 'ترشيد النفقات', desc: 'خطط اشتراكات وعقود سنوية مرنة وذكية تناسب ميزانية شركتك وتوفر تكاليف الانتقال الفردية.' },
      ],
      benefitsEn: [
        { title: 'Optimized Workflow', desc: 'Zero labor tardiness means your corporate machinery boots up perfectly on-schedule.' },
        { title: 'Total Peace of Mind', desc: 'We take over all operational micro-management, routes, and emergency dispatches.' },
        { title: 'Cost Savings', desc: 'Strategic annual and monthly contracts that cost significantly less than individual commute schemes.' },
      ]
    },
    'car-rental': {
      titleAr: 'تأجير السيارات ملاكي للشركات والمؤسسات | أركان ترافيل',
      titleEn: 'Corporate Passenger Car Rental Services | Arkan Travel',
      h1Ar: 'تأجير السيارات الفاخرة للشركات',
      h1En: 'Corporate Car Rental Services',
      descAr: 'تقديم سيارات ملاكي حديثة للشركات والمؤسسات من خلال عقود يومية أو شهرية أو سنوية، لتلبية كافة الاحتياجات الإدارية.',
      descEn: 'Providing modern passenger cars for companies and institutions via daily, monthly, or yearly contracts, meeting all executive transit needs.',
      detailedAr: 'نوفر باقة متميزة من أحدث السيارات الملاكي الفاخرة والاقتصادية لخدمة احتياجات المدراء التنفيذيين، الزيارات الرسمية، والوفود الهامة لشركتكم. يمكنكم التعاقد على سيارات بسائقين محترفين وعلى دراية تامة ببروتوكولات الضيافة، أو بدون سائق للتعاقدات طويلة المدى، مع حلول تأمين وصيانة كاملة تتكفل بها أركان ترافيل بالكامل لتنعموا براحة بال حقيقية.',
      detailedEn: 'We deliver a premium suite of modern luxury and economical passenger cars to serve executive commutes, official guest visits, and key corporate delegates. You can secure vehicles with professional, protocol-trained drivers or as fleet lease for long-term periods, complete with insurance and servicing managed directly by Arkan Travel.',
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757814/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_46_41_%D9%85_ymvoku.png',
      icon: Car,
      featuresAr: [
        'أسطور واسع من السيارات الحديثة (موديلات العام) المجهزة بالكامل.',
        'سائقون محترفون يتحدثون الإنجليزية ومدربون على أعلى معايير اللباقة.',
        'تغطية تأمينية شاملة وصيانة دورية مجانية شاملة الباص البديل.',
        'أنظمة تعاقد مرنة جداً (يومي، شهري، سنوي) بأسعار تنافسية.',
      ],
      featuresEn: [
        'Diverse fleet of pristine, current-year model passenger cars fully equipped.',
        'English-speaking professional drivers trained in etiquette and premium hospitality.',
        'Comprehensive insurance coverage and full complimentary maintenance.',
        'Highly flexible lease schemes (daily, monthly, yearly) at excellent pricing.',
      ],
      benefitsAr: [
        { title: 'مظهر لائق لشركتك', desc: 'نعكس اهتمام شركتكم بأدق التفاصيل والترحيب اللائق بضيوفكم التنفيذيين وكبار الشخصيات.' },
        { title: 'حلول اقتصادية', desc: 'التعاقد السنوي يوفر عليك تكاليف شراء وتحديث الأسطول الخاص وأعباء الصيانة الإدارية.' },
        { title: 'مرونة التنقل', desc: 'توفير سيارة حديثة فورية تلبي احتياجات المهام والزيارات الرسمية لوفد شركتكم بأي وقت.' },
      ],
      benefitsEn: [
        { title: 'Elite Corporate Image', desc: 'Impress executive partners and international VIP guests with pristine, modern arrivals.' },
        { title: 'Financial Efficiency', desc: 'Saves you capital investment in buying/updating fleet vehicles and administrative overheads.' },
        { title: 'Maximum Mobility', desc: 'Instant access to current-year models to handle transport requirements at a moments notice.' },
      ]
    },
    'security-transportation': {
      titleAr: 'نقل أفراد الأمن والحراسة والمشرفين | أركان ترافيل',
      titleEn: 'Security & Guards Transportation Services | Arkan Travel',
      h1Ar: 'نقل أفراد شركات الأمن والحراسة',
      h1En: 'Security Personnel & Guard Transportation',
      descAr: 'حلول نقل موثوقة لفرق الأمن والإشراف على مدار الساعة، مما يضمن سلاسة الانتقال والانضباط التشغيلي الكامل.',
      descEn: 'Reliable transit solutions for security and supervisory staff 24/7, ensuring seamless commute and operational discipline.',
      detailedAr: 'ندرك تماماً أهمية الانضباط وعامل الوقت الحاسم لأفراد شركات الأمن والحراسة. تقدم أركان ترافيل حلول نقل مخصصة لفرق الحراسة لتأمين انتقالهم بين مقار إقامتهم ومواقع عملهم في المصانع، المولات، والكومباوندات بمواعيد صارمة ودقيقة تماماً لضمان عدم حدوث أي ثغرات في نوبات الحراسة أو تغطية الورديات الأمنية.',
      detailedEn: 'We understand the critical importance of discipline and scheduling for security firms and site guards. Arkan Travel provides dedicated transport solutions for guarding details, ensuring organized commutes between accommodations and secure sites (factories, malls, residential compounds) with absolute punctuality to prevent shift handovers from lagging.',
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757808/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_45_12_%D9%85_ispqyw.png',
      icon: Shield,
      featuresAr: [
        'تشغيل دقيق على مدار الساعة 24/7 دون أي توقف في الأعياد أو العطلات.',
        'باصات وحافلات متينة قادرة على التحرك في مختلف التضاريس والطرق الوعرة.',
        'تواصل لحظي وتتبع GPS لضمان التواجد الدقيق والتوزيع المنتظم.',
        'إمكانية تعديل وتحديث خطوط السير سريعاً لمواكبة المهام الأمنية الطارئة.',
      ],
      featuresEn: [
        'Reliable 24/7 operations with zero interruption during holidays or weekends.',
        'Heavy-duty, robust buses capable of navigating rugged environments and remote sites.',
        'Centralized GPS tracking to guarantee on-schedule deployment at post stations.',
        'Rapid route adjustment capabilities to accommodate urgent security dispatches.',
      ],
      benefitsAr: [
        { title: 'انضباط كامل', desc: 'حضور دقيق في محطات الحراسة يضمن عملية تسليم نوبات العمل بسلاسة وأمان.' },
        { title: 'جاهزية طوال اليوم', desc: 'خطوط تشغيل مرنة تغطي الورديات الصباحية والمسائية دون أي تأخير أو غياب.' },
        { title: 'تكاليف تشغيل ذكية', desc: 'حلول نقل مجمعة توفر الكثير من ميزانيات النقل الفردية لأفراد الأمن والحراسة.' },
      ],
      benefitsEn: [
        { title: 'Strict Handover', desc: 'Prompt arrivals secure smooth and safe shifts for critical guard post stations.' },
        { title: 'Round-The-Clock Ready', desc: 'Flexible operating paths covering consecutive morning and night shifts perfectly.' },
        { title: 'Optimized Budgets', desc: 'Group commute strategies that greatly reduce individual travel expenses for guards.' },
      ]
    },
    'school-transportation': {
      titleAr: 'خدمة نقل طلاب المدارس والمؤسسات التعليمية | أركان ترافيل',
      titleEn: 'School & Student Transportation Services | Arkan Travel',
      h1Ar: 'نقل طلاب المدارس والمؤسسات التعليمية',
      h1En: 'School Student Transportation',
      descAr: 'توفير وسائل نقل آمنة ومنتظمة للمدارس والمؤسسات التعليمية مع الالتزام بأعلى معايير السلامة والأمان للطلاب.',
      descEn: 'Providing safe and regular transportation for schools and educational institutions, adhering to the highest safety standards.',
      detailedAr: 'تحظى سلامة الأطفال والطلاب برعايتنا الفائقة والكاملة. توفر أركان ترافيل خطط نقل للجامعات والمدارس الخاصة والدولية بمصر، بحافلات حديثة تخضع لصيانة احترازية صارمة وسائقين مأمونين ومختبرين بعناية فائقة. نلتزم بأعلى معايير الانضباط ومحطات التجمع الآمنة مع وجود مشرفات باص عند الطلب لضمان رحلة هادئة ومريحة.',
      detailedEn: 'Student safety is our absolute, non-negotiable benchmark. Arkan Travel operates robust campus and school transits for prestigious private and international institutions, relying on strictly vetted drivers and heavily maintained modern buses. Every route is planned carefully, with child-safety attendants available upon demand.',
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757806/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_51_59_%D9%85_t4qppe.png',
      icon: GraduationCap,
      featuresAr: [
        'باصات حديثة ومكيفة مجهزة بأحزمة أمان كاملة وكافة وسائل الراحة.',
        'سائقون مدربون على الصبر وأصول التعامل الآمن مع الأطفال والطلاب.',
        'مشرفات باص مؤهلات لتنسيق ركوب ونزول الطلاب ومراقبتهم أثناء الرحلة.',
        'مسارات محددة وجدول مواعيد دقيق يناسب مواعيد الحصص والمحاضرات.',
      ],
      featuresEn: [
        'Modern, highly air-conditioned buses equipped with safety belts and cooling.',
        'Vetted operators extensively trained on patience and safe student management.',
        'Qualified safety attendants supervising student embarkations and rides.',
        'Strictly designed routes and timeframes aligned with academic schedules.',
      ],
      benefitsAr: [
        { title: 'أمان تام للطلاب', desc: 'راحة بال حقيقية لأولياء الأمور بفضل التزامنا الصارم بسلامة الأطفال.' },
        { title: 'راحة وتجهيز', desc: 'حافلات مكيفة بالكامل لتجنيب الطلاب إرهاق الحر وزيادة تركيزهم الدراسي.' },
        { title: 'مرونة عقود', desc: 'عقود وحلول مرنة تلائم الفترات الدراسية والأنشطة والرحلات الصيفية للمدارس.' },
      ],
      benefitsEn: [
        { title: 'Max Parent Assurance', desc: 'Genuine peace of mind for families, trusting their kids are in professional hands.' },
        { title: 'Anti-Fatigue Commutes', desc: 'Air-conditioned premium coaches keeping children active and focused for learning.' },
        { title: 'Contract Flexibility', desc: 'Plans tailored to terms, summer campus semesters, and extracurricular trips.' },
      ]
    },
    'events-transportation': {
      titleAr: 'النقل للفعاليات والمؤتمرات والمناسبات الكبرى | أركان ترافيل',
      titleEn: 'Event & Conference Transportation Services | Arkan Travel',
      h1Ar: 'النقل للفعاليات والمؤتمرات الكبرى',
      h1En: 'Event & Conference Transportation',
      descAr: 'خدمات نقل احترافية للمناسبات والاجتماعات والمؤتمرات الكبرى بأعلى درجات التنسيق والرفاهية.',
      descEn: 'Professional transportation services for major events, meetings, and conferences with ultimate coordination.',
      detailedAr: 'نحن متخصصون في تخطيط وإدارة الحركة للمؤتمرات، المعارض، الأحداث الرياضية، وحفلات إطلاق المنتجات الكبرى بمصر. نوفر أسطولاً متكاملاً من الحافلات والسيارات الفارهة بمختلف المقاسات لخدمة المشاركين والمنظمين من المطارات والفنادق إلى مقر الحدث، بالتنسيق الكامل مع إدارة الفعالية لضمان سلاسة التدفق والتنقلات بلا أي معوقات.',
      detailedEn: 'We specialize in planning and coordinating transport logistics for national congresses, grand expositions, sporting tournaments, and major brand launches across Egypt. We supply a comprehensive fleet of luxury buses and sedans to serve delegates and organizers seamlessly, keeping transit schedules flawless.',
      image: 'https://res.cloudinary.com/dyqji8zrj/image/upload/v1783757815/ChatGPT_Image_19_%D9%8A%D9%88%D9%86%D9%8A%D9%88_2026_08_37_05_%D9%85_nkdb9h.png',
      icon: Bus,
      featuresAr: [
        'إشراف كامل وتعيين منسق حركة مخصص للتواجد الميداني طوال الحدث.',
        'أسطول حافلات فاخرة وموحدة الشكل تعكس رقي ومستوى الحدث.',
        'تخطيط وإدارة مواعيد الوصول والمغادرة في المطارات والربط مع الفنادق.',
        'باقات تسعير مرنة وممتازة تتناسب مع حجم وطبيعة الفعالية.',
      ],
      featuresEn: [
        'Dedicated transit coordinators present on-ground throughout your event.',
        'Sleek, matching luxury buses that perfectly amplify your event prestige.',
        'Airport reception management and seamless guest transfers to/from host venues.',
        'Flexible pricing structures tailored directly to your event size and duration.',
      ],
      benefitsAr: [
        { title: 'نجاح باهر للحدث', desc: 'التنقل السلس والمنظم يترك انطباعاً رائعاً لدى جميع حضور ومشاركي مؤتمركم.' },
        { title: 'تغطية لوجستية كاملة', desc: 'نتحمل عبء التخطيط والتشغيل بالكامل لنمنح فريقكم فرصة التركيز على نجاح الفعالية.' },
        { title: 'أقصى درجات الرفاهية', desc: 'تجهيزات راقية داخل الحافلات لضمان وصول الضيوف مسترخين ومستعدين للفعالية.' },
      ],
      benefitsEn: [
        { title: 'Event Success', desc: 'Seamless, highly organized transport leaves a phenomenal impression on guests.' },
        { title: 'Full Logistics Cover', desc: 'We coordinate all schedules, paths, and pickups so you can focus on event management.' },
        { title: 'Executive Luxury', desc: 'Premium details on board so delegates land at host locations fully prepped and relaxed.' },
      ]
    },
    'bus-rental': {
      titleAr: 'إيجار حافلات وباصات للرحلات والمناسبات السياحية | أركان ترافيل',
      titleEn: 'Luxury Bus & Coach Rentals | Arkan Travel',
      h1Ar: 'إيجار حافلات وباصات للرحلات والمناسبات',
      h1En: 'Luxury Bus & Tourist Coach Rental',
      descAr: 'نوفر حافلات حديثة بجميع المقاسات (هاي أس، كوستر، ميني باص، باصات سياحية 50 راكب) للإيجار للرحلات السياحية والترفيهية.',
      descEn: 'Offering modern vehicles of all classes (Hiace, Coaster, Mini Bus, 50-Seat VIP coaches) for corporate excursions and tours.',
      detailedAr: 'هل تخطط لرحلة ترفيهية لموظفي شركتك، أو تحتاج إلى نقل جماعي لحدث عائلي أو سياحي متميز؟ تقدم لك أركان ترافيل خدمة تأجير حافلات مكيفة وحديثة بالكامل ومجهزة بكافة وسائل الراحة والرفاهية، بصحبة سائقين محترفين وعلى دراية تامة بكافة الطرق والمزارات السياحية في مصر (الإسكندرية، الساحل الشمالي، شرم الشيخ، الغردقة، السخنة، وغيرها).',
      detailedEn: 'Are you planning a corporate retreat, or do you require group transportation for a VIP social, athletic, or touristic excursion? Arkan Travel puts forward pristine, climate-controlled buses loaded with entertainment features. Our professional drivers are expert navigators of all major routes and holiday hubs in Egypt (North Coast, Sharm El Sheikh, Hurghada, Sokhna).',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      icon: Bus,
      featuresAr: [
        'تنوع كبير في المقاسات والقدرات الاستيعابية لتناسب مختلف المجموعات.',
        'باصات سياحية معقمة، نظيفة ومكيفة بالكامل مع أنظمة صوت متطورة.',
        'سائقون ودودون، ملتزمون بالمواعيد ويتمتعون بمهارات قيادة ممتازة.',
        'أسعار تنافسية للغاية مع باقات مرنة للإيجار اليومي أو الأسبوعي.',
      ],
      featuresEn: [
        'Wide choice of classes and sizes matching small, medium, or large cohorts.',
        'Pristine, sanitized, fully AC vehicles equipped with sound/entertainment.',
        'Courteous, punctual operators with excellent route familiarity.',
        'Extremely competitive rates and highly flexible daily or weekly rental packages.',
      ],
      benefitsAr: [
        { title: 'تنوع الأسطول', desc: 'نمتلك كل المقاسات من تويوتا هاي أس 14 راكب، كوستر 29 راكب، ميني باص 33 راكب، وباص مرسيدس 50 راكب.' },
        { title: 'أسعار واضحة', desc: 'تسعير شفاف وعادل يخلو من أي مفاجآت أو تكاليف خفية أثناء الرحلة.' },
        { title: 'سياحة آمنة', desc: 'تراخيص سياحية كاملة وتأمين شامل على الحافلات لضمان سلامة رحلتكم.' },
      ],
      benefitsEn: [
        { title: 'Comprehensive Sizes', desc: 'From 14-Seat Toyota Hiace, 29-Seat Coaster, 33-Seat Mini Bus, to 50-Seat Mercedes VIP coaches.' },
        { title: 'Transparent Pricing', desc: 'Clear, honest upfront pricing with zero hidden fees or surprises during your trip.' },
        { title: 'Licensed & Secured', desc: 'Full tourism clearances, comprehensive insurance, and compliance for maximum safety.' },
      ]
    },
  }

  const service = id ? servicesData[id] : null

  // If service ID is invalid, route back to services list
  if (!service) {
    return (
      <div className="pt-36 pb-24 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('الخدمة المطلوبة غير موجودة', 'Requested service not found')}</h2>
        <Link to="/services" className="bg-gold text-white px-6 py-2 rounded-full hover:bg-gold-light">{t('العودة للخدمات', 'Back to Services')}</Link>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        companyName: '',
        contactName: '',
        phone: '',
        email: '',
        employeesCount: '',
        notes: '',
      })
    }, 5000)
  }

  return (
    <div className="bg-slate-50 pt-32 pb-24" dir={isRtl ? 'rtl' : 'ltr'}>
      <SEO 
        titleAr={service.titleAr}
        titleEn={service.titleEn}
        descriptionAr={service.descAr}
        descriptionEn={service.descEn}
      />

      {/* Back to Services list */}
      <div className="max-w-[1200px] mx-auto px-[5vw] mb-8">
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-gold font-body text-sm font-semibold transition-colors"
        >
          {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
          {t('العودة إلى قائمة الخدمات', 'Back to all services')}
        </Link>
      </div>

      {/* Main Grid split: Content & Request Form */}
      <div className="max-w-[1200px] mx-auto px-[5vw] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left/Right Content details depending on LTR/RTL */}
        <div className="lg:col-span-7 space-y-10 text-start">
          
          {/* Header Block */}
          <div>
            <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
              <service.icon size={32} className="text-gold" />
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4.5xl text-slate-800 mb-4 leading-tight">
              {t(service.h1Ar, service.h1En)}
            </h1>
            <p className="font-body text-lg text-slate-600 leading-relaxed font-medium">
              {t(service.descAr, service.descEn)}
            </p>
          </div>

          {/* Large Aspect Image */}
          <div className="rounded-3xl overflow-hidden shadow-md aspect-video border border-slate-200">
            <img 
              src={service.image} 
              alt={t(service.h1Ar, service.h1En)} 
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Deep Description */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-2xl text-slate-800">
              {t('تفاصيل الخدمة وكيف نعمل', 'Service Details & Methodology')}
            </h2>
            <p className="font-body text-slate-600 leading-relaxed text-base">
              {t(service.detailedAr, service.detailedEn)}
            </p>
          </div>

          {/* Key Features Bullet points */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm space-y-6">
            <h3 className="font-display font-bold text-xl text-slate-800 flex items-center gap-2">
              <Shield size={22} className="text-gold" />
              {t('مواصفات ومميزات الخدمة', 'Service Specifications & Features')}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(isRtl ? service.featuresAr : service.featuresEn).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 font-body text-sm leading-relaxed">
                  <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Blocks */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-xl text-slate-800">
              {t('ما الذي تحققه لشركتكم؟', 'What It Delivers For Your Company')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(isRtl ? service.benefitsAr : service.benefitsEn).map((benefit, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm space-y-2">
                  <span className="font-display font-bold text-gold text-base block">{benefit.title}</span>
                  <p className="font-body text-xs text-slate-500 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right/Left Request Form Panel */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 shadow-md sticky top-32 text-start space-y-6">
          
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-display font-extrabold text-xl text-slate-800 flex items-center gap-2">
              <MessageSquare size={22} className="text-gold" />
              {t('طلب عرض سعر مخصص', 'Request Custom Quote')}
            </h3>
            <p className="font-body text-xs text-slate-400 mt-1">
              {t('املأ البيانات وسيقوم مستشار النقل بالرد عليك فوراً بمسار السعر والمقترح.', 'Provide details and a transit representative will reply with custom proposals.')}
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto text-green-500">
                <CheckCircle size={28} />
              </div>
              <h4 className="font-display font-bold text-lg text-green-800">{t('تم استلام طلبكم بنجاح!', 'Quote Request Received!')}</h4>
              <p className="font-body text-xs text-green-600 leading-relaxed">
                {t('شكراً لاهتمامكم بشركة أركان ترافيل. يقوم فريق التشغيل حالياً بدراسة خط السير المطلوب وسيتم الاتصال بكم خلال أقل من ساعتين لتسليم عرض السعر المناسب.', 'Thank you for choosing Arkan Travel. Our operations team is designing your route. A transit officer will call you within 2 hours with pricing.')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-body text-xs font-semibold text-slate-500 mb-1">{t('اسم الشركة / المصنع', 'Company / Factory Name')}</label>
                <input 
                  type="text" 
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder={t('مثال: شركة النيل للتصنيع', 'e.g. Nile Manufacturing Co.')}
                  className="w-full font-body text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-slate-500 mb-1">{t('اسم المسؤول للتواصل', 'Contact Person Name')}</label>
                <input 
                  type="text" 
                  name="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder={t('مثال: أ. محمد أحمد (إدارة الموارد البشرية)', 'e.g. Mr. Mohamed Ahmed (HR Manager)')}
                  className="w-full font-body text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-xs font-semibold text-slate-500 mb-1">{t('رقم الهاتف للتواصل', 'Phone Number')}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="01xxxxxxxxx"
                    className="w-full font-body text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold text-slate-500 mb-1">{t('البريد الإلكتروني للشركة', 'Corporate Email')}</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full font-body text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-slate-500 mb-1">
                  {id === 'bus-rental' ? t('العدد المتوقع للركاب والمجموعات', 'Expected Passengers / Cohorts Count') : t('العدد التقريبي للموظفين المطلوب نقلهم', 'Approximate Employees to Commute')}
                </label>
                <input 
                  type="number" 
                  name="employeesCount"
                  required
                  value={formData.employeesCount}
                  onChange={handleInputChange}
                  placeholder="e.g. 50"
                  className="w-full font-body text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-slate-500 mb-1">{t('تفاصيل خط السير المطلوبة وملاحظات إضافية', 'Route Details & Extra Notes')}</label>
                <textarea 
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder={t('مثال: نريد باصين من حلوان إلى السادس من أكتوبر لورديتين...', 'e.g. Seeking 2 buses from Helwan to 6th of October for 2 shifts...')}
                  className="w-full font-body text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-slate-50/50 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full font-body font-bold text-sm bg-gold text-white py-4 rounded-xl hover:bg-gold-light hover:scale-[1.02] active:scale-98 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {t('إرسال طلب عرض السعر', 'Submit Quote Request')}
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  )
}

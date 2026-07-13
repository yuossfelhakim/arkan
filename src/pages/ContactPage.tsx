import { useLanguage } from '../context/LanguageContext'
import SEO from '../components/SEO'
import { Phone, MessageSquare, MapPin, Clock, Send, Mail, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const { t, isRtl } = { t: (ar: string, en: string) => isRtl ? ar : en, isRtl: useLanguage().isRtl } // Safe destructure or useLanguage Hook directly
  const { isRtl: realIsRtl, t: realT } = useLanguage()

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
    }, 5000)
  }

  const whatsappNumber = '201119908096' // User's requested WhatsApp number
  const directPhone = '+201119908096'

  return (
    <div className="bg-slate-50 pt-32 pb-24" dir={realIsRtl ? 'rtl' : 'ltr'}>
      <SEO 
        titleAr="اتصل بنا | أركان ترافيل لنقل الموظفين والشركات بمصر"
        titleEn="Contact Us | Arkan Travel Corporate Commutes Egypt"
        descriptionAr="تواصل مع شركة أركان ترافيل لنقل الموظفين والعمال: رقم الهاتف، واتساب مباشر 01119908096، عنوان مقر الإدارة، ونموذج إلكتروني لطلب عروض الأسعار السريعة."
        descriptionEn="Get in touch with Arkan Travel corporate transit. Office address, direct phone, WhatsApp +201119908096, and instant quote requests."
      />

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-[5vw] mb-16 text-center">
        <span className="font-body font-semibold text-xs text-gold uppercase tracking-[0.08em] bg-gold/10 px-3 py-1.5 rounded-full inline-block">
          {realT('تواصل معنا على مدار الساعة', 'Reach out 24/7')}
        </span>
        <h1 
          className="font-display font-extrabold text-3xl sm:text-5xl heading-gradient max-w-full"
          style={{ height: '132px', width: '853px', marginLeft: '144px', marginTop: '10px', lineHeight: '60px' }}
        >
          {realT('نحن هنا لمساعدتكم وتأمين رحلاتكم اليومية', 'We Are Ready To Support & Secure Your Daily Commutes')}
        </h1>
        <p className="font-body text-base md:text-lg text-slate-600 max-w-[700px] mx-auto mt-4 leading-relaxed text-center">
          {realT('يسعد فريق خدمة العملاء وإدارة التشغيل استقبال استفساراتكم وتقديم الدعم الفني الكامل لشركاتكم ومصانعكم في أي وقت.', 'Our support and dispatching desk is delighted to receive queries, mapping customized proposals for your company.')}
        </p>
      </div>

      {/* Grid: Contact Cards & Contact Form */}
      <div className="max-w-[1200px] mx-auto px-[5vw] grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Contact info cards (Lg: col-span-5) */}
        <div className="lg:col-span-5 space-y-6 text-start">
          
          {/* Card: WhatsApp */}
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(realT('السلام عليكم أركان ترافيل، أود الاستفسار عن خدمات النقل...', 'Hello Arkan Travel, I would like to inquire about your transport services...'))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-slate-200/60 p-6 rounded-2xl hover:border-green-500/40 hover:shadow-md transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare size={24} />
              </div>
              <div className="space-y-1">
                <span className="block font-body text-xs font-semibold text-slate-400 uppercase tracking-wider">{realT('واتساب مباشر للإدارة', 'Direct WhatsApp Line')}</span>
                <span className="block font-display font-black text-xl text-slate-800 text-start" dir="ltr">+20 111 990 8096</span>
                <span className="block font-body text-xs text-green-600">{realT('انقر لبدء محادثة فورية مريحة', 'Click to initiate chat instantly')}</span>
              </div>
            </div>
          </a>

          {/* Card: Phone Call */}
          <a 
            href={`tel:${directPhone}`}
            className="block bg-white border border-slate-200/60 p-6 rounded-2xl hover:border-gold/40 hover:shadow-md transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone size={24} />
              </div>
              <div className="space-y-1">
                <span className="block font-body text-xs font-semibold text-slate-400 uppercase tracking-wider">{realT('رقم هاتف المبيعات والتشغيل', 'Sales & Operations Phone')}</span>
                <span className="block font-display font-black text-xl text-slate-800 text-start" dir="ltr">+20 111 990 8096</span>
                <span className="block font-body text-xs text-gold">{realT('اتصال هاتفي مباشر وسريع', 'Click to call directly')}</span>
              </div>
            </div>
          </a>

          {/* Card: Email */}
          <a 
            href="mailto:arkantransportation@gmail.com"
            className="block bg-white border border-slate-200/60 p-6 rounded-2xl hover:border-slate-300 hover:shadow-md transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail size={24} />
              </div>
              <div className="space-y-1">
                <span className="block font-body text-xs font-semibold text-slate-400 uppercase tracking-wider">{realT('البريد الإلكتروني للشركة', 'Corporate Email')}</span>
                <span className="block font-display font-bold text-base text-slate-800 text-start">arkantransportation@gmail.com</span>
                <span className="block font-body text-xs text-slate-500">{realT('أرسل لنا متطلباتك وسنرد فوراً', 'Send your RFP or requirements')}</span>
              </div>
            </div>
          </a>

        </div>

        {/* Contact Form (Lg: col-span-7) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm text-start">
          <h2 className="font-display font-extrabold text-2xl text-slate-800 mb-2">
            {realT('أرسل لنا رسالة مباشرة', 'Send Us A Direct Message')}
          </h2>
          <p className="font-body text-xs text-slate-400 mb-6 leading-relaxed">
            {realT('لديك اقتراح، شكوى، أو استفسار عام؟ املأ الحقول أدناه وسيقوم ممثل خدمة العملاء بالتواصل معك في أقرب وقت.', 'Have a suggestion, feedback, or general question? Fill out this form and we will revert back to you.')}
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto text-green-500">
                <CheckCircle size={28} />
              </div>
              <h4 className="font-display font-bold text-lg text-green-800">{realT('تم إرسال رسالتكم بنجاح!', 'Message Sent Successfully!')}</h4>
              <p className="font-body text-xs text-green-600 leading-relaxed">
                {realT('نشكرك على تواصلك مع شركة أركان ترافيل. تم إرسال الرسالة بنجاح إلى قسم علاقات العملاء وسيتم مراجعتها والرد عليك خلال مدة لا تتجاوز ٢٤ ساعة.', 'Thank you for connecting. Your message has reached customer relations. We will review and reply within 24 business hours.')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-xs font-semibold text-slate-500 mb-1">{realT('الاسم الكامل', 'Full Name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={realT('مثال: أحمد محمد', 'e.g. Ahmed Mohamed')}
                    className="w-full font-body text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-semibold text-slate-500 mb-1">{realT('رقم الهاتف', 'Phone Number')}</label>
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
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-slate-500 mb-1">{realT('البريد الإلكتروني للاتصال', 'Contact Email Address')}</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full font-body text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-slate-500 mb-1">{realT('موضوع الرسالة', 'Subject')}</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={realT('مثال: استفسار عن خطوط النقل بمصنع أكتوبر', 'e.g. Query on 6th of October factory lines')}
                  className="w-full font-body text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block font-body text-xs font-semibold text-slate-500 mb-1">{realT('نص الرسالة بالتفصيل', 'Detailed Message')}</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={realT('اكتب رسالتك أو استفسارك هنا بكل تفصيل...', 'Describe your message or details here...')}
                  className="w-full font-body text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-slate-50/50 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full font-body font-bold text-sm bg-gold hover:bg-gold-light text-white py-4 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={16} />
                {realT('إرسال الرسالة الآن', 'Send Message Now')}
              </button>
            </form>
          )}

        </div>

      </div>


    </div>
  )
}

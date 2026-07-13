import SEO from '../components/SEO'
import Hero from '../sections/Hero'
import WhyArkan from '../sections/WhyArkan'
import Services from '../sections/Services'
import Statistics from '../sections/Statistics'
import ServiceCoverage from '../sections/ServiceCoverage'
import Testimonials from '../sections/Testimonials'
import HowItWorks from '../sections/HowItWorks'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <SEO 
        titleAr="أركان ترافيل | شركة نقل موظفين ونقل جماعي متميز في مصر"
        titleEn="Arkan Travel | Premium Corporate & Employee Transportation in Egypt"
        descriptionAr="أركان ترافيل هي الشريك المعتمد لنقل الموظفين والعمال في مصر. أسطول باصات حديث ومريح، دقة بالغة في المواعيد، وخدمات ذكية مصممة خصيصاً للشركات والمصانع."
        descriptionEn="Arkan Travel is your trusted partner for corporate transit and employee transport in Egypt. Modern bus fleet, absolute punctuality, and tailored plans."
      />
      <Hero />
      <WhyArkan />
      <Services />
      <Statistics />
      <ServiceCoverage />
      <Testimonials />
      <HowItWorks />
      <Contact />
    </>
  )
}

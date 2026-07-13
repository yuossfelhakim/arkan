import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

interface SEOProps {
  titleAr: string
  titleEn: string
  descriptionAr: string
  descriptionEn: string
}

export default function SEO({ titleAr, titleEn, descriptionAr, descriptionEn }: SEOProps) {
  const { language } = useLanguage()

  const title = language === 'ar' ? titleAr : titleEn
  const description = language === 'ar' ? descriptionAr : descriptionEn

  useEffect(() => {
    // Set Document Title
    document.title = title

    // Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    // Set language attribute on html
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [title, description, language])

  return null
}

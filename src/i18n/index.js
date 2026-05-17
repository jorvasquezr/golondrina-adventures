import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enCommon from './en/common.json'
import enBlog from './en/blog.json'
import enTours from './en/tours.json'
import esCommon from './es/common.json'
import esBlog from './es/blog.json'
import esTours from './es/tours.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, blog: enBlog, tours: enTours },
      es: { common: esCommon, blog: esBlog, tours: esTours },
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n

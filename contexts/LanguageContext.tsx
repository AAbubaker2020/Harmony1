"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"

interface Translations {
  home: string
  about: string
  services: string
  contact: string
  learnMore: string
}

const translations: Record<Language, Translations> = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact Us",
    learnMore: "Learn More",
  },
  ar: {
    home: "الرئيسية\u00A0\u00A0\u00A0\u00A0\u00A0",
    about: "عن الشركة",
    services: "الخدمات",
    contact: "اتصل بنا",
    learnMore: "اعرف المزيد",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}


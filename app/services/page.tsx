"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import Image from "next/image"

const services = [
  {
    title: { en: "Industrial Automation", ar: "الأتمتة الصناعية" },
    description: {
      en: "Streamline your operations with our cutting-edge automation solutions.",
      ar: "قم بتبسيط عملياتك من خلال حلول الأتمتة المتطورة لدينا.",
    },
    icon: "mdi:robot-industrial",
    image: "/IndustrialAutomation.png",
  },
  {
    title: { en: "AI solutions", ar: "حلول الذكاء الاصطناعي" },
    description: {
      en: "Enhance your business with our intelligent AI-powered solutions.",

      ar:  "عزّز أعمالك مع حلولنا الذكية المعتمدة على الذكاء الاصطناعي.",
    },
    icon: "mdi:lightning-bolt",
    image: "/AIsolutions.png",
  },
  {
    title: { en: "Process Optimization", ar: "تحسين العمليات" },
    description: {
      en: "Enhance efficiency and productivity with our process optimization services.",
      ar: "تعزيز الكفاءة والإنتاجية من خلال خدمات تحسين العمليات لدينا.",
    },
    icon: "mdi:chart-bell-curve-cumulative",
    image: "/ProcessOptimization.png",
  },
  {
    title: { en: "Energy Management", ar: "إدارة الطاقة" },
    description: {
      en: "Optimize energy consumption and reduce costs with our smart energy solutions.",
      ar: "تحسين استهلاك الطاقة وتقليل التكاليف من خلال حلول الطاقة الذكية لدينا.",
    },
    icon: "mdi:lightning-bolt",
    image: "/EnergyManagement.png",
  },
  {
    title: { en: "Quality Control", ar: "مراقبة الجودة" },
    description: {
      en: "Ensure the highest standards of quality with our advanced quality control systems.",
      ar: "ضمان أعلى معايير الجودة من خلال أنظمة مراقبة الجودة المتقدمة لدينا.",
    },
    icon: "mdi:checkbox-marked-circle-outline",
    image: "/QualityControl.png",
  },
  {
    title: { en: "Sustainable Solutions", ar: "الحلول المستدامة" },
    description: {
      en: "Implement eco-friendly industrial practices with our sustainable solutions.",
      ar: "تنفيذ ممارسات صناعية صديقة للبيئة من خلال حلولنا المستدامة.",
    },
    icon: "mdi:leaf",
    image: "/SustainableSolutions.png",
  },
]

export default function Services() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen py-24 bg-harmony-soft-white">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 gradient-text text-shadow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {language === "en" ? "Our Services" : "خدماتنا"}
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="premium-card overflow-hidden bg-harmony-warm-gray"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title[language]}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <Icon icon={service.icon} className="text-5xl text-harmony-deep-bronze mb-4" />
                <h2 className="text-xl font-bold mb-2 gradient-text text-shadow">{service.title[language]}</h2>
                <p className="text-harmony-slate-gray">{service.description[language]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


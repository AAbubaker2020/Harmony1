"use client";

import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const languageContext = useLanguage();
  if (!languageContext) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  const { language, translations } = languageContext;

  const content = {
    title: language === "en" ? "Welcome to Harmony Industrial Solutions" : "مرحبًا بكم في حلول هارموني الصناعية",
    achievementsTitle: language === "en" ? "Our Key Achievements" : "إنجازاتنا الرئيسية",
    achievements: [
      { number: "10+", text: "Years of Experience" },
      { number: "50+", text: "Projects Completed" },
      { number: "6+", text: "Countries Served" },
      { number: "98%", text: "Client Satisfaction" },
    ],
    principles: ["Innovation", "Expertise", "Sustainability"],
  };

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-16 bg-harmony-warm-gray">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 font-heading gradient-text text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.principles.map((item, index) => (
              <motion.div
                key={item}
                className="premium-card p-6 bg-harmony-soft-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-2 font-heading gradient-text text-shadow">
                  {language === "en" ? item : translations[item.toLowerCase() as keyof typeof translations] || item}
                </h3>
                <p className="text-harmony-slate-gray">
                  {language === "en"
                    ? `We constantly innovate to bring you the latest industrial technologies.`
                    : `نحن نستمر في الابتكار لنقدم لك أحدث التقنيات الصناعية.`}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-harmony-soft-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 font-heading gradient-text text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content.achievementsTitle}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {content.achievements.map((achievement, index) => (
              <motion.div
                key={achievement.text}
                className="premium-card p-6 text-center bg-harmony-warm-gray"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-4xl font-bold gradient-text mb-2 font-heading text-shadow">
                  {achievement.number}
                </h3>
                <p className="text-harmony-deep-bronze">
                  {language === "en" ? achievement.text : translations[achievement.text.toLowerCase() as keyof typeof translations] || achievement.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-harmony-soft-white">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/Hamony Industrial BC 04.jpg"
            alt="Harmony Industrial"
            width={600}
            height={400}
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    </div>
  );
}

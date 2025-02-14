"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/LanguageContext"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const images = [
  "/Hamonymain.png",
  "/biomass.png",
  "/AI.png"
]

const HeroSection = () => {
  const { language } = useLanguage()
  const [currentImage, setCurrentImage] = useState(2)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer) // Cleanup interval on component unmount
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {images.map(
          (src, index) =>
            currentImage === index && (
              <motion.div
                key={src}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${src})` }}
                />
                <div className="absolute inset-0 bg-black/50" /> {/* Overlay for readability */}
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 max-w-4xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {language === "en"
            ? "Superior Quality & Results in Industrial Solutions"
            : "جودة متفوقة ونتائج في الحلول الصناعية"}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {language === "en"
            ? "Empowering industries with cutting-edge technology and sustainable solutions for a better future."
            : "تمكين الصناعات بالتكنولوجيا المتطورة والحلول المستدامة لمستقبل أفضل."}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/services"
            className="premium-button px-8 py-3 rounded-full text-white font-medium flex items-center group bg-harmony-gold hover:bg-harmony-deep-gold transition-colors"
          >
            {language === "en" ? "Our Services" : "خدماتنا"}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>


          <Link
            href="/contact"
            className="premium-button px-8 py-3 rounded-full text-white font-medium flex items-center group bg-harmony-gold hover:bg-harmony-deep-gold transition-colors"
          >
            {language === "en" ? "Contact Us" : "اتصل بنا"}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

      
        </motion.div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImage === index ? "bg-harmony-gold w-6" : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection

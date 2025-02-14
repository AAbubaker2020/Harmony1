"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { useState } from "react"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import type React from "react"

export default function Contact() {
  const { language } = useLanguage()
  const [formStatus, setFormStatus] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For this example, we'll just set a success message
    setFormStatus(language === "en" ? "Message sent successfully!" : "تم إرسال الرسالة بنجاح!")
  }

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {language === "en" ? "Contact Us" : "اتصل بنا"}
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">
              {language === "en" ? "Get in Touch" : "تواصل معنا"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  {language === "en" ? "Name" : "الاسم"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  {language === "en" ? "Email" : "البريد الإلكتروني"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  {language === "en" ? "Message" : "الرسالة"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                  rows={4}
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === "en" ? "Send Message" : "إرسال الرسالة"}
              </motion.button>
            </form>
            {formStatus && <p className="mt-4 text-green-600 font-bold">{formStatus}</p>}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">{language === "en" ? "Our Location" : "موقعنا"}</h2>
            <p className="mb-6">
              {language === "en"
                ? "123 Industrial Avenue, Tech City, 12345, Country"
                : "123 شارع الصناعة، مدينة التكنولوجيا، 12345، الدولة"}
            </p>
            <h3 className="text-xl font-bold mb-4 gradient-text">
              {language === "en" ? "Contact Information" : "معلومات الاتصال"}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Icon icon="mdi:email" className="text-2xl text-accent mr-2" />
                <p>info@harmonyindustrial.com</p>
              </div>
              <div className="flex items-center">
                <Icon icon="mdi:phone" className="text-2xl text-accent mr-2" />
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 gradient-text">{language === "en" ? "Follow Us" : "تابعنا"}</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl text-accent hover:text-accent/80 transition-colors">
                  <Icon icon="mdi:facebook" />
                </a>
                <a href="#" className="text-2xl text-accent hover:text-accent/80 transition-colors">
                  <Icon icon="mdi:twitter" />
                </a>
                <a href="#" className="text-2xl text-accent hover:text-accent/80 transition-colors">
                  <Icon icon="mdi:linkedin" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type React from "react";

export default function Contact() {
  const { language } = useLanguage();
  const [formStatus, setFormStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus(language === "en" ? "Message sent successfully! We will reach out soon." : "تم إرسال الرسالة بنجاح! سنتواصل معك قريبًا.");
        e.currentTarget.reset();
      } else {
        setFormStatus(language === "en" ? "Failed to send message. Try again." : "فشل في إرسال الرسالة. حاول مرة أخرى.");
      }
    } catch (error) {
      setFormStatus(language === "en" ? "Error sending message." : "خطأ في إرسال الرسالة.");
    }

    setLoading(false);
  };

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
                disabled={loading}
              >
                {loading ? (language === "en" ? "Sending..." : "جار الإرسال...") : language === "en" ? "Send Message" : "إرسال الرسالة"}
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
            <p className="mb-6">123 Industrial Avenue, Tech City, 12345, Country</p>
            <h3 className="text-xl font-bold mb-4 gradient-text">{language === "en" ? "Contact Information" : "معلومات الاتصال"}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Icon icon="mdi:email" className="text-2xl text-accent mr-2" />
                <p>info@harmonyprecision.com</p>
              </div>
              <div className="flex items-center">
                <Icon icon="mdi:phone" className="text-2xl text-accent mr-2" />
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

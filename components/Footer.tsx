"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const translations = {
  about: "حول",
  services: "الخدمات",
  projects: "المشاريع",
  contact: "اتصل بنا",
  "quick-links": "روابط سريعة",
  "contact-us": "اتصل بنا",
  "follow-us": "تابعنا",
  "privacy-policy": "سياسة الخصوصية",
  "terms-of-service": "شروط الخدمة",
  address: "١٢٣ شارع الصناعة، المدينة التقنية، ١٢٣٤٥",
  rights: "جميع الحقوق محفوظة.",
  description: "مزود رائد للحلول الصناعية المبتكرة، ملتزم بالتميز والممارسات المستدامة.",
} as const;

type TranslationKeys = keyof typeof translations;

const Footer = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKeys) => (language === "en" ? key.replace(/-/g, " ") : translations[key]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative pt-16 pb-8 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Animated Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/Hamony Industrial BC 04.jpg"
                  alt="Harmony Industrial Solutions Logo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-yellow-400">HARMONY</span>
                <span className="text-sm text-gray-400">INDUSTRIAL</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">{t("description")}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-400">{t("quick-links")}</h3>
            <ul className="space-y-2">
              {(["about", "services", "projects", "contact"] as TranslationKeys[]).map((link) => (
                <li key={link}>
                  <Link href={`/${link}`} className="text-sm text-gray-400 hover:text-yellow-400 flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                    {t(link)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-400">{t("contact-us")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-400">{language === "en" ? "123 Industrial Avenue, Tech City, 12345" : t("address")}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-400">info@harmonyindustrial.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-yellow-400">{t("follow-us")}</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Linkedin, link: "#" },
                { icon: Instagram, link: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="p-2 rounded-full bg-gray-700 hover:bg-yellow-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 mt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Harmony Industrial. {t("rights")}
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-yellow-400">{t("privacy-policy")}</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-yellow-400">{t("terms-of-service")}</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

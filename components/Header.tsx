"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

// Define the valid navigation items explicitly
const navItems = ["home", "about", "services", "contact"] as const;

const Header = () => {
  const { translations } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      className="fixed w-full top-0 z-50 header-footer-bg border-b border-border shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="logo-container relative w-12 h-12">
              <Image
                src="/Hamony Industrial BC 04.jpg"
                alt="Harmony Industrial Solutions Logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold gradient-text">
                HARMONY
              </span>
              <span className="text-sm text-harmony-gold">INDUSTRIAL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item === "home" ? "" : item}`}
                  className="nav-link text-sm font-medium text-harmony-soft-white hover:text-harmony-gold transition-colors duration-300"
                >
                  {translations[item as keyof typeof translations]}
                </Link>
              ))}
            </nav>
          )}

          {/* Right-side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-harmony-metallic-silver hover:bg-harmony-gold hover:text-harmony-slate-gray transition-colors duration-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Mobile Menu Toggle (Only for Small Screens) */}
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 md:hidden flex flex-col space-y-1"
              >
                {isMenuOpen ? (
                  <X size={24} className="text-harmony-soft-white" />
                ) : (
                  <div className="flex flex-col space-y-1">
                    <span className="block w-6 h-1 bg-white"></span>
                    <span className="block w-6 h-1 bg-white"></span>
                    <span className="block w-6 h-1 bg-white"></span>
                  </div>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu (Only for Small Screens) */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.nav
              className="md:hidden absolute top-full left-0 right-0 header-footer-bg border-b border-border shadow-lg"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="container py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`/${item === "home" ? "" : item}`}
                    className="block nav-link text-sm font-medium text-harmony-soft-white hover:text-harmony-gold px-4 py-2 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {translations[item as keyof typeof translations]}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

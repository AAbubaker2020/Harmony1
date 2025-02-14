"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

// Define the valid navigation items explicitly
const navItems = ["home", "about", "services", "contact"] as const;

const Header = () => {
  const { translations } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Framer Motion Animations
  const headerVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { type: "tween", duration: 0.3 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", duration: 0.3 },
    },
  };

  return (
    <motion.header
      className="fixed w-full top-0 z-50 header-footer-bg border-b border-border shadow-lg"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDarkMode ? "dark" : "light"}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "open" : "closed"}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X size={24} className="text-harmony-soft-white" />
                  ) : (
                    <Menu size={24} className="text-harmony-soft-white" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="md:hidden absolute top-full left-0 right-0 header-footer-bg border-b border-border shadow-lg"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
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

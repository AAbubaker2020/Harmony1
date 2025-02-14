import { useLanguage } from "@/contexts/LanguageContext"
import { motion, AnimatePresence } from "framer-motion"

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  const buttonVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  }

  return (
    <div className="flex space-x-2">
      <AnimatePresence mode="wait">
        {["en", "ar"].map((lang) => (
          <motion.button
            key={lang}
            onClick={() => setLanguage(lang as "en" | "ar")}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
              language === lang
                ? "harmony-button"
                : "bg-muted text-muted-foreground hover:bg-harmony-gold hover:text-harmony-white"
            }`}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
          >
            {lang.toUpperCase()}
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher


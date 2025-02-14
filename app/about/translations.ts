export const translationKeys = [
  "Our Mission",
  "Our Vision",
  "Our Values",
  "Harmony Industrial Solutions was founded",
  "Expanded operations to 20 countries",
  "Launched sustainable industrial solutions initiative",
  "Innovation",
  "Sustainability",
  "Integrity",
  "Excellence",
  "Collaboration",
] as const;

export type TranslationKey = (typeof translationKeys)[number];

export const translations: Record<"en" | "ar", Record<TranslationKey, string>> = {
  en: {
    "Our Mission": "Our Mission",
    "Our Vision": "Our Vision",
    "Our Values": "Our Values",
    "Harmony Industrial Solutions was founded": "Harmony Industrial Solutions was founded",
    "Expanded operations to 20 countries": "Expanded operations to 20 countries",
    "Launched sustainable industrial solutions initiative": "Launched sustainable industrial solutions initiative",
    "Innovation": "Innovation",
    "Sustainability": "Sustainability",
    "Integrity": "Integrity",
    "Excellence": "Excellence",
    "Collaboration": "Collaboration",
  },

  ar: {
    "Our Mission": "Our Mission",
    "Our Vision": "Our Vision",
    "Our Values": "Our Values",
    "Harmony Industrial Solutions was founded": "Harmony Industrial Solutions was founded",
    "Expanded operations to 20 countries": "Expanded operations to 20 countries",
    "Launched sustainable industrial solutions initiative": "Launched sustainable industrial solutions initiative",
    "Innovation": "Innovation",
    "Sustainability": "Sustainability",
    "Integrity": "Integrity",
    "Excellence": "Excellence",
    "Collaboration": "Collaboration",
  },

 
};
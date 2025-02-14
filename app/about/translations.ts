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
    "Our Mission": "مهمتنا",
    "Our Vision": "رؤيتنا",
    "Our Values": "قيمنا",
    "Harmony Industrial Solutions was founded": "تأسست حلول هارموني الصناعية",
    "Expanded operations to 20 countries": "توسعت العمليات إلى 20 دولة",
    "Launched sustainable industrial solutions initiative": "أطلقت مبادرة الحلول الصناعية المستدامة",
    "Innovation": "الابتكار",
    "Sustainability": "الاستدامة",
    "Integrity": "النزاهة",
    "Excellence": "التميز",
    "Collaboration": "التعاون",
  },
};
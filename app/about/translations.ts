export const translationKeys = [
  "Collaboration",
  "Excellence",
  "Expanded operations to 6 countries",
  "Harmony Industrial Solutions was founded",
  "Innovation",
  "Integrity",
  "Launched sustainable industrial solutions initiative",
  "Our Mission",
  "Our Values",
  "Our Vision",
  "Sustainability",
] as const;


export type TranslationKey = (typeof translationKeys)[number];

export const translations: Record<"en" | "ar", Record<TranslationKey, string>> = {
  en: {
    "Our Mission": "Our Missions",
    "Our Vision": "Our Visions",
    "Our Values": "Our Value",
    "Harmony Industrial Solutions was founded": "Harmony Industrial Solutions was foundeds",
    "Expanded operations to 6 countries": "Expanded operations to 6 country",
    "Launched sustainable industrial solutions initiative": "Launched sustainable industrial solutions initiative",
    "Innovation": "Innovation",
    "Sustainability": "Sustainability",
    "Integrity": "Integrity",
    "Excellence": "Excellence",
    "Collaboration": "Collaboration",
  },


  ar: {
    "Our Mission": "Our Missions",
    "Our Vision": "Our Visions",
    "Our Values": "Our Value",
    "Harmony Industrial Solutions was founded": "Harmony Industrial Solutions was foundeds",
    "Expanded operations to 6 countries": "Expanded operations to 6 country",
    "Launched sustainable industrial solutions initiative": "Launched sustainable industrial solutions initiative",
    "Innovation": "Innovation",
    "Sustainability": "Sustainability",
    "Integrity": "Integrity",
    "Excellence": "Excellence",
    "Collaboration": "Collaboration",
  },

  // ar: {
  //   "Our Mission": "مهمتنا",
  //   "Our Vision": "رؤيتنا",
  //   "Our Values": "قيمنا",
  //   "Harmony Industrial Solutions was founded": "تأسست حلول هارموني الصناعية",
  //   "Expanded operations to 6 countries": "توسعت العمليات إلى 6 دولة",
  //   "Launched sustainable industrial solutions initiative": "أطلقت مبادرة الحلول الصناعية المستدامة",
  //   "Innovation": "الابتكار",
  //   "Sustainability": "الاستدامة",
  //   "Integrity": "النزاهة",
  //   "Excellence": "التميز",
  //   "Collaboration": "التعاون",
  // },
};
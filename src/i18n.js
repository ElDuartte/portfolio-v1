import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translation_en from "./Translations/en.json";
import translation_es from "./Translations/es.json";

const resources = {
  resources: {
    en: {
      translations: translation_en,
    },
    es: {
      translations: translation_es,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources,
    detection: {
      caches: ["cookie"],
    },
  });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/locales/en/translation.json";
import translationVI from "./assets/locales/vi/translation.json";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const fallbackLng = ["vi"];
const availableLanguages = ["en", "vi"];

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

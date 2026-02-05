import i18next from "i18next";
import middleware from "i18next-http-middleware";
import en from "../locales/en.json";
import hi from "../locales/hi.json";

i18next.use(middleware.LanguageDetector).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  fallbackLng: "en",
  preload: ["en", "hi"],
});

export { i18next, middleware };

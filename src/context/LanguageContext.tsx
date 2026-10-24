import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationSchema } from "@/i18n/translations";

export type Language = "fr" | "en" | "it" | "de";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const defaultLanguage: Language = "fr";

const isSearchBot = (): boolean => {
  if (typeof navigator === "undefined") return false;
  return /bot|googlebot|crawler|spider|robot|crawling|bingbot|facebookexternalhit|twitterbot/i.test(
    navigator.userAgent || ""
  );
};

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return defaultLanguage;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang") as Language | null;
    if (langParam && ["fr", "en", "it", "de"].includes(langParam)) {
      return langParam;
    }

    // Keep French metadata for search engine crawlers on the root URL
    if (isSearchBot()) {
      return "fr";
    }

    const saved = localStorage.getItem("granulo_lang") as Language | null;
    if (saved && ["fr", "en", "it", "de"].includes(saved)) {
      return saved;
    }
    const browserLang = (navigator.language || "").slice(0, 2).toLowerCase();
    if (browserLang === "fr") return "fr";
    if (browserLang === "en") return "en";
    if (browserLang === "it") return "it";
    if (browserLang === "de") return "de";
  } catch {
    // ignore localstorage errors
  }
  return defaultLanguage;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: translations.fr,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("granulo_lang", lang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] || translations.fr,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

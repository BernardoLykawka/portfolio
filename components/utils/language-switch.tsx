"use client";

import { useEffect, useState } from "react";
import i18n from "@/services/i18nify";

export const LanguageSwitch = ({ className }: { className?: string }) => {
  const [currentLang, setCurrentLang] = useState<string>("en");

  useEffect(() => {
    const savedLang = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setCurrentLang(savedLang);
    } else {
      setCurrentLang(i18n.language);
    }

    const handleLanguageChange = (lng: string) => {
      setCurrentLang(lng);
      if (typeof window !== "undefined") {
        localStorage.setItem("lang", lng);
      }
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "pt" : "en";
    i18n.changeLanguage(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", newLang);
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`text-sm font-medium transition-colors ${className}`}
      aria-label="Toggle language"
    >
      {currentLang === "en" ? "EN" : "PT"}
    </button>
  );
};

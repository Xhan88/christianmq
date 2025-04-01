import { createContext, useState, useEffect } from "react";
import translations from "../i18n";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const getDefaultLanguage = () => {
    const browserLang = navigator.language.slice(0, 2); // Detecta el idioma del navegador
    return ["en", "es"].includes(browserLang) ? browserLang : "es"; // Usa español si el idioma no está en la lista
  };

  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || getDefaultLanguage(); // Usa localStorage o el idioma del navegador
  });

  useEffect(() => {
    localStorage.setItem("lang", lang); // Guarda el idioma seleccionado en localStorage
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

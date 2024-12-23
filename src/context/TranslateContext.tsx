import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

interface TranslateContextType {
  handleChangeLanguage: (lang: string) => void;
  EnLang: boolean;
}
const TranslateContext = createContext<TranslateContextType | undefined>(
  undefined
);
interface TranslateProviderProps {
  children: ReactNode;
}
function TranslateProvider({ children }: TranslateProviderProps) {
  const [EnLang, setEnLang] = useState(false);
  const { i18n } = useTranslation("global");

  function handleChangeLanguage(lang: string) {
    const direction = lang === "ar" ? "rtl" : "ltr";
    setEnLang(!EnLang);

    i18n.changeLanguage(lang);
    document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    document.getElementsByTagName("html")[0].setAttribute("dir", direction);

    localStorage.setItem("lang", lang);
    localStorage.setItem("dir", direction);
  }

  useEffect(() => {
    const language = localStorage.getItem("lang") || "ar";
    const direction = localStorage.getItem("dir") || "rtl";

    if (language.includes("en")) {
      setEnLang(true);
    } else {
      setEnLang(false);
    }

    i18n.changeLanguage(language);
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", direction);
  }, [i18n]);

  return (
    <TranslateContext.Provider value={{ handleChangeLanguage, EnLang }}>
      {children}
    </TranslateContext.Provider>
  );
}
function useTranslateContext() {
  const context = useContext(TranslateContext);
  if (!context) {
    throw new Error(
      "useTranslateContext must be used within a TranslateProvider"
    );
  }
  return context;
}
export { TranslateContext, TranslateProvider, useTranslateContext };

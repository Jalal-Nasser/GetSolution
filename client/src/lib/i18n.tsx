import React from "react";
import { en } from "@/locales/en";
import { ar } from "@/locales/ar";

type Locale = "en" | "ar";

type I18nContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  messages: Record<string, any>;
  t: (path: string, fallback?: string) => string;
  setLocale: (locale: Locale) => void;
  formatNumber: (value: number) => string;
  formatDate: (date: Date, options?: Intl.DateTimeFormatOptions) => string;
};

const I18nContext = React.createContext<I18nContextValue | null>(null);

function resolveMessages(locale: Locale): Record<string, any> {
  return locale === "ar" ? ar : en;
}

function getDefaultLocale(): Locale {
  const stored = localStorage.getItem("locale") as Locale | null;
  if (stored === "en" || stored === "ar") return stored;
  const nav = navigator.language || (navigator as any).userLanguage || "en";
  return nav.toLowerCase().startsWith("ar") ? "ar" : "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(() => getDefaultLocale());
  const rtlLangs = ["ar", "he", "fa", "ur"]; // broaden RTL detection
  const dir: "ltr" | "rtl" = rtlLangs.some((l) => (navigator.language || "").toLowerCase().startsWith(l)) || locale === "ar" ? "rtl" : "ltr";
  const messages = React.useMemo(() => resolveMessages(locale), [locale]);

  React.useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute("dir", dir);
    localStorage.setItem("locale", locale);
  }, [locale, dir]);

  const t = React.useCallback(
    (path: string, fallback?: string) => {
      const parts = path.split(".");
      let cur: any = messages;
      for (const p of parts) {
        if (cur && p in cur) cur = cur[p];
        else return fallback ?? path;
      }
      return typeof cur === "string" ? cur : fallback ?? path;
    },
    [messages]
  );

  const setLocale = React.useCallback((l: Locale) => {
    setLocaleState(l);
  }, []);

  const formatNumber = React.useCallback((value: number) => {
    return new Intl.NumberFormat(locale === "ar" ? "ar" : "en").format(value);
  }, [locale]);

  const formatDate = React.useCallback((date: Date, options?: Intl.DateTimeFormatOptions) => {
    return new Intl.DateTimeFormat(locale === "ar" ? "ar" : "en", options).format(date);
  }, [locale]);

  const value: I18nContextValue = {
    locale,
    dir,
    messages,
    t,
    setLocale,
    formatNumber,
    formatDate,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

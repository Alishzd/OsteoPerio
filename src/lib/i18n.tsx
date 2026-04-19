'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type LangCode = 'es' | 'ca' | 'en' | 'fr';

interface LanguageContextType {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string) => key,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

/* ─── resolve dot-notation keys ──────────────────────────────────────── */
function resolve(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const k of keys) {
    if (current && typeof current === 'object' && k in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[k];
    } else {
      return path; // fallback to key itself
    }
  }
  return typeof current === 'string' ? current : path;
}

/* ─── Provider ──────────────────────────────────────────────────────── */
interface LanguageProviderProps {
  children: ReactNode;
  translations: Record<LangCode, Record<string, unknown>>;
  defaultLang?: LangCode;
}

export function LanguageProvider({
  children,
  translations,
  defaultLang = 'en',
}: LanguageProviderProps) {
  const [lang, setLang] = useState<LangCode>(defaultLang);

  const t = useCallback(
    (key: string): string => {
      const dict = translations[lang] || translations['en'];
      return resolve(dict, key);
    },
    [lang, translations]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

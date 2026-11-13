import { es } from "./es";
import { en } from "./en";
import { de } from "./de";
import { pl } from "./pl";

export const locales = ["es", "en", "de", "pl"] as const;
export type Locale = (typeof locales)[number];
export const dictionaries = { es, en, de, pl };

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

export function translate(locale: Locale, key: string): string {
  const current = dictionaries[locale] as Record<string, string>;
  const fallback = dictionaries.es as Record<string, string>;
  return current[key] ?? fallback[key] ?? key;
}

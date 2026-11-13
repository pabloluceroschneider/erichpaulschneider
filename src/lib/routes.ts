import type { Locale } from "../i18n";

export const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function urlFor(locale: Locale, location = "") {
  const segment = location.replace(/^\/+|\/+$/g, "");
  return base + "/" + locale + "/" + (segment ? segment + "/" : "");
}

export function asset(filename: string) {
  return base + "/images/" + filename.split("/").map(encodeURIComponent).join("/");
}

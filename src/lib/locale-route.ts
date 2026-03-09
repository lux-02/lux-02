import { notFound } from "next/navigation";
import { type Locale, isLocale } from "@/lib/site-content";

export function normalizeLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }
  return value;
}

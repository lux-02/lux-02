import type { Metadata } from "next";
import { locales, siteContent } from "@/lib/site-content";
import { normalizeLocale } from "@/lib/locale-route";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const copy = siteContent[locale];

  return {
    title:
      locale === "ko"
        ? "Darkwinterlab | AI Product Engineer 포트폴리오"
        : "Darkwinterlab | AI Product Engineer Portfolio",
    description: copy.heroDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ko: "/ko",
        en: "/en",
      },
    },
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const copy = siteContent[locale];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{
        backgroundImage:
          "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
        backgroundSize: "34px 34px",
      }} />
      <SiteHeader locale={locale} copy={copy} />
      <main className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">{children}</main>
      <SiteFooter locale={locale} copy={copy} />
    </div>
  );
}

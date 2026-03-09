"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, switchLocale, type SiteCopy } from "@/lib/site-content";

type SiteHeaderProps = {
  locale: Locale;
  copy: SiteCopy;
};

function getLocaleSwitchHref(pathname: string, locale: Locale): string {
  const target = switchLocale(locale);
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.slice(1).join("/");
  return rest ? `/${target}/${rest}` : `/${target}`;
}

export function SiteHeader({ locale, copy }: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/brand/logo2.png"
            alt="Darkwinterlab"
            width={1920}
            height={423}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {copy.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-cyan-400/20 text-cyan-100"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={getLocaleSwitchHref(pathname, locale)}
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/15"
          >
            {copy.switchLabel}
          </Link>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 pb-3 md:hidden sm:px-6">
        {copy.nav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-cyan-400/20 text-cyan-100"
                  : "bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}

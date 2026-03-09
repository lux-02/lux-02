import type { Locale, SiteCopy } from "@/lib/site-content";

type SiteFooterProps = {
  locale: Locale;
  copy: SiteCopy;
};

export function SiteFooter({ locale, copy }: SiteFooterProps) {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-300">{copy.footerLine}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {copy.contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-white/15 px-3 py-1.5 text-slate-200 transition hover:border-cyan-200/60 hover:text-cyan-100"
              >
                {channel.label}
              </a>
            ))}
          </div>
        </div>
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Darkwinterlab · {locale.toUpperCase()}
        </div>
      </div>
    </footer>
  );
}

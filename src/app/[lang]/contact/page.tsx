import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { normalizeLocale } from "@/lib/locale-route";
import { siteContent } from "@/lib/site-content";

type ContactPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const copy = siteContent[locale];

  return (
    <div className="space-y-8">
      <SectionHeading title={copy.contactTitle} lead={copy.contactLead} />

      <section className="grid gap-4 md:grid-cols-3">
        {copy.contactChannels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            target={channel.href.startsWith("http") ? "_blank" : undefined}
            rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-2xl border border-white/10 bg-slate-900/55 p-5 transition hover:border-cyan-200/70"
          >
            <p className="text-sm text-slate-400">{channel.label}</p>
            <p className="mt-2 text-sm font-medium text-white">{channel.value}</p>
          </a>
        ))}
      </section>

      <ContactForm copy={copy} />
    </div>
  );
}

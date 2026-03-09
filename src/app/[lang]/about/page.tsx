import { SectionHeading } from "@/components/section-heading";
import { normalizeLocale } from "@/lib/locale-route";
import { siteContent } from "@/lib/site-content";

type AboutPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const copy = siteContent[locale];

  return (
    <div className="space-y-8">
      <SectionHeading title={copy.aboutTitle} lead={copy.aboutLead} />

      <section className="grid gap-4 md:grid-cols-3">
        {copy.aboutSections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-white/10 bg-slate-900/55 p-5">
            <h3 className="text-lg font-semibold text-white">{section.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{section.body}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-6">
        <h3 className="text-lg font-semibold text-cyan-100">Darkwinterlab</h3>
        <p className="mt-3 text-sm leading-relaxed text-cyan-50/90">{copy.missionBody}</p>
      </section>
    </div>
  );
}

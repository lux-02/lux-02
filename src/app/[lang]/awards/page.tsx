import { SectionHeading } from "@/components/section-heading";
import { normalizeLocale } from "@/lib/locale-route";
import { siteContent } from "@/lib/site-content";

type AwardsPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function AwardsPage({ params }: AwardsPageProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const copy = siteContent[locale];

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <SectionHeading title={copy.awardsTitle} lead={copy.awardsLead} />
        <div className="space-y-4">
          {copy.awards.map((award) => (
            <article
              key={`${award.year}-${award.title}`}
              className="rounded-2xl border border-white/10 bg-slate-900/55 p-5"
            >
              <p className="text-sm text-cyan-200">{award.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{award.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{award.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title={copy.trainingTitle} />
        <div className="space-y-4">
          {copy.training.map((item) => (
            <article
              key={`${item.title}-${item.period}`}
              className="rounded-2xl border border-white/10 bg-slate-900/55 p-5"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-cyan-200">{item.period}</p>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

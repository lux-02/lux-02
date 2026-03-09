import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { normalizeLocale } from "@/lib/locale-route";
import { siteContent } from "@/lib/site-content";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const copy = siteContent[locale];

  return (
    <div className="space-y-16 pb-6">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55 p-8 shadow-2xl shadow-black/40 sm:p-10">
        <div className="pointer-events-none absolute -right-14 -top-10 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-red-500/15 blur-3xl" />

        <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs tracking-wide text-cyan-100">
          {copy.heroTag}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {copy.heroTitle}
          <span className="mt-3 block text-xl font-medium text-slate-300 sm:text-2xl">
            AI Product Engineer · OH Yoonseok
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
          {copy.heroDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/projects`}
            className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            {copy.heroPrimaryCta}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="rounded-full border border-white/25 px-5 py-2.5 text-sm text-slate-100 transition hover:border-cyan-200/80 hover:text-cyan-100"
          >
            {copy.heroSecondaryCta}
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title={copy.proofTitle} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.proofs.map((proof) => (
            <article
              key={proof.label}
              className="rounded-2xl border border-white/10 bg-slate-900/55 p-5"
            >
              <p className="text-sm text-slate-400">{proof.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{proof.value}</p>
              <p className="mt-2 text-sm text-slate-300">{proof.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title={copy.missionTitle} lead={copy.missionBody} />
      </section>

      <section className="space-y-6">
        <SectionHeading title={copy.projectsTitle} lead={copy.projectsLead} />
        <div className="grid gap-5 lg:grid-cols-2">
          {copy.projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

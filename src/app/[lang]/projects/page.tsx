import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { normalizeLocale } from "@/lib/locale-route";
import { siteContent } from "@/lib/site-content";

type ProjectsPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const copy = siteContent[locale];

  return (
    <div className="space-y-8">
      <SectionHeading title={copy.projectsTitle} lead={copy.projectsLead} />
      <div className="grid gap-5 lg:grid-cols-2">
        {copy.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import type { ProjectItem } from "@/lib/site-content";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/55 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-cyan-200/50">
      <a href={project.links[0]?.href} target="_blank" rel="noreferrer">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={630}
          className="h-48 w-full object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </a>
      <div className="space-y-4 p-5">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate-300">{project.summary}</p>
        <p className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
          <span className="font-semibold">Impact:</span> {project.impact}
        </p>
        <p className="text-sm text-slate-400">{project.stack}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-slate-200 transition hover:border-cyan-200/70 hover:text-cyan-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

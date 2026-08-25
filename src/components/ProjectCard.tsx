import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy-950/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-400">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
          {project.client} · {project.year}
        </p>
        <h3 className="mt-1.5 font-heading text-lg font-semibold text-navy-950">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
      </div>
    </div>
  );
}

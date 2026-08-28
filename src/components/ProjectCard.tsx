import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-400 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/15">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-navy-950/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-400 backdrop-blur-sm">
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

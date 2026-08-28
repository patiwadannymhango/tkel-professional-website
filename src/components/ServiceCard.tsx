import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-navy-950/15"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/0 via-transparent to-gold-400/0 opacity-0 transition-opacity duration-500 group-hover:from-cyan-400/10 group-hover:to-gold-400/10 group-hover:opacity-100"
      />
      <div className="relative h-48 w-full overflow-hidden bg-navy-50">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold text-navy-950">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
          Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

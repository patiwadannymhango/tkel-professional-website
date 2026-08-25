import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-48 w-full overflow-hidden bg-navy-50">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold text-navy-950">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
          Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

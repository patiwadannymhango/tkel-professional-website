import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Brand } from "@/data/brands";

export default function BrandCard({ brand }: { brand: Brand }) {
  const shown = brand.images.slice(0, 3);
  const [featured, ...rest] = shown;
  const restCols = rest.length === 1 ? "grid-cols-1" : "grid-cols-2";
  const restAspect = rest.length === 1 ? "aspect-[16/7]" : "aspect-[4/3]";

  return (
    <div
      id={brand.slug}
      className="group flex h-full w-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-400 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-950/15"
    >
      <div className="flex h-24 items-center justify-center border-b border-navy-100 bg-white px-8">
        <div className="relative h-11 w-full">
          <Image
            src={brand.logo}
            alt={`${brand.name} logo`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-contain object-center grayscale transition-all duration-300 group-hover:grayscale-0"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-heading text-xs font-semibold uppercase tracking-wide text-gold-600">
          {brand.category}
        </p>
        <h3 className="mt-1 font-heading text-xl font-semibold text-navy-950">{brand.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{brand.blurb}</p>

        <div className="mt-5 space-y-2">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-xl border border-navy-100 bg-white">
            <Image
              src={featured.src}
              alt={`${brand.name} — ${featured.caption}`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <figcaption className="absolute bottom-2 left-2 rounded-full bg-navy-950/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
              {featured.caption}
            </figcaption>
          </figure>

          {rest.length > 0 && (
            <div className={`grid gap-2 ${restCols}`}>
              {rest.map((image) => (
                <div
                  key={image.src}
                  title={image.caption}
                  className={`relative ${restAspect} overflow-hidden rounded-lg border border-navy-100 bg-white`}
                >
                  <Image
                    src={image.src}
                    alt={`${brand.name} — ${image.caption}`}
                    fill
                    sizes="(min-width: 1024px) 15vw, (min-width: 640px) 22vw, 45vw"
                    className="object-contain p-2.5"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <Link
          href={brand.productsHref}
          className="group/link mt-auto inline-flex items-center gap-1.5 pt-5 font-heading text-sm font-semibold uppercase tracking-wide text-navy-700 transition-colors hover:text-gold-600"
        >
          View related products
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden />
        </Link>
      </div>
    </div>
  );
}

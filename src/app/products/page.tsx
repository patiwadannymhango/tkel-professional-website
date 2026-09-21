import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BrandStrip } from "@/components/BrandLogos";
import { Container } from "@/components/ui";
import Reveal from "@/components/motion/Reveal";
import { productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Products & Supply",
  description:
    "Valves, pumps, Siemens drives, power cables, transmission line equipment, energy metering, circuit breakers, rubber lining and general industrial supply — TKEL's end-to-end product catalog for Zambia's mining and industrial sector.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="End-to-End Supply Chain"
        title="Products We Supply"
        description="Genuine, authorised industrial products backed by installation, maintenance and after-sales support."
      />

      <section className="bg-white py-20">
        <Container className="space-y-20">
          {productCategories.map((category, i) => (
            <Reveal key={category.slug} direction={i % 2 === 1 ? "left" : "right"}>
              <div id={category.slug} className="grid grid-cols-1 gap-10 scroll-mt-24 lg:grid-cols-3">
                <div className={`lg:col-span-1 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h2 className="font-heading text-2xl font-semibold text-navy-950 sm:text-3xl">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{category.intro}</p>
                  {category.image && (
                    <div className="group relative mt-6 h-56 overflow-hidden rounded-2xl border border-navy-100 bg-navy-50 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-navy-950/10">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
                <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  {category.groups.map((group) => {
                    const gallery = group.gallery;
                    return (
                      <div
                        key={group.heading}
                        className="rounded-2xl border border-navy-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-950/10"
                      >
                        <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-600">
                          {group.heading}
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        {gallery && gallery.length > 0 && (
                          <div
                            className={`mt-5 grid gap-2 ${
                              gallery.length === 1
                                ? "grid-cols-1"
                                : gallery.length >= 4
                                  ? "grid-cols-2 sm:grid-cols-4"
                                  : "grid-cols-2"
                            }`}
                          >
                            {gallery.map((image) => (
                              <figure
                                key={image.src}
                                className={`group/img relative overflow-hidden rounded-lg border border-navy-100 bg-navy-50 ${
                                  gallery.length === 1 ? "aspect-[16/9]" : "aspect-[4/3]"
                                }`}
                              >
                                <Image
                                  src={image.src}
                                  alt={image.caption}
                                  fill
                                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 45vw"
                                  className="object-cover transition-transform duration-500 ease-out group-hover/img:scale-105"
                                />
                                <figcaption className="absolute bottom-1.5 left-1.5 rounded-full bg-navy-950/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                                  {image.caption}
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <BrandStrip />
      <CTASection />
    </>
  );
}

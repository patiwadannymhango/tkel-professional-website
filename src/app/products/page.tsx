import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { BrandStrip } from "@/components/BrandLogos";
import { Container } from "@/components/ui";
import { productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Products & Supply",
  description:
    "Valves, pumps, Siemens drives, rubber lining and general industrial supply — TKEL's end-to-end product catalog for Zambia's mining and industrial sector.",
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
            <div
              key={category.slug}
              id={category.slug}
              className="grid grid-cols-1 gap-10 lg:grid-cols-3"
            >
              <div className={`lg:col-span-1 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <h2 className="font-heading text-2xl font-semibold text-navy-950 sm:text-3xl">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{category.intro}</p>
                {category.image && (
                  <div className="relative mt-6 h-56 overflow-hidden rounded-xl border border-navy-100 bg-navy-50">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                {category.groups.map((group) => (
                  <div key={group.heading} className="rounded-xl border border-navy-100 p-6">
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <BrandStrip />
      <CTASection />
    </>
  );
}

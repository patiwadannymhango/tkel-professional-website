import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import ValuesGrid from "@/components/ValuesGrid";
import CTASection from "@/components/CTASection";
import { Container, SectionHeading } from "@/components/ui";
import { roleCategories } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tripple K Engineering Limited (TKEL) — a Kitwe-based mechanical, electrical and civil engineering company serving Zambia's mining and industrial sector.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TKEL"
        title="Innovation Towards The Future"
        description="Tripple K Engineering Limited is a Zambian engineering and industrial-supply company built to keep mines, plants and sites running."
      />

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="Engineering Built for Zambia's Hardest Sites" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Based in Kitwe on the Copperbelt, Tripple K Engineering Limited has grown into a
                trusted mechanical, electrical and civil engineering partner for Zambia&apos;s
                mining and industrial sector. Our teams work on some of the country&apos;s busiest
                mine sites — from concrete and structural works to plant maintenance and skilled
                manpower supply.
              </p>
              <p>
                As an authorised supplier of Grundfos and Pedrollo pumps, Siemens drive systems,
                and a full range of industrial valves, we combine hands-on engineering capability
                with a reliable industrial supply chain — so clients get equipment, installation
                and after-sales support from a single, accountable partner.
              </p>
              <p>
                We back every project with a dedicated safety, health, environment and quality
                (SHEQ) structure, because reliable engineering starts with a safe site.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl border border-navy-100 bg-navy-50 p-8">
              <h3 className="font-heading text-lg font-semibold text-navy-950">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To deliver safe, reliable and innovative engineering solutions that keep our
                clients&apos; operations running — backed by skilled people, quality materials and
                responsive service.
              </p>
            </div>
            <div className="rounded-xl border border-navy-100 bg-navy-50 p-8">
              <h3 className="font-heading text-lg font-semibold text-navy-950">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To be Zambia&apos;s most trusted engineering and industrial supply partner —
                recognised for excellence, integrity and sustainable growth across the region.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ValuesGrid />

      {/* Capabilities / Our People */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our People"
            title="Capabilities Across the Full Project Lifecycle"
            description="From engineering management to skilled trades on the ground, our teams are structured to mobilise fast and deliver safely."
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {roleCategories.map((cat) => (
              <div key={cat.heading} className="rounded-xl border border-navy-100 p-8">
                <h3 className="font-heading text-lg font-semibold text-navy-950">{cat.heading}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full bg-navy-50 px-3.5 py-1.5 text-sm font-medium text-navy-700 ring-1 ring-inset ring-navy-200"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Safety */}
      <section className="bg-navy-950 py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gold-500">
              <ShieldCheck className="h-7 w-7 text-navy-950" />
            </div>
            <h2 className="mt-5 font-heading text-3xl font-semibold text-white">
              Safety, Health, Environment & Quality
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300">
              Every TKEL project operates under a dedicated SHEQ management structure. Site
              inductions, risk assessments and continuous supervision are standard on every job —
              from a single pump repair to a full mine-site shutdown mobilisation.
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-xl">
            <Image
              src="/images/projects/project-drainage-works.jpg"
              alt="TKEL site works"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

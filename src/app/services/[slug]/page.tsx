import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { Button, Container, SectionHeading } from "@/components/ui";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import GlowBlobs from "@/components/motion/GlowBlobs";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-16 sm:py-20">
        <GlowBlobs variant="dark" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.12]" />
        <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
              Our Services
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{service.summary}</p>
            <Button href={`/quote?service=${service.slug}`} variant="primary" className="mt-8">
              Request a Quote for This Service
            </Button>
          </Reveal>
          <Reveal
            direction="left"
            delay={0.1}
            className="relative h-72 overflow-hidden rounded-2xl bg-white/5 shadow-2xl shadow-navy-950/50 sm:h-80"
          >
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-8"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <SectionHeading eyebrow="What's Included" title="Service Offerings" />
            </Reveal>
            <StaggerGroup className="mt-6 space-y-4">
              {service.bullets.map((bullet) => (
                <StaggerItem key={bullet} className="flex items-start gap-3 text-base text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  {bullet}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
          <Reveal direction="left">
            <div className="rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-8">
              <h3 className="font-heading text-lg font-semibold text-navy-950">
                Industries &amp; Applications
              </h3>
              <ul className="mt-5 space-y-3">
                {service.applications.map((app) => (
                  <li key={app} className="text-sm font-medium text-navy-700">
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-50 py-16">
        <Container>
          <Reveal>
            <SectionHeading align="center" eyebrow="Explore More" title="Other Services" />
          </Reveal>
          <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <StaggerItem key={s.slug}>
                  <a
                    href={`/services/${s.slug}`}
                    className="block rounded-lg border border-navy-100 bg-white px-4 py-3 text-center text-sm font-medium text-navy-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:text-navy-950 hover:shadow-lg hover:shadow-navy-950/10"
                  >
                    {s.shortTitle}
                  </a>
                </StaggerItem>
              ))}
          </StaggerGroup>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

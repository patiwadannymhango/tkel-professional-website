import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ValuesGrid from "@/components/ValuesGrid";
import CTASection from "@/components/CTASection";
import { BrandStrip, ClientStrip } from "@/components/BrandLogos";
import { Button, Container, SectionHeading } from "@/components/ui";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

const aboutHighlights = [
  "Mechanical, electrical & civil engineering under one roof",
  "Authorised Grundfos & Pedrollo pump supplier",
  "Large-scale labor hire for mining shutdowns — mechanical, electrical & civil engineering trades",
  "Based in Kitwe — serving mine sites across Zambia",
];

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* About snapshot */}
      <section className="relative overflow-hidden bg-white py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold-400/10 blur-[110px]"
        />
        <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right">
            <SectionHeading
              eyebrow="Who We Are"
              title="A Full-Service Engineering & Industrial Supply Partner"
              description="Tripple K Engineering Limited (TKEL) is a Kitwe-based engineering company serving Zambia's mining, industrial and construction sectors. From mechanical fabrication and civil works to pump supply and skilled manpower, we deliver end-to-end solutions built for demanding sites."
            />
            <ul className="mt-6 space-y-3">
              {aboutHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/about" variant="ghost" className="mt-8">
              Learn More About Us
            </Button>
          </Reveal>
          <Reveal direction="left" delay={0.1} className="relative h-96 overflow-hidden rounded-2xl shadow-2xl shadow-navy-950/20">
            <Image
              src="/images/about/about-steelwork.jpg"
              alt="TKEL steel erection works"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.4]" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What We Do"
              title="Our Services"
              description="Comprehensive engineering and industrial supply capability, tailored to mining and industrial clients."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <ValuesGrid />

      {/* Featured Projects */}
      <section className="relative overflow-hidden bg-navy-50 py-20">
        <Container className="relative">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our Work"
              title="Featured Projects"
              description="A snapshot of recent mechanical, civil and construction work delivered on active mine sites."
            />
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-10 text-center">
            <Button href="/projects" variant="ghost">View All Projects</Button>
          </Reveal>
        </Container>
      </section>

      <BrandStrip />
      <ClientStrip />
      <CTASection />
    </>
  );
}

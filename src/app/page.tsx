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
import { services } from "@/data/services";
import { projects } from "@/data/projects";

const aboutHighlights = [
  "Mechanical, electrical & civil engineering under one roof",
  "Authorised Grundfos & Pedrollo pump supplier",
  "Large-scale labor hire for mining shutdowns",
  "Based in Kitwe — serving mine sites across Zambia",
];

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* About snapshot */}
      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
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
          </div>
          <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/images/about/about-steelwork.jpg"
              alt="TKEL steel erection works"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-navy-50 py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="What We Do"
            title="Our Services"
            description="Comprehensive engineering and industrial supply capability, tailored to mining and industrial clients."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <ValuesGrid />

      {/* Featured Projects */}
      <section className="bg-navy-50 py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Our Work"
            title="Featured Projects"
            description="A snapshot of recent mechanical, civil and construction work delivered on active mine sites."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/projects" variant="ghost">View All Projects</Button>
          </div>
        </Container>
      </section>

      <BrandStrip />
      <ClientStrip />
      <CTASection />
    </>
  );
}

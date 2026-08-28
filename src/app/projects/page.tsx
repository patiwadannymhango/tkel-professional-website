import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { ClientStrip } from "@/components/BrandLogos";
import { Container } from "@/components/ui";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of mechanical, civil and construction projects delivered by Tripple K Engineering Limited across Zambia's mining sites and communities.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects"
        description="From tailings storage facility works to community infrastructure — a track record built on Zambia's busiest mine sites."
      />

      <ClientStrip />

      <section className="relative overflow-hidden bg-white py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.35]" />
        <Container className="relative">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

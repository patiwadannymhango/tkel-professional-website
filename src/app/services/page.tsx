import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Container } from "@/components/ui";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mechanical, electrical and civil engineering, labor hire, pump solutions, valves & piping, and Siemens drive systems — delivered across Zambia's mining and industrial sector.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        description="Full-scope engineering and industrial supply capability — from concrete foundations to plant automation."
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-40" />
        <Container className="relative">
          <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
      <CTASection />
    </>
  );
}

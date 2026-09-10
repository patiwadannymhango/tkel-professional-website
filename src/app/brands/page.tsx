import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import BrandCard from "@/components/BrandCard";
import { Container } from "@/components/ui";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Brands We Supply",
  description:
    "TKEL is an authorised supplier and service partner for Grundfos, Pedrollo, Siemens, ABB, Schneider Electric, WEG, Bosch, Cooper Bussmann and Omron — pumps, drives, switchgear, power tools and circuit protection for Zambia's mining and industrial sector.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Authorised Supplier & Service Partner"
        title="Brands We Supply"
        description="Genuine, authorised industrial products from the manufacturers our mining and process clients trust — supplied with installation, maintenance, spares and after-sales support."
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-navy-50 to-white py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-40" />
        <Container className="relative">
          <Reveal>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              From Grundfos and Pedrollo pumping systems to Siemens and ABB drives, WEG motors, Bosch
              power tools and Bussmann circuit protection, TKEL sources every item through authorised
              channels and stands behind it with local engineering support.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <StaggerItem key={brand.slug} className="flex">
                <BrandCard brand={brand} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

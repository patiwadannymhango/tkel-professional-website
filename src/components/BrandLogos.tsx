import Image from "next/image";
import { brands, clients } from "@/data/brands";
import { Container, SectionHeading } from "@/components/ui";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";
import SectionWave from "@/components/motion/SectionWave";

export function BrandStrip() {
  return (
    <section className="border-y border-navy-100 bg-white py-14">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Authorised Supplier"
            title="Trusted Brands We Supply & Service"
          />
        </Reveal>
      </Container>
      <div className="relative mt-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Marquee gapClassName="gap-14">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-16 w-36 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={64}
                loading="eager"
                className="max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export function ClientStrip() {
  return (
    <section className="relative overflow-hidden bg-navy-50 pt-12">
      <Container className="pb-12">
        <Reveal>
          <p className="text-center font-heading text-sm font-semibold uppercase tracking-[0.2em] text-navy-500">
            Trusted By
          </p>
        </Reveal>
        <div className="relative mt-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <Marquee gapClassName="gap-x-10">
            {clients.map((client) => (
              <span
                key={client}
                className="shrink-0 font-heading text-lg font-semibold tracking-wide text-navy-700 transition-colors duration-300 hover:text-gold-600 sm:text-xl"
              >
                {client}
              </span>
            ))}
          </Marquee>
        </div>
      </Container>
      <SectionWave fillClassName="fill-navy-950" />
    </section>
  );
}

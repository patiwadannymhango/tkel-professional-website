import Image from "next/image";
import { brands, clients } from "@/data/brands";
import { Container, SectionHeading } from "@/components/ui";

export function BrandStrip() {
  return (
    <section className="border-y border-navy-100 bg-white py-14">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Authorised Supplier"
          title="Trusted Brands We Supply & Service"
        />
        <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-16 items-center justify-center grayscale transition-all duration-200 hover:grayscale-0"
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
        </div>
      </Container>
    </section>
  );
}

export function ClientStrip() {
  return (
    <section className="bg-navy-50 py-12">
      <Container>
        <p className="text-center font-heading text-sm font-semibold uppercase tracking-[0.2em] text-navy-500">
          Trusted By
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((client) => (
            <span
              key={client}
              className="font-heading text-lg font-semibold tracking-wide text-navy-700 sm:text-xl"
            >
              {client}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

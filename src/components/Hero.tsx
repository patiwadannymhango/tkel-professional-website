import Image from "next/image";
import { Button, Container } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-tank-slab.jpg"
          alt="TKEL construction site in Zambia"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/60" />
      </div>

      <Container className="relative flex min-h-[600px] flex-col justify-center py-24 sm:min-h-[640px]">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
          Innovation Towards The Future
        </p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Engineering Excellence Across Zambia&apos;s Mining &amp; Industrial Sector
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
          Tripple K Engineering Limited delivers mechanical, electrical and civil engineering,
          labor hire, and industrial pump &amp; valve solutions — built on reliability, safety and
          rapid response.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/quote" variant="primary">Request a Quotation</Button>
          <Button href="/services" variant="outline" icon={false}>Our Services</Button>
        </div>
      </Container>
    </section>
  );
}

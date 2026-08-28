import { Button, Container } from "@/components/ui";
import { contact } from "@/data/company";
import Reveal from "@/components/motion/Reveal";
import GlowBlobs from "@/components/motion/GlowBlobs";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900">
      <GlowBlobs variant="dark" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.1]" />

      <Container className="relative flex flex-col items-center gap-6 py-20 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            Have a project in mind?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-xl text-base text-slate-300">
            Get a fast, no-obligation quotation from our engineering team. For urgent requests, call
            us directly at {contact.phones[0]}.
          </p>
        </Reveal>
        <Reveal delay={0.16} className="flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" variant="primary">Request a Quotation</Button>
          <Button href="/contact" variant="outline" icon={false}>Contact Us</Button>
        </Reveal>
      </Container>
    </section>
  );
}

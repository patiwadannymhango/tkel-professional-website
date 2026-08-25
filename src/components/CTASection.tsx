import { Button, Container } from "@/components/ui";
import { contact } from "@/data/company";

export default function CTASection() {
  return (
    <section className="bg-navy-900 py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="max-w-xl text-base text-slate-300">
          Get a fast, no-obligation quotation from our engineering team. For urgent requests, call
          us directly at {contact.phones[0]}.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/quote" variant="primary">Request a Quotation</Button>
          <Button href="/contact" variant="outline" icon={false}>Contact Us</Button>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { FileSearch, PhoneCall, ClipboardCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { Container } from "@/components/ui";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { getServiceBySlug } from "@/data/services";
import { contact } from "@/data/company";

export const metadata: Metadata = {
  title: "Request a Quotation",
  description:
    "Request a fast, no-obligation quotation from Tripple K Engineering Limited for mechanical, electrical, civil engineering, pump, valve or labor hire services.",
};

const steps = [
  {
    icon: FileSearch,
    title: "We review your request",
    description: "Our team looks at your scope, location and timeline to understand exactly what you need.",
  },
  {
    icon: PhoneCall,
    title: "We contact you within 24–48 hours",
    description: "A member of our team follows up by phone or email to confirm details.",
  },
  {
    icon: ClipboardCheck,
    title: "We provide a detailed quotation",
    description: "You receive a clear, itemised quote — no obligation to proceed.",
  },
];

type Props = { searchParams: Promise<{ service?: string }> };

export default async function QuotePage({ searchParams }: Props) {
  const { service: serviceSlug } = await searchParams;
  const preselected = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  return (
    <>
      <PageHero
        eyebrow="Let's Get Started"
        title="Request a Quotation"
        description="Tell us about your project and we'll get back to you with a fast, no-obligation quote."
      />

      <section className="relative overflow-hidden bg-white py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-gold-400/10 blur-[120px]"
        />
        <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-5">
          <Reveal direction="right" className="lg:col-span-3">
            <div className="rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-8 shadow-sm">
              <InquiryForm variant="quote" initialService={preselected?.title} />
            </div>
          </Reveal>

          <div className="lg:col-span-2">
            <Reveal direction="left" delay={0.05}>
              <h2 className="font-heading text-xl font-semibold text-navy-950">What Happens Next</h2>
            </Reveal>
            <StaggerGroup className="mt-6 space-y-6">
              {steps.map((step, i) => (
                <StaggerItem key={step.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 font-heading text-sm font-bold text-gold-500 shadow-md shadow-navy-950/20">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-navy-950">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal direction="left" delay={0.2} className="mt-10 rounded-2xl border border-gold-400/40 bg-gold-500/10 p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-950">
                Need it urgently?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Call or WhatsApp us directly and we&apos;ll prioritise your request.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm font-semibold text-navy-950">
                <a href={`tel:${contact.phonesRaw[0]}`} className="transition-colors hover:text-gold-600">
                  {contact.phones[0]}
                </a>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-gold-600">
                  {contact.email}
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

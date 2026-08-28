import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { Container } from "@/components/ui";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { contact } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tripple K Engineering Limited in Kitwe, Zambia. Call, WhatsApp, email, or send us a message directly.",
};

const mapSrc =
  "https://www.openstreetmap.org/export/embed.html?bbox=28.208%2C-12.828%2C28.228%2C-12.812&layer=mapnik&marker=-12.820%2C28.218";

const cardClass =
  "flex gap-4 rounded-xl border border-navy-100 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-950/10";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have a question, need a quote, or want to discuss a project? Reach us directly or send a message below."
      />

      <section className="relative overflow-hidden bg-white py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]"
        />
        <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <StaggerGroup className="space-y-5">
              <StaggerItem className={cardClass}>
                <MapPin className="h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-950">
                    Office Address
                  </h3>
                  {contact.addressLines.map((line) => (
                    <p key={line} className="text-sm text-slate-600">{line}</p>
                  ))}
                </div>
              </StaggerItem>
              <StaggerItem className={cardClass}>
                <Phone className="h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-950">
                    Phone
                  </h3>
                  {contact.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-sm text-slate-600 transition-colors hover:text-navy-950">
                      {p}
                    </a>
                  ))}
                </div>
              </StaggerItem>
              <StaggerItem className={cardClass}>
                <Mail className="h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-950">
                    Email
                  </h3>
                  <a href={`mailto:${contact.email}`} className="text-sm text-slate-600 transition-colors hover:text-navy-950">
                    {contact.email}
                  </a>
                </div>
              </StaggerItem>
              <StaggerItem className={cardClass}>
                <Clock className="h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-950">
                    Business Hours
                  </h3>
                  <p className="text-sm text-slate-600">{contact.hours}</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <a
                  href={`${contact.whatsapp}?text=${encodeURIComponent("Hello TKEL, I'd like to enquire about your services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-[#25D366] p-5 text-white shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/30"
                >
                  <MessageCircle className="h-6 w-6 shrink-0" />
                  <div>
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-wide">
                      Chat on WhatsApp
                    </h3>
                    <p className="text-sm text-white/90">Fastest way to reach us</p>
                  </div>
                </a>
              </StaggerItem>
            </StaggerGroup>

            <Reveal delay={0.15} className="mt-6 h-64 overflow-hidden rounded-xl border border-navy-100 shadow-sm">
              <iframe
                title="TKEL office location — Kitwe, Zambia"
                src={mapSrc}
                className="h-full w-full"
                loading="lazy"
              />
            </Reveal>
          </div>

          <Reveal
            direction="left"
            className="rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-8 shadow-sm lg:col-span-3"
          >
            <h2 className="font-heading text-xl font-semibold text-navy-950">Send Us a Message</h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill in the form and our team will respond as soon as possible.
            </p>
            <div className="mt-6">
              <InquiryForm variant="contact" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

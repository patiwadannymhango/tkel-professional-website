import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { Container } from "@/components/ui";
import { contact } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tripple K Engineering Limited in Kitwe, Zambia. Call, WhatsApp, email, or send us a message directly.",
};

const mapSrc =
  "https://www.openstreetmap.org/export/embed.html?bbox=28.208%2C-12.828%2C28.228%2C-12.812&layer=mapnik&marker=-12.820%2C28.218";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have a question, need a quote, or want to discuss a project? Reach us directly or send a message below."
      />

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-5">
              <div className="flex gap-4 rounded-xl border border-navy-100 p-5">
                <MapPin className="h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-950">
                    Office Address
                  </h3>
                  {contact.addressLines.map((line) => (
                    <p key={line} className="text-sm text-slate-600">{line}</p>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-navy-100 p-5">
                <Phone className="h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-950">
                    Phone
                  </h3>
                  {contact.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-sm text-slate-600 hover:text-navy-950">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-navy-100 p-5">
                <Mail className="h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-950">
                    Email
                  </h3>
                  <a href={`mailto:${contact.email}`} className="text-sm text-slate-600 hover:text-navy-950">
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-navy-100 p-5">
                <Clock className="h-6 w-6 shrink-0 text-gold-500" />
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-navy-950">
                    Business Hours
                  </h3>
                  <p className="text-sm text-slate-600">{contact.hours}</p>
                </div>
              </div>
              <a
                href={`${contact.whatsapp}?text=${encodeURIComponent("Hello TKEL, I'd like to enquire about your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-[#25D366] p-5 text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-6 w-6 shrink-0" />
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-sm text-white/90">Fastest way to reach us</p>
                </div>
              </a>
            </div>

            <div className="mt-6 h-64 overflow-hidden rounded-xl border border-navy-100">
              <iframe
                title="TKEL office location — Kitwe, Zambia"
                src={mapSrc}
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-xl border border-navy-100 bg-navy-50 p-8 lg:col-span-3">
            <h2 className="font-heading text-xl font-semibold text-navy-950">Send Us a Message</h2>
            <p className="mt-2 text-sm text-slate-600">
              Fill in the form and our team will respond as soon as possible.
            </p>
            <div className="mt-6">
              <InquiryForm variant="contact" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

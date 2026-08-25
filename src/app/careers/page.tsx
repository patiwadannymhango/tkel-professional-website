import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { Container, SectionHeading } from "@/components/ui";
import { roleCategories, contact } from "@/data/company";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Tripple K Engineering Limited's workforce. We supply skilled and unskilled tradespeople for mining shutdowns, civil works and industrial projects across Zambia.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Our Team"
        title="Careers at TKEL"
        description="We're one of Zambia's leading suppliers of skilled and unskilled manpower to the mining and construction sector. If you have a trade, we want to hear from you."
      />

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Trades We Hire"
              title="Openings Across Engineering & Skilled Trades"
              description="We regularly mobilise teams for shutdowns, turnarounds and long-term site works. Roles are filled on a project and demand basis — apply below and we'll reach out when there's a match."
            />
            <div className="mt-8 space-y-6">
              {roleCategories.map((cat) => (
                <div key={cat.heading}>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-600">
                    {cat.heading}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cat.roles.map((role) => (
                      <span
                        key={role}
                        className="rounded-full bg-navy-50 px-3.5 py-1.5 text-sm font-medium text-navy-700 ring-1 ring-inset ring-navy-200"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-600">
              Prefer email? Send your CV directly to{" "}
              <a href={`mailto:${contact.email}`} className="font-semibold text-gold-600 hover:underline">
                {contact.email}
              </a>
              .
            </p>
          </div>

          <div className="rounded-xl border border-navy-100 bg-navy-50 p-8">
            <h2 className="font-heading text-xl font-semibold text-navy-950">Apply Now</h2>
            <p className="mt-2 text-sm text-slate-600">
              Tell us about your trade and experience. We&apos;ll keep your details on file for
              upcoming projects.
            </p>
            <div className="mt-6">
              <InquiryForm variant="careers" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

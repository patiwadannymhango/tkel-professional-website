import { ShieldCheck, Users, Gem, Zap, type LucideIcon } from "lucide-react";
import { values } from "@/data/company";
import { Container, SectionHeading } from "@/components/ui";

const icons: LucideIcon[] = [ShieldCheck, Users, Gem, Zap];

export default function ValuesGrid() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why Choose TKEL"
          title="Built On Values That Deliver"
          description="What sets us apart isn't just what we do — it's how we do it."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={value.title} className="rounded-xl border border-navy-100 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950">
                  <Icon className="h-6 w-6 text-gold-500" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-navy-950">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import { ShieldCheck, Users, Gem, Zap, type LucideIcon } from "lucide-react";
import { values } from "@/data/company";
import { Container, SectionHeading } from "@/components/ui";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import Reveal from "@/components/motion/Reveal";

const icons: LucideIcon[] = [ShieldCheck, Users, Gem, Zap];

export default function ValuesGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-50 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why Choose TKEL"
            title="Built On Values That Deliver"
            description="What sets us apart isn't just what we do — it's how we do it."
          />
        </Reveal>
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem
                key={value.title}
                className="group rounded-2xl border border-navy-100 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl hover:shadow-navy-950/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 shadow-md shadow-navy-950/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-gold-500/30">
                  <Icon className="h-6 w-6 text-gold-500" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-navy-950">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}

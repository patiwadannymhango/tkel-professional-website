import { stats } from "@/data/company";
import { Container } from "@/components/ui";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import SectionWave from "@/components/motion/SectionWave";

export default function StatsBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-navy-950 to-navy-900 pt-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.1]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-navy-600/20 blur-[110px]"
      />

      <Container className="relative pb-16 sm:pb-20">
        <StaggerGroup className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-gold-500 sm:text-4xl">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-300 sm:text-sm">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>

      <SectionWave fillClassName="fill-white" />
    </div>
  );
}

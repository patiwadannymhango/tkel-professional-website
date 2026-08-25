import { stats } from "@/data/company";
import { Container } from "@/components/ui";

export default function StatsBar() {
  return (
    <div className="bg-navy-950 py-10">
      <Container className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-3xl font-bold text-gold-500 sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-300 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </Container>
    </div>
  );
}

import { Container } from "@/components/ui";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <Container>
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{description}</p>
        )}
      </Container>
    </section>
  );
}

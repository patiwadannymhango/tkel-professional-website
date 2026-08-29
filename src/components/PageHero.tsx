"use client";

import { m } from "motion/react";
import { Container } from "@/components/ui";
import GlowBlobs from "@/components/motion/GlowBlobs";

const ease = [0.16, 1, 0.3, 1] as const;

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
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-16 sm:py-24">
      <GlowBlobs variant="dark" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-[0.12]" />

      <Container className="relative">
        <m.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-gold-400"
        >
          {eyebrow}
        </m.p>
        <m.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="mt-3 max-w-3xl font-heading text-4xl font-bold text-white sm:text-5xl"
        >
          {title}
        </m.h1>
        {description && (
          <m.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            {description}
          </m.p>
        )}
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button, Container } from "@/components/ui";
import GlowBlobs from "@/components/motion/GlowBlobs";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-tank-slab.jpg"
          alt="TKEL construction site in Zambia"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/90 to-navy-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/60" />
      </div>

      <GlowBlobs variant="dark" />
      <div aria-hidden="true" className="absolute inset-0 bg-dot-pattern opacity-[0.12]" />

      <Container className="relative flex min-h-[620px] flex-col justify-center py-28 sm:min-h-[660px]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-heading text-sm font-semibold uppercase tracking-[0.25em] text-gold-400"
        >
          Innovation Towards The Future
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          Engineering Excellence Across{" "}
          <span className="text-gradient-gold gradient-pan-bg">Zambia&apos;s</span> Mining &amp;
          Industrial Sector
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200"
        >
          Tripple K Engineering Limited delivers mechanical, electrical and civil engineering,
          labor hire, and industrial pump &amp; valve solutions — built on reliability, safety and
          rapid response.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/quote" variant="primary">Request a Quotation</Button>
          <Button href="/services" variant="outline" icon={false}>Our Services</Button>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-14 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden="true"
      >
        <span className="h-9 w-5 rounded-full border border-white/30 p-1">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block h-1.5 w-1.5 rounded-full bg-gold-400"
          />
        </span>
      </motion.div>
    </section>
  );
}

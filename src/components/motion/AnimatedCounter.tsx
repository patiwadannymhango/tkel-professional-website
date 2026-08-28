"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

/** Extracts the leading integer from a stat string like "100+" or "24/7" so it can be
 *  counted up, while keeping the original string as prefix/suffix around it. */
function parseValue(raw: string) {
  const match = raw.match(/\d+/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  const number = parseInt(match[0], 10);
  const prefix = raw.slice(0, match.index);
  const suffix = raw.slice((match.index ?? 0) + match[0].length);
  return { prefix, number, suffix };
}

export default function AnimatedCounter({ value }: { value: string }) {
  const { prefix, number, suffix } = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(number);
  }, [inView, number, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

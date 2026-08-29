"use client";

import { LazyMotion, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/** Loads only the `domAnimation` feature set (animate/hover/tap/exit — everything this
 *  site actually uses) instead of the full motion bundle, and lets every `m.*` element
 *  under it share one lazily-loaded chunk instead of each bundling its own copy. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

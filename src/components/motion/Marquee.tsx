import type { ReactNode } from "react";

/** Seamless, pure-CSS infinite marquee. Renders `children` twice back-to-back and
 *  scrolls the combined track left by exactly half its width via `.marquee-track`
 *  (see globals.css) — no JS/layout measuring required, pauses on hover. */
export default function Marquee({
  children,
  className = "",
  gapClassName = "gap-16",
}: {
  children: ReactNode;
  className?: string;
  gapClassName?: string;
}) {
  return (
    <div className={`marquee-row overflow-hidden ${className}`}>
      <div className={`marquee-track flex w-max items-center ${gapClassName}`}>
        <div className={`flex shrink-0 items-center ${gapClassName}`}>{children}</div>
        <div className={`flex shrink-0 items-center ${gapClassName}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

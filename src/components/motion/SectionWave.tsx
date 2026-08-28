/** A fluid SVG divider dropped between two sections so color transitions aren't a hard
 *  rectangular edge. `fillClassName` should be a `fill-*` Tailwind/theme class matching
 *  the section that comes *after* the wave (it overlaps the bottom of the section before). */
export default function SectionWave({
  fillClassName = "fill-white",
  flip = false,
  className = "",
}: {
  fillClassName?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative -mb-px h-[46px] w-full overflow-hidden sm:h-[72px] ${className}`}
    >
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className={`h-full w-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,32 C240,90 480,90 720,50 C960,10 1200,10 1440,48 L1440,96 L0,96 Z"
          className={fillClassName}
        />
      </svg>
    </div>
  );
}

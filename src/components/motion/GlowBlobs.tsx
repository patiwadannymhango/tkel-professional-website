/** Soft, slow-floating blurred gradient orbs used behind hero/CTA content for a
 *  "fluid" feel. Pure CSS animation (see `float`/`float-slow` in globals.css) — no JS. */
export default function GlowBlobs({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const cyan = variant === "dark" ? "bg-cyan-500/25" : "bg-cyan-400/20";
  const gold = variant === "dark" ? "bg-gold-500/20" : "bg-gold-400/25";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`animate-float absolute -left-24 -top-24 h-[26rem] w-[26rem] rounded-full ${cyan} blur-[110px]`}
      />
      <div
        className={`animate-float-slow absolute -bottom-32 right-[-6rem] h-[30rem] w-[30rem] rounded-full ${gold} blur-[120px]`}
      />
      <div
        className={`animate-float-slow absolute right-1/3 top-1/4 h-64 w-64 rounded-full ${cyan} opacity-60 blur-[90px]`}
      />
    </div>
  );
}

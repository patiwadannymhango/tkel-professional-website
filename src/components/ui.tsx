import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-slate-200" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  icon?: boolean;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95";
  const variants: Record<string, string> = {
    primary:
      "bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/25 hover:bg-gold-400 hover:shadow-xl hover:shadow-gold-500/40",
    secondary: "bg-navy-800 text-white shadow-md shadow-navy-950/20 hover:bg-navy-700",
    outline: "border-2 border-white/70 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-navy-950",
    ghost: "border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="shimmer-bg pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
      <span className="relative">{children}</span>
      {icon && (
        <ArrowRight
          className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </Link>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-700 ring-1 ring-inset ring-navy-200">
      {children}
    </span>
  );
}

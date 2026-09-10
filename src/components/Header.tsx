"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { services } from "@/data/services";
import { contact } from "@/data/company";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation. Adjusting state directly during
  // render (rather than in an effect) avoids an extra render/commit cycle.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-gradient-to-r from-navy-700 via-navy-600 to-navy-700 transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-navy-950/30" : ""
      }`}
    >
      <div className="border-b border-white/10 bg-navy-950/25">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-end gap-6 px-6 py-1.5 text-xs text-white/80 lg:px-8">
          <a href={`tel:${contact.phonesRaw[0]}`} className="flex items-center gap-1.5 transition-colors hover:text-gold-300">
            <Phone className="h-3 w-3" /> {contact.phones[0]}
          </a>
          <a href={`mailto:${contact.email}`} className="hidden transition-colors hover:text-gold-300 sm:inline">
            {contact.email}
          </a>
        </div>
      </div>
      <nav
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-8 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.03]">
          <Image
            src="/images/logo.png"
            alt="Tripple K Engineering Limited"
            width={631}
            height={305}
            priority
            className="h-11 w-auto drop-shadow-sm sm:h-14"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <m.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-full w-72 origin-top rounded-xl border border-white/10 bg-navy-900/98 p-2 shadow-2xl shadow-navy-950/50 backdrop-blur-md"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="block rounded-lg px-3 py-2 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-gold-300"
                        >
                          {s.title}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="mt-1 block rounded-lg px-3 py-2 text-sm font-semibold text-gold-400 transition-colors hover:bg-white/10"
                      >
                        View all services →
                      </Link>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/quote"
            className="group relative inline-flex items-center overflow-hidden rounded-full bg-gold-500 px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide text-navy-950 shadow-lg shadow-navy-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl active:translate-y-0"
          >
            <span
              aria-hidden="true"
              className="shimmer-bg pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="relative">Request a Quote</span>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full p-1.5 text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-900 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-white/90 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-1 border-t border-white/10 pt-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-lg px-3 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white/90"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
              <Link
                href="/quote"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-gold-500 px-5 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-navy-950"
              >
                Request a Quote
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}

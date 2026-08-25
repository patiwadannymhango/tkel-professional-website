"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { services } from "@/data/services";
import { contact } from "@/data/company";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation. Adjusting state directly during
  // render (rather than in an effect) avoids an extra render/commit cycle.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="bg-navy-950 text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-end gap-6 px-6 py-1.5 text-xs lg:px-8">
          <a href={`tel:${contact.phonesRaw[0]}`} className="flex items-center gap-1.5 hover:text-gold-400">
            <Phone className="h-3 w-3" /> {contact.phones[0]}
          </a>
          <a href={`mailto:${contact.email}`} className="hidden hover:text-gold-400 sm:inline">
            {contact.email}
          </a>
        </div>
      </div>
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Tripple K Engineering Limited"
            width={643}
            height={258}
            priority
            className="h-12 w-auto sm:h-14"
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
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-navy-800 hover:bg-navy-50 hover:text-navy-950"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-72 rounded-lg border border-navy-100 bg-white p-2 shadow-xl">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block rounded-md px-3 py-2 text-sm text-navy-800 hover:bg-navy-50 hover:text-navy-950"
                      >
                        {s.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-1 block rounded-md px-3 py-2 text-sm font-semibold text-gold-600 hover:bg-navy-50"
                    >
                      View all services →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-navy-800 hover:bg-navy-50 hover:text-navy-950"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/quote"
            className="inline-flex items-center rounded-md bg-gold-500 px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide text-navy-950 hover:bg-gold-400"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-7 w-7 text-navy-950" /> : <Menu className="h-7 w-7 text-navy-950" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-navy-100 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-base font-medium text-navy-800 hover:bg-navy-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-1 border-t border-navy-100 pt-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-md px-3 py-2 text-sm text-slate-600 hover:bg-navy-50"
                >
                  {s.title}
                </Link>
              ))}
            </div>
            <Link
              href="/quote"
              className="mt-3 inline-flex items-center justify-center rounded-md bg-gold-500 px-5 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-navy-950"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

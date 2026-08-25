import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { services } from "@/data/services";
import { contact } from "@/data/company";
import { Container } from "@/components/ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/logo.png"
            alt="Tripple K Engineering Limited"
            width={643}
            height={258}
            className="h-12 w-auto rounded-md"
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Innovation Towards The Future. Mechanical, electrical and civil engineering, labor
            hire, pump and valve solutions for Zambia&apos;s mining and industrial sector.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-gold-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-gold-400">Services</Link></li>
            <li><Link href="/products" className="hover:text-gold-400">Products</Link></li>
            <li><Link href="/projects" className="hover:text-gold-400">Projects</Link></li>
            <li><Link href="/careers" className="hover:text-gold-400">Careers</Link></li>
            <li><Link href="/quote" className="hover:text-gold-400">Request a Quotation</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Our Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-gold-400">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span>
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span>
                {contact.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-gold-400">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <a href={`mailto:${contact.email}`} className="hover:text-gold-400">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
              <span>{contact.hours}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {year} Tripple K Engineering Limited. All rights reserved.</p>
          <p>Kitwe, Zambia</p>
        </Container>
      </div>
    </footer>
  );
}

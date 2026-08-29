import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MotionProvider from "@/components/motion/MotionProvider";
import { contact } from "@/data/company";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tripplekeng.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tripple K Engineering Limited | Mechanical, Electrical & Civil Engineering — Zambia",
    template: "%s | Tripple K Engineering Limited",
  },
  description:
    "Tripple K Engineering Limited (TKEL) delivers mechanical, electrical and civil engineering, labor hire, pump and valve solutions to Zambia's mining and industrial sector. Based in Kitwe. Request a quotation today.",
  keywords: [
    "Tripple K Engineering",
    "TKEL",
    "engineering Zambia",
    "Kitwe engineering company",
    "mining labor hire Zambia",
    "Grundfos pumps Zambia",
    "industrial valves Zambia",
    "civil engineering Kitwe",
  ],
  openGraph: {
    title: "Tripple K Engineering Limited",
    description:
      "Mechanical, electrical and civil engineering, labor hire, pump and valve solutions for Zambia's mining and industrial sector.",
    url: siteUrl,
    siteName: "Tripple K Engineering Limited",
    locale: "en_ZM",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tripple K Engineering Limited",
    image: `${siteUrl}/images/logo.png`,
    url: siteUrl,
    telephone: contact.phonesRaw[0],
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bowmaker House, 4th Floor, Suite 440, City Square",
      addressLocality: "Kitwe",
      addressCountry: "ZM",
    },
    areaServed: "Zambia",
    sameAs: [],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

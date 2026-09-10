import type { MetadataRoute } from "next";
import { services } from "@/data/services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tripplekeng.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/products",
    "/brands",
    "/projects",
    "/careers",
    "/contact",
    "/quote",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}

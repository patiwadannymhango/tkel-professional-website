export type BrandImage = {
  src: string;
  caption: string;
};

export type Brand = {
  slug: string;
  name: string;
  /** Logo mark, shown on a light background. */
  logo: string;
  /** Short category used as the card eyebrow. */
  category: string;
  /** One or two sentences on what TKEL supplies and services from this brand. */
  blurb: string;
  /** Link to the most relevant section of the products catalog. */
  productsHref: string;
  /** Representative product imagery. The first image is featured. */
  images: BrandImage[];
};

export const brands: Brand[] = [
  {
    slug: "grundfos",
    name: "Grundfos",
    logo: "/images/brands/brand-grundfos.png",
    category: "Pumps & Water Systems",
    blurb:
      "Authorised supply, installation and commissioning of Grundfos pumps — booster sets, circulators, submersible and multistage units — backed by genuine spares and on-site maintenance.",
    productsHref: "/products#pumps",
    images: [
      { src: "/images/brands/grundfos/grundfos-pump-range.webp", caption: "Grundfos pump range" },
    ],
  },
  {
    slug: "pedrollo",
    name: "Pedrollo",
    logo: "/images/brands/brand-pedrollo.jpg",
    category: "Pumps & Water Systems",
    blurb:
      "Pedrollo borehole, submersible, centrifugal and self-priming pumps for water supply, irrigation and dewatering — including solar-pump systems and full after-sales support.",
    productsHref: "/products#pumps",
    images: [
      { src: "/images/brands/pedrollo/pedrollo-product-range.webp", caption: "Pedrollo pump range" },
      { src: "/images/brands/pedrollo/pedrollo-electric-pumps.webp", caption: "Electric surface pumps" },
    ],
  },
  {
    slug: "siemens",
    name: "Siemens",
    logo: "/images/brands/brand-siemens.png",
    category: "Drives & Automation",
    blurb:
      "Siemens SINAMICS drives, SIMATIC PLCs, LOGO! controllers and SIRIUS switchgear — supplied, installed and commissioned for efficient motor control and plant automation.",
    productsHref: "/products#siemens-drives",
    images: [
      { src: "/images/brands/siemens/siemens-automation-range.webp", caption: "Siemens drives & automation range" },
      { src: "/images/brands/siemens/siemens-s7-1200-plc.webp", caption: "SIMATIC S7-1200 PLC" },
      { src: "/images/brands/siemens/siemens-sirius-contactor.webp", caption: "SIRIUS 3RT2 power contactor" },
    ],
  },
  {
    slug: "warman",
    name: "Warman",
    logo: "/images/brands/brand-warman.jpg",
    category: "Slurry Pumps & Wear Parts",
    blurb:
      "Heavy-duty slurry pumps and interchangeable wear parts to suit Warman® equipment — impellers, throatbushes, liners and complete wet ends for mill discharge, tailings and froth duty.",
    productsHref: "/products#pumps",
    images: [
      { src: "/images/products/pump-warman-product.jpg", caption: "Heavy-duty slurry pump" },
      { src: "/images/products/pump-warman-cutaway.jpg", caption: "Slurry pump cutaway" },
      { src: "/images/products/pump-warman-spares-diagram.jpg", caption: "Wear parts & spares" },
    ],
  },
  {
    slug: "abb",
    name: "ABB",
    logo: "/images/brands/brand-abb.png",
    category: "Power & Motor Control",
    blurb:
      "ABB circuit breakers, contactors, motor starters and ACS drives for power distribution and motor control across mining and process plants.",
    productsHref: "/products#power-supply",
    images: [
      { src: "/images/brands/abb/abb-product-range.webp", caption: "ABB control & automation range" },
      { src: "/images/brands/abb/abb-s200m-circuit-breaker.webp", caption: "S200M miniature circuit breaker" },
    ],
  },
  {
    slug: "schneider-electric",
    name: "Schneider Electric",
    logo: "/images/brands/brand-schneider.png",
    category: "Power & Automation",
    blurb:
      "Schneider Electric switchgear, contactors, variable speed drives, HMIs and protection devices for industrial power and automation systems.",
    productsHref: "/products#power-supply",
    images: [
      { src: "/images/brands/schneider-electric/schneider-automation-range.webp", caption: "Schneider Electric automation range" },
    ],
  },
  {
    slug: "bosch",
    name: "Bosch",
    logo: "/images/brands/brand-bosch.png",
    category: "Power Tools",
    blurb:
      "Genuine Bosch Professional power tools and accessories — demolition hammers, angle grinders, drivers and measuring tools — for workshop and site teams.",
    productsHref: "/products#general-industrial-supply",
    images: [
      { src: "/images/brands/bosch/bosch-gsh-5-ce-demolition-hammer.webp", caption: "GSH 5 CE demolition hammer" },
      { src: "/images/brands/bosch/bosch-gws-18v-angle-grinder.webp", caption: "GWS 18V-10 cordless angle grinder" },
      { src: "/images/brands/bosch/bosch-glm-40-laser-measure.webp", caption: "GLM 40 laser measure" },
    ],
  },
  {
    slug: "weg",
    name: "WEG",
    logo: "/images/brands/brand-weg.png",
    category: "Motors & Drives",
    blurb:
      "WEG electric motors, gear units, soft starters and variable speed drives for pumps, conveyors and general industrial drive systems.",
    productsHref: "/products#general-industrial-supply",
    images: [
      { src: "/images/brands/weg/weg-automation-range.webp", caption: "WEG motors, drives & controls" },
      { src: "/images/brands/weg/weg-motors-and-drives.webp", caption: "Electric motors & gear units" },
    ],
  },
  {
    slug: "cooper-bussmann",
    name: "Cooper Bussmann",
    logo: "/images/brands/brand-cooper-bussmann.png",
    category: "Circuit Protection",
    blurb:
      "Bussmann series fuses and fuse gear from Eaton — NH/HRC, Low-Peak, IEC and specialty fuses for circuit and equipment protection.",
    productsHref: "/products#power-supply",
    images: [
      { src: "/images/brands/cooper-bussmann/bussmann-nh-hrc-fuses.webp", caption: "NH / HRC fuse links" },
      { src: "/images/brands/cooper-bussmann/bussmann-low-peak-fuses.webp", caption: "Low-Peak time-delay fuses" },
      { src: "/images/brands/cooper-bussmann/bussmann-iec-fuses.webp", caption: "IEC cylindrical & bottle fuses" },
      { src: "/images/brands/cooper-bussmann/bussmann-ev-fuses.webp", caption: "Fast-acting DC fuses" },
    ],
  },
  {
    slug: "omron",
    name: "Omron",
    logo: "/images/brands/brand-omron.png",
    category: "Automation & Control",
    blurb:
      "Omron automation and control components — PLCs, HMIs, sensors, relays, safety devices and power supplies for machine builders and plant upgrades.",
    productsHref: "/products#general-industrial-supply",
    images: [
      { src: "/images/brands/omron/omron-automation-range.webp", caption: "Omron automation & control range" },
    ],
  },
];

export function getBrandBySlug(slug: string) {
  return brands.find((brand) => brand.slug === slug);
}

export const clients: string[] = [
  "FQM",
  "Lubambe Copper Mine",
  "Mopani Copper Mines",
  "MRL",
  "Dangote",
  "KCM",
  "Chilanga Cement",
  "ZESCO",
];

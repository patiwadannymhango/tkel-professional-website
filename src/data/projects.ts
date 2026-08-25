export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "tsf-booster-slab",
    title: "TSF Stage 4 Booster Slab & Tank Base",
    client: "FQML Trident, Kalumbila",
    year: "2025",
    category: "Civil Engineering",
    description:
      "Reinforced concrete base and booster slab construction for the Tailings Storage Facility (TSF) Stage 4, including full steel-fixing and concrete works.",
    image: "/images/projects/project-tank-base.jpg",
  },
  {
    slug: "in-pit-drainage-culverts",
    title: "In-Pit Box Culverts & Lined Drainage",
    client: "FQML Trident, Kalumbila",
    year: "2025",
    category: "Civil Engineering",
    description:
      "Construction of in-pit box culverts and lined drainage channels to manage stormwater and process water across active mining areas.",
    image: "/images/projects/project-drainage-works.jpg",
  },
  {
    slug: "mining-workshop-fabrication",
    title: "Mining Workshop Fabrication & Steel Erection",
    client: "FQML Trident, Kalumbila",
    year: "2025",
    category: "Mechanical Engineering",
    description:
      "Fabrication and installation of structural steel sheds for the Enterprise OSD mechanical workshop, including roofing and steelwork.",
    image: "/images/projects/project-steel-erection.jpg",
  },
  {
    slug: "stockpile-concrete-slab",
    title: "Stockpile Concrete Slab",
    client: "FQML Trident, Kalumbila",
    year: "2025",
    category: "Civil Engineering",
    description:
      "Steel-fixing, concrete pouring and vibration-compaction for large-format stockpile concrete slabs.",
    image: "/images/projects/project-concrete-pour.jpg",
  },
  {
    slug: "coffee-cup-tank-base",
    title: "Coffee Cup Tank Base Construction",
    client: "FQML Trident, Kalumbila",
    year: "2024",
    category: "Civil Engineering",
    description:
      "Steel-fixing and concrete base construction for a coffee-cup style process tank.",
    image: "/images/projects/project-tank-scaffold.jpg",
  },
  {
    slug: "blasting-yard-office",
    title: "Blasting Yard Office",
    client: "FQML Trident, Kalumbila",
    year: "2023",
    category: "Civil Engineering",
    description:
      "Construction and commissioning of a new blasting yard office for site operations.",
    image: "/images/projects/project-tank-base.jpg",
  },
  {
    slug: "enterprise-lapa",
    title: "LAPA Project — Enterprise Nickel Mine",
    client: "FQML Trident, Enterprise Nickel Mine",
    year: "2023",
    category: "Civil Engineering",
    description:
      "Construction of the Enterprise LAPA structure, commissioned for site staff use.",
    image: "/images/projects/project-drainage-works.jpg",
  },
  {
    slug: "community-institutional-works",
    title: "Community & Institutional Civil Works",
    client: "Kitwe, Solwezi, Mporokoso & Lusaka",
    year: "2015 – 2022",
    category: "Civil Engineering",
    description:
      "Construction of classrooms, a health centre and staff housing, a hospital isolation block, an industrial development centre and residential housing units across Zambia.",
    image: "/images/projects/project-steel-erection.jpg",
  },
];

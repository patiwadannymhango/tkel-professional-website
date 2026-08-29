export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  heroImage: string;
  bullets: string[];
  applications: string[];
};

export const services: Service[] = [
  {
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    shortTitle: "Mechanical",
    summary:
      "Installation, fabrication and maintenance of industrial mechanical equipment for mining, processing and manufacturing plants.",
    heroImage: "/images/products/pump-heavy-duty-slurry.jpg",
    bullets: [
      "Industrial equipment installation & commissioning",
      "Plant and workshop fabrication (structural steel, sheds, platforms)",
      "Preventive and breakdown maintenance",
      "Heavy-duty mechanical fitting and boilermaking",
      "Shutdown and turnaround mechanical support",
      "Coded welding and pipe fabrication",
    ],
    applications: [
      "Mining & mineral processing plants",
      "Process plants",
      "Manufacturing facilities",
      "Site workshops",
    ],
  },
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    shortTitle: "Electrical",
    summary:
      "Power systems, switchgear, instrumentation and standby power solutions engineered for demanding industrial environments.",
    heroImage: "/images/products/valve-control-installed.jpg",
    bullets: [
      "Power distribution & switchgear installation",
      "Standby power and generator systems",
      "Instrumentation and control wiring",
      "Motor control centres & panel building",
      "Electrical maintenance and fault-finding",
      "Cabling and electrical equipment supply",
    ],
    applications: [
      "Mining operations",
      "Process plants",
      "Commercial buildings",
      "Telecom infrastructure",
    ],
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    shortTitle: "Civil",
    summary:
      "Concrete, structural and earthworks capability delivering foundations, slabs, drainage and buildings for the mining and construction sectors.",
    heroImage: "/images/projects/project-tank-base.jpg",
    bullets: [
      "Concrete slabs, bases, plinths and tank foundations",
      "Culverts, lined drains and stormwater works",
      "Haul roads and earthworks",
      "Structural concrete and steel-fixing",
      "Building construction (offices, ablution blocks, workshops)",
      "Bricklaying, carpentry and finishing works",
    ],
    applications: [
      "Mine sites",
      "Government and institutional buildings",
      "Commercial construction",
    ],
  },
  {
    slug: "labor-hire",
    title: "Labor Hire & Manpower Supply",
    shortTitle: "Labor Hire",
    summary:
      "Skilled and unskilled manpower supply for shutdowns, turnarounds and ongoing site works — mobilised quickly and managed safely.",
    heroImage: "/images/projects/project-steel-erection.jpg",
    bullets: [
      "Boilermakers, coded welders & riggers",
      "Fitters, auto electricians & heavy-duty mechanics",
      "Instrumentation technicians",
      "Civil tradesmen: bricklayers, carpenters, steel fixers",
      "Site supervision: site managers, foremen, safety officers",
      "Large-scale shutdown mobilisation for mining operations",
    ],
    applications: [
      "Mine shutdowns and turnarounds",
      "Workshop operations",
      "Civil works",
    ],
  },
  {
    slug: "pump-solutions",
    title: "Pump Solutions",
    shortTitle: "Pumps",
    summary:
      "Authorised supply, installation and maintenance of Grundfos and Pedrollo pumps, plus heavy-duty slurry pumps and wear parts.",
    heroImage: "/images/products/pump-warman-product.jpg",
    bullets: [
      "Supply of Grundfos and Pedrollo pumps",
      "Heavy-duty slurry pumps & wear parts",
      "Installation and commissioning",
      "Maintenance, repairs and spare parts",
      "Borehole, submersible, centrifugal & self-priming pumps",
      "Solar-powered and energy-efficient pumping systems",
    ],
    applications: [
      "Water & wastewater treatment",
      "Mineral processing",
      "Dewatering",
      "Irrigation & boreholes",
    ],
  },
  {
    slug: "valves-piping",
    title: "Valves & Piping Solutions",
    shortTitle: "Valves & Piping",
    summary:
      "A full range of industrial valves and piping systems supplied and serviced for slurry, water and process applications.",
    heroImage: "/images/products/valve-knifegate-lineup.jpg",
    bullets: [
      "Knife gate, butterfly and ball valves",
      "Diaphragm (Saunders) and check valves",
      "Control, safety, relief and solenoid valves",
      "Piping and water supply systems",
      "Rubber lining for corrosion & abrasion protection",
      "API, ASME and sanitary-grade valves",
    ],
    applications: [
      "Mineral processing",
      "Coal processing",
      "Power generation",
      "Water & wastewater",
    ],
  },
  {
    slug: "siemens-drives",
    title: "Siemens Drives & Industrial Automation",
    shortTitle: "Siemens Drives",
    summary:
      "Supply, installation and support of Siemens drive and converter systems for efficient, reliable motor control.",
    heroImage: "/images/products/valve-globe-control-product.png",
    bullets: [
      "SINAMICS V, G and S series converters",
      "MICROMASTER frequency inverters",
      "SIMODRIVE and SIMATIC 200pro I/O systems",
      "LOHER DYNAVERT drive systems",
      "Installation, commissioning and optimisation",
      "Spare parts supply and technical support",
    ],
    applications: [
      "Process plants",
      "Conveyor systems",
      "Pumping stations",
      "Industrial automation",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

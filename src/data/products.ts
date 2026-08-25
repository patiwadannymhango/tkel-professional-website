export type ProductCategory = {
  slug: string;
  title: string;
  intro: string;
  image?: string;
  groups: { heading: string; items: string[] }[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "valves",
    title: "Valves",
    intro:
      "A comprehensive valve range for slurry, water and process applications — from manual shut-off to fully automated control.",
    image: "/images/products/valve-knifegate-lineup.jpg",
    groups: [
      {
        heading: "Knife Gate Valves",
        items: [
          "Unidirectional",
          "Bidirectional",
          "Slurry (reinforced, wear-resistant)",
          "Through-conduit (full bore)",
          "Wafer & lugged",
          "Manual, pneumatic and electric actuation",
          "High-temperature & heavy-duty",
        ],
      },
      {
        heading: "Butterfly Valves",
        items: [
          "Concentric (resilient-seated)",
          "Double eccentric (high-performance)",
          "Triple offset (zero-leakage, metal-seated)",
          "Wafer, lugged and flanged",
          "Manual, pneumatic and high-performance",
        ],
      },
      {
        heading: "Diaphragm / Saunders Valves",
        items: [
          "Weir-type & straight-through",
          "Manual, pneumatic and electric",
          "Hygienic / sanitary and high-purity",
          "Lined (rubber/PTFE) for corrosion resistance",
          "Heavy-duty and zero-leakage designs",
        ],
      },
      {
        heading: "Ball Valves",
        items: [
          "Floating & trunnion-mounted",
          "Full bore and reduced bore",
          "V-port and multi-port",
          "Two-piece and three-piece",
          "Manual and pneumatic actuation",
        ],
      },
      {
        heading: "Specialised & Industrial Valves",
        items: [
          "Control, safety and relief valves",
          "Solenoid valves",
          "API, ASME and sanitary-grade valves",
          "Global control valves",
        ],
      },
    ],
  },
  {
    slug: "pumps",
    title: "Pumps",
    intro:
      "Authorised supply of Grundfos and Pedrollo pumps, alongside heavy-duty slurry pumps and wear parts for mining and industrial duty.",
    image: "/images/products/pump-warman-product.jpg",
    groups: [
      {
        heading: "Heavy-Duty Slurry Pumps",
        items: [
          "Horizontal slurry pumps (AH/HH)",
          "Vertical sump pumps (SP/SPR)",
          "High-pressure slurry pumps (HH)",
          "Gravel / dredge pumps (G/GH)",
          "Froth pumps (AHF)",
          "Mill discharge pumps (MD)",
          "Submersible & cantilever slurry pumps",
          "Sludge pumps and wear-part sets",
        ],
      },
      {
        heading: "Grundfos Pump Solutions",
        items: [
          "Supply, installation & commissioning",
          "Maintenance & repairs",
          "Spare parts & accessories",
        ],
      },
      {
        heading: "Pedrollo Pump Solutions",
        items: [
          "4 SR borehole pump series",
          "Submersible sewage pumps (D, RX, TOP, VX, MC, ZX)",
          "Solar water pump systems",
          "Peripheral impeller pumps (PK, PKS, PQ, PV, PQA)",
          "Self-priming pumps (JSW, JCR, PLURIJET, MULTISPEED, CK, CKR)",
          "Centrifugal pumps (CP, AL-RED, HF, NF, NGA)",
          "Multistage & flanged DIN pumps",
        ],
      },
    ],
  },
  {
    slug: "siemens-drives",
    title: "Siemens Drives & Converters",
    intro:
      "From basic frequency converters to high-performance motion control, tailored to enhance efficiency and reliability across industrial sectors.",
    image: "/images/products/valve-globe-control-product.png",
    groups: [
      {
        heading: "Converter & Drive Range",
        items: [
          "SINAMICS V — basic performance converters",
          "SINAMICS G — general performance converters",
          "SINAMICS S — high performance converters",
          "MICROMASTER — frequency inverters",
          "SIMODRIVE — converter systems",
          "SIMATIC 200pro — distributed I/O",
          "LOHER DYNAVERT — drive systems",
        ],
      },
    ],
  },
  {
    slug: "rubber-lining",
    title: "Rubber Lining",
    intro:
      "Corrosion and abrasion protection for tanks, pipes, chutes and hoppers — supplied and installed on-site or off-site.",
    groups: [
      {
        heading: "Applications",
        items: [
          "Corrosion protection for tanks and vessels storing acids, alkalis and chemicals",
          "Abrasion resistance for slurry pipelines, cyclones, chutes and hoppers",
          "Rubber lining of tanks, pipes and industrial equipment",
          "Installation and maintenance of rubber-lined equipment",
          "Surface preparation, bonding and curing",
        ],
      },
    ],
  },
  {
    slug: "general-industrial-supply",
    title: "General Industrial Supply",
    intro:
      "End-to-end supply chain support across the commodity areas mining and industrial clients rely on most.",
    groups: [
      {
        heading: "Commodity Areas",
        items: [
          "Electrical equipment & cables",
          "Gearboxes, motor bearings & manufacturing",
          "Bearing and transmission equipment",
          "Welding consumables and machines",
          "Lifting & rigging",
          "Conveyor belting & systems",
          "Drilling equipment & accessories",
          "Air tools & compressors",
          "Abrasives",
          "Adhesives, sealants, paints & cleaning",
          "General tools & locks",
          "Automotive parts & accessories",
        ],
      },
    ],
  },
];

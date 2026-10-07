import logo from "@/assets/logo.webp";
import founder from "@/assets/founder.webp";
import architecture from "@/assets/architecture.webp";
import classic from "@/assets/living-classic.webp";
import daylight from "@/assets/living-daylight.webp";
import marble from "@/assets/living-marble.webp";
import contemporary from "@/assets/bedroom-contemporary.webp";
import blue from "@/assets/bedroom-blue.webp";
import green from "@/assets/bedroom-green.webp";
import grey from "@/assets/bedroom-grey.webp";
import charcoal from "@/assets/bedroom-charcoal.webp";
import soft from "@/assets/bedroom-soft.webp";
import dining from "@/assets/dining-staircase.webp";
import geometric from "@/assets/bedroom-geometric.webp";
import monochrome from "@/assets/bedroom-monochrome.webp";

export const brand = {
  logo: logo,
  founder: founder,
  instagram: "https://www.instagram.com/dreamdrafter.interiors/",
  facebook: "https://www.facebook.com/p/Dream-Drafter-100068071099703/",
};
export type Project = {
  image: string;
  title: string;
  category: string;
  tags: string[];
  portrait?: boolean;
};
export const projects: Project[] = [
  {
    image: architecture,
    title: "Contemporary residence",
    category: "Architecture",
    tags: ["Residential", "Architecture"],
    portrait: true,
  },
  {
    image: classic,
    title: "Classic contemporary interior",
    category: "Living",
    tags: ["Residential", "Interiors", "Living"],
  },
  {
    image: daylight,
    title: "A living space in natural light",
    category: "Living",
    tags: ["Residential", "Interiors", "Living"],
  },
  {
    image: marble,
    title: "Marble, wood & quiet luxury",
    category: "Living",
    tags: ["Residential", "Interiors", "Living"],
  },
  {
    image: contemporary,
    title: "Contemporary bedroom",
    category: "Bedrooms",
    tags: ["Residential", "Interiors", "Bedrooms"],
  },
  {
    image: blue,
    title: "Blue accent bedroom",
    category: "Bedrooms",
    tags: ["Residential", "Interiors", "Bedrooms"],
  },
  {
    image: green,
    title: "Contemporary green bedroom",
    category: "Bedrooms",
    tags: ["Residential", "Interiors", "Bedrooms"],
  },
  {
    image: grey,
    title: "Modern grey bedroom",
    category: "Bedrooms",
    tags: ["Residential", "Interiors", "Bedrooms"],
  },
  {
    image: charcoal,
    title: "Charcoal & timber bedroom",
    category: "Bedrooms",
    tags: ["Residential", "Interiors", "Bedrooms"],
  },
  {
    image: dining,
    title: "Spaces that connect",
    category: "Interiors",
    tags: ["Residential", "Interiors"],
  },
  {
    image: soft,
    title: "Soft contemporary bedroom",
    category: "Bedrooms",
    tags: ["Residential", "Interiors", "Bedrooms"],
  },
  {
    image: geometric,
    title: "Geometric bedroom",
    category: "Bedrooms",
    tags: ["Residential", "Interiors", "Bedrooms"],
  },
  {
    image: monochrome,
    title: "Monochrome bedroom",
    category: "Bedrooms",
    tags: ["Residential", "Interiors", "Bedrooms"],
  },
];
export const values = [
  "Quality work",
  "Modern era technology",
  "Customer-centric service",
  "Economical services",
  "Authentic products & fine architectural works",
];
export const clients = [
  "Shree Krishna Residency",
  "Swastik Builders",
  "OSHO Industries",
  "TVS",
  "Firefox Cycles",
  "Quick Forex",
  "Med Harbour",
  "Translumina Therapeutics",
];
export const projectTypes = [
  "Residential",
  "Office Interiors",
  "Commercial",
  "Architecture",
  "Exhibition Design",
  "Other",
] as const;
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

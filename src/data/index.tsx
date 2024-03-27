import { createTechnologies } from "@/lib/utils";

export const projects = [
  {
    title: "Digital Hippo",
    description: "A Ecommerce website to Buy and Sell digital assets",
    technologies: createTechnologies([6, 6]),
    priority: "primary" as const,
  },
  {
    title: "Netflix clone",
    description: "A Ecommerce website to Buy and Sell digital assets",
    technologies: createTechnologies([6, 6, 2]),
    priority: "secondary" as const
  },
  {
    title: "Space tourism",
    description: "A Ecommerce website to Buy and Sell digital assets",
    technologies: createTechnologies([3]),
    priority: "tertiary" as const,
  },
  {
    title: "Portfolio",
    description: "A Ecommerce website to Buy and Sell digital assets",
    technologies: createTechnologies([3]),
    priority: "quaternary" as const,
  },
];
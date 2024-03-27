import { areas } from "@/config";
import { createTechnologies } from "@/lib/utils";

export const projects = [
  {
    title: "Digital Hippo",
    description: "A Ecommerce website to Buy and Sell digital assets",
    technologies: createTechnologies([6, 6]),
    priority: areas.primary,
    onClick: () => setOpenArea(
      "[grid-area:_1_/_1_/_2_/_3] md:[grid-area:_1_/_1_/_3_/_4] lg:[grid-area:_1_/_3_/_3_/_5]"
    ),
  },
  {
    title: "Digital Hippo",
    description: "A Ecommerce website to Buy and Sell digital assets",
    technologies: createTechnologies([6, 6, 2]),
    area: areas.secondary,
    onClick: () => setOpenArea(`${areas.secondary} lg:[grid-area:_1_/_1_/_3_/_3]`),
  },
  {
    title: "Digital Hippo",
    description: "A Ecommerce website to Buy and Sell digital assets",
    technologies: createTechnologies([3]),
    area: areas.tertiary,
    onClick: () => setOpenArea(areas.tertiary),
  },
  {
    title: "Digital Hippo",
    description: "A Ecommerce website to Buy and Sell digital assets",
    technologies: createTechnologies([3]),
    area: areas.quaternary,
    onClick: () => setOpenArea(areas.quaternary),
  },
];
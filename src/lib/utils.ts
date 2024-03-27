import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createTechnologies = (itemsCount: number[]) => {
  return Array.from({ length: itemsCount.length }, (_, i) => ({
    category: "fronted",
    items: Array.from({ length: itemsCount[i] }, () => ({
      name: "NextJS",
      icon: "tech-icons",
    })),
  }));
};

export const combineArea = (a: string, b: string, screen?: "md" | "lg") => {
  const mediaQuery = screen ? `${screen}:` : "";
  const regex = new RegExp(
    `${mediaQuery}\\[grid-area:_(\\d_\\/_\\d_\\/_\\d_\\/_\\d)\\]`,
    "i",
  );
  const aMatch = a.match(regex);
  const start = aMatch ? aMatch[1].split("_/_").slice(0, 2) : [];

  const bMatch = b.match(regex);
  const end = bMatch ? bMatch[1].split("_/_").slice(2) : [];

  if (start.length === 0 || end.length === 0) {
    console.log(`no matches of ${start.length === 0 ? "A" : "B"} in combineArea`)
    return ""
  };

  return `${mediaQuery}[grid-area:_${start[0]}_/_${start[1]}_/_${end[0]}_/_${end[1]}]`;
};

export const getAreaByMediaQuery = (completeArea: string, screen?: "md" | "lg") => {
  const mediaQuery = screen ? `${screen}:` : "";
  const regex = new RegExp(
    `${mediaQuery}\\[grid-area:_(\\d_\\/_\\d_\\/_\\d_\\/_\\d)\\]`,
    "i",
  );
  const match = completeArea.match(regex)
  return match ? `${mediaQuery}[grid-area:_${match[1]}]` : ""
}
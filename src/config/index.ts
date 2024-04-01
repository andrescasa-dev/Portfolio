export const areas = {
  primary:
    "[grid-area:_1_/_1_/_2_/_3] md:[grid-area:_1_/_1_/_3_/_3] lg:[grid-area:_1_/_1_/_3_/_3]",
  secondary:
    "[grid-area:_2_/_1_/_3_/_3] md:[grid-area:_4_/_1_/_5_/_4] lg:[grid-area:_1_/_3_/_2_/_5]",
  tertiary:
    "[grid-area:_3_/_1_/_4_/_3] min-[370px]:[grid-area:_3_/_1_/_4_/_2] md:[grid-area:_1_/_3_/_2_/_4] lg:[grid-area:_2_/_3_/_3_/_4]",
  quaternary:
    "[grid-area:_4_/_1_/_5_/_3] min-[370px]:[grid-area:_3_/_2_/_4_/_3] md:[grid-area:_2_/_3_/_3_/_4] lg:[grid-area:_2_/_4_/_3_/_5]",
};

type ContentConfig = {
  [key in "primary" | "secondary" | "tertiary" | "quaternary"]: {
    title?: string,
    desc?: string,
    accordion?: string
  }
}

export const contentConfig: ContentConfig = {
  primary: { title: "lg:hidden", desc: "lg:hidden" },
  secondary: { title: "lg:hidden", desc: "lg:hidden" },
  tertiary: { accordion: "hidden" },
  quaternary: { accordion: "hidden" }
}

export const openAreas = {
  primary:
    "[grid-area:_1_/_1_/_2_/_3] md:[grid-area:_1_/_1_/_3_/_4] lg:[grid-area:_1_/_3_/_3_/_5]",
  secondary:
    "[grid-area:_2_/_1_/_3_/_3] md:[grid-area:_4_/_1_/_5_/_4] lg:[grid-area:_1_/_1_/_3_/_3]",
  tertiary:
    areas.tertiary,
  quaternary:
    areas.quaternary,

}
export const areas = {
  primary:
    "[grid-area:_1_/_1_/_2_/_3] md:[grid-area:_1_/_1_/_3_/_3] lg:[grid-area:_1_/_1_/_3_/_3]",
  secondary:
    "[grid-area:_2_/_1_/_3_/_3] md:[grid-area:_4_/_1_/_5_/_4] lg:[grid-area:_1_/_3_/_2_/_5]",
  tertiary:
    "[grid-area:_3_/_1_/_4_/_2] md:[grid-area:_1_/_3_/_2_/_4] lg:[grid-area:_2_/_3_/_3_/_4]",
  quaternary:
    "[grid-area:_3_/_2_/_4_/_3] md:[grid-area:_2_/_3_/_3_/_4] lg:[grid-area:_2_/_4_/_3_/_5]",
};

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
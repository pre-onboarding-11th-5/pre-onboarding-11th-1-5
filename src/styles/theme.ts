import { DefaultTheme } from "styled-components";

export const colors = {
  black: "#000",
  grey1: "#D8D8D8",
  grey2: "#C6C4C4",
  grey3: "#959595",
  white: "#FFF",
  red1: "#F0491C",
  red2: "#F0331C",
  red3: "#F82E17",
  yellow1: "#EFFE23",
  yellow2: "#E5F51D",
  blue1: "#1FE1FC",
  blue2: "#1FCDFC",
  blue3: "#1F9EFC",
  blue4: "#1C66F0",
  brown1: "#B0670F",
  brown2: "#935407",
};

export type ColorsType = typeof colors;

export const theme: DefaultTheme = {
  colors,
};

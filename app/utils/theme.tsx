import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#e0e0e6",
      120: "#f0f0f5",
      140: "#fbfbfb",
      160: "#f0f0f5",
      180: "#f0f0f5",
      200: "#c0c0ca",
      220: "#f4f4f6",
      240: "#f0f0f5",
      260: "#cacacd",
      280: "#5c5c6f",
      300: "#e0e0e6",
      320: "#5c5c6e",
      400: "#ffc107",
      420: "#dd6b21",
      600: "#191923",
      620: "#20202a",
      640: "#23232b",
      660: "#24242f",
      680: "#252530",
      700: "#2a2a35",
      720: "#2b2b36",
      740: "#2d2d3a",
      760: "#404049",
      780: "#8c8c8e", //Text
      800: "#cacace",
      820: "#fafafc",
      840: "#2c2c38",
    },
  },
});

export default theme;

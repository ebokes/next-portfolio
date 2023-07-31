import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#c0c0ca",
      100: "#f0f0f5",
      500: "#e0e0e6",
      600: "#ffc107",
      900: "#1e1e28",
      950: "#191923",
    },
  },
});

export default theme;

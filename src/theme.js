import { extendTheme } from "@chakra-ui/react";
import '@fontsource/swanky-and-moo-moo';

const theme = extendTheme({
  colors: {
    blue: "#2B6CB0",
    purple: "#B794F4",
    teal: "#B2F5EA",
  },
  fonts: {
    // body: "Arial, sans-serif",
    body: `'Swanky and Moo Moo', cursive`,
    // heading: "Helvetica, sans-serif",
    heading: `'Swanky and Moo Moo', cursive`,
  },
  fontSizes: {
    sm: "12px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    "2xl": "32px",
  },
  // Add more theme configurations here...
});

export default theme;

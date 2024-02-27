import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: "#2B6CB0",
    purple: "#B794F4",
    teal: "#B2F5EA",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Helvetica, sans-serif",
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

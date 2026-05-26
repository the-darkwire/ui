// CommonJS, Node-runnable Tailwind preset. Consumers' `tailwind.config.js` files load this
// via `require("@the-darkwire/ui/tailwind-preset")`. Token VALUES below are duplicated from
// src/tokens/*.ts because Node can't require() TS. When tokens change in src/tokens, update
// this file too (and vice versa); a future build step would DRY this up.

const colors = {
  bg: {
    base: "#fffaf5",
    elevated: "#ffffff",
    subtle: "#f5efe8",
  },
  text: {
    primary: "#1a1a1a",
    secondary: "#4a4a4a",
    muted: "#6b6b6b",
    inverse: "#ffffff",
  },
  accent: {
    hot: "#ff5b3d",
    warm: "#ffaa55",
    fresh: "#a8d672",
    cool: "#5d8bc7",
  },
  border: {
    subtle: "#e8e0d6",
    default: "#d0c8be",
  },
};

const spacing = {
  none: "0px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "32px",
  "3xl": "48px",
  "4xl": "64px",
};

const fontSize = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
  "3xl": "30px",
  "4xl": "36px",
};

const fontWeight = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
};

const lineHeight = {
  tight: "1.2",
  normal: "1.5",
  loose: "1.8",
};

const borderRadius = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors,
      spacing,
      fontSize,
      fontWeight,
      lineHeight,
      borderRadius,
    },
  },
};

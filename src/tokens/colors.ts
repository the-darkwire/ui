// Phase-1 placeholder palette — iterate to match the brand. Exported as a plain TS object so
// both NativeWind's Tailwind preset and any non-class-based code can read from one source.

export const colors = {
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
} as const;

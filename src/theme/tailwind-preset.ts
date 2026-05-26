import type { Config } from "tailwindcss";
import { colors } from "../tokens/colors";
import { radii } from "../tokens/radii";
import { spacing } from "../tokens/spacing";
import { fontSize, fontWeight, lineHeight } from "../tokens/typography";

const toPxScale = <T extends Record<string, number>>(scale: T): Record<keyof T, string> =>
  Object.fromEntries(Object.entries(scale).map(([k, v]) => [k, `${v}px`])) as Record<
    keyof T,
    string
  >;

const toRadiusScale = <T extends Record<string, number>>(scale: T): Record<keyof T, string> =>
  Object.fromEntries(
    Object.entries(scale).map(([k, v]) => [k, v >= 9999 ? "9999px" : `${v}px`]),
  ) as Record<keyof T, string>;

const preset: Partial<Config> = {
  theme: {
    extend: {
      colors,
      spacing: toPxScale(spacing),
      fontSize: toPxScale(fontSize),
      fontWeight,
      lineHeight: Object.fromEntries(Object.entries(lineHeight).map(([k, v]) => [k, String(v)])),
      borderRadius: toRadiusScale(radii),
    },
  },
};

export default preset;

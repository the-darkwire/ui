// Spacing scale (unitless integers). RN consumes these as numbers directly; the Tailwind preset
// converts them to "Npx" strings for NativeWind.

export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  "3xl": 48,
  "4xl": 64,
} as const;

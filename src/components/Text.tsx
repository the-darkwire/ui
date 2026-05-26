import { Text as RNText, type TextProps as RNTextProps } from "react-native";

type Variant = "h1" | "h2" | "h3" | "body" | "caption";

const variantClasses: Record<Variant, string> = {
  h1: "text-3xl font-bold text-text-primary",
  h2: "text-2xl font-semibold text-text-primary",
  h3: "text-xl font-semibold text-text-primary",
  body: "text-base text-text-primary",
  caption: "text-sm text-text-muted",
};

export type TextProps = RNTextProps & {
  variant?: Variant;
  className?: string;
};

export const Text = ({ variant = "body", className, ...rest }: TextProps) => (
  <RNText {...rest} className={`${variantClasses[variant]} ${className ?? ""}`.trim()} />
);

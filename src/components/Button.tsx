import { Pressable, type PressableProps, Text as RNText } from "react-native";

type Variant = "primary" | "secondary";

const containerClasses: Record<Variant, string> = {
  primary: "bg-accent-hot",
  secondary: "bg-bg-subtle border border-border-default",
};

const labelClasses: Record<Variant, string> = {
  primary: "text-text-inverse font-semibold",
  secondary: "text-text-primary font-semibold",
};

export type ButtonProps = Omit<PressableProps, "children"> & {
  label: string;
  variant?: Variant;
  className?: string;
};

export const Button = ({ label, variant = "primary", className, ...rest }: ButtonProps) => (
  <Pressable
    {...rest}
    className={`px-lg py-md rounded-md ${containerClasses[variant]} ${className ?? ""}`.trim()}
  >
    <RNText className={`text-base ${labelClasses[variant]}`}>{label}</RNText>
  </Pressable>
);

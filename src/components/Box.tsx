import { View, type ViewProps } from "react-native";

// Box is a thin View wrapper with a more web-familiar name. NativeWind's JSX transform handles
// the className prop on RN components; we don't need to forward it manually.
export type BoxProps = ViewProps & { className?: string };

export const Box = (props: BoxProps) => <View {...props} />;

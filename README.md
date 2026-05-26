# @the-darkwire/ui

Shared UI library for the-darkwire org. React Native primitives + design tokens, runs natively on mobile and via React Native Web on web.

## Stack

- **Components** built on RN primitives (`View`, `Text`, `Pressable`, etc.) so a single component renders on iOS, Android, and (via RNW) web.
- **Styling** via [NativeWind](https://www.nativewind.dev/) — Tailwind for React Native.
- **Design tokens** as plain TS objects in `src/tokens/`. Exported directly and also exposed as a Tailwind preset for NativeWind consumers.

## Install (in a consumer app)

```sh
pnpm add @the-darkwire/ui
# Ensure peer deps are present: react, react-native, react-native-web, nativewind, tailwindcss
```

## Usage

```tsx
import { Box, Text, Button } from "@the-darkwire/ui";

export function MyScreen() {
  return (
    <Box className="p-lg gap-md bg-bg-base">
      <Text variant="h1">Hello</Text>
      <Button label="Tap me" variant="primary" onPress={() => {}} />
    </Box>
  );
}
```

In your `tailwind.config.js`:

```js
const uiPreset = require("@the-darkwire/ui/tailwind-preset").default;

module.exports = {
  presets: [uiPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@the-darkwire/ui/src/**/*.{ts,tsx}",
  ],
};
```

## Local consumer dev

During active development, consumers can use a `file:` dep to a sibling clone:

```jsonc
// in the consumer's package.json
"dependencies": {
  "@the-darkwire/ui": "file:../ui"
}
```

Then `pnpm install`. Edits to either repo show up immediately in the consumer.

When the library matures and stabilizes, switch consumers to a versioned dep against the published GH Packages registry.

## Status

Phase 1 — primitives only (`Box`, `Text`, `Button`, design tokens). Components grow in response to actual product needs per the org's "build first, template second" policy. See [`CLAUDE.md`](./CLAUDE.md) for architecture and conventions.

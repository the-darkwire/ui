# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Org-wide conventions (toolchain, script vocabulary, style, deploy patterns) live in [`org-conventions.md`](./org-conventions.md) — vendored from <https://github.com/the-darkwire/conventions>. This file covers what's specific to `@the-darkwire/ui`.

## What this is

Shared UI library for the-darkwire org. Components built on React Native primitives (`View`, `Text`, `Pressable`, etc.) so they render natively on mobile and via React Native Web on web. Consumers are RN-based apps (likely scaffolded from the `elysia-stack` template) which may target iOS, Android, web, or any combination per their own configuration.

## Stack

- **Source only** — no build step. Consumers' bundlers (Metro for mobile, the Expo Web pipeline / Vite / Webpack for web) compile TS+JSX directly from `src/`. Cheap to ship. Add `tsup` later if external consumers complain.
- **Peer deps**: `react`, `react-native`, `react-native-web`, `nativewind`, `tailwindcss`. Consumer provides versions to avoid skew.
- **Tests are pure-TS / Vitest** — token tests only for now. Component tests would require mocking `react-native`, which we defer until there's enough complexity to justify the test infra investment.

## Architecture

- `src/tokens/` — design tokens (colors, spacing, fontSize, fontWeight, lineHeight, radii) as plain TS const objects.
- `src/theme/tailwind-preset.cjs` — Tailwind preset, **CommonJS** (not TS) because consumers' `tailwind.config.js` files are loaded by Node, which can't `require()` TypeScript. Consumers do `presets: [require("@the-darkwire/ui/tailwind-preset")]` in their `tailwind.config.js` and get all tokens as utility classes. **Token VALUES are duplicated here from `src/tokens/*.ts`** — when tokens change, update both files. A future build step (tsup/tsc) would DRY this up; deferred to keep the library zero-build.
- `src/components/` — RN-primitive-based components. Each accepts a `className` (handled by NativeWind's JSX transform in the consumer's Babel config).
- `src/index.ts` — flat public exports.

### Adding a component

1. Create `src/components/<Name>.tsx`.
2. Use RN primitives (`View`, `Text`, `Pressable`, `Image`, etc.) — nothing web-only.
3. Style with NativeWind classes (`className="..."`). Reference tokens via Tailwind class names (`bg-bg-base`, `p-lg`, `text-text-muted`), not by importing token JS directly. The whole point of the preset is so components don't bake in hex/px values.
4. Export from `src/components/index.ts` and re-export from `src/index.ts`.

## Commands

- `pnpm typecheck` — `tsc --noEmit`
- `pnpm lint` / `pnpm lint:fix` — Biome
- `pnpm check` — Biome (lint + format, autofix)
- `pnpm test` / `pnpm test:watch` — Vitest

## Local consumer dev

Consumers use a `file:` dep (e.g. `"@the-darkwire/ui": "file:../ui"`) into a sibling clone. Edits show up immediately in both repos. CI uses the published version (once we wire up publishing).

## Publishing

(Not yet wired.) When the library stabilizes, add `.github/workflows/publish.yml` that runs on `v*` tags and publishes to GH Packages. Until then, consumers stay on `file:` deps.

## Gotchas

- **NativeWind's `className` requires its JSX transform** in the *consuming app's* Babel config, not here. Without that, `className` is ignored on RN primitives. We don't ship the transform; consumers configure it.
- **Don't import from `tailwindcss` types outside `tailwind-preset.ts`.** That's the only file that should pull from the (peer) tailwindcss package.
- **Tokens are the design contract.** If a component hardcodes a hex value, pixel number, or px-spacing, refactor it to use a token-backed class.
- **No DOM types in `tsconfig.json`.** RN's surface is described by `react-native`'s own types; pulling in DOM would let web-only patterns leak into components that need to run on mobile.

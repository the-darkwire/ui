import { describe, expect, it } from "vitest";
// Import tokens directly (not via the barrel) so we don't trigger loading of the components,
// which import from "react-native" and can't be loaded in Node without a mock.
import { colors, fontSize, radii, spacing } from "../src/tokens";

describe("ui smoke", () => {
  it("exports colors token", () => {
    expect(colors).toBeDefined();
    expect(typeof colors.bg.base).toBe("string");
    expect(typeof colors.accent.hot).toBe("string");
  });

  it("exports spacing token as a numeric scale", () => {
    expect(spacing.md).toBe(12);
    expect(spacing.lg).toBe(16);
  });

  it("exports fontSize token", () => {
    expect(fontSize.base).toBe(16);
  });

  it("exports radii token", () => {
    expect(radii.full).toBeGreaterThan(1000);
  });
});

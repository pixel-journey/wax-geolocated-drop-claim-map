import { describe, expect, it } from "vitest";
import { SAMPLE_BOX, insideBox } from "./geo";

describe("claim box", () => {
  it("accepts a point in the box and rejects one outside", () => {
    expect(insideBox(40_400_000, -3_700_000, SAMPLE_BOX).inside).toBe(true);
    expect(insideBox(0, 0, SAMPLE_BOX).inside).toBe(false);
    expect(insideBox(40_400_000, -3_700_000, { ...SAMPLE_BOX, west: 5_000_000 }).reason).toBe("the box is inverted");
  });
});

import { describe, expect, it } from "vitest";
import { SAMPLE_BOX, insideBox } from "./geo";

describe("claim box", () => {
  it("accepts a point in the box and rejects one outside", () => {
    expect(insideBox(40_400_000, -3_700_000, SAMPLE_BOX).inside).toBe(true);
    expect(insideBox(0, 0, SAMPLE_BOX).inside).toBe(false);
    expect(insideBox(SAMPLE_BOX.south, SAMPLE_BOX.west, SAMPLE_BOX).inside).toBe(true);
    expect(insideBox(SAMPLE_BOX.south - 1, SAMPLE_BOX.west, SAMPLE_BOX).inside).toBe(false);
    expect(
      insideBox(40_400_000, -3_700_000, { ...SAMPLE_BOX, west: 5_000_000 }).reason,
    ).toBe("the box is inverted");
  });

  it("refuses coordinates outside the planet bounds", () => {
    expect(insideBox(90_000_001, 0, SAMPLE_BOX).inside).toBe(false);
    expect(insideBox(0, 180_000_001, SAMPLE_BOX).inside).toBe(false);
  });

  it("includes the north and east edges", () => {
    expect(insideBox(SAMPLE_BOX.north, SAMPLE_BOX.east, SAMPLE_BOX).inside).toBe(
      true,
    );
  });
});

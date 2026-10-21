/**
 * A box in microdegrees. 40.4 degrees north is 40400000.
 * This is not a map and it does not wrap across 180 degrees.
 */

export type Box = { south: number; north: number; west: number; east: number };

function coord(value: number, limit: number, label: string): string | null {
  if (!Number.isInteger(value) || value < -limit || value > limit) return `${label} must be an integer from ${-limit} to ${limit}`;
  return null;
}

export function insideBox(lat: number, lon: number, box: Box): { inside: boolean; reason: string } {
  const latError = coord(lat, 90_000_000, "lat");
  if (latError) return { inside: false, reason: latError };
  const lonError = coord(lon, 180_000_000, "lon");
  if (lonError) return { inside: false, reason: lonError };
  for (const [label, value, limit] of [
    ["south", box.south, 90_000_000],
    ["north", box.north, 90_000_000],
    ["west", box.west, 180_000_000],
    ["east", box.east, 180_000_000],
  ] as const) {
    const error = coord(value, limit, label);
    if (error) return { inside: false, reason: error };
  }
  if (box.south > box.north || box.west > box.east) return { inside: false, reason: "the box is inverted" };
  const inside = lat >= box.south && lat <= box.north && lon >= box.west && lon <= box.east;
  return { inside, reason: inside ? "inside the box" : "outside the box" };
}

export const SAMPLE_BOX: Box = { south: 36_000_000, north: 44_000_000, west: -10_000_000, east: 4_000_000 };

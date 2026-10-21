"use client";

import { SAMPLE_BOX, insideBox } from "./geo";

export function Demo() {
  const point = insideBox(40_400_000, -3_700_000, SAMPLE_BOX);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>A box, not a map</h1>
      <p className="lede">
        40.4 degrees north and 3.7 degrees west, stored as microdegrees. The box does not cross 180. No location is read from the device.
      </p>
      <p>
        {point.reason}. South {SAMPLE_BOX.south}, north {SAMPLE_BOX.north}, west {SAMPLE_BOX.west}, east {SAMPLE_BOX.east}.
      </p>
    </main>
  );
}

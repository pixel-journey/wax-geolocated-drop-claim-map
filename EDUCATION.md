# Education — a box in microdegrees

> **Rung:** `npm test` passes. `40.4` degrees north is the integer `40400000`. This is not a map, it does not wrap past 180 degrees, and it does not check a GPS fix.  
> **The test is the rule.**

## Predict, then run

`SAMPLE_BOX` is south `36000000`, north `44000000`, west `-10000000`, east `4000000`. Edges are inside. `lat >= south`, `lat <= north`, `lon >= west`, `lon <= east`.

| Call | Locked result |
| --- | --- |
| `insideBox(40400000, -3700000, SAMPLE_BOX)` | inside. That is 40.4 N, 3.7 W. |
| `insideBox(0, 0, SAMPLE_BOX)` | outside |
| the southwest corner, `south` and `west` | inside |
| one microdegree south of `south` | outside |
| `west` greater than `east` | reason `the box is inverted`, and not inside |

Latitude must be an integer from `-90000000` to `90000000`. Longitude from `-180000000` to `180000000`. A box that crosses the date line is inverted here, not wrapped.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this box.

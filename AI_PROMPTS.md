# AI handoff — microdegree box

## Non-negotiables

1. `40.4` degrees north is the integer `40400000`. Edges are inside.
2. `SAMPLE_BOX` is south `36000000`, north `44000000`, west `-10000000`, east `4000000`.
3. `insideBox(40400000, -3700000, SAMPLE_BOX)` is inside (40.4 N, 3.7 W). `(0, 0)` is outside.
4. The southwest corner is inside. One microdegree south of `south` is outside.
5. `west` greater than `east` → reason `the box is inverted`, and not inside. A date-line crossing is inverted here, not wrapped.
6. Latitude `-90000000`..`90000000`. Longitude `-180000000`..`180000000`.
7. Not a map, not a GPS check, not a claim transaction, not an owner list.

## Do not

- Wrap the box across 180 degrees.
- Send the unbox example request and call it this box.

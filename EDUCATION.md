# Education — a box in microdegrees

> **Rung:** `npm test` passes. `40.4` degrees north is the integer `40400000`. This is not a map, it does not wrap past 180 degrees, and it does not check a GPS fix.  
> **The test is the rule.**

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Convert degrees to microdegrees and test inside/outside |
| Intermediate | Inclusive edges, inverted box, planet bounds |
| Masterclass | Separate this pure box from a claim transaction or map tile |

---

## Beginner — one scene

`SAMPLE_BOX`: south `36000000`, north `44000000`, west `-10000000`, east `4000000`.

Edges are **inside**: `lat >= south`, `lat <= north`, `lon >= west`, `lon <= east`.

| Call | Locked result |
| --- | --- |
| `insideBox(40400000, -3700000, SAMPLE_BOX)` | inside (40.4 N, 3.7 W) |
| `insideBox(0, 0, SAMPLE_BOX)` | outside |
| southwest corner | inside |
| one microdegree south of `south` | outside |
| `west` greater than `east` | reason `the box is inverted` |

```bash
npm test
```

---

## Intermediate — bounds

| Coordinate | Valid integers |
| --- | --- |
| Latitude | −90_000_000 .. 90_000_000 |
| Longitude | −180_000_000 .. 180_000_000 |

A box that crosses the date line is **inverted** here, not wrapped. Production products that need date-line spans need a different model.

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Exclusive edges | edges are inclusive |
| Date-line wrap | inverted, refused |
| Lat 90_000_001 | refused |
| Treat as GPS claim | pure arguments only |

### Exercises

1. 40.4 N, 3.7 W in SAMPLE_BOX? (**Yes**.)  
2. Southwest corner inside? (**Yes**.)  
3. Does this wrap 180°? (**No**.)

---

## Masterclass

Nothing here reads GPS, claims a drop, or draws a map. A host that wants a real geofence still needs device location policy, consent, and anti-spoofing — outside this pure box.

HTTP pack examples stay unsent and are not this product.

---

## What this course will not teach

- Live geolocation permission
- A claim transaction
- Map projection or tiles

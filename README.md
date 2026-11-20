# A box in microdegrees

**Trust label:** `educational-reference`  
**Catalog:** `wax-ecosystem-blueprint-catalog` (private index; not this public course)

Inside or outside a box. Not a map, and the box does not cross 180 degrees. Coordinates are arguments. No claim transaction and no AtomicAssets owner list is read.

The earlier README described a live product. This tree does not ship that.

## What is actually in the repo

| Piece | Role |
| --- | --- |
| `src/geo.ts` | The pure rules |
| `src/geo.test.ts` | The claims in the verification log |
| `src/usecases.ts` | HTTP requests, built and not sent |
| `src/Demo.tsx` | Offline page |

The course is [EDUCATION.md](EDUCATION.md). `npm test` runs the rules. `npm run dev` opens the page.

## Queries

`executed` is false. This repo did not call any host. No transaction is invented.

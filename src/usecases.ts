import { ATOMIC_ORIGIN, atomicAssets } from "./api";
import { SAMPLE_BOX, insideBox } from "./geo";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const point = insideBox(40_400_000, -3_700_000, SAMPLE_BOX);

export const USE_CASES: UseCase[] = [
  {
    title: "A collection is not a location",
    detail: `The sample point is ${point.reason}. Assets do not carry this box. The request is not sent.`,
    request: atomicAssets(ATOMIC_ORIGIN, "alice", "pixeljourney"),
    transaction: null,
  },
  {
    title: "No claim action is built from a coordinate",
    detail: "The device location is not read. A point at 0, 0 is outside the sample box.",
    request: { method: "GET", url: `${ATOMIC_ORIGIN}/atomicassets/v1/assets?collection_name=pixeljourney&page=1&limit=20`, executed: false },
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (!point.inside || insideBox(0, 0, SAMPLE_BOX).inside) throw new Error("box");
}

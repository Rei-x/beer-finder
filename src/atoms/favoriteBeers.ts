import { atomWithStorage } from "jotai/utils";

export const favoriteBeersAtom = atomWithStorage<number[]>("favoriteBeers", []);

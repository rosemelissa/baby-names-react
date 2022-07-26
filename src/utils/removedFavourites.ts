import { babyNameInterface } from "../utils/types";

export default function removedFavourites(
  sortedNames: babyNameInterface[],
  favouriteBabies: babyNameInterface[]
): babyNameInterface[] {
  const favouriteNames: string[] = favouriteBabies.map((item) => item.name);
  const removedFavourites = sortedNames.filter(
    (item) => !favouriteNames.includes(item.name)
  );
  return removedFavourites;
}

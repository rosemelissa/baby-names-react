import NameCard from "./NameCard";
import searchNames from "../utils/searchNames";
import babyNamesData from "../babyNamesData.json";
import sortNames from "../utils/sortNames";
import removedFavourites from "../utils/removedFavourites";
import { babyNameInterface } from "../utils/types";

interface NamesListProps {
  searchQuery: string;
  favouritesList: babyNameInterface[];
  setFavouritesList: React.Dispatch<React.SetStateAction<babyNameInterface[]>>;
  gender: "all" | "f" | "m";
}

function NamesList({
  searchQuery,
  favouritesList,
  setFavouritesList,
  gender,
}: NamesListProps): JSX.Element {
  const sortedNames = sortNames(babyNamesData);
  const removedFavouriteNames = removedFavourites(sortedNames, favouritesList);
  const namesToDisplay = searchNames(
    searchQuery,
    removedFavouriteNames,
    gender
  );
  return (
    <div id="babyNamesList">
      {namesToDisplay.map((baby) => (
        <NameCard
          key={baby.id}
          baby={baby}
          favouritesList={favouritesList}
          setFavouritesList={setFavouritesList}
        />
      ))}
    </div>
  );
}

export default NamesList;

import NameCard from "./NameCard";
import searchNames from "../utils/searchNames";
import babyNamesData from "../babyNamesData.json";

interface NamesListProps {
  searchQuery: string;
}

const sortedNames = babyNamesData.sort(function (a, b) {
  const nameA = a.name;
  const nameB = b.name;
  if (nameA > nameB) {
    return 1;
  }
  if (nameA < nameB) {
    return -1;
  }
  return 0;
});


function NamesList({searchQuery}: NamesListProps): JSX.Element {
  const namesToDisplay = searchNames(searchQuery, sortedNames);
  return (
    <div id="babyNamesList">
      {namesToDisplay.map((baby) => (
        <NameCard key={baby.id} {...baby} />
      ))}
    </div>
  );
}

export default NamesList;

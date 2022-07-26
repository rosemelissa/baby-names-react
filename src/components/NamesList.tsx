import NameCard from "./NameCard";
import babyNamesData from "../babyNamesData.json";


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

function NamesList(): JSX.Element {
  return (
    <div id="babyNamesList">
      {sortedNames.map((baby) => (
        <NameCard key={baby.id} {...baby} />
      ))}
    </div>
  );
}

export default NamesList;

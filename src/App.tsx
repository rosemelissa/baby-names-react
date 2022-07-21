import NamesList from "./components/NamesList";
import babyNamesData from "./babyNamesData.json";

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

function App(): JSX.Element {
  return (
    <div id="babyNamesList">
      {sortedNames.map((baby) => (
        <NamesList key={baby.id} {...baby} />
      ))}
    </div>
  );
}

export default App;

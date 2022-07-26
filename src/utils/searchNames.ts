interface NamesListProps {
  id: number;
  name: string;
  sex: string;
}

export default function searchNames(
  searchQuery: string,
  namesList: NamesListProps[],
  gender: "all" | "f" | "m"
): NamesListProps[] {
  let searchedNames: NamesListProps[] = namesList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (gender !== "all") {
    searchedNames = searchedNames.filter((item) => item.sex === gender);
  }
  return searchedNames;
}

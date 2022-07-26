interface NamesListProps {
  id: number;
  name: string;
  sex: string;
}

export default function sortNames(
  namesList: NamesListProps[]
): NamesListProps[] {
  const sortedNames = [...namesList].sort(function (a, b) {
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
  return sortedNames;
}

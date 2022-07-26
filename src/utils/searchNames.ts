interface NamesListProps {
    id: number;
    name: string;
    sex: string;
  }

export default function searchNames(searchQuery: string, namesList: NamesListProps[]): NamesListProps[] {
    const searchedNames: NamesListProps[] = namesList.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return searchedNames;
}
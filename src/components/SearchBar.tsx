interface SearchBarProps {
    searchQuery: string;
      // eslint-disable-next-line
    setSearchQuery: Function;
}

export default function SearchBar({searchQuery, setSearchQuery}: SearchBarProps): JSX.Element {
    return (
        <input type='text' value={searchQuery} onChange={event => {setSearchQuery(event.target.value)}} placeholder='Search'></input>
    )
}
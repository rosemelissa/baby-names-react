interface SearchBarProps {
  searchQuery: string;
  // eslint-disable-next-line
  setSearchQuery: Function;
  gender: "all" | "f" | "m";
  // eslint-disable-next-line
  setGender: Function;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  gender,
  setGender,
}: SearchBarProps): JSX.Element {
  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
        placeholder="Search"
      ></input>
      <button type="button" onClick={() => setGender("all")}>
        All
      </button>
      <button type="button" onClick={() => setGender("f")}>
        Female
      </button>
      <button type="button" onClick={() => setGender("m")}>
        Male
      </button>
    </>
  );
}

import NamesList from "./components/NamesList";
import SearchBar from "./components/SearchBar";
import {useState} from 'react';

function App(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <NamesList searchQuery={searchQuery}/>
    </>
  );
}

export default App;

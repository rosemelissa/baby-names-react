import NamesList from "./components/NamesList";
import SearchBar from "./components/SearchBar";
import FavouritesList from "./components/FavouritesList"
import {babyNameInterface} from "./utils/types"
import {useState} from 'react';


function App(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [favouritesList, setFavouritesList] = useState<babyNameInterface[]>([]);
  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <FavouritesList favouritesList={favouritesList} setFavouritesList={setFavouritesList}/>
      <hr></hr>
      <NamesList searchQuery={searchQuery} favouritesList={favouritesList} setFavouritesList={setFavouritesList}/>
    </>
  );
}

export default App;

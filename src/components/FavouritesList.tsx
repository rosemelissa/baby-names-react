import FavouriteCard from './FavouriteCard'
import {babyNameInterface} from '../utils/types'

interface FavouritesListProps {
    favouritesList: babyNameInterface[];
    // eslint-disable-next-line
    setFavouritesList: Function;
}

function FavouritesList({favouritesList, setFavouritesList}: FavouritesListProps): JSX.Element {
    return (
        <>
            <h3>Favourite Names:</h3>
            <div id="favouriteNamesList">
                {favouritesList.map((baby) => (
                <FavouriteCard key={baby.id} favouritesList={favouritesList} setFavouritesList={setFavouritesList} baby={baby} />
                ))}
            </div>
        </>
    )
}

export default FavouritesList;
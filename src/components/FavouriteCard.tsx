import {babyNameInterface} from '../utils/types'

interface FavouriteCardProps {
    baby: babyNameInterface;    
    favouritesList: babyNameInterface[];
      // eslint-disable-next-line
    setFavouritesList: Function;
}
  
  function FavouriteCard({ baby, favouritesList, setFavouritesList }: FavouriteCardProps): JSX.Element {
    return (
      <p className={`babyName ${baby.sex}`} key={baby.id} onClick={() => setFavouritesList(favouritesList.filter(item => item.name !== baby.name))}>
        {baby.name} 
      </p>
    );
  }
  
  export default FavouriteCard;
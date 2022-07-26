import {babyNameInterface} from '../utils/types'


  interface NameCardProps {
    baby: babyNameInterface;
    favouritesList: babyNameInterface[];
    // eslint-disable-next-line
    setFavouritesList: Function;
  }
  
  function NameCard({ baby, favouritesList, setFavouritesList }: NameCardProps): JSX.Element {
    return (
      <p className={`babyName ${baby.sex}`} key={baby.id} onClick={() => setFavouritesList([...favouritesList, baby])}>
        {baby.name}
      </p>
    );
  }
  
  export default NameCard;
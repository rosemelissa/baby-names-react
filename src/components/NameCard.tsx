interface NameCardProps {
    id: number;
    name: string;
    sex: string;
  }
  
  function NameCard({ id, name, sex }: NameCardProps): JSX.Element {
    return (
      <p className={`babyName ${sex}`} key={id}>
        {name}
      </p>
    );
  }
  
  export default NameCard;
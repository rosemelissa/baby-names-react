interface NamesListProps {
  id: number;
  name: string;
  sex: string;
}

function NamesList({ id, name, sex }: NamesListProps): JSX.Element {
  return (
    <p className={`babyName ${sex}`} key={id}>
      {name}
    </p>
  );
}

export default NamesList;

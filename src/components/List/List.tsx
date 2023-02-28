import clsx from 'clsx';
import styles from './List.module.scss';

interface Props {
  currentItems: Array<Item>;
  onSetCurrent: (id: number) => void;
  currentId: number;
}

const List = ({
  currentItems,
  onSetCurrent,
  currentId
}: Props): JSX.Element => {
  return (
    <div>
      {currentItems.map(({ id }, key) => (
        <li key={key}>
          <button
            className={clsx({
              [styles.active]: currentId === Number(id)
            })}
            onClick={() => onSetCurrent(Number(id))}
          >
            {id}
          </button>
        </li>
      ))}
    </div>
  );
};

export default List;

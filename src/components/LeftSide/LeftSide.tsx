import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import LIMIT from '../../constants/pagination-limit';
import {
  nextPage,
  prevPage,
  setCurrentObject
} from '../../redux/slices/objectsSlice';
import { RootState } from '../../redux/store';
import styles from './LeftSide.module.scss';

const LeftSide = () => {
  const dispatch = useDispatch();

  const currentId = useSelector(
    (state: RootState) => state.items.current[0]?.id
  );

  const { objects, page, currentItems } = useSelector(
    (state: RootState) => state.items
  );

  const onSetCurrent = (id: number) => {
    dispatch(setCurrentObject(id));
  };

  const onNextPage = () => {
    if (page < Math.ceil(objects.length / LIMIT)) {
      dispatch(nextPage());
    }
  };

  const onPrevPage = () => {
    if (page > 1) {
      dispatch(prevPage());
    }
  };

  return (
    <>
      <ul className={styles.list}>
        {currentItems.map(({ id }, key) => (
          <li key={key}>
            <button
              className={clsx({
                [styles.active]: Number(currentId) === Number(id)
              })}
              onClick={() => onSetCurrent(Number(id))}
            >
              {id}
            </button>
          </li>
        ))}
        <span className={styles.page}>Страница: {page}</span>
        <div className={styles.pagination}>
          <button onClick={onPrevPage}>{String('<')}</button>
          <button onClick={onNextPage}>{String('>')}</button>
        </div>
      </ul>
    </>
  );
};

export default LeftSide;

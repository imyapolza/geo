import { useDispatch, useSelector } from 'react-redux';
import LIMIT from '../../constants/pagination-limit';
import {
  nextPage,
  prevPage,
  setCurrentObject
} from '../../redux/slices/objectsSlice';
import { RootState } from '../../redux/store';
import List from '../List/List';
import Pagination from '../Pagination/Pagination';
import styles from './LeftSide.module.scss';

const LeftSide = (): JSX.Element => {
  const dispatch = useDispatch();

  const currentId = useSelector(
    (state: RootState) => state.items.current[0]?.id
  );

  const { objects, page, currentItems } = useSelector(
    (state: RootState) => state.items
  );

  const maxPage = Math.ceil(objects.length / LIMIT);

  const onSetCurrent = (id: number) => {
    dispatch(setCurrentObject(id));
  };

  const onNextPage = () => {
    if (page < maxPage) {
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
        <List
          currentItems={currentItems}
          onSetCurrent={onSetCurrent}
          currentId={Number(currentId)}
        />
        <Pagination
          page={page}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
          maxPage={maxPage}
        />
      </ul>
    </>
  );
};

export default LeftSide;

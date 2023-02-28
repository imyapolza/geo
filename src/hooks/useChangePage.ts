import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import LIMIT from '../constants/pagination-limit';
import { setCurrentObject, setPage } from '../redux/slices/objectsSlice';
import { RootState } from '../redux/store';

const useChangePage = () => {
  const dispatch = useDispatch();

  const search = window.location.search;
  const queryPage = Number(search.split('?page=')[1]) || 1;

  const [_, setSearchParams] = useSearchParams();

  const { page, objects, currentItems } = useSelector((state: RootState) => state.items);

  useEffect(
    () => {
      if (page > 1) {
        setSearchParams({ page: String(page) });
      }

      if (page === 1) {
        setSearchParams({});
      }
    },
    [page]
  );

  useEffect(
    () => {
      dispatch(setPage(queryPage));
    },
    [window.location]
  );

  useEffect(
    () => {
      if (objects.length > 0) {
        const maxPage = Math.ceil(objects.length / LIMIT);

        if (queryPage > maxPage) {
          setSearchParams({ page: String(maxPage) });
          dispatch(setPage(maxPage));
        }
      }
    },
    [queryPage, objects.length]
    
  );

  useEffect(() => {
    dispatch(setCurrentObject(Number(currentItems[0]?.id)));
  }, [currentItems])
  
};

export default useChangePage;

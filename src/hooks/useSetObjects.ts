import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setObjects } from '../redux/slices/objectsSlice';
import data from '../large-file.json';
import { RootState } from '../redux/store';

const useSetObjects = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { objects } = useSelector((state: RootState) => state.items);

  useEffect(() => {
    dispatch(setObjects(data as Array<Item>));
  }, []);

  useEffect(
    () => {
      if (objects.length) {
        setIsLoading(false);
      }
    },
    [objects]
  );

  return isLoading;
};

export default useSetObjects;

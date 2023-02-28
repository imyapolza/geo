import LeftSide from '../components/LeftSide/LeftSide';
import MainSide from '../components/MainSide/MainSide';
import styles from './styles/MainPage.module.scss';

import useChangePage from '../hooks/useChangePage';
import useSetObjects from '../hooks/useSetObjects';

const MainPage = () => {
  const isLoading = useSetObjects();

  useChangePage();

  return (
    <>
      {isLoading ? (
        <span className={styles.loader}>Загрузка...</span>
      ) : (
        <>
          <section className={styles.wrapper}>
            <main className={styles.main}>
              <LeftSide />
              <MainSide />
            </main>
          </section>
        </>
      )}
    </>
  );
};

export default MainPage;

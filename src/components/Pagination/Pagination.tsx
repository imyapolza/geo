import clsx from 'clsx';
import styles from './Pagination.module.scss';

interface Props {
  page: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  maxPage: number;
}

const Pagination = ({
  page,
  onPrevPage,
  onNextPage,
  maxPage
}: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.page}>Страница: {page}</span>
      <div className={styles.pagination}>
        <button
          className={clsx({ [styles.hidden]: page === 1 })}
          onClick={onPrevPage}
        >
          {String('<')}
        </button>
        <button
          className={clsx({ [styles.hidden]: maxPage === page })}
          onClick={onNextPage}
        >
          {String('>')}
        </button>
      </div>
    </div>
  );
};

export default Pagination;

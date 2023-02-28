import clsx from 'clsx';
import styles from './MainSide.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FieldValue from '../FieldValue/FieldValue';

interface ObjectViewProps {
  field: object;
}

const ObjectView = ({ field }: ObjectViewProps) => {
  return (
    <>
      {field &&
        Object.entries(field).map((field, key) => (
          <span className={clsx(styles.field, styles.field__nested)} key={key}>
            <>
              {isNaN(Number(field[0])) && (
                <h3 className={styles.field__name}>{field[0] + ':'}</h3>
              )}

              {typeof field[1] === 'object' && <ObjectView field={field[1]} />}

              {!(typeof field[1] === 'object') && (
                <FieldValue
                  value={field[1]}
                  valueIsUrl={
                    field[0].includes('url') || field[0].includes('href')
                  }
                />
              )}
            </>
          </span>
        ))}
    </>
  );
};

const MainSide = () => {
  const items = useSelector((state: RootState) => state.items.current);

  return (
    <main className={styles.wrapper}>
      {items.map((item, key) => (
        <ObjectView field={item} key={key} />
      ))}
    </main>
  );
};

export default MainSide;

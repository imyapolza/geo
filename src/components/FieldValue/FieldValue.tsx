import clsx from 'clsx';
import validDateRGXP from '../../constants/validDateRGXP';
import dateSeparation from '../../utils/dateSeparation';
import styles from './FieldValue.module.scss';

interface Props {
  value: string | number;
  valueIsUrl: boolean;
}

const FieldValue = ({ value, valueIsUrl }: Props): JSX.Element => {
  if (!(typeof value === 'number') && validDateRGXP.test(value)) {
    const newDate = dateSeparation(value);

    return <span className={styles.resetMargin}>{newDate}</span>;
  }

  if (valueIsUrl && !(typeof value === 'number')) {
    return (
      <a href={value} target='_blank' rel='noreferrer'>
        {value}
      </a>
    );
  }

  if (typeof value === 'boolean') {
    return (
      <span
        className={clsx(value ? styles.true : styles.false, styles.resetMargin)}
      >
        {String(value)}
      </span>
    );
  }

  if (typeof value === 'string' || 'number') {
    return <span className={styles.resetMargin}>{value}</span>;
  }

  return <span className={styles.resetMargin}>{value}</span>;
};

export default FieldValue;

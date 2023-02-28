import addZero from './addZero';

const dateSeparation = (value: string) => {
  const date = new Date(value);

  const day = addZero(String(date.getDate()));
  const month = addZero(String(date.getMonth() + 1));
  const year = addZero(String(date.getFullYear()));

  return `${day}/${month}/${year}`;
};

export default dateSeparation;

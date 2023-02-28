const addZero = (digit: string) => {
  if (digit.length > 1) {
    return digit;
  }

  return `0${digit}`;
};

export default addZero;

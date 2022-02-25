export const findIndex = (array, value) => {
  const found = array.find((item) => item === value);
  return array.indexOf(found);
};

/* eslint-disable default-case */

export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const nums = arr.map((ell) => {
    return ell ** 2;
  });
  return Math.min(...nums);
};

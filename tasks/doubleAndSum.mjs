export const doubleAndSum = (arr) => {
  let double = arr.map((a) => a * 2);

  return double.reduce((a, b) => a + b, 0);
};


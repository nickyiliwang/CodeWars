const array1 = [0, 1, 2, 3, 4, 5].reduce(
  (accumulator, currentValue) => [currentValue, ...accumulator],
  []
);

const array1 = [0, 1, 2, 3, 4, 5].reduceRight(
  (accumulator, currentValue) => [...accumulator, currentValue],
  []
);

console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]

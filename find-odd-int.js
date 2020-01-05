// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let unique = [...new Set(A)];

  let answer = null;

  unique.forEach(num => {
    if (A.filter(x => x === num).length % 2 !== 0) {
      return (answer = unique[unique.indexOf(num)]);
    }
  });

  return answer;
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);

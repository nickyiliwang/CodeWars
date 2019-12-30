// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

function findMissingLetter(array) {
  const charToNumArr = array.map(c => c.toLowerCase().charCodeAt());
  let missingLetterNum = null;

  for (let i = 1; i < charToNumArr.length; i++) {
    if (charToNumArr[i] - charToNumArr[i - 1] !== 1) {
      missingLetterNum = charToNumArr[i - 1];
    }
  }

  if (array[0] === array[0].toUpperCase()) {
    return String.fromCharCode(missingLetterNum + 1).toUpperCase();
  }
  return String.fromCharCode(missingLetterNum + 1);
}

console.log(findMissingLetter(["O", "Q", "R", "S"]));

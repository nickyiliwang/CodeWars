// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  if (text.match(/[a-zA-Z]+/g)) {
    let cleanText = text
      .match(/[a-zA-Z]+/g)
      .join("")
      .toLowerCase();

    const alphabetObj = {};
    const alphaBets = "abcdefghijklmnopqrstuvwxyz";
    alphaBets.split("").forEach(str => {
      alphabetObj[str] = alphaBets.split("").indexOf(str) + 1;
    });

    return cleanText
      .split("")
      .map(str => {
        return (str = alphabetObj[str]);
      })
      .join(" ");
  } else {
    return "";
  }
}

alphabetPosition("0_5=)!?;");

// best solution

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map(c => c.charCodeAt() - 64)
    .join(" ");
}

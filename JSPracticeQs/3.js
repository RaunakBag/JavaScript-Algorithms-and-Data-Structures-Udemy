// Write a JS program to replace every character in a given string with the character following it in the alphabet.

// String.fromCharCode
// charCodeAt

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("abcd"));

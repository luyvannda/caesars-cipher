function rot13(str) {
  let lowerCase = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  const shiftedAlphabet = alphabet
    .slice(13)
    .concat(alphabet.slice(0, 13));

  console.log(shiftedAlphabet);


}

let result = rot13("SERR PBQR PNZC");
console.log(result);


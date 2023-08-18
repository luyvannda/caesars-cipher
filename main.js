function rot13(str) {
  let split = str.split(/[\s+]/g);
  let strArray = Array.from(split.join(""));
  console.log(strArray);

  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const shiftedAlphabet = alphabet
    .slice(13)
    .concat(alphabet.slice(0, 13));

  let output = strArray.map(char => String(shiftedAlphabet[
    alphabet.indexOf(char)]))

  return output.join("");
}

let result = rot13("SERR PBQR PNZC");
console.log(result);
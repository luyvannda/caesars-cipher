function rot13(str) {

  // turn string into array to use map() method
  let strArray = Array.from(str);
  console.log(strArray);

  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const shiftedAlphabet = alphabet
    .slice(13)
    .concat(alphabet.slice(0, 13));

  let output = strArray.map((char) => {

    // Check if the char is alphabetic if true shift the alphabet.

    if (char.toLowerCase() !== char.toUpperCase()) {

      return shiftedAlphabet[alphabet.indexOf(char)];

    } else {
      // if char is non-alphabetic like white space and punctuation, preserve them.  
      return char;
    }
  });

  return output.join("");
};

let result = rot13("SERR PBQR PNZC");
console.log(result);
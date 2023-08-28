//// Caesars Cipher 1 of 4 - using Object and .test Regex
const letterConvert = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

function rot131(str) {
  let strDecoded = "";
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      strDecoded += letterConvert[str[i]];
    } else if (/\W/.test(str[i])) {
      strDecoded += str[i];
    }
  }

  return strDecoded;
}
//// end 1 of 4

//// Caesars Cipher 2 of 4 - using two arrays and .test Regex
let alp = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let decoded = [
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
];

function rot132(str) {
  let strDecoded = "";
  for (let i = 0; i < str.length; i++) {
    let index = alp.indexOf(str[i]);
    if (/[A-Z]/.test(str[i])) {
      strDecoded += decoded[index];
    } else {
      strDecoded += str[i];
    }
  }

  return strDecoded;
}
//// end 2 of 4

//// Caesars Cipher 3 of 4 - using multidimensional array and .test Regex
let charToDecodedChar = [
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  [
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ],
];

function rot133(str) {
  let strDecoded = "";
  for (let i = 0; i < str.length; i++) {
    let index = charToDecodedChar[0].indexOf(str[i]);
    if (/[A-Z]/.test(str[i])) {
      strDecoded += charToDecodedChar[1][index];
    } else {
      strDecoded += str[i];
    }
  }

  return strDecoded;
}
//// end 3 of 4

//// Caesars Cipher 4 of 4 - using Unicodefunction rot13(str) {
function rot13(str) {
  let strDecoded = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let charUnicode = char.charCodeAt(0);
    let charUnicodeDecoded = charUnicode + 13;

    if (charUnicode >= 65 && charUnicode < 78) {
      strDecoded += String.fromCharCode(charUnicodeDecoded);
    } else if (charUnicode >= 78 && charUnicode <= 90) {
      strDecoded += String.fromCharCode(charUnicodeDecoded - 26);
    } else {
      strDecoded += str[i];
    }
  }

  return strDecoded;
}
//// end 4 of 4

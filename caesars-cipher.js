function rot13(str) {
 let decode = function(char, array) {
    switch (char) {
      case "A":
        array.push("N");
        break;
      case "B":
        array.push('O');
        break;
      case "C":
        array.push(["P"]);
        break;
      case "D":
        array.push(["Q"]);
        break;
      case "E":
        array.push(["R"]);
        break;
      case "F":
        array.push(["S"]);
        break;
      case "G":
        array.push(["T"]);
        break;
      case "H":
        array.push(["U"]);
        break;
      case "I":
        array.push(["V"]);
        break;
      case "J":
        array.push(["W"]);
        break;
      case "K":
        array.push(["X"]);
        break;
      case "L":
        array.push(["Y"]);
        break;
      case "M":
        array.push(["Z"]);
        break;
      case "N":
        array.push(["A"]);
        break;
      case "O":
        array.push(["B"]);
        break;
      case "P":
        array.push(["C"]);
        break;
      case "Q":
        array.push(["D"]);
        break;
      case "R":
        array.push(["E"]);
        break;
      case "S":
        array.push(["F"]);
        break;
      case "T":
        array.push(["G"]);
        break;
      case "U":
        array.push(["H"]);
        break;
      case "V":
        array.push(["I"]);
        break;
      case "W":
        array.push(["J"]);
        break;
      case "X":
        array.push(["K"]);
        break;
      case "Y":
        array.push(["L"]);
        break;
      case "Z":
        array.push(["M"]);
        break;
      case " ":
        array.push([" "]);
        break;
      case ".":
        array.push(["."]);
        break;
      case "!":
        array.push(["!"]);
        break;
      case "?":
        array.push(["?"]);
        break;
    }
  };

   const result = [];
  for (let i = 0; i < str.length; i++) {
    decode(str[i], result);
  }

  return result.join('');
}

console.log(rot13("SERR PBQR PNZC"));
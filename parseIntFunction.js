function convertToInteger(str) {
  
  return parseInt(str, 2) // converts the str to binary base 2 
}

console.log(convertToInteger("1010111")); // 87
console.log(convertToInteger("10011")); // 19
console.log(convertToInteger("111001")); // 57
console.log(convertToInteger("JamesBond")); //NaN
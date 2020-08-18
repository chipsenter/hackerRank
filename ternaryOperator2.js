function checkSign(num) {

  return (num > 0) ? "positive" 
  : (num === 0) ? "zero"
  : "negative"
  
  }
  
console.log(checkSign(10)); // Positive
console.log(checkSign(-10)); // Negative
console.log(checkSign(0)); // Zero
  
function rangeOfNumbers(startNum, endNum) {
  if (startNum - endNum === 0) {
    return [startNum];
  } else {
    const rangeArray = rangeOfNumbers(startNum, endNum - 1);
    rangeArray.push(endNum);
  
    return rangeArray;
  }
  
};
console.log(rangeOfNumbers(1,5)); //[ 1, 2, 3, 4, 5 ]
console.log(rangeOfNumbers(6,9)); // [6, 7, 8, 9]
console.log(rangeOfNumbers(4,4)); //[ 4 ]
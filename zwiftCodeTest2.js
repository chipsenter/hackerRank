///////////////////////
//
// Task: Provide a solution that performs the arithmatic operation using 'only addition'.
//
///////////////////////

/**
 * Perform a subtraction operation for two numbers.
 */
function subtractFunction(aValue, bValue) {
  
  console.log(`aValue ${aValue} bValue ${bValue}`);
  
  let flippedValue = bValue;
  
  if (flippedValue > 0) {
    flippedValue = flipValue(bValue);
  }
    
  return aValue + flippedValue;
}


function flipValue(thisValue) {
  
  let temp = 0;
  
  let addValue = thisValue > 0 ? -1 : 1;
  
  while (thisValue !== 0) {
    temp += addValue;
    thisValue += addValue;
    console.log('thisValue = ' + thisValue + ' temp = ' + temp);
  }
  
  return temp;
}

function multiplyFunction(aValue, bValue) {
  
}

function divideFunction(aValue, bValue) {
  
}

let subtractionResult = subtractFunction(5, 5);
console.log(subtractionResult);

let multiplicationResult = multiplyFunction(5, 2);
console.log(multiplicationResult);

let divisionResult = divideFunction(10, 2);
console.log(divisionResult);
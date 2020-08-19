const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr1.push('Johan');
arr2 = [...arr1];  // Will use a spread operator to copy arr1


console.log(arr2);

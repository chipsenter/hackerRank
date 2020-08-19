const sum = (...args) => {
  //const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(0,1,2)); // returns 3
console.log(sum(1,2,3,4)); // returns 10
console.log(sum(1,2,3,4,5)); // returns 15
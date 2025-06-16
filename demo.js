const demo = [1, 3];
console.log(...demo); //spread operator

function collectArgs(...args) {
  // rest operator
  console.log(`Collected Arguments:`, args);
}
collectArgs(1, 2, 3, 4, 5);

sr# spread                          rest
1   using in function calls         using in function definitions
2.  values given                    values collection = rest
3.  array become sequence of values sequence of values become arrays

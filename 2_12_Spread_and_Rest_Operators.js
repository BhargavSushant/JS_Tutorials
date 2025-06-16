/**
 * Spread and Rest Operators. 
 * Spread operator: by ...The spread and rest operators in JavaScript both use the ... syntax, but they have different purposes. The spread operator is used to expand an iterable (like an array or object) into its individual elements. The rest operator is used to collect multiple function parameters into a single array. In essence, the spread operator expands, while the rest operator condenses. 
Spread Operator:
Purpose: Expands an iterable (array, object, string) into individual elements. 
Usage:
Array literals: [...arr1, ...arr2] to create a new array by merging arr1 and arr2. 
Function calls: myFunction(...args) to pass elements of args as individual arguments.
Object literals: {...obj1, ...obj2} to create a new object with properties from obj1 and obj2. 
String conversion: '...str' will convert the string to an array of characters. 
Example: const newArray = [...oldArray,; creates a new array with the elements of oldArray followed by 4 and 5. 
Rest Operator:
Purpose: Collects multiple function parameters into a single array. 
Usage:
Function parameters: function myFunction(...args) { ... } where args will be an array containing all the arguments passed to the function. 
Array destructuring: const [first, second, ...rest] = array; to extract the first two elements and the rest into a new array. 
Example:
JavaScript

    function sum(...numbers) {
      return numbers.reduce((acc, num) => acc + num, 0);
    }
    console.log(sum(1, 2, 3, 4)); // Output: 10
Here, numbers will be an array ``.
Key Differences Summarized:
Placement: The rest operator is used only in function parameters or destructuring, while the spread operator is used in various contexts like array literals, function calls, and object literals. 
Direction: The spread operator expands iterables, while the rest operator collects multiple elements into a single iterable (usually an array). 
Purpose: Spread is for expanding, and rest is for collecting/grouping. 
 */

// ✅ 2.12 Spread and Rest Operators
// 📑 Table of Contents
// 2.12.1 Spread Operator with Arrays
// 2.12.2 Spread Operator with Objects
// 2.12.3 Spread Operator in Function Calls
// 2.12.4 Rest Operator in Function Parameters
// 2.12.5 Rest Operator with Arrays (Destructuring)
// 2.12.6 Rest Operator with Objects (Destructuring)
// 2.12.7 Rest Operator in Function Parameters with Destructured Objects

// 2.12.1 Spread Operator with Arrays
// The spread operator (...) copies elements from one array into another.
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(`Original Numbers: ${numbers}`);
console.log(`New Numbers: ${newNumbers}`); //
console.log(newNumbers); //

// 2.12.2 Spread Operator with Objects
// The spread operator copies key-value pairs from one object to another.
const user = {
  id: 1,
  name: "Alice",
  age: 30,
};
const updatedUser = { ...user, city: "New York" };
console.log(`Original User:`, user);
console.log(`Updated User:`, updatedUser);

// 2.12.3 Spread Operator in Function Calls
// Spread syntax unpacks array elements into individual function arguments.
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
const values = [1, 2, 3];
const total = sum(...values, 4, 5);
console.log(`Sum of values: ${total}`);

//****************************************************** */
// 2.12.4 Rest Operator in Function Parameters
// The rest operator collects multiple arguments into a single array.
function collectArgs(...args) {
  console.log(`Collected Arguments:`, args);
  console.log(args);
}
collectArgs(1, 2, 3, 4, 5);
collectArgs("A", "B", "Mayank", "C", "D");

// Another example using a named parameter followed by rest
function calculateTotal(base, ...prices) {
  return base + prices.reduce((sum, price) => sum + price, 0);
}
const totalCost = calculateTotal(100, 20, 30, 50);
console.log(`Total Cost: ${totalCost}`);

// 2.12.5 Rest Operator with Arrays (Destructuring)
// The rest operator can collect remaining elements in an array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(`First: ${first}, Second: ${second}, Rest:`, rest);

// 2.12.6 Rest Operator with Objects (Destructuring)
// The rest operator gathers remaining properties of an object into another object
const personDetails = {
  name: "Alice",
  age: 30,
  city: "New York",
};
const { name, ...otherDetails } = personDetails;
console.log(`Name: ${name}, Other Details:`, otherDetails);

// 2.12.7 Rest Operator in Function Parameters with Destructured Objects
// The rest operator collects unspecified object properties in function parameters
function displayInfo({ name, age, ...otherInfo }) {
  console.log(`Name: ${name}, Age: ${age}, Other Info:`, otherInfo);
}
displayInfo({
  name: "Bob",
  age: 25,
  city: "Los Angeles",
  occupation: "Engineer",
  hobbies: ["reading", "gaming"],
});

const demo = [1, 3];
console.log(...demo); //

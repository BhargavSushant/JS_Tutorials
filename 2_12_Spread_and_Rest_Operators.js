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
console.log(`New Numbers: ${newNumbers}`);

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
function sum(a, b, c) {
  return a + b + c;
}
const values = [1, 2, 3];
const total = sum(...values);
console.log(`Sum of values: ${total}`);

// 2.12.4 Rest Operator in Function Parameters
// The rest operator collects multiple arguments into a single array.
function collectArgs(...args) {
  console.log(`Collected Arguments:`, args);
}
collectArgs(1, 2, 3, 4, 5);

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

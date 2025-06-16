// 2.13 Arrow Functions
// Arrow functions provide a concise syntax for writing functions in JavaScript.
// They are particularly useful for writing short functions and maintaining the context of `this`.
// Arrow functions do not have their own `this` context, which makes them ideal for methods that need to access the surrounding context.

// ✅ 12.13 Arrow Functions

// 📑 Table of Contents
// 12.13.1 Basic Arrow Function Syntax
// 12.13.2 Arrow Functions with Implicit Return
// 12.13.3 Arrow Functions with Parameters
// 12.13.4 Arrow Functions and `this` Keyword
// 12.13.5 Arrow Functions in Callbacks
// 12.13.6 Returning Objects from Arrow Functions
// 12.13.7 Limitations of Arrow Functions

// 12.13.1 Basic Arrow Function Syntax
// Arrow functions provide a shorter syntax compared to traditional function expressions.
const greet = () => {
  console.log("Hello, world!");
};
greet();

// 12.13.2 Arrow Functions with Implicit Return
// If the body contains only a single expression, you can omit the braces and the return keyword.
const add = (a, b) => a + b;
console.log(`Add: ${add(2, 3)}`);

// 12.13.3 Arrow Functions with Parameters
// Arrow functions support zero, one, or multiple parameters.
const square = (x) => x * x;
console.log(`Square: ${square(5)}`);

const multiply = (a, b) => a * b;
console.log(`Multiply: ${multiply(4, 5)}`);

// 12.13.4 Arrow Functions and `this` Keyword
// Arrow functions do not have their own `this`; they inherit `this` from the surrounding context.
const person = {
  name: "Alice",
  hobbies: ["reading", "cycling"],
  showHobbies: function () {
    this.hobbies.forEach((hobby) => {
      console.log(`${this.name} enjoys ${hobby}`);
    });
  },
};
person.showHobbies();

// 12.13.5 Arrow Functions in Callbacks
// Arrow functions are commonly used in array methods like map, filter, and forEach.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);
console.log(`Doubled Numbers:`, doubled);

// 12.13.6 Returning Objects from Arrow Functions
// Wrap the object in parentheses to return an object literal from an arrow function.
const createUser = (id, name) => ({ id, name });
console.log(`Created User:`, createUser(1, "Bob"));

// 12.13.7 Limitations of Arrow Functions
// Arrow functions cannot be used as constructors and do not bind their own `this`, `arguments`, or `super`.
const Timer = () => {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
};

// Timer(); // ❌ This will not work as expected due to arrow function and `this` usage

// Instead, use regular function if you need `this` to refer to the instance:
function ProperTimer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
// const t = new ProperTimer(); // ✅ Works correctly

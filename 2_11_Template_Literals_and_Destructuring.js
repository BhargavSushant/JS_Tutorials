console.log("Template Literals and Destructuring");
// Template Literals
// Using backticks for multi-line strings and string interpolation
// we can use ${} to embed expressions

const cname = "John";
const age = 30;
const greeting = `Hello, my name is ${cname} and I am ${age} years old.`;
console.log(greeting);

// Destructuring Assignment
// Destructuring allows unpacking values from arrays or properties from objects into distinct variables, name matters,
const person = {
  pname: "Alice",
  age: 25,
  city: "New York",
};
const { pname1, my_age, city } = person;
console.log(`Name: ${pname}, Age: ${my_age}, City: ${city}`);

// Array Destructuring
// Destructuring will unpack the array in order of the elements
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(`first=${first}, second=${second}, third=${third}`);

// Nested Destructuring
const user = {
  id: 1,
  info: {
    name: "Bob",
    age: 28,
  },
};
const {
  id,
  info: { name: userName, age: userAge },
} = user;
console.log(`User ID: ${id}, Name: ${userName}, Age: ${userAge}`);

// Default Values in Destructuring
const settings = {
  theme: "dark",
};
const { theme, language = "English" } = settings;
console.log(`Theme: ${theme}, Language: ${language}`);

// Function Parameter Destructuring
function displayUser({ name, age }) {
  console.log(`User Name: ${name}, Age: ${age}`);
}
displayUser({ name: "Charlie", age: 22 });

// Destructuring with Rest Operator
const fruits = ["apple", "banana", "cherry", "date"];
const [A, B, C, D] = fruits;
console.log(
  `First Fruit: ${A}, Second Fruit: ${B}, Third Fruit: ${C}, Fourth Fruit: ${D}`
);
const [firstFruit, secondFruit, ...otherFruits] = fruits;
console.log(
  `First Fruit: ${firstFruit}, second fruit: ${secondFruit}, Other Fruits: ${otherFruits}`
);

// rest operator = the rest operator is used to collect the remaining elements of an array into a new array. In this case, it collects all fruits after the first two into `otherFruits`.

// Destructuring in Function Return
function getCoordinates() {
  return [10, 20, 30];
}
const [x, y, z] = getCoordinates();
console.log(`Coordinates: x=${x}, y=${y}, z=${z}`);

// Destructuring with Nested Arrays
const nestedArray = [
  [1, 2],
  [3, 4],
];
const [[a, b], [c, d]] = nestedArray;
console.log(`a=${a}, b=${b}, c=${c}, d=${d}`);

// Destructuring with Nested Arrays
const nestedArray2x3 = [
  [1, 2, 3],
  [4, 5, 6],
];
const [[x1, x2, x3], [y1, y2, y3]] = nestedArray2x3;
console.log(`x1=${x1}, x2=${x2}, x3=${x3}, y1=${y1}, y2=${y2}, y3=${y3}`);

// Destructuring with Objects in Arrays
const people = [
  { name: "Dave", age: 35 },
  { name: "Eve", age: 29 },
];
const [firstPerson, secondPerson] = people;
console.log(`First Person: ${firstPerson.name}, Age: ${firstPerson.age}`);
console.log(`Second Person: ${secondPerson.name}, Age: ${secondPerson.age}`);

// Destructuring with Function Arguments
function printDetails({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
printDetails({ name: "Frank", age: 40 });

// Destructuring with Default Values in Function Parameters
function greet({ name = "Guest", age = 18 } = {}) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet(); // No arguments, uses default values
greet({ name: "Grace", age: 30 }); // Uses provided values
greet({ name: "Hank" }); // Uses default age
greet({ age: 25 }); // Uses default name
greet({ name: "Ivy", age: 22 }); // Uses provided values

// Destructuring with Nested Objects
const employee = {
  id: 101,
  details: {
    name: "Jack",
    position: "Developer",
    salary: 70000,
  },
};
const {
  id: empId,
  details: { name: empName, position, salary },
} = employee;

console.log(
  `Employee ID: ${empId}, Name: ${empName}, Position: ${position}, Salary: ${salary}`
);

// Destructuring with Arrays and Objects
const data = [
  { id: 1, value: "A" },
  { id: 2, value: "B" },
  { id: 3, value: "C" },
];
const [
  { id: firstId, value: firstValue },
  { id: secondId, value: secondValue },
] = data;

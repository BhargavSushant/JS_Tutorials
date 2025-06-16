// ✅ 2.15 Introduction to the Document Object Model (DOM)

/*
📘 Introduction:
The DOM (Document Object Model) is a programming interface provided by browsers to allow scripts
(JavaScript) to dynamically access and manipulate the structure, content, and style of HTML documents.
It represents the page as a tree of nodes (elements, attributes, text, etc.), enabling dynamic interaction.

🔍 Why It's Important:
- Core to client-side interactivity in web development.
- Enables DOM manipulation for events, animations, validations, and UI updates.
- Foundation for frameworks like React, Angular, and Vue.

🛠️ Common Use Cases:
- Changing content (text/images) dynamically
- Responding to user input or clicks
- Adding/removing HTML elements
- Validating form data before submission

📝 Recommendation:
- Understand DOM traversal and manipulation using native methods (`getElementById`, `querySelector`, etc.).
- Practice event handling (`addEventListener`).
- Learn how the DOM impacts reflows and performance.
- This knowledge forms the **foundation for building SPAs** (Single Page Applications) in modern frameworks like React/Next.js.
*/

// 📑 Table of Contents
// 2.15.1 DOM Structure and Tree
// 2.15.2 Selecting Elements
// 2.15.3 Modifying Elements
// 2.15.4 Adding/Removing Elements
// 2.15.5 Event Handling
// 2.15.6 Practical Example

// 2.15.1 DOM Structure and Tree
// HTML gets parsed into a DOM tree
// Example:
// <body>
//   <div id="app">
//     <h1>Hello</h1>
//   </div>
// </body>
// becomes nodes: body → div#app → h1 → "Hello"

// 2.15.2 Selecting Elements
const heading = document.getElementById("main-heading");
const button = document.querySelector(".btn");
const paragraphs = document.querySelectorAll("p");

// 2.15.3 Modifying Elements
heading.textContent = "Updated Title";
heading.style.color = "blue";
button.classList.add("active");

// 2.15.4 Adding/Removing Elements
const newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph";
document.body.appendChild(newPara);

const removeTarget = document.querySelector(".remove-me");
removeTarget.remove();

// 2.15.5 Event Handling
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// 2.15.6 Practical Example
// Update text on button click
const counterBtn = document.getElementById("counter-btn");
const countDisplay = document.getElementById("count");
let count = 0;

counterBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = `Count: ${count}`;
});

/*
📌 Future Reference:
Understanding how the DOM works is crucial for:
- Virtual DOM in React
- DOM diffing in frameworks
- Optimizing performance by minimizing DOM updates
- Building accessible, responsive, interactive user interfaces
*/

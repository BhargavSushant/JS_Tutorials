// ==============================================
// Topic: 2_18_Event_Handling_and_Event_Bubbling
// ==============================================

// 📘 Introduction:
// ----------------
// Event handling is a way for JavaScript to respond to user interactions like clicks, typing, mouse movement, etc.
// Event bubbling is a mechanism in the DOM where events propagate (bubble) from the deepest nested element
// up to the root element. Understanding this is essential for efficient UI interactions and clean code structure.

// ==========================
// 📚 Table of Contents:
// ==========================
// 2.18.1 - Basic Event Handling
// 2.18.2 - Handling Multiple Events
// 2.18.3 - The `this` Keyword in Event Handlers
// 2.18.4 - Event Object and Its Properties
// 2.18.5 - Event Bubbling Explained
// 2.18.6 - Stop Event Bubbling using `stopPropagation()`
// 2.18.7 - Event Delegation
// 2.18.8 - Form Handling and Basic Validation

// ==============================
// 2.18.1 - Basic Event Handling
// ==============================

document.getElementById("btnClick").addEventListener("click", function () {
  alert("Button clicked!");
});

// ================================
// 2.18.2 - Handling Multiple Events
// ================================

const inputBox = document.getElementById("nameInput");

inputBox.addEventListener("focus", function () {
  console.log("Input box focused");
});

inputBox.addEventListener("blur", function () {
  console.log("Input box lost focus");
});

// =============================================
// 2.18.3 - The `this` Keyword in Event Handlers
// =============================================

const colorBox = document.getElementById("colorBox");

colorBox.addEventListener("click", function () {
  this.style.backgroundColor = "lightgreen";
});

// ============================================
// 2.18.4 - Event Object and Its Properties
// ============================================

document
  .getElementById("mouseArea")
  .addEventListener("mousemove", function (event) {
    console.log(`Mouse at X: ${event.clientX}, Y: ${event.clientY}`);
  });

// ================================
// 2.18.5 - Event Bubbling Explained
// ================================

document.getElementById("outer").addEventListener("click", function () {
  console.log("Outer Div Clicked");
});

document.getElementById("inner").addEventListener("click", function () {
  console.log("Inner Div Clicked");
});

// =======================================================
// 2.18.6 - Stop Event Bubbling using `stopPropagation()`
// =======================================================

document.getElementById("noBubble").addEventListener("click", function (event) {
  event.stopPropagation(); // Stops the event from reaching parent elements
  console.log("Clicked noBubble button. Bubbling stopped.");
});

// ==============================
// 2.18.7 - Event Delegation
// ==============================

document.getElementById("list").addEventListener("click", function (e) {
  if (e.target && e.target.matches("li")) {
    alert(`You clicked on item: ${e.target.textContent}`);
  }
});

// ==========================================
// 2.18.8 - Form Handling and Basic Validation
// ==========================================

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("formName").value.trim();
  const email = document.getElementById("formEmail").value.trim();
  let errorMessage = "";

  // Validate Name
  if (name.length < 3) {
    errorMessage += "Name must be at least 3 characters long.\n";
  }

  // Validate Email (very basic check)
  if (!email.includes("@") || !email.includes(".")) {
    errorMessage += "Please enter a valid email address.\n";
  }

  if (errorMessage) {
    alert("Validation Error:\n" + errorMessage);
  } else {
    alert("Form submitted successfully!");
    // You can submit to a server here or reset the form
    this.reset(); // Optional: Reset form after success
  }
});

// ✅ Explanation:
// - The `submit` event is captured on the form.
// - We prevent default form submission using `e.preventDefault()`.
// - Then we validate fields manually and give feedback to the user.
// - You can customize the validation further for stronger rules.

// ===============================
// ✅ Recommendations & Best Practices
// ===============================

// ✔ Always clean up event listeners in single-page apps.
// ✔ Use event delegation to improve performance in dynamic UIs.
// ✔ Use `stopPropagation()` only when needed—don’t abuse it.
// ✔ Keep form validation clear and user-friendly.
// ✔ Use `trim()` to remove leading/trailing spaces in inputs.
// ✔ More advanced forms can use regex, or libraries like Joi or Yup for validation.

// 🔚 Summary:
// Event handling forms the backbone of interactive web apps.
// Whether it's a click, hover, or form submission — knowing how events work, bubble, and can be controlled
// allows you to build powerful, clean, and efficient interfaces.

// =========================
// 🧪 Sample HTML Elements:
// =========================

// <button id="btnClick">Click Me</button>

// <input id="nameInput" placeholder="Enter your name">

// <div id="colorBox" style="width:100px; height:100px; background:gray;">Click me</div>

// <div id="outer" style="padding:20px; background-color:lightblue;">
//   Outer Div
//   <div id="inner" style="margin-top:10px; background-color:lightcoral;">Inner Div</div>
// </div>

// <button id="noBubble">Don't Bubble</button>

// <ul id="list">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// <form id="myForm">
//   <input type="text" id="formName" placeholder="Your Name">
//   <input type="email" id="formEmail" placeholder="Your Email">
//   <button type="submit">Submit</button>
// </form>

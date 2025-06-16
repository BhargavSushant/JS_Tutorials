// ==============================================
// Topic: 2_19_Dynamic_HTML_Manipulation
// ==============================================

// 📘 Introduction:
// ----------------
// Dynamic HTML manipulation refers to modifying the structure, content, and style of HTML elements using JavaScript.
// This allows you to create interactive, real-time user experiences without reloading the page.
// You can add, update, or remove elements on the fly using the DOM API (Document Object Model).

// ==========================
// 📚 Table of Contents:
// ==========================
// 2.19.1 - Accessing and Changing Text Content
// 2.19.2 - Creating and Appending Elements
// 2.19.3 - Removing Elements
// 2.19.4 - Changing Attributes Dynamically
// 2.19.5 - Modifying CSS Styles Dynamically
// 2.19.6 - Using innerHTML vs textContent
// 2.19.7 - Inserting Elements at Specific Positions

// ===========================================
// 2.19.1 - Accessing and Changing Text Content
// ===========================================

document.getElementById("textTarget").textContent = "Text updated dynamically!";

// ====================================
// 2.19.2 - Creating and Appending Elements
// ====================================

const newItem = document.createElement("li");
newItem.textContent = "I was added dynamically!";
document.getElementById("dynamicList").appendChild(newItem);

// ===========================
// 2.19.3 - Removing Elements
// ===========================

document.getElementById("removeBtn").addEventListener("click", function () {
  const item = document.getElementById("removableItem");
  if (item) item.remove();
});

// =======================================
// 2.19.4 - Changing Attributes Dynamically
// =======================================

document
  .getElementById("image")
  .setAttribute("src", "https://via.placeholder.com/150");

// ========================================
// 2.19.5 - Modifying CSS Styles Dynamically
// ========================================

document.getElementById("styleBtn").addEventListener("click", function () {
  const box = document.getElementById("styleBox");
  box.style.backgroundColor = "yellow";
  box.style.border = "2px dashed black";
});

// ===========================================
// 2.19.6 - Using innerHTML vs textContent
// ===========================================

document.getElementById("htmlExample").innerHTML =
  "<strong>Bold Text via innerHTML</strong>";
document.getElementById("textExample").textContent =
  "<strong>Shown as plain text</strong>";

// ==============================================
// 2.19.7 - Inserting Elements at Specific Positions
// ==============================================

const newPara = document.createElement("p");
newPara.textContent = "Inserted before the list.";
const targetList = document.getElementById("dynamicList");
targetList.parentNode.insertBefore(newPara, targetList);

// ====================================
// ✅ Recommendations & Best Practices
// ====================================

// ✔ Always check for the existence of an element before modifying it to avoid runtime errors.
// ✔ Use `textContent` over `innerHTML` when you don’t need HTML tags — it’s safer (prevents XSS attacks).
// ✔ Use `document.createElement()` instead of setting `innerHTML` when creating elements dynamically.
// ✔ Remove unused elements with `.remove()` to keep the DOM clean and efficient.
// ✔ For large changes, consider using `DocumentFragment` to reduce reflows and repaints.

// 🔚 Summary:
// Dynamic manipulation is what makes web pages interactive and responsive. From adding new content,
// updating styles, or reacting to user actions, DOM manipulation is essential for front-end developers.

// =========================
// 🧪 Sample HTML Elements:
// =========================

// <div id="textTarget">Original Text</div>

// <ul id="dynamicList">
//   <li>Item 1</li>
// </ul>

// <div id="removableItem">Click button to remove me</div>
// <button id="removeBtn">Remove Element</button>

// <img id="image" src="" alt="Image will be loaded here">

// <div id="styleBox" style="width:100px; height:100px; background:lightgray;"></div>
// <button id="styleBtn">Change Style</button>

// <div id="htmlExample"></div>
// <div id="textExample"></div>

// ==============================================
// Topic: 2_20_DOM_Traversal_and_Manipulation
// ==============================================

// 📘 Introduction:
// ----------------
// DOM Traversal refers to navigating between elements in the DOM tree.
// This is useful for finding siblings, children, or parents of elements to manipulate them dynamically.

// ==========================
// 📚 Table of Contents:
// ==========================
// 2.20.1 - Accessing Parent, Child, and Sibling Nodes
// 2.20.2 - Looping Through Child Nodes
// 2.20.3 - Finding Elements with Closest Ancestor
// 2.20.4 - Filtering Elements by Tag or Class

// ===================================================
// 2.20.1 - Accessing Parent, Child, and Sibling Nodes
// ===================================================

const item2 = document.getElementById("item2");

console.log("Parent:", item2.parentNode); // Parent <ul>
console.log("Next Sibling:", item2.nextElementSibling); // item3
console.log("Previous Sibling:", item2.previousElementSibling); // item1
console.log("First Child:", item2.parentNode.firstElementChild); // item1

// ✅ Explanation:
// `parentNode`, `nextElementSibling`, `previousElementSibling`, and `firstElementChild` help navigate the DOM tree.

// ======================================
// 2.20.2 - Looping Through Child Nodes
// ======================================

const list = document.getElementById("domList");

for (let child of list.children) {
  child.style.color = "blue";
}

// ✅ Explanation:
// `children` returns a live HTMLCollection of child elements (excluding text nodes).

// ==========================================
// 2.20.3 - Finding Elements with Closest Ancestor
// ==========================================

document.getElementById("nestedItem").addEventListener("click", function () {
  const closestList = this.closest("ul");
  console.log("Closest UL:", closestList);
});

// ✅ Explanation:
// `closest(selector)` traverses up the DOM to find the nearest ancestor that matches the selector.

// ==========================================
// 2.20.4 - Filtering Elements by Tag or Class
// ==========================================

const allDivs = document.querySelectorAll("div");

allDivs.forEach((div) => {
  if (div.classList.contains("highlight")) {
    div.style.backgroundColor = "lightyellow";
  }
});

// ✅ Explanation:
// We use `querySelectorAll` and `classList.contains()` to filter and style certain elements.

// ====================================
// ✅ Recommendations & Best Practices
// ====================================

// ✔ Use `querySelector()` and `querySelectorAll()` for flexible CSS-style selection.
// ✔ Prefer `closest()` over manual parentNode chaining.
// ✔ Avoid unnecessary DOM traversal inside performance-critical loops.
// ✔ Be careful with `.children` vs `.childNodes`: the former returns elements only.

// 🔚 Summary:
// DOM traversal helps you interact with related elements, making your scripts more modular and reusable.

// =========================
// 🧪 Sample HTML Elements:
// =========================

// <ul id="domList">
//   <li id="item1">Item 1</li>
//   <li id="item2">Item 2</li>
//   <li id="item3">Item 3</li>
// </ul>

// <ul>
//   <li><span id="nestedItem">Nested Item (click me)</span></li>
// </ul>

// <div class="highlight">Div 1</div>
// <div>Div 2</div>
// <div class="highlight">Div 3</div>

// ✅ 2.14 Promises and Asynchronous Programming

/*
📘 Introduction:
JavaScript is single-threaded, which means it can only execute one operation at a time.
To handle long-running tasks like API requests or timers without blocking the main thread,
JavaScript uses asynchronous programming. Promises and async/await are modern ways to write
non-blocking code that is cleaner, more readable, and avoids the pyramid of doom caused by nested callbacks.

🔍 Why It's Important:
- Allows efficient execution of slow tasks (e.g. fetching data from a server).
- Makes code more maintainable compared to callbacks.
- Essential for working with APIs, file I/O, and user interactions.

🛠️ Common Use Cases:
- Fetching data from APIs
- Delaying actions (setTimeout)
- Performing tasks concurrently (file uploads, background sync)

📝 Recommendation:
- Prefer `async/await` for most use cases due to readability.
- Use `Promise.all` for parallel tasks and `Promise.race` when you need the fastest result.
- Always include error handling (`catch` or `try/catch`) to prevent silent failures.
*/

// 📑 Table of Contents
// 2.14.1 Synchronous vs Asynchronous
// 2.14.2 Introduction to Promises
// 2.14.3 Promise States
// 2.14.4 Creating a Promise
// 2.14.5 Consuming Promises with then/catch
// 2.14.6 Chaining Promises
// 2.14.7 Promise.all and Promise.race
// 2.14.8 Async/Await Syntax
// 2.14.9 Error Handling in Async/Await

// 2.14.1 Synchronous vs Asynchronous
// Synchronous code runs line by line.
console.log("Start");
console.log("End");

// Asynchronous code uses callbacks/promises to defer execution.
console.log("Start");
setTimeout(() => console.log("Async Call"), 1000);
console.log("End");

// 2.14.2 Introduction to Promises
// A Promise represents the eventual result of an asynchronous operation.

// 2.14.3 Promise States
// A Promise has three states: Pending, Fulfilled, Rejected.

// 2.14.4 Creating a Promise
const asyncTask = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      success ? resolve("Task Completed") : reject("Task Failed");
    }, 1000);
  });
};

// 2.14.5 Consuming Promises with then/catch
asyncTask()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// 2.14.6 Chaining Promises
const step1 = () => Promise.resolve("Step 1 complete");
const step2 = () => Promise.resolve("Step 2 complete");

step1()
  .then((result) => {
    console.log(result);
    return step2();
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// 2.14.7 Promise.all and Promise.race
const p1 = new Promise((res) => setTimeout(() => res("One"), 1000));
const p2 = new Promise((res) => setTimeout(() => res("Two"), 2000));

Promise.all([p1, p2]).then((results) => console.log("All: ", results));
Promise.race([p1, p2]).then((result) => console.log("Race: ", result));

// 2.14.8 Async/Await Syntax
// Allows writing asynchronous code like synchronous code
const fetchData = async () => {
  try {
    const response = await asyncTask();
    console.log("Async/Await Result:", response);
  } catch (err) {
    console.error("Async/Await Error:", err);
  }
};
fetchData();

// 2.14.9 Error Handling in Async/Await
const failingTask = () => {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Something went wrong"), 1000);
  });
};

const handleError = async () => {
  try {
    await failingTask();
  } catch (err) {
    console.error("Caught Error:", err);
  }
};
handleError();

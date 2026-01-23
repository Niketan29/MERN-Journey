# Day 5 Report — Promises & Async/Await

## ✅ Promise vs async/await
Promises use `.then()` and `.catch()` to handle async results.
`async/await` is a cleaner way to write the same promise code like normal step-by-step code.
Both work the same internally, but async/await is easier to read and debug.

## ✅ What is Promise.all?
`Promise.all()` runs multiple promises in parallel and returns results in an array when all are successful.
If any one promise fails, the entire `Promise.all()` fails and goes to `.catch()`.

## ✅ What does finally do?
`finally()` runs always after a promise completes (success or fail), mostly used for cleanup.

## ✅ What I learned today (5 points)
1. How to create promises using `new Promise()` with resolve and reject.
2. How to handle promise results using `.then()`, errors using `.catch()`, and cleanup using `.finally()`.
3. How to use async/await with try/catch for cleaner API calls.
4. How to handle API errors using `response.status` and `response.ok` (403 rate limit, 404 not found).
5. How to run multiple API calls in parallel using `Promise.all()` and get results together.
